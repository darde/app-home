// import React from 'react'
// import { Theme, Reset } from '@resultadosdigitais/tangram-components'
// import { Connect } from '@resultadosdigitais/front-hub/react'
// import App from './componets/App'


// export default Connect(() => (
//   <Theme value={'marketing'}>
//     <Reset />
//     <App />
//   </Theme>
// ))
import React, { useState } from 'react'
import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import { Connect, useCommunication } from '@resultadosdigitais/front-hub/react'
import styled from 'styled-components'

const Container = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 6px;
  background: #fdfdfd;
  margin: 40px auto;
  padding: 40px;
  box-sizing: border-box;
`

const NestedComponentContainer = styled.div`
  width: 300px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  color: ${({ fontColor }) => fontColor};
  justify-content: space-around;
  background: #333;
  align-items: center;
  flex-flow: column nowrap;
`

const NestedComponent = () => {
  const [fontColor, setFontColor] = useState('pink')
  const { emit, useListen } = useCommunication()

  useListen('changeFontColor', value => {
    console.log('app-home NestedComponent useListen changeFontColor: ', value)
    setFontColor(value)
  })

  return (
    <NestedComponentContainer fontColor={fontColor}>
      Hello World
      <button onClick={(e) => emit('changeColor', 'green')}>Emit changeColor</button>
    </NestedComponentContainer>
  )
}

export default Connect(() => {
  const [fontColor, setFontColor] = useState('yellow')
  const { emit, useListen } = useCommunication()

  useListen('changeFontColor', value => {
    console.log('app-home useListen changeFontColor: ', value)
    setFontColor(value)
  })

  console.log('render app-home')
  return (
    <Theme value={'marketing'}>
      <Reset />
      <Container>
        <button style={{ backgroundColor: 'black', color: fontColor }} value="red" onClick={(e) => emit('changeColor', e.target.value)}>
          Emit changeColor event!
        </button>
        <NestedComponent />
      </Container>
    </Theme>
  )
})
