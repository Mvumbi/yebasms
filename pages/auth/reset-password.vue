<script setup lang="ts">
definePageMeta({
  layout: 'blank'
})

import { ref } from 'vue'

const email = ref('')
const isLoading = ref(false)
const isSubmitted = ref(false)

// Simulation de l'envoi du lien de réinitialisation par email
const handleResetPassword = () => {
  if (!email.value) return
  
  isLoading.value = true
  
  setTimeout(() => {
    isLoading.value = false
    isSubmitted.value = true
    console.log('Lien de réinitialisation envoyé par email à :', email.value)
  }, 1000)
}
</script>

<template>
  <div class="relative min-h-screen bg-bg flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
    
    <!-- Motif de lignes d'arrière-plan stylisé -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>
    
    <!-- Lueur décorative subtile en arrière-plan -->
    <div class="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -top-32 -left-32"></div>

    <!-- Conteneur de la carte -->
    <div class="relative w-full max-w-md bg-white rounded-xl border border-ink/15 p-6 sm:p-8 shadow-sm">
      
      <!-- En-tête -->
      <div class="text-center mb-8">
        <span class="font-display text-2xl font-bold text-ink tracking-tight">YebaSMS</span>
        <h1 class="mt-3 font-display text-lg font-semibold text-ink">Mot de passe oublié</h1>
        <p class="mt-1 text-xs text-ink-soft">
          Entrez votre adresse <span class="font-medium text-ink">e-mail</span> pour recevoir les instructions de réinitialisation.
        </p>
      </div>

      <!-- Message de succès après envoi -->
      <div v-if="isSubmitted" class="space-y-6 text-center">
        <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 text-ink text-xs leading-relaxed">
          Un e-mail contenant les instructions a été envoyé à <span class="font-semibold text-primary">{{ email }}</span>. Veuillez vérifier votre boîte de réception.
        </div>
        
        <router-link 
          to="/login"
          class="block w-full text-center rounded-xl bg-primary py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.99] shadow-sm shadow-primary/20"
        >
          Retour à la connexion
        </router-link>
      </div>

      <!-- Formulaire de réinitialisation -->
      <form v-else @submit.prevent="handleResetPassword" class="space-y-5">
        
        <!-- Champ Email -->
        <div class="space-y-1.5">
          <label class="block text-xs font-medium text-ink">Adresse e-mail</label>
          <input 
            v-model="email"
            type="email"
            required
            placeholder="nom@exemple.com"
            class="w-full px-4 py-3 text-base sm:text-sm rounded-xl border border-ink/15 bg-bg text-ink outline-none transition-all duration-300 hover:border-ink/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <!-- Bouton de soumission -->
        <button 
          type="submit"
          :disabled="isLoading"
          class="w-full rounded-xl bg-primary py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-primary/20 shadow-sm shadow-primary/20 disabled:opacity-50 cursor-pointer"
        >
          <span v-if="isLoading">Envoi en cours...</span>
          <span v-else>Envoyer le lien</span>
        </button>

      </form>

      <!-- Lien de retour -->
      <p v-if="!isSubmitted" class="mt-6 text-center text-xs text-ink-soft">
        Vous vous souvenez de votre mot de passe ? 
        <router-link to="/login" class="text-primary font-semibold hover:underline">
          Se connecter
        </router-link>
      </p>

    </div>
  </div>
</template>

<style scoped>
</style>