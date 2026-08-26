<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollAnimations'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)

// Gestion de l'élément ouvert (index de la FAQ active, ou null si tout est fermé)
const openIndex = ref<number | null>(0) // La première est ouverte par défaut

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: "Quels sont les moyens de paiement acceptés pour approvisionner mon compte ?",
    answer: "Vous pouvez recharger votre solde instantanément en utilisant les principaux opérateurs de Mobile Money ou par carte bancaire dans votre devise locale."
  },
  {
    question: "Comment lier mon numéro de téléphone à l'API WhatsApp ?",
    answer: "Il vous suffit de suivre l'assistant pas à pas directement depuis votre tableau de bord pour connecter et vérifier votre numéro en quelques minutes."
  },
  {
    question: "Combien de temps prend l'activation de mon compte après l'inscription ?",
    answer: "L'activation est instantanée : dès le choix de votre pays lors de la création du compte, votre devise et votre portefeuille sont configurés automatiquement."
  },
  {
    question: "Puis-je envoyer des codes OTP et des campagnes marketing avec la même API ?",
    answer: "Oui, l'API est polyvalente et prend en charge l'envoi de codes OTP, de campagnes de messages ou de discussions en direct avec un suivi en temps réel."
  },
  {
    question: "Comment puis-je suivre l'état de livraison de mes messages envoyés ?",
    answer: "Vous disposez d'un tableau de bord complet qui vous permet de suivre tous vos envois, les accusés de réception et les performances en temps réel."
  },
  {
    question: "Quels types d'intégration et de langages sont compatibles avec l'API ?",
    answer: "Notre API RESTful s'intègre facilement en quelques lignes de code avec n'importe quel langage de programmation (Python, PHP, Node.js, etc.) ou via nos modules dédiés."
  }
]
</script>

<template>
  <section ref="sectionRef" class="grid-background relative bg-white py-24 md:py-32 overflow-hidden">
    
    <!-- Conteneur principal -->
    <div class="mx-auto max-w-5xl px-6 relative z-10">
      
      <!-- En-tête de section -->
      <div data-reveal class="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <span class="inline-block font-mono text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1 rounded-full">
          FAQ
        </span>
        <h2 class="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Vos questions, nos réponses.
        </h2>
        <p class="mt-4 text-base text-ink-soft">
          Tout ce que vous devez savoir sur notre plateforme, l'intégration de l'API et la gestion de vos paiements.
        </p>
      </div>

      <!-- Liste des FAQ (Style Accordéon Moderne) -->
      <div data-reveal class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="group bg-bg rounded-2xl border border-ink/5 transition-all duration-300 overflow-hidden shadow-sm hover:border-primary/30"
          :class="{ 'border-primary/50 shadow-md': openIndex === index }"
        >
          <!-- Bouton d'activation -->
          <button 
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
          >
            <span class="font-display text-base md:text-lg font-bold text-ink group-hover:text-primary transition-colors duration-200 pr-4">
              {{ faq.question }}
            </span>
            
            <!-- Icône Chevron animée -->
            <div 
              class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300"
              :class="{ 'rotate-180 bg-primary text-white': openIndex === index }"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </button>

          <!-- Contenu de la réponse avec transition fluide -->
          <div 
            class="grid transition-all duration-300 ease-in-out"
            :class="openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-6 px-6' : 'grid-rows-[0fr] opacity-0 px-6'"
          >
            <div class="overflow-hidden">
              <p class="text-sm md:text-base text-ink-soft leading-relaxed border-t border-ink/5 pt-4">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Styles pour le quadrillage d'arrière-plan (sécurisé sans erreur de config) */
.grid-background {
  position: relative;
}

.grid-background::before {
  content: '';
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  
  background-image: 
    linear-gradient(to right, theme('colors.gray.200') 1px, transparent 1px),
    linear-gradient(to bottom, theme('colors.gray.200') 1px, transparent 1px);
  
  background-size: 40px 40px;
  
  -webkit-mask-image: radial-gradient(circle at center, black, transparent 85%);
  mask-image: radial-gradient(circle at center, black, transparent 85%);
  
  opacity: 0.6; 
}
</style>