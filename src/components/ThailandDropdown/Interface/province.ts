export type Provinces = {
  NameTH: string;
  NameEN: string;
  isChecked: boolean;
};

export interface IThailand {
  region: string;
  provinces: Provinces[];
}
