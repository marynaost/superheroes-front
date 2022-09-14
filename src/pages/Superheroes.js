import styled from 'styled-components'
import HeroList from 'components/HeroList'

export default function Superheroes(params) {
  return (
    <Section>
      <Text>
        If you deleted a hero, please add a new hero with real information, not
        abracadabra. Don't be a lazy frog
      </Text>
      <HeroList />
    </Section>
  )
}

const Section = styled.section`
  height: calc(100% - 60px);
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`

const Text = styled.p`
  width: 280px;
  padding: 5px;
  background-color: #b1bde7;
  color: #fff;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
