import React, { useState } from 'react'
import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import { Connect, useCommunication } from '@resultadosdigitais/front-hub/react'
import App from './componets/App'


export default Connect(() => {
  const { listen } = useCommunication()
  const [color, setColor] = useState('black')

  listen('changeColor', (value) => {
    setColor(value)
  })

  return (
    <Theme value={'marketing'}>
      <Reset />
      <App />

    </Theme>
  )
}
