import sprite from '../img/sprite.svg'

const Icon = ({ iconName, width, height, fill, stroke, ...props }) => {
  return (
    <svg {...props} width={width} height={height} fill={fill} stroke={stroke}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  )
}

export default Icon
