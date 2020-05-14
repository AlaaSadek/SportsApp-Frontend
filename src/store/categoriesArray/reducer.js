const AddItem = 'counter/AddItem'
const DeleteItem = 'counter/DeleteItem'

const update = (state, mutations) =>
  Object.assign({}, state, mutations)

export const addAction = () => ({
  type: AddItem
})

export const deleteAction = () => ({
  type: DeleteItem
})

export const INITIAL_STATE = {
  value: 0,
  warning: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AddItem:
      state = update(state, { value: state.value  })
      break
    case DeleteItem:
      state = update(state, { value: state.value  })
      break
  }
  return state
}

export default reducer