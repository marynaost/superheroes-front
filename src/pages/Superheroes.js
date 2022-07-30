import styled from 'styled-components'
import HeroList from 'components/HeroList'

export default function Superheroes(params) {
  return (
    <Section>
      <HeroList />
    </Section>
  )
}

const Section = styled.section`
  height: calc(100vh - 60px);
  max-width: 1200px;
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
