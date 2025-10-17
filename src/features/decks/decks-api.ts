import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>('/v2/decks')
  },
}

type FetchDecksResponse = {
  items: [
    {
      isFavorite: boolean
      author: {
        id: string
        name: string
      }
      id: string
      userId: string
      name: string
      isPrivate: boolean
      cover: string
      created: string
      updated: string
      cardsCount: number
    },
  ]
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  }
}
