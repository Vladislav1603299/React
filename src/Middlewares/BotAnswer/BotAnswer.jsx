import { ADD_MESSAGE } from '../../Store/Messages/constants'
import { addMessage } from '../../Store/Messages/actions'
export const BotAnswer = (state) => (next) => (action) => {
  if (action.type === ADD_MESSAGE) {
    setTimeout(() => state.dispatch(addMessage()))
  }

  return next(action)
}
