<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)
const imageWrapperRef = ref<HTMLElement | null>(null)
const badgeRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return

  // 1. Animation de lévitation / flottement fluide pour l'image
  if (imageWrapperRef.value) {
    gsap.to(imageWrapperRef.value, {
      y: -14,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }

  // 2. Animation de pulsation douce pour le badge de disponibilité
  if (badgeRef.value) {
    gsap.to(badgeRef.value, {
      scale: 1.05,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  }
})
</script>

<template>
  <section ref="sectionRef" class="relative overflow-hidden py-24 md:py-32 bg-primary-dark text-white">

    <!-- Grille technique discrète, alignée sur le style de la section CTA -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.04]"
      style="background-image: linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px); background-size: 32px 32px;"
    ></div>

    <div class="relative mx-auto max-w-6xl px-6">

      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        <!-- COLONNE GAUCHE : Photo de la dame call center devant son ordinateur (Flottante et animée) -->
        <div class="relative flex items-center justify-center">

          <!-- Conteneur animé en lévitation -->
          <div ref="imageWrapperRef" class="relative mx-auto w-full max-w-[420px]">

            <!-- Cadre lumineux arrière subtil -->
            <div class="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#25d366] to-emerald-400 opacity-20 blur-xl"></div>

            <!-- Carte / Conteneur de l'image -->
            <div class="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.02] p-3 shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Femme Call Center devant son ordinateur"
                class="h-[420px] w-full rounded-2xl object-cover object-center filter saturate-[0.9] contrast-[1.05]"
              />

              <!-- Badge flottant "En ligne" -->
              <div ref="badgeRef" class="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-primary-dark/80 px-4 py-3 backdrop-blur-md shadow-lg">
                <div class="relative flex h-3 w-3 items-center justify-center">
                  <span class="absolute h-full w-full rounded-full bg-[#25d366] opacity-75 animate-ping"></span>
                  <span class="h-2 w-2 rounded-full bg-[#25d366]"></span>
                </div>
                <div>
                  <p class="text-xs font-bold text-white">Sarah de l'équipe</p>
                  <p class="text-[10px] text-[#25d366] font-mono">En ligne • Répond en &lt; 2 min</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        <!-- COLONNE DROITE : Informations & Contacts WhatsApp / E-mail -->
        <div class="space-y-6 text-left">

          <div class="inline-flex items-center gap-2 rounded-full bg-[#25d366]/10 px-4 py-1.5 border border-[#25d366]/20">
            <span class="h-2 w-2 rounded-full bg-[#25d366] animate-ping"></span>
            <span class="font-mono text-xs text-[#25d366] uppercase tracking-wider font-medium">Support & Assistance 24/7</span>
          </div>

          <h2 class="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Besoin d'aide ? <br />
            <span class="text-[#25d366]">Notre équipe vous répond.</span>
          </h2>

          <p class="text-base text-gray-400 md:text-lg leading-relaxed">
            Une question sur l'intégration de nos APIs, les paiements ou le routage de vos messages ? Nos experts techniques sont disponibles pour vous accompagner instantanément.
          </p>

          <!-- Cartes de Contact -->
          <div class="space-y-4 pt-4">

            <!-- WhatsApp -->
            <a
              href="https://wa.me/243894531708"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#25d366]/50 hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(37,211,102,0.15)]"
            >
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/20 text-[#25d366] transition-transform duration-300 group-hover:scale-110">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs text-gray-400 font-mono uppercase">WhatsApp Direct</p>
                <p class="text-lg font-bold text-white tracking-wide mt-0.5">+243 894 531 708</p>
              </div>
            </a>

            <!-- Email -->
            <a
              href="mailto:contact@yebasms.com"
              class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#25d366]/50 hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(37,211,102,0.15)]"
            >
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/20 text-[#25d366] transition-transform duration-300 group-hover:scale-110">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs text-gray-400 font-mono uppercase">Support par E-mail</p>
                <p class="text-lg font-bold text-white tracking-wide mt-0.5">contact@yebasms.com</p>
              </div>
            </a>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
</style>