// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  components: [
    { path: '~/modules/auth/components', prefix: 'Auth' },
    { path: '~/modules/onboarding/components', prefix: 'Onboarding' },
    { path: '~/modules/wallet/components', prefix: 'Wallet' },
    { path: '~/modules/packages/components', prefix: 'Packages' },
    { path: '~/modules/messages/components', prefix: 'Messages' },
    { path: '~/modules/chat/components', prefix: 'Chat' },
    { path: '~/modules/api-keys/components', prefix: 'ApiKeys' },
    { path: '~/modules/settings/components', prefix: 'Settings' },
    { path: '~/modules/notifications/components', prefix: 'Notifications' },
    { path: '~/modules/landing/components', prefix: 'Landing' },
    { path: '~/shared/components/ui', prefix: 'Ui' },
    { path: '~/shared/components/layout', prefix: 'Layout' }
  ],
  imports: {
    dirs: [
      'shared/composables',
      'shared/utils',
      'shared/constants',
      'modules/*/composables',
      'modules/*/stores',
      'modules/*/utils',
    ]
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000'
    }
  }
})
