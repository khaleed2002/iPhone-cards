import { useState } from 'react'
import './Card.css'
const Card = ({ img, name, details, notInterested, id }) => {
  const [isShowmore, setIsShowmore] = useState(false)
  const handleShowmore = () => {
    setIsShowmore(true)
  }
  const handleShowless = () => {
    setIsShowmore(false)
  }
  const handleNotInterested = () => {
    notInterested(id)
  }
  return (
    <div className={isShowmore ? 'no-card-wrap' : 'card-wrap'}>
      <div className="card">
        <img src={img} className="card-img" alt="Card Image" />
        <div className="card-content">
          <h3 className="inner-title">{name}</h3>
          {details.length > 200 ? (
            !isShowmore ? (
              <div>
                <p>{details.slice(0, 200).concat('...')}</p>
                <button className="blue-button" onClick={handleShowmore}>
                  Read more
                </button>
              </div>
            ) : (
              <div>
                <p>{details}</p>
                <button className="blue-button" onClick={handleShowless}>
                  Show less
                </button>
              </div>
            )
          ) : (
            <p>{details}</p>
          )}
          <button className="btn--not-interested" onClick={handleNotInterested}>
            not interested
          </button>
        </div>
      </div>
    </div>
  )
}
export default Card
