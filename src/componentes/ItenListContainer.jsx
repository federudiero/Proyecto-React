import React from 'react'

function ItenListContainer({nombre ,saludo}) {
  return (
    <>
   
    <h1>
        {
            `hola ${nombre} ${saludo} que estes bien`
        }
    </h1>
    </>
  )
}

export default ItenListContainer