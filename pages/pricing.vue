<script setup lang="ts">
definePageMeta({
  layout: 'default' // Ou 'blank' si tu préfères sans le header du site
})

import { ref, computed } from 'vue'
import { Check, ArrowRight, Zap, MessageSquare, Send, Globe } from 'lucide-vue-next'

// Devise active sélectionnée par l'utilisateur
const activeCurrency = ref<'USD' | 'XAF' | 'CDF'>('USD')

// Données des tarifs par canal et par devise
const pricingData = {
  USD: {
    symbol: '$',
    otp: '0.015',
    marketing: '0.12',
    chat: '0.0070',
    badge: 'International (Monde)'
  },
  XAF: {
    symbol: 'XAF',
    otp: '6.18',
    marketing: '60',
    chat: '2.90',
    badge: 'Afrique Centrale & de l\'Ouest (CEMAC/UEMOA)'
  },
  CDF: {
    symbol: 'FC',
    otp: '25',
    marketing: '250',
    chat: '3',
    badge: 'République Démocratique du Congo'
  }
}

const currentPricing = computed(() => pricingData[activeCurrency.value])

// FAQ rapide ou détails utiles
const channels = [
  {
    name: 'OTP & Sécurité',
    description: 'Codes de vérification, alertes de connexion et notifications critiques à haute délivrabilité.',
    icon: Zap,
    key: 'otp'
  },
  {
    name: 'Marketing & Promos',
    description: 'Campagnes SMS ciblées, lancements de produits et promotions de masse.',
    icon: Send,
    key: 'marketing'
  },
  {
    name: 'Chat & Conversationnel',
    description: 'Discussions bidirectionnelles, support client automatisé et bots interactifs.',
    icon: MessageSquare,
    key: 'chat'
  }
]
</script>

<template>
  <div class="min-h-screen bg-bg text-ink py-16 px-6 lg:px-12 relative overflow-hidden">
    
    <!-- Éléments décoratifs en arrière-plan -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>
    <div class="absolute w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -top-40 left-1/2 -translate-x-1/2"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      
      <!-- En-tête de la page -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          <Globe :size="14" /> Tarification transparente et flexible
        </div>
        <h1 class="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
          Des prix adaptés à chaque volume
        </h1>
        <p class="mt-3 text-sm sm:text-base text-ink-soft">
          Payez uniquement ce que vous consommez. Pas d'abonnement caché, pas de frais d'installation.
        </p>

        <!-- Sélecteur de devise interactif -->
        <div class="mt-8 inline-flex p-1.5 bg-white rounded-2xl border border-ink/15 shadow-sm">
          <button 
            @click="activeCurrency = 'USD'"
            :class="['px-5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer', activeCurrency === 'USD' ? 'bg-primary text-white shadow-sm' : 'text-ink-soft hover:text-ink']"
          >
            USD ($)
          </button>
          <button 
            @click="activeCurrency = 'XAF'"
            :class="['px-5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer', activeCurrency === 'XAF' ? 'bg-primary text-white shadow-sm' : 'text-ink-soft hover:text-ink']"
          >
            XAF / XOF
          </button>
          <button 
            @click="activeCurrency = 'CDF'"
            :class="['px-5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer', activeCurrency === 'CDF' ? 'bg-primary text-white shadow-sm' : 'text-ink-soft hover:text-ink']"
          >
            CDF (FC)
          </button>
        </div>
        <p class="mt-2 text-xs text-ink-soft/70">Zone tarifaire active : <span class="font-medium text-ink">{{ currentPricing.badge }}</span></p>
      </div>

      <!-- Grille des tarifs par canal -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        <div 
          v-for="channel in channels" 
          :key="channel.key"
          class="bg-white rounded-2xl border border-ink/15 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:shadow-md relative group"
        >
          <!-- Badge subtil en haut -->
          <div>
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <component :is="channel.icon" :size="24" />
            </div>

            <h3 class="font-display text-xl font-bold text-ink">{{ channel.name }}</h3>
            <p class="mt-2 text-xs sm:text-sm text-ink-soft leading-relaxed">{{ channel.description }}</p>

            <!-- Affichage du prix dynamique -->
            <div class="mt-6 pt-6 border-t border-ink/10">
              <div class="flex items-baseline gap-1">
                <span class="font-display text-3xl sm:text-4xl font-extrabold text-ink">
                  {{ currentPricing[channel.key as keyof typeof currentPricing] }}
                </span>
                <span class="text-sm font-semibold text-primary">
                  {{ activeCurrency === 'USD' ? '$' : activeCurrency }} <span class="text-xs text-ink-soft font-normal">/ SMS</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Bouton d'action -->
          <div class="mt-8">
            <a 
              href="/auth/register"
              class="w-full flex items-center justify-center gap-2 rounded-xl bg-bg border border-ink/15 py-3 text-xs font-semibold text-ink transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary cursor-pointer"
            >
              <span>Commencer maintenant</span>
              <ArrowRight :size="14" />
            </a>
          </div>

        </div>

      </div>

      <!-- Section informative additionnelle -->
      <div class="mt-16 bg-white rounded-2xl border border-ink/15 p-8 text-center max-w-3xl mx-auto shadow-sm">
        <h4 class="font-display text-lg font-semibold text-ink">Besoin d'un volume sur-mesure ou d'une intégration spécifique ?</h4>
        <p class="mt-2 text-xs sm:text-sm text-ink-soft">
          Profitez de tarifs dégressifs si vous envoyez plus de 100 000 SMS par mois. Notre équipe technique vous accompagne pas à pas.
        </p>
        <div class="mt-6">
          <a 
            href="/contact" 
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white text-xs font-semibold shadow-sm shadow-primary/20 hover:opacity-90 transition-all cursor-pointer"
          >
            Contactez notre équipe commerciale
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>