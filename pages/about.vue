<script setup lang="ts">
useHead({
  title: 'À propos — YebaSMS',
  meta: [
    {
      name: 'description',
      content: 'Découvrez l\'histoire, la vision et l\'équipe derrière YebaSMS, solution d\'infrastructure de communication et d\'API WhatsApp Business propulsée par Yebapay Group en RDC.',
    },
  ],
})
</script>

<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-gray-100 overflow-hidden">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-700">
          <span class="w-2 h-2 rounded-full bg-[#25d366]"></span>
          Yebapay Group Company
        </div>
        <h1 class="font-display text-4xl md:text-6xl font-extrabold text-[#06080C] tracking-tight">
          Propulser la communication des entreprises en Afrique
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Née de la vision de bâtir une infrastructure technologique robuste pour le continent, YebaSMS simplifie les échanges entre les organisations et leurs clients.
        </p>
      </div>
    </section>

    <!-- Notre ADN : Yebapay Group -->
    <section class="py-20 md:py-28 bg-gray-50/50">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="space-y-6">
          <div class="text-xs font-mono font-bold uppercase tracking-widest text-[#25d366]">Notre force</div>
          <h2 class="text-3xl md:text-4xl font-display font-bold text-[#06080C] tracking-tight">
            Adossé à l'écosystème de Yebapay Group
          </h2>
          <p class="text-gray-600 leading-relaxed text-base">
            YebaSMS ne se contente pas d'être un simple outil d'envoi de messages. En tant que produit du <strong>Groupe Yebapay</strong>, notre infrastructure bénéficie d'une rigueur financière, d'une expertise technique de pointe et d'une vision à long terme taillée pour les exigences des marchés africains.
          </p>
          <p class="text-gray-600 leading-relaxed text-base">
            Cette synergie nous permet d'offrir une plateforme hautement sécurisée, combinant messagerie instantanée, services d'authentification (OTP & 2FA) et intégrations de paiement fluides.
          </p>
        </div>
        <div class="bg-white p-8 md:p-10 rounded-2xl border border-gray-200/80 shadow-sm space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-[#25d366]/10 flex items-center justify-center text-[#25d366] font-bold text-xl">Y</div>
            <div>
              <h3 class="font-bold text-lg text-[#06080C]">Yebapay Group</h3>
              <p class="text-xs text-gray-500">Innovation & Infrastructure Fintech</p>
            </div>
          </div>
          <div class="border-t border-gray-100 pt-6 space-y-4 text-sm text-gray-600">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#25d366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Sécurité de niveau bancaire et conformité rigoureuse.</span>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#25d366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Interopérabilité totale avec les solutions de paiement du groupe.</span>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-[#25d366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Support technique local et réactif.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ancrage RDC & Afrique -->
    <section class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="order-2 lg:order-1 bg-[#06080C] text-white p-8 md:p-12 rounded-2xl space-y-6">
          <h3 class="text-2xl font-display font-bold">Un ancrage profond au cœur de l'Afrique</h3>
          <p class="text-gray-300 text-sm leading-relaxed">
            Établi avec son siège social en <strong>République Démocratique du Congo</strong>, YebaSMS comprend de l'intérieur les défis spécifiques des entreprises locales, des startups et des grandes structures opérant sur le continent.
          </p>
          <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
            <span>Siège Social : RDC</span>
            <span>Portée : Continentale</span>
          </div>
        </div>
        <div class="order-1 lg:order-2 space-y-6">
          <div class="text-xs font-mono font-bold uppercase tracking-widest text-[#25d366]">Souveraineté & Proximité</div>
          <h2 class="text-3xl md:text-4xl font-display font-bold text-[#06080C] tracking-tight">
            Pensé en Afrique, pour les réalités africaines
          </h2>
          <p class="text-gray-600 leading-relaxed text-base">
            Plutôt que d'importer des standards déconnectés du terrain, nous concevons nos outils en restant au plus près de nos utilisateurs. Cela se traduit par une haute fiabilité même dans les zones à connectivité fluctuante et une adaptation parfaite aux modes de facturation locaux.
          </p>
        </div>
      </div>
    </section>

    <!-- Vision & Valeurs -->
    <section class="py-20 md:py-28 bg-gray-50/50 border-t border-gray-100">
      <div class="max-w-6xl mx-auto px-6 space-y-16">
        <div class="text-center max-w-2xl mx-auto space-y-4">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-[#06080C]">Nos valeurs fondamentales</h2>
          <p class="text-gray-600">Ce qui guide chaque ligne de code et chaque relation client chez YebaSMS.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl border border-gray-200/80 space-y-4">
            <div class="w-10 h-10 rounded-lg bg-[#25d366]/10 text-[#25d366] flex items-center justify-center font-bold">01</div>
            <h3 class="text-lg font-bold text-[#06080C]">Fiabilité absolue</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Une infrastructure hautement disponible pour garantir que vos codes OTP et messages critiques arrivent instantanément.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl border border-gray-200/80 space-y-4">
            <div class="w-10 h-10 rounded-lg bg-[#25d366]/10 text-[#25d366] flex items-center justify-center font-bold">02</div>
            <h3 class="text-lg font-bold text-[#06080C]">Simplicité d'intégration</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Des API claires, documentées et pensées pour permettre aux développeurs d'être opérationnels en quelques minutes.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl border border-gray-200/80 space-y-4">
            <div class="w-10 h-10 rounded-lg bg-[#25d366]/10 text-[#25d366] flex items-center justify-center font-bold">03</div>
            <h3 class="text-lg font-bold text-[#06080C]">Impact local</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Accompagner la digitalisation des entreprises africaines en leur donnant les armes des plus grandes multinationales.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>