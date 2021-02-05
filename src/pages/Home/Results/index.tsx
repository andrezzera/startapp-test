import React from 'react'
import { Container } from './styles'
import { motion } from 'framer-motion'

const Results = ({ query, results }: Result) => {
  return (
    <motion.div
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 }
      }}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
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
    </motion.div>
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