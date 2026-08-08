"use client"
import { MotionConfig } from "motion/react"

type Props = {
  children: React.ReactNode;
}

function MotionProvider({ children }: Props){
  return(
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  )
}

export default MotionProvider