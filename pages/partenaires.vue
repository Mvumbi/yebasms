<script setup lang="ts">
useHead({
  title: 'Partenaires — YebaSMS',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les réseaux, agrégateurs et partenaires technologiques qui collaborent avec YebaSMS pour offrir une infrastructure de communication de premier plan en Afrique.',
    },
  ],
})
</script>

<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-gray-100">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-700">
          Écosystème & Réseau
        </div>
        <h1 class="font-display text-4xl md:text-6xl font-extrabold text-[#06080C] tracking-tight">
          Nos Partenaires & Alliances Stratégiques
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Nous collaborons avec les meilleurs agrégateurs, opérateurs et acteurs technologiques pour garantir une couverture optimale à travers l'Afrique.
        </p>
      </div>
    </section>

    <!-- Grille des Partenaires / Catégories -->
    <section class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-6 space-y-16">
        <div class="space-y-4">
          <h2 class="text-2xl md:text-3xl font-display font-bold text-[#06080C]">Un réseau d'experts interconnectés</h2>
          <p class="text-gray-600 max-w-2xl">
            Grâce à nos partenariats avec des passerelles agréées et des acteurs majeurs de la fintech, YebaSMS offre une connectivité stable et sécurisée.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Carte Partenaire 1 -->
          <div class="bg-gray-50/50 p-8 rounded-2xl border border-gray-200/80 space-y-4">
            <div class="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-gray-800 shadow-sm">YP</div>
            <h3 class="text-lg font-bold text-[#06080C]">Yebapay Group</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Maison mère et pilier technologique assurant l'intégration financière et la sécurité globale de la plateforme.</p>
          </div>

          <!-- Carte Partenaire 2 -->
          <div class="bg-gray-50/50 p-8 rounded-2xl border border-gray-200/80 space-y-4">
            <div class="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-emerald-600 shadow-sm">AG</div>
            <h3 class="text-lg font-bold text-[#06080C]">Agrégateurs de Paiement & Passerelles</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Connexions directes avec des acteurs agréés pour fluidifier les règlements d'abonnements et de recharges en devises locales.</p>
          </div>

          <!-- Carte Partenaire 3 -->
          <div class="bg-gray-50/50 p-8 rounded-2xl border border-gray-200/80 space-y-4">
            <div class="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-blue-600 shadow-sm">TEL</div>
            <h3 class="text-lg font-bold text-[#06080C]">Opérateurs Télécoms & Solutions API</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Partenariats d'acheminement garantissant la distribution rapide des messages et des notifications WhatsApp Business.</p>
          </div>
        </div>

        <!-- Section Devenir Partenaire -->
        <div class="bg-[#06080C] text-white p-10 md:p-14 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="space-y-3 max-w-xl">
            <h3 class="text-2xl font-display font-bold">Vous souhaitez devenir partenaire ?</h3>
            <p class="text-gray-400 text-sm">
              Rejoignez notre écosystème et construisez avec nous l'avenir de la communication digitale en Afrique.
            </p>
          </div>
          <router-link
            to="/contact"
            class="px-6 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white font-medium text-sm transition-colors shrink-0"
          >
            Discuter d'un partenariat
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>