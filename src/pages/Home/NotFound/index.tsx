import React from 'react'
import Lottie from 'react-lottie';
import EmptyAnimation from '../../../assets/animations/empty.json'
import { Container } from './styles'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <motion.div
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 }
      }}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
      <Container>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: EmptyAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
        />
        <span>
          Nenhum resultado encontrado!
        </span>
      </Container>
    </motion.div>
  )
}

export default NotFound