<script setup lang="ts">
definePageMeta({
  layout: 'default' // Utilise ton layout par défaut avec Header/Footer
})

import { ref, onMounted } from 'vue'
import { CheckCircle2, AlertTriangle, RefreshCw, Server, Cpu, Globe, Shield } from 'lucide-vue-next'

const lastUpdated = ref('À l\'instant')
const isChecking = ref(false)

// Liste des services système de YebaSMS
const services = ref([
  {
    name: 'API Gateway (REST / Webhooks)',
    description: 'Points de terminaison pour l\'envoi de SMS et la réception des accusés de réception.',
    status: 'operational', // 'operational' | 'degraded' | 'down'
    uptime: '99.99%',
    icon: Server
  },
  {
    name: 'Passerelles Opérateurs (SMS OTP & Marketing)',
    description: 'Connexions directes avec les opérateurs télécoms (Afrique & International).',
    status: 'operational',
    uptime: '99.95%',
    icon: Globe
  },
  {
    name: 'Système d\'authentification & 2FA (OTP Email)',
    description: 'Génération et envoi sécurisé des codes de validation par e-mail.',
    status: 'operational',
    uptime: '100%',
    icon: Shield
  },
  {
    name: 'Tableau de bord & Back-office',
    description: 'Interface de gestion des campagnes, des recharges et des historiques.',
    status: 'operational',
    uptime: '99.98%',
    icon: Cpu
  }
])

// Simulation d'un rafraîchissement manuel du statut
const refreshStatus = () => {
  isChecking.value = true
  setTimeout(() => {
    isChecking.value = false
    lastUpdated.value = 'À l\'instant'
  }, 800)
}

// Historique récent des incidents (vide = tout va bien)
const incidents = ref([
  {
    date: '14 Août 2026',
    title: 'Maintenance planifiée des passerelles régionales',
    status: 'Résolu',
    description: 'Mise à jour des routes SMS pour optimiser la délivrabilité en zone CEMAC. Aucune coupure constatée.'
  }
])
</script>

<template>
  <div class="min-h-screen bg-bg text-ink py-16 px-6 lg:px-12 relative overflow-hidden">
    
    <!-- Éléments décoratifs en arrière-plan -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>
    <div class="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -top-32 left-1/2 -translate-x-1/2"></div>

    <div class="max-w-4xl mx-auto relative z-10">
      
      <!-- En-tête -->
      <div class="text-center max-w-xl mx-auto mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold mb-4">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Tous les systèmes sont opérationnels
        </div>
        <h1 class="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
          Statut des services YebaSMS
        </h1>
        <p class="mt-3 text-sm text-ink-soft">
          Surveillez en temps réel la disponibilité de notre infrastructure et de nos API.
        </p>
      </div>

      <!-- Barre d'état globale et bouton de rafraîchissement -->
      <div class="bg-white rounded-2xl border border-ink/15 p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 :size="22" />
          </div>
          <div>
            <h2 class="font-display text-sm sm:text-base font-semibold text-ink">Aucun incident en cours</h2>
            <p class="text-xs text-ink-soft">Dernière vérification : <span class="font-medium text-ink">{{ lastUpdated }}</span></p>
          </div>
        </div>

        <button 
          @click="refreshStatus"
          :disabled="isChecking"
          class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg border border-ink/15 text-xs font-semibold text-ink hover:border-ink/30 transition-all cursor-pointer disabled:opacity-50"
        >
          <RefreshCw :size="14" :class="[isChecking ? 'animate-spin text-primary' : '']" />
          <span>Actualiser</span>
        </button>
      </div>

      <!-- Liste détaillée des services -->
      <div class="space-y-4 mb-12">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="bg-white rounded-2xl border border-ink/15 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
        >
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <component :is="service.icon" :size="20" />
            </div>
            <div>
              <h3 class="font-display text-sm sm:text-base font-semibold text-ink">{{ service.name }}</h3>
              <p class="text-xs text-ink-soft mt-0.5">{{ service.description }}</p>
            </div>
          </div>

          <div class="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-ink/10">
            <div class="text-left sm:text-right">
              <span class="block text-[10px] text-ink-soft uppercase tracking-wider">Disponibilité</span>
              <span class="text-xs font-semibold text-ink">{{ service.uptime }}</span>
            </div>
            <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold shrink-0">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Opérationnel
            </div>
          </div>
        </div>
      </div>

      <!-- Historique des incidents passés -->
      <div class="bg-white rounded-2xl border border-ink/15 p-6 sm:p-8 shadow-sm">
        <h3 class="font-display text-lg font-bold text-ink mb-6">Historique des 30 derniers jours</h3>
        
        <div class="space-y-6">
          <div v-for="(incident, index) in incidents" :key="index" class="border-l-2 border-primary pl-4 py-1">
            <div class="flex items-center justify-between text-xs mb-1">
              <span class="font-semibold text-ink">{{ incident.title }}</span>
              <span class="text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-md font-medium">{{ incident.status }}</span>
            </div>
            <p class="text-xs text-ink-soft leading-relaxed">{{ incident.description }}</p>
            <span class="block text-[10px] text-ink-soft/60 mt-2">{{ incident.date }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>