import React, {useEffect} from 'react'

import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => {
  useEffect(() => {
    fetch("https://strikesmsserver-production.up.railway.app/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
