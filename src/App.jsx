import Title from './components/Title'
import Cards from './components/Cards'
import Loading from './components/Loading'
import { useState, useEffect } from 'react'
const url = 'https://mocki.io/v1/119bfa73-ff99-41bd-8ee9-34292d2bcc46'

const App = () => {
  const [cards, setCards] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchData = async (url) => {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => setCards(data))
        .then(() => {
          // for beautiful scence
          setTimeout(() => setIsLoading(false), 2000)
        })
    }
    fetchData(url)
  }, [])

  if (isLoading) {
    console.log(cards)
    return (
      <main>
        <Title />
        <Loading />
      </main>
    )
  }

  return (
    <main>
      <Title />
      <Cards cards={cards} />
    </main>
  )
}
export default App
