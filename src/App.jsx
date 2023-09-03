import Title from './components/Title'
import Cards from './components/Cards'
import Loading from './components/Loading'
import { useState, useEffect } from 'react'
const url =
  'https://raw.githubusercontent.com/khaleed2002/iPhone-cards/main/src/data.json'

const App = () => {
  const [cards, setCards] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const fetchData = async (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setCards(data))
      .then(() => {
        // for beautiful scence
        setTimeout(() => setIsLoading(false), 2000)
      })
  }
  useEffect(() => {
    fetchData(url)
  }, [])
  const handleRefresh = () => {
    fetchData(url)
  }
  if (isLoading) {
    return (
      <main>
        <Title />
        <Loading />
      </main>
    )
  }
  const handleNotInterested = (id) => {
    setCards((cards) => {
      return cards.filter((card) => card.id !== id)
    })
  }

  return (
    <main>
      <Title />
      {cards.length == 0 ? (
        <button className="btn" onClick={handleRefresh}>
          Refresh
        </button>
      ) : (
        <Cards cards={cards} notInterested={handleNotInterested} />
      )}
    </main>
  )
}
export default App
