import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Fait apparaître en fondu + léger décalage vertical tous les éléments
 * portant [data-reveal] à l'intérieur du conteneur donné, au scroll.
 * Respecte prefers-reduced-motion.
 */
export function useScrollReveal(containerRef: Ref<HTMLElement | null>) {
  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  onMounted(() => {
    if (!containerRef.value) return

    const items = containerRef.value.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!items.length) return

    if (prefersReducedMotion()) {
      items.forEach((el) => (el.style.opacity = '1'))
      return
    }

    gsap.set(items, { opacity: 0, y: 28 })

    items.forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: (i % 4) * 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      })
    })
  })

  onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach((st) => {
      if (containerRef.value && st.trigger && containerRef.value.contains(st.trigger)) {
        st.kill()
      }
    })
  })
}

/**
 * Anime un compteur numérique de 0 (ou start) jusqu'à target quand
 * l'élément entre dans le viewport.
 */
export function useCountUp(
  el: Ref<HTMLElement | null>,
  target: number,
  opts: { suffix?: string; duration?: number; decimals?: number } = {}
) {
  const { suffix = '', duration = 1.6, decimals = 0 } = opts

  onMounted(() => {
    if (!el.value) return

    const counter = { value: 0 }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.value.textContent = target.toFixed(decimals) + suffix
      return
    }

    gsap.to(counter, {
      value: target,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el.value,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        if (el.value) el.value.textContent = counter.value.toFixed(decimals) + suffix
      },
    })
  })
}
