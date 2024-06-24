import { useState } from 'react';
import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5';

import type { Provinces } from './Interface/province';

export interface IDistrictDropdown {
  district: string | Provinces;
  onDistrictValueHandler: Function;
  onToggleSubDistrictHandler: Function;
}

const DistrictDropdown: React.FC<IDistrictDropdown> = ({
  district,
  onDistrictValueHandler,
  onToggleSubDistrictHandler,
}) => {
  const [selectData, setSelectData] = useState<boolean>(false);

  let districtName: string = '';
  let districtChecked: boolean = false;
  if (typeof district === 'object') {
    //  (${district.NameEN})
    districtName = `${district.NameTH}`;
    districtChecked = district.isChecked;
  } else {
    districtName = district;
  }

  const controlDistrictHandler = (districtThis: string | Provinces) => {
    onDistrictValueHandler(districtThis, selectData);
    setSelectData(!selectData);
  };

  return (
    <div
      className="
        flex flex-row justify-between
        items-center p-2 cursor-pointer
      "
      onClick={() => setSelectData(!selectData)}
    >
      <div
        className="inline-flex items-center w-[90%] py-1"
        onClick={() => controlDistrictHandler(district)}
      >
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 accent-blueOcare"
          checked={districtChecked}
          readOnly
        />
        <label className="ml-2 text-[12px] cursor-pointer">
          {districtName}
        </label>
      </div>
      <div
        onClick={() => onToggleSubDistrictHandler(!selectData)}
        className="flex items-center"
      >
        {!selectData ? (
          <IoCaretBackOutline className="w-4 h-4 fill-greyDarkOcare rotate-180" />
        ) : (
          <IoCaretForwardOutline className="w-4 h-4 fill-greyDarkOcare rotate-180" />
        )}
      </div>
    </div>
  );
};

export default DistrictDropdown;
