export interface BaseResponse<T> {
  success: boolean;
  infoMessage: string;
  errorMessage: string;
  value: T;
}

export interface AuthModel {
  id: string;
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
