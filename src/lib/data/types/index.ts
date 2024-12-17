export interface BaseResponse<T> {
  success: boolean;
  infoMessage: string;
  errorMessage: string;
  value: T;
}

export interface AuthModel {
  userId: string;
  fullName: string;
  email: string;
  token: string;
}
export interface AuthenticateRequest {
  email?: string;
  password?: string;
}

export interface CantonModel {
  id: number;
  cantonName: string;
  cities: CityModel[];
}

export interface CityModel {
  id: number;
  cityName: string;
  cityCode: number;
}

export interface IActiveLocation {
  canton: CantonModel;
  city: CityModel;
}

export interface RegisterRequestModel {
  fullName: string;
  email: string;
  password: string;
}

export interface RestaurantRequestModel {
  cityCode: number;
  categoryIdList: Array<number>;
  pageNumber: number;
}

export interface IPagination {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
}
export interface RestaurantResponseModel extends IPagination {
  restaurants: RestaurantModel[];
}
export interface RestaurantModel {
  id: number;
  restaurantName: string;
  email: string;
  phoneNumber: string;
  taxNumber: string | null;
  workDayFrom: string;
  workDayTo: string;
  workHourFrom: string;
  workHourTo: string;
  url: string;
  totalCount: number;
}

export interface RestaurantDetailModel {
  restaurantId: number;
  restaurantName: string;
  email: string;
  phoneNumber: string;
  taxNumber: string;
  workDayFrom: string;
  workDayTo: string;
  workHourFrom: string;
  workHourTo: string;
  addressList: IAddress[];
  menuList: Array<IRestaurantMenu>;
  orderList: [];
  url: string;
}

interface IAddress {
  restaurantId: number;
  addressId: number;
  addressName: string;
  addressText: string;
  street: string;
  cityCode: number;
}

export interface IRestaurantMenu {
  id: number;
  categoryId: number;
  categoryName: string;
  menuName: string;
  menuContent: string;
  menuPrice: string;
  currency: string;
  menuPic: string;
}
export interface ICategory {
  id: number;
  categoryName: string;
  restaurantCount: number;
}

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  birthDate: string;
  profilePicture: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
}

export interface IUserRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  birthDate: string;
}
