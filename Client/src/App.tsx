import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ContextProvider } from './ColorsContext'
import {Loading, Main, Browse, Navbar, Signup, Login} from './components/Index'

function App() {

  return (
    <div className="App">
      <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loading/>} />
{/*           <Route path='/home' element={<Main/>} /> */}
          <Route path='/home' element={<><Navbar/> <Browse/></>} />
          <Route path='/signup' element={<><Navbar/> <Signup/></>} />
          <Route path='/login' element={<><Navbar/> <Login/></>} />
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  )
}

export default App
