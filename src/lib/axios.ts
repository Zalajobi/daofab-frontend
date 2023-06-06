import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:9001/api/v1/daoboa/finance',
  timeout: 7500,
})

export const axiosGetRequest = async (url:string, params?:any) => {
  const request = await instance.get(url, {
    params
  })

  return request.data
}