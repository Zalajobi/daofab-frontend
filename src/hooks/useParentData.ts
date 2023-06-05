import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {axiosGetRequest} from "../lib/axios";
import {ParentDataProps, ParentObject} from "../types";

export const useParentData = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(0);
  const [noOfPages, setNoOfPages] = useState<number>(0);
  const [data, setData] = useState<ParentObject[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);


  useEffect(() => {
    const getParentData = async () => {
      const response = await axiosGetRequest('/parent/paginate', {
        page
      })

      if (response.data) {
        setNoOfPages(Math.ceil(response.length / 2))
        setData(response?.data)
      }
    }

    getParentData()
      .catch(err => {
        navigate('/')
      })
  }, [navigate] );

  return {
    // Values
    page,
    noOfPages,
    data,
    currentPage,
  }
}