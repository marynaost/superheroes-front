import { useState } from 'react'
import TablePagination from '@mui/material/TablePagination'
import styled from 'styled-components'
import { useFetchHeroesQuery } from 'redux/hero-reducer'
import HeroCard from './HeroCard'
import Loader from './Loader'

function HeroList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationPage, setPaginarionPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const { data: hero, isLoading } = useFetchHeroesQuery(currentPage)

  const handleChangePage = (e, newPage) => {
    setPaginarionPage(newPage)
    setCurrentPage(newPage + 1)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value))
    setPaginarionPage(0)
    setCurrentPage(1)
  }

  return (
    <>
      {isLoading && <Loader />}
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
        </Container>
      )}
    </>
  )
}
export default HeroList

const Container = styled.div``

const List = styled.ul`
  display: flex;
  justify-content: center;
`
const PaginationWrap = styled.div`
  width: 400px;
  height: 50px;
  color: #fff;
  background-color: #b1bde7;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
