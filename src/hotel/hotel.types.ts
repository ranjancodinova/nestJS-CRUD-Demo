export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IHotel {
  hotelName: string;
  description: string;
  owner: string;
  city: string;
  address: string;
  coordinates: ICoordinates;
  email: string;
  phone: string;
  countryCode:string;
}

export interface ILocation {
  city: string;
  coordinates: ICoordinates;
}
