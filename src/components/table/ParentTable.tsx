import { Fragment } from "react"
import {TbArrowsMoveVertical} from "react-icons/tb";

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