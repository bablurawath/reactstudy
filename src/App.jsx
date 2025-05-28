// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import NavBar from './components/NavBar'
import MediaGallery from './components/MediaGallery';
import routes from './components/Routes'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <MediaGallery />
      </div>

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      
    </>
  )
}

export default App
