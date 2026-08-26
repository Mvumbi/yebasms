<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const sectionRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const swiperRef = ref<any>(null)

const onSwiper = (swiper: any) => {
  swiperRef.value = swiper
}

const testimonials = [
  {
    quote: "L'intégration de l'API WhatsApp s'est faite en moins d'une heure. Le routage des messages est ultra-rapide et nos taux de livraison ont grimpé en flèche.",
    name: "Chantal Mutombo",
    role: "CTO, KivuTech",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Grâce à cette API, nous envoyons des milliers de notifications de paiement automatisées par jour sans aucune interruption de service. Un outil indispensable !",
    name: "David Kabeya",
    role: "Lead Developer, PayNetwork",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Le support technique est ultra réactif et la documentation est claire. Nos clients reçoivent leurs reçus et codes de validation instantanément sur WhatsApp.",
    name: "Sarah Tshilombo",
    role: "Product Manager, YebaSms",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "La fiabilité de la plateforme est impressionnante. Nous avons réduit notre temps de communication client par 5 depuis que nous utilisons leur solution.",
    name: "Jean-Paul Ilunga",
    role: "CEO, Logistica RDC",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80"
  }
]

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return

  if (headerRef.value) {
    gsap.from(headerRef.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
  }
  
  if (swiperRef.value) {
    gsap.from(swiperRef.value.el, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    })
  }
})
</script>

<template>
  <section ref="sectionRef" class="relative overflow-hidden py-24 md:py-32 bg-transparent text-white">
    
    <!-- Grille technique en arrière-plan -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.05]" style="background-image: linear-gradient(to right, #25d366 1px, transparent 1px), linear-gradient(to bottom, #25d366 1px, transparent 1px); background-size: 36px 36px;"></div>

    <div class="relative mx-auto max-w-7xl px-6">
      
      <!-- En-tête de section -->
      <div ref="headerRef" class="mx-auto max-w-3xl text-center space-y-5 mb-16">
        <div class="inline-flex items-center gap-2 rounded-full bg-[#25d366]/15 px-4 py-1.5 border border-[#25d366]/30 backdrop-blur-md">
          <span class="h-2 w-2 rounded-full bg-[#25d366] animate-ping"></span>
          <span class="font-mono text-xs text-[#25d366] uppercase tracking-wider font-semibold">Avis & Témoignages</span>
        </div>

        <h2 class="font-display text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
          Ils intègrent notre API WhatsApp <br />
          <span class="text-[#25d366] drop-shadow-[0_0_20px_rgba(37,211,102,0.3)]">et partagent leur succès.</span>
        </h2>

        <p class="text-lg text-gray-200 font-normal leading-relaxed max-w-2xl mx-auto">
          Découvrez comment nos solutions automatisent la communication de centaines d'entreprises à travers le continent.
        </p>
      </div>

      <!-- Carrousel Swiper -->
      <div class="relative testimonial-carousel">
        <Swiper
          @swiper="onSwiper"
          :modules="[Navigation, Pagination, Autoplay]"
          :space-between="30"
          :centered-slides="false"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          :pagination="{
            clickable: true,
            el: '.swiper-pagination'
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }"
          class="pb-16"
        >
          <SwiperSlide v-for="(item, index) in testimonials" :key="index" class="h-auto">
            <!-- Carte avec fond sombre contrasté et bordure nette -->
            <div class="group relative flex h-full flex-col justify-between rounded-3xl border border-white/20 bg-[#090d0b]/80 p-8 shadow-2xl transition-all duration-300 hover:border-[#25d366] hover:bg-[#090d0b]/95 hover:shadow-[0_0_30px_rgba(37,211,102,0.2)] backdrop-blur-xl">
              
              <!-- Effet lumineux au survol -->
              <div class="absolute -inset-px rounded-3xl bg-gradient-to-b from-[#25d366]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>

              <div class="relative space-y-5">
                <!-- Étoiles -->
                <div class="flex gap-1.5 text-[#25d366]">
                  <template v-for="i in 5" :key="i">
                    <svg class="h-5 w-5 fill-current drop-shadow" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </template>
                </div>
                
                <p class="text-base text-gray-100 leading-relaxed font-normal">
                  "{{ item.quote }}"
                </p>
              </div>

              <!-- Auteur et Photo -->
              <div class="relative flex items-center gap-4 pt-8 mt-8 border-t border-white/15">
                <div class="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#25d366] bg-[#25d366]/10 p-0.5 shadow-md">
                  <img 
                    :src="item.avatar" 
                    :alt="item.name" 
                    class="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 class="font-bold text-white text-base tracking-wide">{{ item.name }}</h3>
                  <p class="text-xs text-[#25d366] font-mono font-semibold uppercase tracking-wider mt-0.5">{{ item.role }}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Contrôles du Carrousel -->
        <div class="flex items-center justify-center gap-6 mt-6">
          <div class="swiper-button-prev group relative !w-12 !h-12 !mt-0 rounded-full border border-white/20 bg-[#090d0b]/85 transition-all hover:border-[#25d366] hover:bg-[#090d0b] hover:shadow-[0_0_15px_rgba(37,211,102,0.3)] !top-auto !left-auto cursor-pointer flex items-center justify-center">
            <svg class="h-6 w-6 text-white transition-colors group-hover:text-[#25d366]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </div>
          
          <div class="swiper-pagination !relative !w-auto !bottom-0"></div>
          
          <div class="swiper-button-next group relative !w-12 !h-12 !mt-0 rounded-full border border-white/20 bg-[#090d0b]/85 transition-all hover:border-[#25d366] hover:bg-[#090d0b] hover:shadow-[0_0_15px_rgba(37,211,102,0.3)] !top-auto !right-auto cursor-pointer flex items-center justify-center">
            <svg class="h-6 w-6 text-white transition-colors group-hover:text-[#25d366]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  width: 28px;
  border-radius: 8px;
  background-color: #25d366;
  box-shadow: 0 0 10px rgba(37, 211, 102, 0.5);
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  content: '';
}

.swiper-slide {
  height: auto;
}
</style>