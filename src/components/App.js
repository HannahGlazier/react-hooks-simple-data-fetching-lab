import React, { useState, useEffect } from 'react'

const url = 'https://dog.ceo/api/breeds/image/random'

function App() {

    const [dogPic, setDogPic] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(response => response.json()) 
        .then((data) => {
            setDogPic(data.message)
        })
    }, [])

    if(!dogPic) return <p>Loading...</p>

  return (
    <img src={dogPic} alt="A Random Dog"></img>
  )
}

export default App
