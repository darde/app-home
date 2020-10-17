import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 80%;
  height: 400px;
  border-radius: 6px;
  background: lightblue;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`
const AppColor = styled.div`
  width: 300px;
  height: 70px;
  border-radius: 4px;
  background: ${({ bgColor }) => bgColor};
`

function App() {
  return (
    <AppContainer>
      <AppColor bgColor="black" />
    </AppContainer>
  )
}

export default App
