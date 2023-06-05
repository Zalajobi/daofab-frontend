import {Fragment} from "react";
import {TbArrowsMoveVertical} from "react-icons/tb";
import {ChildData, ChildParentData, ParentObject, ParentRowData} from "../../types";

export const ChildDataColumn = () => {
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
        Paid Amount
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'paid',
    },
  ]

  return columnItem
}

export const ChildDataRow = (data : ChildData[], parent: ChildParentData) => {
  const rowItems:ParentRowData[] = [];

  data?.map((item:ChildData, idx:number) => {
    rowItems.push({
      id: <>
        {item?.id}
      </>,

      sender: <>
        {parent?.sender}
      </>,

      receiver: <>
        {parent?.receiver}
      </>,

      total: <>
        {parent?.totalAmount}
      </>,

      paid:
        <>
          {item.paidAmount}
        </>,

    })
  })

  return rowItems;
}