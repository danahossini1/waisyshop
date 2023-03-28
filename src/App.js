import React from 'react'
import { Router, useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {

 const router = useRoutes(routes)


  return (
    <div>
      {router}
    </div>
  )
}
