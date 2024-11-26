import { IPagination } from '@/lib/data';

export interface ITablistProps {
  callbackFun: Function;
}

export interface IGridReducerProps {
  gridSize: number;
  gridStyle: string;
}

export interface IGridLayoutProps {
  value: IBaseProps[] | any;
  grid: IGridReducerProps | any;
  type?: string;
  view?: string;
  trip?: string;
  pagination?: IPagination;
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
