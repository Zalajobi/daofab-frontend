import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 7500,
})

export const axiosGetRequest = async (url:string, params?:any) => {
  const request = await instance.get(url, {
    params
  })

  return request.data
}