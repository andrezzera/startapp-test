import httpClient from './http/client'

const searchService = {
  getCountries: async (query: string) => {
    return httpClient.get('name/' + query)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response.status
      })
  }
}

export default searchService