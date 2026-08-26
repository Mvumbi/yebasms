<template>
  <div class="min-h-screen flex flex-col bg-white text-ink font-sans selection:bg-primary/10 selection:text-primary">
    <LandingNavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <LandingFooterSection />
  </div>
</template>