<script setup lang="ts">
// Fonction pour recharger la page en cas d'erreur serveur
const reloadPage = () => {
  window.location.reload()
}
</script>

<template>
  <div class="relative min-h-screen bg-bg flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
    
    <!-- Motif de lignes d'arrière-plan stylisé -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>
    
    <!-- Lueur décorative subtile en arrière-plan -->
    <div class="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -top-32 -left-32"></div>

    <!-- Conteneur de la carte -->
    <div class="relative w-full max-w-md bg-white rounded-xl border border-ink/15 p-8 text-center shadow-sm">
      
      <!-- Code 500 en grand avec la couleur primaire -->
      <span class="font-display text-6xl font-extrabold text-primary tracking-tight">500</span>
      
      <!-- En-tête / Message -->
      <div class="mt-4 mb-8">
        <h1 class="font-display text-lg font-semibold text-ink">Erreur interne du serveur</h1>
        <p class="mt-1 text-xs text-ink-soft">
          Oups ! Quelque chose s'est mal passé de notre côté. Nos équipes ont été notifiées.
        </p>
      </div>

      <!-- Actions -->
      <div class="space-y-3">
        <!-- Bouton pour réessayer / rafraîchir -->
        <button 
          @click="reloadPage"
          class="w-full rounded-xl bg-primary py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-primary/20 shadow-sm shadow-primary/20 cursor-pointer"
        >
          Réessayer
        </button>

        <!-- Lien de retour à l'accueil -->
        <router-link 
          to="/"
          class="block w-full rounded-xl bg-bg py-3 text-sm font-medium text-ink border border-ink/15 transition-all duration-200 hover:bg-ink/5 active:scale-[0.99] text-center"
        >
          Retour à l'accueil
        </router-link>
      </div>

      <!-- Lien alternatif -->
      <p class="mt-6 text-center text-xs text-ink-soft">
        Le problème persiste ? 
        <router-link to="/login" class="text-primary font-semibold hover:underline">
          Contactez le support
        </router-link>
      </p>

    </div>
  </div>
</template>

<style scoped>
</style>