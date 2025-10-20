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
    case 'DECKS/SET_DECKS':
      return { ...state, decks: action.payload.decks }
    case 'DECKS/CREATE_DECK':
      return { ...state, decks: [action.payload.deck, ...state.decks] }
    default:
      return state
  }
}

export const setDecksAC = (decks: DecksType[]) => {
  return {
    type: 'DECKS/SET_DECKS',
    payload: {
      decks,
    },
  } as const
}

export const addDeckAC = (deck: DecksType) => {
  return {
    type: 'DECKS/CREATE_DECK',
    payload: {
      deck,
    },
  } as const
}

type DecksActions = SetDecksType | AddDeckType
type SetDecksType = ReturnType<typeof setDecksAC>
type AddDeckType = ReturnType<typeof addDeckAC>
