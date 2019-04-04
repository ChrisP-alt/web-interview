import { API_ENDPOINT } from '../config'

export const getUser = userId =>
  fetch(`${API_ENDPOINT}/users/${userId}`).then(res => res.json())

export const getAvailableSlots = () =>
  fetch(`${API_ENDPOINT}/availableSlots`).then(res => res.json())

export const postAppointment = data =>
  fetch(`${API_ENDPOINT}/appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
