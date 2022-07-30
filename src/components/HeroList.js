import { useState, useEffect } from 'react'
import styled from 'styled-components'
// import Pagination from '../Pagination/Pagination'
import { useFetchHeroesQuery } from 'redux/hero-reducer'
import HeroCard from './HeroCard'
// import heroesSelectors from '../../Redux/Nuvem/heroes-selectors'
import { useSelector } from 'react-redux'

function HeroList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [heroesPerPage] = useState(5)
  //   const heroes = useSelector(heroesSelectors.getHeroes)

  //   const indexOfLastHero = currentPage * heroesPerPage
  //   const indexOfFirstHero = indexOfLastHero - heroesPerPage
  //   const currentHero = heroes.slice(indexOfFirstHero, indexOfLastHero)
  const { data: hero } = useFetchHeroesQuery()
  const info = useFetchHeroesQuery()
  console.log(info)
  // const { data } = hero
  // console.log(data)
  console.log(hero)
  //   const paginate = pageNumber => setCurrentPage(pageNumber)
  //   useEffect(() => {
  //     first

  //     return () => {
  //       second
  //     }
  //   }, [third])

  return (
    <>
      {hero && (
        <Container>
          <List>
            {hero.data.map(hero => (
              <HeroCard
                key={hero._id}
                id={hero._id}
                image={hero.images}
                name={hero.nickname}
              />
            ))}
          </List>
        </Container>
      )}

      {/* {data.map(hero => console.log(hero))} */}
      {/* <Pagination
        heroesPerPage={heroesPerPage}
        totalHeroes={heroes.length}
        paginate={paginate}
      /> */}
    </>
  )
}
export default HeroList

const Container = styled.div``

const List = styled.ul`
  display: flex;
`
