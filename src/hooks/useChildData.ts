import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {axiosGetRequest} from "../lib/axios";
import {ChildData, ChildParentData, ChildResponseData} from "../types";

export const useChildData = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<ChildData[] | null>(null);
  const [parent, setParent] = useState<ChildParentData | null>(null);


  useEffect(() => {
    const getParentData = async () => {
      const response = <ChildResponseData>await axiosGetRequest('/child/', {
        parentId: id
      })

      if (response.data) {
        setData(response?.data as ChildData[]);
        setParent(response.parent as ChildParentData);
      }

      console.log(response)
    }

    getParentData()
      .catch(err => {
        navigate('/')
      })
  }, [id] );


  return {
    // Values
    data,
    parent,
  }
}