import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useFindHeroQuery, useDeleteHeroMutation } from 'redux/hero-reducer'

export default function HeroDetail({ id }) {
  const navigate = useNavigate()
  const { slug } = useParams()
  const heroId = slug.match(/[a-z0-9]+$/)[0]
  const { data } = useFindHeroQuery(heroId, {
    refetchOnMountOrArgChange: true,
  })
  const [deleteHero, { isLoading: isDeleting }] = useDeleteHeroMutation()

  const onDelete = heroId => {
    deleteHero(heroId)
    navigate('/')
  }

  return (
    <>
      {data && (
        <DetailWrap>
          <Wrap>
            <GoBack type="button" onClick={() => navigate('/')}>
              Go back
            </GoBack>
            <Img src={data.data.images} />
            <div style={{ position: 'absolute', bottom: '15px', left: '82px' }}>
              <Button
                type="button"
                style={{ marginRight: '10px' }}
                onClick={() => navigate(`/edit${data.data._id}`)}
              >
                Edit
              </Button>
              <Button type="button" onClick={() => onDelete(heroId)}>
                {isDeleting ? 'Deleting..' : 'Delete'}
              </Button>
            </div>
            <InfoWrap>
              <Info>
                <Span>Nickname: </Span> {data.data.nickname}
              </Info>
              <Info>
                <Span>Real name: </Span> {data.data.real_name}
              </Info>
              <Info>
                <Span>Description: </Span> {data.data.origin_description}
              </Info>
              <Info>
                <Span>Superpowers: </Span> {data.data.superpowers}
              </Info>
              <Info>
                <Span>Catch phrase: </Span> {data.data.catch_phrase}
              </Info>
            </InfoWrap>
          </Wrap>
        </DetailWrap>
      )}
    </>
  )
}

const DetailWrap = styled.div`
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: calc(100vh - 60px);
  }
`

const Wrap = styled.div`
  width: 90%;
  height: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 700px;
    height: 530px;
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (min-width: 1200px) {
    width: 1000px;
    height: 600px;
  }
`

const GoBack = styled.button`
  position: absolute;
  top: 15px;
  left: 44px;
  padding: 0;
  width: 80px;
  height: 30px;
  font-weight: 700;
  border-radius: 10%;
  background-color: #2f3c68;
  color: #fff;
  border: 1px solid #000;
  &:hover,
  &:focus {
    background-color: #5b6897;
    cursor: pointer;
  }
`

const Img = styled.img`
  border-radius: 7%;
  width: 180px;
  height: 250px;
  object-fit: cover;
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 300px;
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 250px;
    height: 350px;
  }
`
const InfoWrap = styled.div`
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`

const Info = styled.p`
  font-size: 12px;
  line-height: 1.4;
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`

const Span = styled.span`
  font-weight: 700;
  color: #000;
`

const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 11px;
  padding: 0;
  font-weight: 700;
  border-radius: 50%;
  color: #fff;
  background-color: #2f3c68;
  border: 1px solid #000;
  cursor: pointer;
  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: pulse 2s infinite;
  &:hover,
  &:focus {
    background-color: #5b6897;
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) {
    width: 70px;
    height: 70px;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(47, 60, 104, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(47, 60, 104, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(47, 60, 104, 0);
    }
  }
`
