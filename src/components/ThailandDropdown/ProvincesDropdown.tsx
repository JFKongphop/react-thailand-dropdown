import { useState } from 'react';
import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5';

import type { Provinces } from './Interface/province';

export interface IProvincesDropdown {
  province: string | Provinces;
  onProvinceValueHandler: Function;
  onToggleDistrictHandler: Function;
}

const ProvincesDropdown: React.FC<IProvincesDropdown> = ({
  province,
  onProvinceValueHandler,
  onToggleDistrictHandler,
}) => {
  const [selectData, setSelectData] = useState<boolean>(false);

  let provinceName: string = '';
  let provinceChecked: boolean = false;
  if (typeof province === 'object') {
    //  (${province.NameEN})
    provinceName = `${province.NameTH}`;
    provinceChecked = province.isChecked;
  } else {
    provinceName = province;
  }

  const controlProvinceHandler = (provinceThis: string | Provinces) => {
    onProvinceValueHandler(provinceThis, selectData);
    setSelectData(!selectData);
  };

  return (
    <div
      className={`
        flex flex-row justify-between
        items-center p-2 cursor-pointer
      `}
      onClick={() => setSelectData(!selectData)}
    >
      <div
        className="inline-flex items-center w-[90%] py-1"
        onClick={() => controlProvinceHandler(province)}
      >
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 accent-blueOcare"
          checked={provinceChecked}
          readOnly
        />
        <label className="ml-2 text-[12px] cursor-pointer">
          {provinceName}
        </label>
      </div>
      <div
        onClick={() => onToggleDistrictHandler(!selectData)}
        className="flex items-center"
      >
        {selectData ? (
          <IoCaretBackOutline className="w-4 h-4 fill-greyDarkOcare" />
        ) : (
          <IoCaretForwardOutline className="w-4 h-4 fill-greyDarkOcare" />
        )}
      </div>
    </div>
  );
};

export default ProvincesDropdown;
