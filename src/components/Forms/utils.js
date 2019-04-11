import {
  STATE_DEFAULT,
  STATE_ERROR,
  STATE_SUCCESS,
} from './constants'


export const getState = ({ error, success, touched }) => {
  if (error && touched) return STATE_ERROR
  if (success) return STATE_SUCCESS
  return STATE_DEFAULT
}

export const parseMessage = (message) => {
  if (!Array.isArray(message)) {
    return message
  }

  return message.length > 0
    ? message[0]
    : undefined
}
