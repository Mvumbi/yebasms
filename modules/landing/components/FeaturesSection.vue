<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollAnimations'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
</script>

<template>
  <section id="produit" ref="sectionRef" class="relative mx-auto max-w-6xl px-5 sm:px-6 py-20 sm:py-24 md:py-32 overflow-hidden">

    <!-- Grille d'arrière-plan technique et subtile -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.025]" style="background-image: radial-gradient(#000 1.5px, transparent 1.5px); background-size: 32px 32px;"></div>

    <!-- En-tête -->
    <div data-reveal class="mx-auto max-w-2xl text-center mb-16 sm:mb-20 relative z-10">
      <span class="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-dark">
        <span class="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
        Cas d'usages API
      </span>
      <h2 class="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-ink tracking-tight">
        Une API. <span class="text-primary">Trois</span> façons de parler à vos clients.
      </h2>
      <p class="mt-4 text-base sm:text-lg text-ink-soft">
        Intégrez des flux de messages natifs, sécurisés et instantanés directement dans vos applications.
      </p>
    </div>

    <!-- Grille de cartes modulaires (Style Atelier / Brut soigné) -->
    <div data-reveal class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">

      <!-- Carte 01 : OTP -->
      <div class="group relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-7 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
        <div>
          <div class="flex items-center justify-between mb-8">
            <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 7a4 4 0 1 1-4 4M11 11 3 19v2h2l8-8" />
                <path d="M13 9l2 2" />
              </svg>
            </span>
            <span class="font-mono text-xs font-bold text-ink/30 tracking-wider">01</span>
          </div>

          <h3 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
            OTP instantané
          </h3>
          <p class="mt-3 text-sm text-ink-soft leading-relaxed">
            Vérifiez vos utilisateurs en quelques secondes avec des codes livrés directement dans WhatsApp.
          </p>
        </div>

        <!-- Aperçu visuel intégré -->
        <div class="mt-8 pt-6 border-t border-ink/5">
          <div class="rounded-2xl bg-bg p-4 border border-ink/[0.04]">
            <div class="ml-auto w-fit max-w-[90%] rounded-2xl rounded-tr-xs bg-primary px-3.5 py-2.5 text-xs text-white shadow-sm font-medium">
              Code de vérification : <span class="font-mono font-bold tracking-wider">482 913</span>
            </div>
            <div class="mt-2 text-right font-mono text-[10px] text-ink-soft">
              Expire dans 04:32
            </div>
          </div>
        </div>
      </div>

      <!-- Carte 02 : Marketing -->
      <div class="group relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-7 sm:p-8 transition-all duration-300 hover:border-accent-dark/40 hover:shadow-xl hover:shadow-accent/5">
        <div>
          <div class="flex items-center justify-between mb-8">
            <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent-dark transition-transform duration-300 group-hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 11v2a2 2 0 002 2h1l3.5 4.5V4.5L6 9H5a2 2 0 00-2 2z" />
                <path d="M15 8a4 4 0 010 8M18 5a8 8 0 010 14" />
              </svg>
            </span>
            <span class="font-mono text-xs font-bold text-ink/30 tracking-wider">02</span>
          </div>

          <h3 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
            Campagnes marketing
          </h3>
          <p class="mt-3 text-sm text-ink-soft leading-relaxed">
            Diffusez promotions et relances ciblées avec un taux d'ouverture exceptionnel.
          </p>
        </div>

        <!-- Aperçu visuel intégré -->
        <div class="mt-8 pt-6 border-t border-ink/5">
          <div class="rounded-2xl bg-bg p-4 border border-ink/[0.04]">
            <div class="w-fit max-w-[90%] rounded-2xl rounded-tl-xs border border-ink/10 bg-white px-3.5 py-2.5 text-xs text-ink shadow-sm">
              -20% aujourd'hui. Répondez <strong class="text-accent-dark">OUI</strong> pour en profiter.
            </div>
            <div class="mt-2 font-mono text-[10px] text-accent-dark font-medium">
              Taux d'ouverture : 92%
            </div>
          </div>
        </div>
      </div>

      <!-- Carte 03 : Support -->
      <div class="group relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-7 sm:p-8 transition-all duration-300 hover:border-amber-700/40 hover:shadow-xl hover:shadow-amber-700/5">
        <div>
          <div class="flex items-center justify-between mb-8">
            <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 transition-transform duration-300 group-hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-4.15 7.23L4 21l2.27-4.85A8.38 8.38 0 013 11.5a8.5 8.5 0 019-8.45 8.38 8.38 0 019 8.45z" />
              </svg>
            </span>
            <span class="font-mono text-xs font-bold text-ink/30 tracking-wider">03</span>
          </div>

          <h3 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
            Support client
          </h3>
          <p class="mt-3 text-sm text-ink-soft leading-relaxed">
            Centralisez les échanges dans une messagerie fluide connectée directement à votre CRM.
          </p>
        </div>

        <!-- Aperçu visuel intégré -->
        <div class="mt-8 pt-6 border-t border-ink/5">
          <div class="rounded-2xl bg-bg p-4 border border-ink/[0.04] space-y-2">
            <div class="w-fit max-w-[85%] rounded-2xl rounded-tl-xs border border-ink/10 bg-white px-3 py-2 text-[11px] text-ink shadow-sm">
              Ma commande #2291 est où ?
            </div>
            <div class="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-xs bg-primary px-3 py-2 text-[11px] text-white shadow-sm">
              En route, livraison avant 18h.
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<style scoped>
/* Styles additionnels si nécessaire */
</style>