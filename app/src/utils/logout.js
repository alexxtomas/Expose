export const logout = () => {
  window.localStorage.clear()
  window.location.reload()
}
