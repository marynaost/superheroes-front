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
  width: 200px;
  background: #000;
  border: 7px solid #000;
  border-radius: 7%;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05);
  }
`
const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 7%;
`
