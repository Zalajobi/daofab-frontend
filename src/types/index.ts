import {ReactNode} from "react";

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

export interface ParentRowData {
  id: ReactNode
  sender: ReactNode
  receiver: ReactNode
  total: ReactNode
  paid: ReactNode
}

// Child API response Data
export type ChildResponseData = {
  data: ChildData[];
  length: number;
  parent: ChildParentData;
}
export type ChildData = {
  id: number;
  paidAmount: number;
  parentId: number;
}
export type ChildParentData = {
  totalAmount: number;
  receiver: string;
  sender: string;
  id: number;
}