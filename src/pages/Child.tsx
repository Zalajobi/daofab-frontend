import {Fragment, useMemo} from "react"
import {useChildData} from "../hooks/useChildData";
import {ChildData, ChildParentData, ParentObject} from "../types";
import {ChildDataColumn, ChildDataRow} from "../components/table/ChildTable";
import Table from "../components/global/table/Table";
import NoDataTable from "../components/global/table/NoDataTable";

const Child = () => {
  const {
    // Values
    data,
    parent,
  } = useChildData()

  const tableColumns = useMemo(
    () => ChildDataColumn(),
    [ data])

  const tableRow = useMemo(
    () => ChildDataRow(data as ChildData[], parent as ChildParentData) ?? [],
    [ data]);

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
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Child