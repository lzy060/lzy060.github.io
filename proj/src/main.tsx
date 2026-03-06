import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout.tsx'
import Home from './pages/Home.tsx'
import KANA from './pages/KANA.tsx'
import SNT from './pages/SNT.tsx'
// import WRD from './pages/WRD.tsx'
// export const pageNames = ['KANA', 'WRD', 'SNT', 'SNT_DLY', 'WRD_N5']

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: 404,
    children: [
      { index: true, element: <Home /> },
      { path: "kana", element: <KANA /> },
      { path: "wrd", element: <SNT listName='WRD_ruby' /> },
      { path: "snt", element: <SNT listName='SNT1_ruby' /> },
      { path: "snt_dly", element: <SNT listName='SNT_DLY_ruby' /> },
      { path: "wrd_n5", element: <SNT listName='WRD_N5_ruby' /> },
    ],
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <RouterProvider router={router} />
  </StrictMode >
)

export { router };

