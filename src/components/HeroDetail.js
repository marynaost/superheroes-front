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
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
  height: 600px;
  background-color: #fff;
  padding: 10px;
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
`

const Img = styled.img`
  border-radius: 7%;
  width: 250px;
  height: 350px;
  object-fit: cover;
`
const InfoWrap = styled.div`
  width: 600px;
`

const Info = styled.p`
  font-size: 18px;
  line-height: 1.4;
`

const Span = styled.span`
  font-weight: 700;
  color: #000;
`

const Button = styled.button`
  width: 70px;
  height: 70px;
  padding: 0;
  font-weight: 700;
  border-radius: 50%;
  color: #fff;
  background-color: #2f3c68;
  border: 1px solid #000;
`
