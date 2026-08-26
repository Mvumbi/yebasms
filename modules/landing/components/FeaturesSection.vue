<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollAnimations'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
</script>

<template>
  <section id="produit" ref="sectionRef" class="feature-grid relative mx-auto max-w-6xl px-5 sm:px-6 py-20 sm:py-24 md:py-32 overflow-hidden">

    <!-- En-tête -->
    <div data-reveal class="mx-auto max-w-2xl text-center mb-16 sm:mb-20 md:mb-24 relative z-10">
      <span class="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-dark">
        <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
        Ce que vous pouvez envoyer
      </span>
      <h2 class="mt-5 sm:mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-ink tracking-tight">
        Une API. <span class="text-primary">Trois</span> façons de parler à vos clients.
      </h2>
    </div>

    <!-- Liste éditoriale, séparée par des filets fins -->
    <div data-reveal class="relative z-10 divide-y divide-ink/[0.07] border-y border-ink/[0.07]">

      <!-- Ligne 1 : OTP -->
      <div class="group grid grid-cols-1 items-center gap-8 py-12 sm:py-14 md:grid-cols-12 md:gap-10">
        <div class="md:col-span-5 lg:col-span-4">
          <div class="flex items-center gap-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 7a4 4 0 1 1-4 4M11 11 3 19v2h2l8-8" />
                <path d="M13 9l2 2" />
              </svg>
            </span>
            <span class="font-mono text-[11px] font-bold uppercase tracking-widest text-ink/35">01 / Vérification</span>
          </div>
          <h3 class="mt-5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            OTP instantané
          </h3>
          <p class="mt-3 text-ink-soft leading-relaxed">
            Vérifiez vos utilisateurs en quelques secondes avec des codes livrés directement dans WhatsApp.
          </p>
        </div>

        <div class="md:col-span-7 lg:col-span-8">
          <div class="mx-auto max-w-[320px] rounded-2xl border border-ink/[0.07] bg-bg p-4 sm:p-5 md:ml-auto md:mr-0">
            <div class="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-sm text-white shadow-sm">
              Votre code est <span class="font-mono font-bold">482 913</span>
            </div>
            <div class="mt-2 flex items-center justify-end gap-1.5 font-mono text-[11px] text-ink-soft">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              expire dans 04:32
            </div>
          </div>
        </div>
      </div>

      <!-- Ligne 2 : Marketing -->
      <div class="group grid grid-cols-1 items-center gap-8 py-12 sm:py-14 md:grid-cols-12 md:gap-10">
        <div class="md:col-span-5 lg:col-span-4 md:order-2">
          <div class="flex items-center gap-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-accent-dark transition-colors duration-300 group-hover:border-accent-dark group-hover:bg-accent-dark group-hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 11v2a2 2 0 002 2h1l3.5 4.5V4.5L6 9H5a2 2 0 00-2 2z" />
                <path d="M15 8a4 4 0 010 8M18 5a8 8 0 010 14" />
              </svg>
            </span>
            <span class="font-mono text-[11px] font-bold uppercase tracking-widest text-ink/35">02 / Diffusion</span>
          </div>
          <h3 class="mt-5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            Campagnes marketing
          </h3>
          <p class="mt-3 text-ink-soft leading-relaxed">
            Diffusez promotions et relances avec un taux d'ouverture exceptionnel.
          </p>
        </div>

        <div class="md:col-span-7 lg:col-span-8 md:order-1">
          <div class="mx-auto max-w-[320px] rounded-2xl border border-ink/[0.07] bg-bg p-4 sm:p-5">
            <div class="mb-3 flex items-center gap-2.5">
              <div class="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 font-display text-sm font-bold text-accent-dark">B</div>
              <div class="text-sm font-semibold text-ink">Boutique du Coin</div>
            </div>
            <div class="w-fit max-w-[90%] rounded-2xl rounded-tl-sm border border-ink/[0.07] bg-white px-4 py-3 text-sm text-ink shadow-sm">
              -20% aujourd'hui seulement. Répondez OUI pour recevoir votre code.
            </div>
            <div class="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent-dark">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>
              Taux d'ouverture : 92%
            </div>
          </div>
        </div>
      </div>

      <!-- Ligne 3 : Support -->
      <div class="group grid grid-cols-1 items-center gap-8 py-12 sm:py-14 md:grid-cols-12 md:gap-10">
        <div class="md:col-span-5 lg:col-span-4">
          <div class="flex items-center gap-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-amber-700 transition-colors duration-300 group-hover:border-amber-700 group-hover:bg-amber-700 group-hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-4.15 7.23L4 21l2.27-4.85A8.38 8.38 0 013 11.5a8.5 8.5 0 019-8.45 8.38 8.38 0 019 8.45z" />
              </svg>
            </span>
            <span class="font-mono text-[11px] font-bold uppercase tracking-widest text-ink/35">03 / Conversation</span>
          </div>
          <h3 class="mt-5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            Support client
          </h3>
          <p class="mt-3 text-ink-soft leading-relaxed">
            Centralisez les échanges dans une messagerie fluide, connectée à votre équipe.
          </p>
        </div>

        <div class="md:col-span-7 lg:col-span-8">
          <div class="mx-auto max-w-[320px] space-y-2 rounded-2xl border border-ink/[0.07] bg-bg p-4 sm:p-5 md:ml-auto md:mr-0">
            <div class="w-fit max-w-[85%] rounded-2xl rounded-tl-sm border border-ink/[0.07] bg-white px-4 py-3 text-sm text-ink shadow-sm">
              Ma commande #2291 est où ?
            </div>
            <div class="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-sm text-white shadow-sm">
              En route, livraison prévue avant 18h.
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<style scoped>
.feature-grid {
  position: relative;
}

.feature-grid::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(to right, theme('colors.primary.DEFAULT') 1px, transparent 1px),
    linear-gradient(to bottom, theme('colors.primary.DEFAULT') 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
  -webkit-mask-image: radial-gradient(circle at center, black, transparent 80%);
  opacity: 0.05;
}
</style>