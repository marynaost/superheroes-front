import { useState } from 'react'
import TablePagination from '@mui/material/TablePagination'
import styled from 'styled-components'
import { useFetchHeroesQuery } from 'redux/hero-reducer'
import HeroCard from './HeroCard'
import Loader from './Loader'

function HeroList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationPage, setPaginationPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const { data: hero, isLoading } = useFetchHeroesQuery(currentPage)

  const handleChangePage = (e, newPage) => {
    setPaginationPage(newPage)
    setCurrentPage(newPage + 1)
    handleScroll()
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value))
    setPaginationPage(0)
    setCurrentPage(1)
  }

  const handleScroll = () => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }, 500)
  }

  return (
    <>
      {isLoading && <Loader />}
      {hero && hero.data.length > 0 ? (
        <div>
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
          <PaginationWrap>
            <div>Page: {hero.page}</div>
            <TablePagination
              style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                marginLeft: '15px',
              }}
              component="div"
              rowsPerPageOptions={[5]}
              count={hero.totalCount}
              rowsPerPage={rowsPerPage}
              page={paginationPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </PaginationWrap>
        </div>
      ) : (
        <Notification>
          Sorry, the list of heroes is empty. Add new hero
        </Notification>
      )}
    </>
  )
}
export default HeroList

const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`
const PaginationWrap = styled.div`
  width: 280px;
  height: 50px;
  color: #fff;
  background-color: #b1bde7;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
const Notification = styled.div`
  width: 280px;
  height: 70px;
  font-size: 20px;
  color: #fff;
  padding: 5px;
  margin: 0 auto;
  text-align: center;
  background-color: #b1bde7;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
