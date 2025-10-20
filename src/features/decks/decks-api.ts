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
  addDeck(params: AddDeckParams) {
    return instance.post<DecksType>('/v1/decks', params)
  },
}
export type AddDeckParams = {
  name: string
}

export type FetchDecksResponse = {
  items: DecksType[]
  pagination: PaginationType
}

export type DecksType = {
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
}

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
