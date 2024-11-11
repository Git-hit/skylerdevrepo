import './App.css'
import Blog from './components/blog'
import BlogPost from './components/blogPost'
import Contact from './components/contact'
import Footer from './components/footer'
import Home from './components/home'
import Navbar from './components/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/blog/:slug',
    element: <BlogPost />
  }
])

function App() {
  return(
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App