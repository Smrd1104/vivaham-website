import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index'
import ReactDOM from 'react-dom/client'
import React from 'react' // Add this import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

