import Card from './Card'

const Cards = ({ cards }) => {
  
  return cards.map((card) => {
    return <Card {...card} key={card.id} />
  })
}
export default Cards
