<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useScrollReveal } from '../composables/useScrollAnimations'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)

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
  <section ref="sectionRef" class="grid-background relative bg-white py-24 md:py-32 overflow-hidden">
    <div class="mx-auto max-w-2xl px-6 relative z-10">
      <div data-reveal class="text-center mb-12 md:mb-14">
        <h2 class="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Parlons de votre projet
        </h2>
        <p class="mt-3 text-base text-ink-soft">
          Notre équipe vous répond sous 24h ouvrées.
        </p>
      </div>

      <div data-reveal class="bg-white rounded-2xl border border-ink/10 shadow-sm transition-shadow duration-300 p-8 md:p-10">
        <Transition name="fade-swap" mode="out-in">
          <div v-if="isSubmitted" key="success" class="text-center py-8 space-y-4">
            <div class="success-check mx-auto w-14 h-14 rounded-full border-2 border-ink flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-ink">
                <path class="success-check-path" d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 class="font-display text-xl font-bold text-ink">Message envoyé</h3>
            <p class="text-ink-soft max-w-sm mx-auto text-sm">
              Merci de nous avoir contactés. Notre équipe revient vers vous rapidement.
            </p>
            <button
              @click="isSubmitted = false"
              class="mt-4 inline-block font-medium text-sm text-ink border-b border-ink/30 hover:border-ink transition-colors cursor-pointer"
            >
              Envoyer un autre message
            </button>
          </div>

          <form v-else key="form" @submit.prevent="handleSubmit" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="field-group" style="--delay: 0ms">
                <label class="block text-xs font-medium text-ink-soft mb-1.5">Prénom</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  required
                  placeholder="Jean"
                  class="w-full px-3.5 py-2.5 rounded-lg border border-ink/15 bg-white text-ink text-sm focus:outline-none focus:border-ink/50 focus:ring-4 focus:ring-ink/5 transition-all text-base sm:text-sm"
                />
              </div>
              <div class="field-group" style="--delay: 40ms">
                <label class="block text-xs font-medium text-ink-soft mb-1.5">Nom</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  required
                  placeholder="Dupont"
                  class="w-full px-3.5 py-2.5 rounded-lg border border-ink/15 bg-white text-ink text-sm focus:outline-none focus:border-ink/50 focus:ring-4 focus:ring-ink/5 transition-all text-base sm:text-sm"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="field-group" style="--delay: 80ms">
                <label class="block text-xs font-medium text-ink-soft mb-1.5">Email professionnel</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="jean.dupont@entreprise.com"
                  class="w-full px-3.5 py-2.5 rounded-lg border border-ink/15 bg-white text-ink text-sm focus:outline-none focus:border-ink/50 focus:ring-4 focus:ring-ink/5 transition-all text-base sm:text-sm"
                />
              </div>
              <div class="field-group" style="--delay: 120ms">
                <label class="block text-xs font-medium text-ink-soft mb-1.5">Sujet</label>
                <div class="relative">
                  <select
                    v-model="form.subject"
                    required
                    class="w-full appearance-none px-3.5 py-2.5 pr-9 rounded-lg border border-ink/15 bg-white text-ink text-sm focus:outline-none focus:border-ink/50 focus:ring-4 focus:ring-ink/5 transition-all cursor-pointer text-base sm:text-sm"
                  >
                    <option value="" disabled selected>Choisissez un sujet</option>
                    <option value="integration">Intégration API WhatsApp</option>
                    <option value="billing">Recharge & Mobile Money</option>
                    <option value="partnership">Partenariat & Commercial</option>
                    <option value="support">Support technique</option>
                    <option value="other">Autre demande</option>
                  </select>
                  <svg class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <div class="field-group" style="--delay: 160ms">
              <label class="block text-xs font-medium text-ink-soft mb-1.5">Message</label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                placeholder="Décrivez votre besoin en quelques lignes..."
                class="w-full px-3.5 py-2.5 rounded-lg border border-ink/15 bg-white text-ink text-sm focus:outline-none focus:border-ink/50 focus:ring-4 focus:ring-ink/5 transition-all resize-none text-base sm:text-sm"
              ></textarea>
            </div>

            <div class="field-group pt-1" style="--delay: 200ms">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="group w-full px-6 py-3 rounded-lg bg-primary text-white font-medium text-sm md:hover:bg-primary/90 md:hover:-translate-y-0.5 md:hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:hover:translate-y-0"
              >
                <span v-if="isSubmitting" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                <svg v-if="!isSubmitting" class="transition-transform duration-200 group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </form>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-background {
  position: relative;
}

.grid-background::before {
  content: '';
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: linear-gradient(to right, theme('colors.gray.200') 1px, transparent 1px), linear-gradient(to bottom, theme('colors.gray.200') 1px, transparent 1px);
  background-size: 40px 40px;
  -webkit-mask-image: radial-gradient(circle at center, black, transparent 85%);
  mask-image: radial-gradient(circle at center, black, transparent 85%);
  opacity: 0.6;
}

.field-group {
  animation: field-in 0.5s ease-out both;
  animation-delay: var(--delay, 0ms);
}

@keyframes field-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

.success-check {
  animation: check-pop 0.4s ease-out;
}
.success-check-path {
  stroke-dasharray: 24;
  stroke-dashoffset: 24;
  animation: check-draw 0.35s ease-out 0.15s forwards;
}

@keyframes check-pop {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes check-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .field-group,
  .success-check,
  .success-check-path {
    animation: none !important;
  }
}
</style>