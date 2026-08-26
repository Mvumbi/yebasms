<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollAnimations'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)

// Étape active par défaut (la première)
const activeStep = ref(0)

const steps = [
  {
    mark: '01',
    title: 'Créez votre compte',
    text: 'Choisissez votre pays : votre devise et votre portefeuille sont configurés automatiquement.',
    badge: 'WORKSPACE SETUP',
    method: 'POST',
    endpoint: '/v1/auth/register',
    codeSnippet: '{\n  "country": "CD",\n  "currency": "USD"\n}'
  },
  {
    mark: '02',
    title: 'Approvisionnez',
    text: 'Mobile Money ou carte bancaire, rechargez en quelques clics dans votre devise locale.',
    badge: 'WALLET & GATEWAY',
    method: 'POST',
    endpoint: '/v1/wallet/topup',
    codeSnippet: '{\n  "method": "mobile_money",\n  "amount": 50.00\n}'
  },
  {
    mark: '03',
    title: 'Connectez WhatsApp',
    text: "Suivez l'assistant pas à pas pour lier votre numéro à l'API en quelques minutes.",
    badge: 'META CLOUD LINK',
    method: 'GET',
    endpoint: '/v1/whatsapp/connect',
    codeSnippet: '// Status: Verified & Active\n// Rate: 250 msg/sec\n// Webhook: Enabled'
  },
  {
    mark: '04',
    title: "Envoyez via l'API",
    text: 'OTP, campagnes ou chat : intégrez en quelques lignes et suivez vos envois en temps réel.',
    badge: 'API DISPATCH',
    method: 'POST',
    endpoint: '/v1/messages/send',
    codeSnippet: '{\n  "to": "+243990000000",\n  "template": "otp_auth"\n}'
  },
]

// Icônes géométriques nettes au trait fin
const icons = [
  'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20.2c1.4-3.4 4.2-5.2 7.5-5.2s6.1 1.8 7.5 5.2',
  'M3.5 8.5h13a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V8.5ZM3.5 8.5 6 5h9l3 3.5M15 13h2.5',
  'M9.5 14.5 14.5 9.5M8 15.5l-1.5 1.5a3 3 0 0 1-4.2-4.2L4 11.3M16 8.7l1.7-1.7a3 3 0 1 1 4.2 4.2L20.3 13',
  'M21 3 3 10.5l7 2.5M21 3 13.5 21l-3.5-8M21 3 10 13.5',
]
</script>

<template>
  <section ref="sectionRef" class="relative bg-white py-20 sm:py-24 md:py-32 overflow-hidden">
    
    <!-- Arrière-plan quadrillé professionnel (effet grille technique type blueprint) -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.035]" style="background-image: linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="mx-auto max-w-6xl px-5 sm:px-6 relative z-10">

      <!-- En-tête -->
      <div data-reveal class="max-w-2xl mb-12 sm:mb-16">
        <span class="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary">
          <span class="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
          Parcours d'intégration
        </span>
        <h2 class="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink md:text-5xl leading-tight">
          Du compte au premier message envoyé.
        </h2>
        <p class="mt-4 text-base sm:text-lg text-ink-soft max-w-xl">
          Quatre étapes structurées pour connecter votre écosystème en quelques minutes, sans friction.
        </p>
      </div>

      <!-- Layout asymétrique interactif : Liste à gauche / Console technique à droite -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Colonne des 4 étapes (Gauche) -->
        <div data-reveal class="lg:col-span-7 flex flex-col gap-3">
          <div
            v-for="(s, i) in steps"
            :key="s.mark"
            @mouseenter="activeStep = i"
            @click="activeStep = i"
            class="group relative flex items-start gap-4 p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer"
            :class="activeStep === i 
              ? 'bg-ink/[0.02] border-primary/40 shadow-sm shadow-primary/5' 
              : 'bg-white border-ink/10 hover:border-ink/20'"
          >
            <!-- Indicateur / Numéro -->
            <div 
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300"
              :class="activeStep === i 
                ? 'border-primary bg-primary text-white shadow-md shadow-primary/20 scale-105' 
                : 'border-ink/15 bg-white text-ink/60 group-hover:border-ink/30'"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path :d="icons[i]" />
              </svg>
            </div>

            <!-- Texte de l'étape -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <span class="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                  Étape {{ s.mark }}
                </span>
                <span class="font-mono text-[10px] text-ink/30 hidden sm:inline-block">
                  {{ s.badge }}
                </span>
              </div>
              <h3 class="font-display text-base sm:text-lg font-bold text-ink tracking-tight">
                {{ s.title }}
              </h3>
              <p class="mt-1 text-sm leading-relaxed text-ink-soft">
                {{ s.text }}
              </p>
            </div>

            <!-- Indicateur de sélection latéral discret -->
            <div 
              class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-primary transition-opacity duration-300"
              :class="activeStep === i ? 'opacity-100' : 'opacity-0'"
            ></div>
          </div>
        </div>

        <!-- Colonne Terminal / Console Pro (Droite) -->
        <div data-reveal class="lg:col-span-5">
          <div class="relative rounded-2xl bg-[#0B0F17] text-white shadow-2xl border border-white/10 overflow-hidden">
            
            <!-- Barre d'état du terminal (Style IDE propre, sans pastilles colorées artificielles) -->
            <div class="flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border-b border-white/10">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-primary"></span>
                <span class="font-mono text-[11px] text-white/60 tracking-wider">PAYLOAD_PREVIEW.ts</span>
              </div>
              <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-primary uppercase">
                {{ steps[activeStep].badge }}
              </span>
            </div>

            <!-- Corps de la console -->
            <div class="p-6 space-y-5">
              
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs text-white/40">Étape active // {{ steps[activeStep].mark }}</span>
                <span class="font-mono text-xs font-semibold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                  {{ steps[activeStep].method }} {{ steps[activeStep].endpoint }}
                </span>
              </div>

              <div>
                <h4 class="font-display text-base font-bold text-white mb-1">
                  {{ steps[activeStep].title }}
                </h4>
                <p class="text-xs text-white/60 leading-relaxed">
                  {{ steps[activeStep].text }}
                </p>
              </div>

              <!-- Bloc de code syntaxique sobre -->
              <div class="pt-3 border-t border-white/10">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-mono text-[10px] text-white/30 uppercase tracking-widest">Requête HTTP</span>
                  <span class="font-mono text-[10px] text-primary/80">JSON / UTF-8</span>
                </div>
                <div class="p-4 rounded-xl bg-[#05070B] border border-white/10 font-mono text-xs text-white/90 overflow-x-auto shadow-inner">
                  <span class="text-primary font-semibold">{{ steps[activeStep].method }}</span> <span class="text-white/70">{{ steps[activeStep].endpoint }}</span>
                  <pre class="mt-2 text-white/80 font-mono text-[11px]"><code>{{ steps[activeStep].codeSnippet }}</code></pre>
                </div>
              </div>

            </div>

            <!-- Éclairage d'ambiance discret -->
            <div class="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>