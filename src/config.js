const origin = 'http://music.163.com'

const globalOption = {
  headers: {
    'Origin': origin,
    'Referer': origin,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export { origin, globalOption }
