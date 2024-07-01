export interface ITablistProps {
  callbackFun: Function;
}

export interface IGridReducerProps {
  gridSize: number;
  gridStyle: string;
  toPage: number;
  totalPages: string;
  productCount: string;
}

export interface IGridLayoutProps {
  value: IBaseProps[] | any;
  grid: IGridReducerProps | any;
  type?: string;
  view?: string;
  trip?: string;
}

export interface IGridListProps {
  grid: IGridReducerProps;
  gridStyle: string | undefined;
  topFilter: boolean | undefined;
  value: IRestaurantProps[] | undefined;
  side?: string;
  type?: string;
  view?: string;
  gridSelect?: boolean;
}

export interface IPaginationProps {
  totalPages1: number;
}
