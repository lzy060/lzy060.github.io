import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout.tsx'
import Home from './pages/Home.tsx'
import KANA from './pages/KANA.tsx'
import SNT from './pages/SNT.tsx'
// import WRD from './pages/WRD.tsx'
const listPageNames = [
  ['WRD', 'WRD_ruby.jsonl'],
  ['SNT', 'SNT1_ruby.jsonl'],
  ['SNT_DLY', 'SNT_DLY_ruby.jsonl'],
  ['WRD_N5', 'WRD_N5_ruby.jsonl'],
  ['WRD_KANA_EXAMPLES', 'WRD_KANA_EXAMPLES.csv'],
  ['SNT_KICK_START 😺🍣🥢', 'SNT_KICK_START.csv'],
]

const list = listPageNames.map((it) => {
  return {
    path: it[0].toLowerCase().split(' ')[0], element: (<SNT listName={it[1]} />)
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: 404,
    children: [
      { index: true, element: <Home /> },
      { path: "kana", element: <KANA /> },
      ...list,
    ],
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <RouterProvider router={router} />
  </StrictMode >
)

export { router, listPageNames };

