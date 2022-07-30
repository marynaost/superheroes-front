import styled from 'styled-components'
import slugify from 'slugify'
import { useNavigate } from 'react-router-dom'
export default function HeroCard({ image, name, id }) {
  const navigate = useNavigate()
  console.log(id)
  return (
    <Card
      onClick={() => navigate(`/${slugify(`${name} ${id}`, { lower: true })}`)}
    >
      <Img src={image} alt={name} />
      <h3>{name}</h3>
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
`
const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 7%;
`
