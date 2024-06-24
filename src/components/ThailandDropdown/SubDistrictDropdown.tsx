import { useState } from 'react';

import type { Provinces } from './Interface/province';

export interface ISubDistrictDropdown {
  subDistrict: string | Provinces;
  onSubDistrictValueHandler: Function;
}

const SubDistrictDropdown: React.FC<ISubDistrictDropdown> = ({
  subDistrict,
  onSubDistrictValueHandler,
}) => {
  const [selectData, setSelectData] = useState<boolean>(false);

  let subDistrictName: string = '';
  let subDistrictChecked: boolean = false;
  if (typeof subDistrict === 'object') {
    //  (${subDistrict.NameEN})
    subDistrictName = `${subDistrict.NameTH}`;
    subDistrictChecked = subDistrict.isChecked;
  } else {
    subDistrictName = subDistrict;
  }

  const controlSubDistrictHandler = (SubdistrictThis: string | Provinces) => {
    onSubDistrictValueHandler(SubdistrictThis, selectData);
    setSelectData(!selectData);
  };

  return (
    <div
      className="
        flex flex-row justify-between
        items-center p-2 cursor-pointer
      "
      onClick={() => controlSubDistrictHandler(subDistrict)}
    >
      <div className="inline-flex items-center w-[90%] py-1">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 accent-blueOcare"
          checked={subDistrictChecked}
          readOnly
        />
        <label className="ml-2 text-[12px] cursor-pointer">
          {subDistrictName}
        </label>
      </div>
    </div>
  );
};

export default SubDistrictDropdown;
