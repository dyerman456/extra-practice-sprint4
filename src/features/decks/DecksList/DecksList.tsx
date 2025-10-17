import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi, DecksType } from '../decks-api.ts'
import { AppRootState, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector((state): DecksType[] => state.decksReducer.decks)
  useEffect(() => {
    decksApi.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])
  return <ul className={s.list}>
    {decks.map(deck => {
      return (
        <li key={deck.id}>
          <h3>{deck.name}</h3>
          <img style={{width: "100px", height: "100px"}} src={deck.cover} />
        </li>
      )
    })}
  </ul>
}
