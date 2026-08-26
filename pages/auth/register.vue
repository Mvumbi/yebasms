<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/styles'

const lastName = ref('')
const firstName = ref('')
const email = ref('')
const phoneInputRef = ref<HTMLInputElement | null>(null)
let iti: any = null

const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)

const showPassword = ref(false)
const showConfirmPassword = ref(false)

onMounted(() => {
  if (phoneInputRef.value) {
    iti = intlTelInput(phoneInputRef.value, {
      initialCountry: "auto",
      geoIpLookup: (callback: (countryCode: string) => void) => {
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(data => callback(data.country_code))
          .catch(() => callback("cg"))
      },
      separateDialCode: true,
      nationalMode: true,
      autoHideDialCode: false,
    } as any)
  }
})

onUnmounted(() => {
  if (iti) {
    iti.destroy()
  }
})

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert('Les mots de passe ne correspondent pas.')
    return
  }

  if (!acceptTerms.value) {
    alert('Veuillez accepter les conditions générales d\'utilisation.')
    return
  }

  const fullPhoneNumber = iti ? iti.getNumber() : ''

  console.log('Inscription avec:', {
    lastName: lastName.value,
    firstName: firstName.value,
    email: email.value,
    phone: fullPhoneNumber,
    password: password.value
  })
}
</script>

<template>
  <div class="relative min-h-screen bg-bg flex items-center justify-center px-6 py-12 overflow-hidden">

    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -top-32 -right-32"></div>

    <!-- Conteneur élargi à max-w-2xl pour garantir la disposition en flex sur une seule ligne -->
    <div class="relative w-full max-w-2xl bg-white rounded-xl border border-ink/15 p-8 shadow-sm">

      <div class="text-center mb-8">
        <span class="font-display text-2xl font-bold text-ink tracking-tight">YebaSMS</span>
        <h1 class="mt-3 font-display text-lg font-semibold text-ink">Créer votre compte</h1>
        <p class="mt-1 text-xs text-ink-soft">Rejoignez YebaSMS et commencez à envoyer vos messages en toute simplicité.</p>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-4">

        <!-- Ligne 1 : Nom et Prénom en flex -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label for="lastName" class="block text-xs font-medium text-ink-soft">
              Nom
            </label>
            <input
              id="lastName"
              type="text"
              v-model="lastName"
              required
              placeholder="Dupont"
              class="w-full rounded-xl border border-ink/15 bg-bg px-4 py-3 text-base sm:text-sm text-ink placeholder:text-ink-soft/40 outline-none transition-all duration-300 hover:border-ink/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </div>

          <div class="space-y-1.5">
            <label for="firstName" class="block text-xs font-medium text-ink-soft">
              Prénom
            </label>
            <input
              id="firstName"
              type="text"
              v-model="firstName"
              required
              placeholder="Jean"
              class="w-full rounded-xl border border-ink/15 bg-bg px-4 py-3 text-base sm:text-sm text-ink placeholder:text-ink-soft/40 outline-none transition-all duration-300 hover:border-ink/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <!-- Ligne 2 : Numéro de téléphone et Adresse email en flex -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label for="phone" class="block text-xs font-medium text-ink-soft">
              Numéro de téléphone
            </label>
            <div class="phone-wrapper w-full">
              <input
                ref="phoneInputRef"
                id="phone"
                type="tel"
                required
                class="w-full rounded-xl border border-ink/15 bg-bg px-4 py-3 text-base sm:text-sm text-ink placeholder:text-ink-soft/40 outline-none transition-all duration-300 hover:border-ink/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>

          <div class="space-y-1.5">
            <label for="email" class="block text-xs font-medium text-ink-soft">
              Adresse email
            </label>
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

        <div class="space-y-1.5">
          <label for="password" class="block text-xs font-medium text-ink-soft">
            Mot de passe
          </label>
          <div class="relative group">
            <input
              id="password"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              required
              placeholder="••••••••"
              class="w-full rounded-xl border border-ink/15 bg-bg pl-4 pr-12 py-3 text-base sm:text-sm text-ink placeholder:text-ink-soft/40 outline-none transition-all duration-300 hover:border-ink/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
            <button
              type="button"
              @click="togglePassword"
              class="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink transition-colors focus:outline-none cursor-pointer p-1"
              :title="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'"
            >
              <EyeOff v-if="showPassword" :size="18" />
              <Eye v-else :size="18" />
            </button>
          </div>
        </div>

        <div class="space-y-1.5">
          <label for="confirmPassword" class="block text-xs font-medium text-ink-soft">
            Confirmer le mot de passe
          </label>
          <div class="relative group">
            <input
              id="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="confirmPassword"
              required
              placeholder="••••••••"
              class="w-full rounded-xl border border-ink/15 bg-bg pl-4 pr-12 py-3 text-base sm:text-sm text-ink placeholder:text-ink-soft/40 outline-none transition-all duration-300 hover:border-ink/30 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
            <button
              type="button"
              @click="toggleConfirmPassword"
              class="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink transition-colors focus:outline-none cursor-pointer p-1"
              :title="showConfirmPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'"
            >
              <EyeOff v-if="showConfirmPassword" :size="18" />
              <Eye v-else :size="18" />
            </button>
          </div>
        </div>

        <div class="flex items-start space-x-2 text-xs pt-1">
          <input
            id="terms"
            type="checkbox"
            v-model="acceptTerms"
            required
            class="mt-0.5 rounded border-ink/20 text-primary focus:ring-primary w-4 h-4 cursor-pointer"
          />
          <label for="terms" class="text-ink-soft font-medium cursor-pointer select-none">
            J'accepte les <a href="#terms" class="text-primary hover:underline font-semibold">conditions générales d'utilisation</a> de yebaSMS.
          </label>
        </div>

        <button
          type="submit"
          class="w-full mt-2 rounded-xl bg-primary py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-primary/20 shadow-sm shadow-primary/20 cursor-pointer"
        >
          Créer mon compte
        </button>

      </form>

      <p class="mt-6 text-center text-xs text-ink-soft">
        Vous avez déjà un compte ?
        <a href="/auth/login" class="text-primary font-semibold hover:underline">Se connecter</a>
      </p>

    </div>
  </div>
</template>

<style scoped>
/* Conteneur principal de intl-tel-input */
:deep(.phone-wrapper .iti) {
  position: relative;
  display: block;
  width: 100%;
}

/* Zone du drapeau et indicatif : forcée au premier plan avec un z-index élevé */
:deep(.phone-wrapper .iti__flag-container) {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  z-index: 30;
  display: flex;
  align-items: center;
}

:deep(.phone-wrapper .iti__selected-flag) {
  background-color: transparent !important;
  height: 100%;
  padding: 0 12px;
  border-radius: 0.75rem 0 0 0.75rem;
  display: flex;
  align-items: center;
}

/* Ajustement de l'input pour laisser la place au drapeau à gauche */
:deep(.phone-wrapper .iti__tel-input) {
  padding-left: 90px !important;
}

/* Liste déroulante des pays : alignée sur la largeur du wrapper, jamais celle de la carte */
:deep(.phone-wrapper .iti__country-list) {
  position: absolute !important;
  z-index: 9999 !important;
  width: max-content !important;
  min-width: 100% !important;
  max-width: 90vw !important;
  max-height: 220px !important;
  background-color: #ffffff !important;
  border-radius: 0.75rem !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  margin-top: 6px !important;
  overflow-y: auto !important;
  left: 0 !important;
}

/* Barre de recherche interne au menu des pays */
:deep(.phone-wrapper .iti__search-input) {
  width: calc(100% - 1.5rem) !important;
  margin: 0.75rem !important;
  padding: 0.5rem 0.75rem !important;
  border: 1px solid rgba(0, 0, 0, 0.15) !important;
  border-radius: 0.5rem !important;
  outline: none !important;
  font-size: 0.875rem !important;
  background-color: #f9fafb !important;
}
</style>