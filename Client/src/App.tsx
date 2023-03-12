import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ContextProvider } from './ColorsContext'
import {Loading, Browse, Navbar, Signup, Login, AddColor, ColorPage} from './components/Index'

function App() {

  return (
    <div className="App">
      <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loading/>} />
          <Route path='/home' element={<><Navbar/> <Browse/></>} />
          <Route path='/signup' element={<><Navbar/> <Signup/></>} />
          <Route path='/login' element={<><Navbar/> <Login/></>} />
          <Route path='/create' element={<><Navbar/> <AddColor/></>} />
          <Route path='/home/:id' element={<><Navbar/> <ColorPage/></>} />
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  )
}

export default App
