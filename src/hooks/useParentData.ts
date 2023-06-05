import {ChangeEvent, useEffect, useState} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {axiosGetRequest} from "../lib/axios";
import {ParentDataProps, ParentObject} from "../types";

export const useParentData = () => {
  const navigate = useNavigate();
  const [noOfPages, setNoOfPages] = useState<number>(0);
  const [totalData, setTotalData] = useState<number>(0);
  const [resultFrom, setResultFrom] = useState<number>(0);
  const [resultTo, setResultTo] = useState<number>(0);
  const [data, setData] = useState<ParentObject[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);


  useEffect(() => {
    const getParentData = async () => {
      const response = await axiosGetRequest('/parent/paginate', {
        page: currentPage
      })

      if (response.data) {
        setNoOfPages(Math.ceil(response.length / 2))
        setData(response?.data as ParentObject[])
        setTotalData(response.length)
        setResultFrom(((currentPage) * 2) + 1)
        setResultTo((currentPage + 1 === noOfPages) ? totalData : ((currentPage) * 2) + 2)
      }
    }

    getParentData()
      .catch(err => {
        navigate('/')
      })
  }, [navigate] );


  const onClickNext = async (value:number) => {
    if (value >= noOfPages)
      toast.error("You are on the last page")
    else {
      setCurrentPage(value)
      setResultFrom(((value) * 2) + 1)
      setResultTo((value + 1 === noOfPages) ? totalData : ((value) * 2) + 2)

      const response = await axiosGetRequest('/parent/paginate', {
        page: value,
      })

      if (response.data) {
        setData(response?.data as ParentObject[])
        setTotalData(response.length)
        setNoOfPages(Math.ceil(response.length / 2))
      }
    }
  }

  const onClickPrevious = async (value:number) => {
    if (value === -1)
      toast.error("You are on the first page")
    else {
      setCurrentPage(value)
      setResultFrom(((value) * 2) + 1)
      setResultTo((value + 1 === noOfPages) ? totalData : ((value) * 2) + 2)

      const response = await axiosGetRequest('/parent/paginate', {
        page: value,
      })

      if (response.data) {
        setData(response?.data as ParentObject[])
        setTotalData(response.length)
        setNoOfPages(Math.ceil(response.length / 2))
      }
    }
  }

  const onEnterPageNumber = async (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as unknown as number
    console.log(value)

    if (value <= 0)
      toast.error("You are on the first page")
    else if (value > noOfPages)
      toast.error("You Cannot go beyond the last page")
    else {
      const pageNumber = value ? Number(value) : 0
      setCurrentPage(pageNumber - 1)
      setResultFrom(((pageNumber - 1) * 2) + 1)
      setResultTo(((pageNumber - 1) === noOfPages) ? totalData : ((pageNumber - 1) * 2) + 2)

      const response = await axiosGetRequest('/parent/paginate', {page: pageNumber - 1})

      if (response.data) {
        setData(response?.data as ParentObject[])
        setTotalData(response.length)
        setNoOfPages(Math.ceil(response.length / 2))
      }
    }
  }

  return {
    // Values
    noOfPages,
    data,
    currentPage,
    totalData,
    resultFrom,
    resultTo,

    // Functions
    onClickNext,
    onClickPrevious,
    onEnterPageNumber,
  }
}