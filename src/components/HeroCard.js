import styled from 'styled-components'
import slugify from 'slugify'
import { useNavigate } from 'react-router-dom'
export default function HeroCard({ image, name, id }) {
  const navigate = useNavigate()
  return (
    <Card
      onClick={() => navigate(`/${slugify(`${name} ${id}`, { lower: true })}`)}
    >
      <Img src={image} alt={name} />
      <h3 style={{ textAlign: 'center' }}>{name}</h3>
    </Card>
  )
}

const Card = styled.li`
  width: 280px;
  background: #000;
  border: 7px solid #000;
  border-radius: 7%;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 139px;
    margin: 0;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 200px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05);
  }
`
const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 7%;

  @media screen and (min-width: 768px) {
    height: 200px;
  }
  @media screen and (min-width: 1200px) {
    height: 250px;
  }
`
