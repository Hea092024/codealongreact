import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './components/MyComponents'

export default function App() {

  const message = "Hello from App"
  return (
    <>
     <h1>Hello</h1>
     <MyComponents message={message} />
    </>
)}