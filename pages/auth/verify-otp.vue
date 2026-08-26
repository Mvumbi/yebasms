<script setup lang="ts">
import { ref, nextTick } from 'vue'

// Tableau de 6 chiffres pour l'OTP
const otp = ref(['', '', '', '', '', ''])
const inputRefs = ref<HTMLInputElement[]>([])

// Gestion de la saisie case par case avec saut automatique et blocage des non-chiffres
const handleInput = (index: number, event: Event) => {
  const target = event.target as HTMLInputElement
  const val = target.value

  // Ne garder que le dernier caractère s'il s'agit d'un chiffre
  const numericVal = val.replace(/\D/g, '')

  if (numericVal) {
    otp.value[index] = numericVal.slice(-1)
    // Passer automatiquement au champ suivant si un chiffre valide est entré
    if (index < 5) {
      nextTick(() => {
        inputRefs.value[index + 1]?.focus()
      })
    }
  } else {
    // Si ce n'est pas un chiffre, on vide le champ
    otp.value[index] = ''
  }
}

// Gérer la touche Retour en arrière (BackSpace) pour reculer d'une case
const handleKeydown = (index: number, event: KeyboardEvent) => {
  if (event.key === 'Backspace' && !otp.value[index] && index > 0) {
    nextTick(() => {
      inputRefs.value[index - 1]?.focus()
    })
  }
}

// Simulation de la soumission de l'OTP
const handleVerifyOtp = () => {
  const code = otp.value.join('')
  console.log('Code OTP soumis:', code)
}

// Fonction pour renvoyer le code par email
const resendCode = () => {
  console.log('Renvoyer l’OTP par email')
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
        <h1 class="mt-3 font-display text-lg font-semibold text-ink">Vérification de sécurité</h1>
        <p class="mt-1 text-xs text-ink-soft">
          Entrez le code à 6 chiffres envoyé par <span class="font-medium text-ink">e-mail</span> pour confirmer l'opération.
        </p>
      </div>

      <!-- Formulaire OTP -->
      <form @submit.prevent="handleVerifyOtp" class="space-y-6">
        
        <!-- Cases OTP s'adaptant parfaitement à la largeur de la carte -->
        <div class="flex items-center justify-between gap-2 w-full">
          <input 
            v-for="(digit, index) in otp" 
            :key="index"
            :ref="el => { if (el) inputRefs[index] = el as HTMLInputElement }"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            maxlength="1"
            v-model="otp[index]"
            @input="handleInput(index, $event)"
            @keydown="handleKeydown(index, $event)"
            class="flex-1 min-w-0 h-11 sm:h-12 text-center text-base sm:text-base font-semibold rounded-xl border border-ink/15 bg-bg text-ink outline-none transition-all duration-300 hover:border-ink/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <!-- Bouton de soumission -->
        <button 
          type="submit"
          class="w-full rounded-xl bg-primary py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-primary/20 shadow-sm shadow-primary/20"
        >
          Vérifier le code
        </button>

      </form>

      <!-- Renvoyer le code -->
      <p class="mt-6 text-center text-xs text-ink-soft">
        Vous n'avez rien reçu ? 
        <button @click="resendCode" class="text-primary font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer">
          Renvoyer l'e-mail
        </button>
      </p>

    </div>
  </div>
</template>

<style scoped>
</style>