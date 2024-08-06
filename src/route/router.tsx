import App from '@/App'
import Template from '@/components/templates/Template'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/template',
    element: <Template />,
  },
])

export default router
