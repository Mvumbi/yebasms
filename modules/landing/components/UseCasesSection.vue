<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollAnimations'
import { Store, Wallet, Truck, HeartPulse, ArrowUpRight } from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
</script>

<template>
  <section id="cas-usage" ref="sectionRef" class="bg-bg py-24 relative overflow-hidden">
    <div class="mx-auto max-w-6xl px-6">
      
      <!-- En-tête de section -->
      <div data-reveal class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-3xl">
        <div>
          <div class="inline-flex items-center space-x-2 rounded-full bg-primary-dark/10 px-3 py-1 text-xs font-semibold text-primary-dark mb-4">
            <span>Secteurs d'activité</span>
          </div>
          <h2 class="font-display text-3xl font-bold text-ink md:text-5xl tracking-tight">
            Conçu pour les secteurs qui bougent vite.
          </h2>
        </div>
        <p class="text-ink-soft text-base max-w-sm">
          Découvrez comment les leaders africains intègrent notre API pour automatiser leurs communications critiques.
        </p>
      </div>

      <!-- Grille Bento moderne -->
      <div
        class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
      >
        <!-- Tuile principale : E-commerce (Prend 2 colonnes) -->
        <div
          data-reveal
          class="md:col-span-2 group relative flex flex-col justify-between rounded-3xl bg-primary-dark p-8 md:p-10 text-white overflow-hidden shadow-xl shadow-primary-dark/10 transition-all hover:scale-[1.01]"
        >
          <!-- Effet lumineux décoratif -->
          <div class="absolute -right-10 -bottom-10 w-60 h-60 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div class="flex items-center justify-between">
            <div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
              <Store class="w-6 h-6" />
            </div>
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-primary-dark transition-all">
              <ArrowUpRight class="w-5 h-5" />
            </div>
          </div>

          <div class="mt-12">
            <h3 class="font-display text-2xl md:text-3xl font-bold tracking-tight">E-commerce & Retail</h3>
            <p class="mt-3 max-w-md text-primary-light text-sm md:text-base leading-relaxed">
              Confirmations de commande instantanées, suivis de colis et relances de paniers abandonnés, livrées là où vos clients lisent vraiment.
            </p>
          </div>
        </div>

        <!-- Fintech & Mobile Money -->
        <div
          data-reveal
          class="group flex flex-col justify-between rounded-3xl border border-gold/30 bg-gold/10 p-8 transition-all hover:scale-[1.02]"
        >
          <div class="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-[#8A5A00]">
            <Wallet class="w-6 h-6" />
          </div>
          <div class="mt-8">
            <h3 class="font-display text-xl font-bold text-ink">Fintech & Mobile Money</h3>
            <p class="mt-2 text-sm text-ink-soft leading-relaxed">
              Envoi d'OTP de transaction ultra-rapide avec une latence critique minimale et une fiabilité bancaire.
            </p>
          </div>
        </div>

        <!-- Livraison & Logistique -->
        <div
          data-reveal
          class="group flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8 shadow-sm transition-all hover:border-ink/30 hover:scale-[1.02]"
        >
          <div class="w-12 h-12 rounded-2xl bg-primary-dark/5 flex items-center justify-center text-primary-dark">
            <Truck class="w-6 h-6" />
          </div>
          <div class="mt-8">
            <h3 class="font-display text-xl font-bold text-ink">Livraison & Logistique</h3>
            <p class="mt-2 text-sm text-ink-soft leading-relaxed">
              Statuts de livraison en temps réel, de l'entrepôt jusqu'à la porte de l'utilisateur final.
            </p>
          </div>
        </div>

        <!-- Santé (Prend 2 colonnes) -->
        <div
          data-reveal
          class="md:col-span-2 group flex flex-col md:flex-row md:items-center justify-between rounded-3xl border border-ink/10 bg-white p-8 shadow-sm transition-all hover:border-ink/30 hover:scale-[1.01]"
        >
          <div class="flex items-start md:items-center space-x-5">
            <div class="w-12 h-12 rounded-2xl bg-primary-dark/5 flex items-center justify-center text-primary-dark shrink-0">
              <HeartPulse class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-display text-xl font-bold text-ink">Santé</h3>
              <p class="mt-1 text-sm text-ink-soft max-w-md">
                Rappels de rendez-vous automatisés avec un taux de lecture avoisinant les 100% pour réduire les rendez-vous manqués.
              </p>
            </div>
          </div>
          <div class="mt-6 md:mt-0">
            <span class="inline-flex items-center text-xs font-semibold text-primary-dark bg-primary-dark/5 px-3 py-1.5 rounded-full">
              Haute délivrabilité
            </span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>