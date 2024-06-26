import './App.css'
import Dashboard from './Componentes/Dashboards/dashboard'
import Login from './Componentes/Login/login'
import Cadastro from './Componentes/Cadastro/cadastro'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/cadastro',
    element: <div><Cadastro/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
export default App
