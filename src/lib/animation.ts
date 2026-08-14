import { animate } from "motion/react"
import type { Variants } from "motion/react"

/* CONTAINERS */
export const motionContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 }}
}

/* ITEMS */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const fadeDownItem: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const fadeRightItem: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

/* MICROINTERAÇÕES */

/* Empurra a seta de um botão para o lado que ela indica e traz de volta.

   Anima o <svg>, e não o próprio botão, para não brigar com os transforms
   de hover — os dois disputariam a mesma propriedade.

   O guard de reduced-motion é manual de propósito: o `reducedMotion="user"`
   do MotionProvider só alcança componentes motion.* dentro da árvore React,
   e este animate() imperativo roda fora dela. */
export function nudge(button: HTMLElement, direction: -1 | 1){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const arrow = button.querySelector('svg')
  if (!arrow) return

  animate(arrow, { x: [0, direction * 8, 0] }, { duration: 0.3, ease: 'easeOut' })
}