/* eslint-disable @typescript-eslint/naming-convention */
export enum IType {
  FISH = 'fish',
  SEA = 'sea',
  BUG = 'bugs',
  FOSSIL = 'fossils',
}

export interface IObject {
  dataType: IType;
  data: IBaseObject[];
}

export interface IBaseObject {
  id?: number;
  'file-name'?: string;
  name?: IName;
  availability?: IAvailability;
  shadow?: string;
  speed?: string;
  price?: number;
  'price-cj'?: number;
  'price-flick'?: number;
  'catch-phrase'?: string;
  'museum-phrase'?: string;
  image_uri?: string;
  icon_uri?: string;
}

export interface IFish {
  id?: number;
  'file-name'?: string;
  name?: IName;
  availability?: IAvailability;
  shadow?: string;
  price?: number;
  'price-cj'?: number;
  'catch-phrase'?: string;
  'museum-phrase'?: string;
  image_uri?: string;
  icon_uri?: string;
}

export interface ISea {
  id?:              number;
  'file-name'?:     string;
  name?:            IName;
  availability?:    IAvailability;
  speed?:           string;
  shadow?:          string;
  price?:           number;
  'catch-phrase'?:  string;
  image_uri?:       string;
  icon_uri?:        string;
  'museum-phrase'?: string;
}

export interface IBug {
  id?:              number;
  'file-name'?:     string;
  name?:            IName;
  availability?:    IAvailability;
  price?:           number;
  'price-flick'?:   number;
  'catch-phrase'?:  string;
  'museum-phrase'?: string;
  image_uri?:       string;
  icon_uri?:        string;
}

export interface IFossil {
  'file-name'?:     string;
  name?:            IName;
  price?:           number;
  'museum-phrase'?: string;
  image_uri?:       string;
}

export interface IAvailability {
  'month-northern'?: string;
  'month-southern'?: string;
  time?: string;
  isAllDay?: boolean;
  isAllYear?: boolean;
  location?: string;
  rarity?: string;
  'month-array-northern'?: any[];
  'month-array-southern'?: any[];
  'time-array'?: any[];
}

export interface IName {
  'name-USen'?: string;
  'name-EUen'?: string;
  'name-EUde'?: string;
  'name-EUes'?: string;
  'name-USes'?: string;
  'name-EUfr'?: string;
  'name-USfr'?: string;
  'name-EUit'?: string;
  'name-EUnl'?: string;
  'name-CNzh'?: string;
  'name-TWzh'?: string;
  'name-JPja'?: string;
  'name-KRko'?: string;
  'name-EUru'?: string;
}

