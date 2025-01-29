import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card auther="Dayabhai" tetimonials="First testimonials content here" designation="Manager" />
    <Card auther="Rameshbhai" tetimonials="Second testimonials content here" designation="CEO" />
  </StrictMode>,
)
