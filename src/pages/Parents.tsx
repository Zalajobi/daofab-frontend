import {Fragment, useMemo} from "react";
import {useParentData} from "../hooks/useParentData";
import {ParentDataColumn} from "../components/table/ParentTable";

const Parents = () => {
  const {
    page,
    noOfPages,
    data,
    currentPage,
  } = useParentData()

  const columns = useMemo(
    () => ParentDataColumn(),
    [page, currentPage, data])

  return (
    <Fragment>
      <div className={`flex w-full min-h-fit items-center justify-center bg-[#F9FAFB]`}>
        <div className={`container w-full flex flex-col p-24`}>
          <div
            className="relative overflow-x-auto overflow-y-auto max-h-screen shadow-lg flex flex-col rounded-lg border border-ds-gray-300 bg-white dark:border-ds-dark-400 dark:bg-ds-dark-700"
          >

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Parents;
