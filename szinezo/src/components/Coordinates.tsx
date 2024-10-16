import React, { useState } from 'react'

const Coordinates = () => {
    const [xPos, setXPos] = useState<number>(20)
    const [yPos, setYPos] = useState<number>(20)
    type Marker = {
        xpos: number,
        ypos: number
    }


const [markers, setMarkers] = useState<Marker[]>([])

const pinMarker = () => {
    setMarkers([...markers, {xpos:xPos, ypos:yPos}])
    setXPos(0)
    setYPos(0)
}


  return (
    <div>
    <div className='map' style={{width:"150px",
        aspectRatio:1,
        border:"1px solid black", 
        position: 'relative'
    }}>

<div style={{
    width:"10px",
    aspectRatio:1,
    background: "black",
    position:'absolute',
    left:xPos,
    bottom:yPos
}}></div>


    </div>
        <label htmlFor="xPos">X: </label>
        <input value={xPos}
         onChange={(e)=>setXPos(Number(e.target.value))} max={140} type='range' id='xPos' />
        <label htmlFor="xPos">Y: </label>
        <input onChange={(e)=>setYPos(Number(e.target.value))} max={139} value={yPos} type='range' id='yPos' />
        
        <br />

        <button onClick={pinMarker}>Pin Marker</button>
    </div>
    
  )
}

export default Coordinates