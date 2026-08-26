<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollAnimations'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="relative overflow-hidden bg-primary-dark py-24 md:py-32">

    <!-- Grille technique très discrète, cohérente avec le reste du site -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.04]"
      style="background-image: linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px); background-size: 44px 44px;"
    ></div>

    <div data-reveal class="relative mx-auto max-w-6xl px-6">
      <div class="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

        <!-- Texte : aligné à gauche, pas centré -->
        <div class="text-center lg:text-left">
          <span class="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-light">
            <span class="h-1.5 w-1.5 rounded-full bg-primary-light"></span>
            Dernière étape
          </span>
          <h2 class="mt-6 font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
            Prêt à connecter<br class="hidden sm:block" /> votre WhatsApp Business ?
          </h2>
          <p class="mx-auto mt-5 max-w-md text-base text-primary-light/90 md:text-lg lg:mx-0">
            Créez votre compte en 2 minutes. Aucune carte bancaire requise — votre première conversation peut partir aujourd'hui.
          </p>

          <div class="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="/auth/register"
              class="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-body font-semibold text-primary-dark transition-colors duration-300 hover:bg-white/90"
            >
              Commencer gratuitement
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <span class="text-sm text-primary-light/70">Aucune configuration technique requise</span>
          </div>
        </div>

        <!-- Aperçu réel : un message tel qu'il arrive sur WhatsApp -->
        <div class="relative mx-auto w-full max-w-[300px] lg:mx-0 lg:ml-auto">
          <div class="absolute -inset-6 rounded-[2rem] bg-white/[0.03]"></div>

          <div class="relative rounded-2xl border border-white/10 bg-[#0b1410] p-4 shadow-2xl">
            <div class="flex items-center gap-2 border-b border-white/10 pb-3">
              <span class="relative flex h-2.5 w-2.5">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60"></span>
                <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
              </span>
              <span class="font-mono text-[11px] uppercase tracking-widest text-white/50">API connectée</span>
            </div>

            <div class="mt-4 space-y-1.5">
              <div class="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2.5 text-[13px] leading-snug text-white">
                Votre code de vérification est <span class="font-semibold">482 913</span>. Valable 5 minutes.
              </div>
              <div class="flex items-center justify-end gap-1 pr-1 text-[10px] text-white/40">
                14:32
                <svg width="14" height="10" viewBox="0 0 16 11" fill="none">
                  <path d="M1 5.5 4.5 9 11 1.5M5.5 5.5 9 9 15.5 1.5" stroke="#53bdeb" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
</style>