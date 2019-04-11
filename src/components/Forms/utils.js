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
