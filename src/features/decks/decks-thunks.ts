import { decksApi } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}
