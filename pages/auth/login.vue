<script setup lang="ts">
import { ref } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = () => {
  // Logique de connexion à implémenter (avec 2FA / OTP par email si requis)
  console.log('Connexion avec:', { email: email.value, password: password.value })
}
</script>

<template>
  <div class="relative min-h-screen bg-bg flex items-center justify-center px-6 py-12 overflow-hidden">
    
    <!-- Motif de lignes d'arrière-plan stylisé -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>
    
    <!-- Lueur décorative subtile en arrière-plan -->
    <div class="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -top-32 -left-32"></div>

    <!-- Conteneur de la carte de connexion -->
    <div class="relative w-full max-w-md bg-white rounded-xl border border-ink/15 p-8 shadow-sm">
      
      <!-- En-tête -->
      <div class="text-center mb-8">
        <span class="font-display text-2xl font-bold text-ink tracking-tight">YebaSMS</span>
        <h1 class="mt-3 font-display text-lg font-semibold text-ink">Connexion à votre compte</h1>
        <p class="mt-1 text-xs text-ink-soft">Entrez vos identifiants pour accéder à votre tableau de bord.</p>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        
        <!-- Champ Email -->
        <div class="space-y-1.5">
          <label for="email" class="block text-xs font-medium text-ink-soft">
            Adresse email
          </label>
          <div class="relative group">
            <input 
              id="email"
              type="email" 
              v-model="email" 
              required 
              placeholder="contact@yebasms.com"
              class="w-full rounded-xl border border-ink/15 bg-bg px-4 py-3 text-base sm:text-sm text-ink placeholder:text-ink-soft/40 outline-none transition-all duration-300 hover:border-ink/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <!-- Champ Mot de passe -->
        <div class="space-y-1.5">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-xs font-medium text-ink-soft">
              Mot de passe
            </label>
            <a href="#forgot-password" class="text-xs text-primary hover:underline font-medium">
              Mot de passe oublié ?
            </a>
          </div>
          <div class="relative group">
            <input 
              id="password"
              :type="showPassword ? 'text' : 'password'" 
              v-model="password" 
              required 
              placeholder="••••••••"
              class="w-full rounded-xl border border-ink/15 bg-bg pl-4 pr-12 py-3 text-base sm:text-sm text-ink placeholder:text-ink-soft/40 outline-none transition-all duration-300 hover:border-ink/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
            <!-- Bouton pour afficher / masquer le mot de passe -->
            <button 
              type="button"
              @click="togglePasswordVisibility"
              class="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink transition-colors focus:outline-none cursor-pointer p-1"
              :title="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'"
            >
              <EyeOff v-if="showPassword" :size="18" />
              <Eye v-else :size="18" />
            </button>
          </div>
        </div>

        <!-- Options supplémentaires (Se souvenir de moi) -->
        <div class="flex items-center justify-between text-xs pt-1">
          <label class="flex items-center space-x-2 cursor-pointer select-none">
            <input 
              type="checkbox" 
              v-model="rememberMe" 
              class="rounded border-ink/20 text-primary focus:ring-primary w-4 h-4 cursor-pointer"
            />
            <span class="text-ink-soft font-medium">Se souvenir de moi</span>
          </label>
        </div>

        <!-- Bouton de soumission -->
        <button 
          type="submit"
          class="w-full rounded-xl bg-primary py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-primary/20 shadow-sm shadow-primary/20 cursor-pointer"
        >
          Se connecter
        </button>

      </form>

      <!-- Lien vers l'inscription -->
      <p class="mt-6 text-center text-xs text-ink-soft">
        Pas encore de compte ? 
        <a href="/auth/register" class="text-primary font-semibold hover:underline">Créer un compte</a>
      </p>

    </div>
  </div>
</template>

<style scoped>
</style>