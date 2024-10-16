import React, { useState } from 'react'

const ColorGuesser = () => {
    const [red, setRed] = useState<number>(0)
    const [green, setGreen] = useState<number>(0)
    const [blue, setBlue] = useState<number>(0)


const [riddleRed]= useState(Math.floor(Math.random() * 256))
const [riddleGreen]=useState(Math.floor(Math.random() * 256))
const [riddleBlue]=useState(Math.floor(Math.random() * 256))


const [showRiddle, setShowRiddle] = useState(false)
    return (
        <div style={{


            background: `rgb(${riddleRed},${riddleGreen},${riddleBlue})`




        }}>
            <div style={{
            width: "300px",
            aspectRatio:1,
            background:`rgb(${red},${green},${blue})`            }}>

            </div>








            <label htmlFor='red'>R - {red}</label> <br />
            <input value={red} onChange={(e) => setRed(Number(e.target.value))} type='range' id='red' min={0} max={255} /> <br />

            <label htmlFor='green'>G - {green}</label> <br />
            <input value={green} onChange={(e) => setGreen(Number(e.target.value))} type='range' id='green' min={0} max={255} /> <br />

            <label htmlFor='blue'>B - {blue}</label> <br />
            <input value={blue} onChange={(e) => setBlue(Number(e.target.value))} type='range' id='blue' min={0} max={255} />


<button onClick={()=>setShowRiddle(true)}>Guess</button>
{showRiddle ? 
<h2>rgb( {riddleRed}, {riddleGreen}, {riddleBlue})</h2>:
<h2>rgb(?,?,?)</h2>
}
        </div>
    )
}

export default ColorGuesser