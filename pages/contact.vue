<script setup lang="ts">
import { ref, reactive } from 'vue'

useHead({
  title: 'Contact — YebaSMS',
  meta: [
    {
      name: 'description',
      content: 'Contactez l\'équipe YebaSMS en RDC. Une question sur l\'API WhatsApp Business ou nos tarifs ? Notre équipe vous répond sous 24h ouvrées.',
    },
  ],
})

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
}
</script>

<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="pt-24 pb-12 md:pt-32 md:pb-16">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-4">
        <h1 class="font-display text-4xl md:text-5xl font-extrabold text-[#06080C] tracking-tight">
          Parlons de votre projet
        </h1>
        <p class="text-lg text-gray-600 max-w-xl mx-auto">
          Notre équipe basée en RDC vous répond sous 24h ouvrées.
        </p>
      </div>
    </section>

    <!-- Contenu Contact (Coordonnées + Formulaire) -->
    <section class="pb-24 md:pb-32">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <!-- Colonne Infos / Coordonnées -->
        <div class="lg:col-span-1 space-y-8 bg-gray-50/50 p-8 rounded-2xl border border-gray-200/80 h-fit">
          <div class="space-y-2">
            <h3 class="font-bold text-lg text-[#06080C]">Coordonnées</h3>
            <p class="text-sm text-gray-500">Retrouvez-nous ou contactez-nous directement par téléphone ou e-mail.</p>
          </div>

          <div class="space-y-6 text-sm">
            <div class="flex items-start gap-3 text-gray-700">
              <svg class="w-5 h-5 text-[#25d366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <div>
                <strong class="block text-[#06080C]">République démocratique du Congo</strong>
                <span class="text-gray-500 text-xs">Siège Social YebaSMS / Yebapay Group</span>
              </div>
            </div>

            <a href="tel:+243894531708" class="flex items-center gap-3 text-gray-700 hover:text-[#25d366] transition-colors">
              <svg class="w-5 h-5 text-[#25d366] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>+243 894 531 708</span>
            </a>

            <a href="mailto:contact@yebasms.com" class="flex items-center gap-3 text-gray-700 hover:text-[#25d366] transition-colors">
              <svg class="w-5 h-5 text-[#25d366] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>contact@yebasms.com</span>
            </a>
          </div>

          <div class="pt-6 border-t border-gray-200">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-xs font-mono text-emerald-700">
              <span class="w-2 h-2 rounded-full bg-[#25d366] animate-pulse"></span>
              Support technique actif
            </div>
          </div>
        </div>

        <!-- Colonne Formulaire (Celui préparé précédemment) -->
        <div class="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10">
          <Transition name="fade-swap" mode="out-in">
            <div v-if="isSubmitted" key="success" class="text-center py-12 space-y-4">
              <div class="mx-auto w-14 h-14 rounded-full border-2 border-[#06080C] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#06080C]">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 class="font-display text-xl font-bold text-[#06080C]">Message envoyé</h3>
              <p class="text-gray-600 max-w-sm mx-auto text-sm">
                Merci de nous avoir contactés. Notre équipe revient vers vous rapidement.
              </p>
              <button
                @click="isSubmitted = false"
                class="mt-4 inline-block font-medium text-sm text-[#06080C] border-b border-gray-400 hover:border-[#06080C] transition-colors cursor-pointer"
              >
                Envoyer un autre message
              </button>
            </div>

            <form v-else key="form" @submit.prevent="handleSubmit" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1.5">Prénom</label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    required
                    placeholder="Jean"
                    class="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-[#06080C] text-sm focus:outline-none focus:border-[#06080C] focus:ring-4 focus:ring-gray-100 transition-all"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1.5">Nom</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    required
                    placeholder="Dupont"
                    class="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-[#06080C] text-sm focus:outline-none focus:border-[#06080C] focus:ring-4 focus:ring-gray-100 transition-all"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1.5">Email professionnel</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="jean.dupont@entreprise.com"
                    class="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-[#06080C] text-sm focus:outline-none focus:border-[#06080C] focus:ring-4 focus:ring-gray-100 transition-all"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1.5">Sujet</label>
                  <div class="relative">
                    <select
                      v-model="form.subject"
                      required
                      class="w-full appearance-none px-3.5 py-2.5 pr-9 rounded-lg border border-gray-300 bg-white text-[#06080C] text-sm focus:outline-none focus:border-[#06080C] focus:ring-4 focus:ring-gray-100 transition-all cursor-pointer"
                    >
                      <option value="" disabled selected>Choisissez un sujet</option>
                      <option value="integration">Intégration API WhatsApp / OTP</option>
                      <option value="billing">Recharge & Mobile Money</option>
                      <option value="partnership">Partenariat & Commercial</option>
                      <option value="support">Support technique</option>
                      <option value="other">Autre demande</option>
                    </select>
                    <svg class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-xs font-medium text-gray-600 mb-1.5">Message</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  placeholder="Décrivez votre besoin en quelques lignes..."
                  class="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-[#06080C] text-sm focus:outline-none focus:border-[#06080C] focus:ring-4 focus:ring-gray-100 transition-all resize-none"
                ></textarea>
              </div>

              <div class="pt-1">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="group w-full px-6 py-3 rounded-lg bg-[#25d366] hover:bg-[#20ba5a] text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <span v-if="isSubmitting" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                </button>
              </div>
            </form>
          </Transition>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.fade-swap-enter-active,
.fade-swap-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-swap-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.fade-swap-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>