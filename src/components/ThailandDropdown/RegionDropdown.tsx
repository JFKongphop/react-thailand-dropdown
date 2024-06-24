import { useState } from 'react';
import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5';

import type { Region } from './Interface/region';

export interface Name {
  NameTH: string;
  NameEN: string;
}

export interface IRegoinDropdown {
  region: Region;
  onRegionValueHandler: Function;
  onToggleProvinceHandler: Function;
}

const RegionDropdown: React.FC<IRegoinDropdown> = ({
  region,
  onRegionValueHandler,
  onToggleProvinceHandler,
}) => {
  const [selectData, setSelectData] = useState<boolean>(false);

  const controlRegionHandler = (regionThis: Region) => {
    onRegionValueHandler(regionThis, selectData);
    setSelectData(!selectData);
  };

  let regionName: string = '';
  let regionIsChecked: boolean = false;
  if (typeof region === 'object') {
    //  (${region.NameEN})
    regionName = `${region.NameTH}`;
    regionIsChecked = region.isChecked;
  } else {
    regionName = region;
  }

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
        onClick={() => controlRegionHandler(region)}
      >
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 accent-blueOcare"
          checked={regionIsChecked}
          readOnly
        />
        <label className="ml-2 text-[12px] cursor-pointer">{regionName}</label>
      </div>
      <div
        onClick={() => onToggleProvinceHandler(!selectData)}
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

export default RegionDropdown;
