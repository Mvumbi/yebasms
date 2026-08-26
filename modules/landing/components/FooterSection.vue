<script setup lang="ts">
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  Facebook,
  Linkedin,
  MessageCircle,
  Twitter
} from 'lucide-vue-next'

const columns = [
  {
    title: 'Produit',
    links: [
      { name: 'OTP & 2FA (Email)', href: '#otp' },
      { name: 'Campagnes marketing', href: '#marketing' },
      { name: 'Chat en direct', href: '#chat' },
      { name: 'Tarifs', href: '#tarifs' },
      { name: 'Documentation API', href: '#api' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { name: 'Guide de démarrage', href: '#guide' },
      { name: 'Statut du service', href: '#statut' },
      { name: 'Centre d\'aide', href: '#aide' },
      { name: 'Sécurité & Conformité', href: '#securite' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { name: 'À propos', href: '#apropos' },
      { name: 'Contact', href: '#contact' },
      { name: 'Partenaires', href: '#partenaires' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { name: 'Conditions d\'utilisation', href: '#cgu' },
      { name: 'Confidentialité', href: '#confidentialite' },
    ],
  },
]

const socialLinks = [
  { name: 'WhatsApp', href: 'https://whatsapp.com', icon: MessageCircle },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'X', href: 'https://x.com', icon: Twitter },
]
</script>

<template>
  <footer class="bg-ink py-16 text-white/70">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Grille principale -->
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
        
        <!-- Bloc de présentation, contact et réseaux sociaux (Prend 2 colonnes sur lg) -->
        <div class="lg:col-span-2 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <span class="font-display text-2xl font-bold text-white tracking-tight">YebaSMS</span>
            <p class="text-sm leading-relaxed">
              L'infrastructure de communication et l'API WhatsApp Business pensée pour propulser les entreprises en Afrique.
            </p>

            <!-- Informations de contact -->
            <div class="space-y-2 pt-2 text-xs text-white/80">
              <div class="flex items-center space-x-2">
                <MapPin class="w-4 h-4 text-white/50 shrink-0" />
                <span>République démocratique du Congo</span>
              </div>
              <div class="flex items-center space-x-2">
                <Phone class="w-4 h-4 text-white/50 shrink-0" />
                <a href="tel:+243894531708" class="hover:text-white transition-colors">+243 894 531 708</a>
              </div>
              <div class="flex items-center space-x-2">
                <Mail class="w-4 h-4 text-white/50 shrink-0" />
                <a href="mailto:contact@yebasms.com" class="hover:text-white transition-colors">contact@yebasms.com</a>
              </div>
            </div>
          </div>

          <!-- Réseaux sociaux & Région -->
          <div class="space-y-4 pt-2">
            <div class="flex items-center space-x-3">
              <a 
                v-for="social in socialLinks" 
                :key="social.name" 
                :href="social.href" 
                :aria-label="social.name"
                target="_blank" 
                rel="noopener noreferrer"
                class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-colors"
              >
                <component :is="social.icon" class="w-4 h-4" />
              </a>
            </div>

            <div class="flex items-center space-x-2 text-xs text-white/50">
              <Globe class="w-4 h-4" />
              <span>Afrique / RDC (FR)</span>
            </div>
          </div>
        </div>

        <!-- Colonnes de navigation dynamiques (Prennent 4 colonnes sur lg) -->
        <div class="lg:col-span-4 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div v-for="col in columns" :key="col.title" class="space-y-4">
            <p class="font-body text-sm font-semibold text-white tracking-wider uppercase">{{ col.title }}</p>
            <ul class="space-y-3">
              <li v-for="link in col.links" :key="link.name">
                <a 
                  :href="link.href" 
                  class="text-sm transition-colors hover:text-white"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Ligne de séparation et bas de page -->
      <div class="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
        <p>© {{ new Date().getFullYear() }} YebaSMS. Tous droits réservés.</p>
        
        <div class="flex space-x-6 text-white/50">
          <a href="#cgu" class="hover:text-white transition-colors">Mentions légales</a>
          <a href="#confidentialite" class="hover:text-white transition-colors">Politique de cookies</a>
          <a href="#status" class="hover:text-white transition-colors">Statut des systèmes</a>
        </div>
      </div>
    </div>
  </footer>
</template>