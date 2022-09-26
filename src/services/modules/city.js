import request from '../request/index'

export function getCityAll () {
  return request.get({
    url: "/city/all"
  })
}