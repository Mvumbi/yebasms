<script setup lang="ts">
const isOpen = ref(false)
const isScrolled = ref(false)

const links = [
  { label: 'Produit', href: '#produit' },
  { label: 'Cas d\'usage', href: '#cas-usage' },
  { label: 'Tarifs', href: '/pricing' },
  { label: 'Documentation', href: '/docs' },
]

onMounted(() => {
  const onScroll = () => (isScrolled.value = window.scrollY > 12)
  window.addEventListener('scroll', onScroll)
  onScroll()
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-colors duration-300',
      isScrolled ? 'bg-white/85 backdrop-blur-md border-b border-ink/10' : 'bg-transparent',
    ]"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="/" class="font-display text-xl font-bold text-ink">
        Yeba<span class="text-primary">SMS</span>
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="l in links"
          :key="l.label"
          :href="l.href"
          class="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          {{ l.label }}
        </a>
      </div>

      <div class="hidden items-center gap-3 md:flex">
        <a href="/auth/login" class="text-sm font-semibold text-ink transition-colors hover:text-primary-dark">
          Se connecter
        </a>
        <a
          href="/auth/register"
          class="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Créer un compte
        </a>
      </div>

      <button
        type="button"
        class="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 md:hidden"
        @click="isOpen = !isOpen"
        aria-label="Ouvrir le menu"
      >
        <Icon :name="isOpen ? 'ph:x-bold' : 'ph:list-bold'" class="h-5 w-5 text-ink" />
      </button>
    </nav>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="border-t border-ink/10 bg-white px-6 py-6 md:hidden">
        <div class="flex flex-col gap-4">
          <a
            v-for="l in links"
            :key="l.label"
            :href="l.href"
            class="text-sm font-medium text-ink-soft"
            @click="isOpen = false"
          >
            {{ l.label }}
          </a>
          <hr class="border-ink/10" />
          <a href="/auth/login" class="text-sm font-semibold text-ink">Se connecter</a>
          <a
            href="/auth/register"
            class="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Créer un compte
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
