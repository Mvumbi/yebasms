<script setup lang="ts">
import { 
  ShoppingCart, 
  CreditCard, 
  Plane, 
  GraduationCap, 
  Activity, 
  Truck 
} from 'lucide-vue-next'

const sectors = [
  { 
    icon: ShoppingCart, 
    title: 'E-commerce & Retail', 
    desc: 'Notifications de commandes & Suivi de livraison' 
  },
  { 
    icon: CreditCard, 
    title: 'Fintech & Mobile Money', 
    desc: 'Paiements et encaissements direct in-chat' 
  },
  { 
    icon: Plane, 
    title: 'Voyage & Hôtellerie', 
    desc: 'Réservations automatisées & Billetterie' 
  },
  { 
    icon: GraduationCap, 
    title: 'Éducation & EdTech', 
    desc: 'Rappels de scolarité & Résultats d\'examens' 
  },
  { 
    icon: Activity, 
    title: 'Santé & Pharmacies', 
    desc: 'Rappels de rendez-vous & Disponibilité' 
  },
  { 
    icon: Truck, 
    title: 'Logistique & Transport', 
    desc: 'Alertes de course & Suivi de colis' 
  }
]
</script>

<template>
  <!-- Fond propre, uni et dégradé subtil sur les bords pour fondre la section -->
  <section class="relative bg-ink/95 border-y border-white/[0.08] py-5 overflow-hidden select-none">
    
    <!-- Effets de fondu sur les côtés (gauche et droite) pour un rendu "pro" du défilement -->
    <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none"></div>

    <div class="flex w-max animate-marquee gap-12 whitespace-nowrap items-center">
      <!-- Double boucle pour assurer la boucle infinie fluide -->
      <template v-for="n in 2" :key="n">
        <div 
          v-for="(item, i) in sectors" 
          :key="`${n}-${i}`" 
          class="flex items-center gap-4 group cursor-default"
        >
          <!-- Icône avec un style minimaliste (sans boîte lourde autour) -->
          <div class="text-primary/80 group-hover:text-primary transition-colors flex items-center justify-center shrink-0">
            <component :is="item.icon" :size="20" />
          </div>
          
          <!-- Texte épuré -->
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold text-white/90 group-hover:text-white transition-colors tracking-tight">{{ item.title }}</span>
            <span class="text-white/20">•</span>
            <span class="text-xs text-white/40 font-mono">{{ item.desc }}</span>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 45s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>