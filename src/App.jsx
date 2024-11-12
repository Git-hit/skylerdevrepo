import './App.css'
import Blog from './components/blog'
import BlogPost from './components/blogPost'
import Contact from './components/contact'
import Footer from './components/footer'
import Home from './components/home'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App