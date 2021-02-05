import React from 'react'
import Lottie from 'react-lottie';
import EmptyAnimation from '../../../assets/animations/empty.json'
import { Container } from './styles'

const NotFound = () => {
  return (
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
  )
}

export default NotFound