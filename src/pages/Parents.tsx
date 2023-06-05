import { Fragment } from "react";
import {useParentData} from "../hooks/useParentData";

const Parents = () => {
  const { page } = useParentData()

  return (
    <Fragment>
      <div className={`flex w-full min-h-fit items-center justify-center bg-[#F9FAFB]`}>
        <div className={`container w-full flex flex-col p-24`}>
          <h1>HELLO WORLD</h1>
        </div>
      </div>
    </Fragment>
  )
}

export default Parents;
