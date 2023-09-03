import './Card.css'
const Card = ({ img, title, details }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt="Card Image" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
    </div>
  )
}
export default Card
