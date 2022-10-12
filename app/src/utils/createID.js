import { getAllUsers } from '../services/exposeSevices'

export const createID = async () => {
  console.log(await getAllUsers())
}
