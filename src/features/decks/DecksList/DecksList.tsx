import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDecks } from '../decks-selectors.ts'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)
  useEffect(() => {
    decksApi.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])
  return <ul className={s.list}>{decks.map((deck) => {
    return (
      <DeckItem deck={deck}/>
    )
  })}</ul>
}
