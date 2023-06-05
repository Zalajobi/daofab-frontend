export type ParentDataProps = {
  data: ParentObject[];
  length: number;
}

export type ChildrenObject = {
  id: number;
  paidAmount: number;
  parentId: number;
}

export type ParentObject = {
  totalAmount: number;
  receiver: string;
  sender: string;
  id: number;
  child: ChildrenObject[];
}