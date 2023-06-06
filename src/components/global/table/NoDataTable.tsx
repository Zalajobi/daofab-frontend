import { Fragment, ReactNode } from "react";
import { VscEmptyWindow } from 'react-icons/vsc';

interface NoDataTableProps {
  message: string
  children?: ReactNode
  className?: string
}

const NoDataTable = ({message, children, className}:NoDataTableProps) => {
  return (
    <Fragment>
      <section
        className={`flex flex-col items-center border-y border-y-ds-gray-300 p-4 dark:border-ds-dark-400 ${className}`}
      >
        <VscEmptyWindow size={50} color={`blue`}/>


        <p className="mb-[1.875rem] max-w-[40rem] text-center font-inter text-sm font-medium text-custom-description pt-5">{message}</p>

        <div className="flex flex-row flex-wrap justify-center gap-[.625rem]">
          {children}
        </div>
      </section>
    </Fragment>
  )
}

export default NoDataTable;