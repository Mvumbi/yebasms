<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const heroRef = ref<HTMLElement | null>(null)
const phoneRef = ref<HTMLElement | null>(null)
const labelRef = ref<HTMLElement | null>(null)
const otpRef = ref<HTMLElement | null>(null)
const marketingRef = ref<HTMLElement | null>(null)
const chatRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Entrée du texte + du téléphone
  if (!reduced && heroRef.value && phoneRef.value) {
    const items = heroRef.value.querySelectorAll('[data-hero-item]')
    gsap.set(items, { opacity: 0, y: 24 })
    gsap.set(phoneRef.value, { opacity: 0, y: 30, rotate: 6, scale: 0.96 })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.to(items, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 })
      .to(phoneRef.value, { opacity: 1, y: 0, rotate: -2, scale: 1, duration: 0.9 }, '-=0.5')
  }

  // Boucle des 3 scénarios dans l'écran du téléphone
  if (!reduced && otpRef.value && marketingRef.value && chatRef.value && labelRef.value) {
    const setLabel = (text: string) => {
      if (labelRef.value) labelRef.value.textContent = text
    }

    const loop = gsap.timeline({ repeat: -1, delay: 1.4 })
    loop
      .call(() => setLabel('OTP instantané'))
      .to({}, { duration: 2.4 })
      .to(otpRef.value, { opacity: 0, y: -12, duration: 0.5 })
      .call(() => setLabel('Campagne marketing'))
      .fromTo(marketingRef.value, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 })
      .to({}, { duration: 2.4 })
      .to(marketingRef.value, { opacity: 0, y: -12, duration: 0.5 })
      .call(() => setLabel('Conversation client'))
      .fromTo(chatRef.value, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 })
      .to({}, { duration: 2.4 })
      .to(chatRef.value, { opacity: 0, y: -12, duration: 0.5 })
      .call(() => setLabel('OTP instantané'))
      .fromTo(otpRef.value, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 })
  }
})
</script>

<template>
  <section ref="heroRef" class="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">

    <!-- Motif de lignes d'arrière-plan stylisé -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>

    <!-- Lueur décorative subtile en arrière-plan -->
    <div class="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -top-32 -left-32"></div>

    <!-- Motif signature : bulle de chat en filigrane (décoration de section) -->
    <svg
      class="pointer-events-none absolute -right-16 -top-10 h-[26rem] w-[26rem] rotate-6 text-primary/[0.08] md:-right-4"
      viewBox="0 0 400 320"
      fill="none"
    >
      <rect x="10" y="10" width="380" height="240" rx="60" stroke="currentColor" stroke-width="3" />
      <path d="M60 250 L60 305 L125 250 Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
    </svg>

    <div class="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
      <!-- Colonne texte -->
      <div>
        <span data-hero-item class="eyebrow mb-6">API WhatsApp Business</span>

        <h1 data-hero-item class="font-display text-4xl font-bold leading-[1.08] text-ink md:text-6xl">
          WhatsApp, à la
          <span class="text-primary">vitesse de l'Afrique.</span>
        </h1>

        <p data-hero-item class="mt-6 max-w-lg text-lg text-ink-soft md:text-xl">
          OTP, campagnes marketing et conversations clients — une seule API,
          payée en Mobile Money ou carte, dans votre devise locale.
        </p>

        <div data-hero-item class="mt-9 flex flex-wrap items-center gap-4">
          <a href="/auth/register" class="btn-primary">
            Créer un compte gratuit
          </a>
          <a href="/docs" class="btn-ghost">
            Voir la documentation
          </a>
        </div>

        <div data-hero-item class="mt-10 flex items-center gap-3 font-mono text-xs text-ink-soft">
          <span class="flex h-2 w-2 rounded-full bg-primary" />
           Mobile Money · Carte bancaire · +100 pays connectés dans le monde · Paiement en USD, EUR, XAF, GHS, NGN, KES, CDF, XOF, UGX, ZAR...
        </div>
      </div>

      <!-- Colonne mockup iPhone 16 Pro Max -->
      <div class="flex justify-center md:justify-end">
        <div ref="phoneRef" class="relative w-[290px]">
          <span
            ref="labelRef"
            class="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-wider text-primary-dark"
          >OTP instantané</span>

          <!-- Châssis iPhone 16 Pro Max : cadre titane brossé + boutons réalistes -->
          <div class="relative rounded-[3.4rem] bg-gradient-to-br from-[#e4e1d8] via-[#8d8a83] to-[#3f3d3a] p-[3px] shadow-[0_35px_70px_-20px_rgba(0,0,0,0.35)]">
            <div class="relative rounded-[3.3rem] bg-black p-[9px]">

              <!-- Bouton Action (haut, gauche) -->
              <div class="absolute -left-[3px] top-[92px] h-7 w-[3px] rounded-l-sm bg-gradient-to-b from-[#2c2c2e] to-[#111]"></div>
              <!-- Volume + / - -->
              <div class="absolute -left-[3px] top-[132px] h-11 w-[3px] rounded-l-sm bg-gradient-to-b from-[#2c2c2e] to-[#111]"></div>
              <div class="absolute -left-[3px] top-[182px] h-11 w-[3px] rounded-l-sm bg-gradient-to-b from-[#2c2c2e] to-[#111]"></div>
              <!-- Bouton latéral (power) -->
              <div class="absolute -right-[3px] top-[150px] h-16 w-[3px] rounded-r-sm bg-gradient-to-b from-[#2c2c2e] to-[#111]"></div>
              <!-- Camera Control -->
              <div class="absolute -right-[3px] top-[230px] h-9 w-[3px] rounded-r-sm bg-gradient-to-b from-[#3a3a3c] to-[#1c1c1e]"></div>

              <!-- Écran -->
              <div class="relative flex h-[580px] w-full flex-col overflow-hidden rounded-[2.9rem] bg-white">

                <!-- Dynamic Island -->
                <div class="absolute left-1/2 top-[10px] z-40 flex h-[32px] w-[104px] -translate-x-1/2 items-center justify-end gap-1.5 rounded-full bg-black pr-2.5">
                  <span class="h-[9px] w-[9px] rounded-full bg-[#1c1c1e] ring-[0.5px] ring-white/10"></span>
                </div>

                <!-- Barre de statut iOS -->
                <div class="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 pt-2.5 text-black">
                  <span class="font-sans text-[13px] font-semibold tracking-tight">9:41</span>
                  <div class="flex items-center gap-[5px]">
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="6.5" width="2.6" height="4.5" rx="0.6"/><rect x="4.7" y="4.5" width="2.6" height="6.5" rx="0.6"/><rect x="9.4" y="2.3" width="2.6" height="8.7" rx="0.6"/><rect x="14.1" y="0" width="2.6" height="11" rx="0.6"/></svg>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M1 3.8a9.5 9.5 0 0113 0M3.2 6.4a6 6 0 018.6 0M5.6 9a2.6 2.6 0 013.8 0"/></svg>
                    <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke="currentColor" stroke-opacity="0.35"/><rect x="2" y="2" width="17" height="7" rx="1.5" fill="currentColor"/><rect x="21.5" y="3.3" width="1.8" height="4.4" rx="0.8" fill="currentColor" fill-opacity="0.35"/></svg>
                  </div>
                </div>

                <!-- En-tête WhatsApp (design actuel : fond clair) -->
                <div class="relative z-20 flex items-center justify-between border-b border-black/[0.06] bg-white px-3 pt-11 pb-2.5">
                  <div class="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#075e54" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
                    <div class="relative ml-0.5">
                      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 font-display text-[13px] font-bold text-primary-dark">
                        Y
                      </div>
                      <span class="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#25d366] ring-2 ring-white"></span>
                    </div>
                    <div class="ml-1">
                      <div class="flex items-center gap-1">
                        <p class="font-body text-[13px] font-semibold text-black">YebaSMS</p>
                        <svg class="h-3 w-3 text-[#25d366]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-1.9 14.7L5.6 12.2l1.4-1.4 3.1 3.1 7-7 1.4 1.4-8.4 8.4z"/>
                        </svg>
                      </div>
                      <p class="text-[10px] text-black/40">en ligne</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-3.5 text-[#075e54]">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
                  </div>
                </div>

                <!-- Zone de chat -->
                <div class="relative flex-1 overflow-hidden bg-[#efeae2] p-3">

                  <!-- Scénario 1 : OTP -->
                  <div ref="otpRef" class="absolute inset-x-3 top-3 z-10 space-y-1.5">
                    <div class="relative ml-auto max-w-[85%] rounded-xl rounded-tr-none bg-[#d9fdd3] px-3.5 py-2.5 text-xs text-ink shadow-sm">
                      <p class="font-medium">Votre code de vérification sécurisé est</p>
                      <p class="mt-1 font-mono text-sm font-bold tracking-wider text-primary-dark">482 913</p>
                      <div class="mt-1 flex items-center justify-end gap-1 text-[9px] text-ink-soft">
                        <span>09:41</span>
                        <svg width="13" height="9" viewBox="0 0 16 11" fill="none"><path d="M1 5.5 4.5 9 11 1.5M5.5 5.5 9 9 15.5 1.5" stroke="#53bdeb" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </div>
                    </div>
                  </div>

                  <!-- Scénario 2 : Marketing -->
                  <div ref="marketingRef" class="absolute inset-x-3 top-3 z-10 space-y-1.5 opacity-0">
                    <div class="relative max-w-[88%] rounded-xl rounded-tl-none bg-white px-3.5 py-2.5 text-xs text-ink shadow-sm">
                      <p class="leading-relaxed"><strong>-20%</strong> sur toute la boutique aujourd'hui seulement avec YebaPay. Répondez OUI pour votre code promo !</p>
                      <div class="mt-1 flex items-center justify-end gap-1 text-[9px] text-ink-soft">
                        <span>09:42</span>
                      </div>
                    </div>
                  </div>

                  <!-- Scénario 3 : Conversation Client -->
                  <div ref="chatRef" class="absolute inset-x-3 top-3 z-10 space-y-1.5 opacity-0">
                    <div class="relative max-w-[80%] rounded-xl rounded-tl-none bg-white px-3.5 py-2.5 text-xs text-ink shadow-sm">
                      <p>Bonjour, ma commande #2291 est arrivée où ?</p>
                      <div class="mt-1 flex items-center justify-end gap-1 text-[9px] text-ink-soft"><span>09:42</span></div>
                    </div>
                    <div class="relative ml-auto max-w-[80%] rounded-xl rounded-tr-none bg-[#d9fdd3] px-3.5 py-2.5 text-xs text-ink shadow-sm">
                      <p>Elle est en route, livraison prévue avant 18h</p>
                      <div class="mt-1 flex items-center justify-end gap-1 text-[9px] text-ink-soft">
                        <span>09:42</span>
                        <svg width="13" height="9" viewBox="0 0 16 11" fill="none"><path d="M1 5.5 4.5 9 11 1.5M5.5 5.5 9 9 15.5 1.5" stroke="#53bdeb" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </div>
                    </div>
                  </div>

                </div>

                <!-- Barre de saisie WhatsApp -->
                <div class="z-20 flex items-center gap-2 border-t border-black/[0.06] bg-white px-3 py-2.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b8b8b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                  <div class="flex flex-1 items-center justify-between rounded-full border border-black/[0.08] bg-[#f4f4f4] px-3.5 py-2">
                    <span class="text-[12px] text-black/35">Message</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b8b8b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8a2 2 0 012-2h1.2l.7-1.4A2 2 0 019.7 3.5h4.6a2 2 0 011.8 1.1L16.8 6H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"/><circle cx="12" cy="12.5" r="3.4"/></svg>
                  </div>
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15a3 3 0 003-3V6a3 3 0 10-6 0v6a3 3 0 003 3z"/><path d="M19 11a7 7 0 01-14 0M12 19v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>