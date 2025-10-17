import { DecksType } from './decks-api.ts'

const initialState = {
  decks: [] as DecksType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS':
      return {...state, decks: action.payload.decks}
    default:
      return state
  }
}

export const setDecksAC = (decks: DecksType[]) => {
  return {
    type: 'SET_DECKS',
    payload: {
      decks,
    },
  } as const
}

type DecksActions = SetDecksType

type SetDecksType = {
  type: 'SET_DECKS'
  payload: {
    decks: DecksType[]
  }
}
