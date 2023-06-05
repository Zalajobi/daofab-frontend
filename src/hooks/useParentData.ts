import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {axiosGetRequest} from "../lib/axios";

export const useParentData = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);


  useEffect(() => {
    const getParentData = async () => {
      const response = await axiosGetRequest('/parent/paginate', {
        page
      })

      console.log(response);
    }

    getParentData()
      .catch(err => {
        navigate('/')
      })
  }, [navigate] );

  return {
    // Values
    page,
  }
}