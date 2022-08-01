import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from 'components/Navigation'
// import Loader from 'components/Loader/Loader'
import 'modern-normalize/modern-normalize.css'
import './App.css'
import './index.css'
import HeroDetail from 'components/HeroDetail'
import EditHero from 'components/EditHero'

const Superheroes = lazy(() =>
  import('pages/Superheroes' /* webpackChunkName: "superheroes-page" */),
)
const NewHero = lazy(() =>
  import('pages/NewHero' /* webpackChunkName: "newhero-page" */),
)
// const Gradebooks = lazy(() =>
//   import('pages/Gradebooks' /* webpackChunkName: "Gradebooks-page" */),
// )
// const Students = lazy(() =>
//   import('pages/Students' /* webpackChunkName: "students-page" */),
// )
// const Teachers = lazy(() =>
//   import('pages/Teachers' /* webpackChunkName: "teachers-page" */),
// )
// const Tests = lazy(() =>
//   import('pages/Tests' /* webpackChunkName: "tests-page" */),
// )

export default function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Superheroes />} />
          <Route path=":slug" element={<HeroDetail />} />
          <Route path="edit:heroId" element={<EditHero />} />
          <Route path="new-hero" element={<NewHero />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
