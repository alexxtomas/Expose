export const showError = (element, text) => {
  const span = `<span class="error-text">${text}</span>`
  element.className = 'error'
  element.insertAdjacentHTML('afterend', span)
  element.focus()
  throw new Error(text)
}
