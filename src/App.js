import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from 'components/Navigation'
import Loader from 'components/Loader'
import 'modern-normalize/modern-normalize.css'
import './App.css'
import './index.css'

const Superheroes = lazy(() =>
  import('pages/Superheroes' /* webpackChunkName: "superheroes-page" */),
)
const NewHero = lazy(() =>
  import('pages/NewHero' /* webpackChunkName: "newhero-page" */),
)

const HeroDetail = lazy(() =>
  import('components/HeroDetail' /* webpackChunkName: "herodetail-page" */),
)
const EditHero = lazy(() =>
  import('components/EditHero' /* webpackChunkName: "edithero-page" */),
)

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
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
