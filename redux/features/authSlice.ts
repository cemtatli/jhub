import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
  value: AuthState
}

type AuthState = {
  isAuth: boolean
  email: string
  password: string
  isEmployer: boolean
}

const initialState: initialState = {
  value: {
    isAuth: false,
    email: '',
    password: '',
    isEmployer: false,
  } as AuthState,
} as initialState

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<any>) => {
      return {
        value: {
          isAuth: true,
          email: action.payload,
          password: action.payload,
          isEmployer: action.payload,
        },
      }
    },
    logOut: () => {
      return initialState
    },
  },
})

export const { logIn, logOut } = auth.actions
export default auth.reducer
