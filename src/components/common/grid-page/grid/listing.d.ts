interface IGridViewProps {
  latestFilter?: boolean;
  size?: number;
  gridType?: string;
  side?: string;
  value?: IRestaurantProps[];
  schedule?: boolean;
  mapModal?: boolean;
  grid4Img?: boolean;
  setMapModal?: Function;
  children?: ReactNode;
  type?: string;
  filter?: boolean;
  topFilter?: boolean;
  view?: string;
  trip?: string;
  round?: string;
  gridSelect?: boolean;
}
