
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Routes/Contact'
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'

function App() {

  return (
    <>
    {/* <Counter/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacto' element={<Contact/>} />
        <Route path='/dentist/:id' element={<Detail/>}/>
        <Route path='/favs' element={<Favs/>}/>
      </Routes>
    </>
  )

}

export default App