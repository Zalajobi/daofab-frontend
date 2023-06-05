import { Fragment } from "react"
import {TbArrowsMoveVertical} from "react-icons/tb";
import {ChildrenObject, ParentObject, ParentRowData} from "../../types";
import {Link} from "react-router-dom";

export const ParentDataColumn = () => {
  const columnItem = [
    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => console.log('id')}>
          ID
          <TbArrowsMoveVertical size={15}/>
        </span>
      </Fragment>,
      accessor: 'id',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => console.log('sender')}>
          Sender
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'sender',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => console.log('receiver')}>
          Receiver
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'receiver',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => console.log('total')}>
          Total Amount
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'total',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => console.log('paid')}>
        Total Amount Paid
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'paid',
    },
  ]

  return columnItem
}

export const ParentDataRow = (data : ParentObject[]) => {
  const rowItems:ParentRowData[] = [];

  data?.map((item:ParentObject, idx:number) => {
    rowItems.push({
      id: <>
        {item?.id}
      </>,

      sender: <>
        {item?.sender}
      </>,

      receiver: <>
        {item?.receiver}
      </>,

      total: <>
        {item?.totalAmount}
      </>,

      paid:
        <Link  to={`/parent/${item?.id}`} className={`text-black hover:text-gray-500 decoration-0`}>
          <b className={`font-extrabold`}>{getTotalAmountsPaid(item.child)}</b>
        </Link>,

    })
  })

  return rowItems;
}


const getTotalAmountsPaid = (children: ChildrenObject[]) => {
  let totalPaid = 0;

  for (const item of children) {
    totalPaid += item?.paidAmount;
  }

  return totalPaid;
}