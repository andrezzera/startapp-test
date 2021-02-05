import React from 'react'
import {Container} from './styles'

const Results = ({ query, results }: Result) => {
  return (
    <Container>
      <span>Resultados para <b>{query}</b></span>
      <div className="results">
        {results?.map(country => (
          <div className="result">
            <div className="name">{country.name}</div>
            <div className="tag">
              População <b>{country.population.toLocaleString('pt-BR')}</b>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

interface Result {
  query: string,
  results: [
    {
      name: string,
      population: number
    }
  ] | undefined
}

export default Results