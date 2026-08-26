<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollAnimations'
import { Check, Coins, ArrowRight } from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)

const currencies = [
  { code: 'CDF', country: 'République Démocratique du Congo', price: '10', symbol: 'FC' },
  { code: 'XOF', country: 'Sénégal / Côte d\'Ivoire', price: '2.5', symbol: 'CFA' },
  { code: 'XAF', country: 'Cameroun / Congo', price: '2.5', symbol: 'CFA' },
  { code: 'NGN', country: 'Nigeria', price: '6.0', symbol: '₦' },
  { code: 'KES', country: 'Kenya', price: '0.6', symbol: 'KSh' },
  { code: 'GHS', country: 'Ghana', price: '0.08', symbol: 'GH₵' },
]

const active = ref(0)
</script>

<template>
  <section id="tarifs" ref="sectionRef" class="relative bg-bg py-24 overflow-hidden">
    <div class="mx-auto max-w-5xl px-6">
      
      <!-- En-tête de section -->
      <div class="text-center max-w-2xl mx-auto" data-reveal>
        <div class="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
          <Coins class="w-3.5 h-3.5" />
          <span>Tarification transparente</span>
        </div>
        <h2 class="font-display text-3xl font-bold text-ink md:text-4xl tracking-tight">
          Payez ce que vous utilisez, dans votre devise locale.
        </h2>
        <p class="mt-4 text-ink-soft text-base">
          Votre portefeuille et vos tarifs s'ajustent automatiquement selon votre pays, sans frais cachés.
        </p>
      </div>

      <!-- Sélecteur de devises sous forme de grille interactive -->
      <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" data-reveal>
        <button
          v-for="(c, i) in currencies"
          :key="c.code"
          type="button"
          @click="active = i"
          :class="[
            'flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-200 text-left',
            active === i
              ? 'border-primary bg-primary/5 shadow-md shadow-primary/5 ring-2 ring-primary/20 scale-[1.02]'
              : 'border-ink/10 bg-white hover:border-ink/30 hover:bg-white/80'
          ]"
        >
          <span class="font-mono text-xs font-semibold text-ink-soft uppercase tracking-wider">{{ c.code }}</span>
          <span class="font-display text-base font-bold text-ink mt-1">{{ c.symbol }}</span>
          <span class="text-[11px] text-ink-soft/70 truncate max-w-full mt-0.5">{{ c.country }}</span>
        </button>
      </div>

      <!-- Carte d'affichage dynamique du prix -->
      <div class="mt-8" data-reveal>
        <div class="relative rounded-3xl border border-ink/10 bg-white p-8 md:p-12 shadow-xl shadow-ink/5 overflow-hidden">
          
          <!-- Élément décoratif d'arrière-plan -->
          <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <!-- Information de prix -->
            <div class="space-y-4">
              <div class="inline-block rounded-lg bg-ink/5 px-3 py-1 font-mono text-xs font-medium text-ink">
                Pays sélectionné : <span class="text-primary font-bold">{{ currencies[active].country }}</span>
              </div>
              
              <div class="flex items-baseline space-x-3">
                <span class="font-mono text-5xl md:text-6xl font-extrabold text-primary tracking-tight">
                  {{ currencies[active].price }}
                </span>
                <span class="font-display text-2xl font-bold text-ink">
                  {{ currencies[active].code }}
                </span>
              </div>

              <p class="text-sm font-medium text-ink-soft">
                Tarif unique par message envoyé ou reçu sur l'API.
              </p>
            </div>

            <!-- Avantages inclus -->
            <div class="border-t md:border-t-0 md:border-l border-ink/10 pt-6 md:pt-0 md:pl-8 space-y-3">
              <p class="text-xs font-semibold uppercase tracking-wider text-ink-soft">Inclus avec ce tarif :</p>
              <ul class="space-y-2.5 text-sm text-ink">
                <li class="flex items-center space-x-2.5">
                  <div class="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Check class="w-3.5 h-3.5" />
                  </div>
                  <span>Rechargement instantané du portefeuille</span>
                </li>
                <li class="flex items-center space-x-2.5">
                  <div class="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Check class="w-3.5 h-3.5" />
                  </div>
                  <span>Support technique 24/7 par chat et email</span>
                </li>
                <li class="flex items-center space-x-2.5">
                  <div class="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Check class="w-3.5 h-3.5" />
                  </div>
                  <span>Accès complet à la documentation API & webhooks</span>
                </li>
              </ul>

              <div class="pt-4">
                <a 
                  href="/auth/register" 
                  class="inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:underline"
                >
                  <span>Commencer l'intégration</span>
                  <ArrowRight class="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>