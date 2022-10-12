import Header from '../pages/Header'
import Main from '../pages/Main'

export const renderNewPage = async (page = 'Home') => {
  await Header(page)
  Main(page)
}
