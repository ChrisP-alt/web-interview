import { API_ENDPOINT } from '../config'

export const getUser = userId =>
  fetch(`${API_ENDPOINT}/users/${userId}`).then(res => res.json())

export const getAvailableSlots = () =>
  fetch(`${API_ENDPOINT}/availableSlots`).then(res => res.json())
