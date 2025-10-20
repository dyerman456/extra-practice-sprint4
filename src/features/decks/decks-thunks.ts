import { AddDeckParams, decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
  const res = await decksApi.addDeck(params)
  return dispatch(addDeckAC(res.data))
}
