import { useRoutes } from 'react-router-dom'
import Questionaire from './Questionare'
import BirthdayBlooperGallery from './BirthdayBlooperGallery'
const Router = () => {
  const routes = [
    { path: '/', element: <Questionaire /> },
    { path: '/BirthdayBoy', element: <BirthdayBlooperGallery /> },
  ]
  return useRoutes(routes)
}

export default Router
