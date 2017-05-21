/**
 * Created by zach on 2017. 5. 21..
 */
const makeParams = (paramsObj) => {
  let params = ''
  for (let key in paramsObj) {
    if (paramsObj.hasOwnProperty(key)) {
      params += `&${key}=${paramsObj[key]}`
    }
  }
  return params
}
const loadApi = (url, paramsObj) => {
  return fetch(`${url}?${makeParams(paramsObj)}`)
}

export default loadApi
