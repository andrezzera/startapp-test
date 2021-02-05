import React, {useState} from 'react'
import {debounce, isEmpty} from 'lodash'
import searchService from '../../service/searchService'
import {Container} from './styles'
import Results from './Results'
import NotFound from './NotFound'
import Loading from '../../components/Loading'
import {AnimatePresence} from 'framer-motion'

const Home = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<[Country]>()
  const [loading, setLoading] = useState(false)

  const handleSearch = debounce(async query => {
    setQuery(query)
    setLoading(true)
    setResults(await searchService.getCountries(query))
    setLoading(false)
  }, 1000)

  return (
    <Container>
      <div className="search-wrapper">
        <div className="fake-input">
          <input
            type="text"
            placeholder="Digite o nome do pais..."
            onChange={event => handleSearch(event.target.value)}
          />
          {loading && <Loading/>}
        </div>
        <AnimatePresence>
          {!isEmpty(results) && <Results query={query} results={results} />}
          {(isEmpty(results) && query && !loading) && <NotFound/>}
        </AnimatePresence>
      </div>
    </Container>
  )
}

interface Country {
  name: string,
  population: number
}

export default Home