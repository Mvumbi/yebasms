<script setup lang="ts">
const stats = [
  '50M+ messages livrés',
  '99.9% de disponibilité',
  '80 pays connectés',
  '< 2s de latence moyenne',
  'Mobile Money & carte',
  'API en 15 min chrono',
]
</script>

<template>
  <section class="overflow-hidden bg-ink py-5">
    <div class="flex w-max animate-marquee gap-10 whitespace-nowrap">
      <template v-for="n in 2" :key="n">
        <span v-for="(s, i) in stats" :key="`${n}-${i}`" class="flex items-center gap-10">
          <span class="font-mono text-sm font-medium text-white/80">{{ s }}</span>
          <span class="text-primary">✦</span>
        </span>
      </template>
    </div>
  </section>
</template>
