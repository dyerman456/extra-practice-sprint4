import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'

type GetDecksListType = {
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

export const DecksList = () => {
  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const res = await decksApi.getDecksList()
        console.log(res.data as GetDecksListType)
      } catch (e) {
        console.log(e)
      }
    }
    fetchDecks()
  }, [])
  return <ul className={s.list}></ul>
}
