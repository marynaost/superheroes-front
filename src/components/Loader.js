import styled from 'styled-components'

export default function Loader(params) {
  return (
    <Wrapper>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span>Loading</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  span {
    position: absolute;
    top: 75px;
    font-size: 20px;
    letter-spacing: 12px;
    color: #fff;
    text-shadow: 0 0 2px #000;
    left: 15%;
  }

  .shadow {
    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: -1;
    left: 15%;
    filter: blur(1px);
    animation: shadow 0.5s alternate infinite ease;

    @keyframes shadow {
      0% {
        transform: scaleX(1.5);
      }
      40% {
        transform: scaleX(1);
        opacity: 0.7;
      }
      100% {
        transform: scaleX(0.2);
        opacity: 0.4;
      }
    }
    &:nth-child(4) {
      left: 45%;
      animation-delay: 0.2s;
    }
    &:nth-child(5) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }
  }
`

const Circle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #fff;
  left: 15%;
  transform-origin: 50%;
  animation: circle 0.5s alternate infinite ease;
  @keyframes circle {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0%;
    }
  }
  &:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`
