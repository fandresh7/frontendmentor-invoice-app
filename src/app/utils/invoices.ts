import { Invoice, Item } from '../models/invoice'

export const getDate = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

export const getRandomLetter = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const index = Math.floor(Math.random() * letters.length)
  return letters[index]
}

export const generateId = () => {
  const letter1 = getRandomLetter()
  const letter2 = getRandomLetter()

  const randomNumber = Math.floor(Math.random() * 10000)
  const number = randomNumber.toString().padStart(4, '0')

  return `${letter1}${letter2}${number}`
}

export const getItemsWithTotals = (invoice: Partial<Invoice>) => {
  const items = invoice.items?.map(item => {
    const total = item.quantity * item.price
    return { ...item, total }
  }) as Item[]

  return items
}
