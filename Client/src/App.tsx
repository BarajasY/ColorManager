import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ContextProvider } from './ColorsContext'
import {Loading, Main, Browse, Navbar} from './components/Index'

function App() {

  return (
    <div className="App">
      <ContextProvider>
      <BrowserRouter>
      {/* Starter Routes, introduction and my logo. */}
        <Routes>
          <Route path='/' element={<Loading/>} />
          <Route path='/home' element={<Main/>} />
          <Route path='/home/browse' element={<><Navbar/> <Browse/></>} />
        </Routes>
      </BrowserRouter>
      {/* Introduced Navbar only after Main, this way we do not break the scenario. */}
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  )
}

export default App
