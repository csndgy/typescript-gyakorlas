import ColorGuesser from './components/ColorGuesser'
import Colors from './components/Colors'
import Coordinates from './components/Coordinates'
import Modal from './components/Modal'

function App() {
  
  let li =[]
  for (let i = 0; i < 100; i++) {
    li.push(i)
  }

  return (<>

<Coordinates/>

  
  {/* <ColorGuesser></ColorGuesser>
  <Modal/>
    <div className='maingrid'>
{li.map(idx=><Colors key={idx} />)}
</div>  */}
</>
  )
}

export default App
