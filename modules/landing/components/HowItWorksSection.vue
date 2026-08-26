<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollAnimations'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)

const hovered = ref<number | null>(null)

const steps = [
  {
    title: 'Créez votre compte',
    text: 'Choisissez votre pays : votre devise et votre portefeuille sont configurés automatiquement.',
    mark: 'Étape 1',
  },
  {
    title: 'Approvisionnez',
    text: 'Mobile Money ou carte bancaire, rechargez en quelques clics dans votre devise locale.',
    mark: 'Étape 2',
  },
  {
    title: 'Connectez WhatsApp',
    text: "Suivez l'assistant pas à pas pour lier votre numéro à l'API en quelques minutes.",
    mark: 'Étape 3',
  },
  {
    title: "Envoyez via l'API",
    text: 'OTP, campagnes ou chat : intégrez en quelques lignes et suivez vos envois en temps réel.',
    mark: 'Étape 4',
  },
]

// Icônes dessinées à la main (pas d'emojis) — traits fins, cohérents entre eux
const icons = [
  // compte / identité
  'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20.2c1.4-3.4 4.2-5.2 7.5-5.2s6.1 1.8 7.5 5.2',
  // portefeuille / recharge
  'M3.5 8.5h13a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V8.5ZM3.5 8.5 6 5h9l3 3.5M15 13h2.5',
  // lien / connexion
  'M9.5 14.5 14.5 9.5M8 15.5l-1.5 1.5a3 3 0 0 1-4.2-4.2L4 11.3M16 8.7l1.7-1.7a3 3 0 1 1 4.2 4.2L20.3 13',
  // envoi
  'M21 3 3 10.5l7 2.5M21 3 13.5 21l-3.5-8M21 3 10 13.5',
]
</script>

<template>
  <section ref="sectionRef" class="relative bg-white py-20 sm:py-24 md:py-32 overflow-hidden">

    <div class="mx-auto max-w-6xl px-5 sm:px-6 relative z-10">

      <!-- En-tête -->
      <div data-reveal class="max-w-2xl mb-16 sm:mb-20 md:mb-28">
        <span class="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary">
          <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
          Mise en route
        </span>
        <h2 class="mt-5 sm:mt-6 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink md:text-5xl leading-tight">
          Du compte au premier message envoyé.
        </h2>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-ink-soft max-w-xl">
          Quatre étapes, un seul fil conducteur : votre compte, votre solde et votre ligne WhatsApp reliés dès le départ.
        </p>
      </div>

      <!-- Fil conducteur horizontal (tablette large et desktop) -->
      <div data-reveal class="hidden md:block relative text-primary">

        <!-- Ligne + signal animé -->
        <svg
          class="absolute top-6 md:top-7 h-[2px] overflow-visible pointer-events-none"
          style="left: 12.5%; width: 75%;"
          viewBox="0 0 1000 2"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="1" x2="1000" y2="1" class="text-ink" stroke="currentColor" stroke-opacity="0.12" stroke-width="2" />
          <circle r="3.5" fill="currentColor" class="signal-dot">
            <animateMotion dur="6s" repeatCount="indefinite" path="M0,1 L1000,1" />
          </circle>
        </svg>

        <div class="relative grid grid-cols-4 gap-4 lg:gap-8">
          <div
            v-for="(s, i) in steps"
            :key="s.mark"
            class="relative flex flex-col items-start"
            @mouseenter="hovered = i"
            @mouseleave="hovered = null"
            @focusin="hovered = i"
            @focusout="hovered = null"
          >
            <!-- Noeud -->
            <div
              tabindex="0"
              class="relative z-10 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              :class="hovered === i
                ? 'border-primary bg-primary text-white scale-110 shadow-[0_8px_24px_-8px_theme(colors.primary.DEFAULT)]'
                : 'border-ink/15 bg-white text-ink/60'"
            >
              <svg width="20" height="20" class="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path :d="icons[i]" />
              </svg>
            </div>

            <!-- Contenu -->
            <div class="mt-6 md:mt-8">
              <span class="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-ink/35">
                {{ s.mark }}
              </span>
              <h3
                class="mt-2.5 md:mt-3 font-display text-base lg:text-lg font-bold text-ink transition-colors duration-300"
                :class="hovered === i && 'text-primary'"
              >
                {{ s.title }}
              </h3>
              <p class="mt-2 md:mt-2.5 text-sm leading-relaxed text-ink-soft">
                {{ s.text }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Version mobile : liste verticale avec ligne latérale -->
      <div data-reveal class="md:hidden relative pl-9 sm:pl-10">
        <div class="absolute left-[23px] sm:left-[27px] top-2 bottom-2 w-px bg-ink/10"></div>

        <div v-for="(s, i) in steps" :key="s.mark" class="relative mb-10 sm:mb-12 last:mb-0">
          <div class="absolute -left-9 sm:-left-10 top-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-ink/15 bg-white text-ink/60">
            <svg width="18" height="18" class="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path :d="icons[i]" />
            </svg>
          </div>
          <span class="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-ink/35">
            {{ s.mark }}
          </span>
          <h3 class="mt-2 font-display text-base sm:text-lg font-bold text-ink">{{ s.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-soft">{{ s.text }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.signal-dot {
  filter: drop-shadow(0 0 4px currentColor);
}

@media (prefers-reduced-motion: reduce) {
  .signal-dot animateMotion,
  svg animateMotion {
    display: none;
  }
}
</style>