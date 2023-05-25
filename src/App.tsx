import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './pages/main/main'
import { Login } from './pages/login'
import { Navbar } from './components/Navbar'
import { CreatePost } from './pages/create-post/create-post'
import  {Any}
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/anytestpage" element={<Anytest />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
