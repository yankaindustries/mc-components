export const parseInputErrors = (error) => {
  if (!error) {
    return undefined
  }
  if (Array.isArray(error)) {
    return error[0]
  }
  return error
}
