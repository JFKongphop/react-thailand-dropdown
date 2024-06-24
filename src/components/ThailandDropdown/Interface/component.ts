type Name = {
  th: string;
  en: string;
};

export interface IRegoinDropdown {
  region: Name;
  onRegionValueHandler: Function;
  index: number;
  onGetIndex: Function;
}

export interface IProvincesDropdown {
  province: string | Name;
  // onRegionValueHandler: Function;
}
