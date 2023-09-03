import Card from './Card'
import './Cards.css'
const Cards = ({ cards, notInterested }) => {
  return (
    <ul className="cards-container fade-in">
      {cards.map((card) => (
        <li key={card.id} className="card-wrap">
          <Card {...card} notInterested={() => notInterested(card.id)} />
        </li>
      ))}
    </ul>
  )
}
export default Cards
