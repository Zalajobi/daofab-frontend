import {Fragment, useMemo} from "react";
import {useParentData} from "../hooks/useParentData";
import {ParentDataColumn, ParentDataRow} from "../components/table/ParentTable";
import {ParentObject} from "../types";
import Table from "../components/global/table/Table";
import TableFooter from "../components/global/table/TableFooter";
import { Toaster } from "react-hot-toast";
import NoDataTable from "../components/global/table/NoDataTable";

const Parents = () => {
  const {
    noOfPages,
    data,
    currentPage,
    totalData,
    resultFrom,
    resultTo,
    onClickNext,
    onClickPrevious,
    onEnterPageNumber,
  } = useParentData()

  const tableColumns = useMemo(
    () => ParentDataColumn(),
    [currentPage, currentPage, data])

  const tableRow = useMemo(
    () => ParentDataRow(data as ParentObject[]) ?? [],
    [currentPage, currentPage, data]);

  return (
    <Fragment>
      <div className={`flex w-full min-h-fit items-center justify-center bg-[#F9FAFB]`}>
        <div className={`container w-full flex flex-col p-24`}>
          <div
            className="relative overflow-x-auto overflow-y-auto max-h-screen shadow-lg flex flex-col rounded-lg border border-ds-gray-300 bg-white dark:border-ds-dark-400 dark:bg-ds-dark-700"
          >
            {data?.length === 0 ? (
              <>
                <NoDataTable message={`No Paid Invoices`}/>
              </>
            ) : (
              <Table columns={tableColumns} data={tableRow}/>
            )}

            <div className={`bg-black`}>
              <TableFooter
                noOfPages={noOfPages}
                total={totalData}
                from={resultFrom}
                to={resultTo}
                onNext={onClickNext}
                onPrevious={onClickPrevious}
                currentPage={currentPage}
                enterPageNumber={onEnterPageNumber}
              />
            </div>
          </div>
        </div>
      </div>

      <Toaster position={`top-right`}/>
    </Fragment>
  )
}

export default Parents;
