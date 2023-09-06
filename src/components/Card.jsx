import { useState } from 'react'
import './Card.css'
const Card = ({ img, name, details, notInterested, id, amazon_link }) => {
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
        <a href={amazon_link} target="_blank" rel="noopener noreferrer">
          <img src={img} className="card-img" alt="Card Image" />
        </a>
        <div className="card-content">
          <h3 className="inner-title">{name}</h3>
          {details.length > 200 ? (
            !isShowmore ? (
              <div>
                <p>
                  {details.slice(0, 200).concat('...')}
                  <button className="blue-button" onClick={handleShowmore}>
                    Read more
                  </button>
                </p>
              </div>
            ) : (
              <div>
                <p>
                  {details}
                  <button className="blue-button" onClick={handleShowless}>
                    Show less
                  </button>
                </p>
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
