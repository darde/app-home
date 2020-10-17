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
import React from 'react'
import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import { Connect, emit } from '@resultadosdigitais/front-hub/react'
import App from './componets/App'


export default Connect(() => {
  const { emit } = useCommunication()

  return (
    <Theme value={'marketing'}>
      <Reset />
      <App />
      <button value="red" onClick={(e) => emit('changeColor', e.target.value)}>
        Change my color
      </button>
    </Theme>
  )
})
