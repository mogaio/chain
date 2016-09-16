export const pluralize = require('pluralize')

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const parseNonblankJSON = (json) => {
  json = json || ''
  json = json.trim()

  if (json == '') {
    return null
  }

  return JSON.parse(json)
}
