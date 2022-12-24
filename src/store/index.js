import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialCartState = {
  showCart: false,
  showProfile: false,
  isLoggedIn: false,
  newUser: false,
}

const showCart = createSlice({
  name: 'showcart',
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart
    },
    hideCart(state) {
      state.showCart = false
    },
    toggleShowProfile(state) {
      state.showProfile = !state.showProfile
    },
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    },
    signup(state) {
      state.newUser = true
    },
    olduser(state) {
      state.newUser = false
    },
  },
})

const authInitialState = {
  email: '',
  auth: [
    {
      id: 'p1',
      name: 'xy',
      age: 15,
      email: 'xy@gmail.com',
      password: '12345678',
      cart: {
        items: [],
        totalQuantity: 0,
        totalCartPrice: 0,
      },
    },
    {
      id: 'p2',
      name: 'xy',
      age: 20,
      email: 'abc@gmail.com',
      password: '12345678',
      cart: {
        items: [],
        totalQuantity: 0,
        totalCartPrice: 0,
      },
    },
  ],
}

const authSlice = createSlice({
  name: 'Auth',
  initialState: authInitialState,
  reducers: {
    update(state, action) {
      const userData = action.payload
      state.auth = userData.auth
    },
    addUser(state, action) {
      const newData = action.payload
      const existingItem = state.auth.find((props) => props.id === newData.id)
      if (!existingItem) {
        state.auth.push({
          id: 'p' + Math.random(),
          name: newData.name,
          age: newData.age,
          email: newData.email,
          password: newData.password,
          cart: {
            items: [],
            totalQuantity: 0,
            totalCartPrice: 0,
          },
        })
      }
    },
    setKey(state, action) {
      state.email = action.payload
    },
    addItem(state, action) {
      const newItem = action.payload
      const existingData = state.auth.find(
        (props) => props.email === state.email,
      )
      existingData.cart.totalQuantity++
      existingData.cart.totalCartPrice =
      existingData.cart.totalCartPrice + newItem.price
      if (!existingData.cart.items) {
        existingData.cart = {
          items: [
            {
              id: newItem.id,
              title: newItem.title,
              quantity: 1,
              totalPrice: newItem.price,
              price: newItem.price,
              pic: newItem.pic,
            },
          ],
          totalQuantity: 1,
          totalCartPrice: newItem.price,
        }
        return
      }
      const existingItem = existingData.cart.items.find(
        (props) => props.id === newItem.id,
      )
      if (!existingItem) {
        existingData.cart.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.price,
          price: newItem.price,
          pic: newItem.pic,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice =
          existingItem.totalPrice + existingItem.price
      }
    },
    removeItem(state, action) {
      const deleteItem = action.payload
      const existingData = state.auth.find(
        (props) => props.email === state.email,
      )
      existingData.cart.totalQuantity--
      existingData.cart.totalCartPrice =
      existingData.cart.totalCartPrice - deleteItem.price
      const existingItem = existingData.cart.items.find(
        (props) => props.id === deleteItem.id,
      )
      if (existingItem.quantity===1) {
        existingData.cart.items = existingData.cart.items.filter((props) => props.id !== deleteItem.id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice =
          existingItem.totalPrice - deleteItem.price
      }
    },
  },
})

const store = configureStore({
  reducer: {
    showcart: showCart.reducer,
    authData: authSlice.reducer,
  },
})

export const showCartReducers = showCart.actions
export const authReducers = authSlice.actions

export default store
