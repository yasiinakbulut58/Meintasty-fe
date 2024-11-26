import { IPagination } from '@/lib/data';

interface IGridViewProps {
  latestFilter?: boolean;
  size?: number;
  gridType?: string;
  side?: string;
  value?: IRestaurantProps[];
  schedule?: boolean;
  children?: ReactNode;
  type?: string;
  filter?: boolean;
  topFilter?: boolean;
  view?: string;
  trip?: string;
  round?: string;
  gridSelect?: boolean;
  pagination?: IPagination;
}
