import type { ChangeEvent } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';
import { RxMagnifyingGlass } from 'react-icons/rx';

import ButtonDropdown from '../Button/ButtonDropdown';
import DistrictDropdown from './DistrictDropdown';
import type { Region } from './Interface/region';
import ProvincesDropdown from './ProvincesDropdown';
import districtsInThailand from './Region/DistrictsInThailand';
import type { Provinces, PVT } from './Region/ProvincesInThailand';
import provincesInThailand from './Region/ProvincesInThailand';
import { regionsInThailand } from './Region/RegionsInThailand';
import subDistrictInThailand from './Region/SubDistrictInThailand';
import type { Name } from './RegionDropdown';
import RegionDropdown from './RegionDropdown';
import SubDistrictDropdown from './SubDistrictDropdown';

interface IThailandDropdown {
  onFixedScreen: (status: boolean) => void;
}

const ThailandDropdown: React.FC<IThailandDropdown> = ({ onFixedScreen }) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [toggleRegionDropdown, setToggleRegionDropdown] =
    useState<boolean>(false);
  const [toggleProvinceDropdown, setToggleProvinceDropdown] =
    useState<boolean>(false);
  const [toggleDistrictDropdown, setToggleDistrictDropdown] =
    useState<boolean>(false);

  const [regionValue, setRegionValue] = useState<Region>({
    id: 0,
    NameEN: '',
    NameTH: '',
    isChecked: false,
  });
  const [provinceValue, setProvinceValue] = useState<Region>({
    id: 0,
    NameEN: '',
    NameTH: '',
    isChecked: false,
  });
  const [districtValue, setDistrictValue] = useState<Region>({
    id: 0,
    NameEN: '',
    NameTH: '',
    isChecked: false,
  });
  const setSubDistrictValue = useState<Region>({
    id: 0,
    NameEN: '',
    NameTH: '',
    isChecked: false,
  });

  const [regionSearched, setRegionSearched] = useState<string>('');
  const [provinceSearched, setProvinceSearched] = useState<string>('');
  const [districtSearched, setDistrictSearched] = useState<string>('');
  const [subDistrictSearched, setSubDistrictSearched] = useState<string>('');

  const [regionsValueSelected, setRegionsValueSelected] = useState<number[]>(
    []
  );
  const [provincesValueSelected, setProvincesValueSelected] = useState<
    number[]
  >([]);
  const [districtsValueSelected, setDistrictValueSelected] = useState<number[]>(
    []
  );
  const [subDistrictsValueSelected, setSubDistrictValueSelected] = useState<
    number[]
  >([]);

  const [regionUpdatedStatus, setRegionUpdatedStatus] = useState<Region[]>([]);
  const [provinceUpdatedStatus, setProvinceUpdatedStatus] = useState<PVT[]>([]);
  const [districtUpdatedStatus, setDistrictUpdatedStatus] = useState<PVT[]>([]);
  const [subDistrictUpdatedStatus, setSubDistrictUpdatedStatus] = useState<
    PVT[]
  >([]);

  const [allRegionChecked, setAllRegionChecked] = useState<boolean>(false);
  const [allProvinceSelectChecked, setAllProvinceSelectChecked] =
    useState<boolean>(false);
  const [allDistrictsSelectchecked, setAllDistrictsSelectChecked] =
    useState<boolean>(false);
  const [allSubDistrictsSelectchecked, setAllSubDistrictsSelectChecked] =
    useState<boolean>(false);

  const keySearch: string[] = ['NameTH', 'NameEN'];

  const thailandSelected: Region[] =
    regionUpdatedStatus.length > 0 ? regionUpdatedStatus : regionsInThailand;

  const regionSelected: PVT | undefined = (
    provinceUpdatedStatus.length > 0
      ? provinceUpdatedStatus
      : provincesInThailand
  ).filter((rg) => rg.id === regionValue.id)[0];

  const provinceSelected: PVT | undefined = (
    districtUpdatedStatus.length > 0
      ? districtUpdatedStatus
      : districtsInThailand
  ).filter((np) => np.region === provinceValue.NameEN)[0];

  const districtSelected: PVT | undefined = (
    subDistrictUpdatedStatus.length > 0
      ? subDistrictUpdatedStatus
      : subDistrictInThailand
  ).filter((dt) => dt.region === districtValue.NameEN)[0];

  const regionValueHandler = (region: Region, addStatus: boolean) => {
    setToggleRegionDropdown(!addStatus);
    // if (!regionsValueSelected.includes(region.id))
    setAllProvinceSelectChecked(false);

    // close dis and subdis
    setToggleProvinceDropdown(false);
    setToggleDistrictDropdown(false);

    const areaSelected: Region[] =
      regionUpdatedStatus.length > 0 ? regionUpdatedStatus : regionsInThailand;

    const updateIsCheckRegion: Region = {
      ...region,
      isChecked: !addStatus,
    };

    const regionIsCheckedUpdated: Region[] = areaSelected.map(
      (latestIsChecked) =>
        latestIsChecked === region ? updateIsCheckRegion : latestIsChecked
    );

    setRegionUpdatedStatus(regionIsCheckedUpdated);

    if (!addStatus) {
      setRegionsValueSelected((prevRegion) => {
        return [...prevRegion, region.id];
      });
    } else {
      setRegionsValueSelected(() => {
        return regionsValueSelected.filter(
          (prevRegion) => prevRegion !== region.id
        );
      });

      const provinceFiltered: PVT[] = provinceUpdatedStatus.filter(
        (provElement) => provElement.region === region.NameEN
      );
      const provinceSelectRg = provinceFiltered[0]?.provinces as Provinces[];
      provinceSelectRg?.forEach((item: Provinces) => {
        // eslint-disable-next-line no-param-reassign
        item.isChecked = false;
      });

      const updatedRemoveProvince: PVT[] = provinceUpdatedStatus.map(
        (latestIsChecked: any) =>
          latestIsChecked === provinceFiltered
            ? provinceSelectRg
            : latestIsChecked
      );
      setProvinceUpdatedStatus(updatedRemoveProvince);

      const districtFiltered: PVT[] = districtUpdatedStatus.filter(
        (distElement) => distElement.region === provinceValue.NameEN
      );
      const districtSelectPv = districtFiltered[0]?.provinces as Provinces[];
      districtSelectPv?.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.isChecked = false;
      });

      const updatedRemoveDistrict: PVT[] = districtUpdatedStatus.map(
        (latestIsChecked: any) =>
          latestIsChecked === districtFiltered
            ? districtSelectPv
            : latestIsChecked
      );
      setDistrictUpdatedStatus(updatedRemoveDistrict);

      const subDistrictFiltered: PVT[] = subDistrictUpdatedStatus.filter(
        (subDElement) => subDElement.region === districtValue.NameEN
      );
      const subDistrictSelectDt = subDistrictFiltered[0]
        ?.provinces as Provinces[];
      subDistrictSelectDt?.forEach((item: Provinces) => {
        // eslint-disable-next-line no-param-reassign
        item.isChecked = false;
      });
      const updatedRemoveSubDistrict: PVT[] = subDistrictUpdatedStatus.map(
        (latestIsChecked: any) =>
          latestIsChecked === subDistrictFiltered
            ? subDistrictSelectDt
            : latestIsChecked
      );
      setSubDistrictUpdatedStatus(updatedRemoveSubDistrict);

      setToggleProvinceDropdown(false);
      setToggleDistrictDropdown(false);
    }

    setRegionValue(region);
  };

  const provinceValueHandler = (province: Region, addStatus: boolean) => {
    setToggleProvinceDropdown(!addStatus);
    setAllDistrictsSelectChecked(false);

    // close subdis
    setToggleDistrictDropdown(false);

    const areaSelected: PVT[] =
      provinceUpdatedStatus.length > 0
        ? provinceUpdatedStatus
        : provincesInThailand;

    const regionWasSelected = areaSelected.filter((provincesInRegion: PVT) =>
      provincesInRegion.provinces.includes(province)
    );

    const prevProvinceSelected = regionWasSelected[0]?.provinces as Provinces[];
    const indexProvince: number = prevProvinceSelected.indexOf(province);
    const provinceIsSelected = prevProvinceSelected[indexProvince] as Provinces;

    const updateIsCheckProvince: Provinces = {
      ...provinceIsSelected,
      isChecked: !addStatus,
    };

    const provinceIsCheckedUpdated: Provinces[] = prevProvinceSelected.map(
      (latestIsChecked) =>
        latestIsChecked === provinceIsSelected
          ? updateIsCheckProvince
          : latestIsChecked
    );

    const updatedAllProvinces = {
      ...regionWasSelected[0],
      provinces: provinceIsCheckedUpdated,
    };

    const updatedAreaSelected = areaSelected.map((latestIsChecked) =>
      latestIsChecked === regionWasSelected[0]
        ? updatedAllProvinces
        : latestIsChecked
    ) as PVT[];

    setProvinceUpdatedStatus(updatedAreaSelected);

    if (!addStatus) {
      setProvincesValueSelected((prevProvince) => {
        return [...prevProvince, province.id];
      });
    } else {
      setProvincesValueSelected(() => {
        return provincesValueSelected.filter(
          (prevProvince) => prevProvince !== province.id
        );
      });

      const districtFiltered: PVT[] = districtUpdatedStatus.filter(
        (distElement) => distElement.region === province.NameEN
      );
      const districtSelectPv = districtFiltered[0]?.provinces as Provinces[];
      districtSelectPv?.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.isChecked = false;
      });

      const updatedRemoveDistrict: PVT[] = districtUpdatedStatus.map(
        (latestIsChecked: any) =>
          latestIsChecked === districtFiltered
            ? districtSelectPv
            : latestIsChecked
      );
      setDistrictUpdatedStatus(updatedRemoveDistrict);

      const subDistrictFiltered: PVT[] = subDistrictUpdatedStatus.filter(
        (subDElement) => subDElement.region === districtValue.NameEN
      );
      const subDistrictSelectDt = subDistrictFiltered[0]
        ?.provinces as Provinces[];
      subDistrictSelectDt?.forEach((item: Provinces) => {
        // eslint-disable-next-line no-param-reassign
        item.isChecked = false;
      });
      const updatedRemoveSubDistrict: PVT[] = subDistrictUpdatedStatus.map(
        (latestIsChecked: any) =>
          latestIsChecked === subDistrictFiltered
            ? subDistrictSelectDt
            : latestIsChecked
      );
      setSubDistrictUpdatedStatus(updatedRemoveSubDistrict);

      setToggleDistrictDropdown(false);
    }

    setProvinceValue(province);
  };

  const districtValueHandler = (district: Region, addStatus: boolean) => {
    setToggleDistrictDropdown(!addStatus);

    const areaSelected: PVT[] =
      districtUpdatedStatus.length > 0
        ? districtUpdatedStatus
        : districtsInThailand;

    const provinceWasSelected = areaSelected.filter((districtInRegion: PVT) =>
      districtInRegion.provinces.includes(district)
    );

    const prevDistrictSelected = provinceWasSelected[0]
      ?.provinces as Provinces[];
    const indexDistrict: number = prevDistrictSelected.indexOf(district);
    const districtIsSelected = prevDistrictSelected[indexDistrict] as Provinces;

    const updateIsCheckDistrict = {
      ...prevDistrictSelected[indexDistrict],
      isChecked: !addStatus,
    };

    const districtIsCheckedUpdated = prevDistrictSelected.map(
      (latestIsChecked) =>
        latestIsChecked === districtIsSelected
          ? updateIsCheckDistrict
          : latestIsChecked
    );

    const updatedAllDistricts = {
      ...provinceWasSelected[0],
      provinces: districtIsCheckedUpdated,
    };

    const updatedAreaSelected = areaSelected.map((latestIsChecked) =>
      latestIsChecked === provinceWasSelected[0]
        ? updatedAllDistricts
        : latestIsChecked
    ) as PVT[];

    setDistrictUpdatedStatus(updatedAreaSelected);

    if (!addStatus) {
      setDistrictValueSelected((prevDistrict) => {
        return [...prevDistrict, district.id];
      });
    } else {
      setDistrictValueSelected(() => {
        return districtsValueSelected.filter(
          (prevDistrict) => prevDistrict !== district.id
        );
      });

      const subDistrictFiltered: PVT[] = subDistrictUpdatedStatus.filter(
        (subDElement) => subDElement.region === district.NameEN
      );
      const subDistrictSelectDt = subDistrictFiltered[0]
        ?.provinces as Provinces[];
      subDistrictSelectDt?.forEach((item: Provinces) => {
        // eslint-disable-next-line no-param-reassign
        item.isChecked = false;
      });

      const updatedRemoveSubDistrict: PVT[] = subDistrictUpdatedStatus.map(
        (latestIsChecked: any) =>
          latestIsChecked === subDistrictFiltered
            ? subDistrictSelectDt
            : latestIsChecked
      );
      setSubDistrictUpdatedStatus(updatedRemoveSubDistrict);
    }

    setDistrictValue(district);
  };

  const subDistrictValueHandler = (subDistrict: Region, addStatus: boolean) => {
    const areaSelected: PVT[] =
      subDistrictUpdatedStatus.length > 0
        ? subDistrictUpdatedStatus
        : subDistrictInThailand;

    const districtWasSelected = areaSelected.filter(
      (subDistrictInRegion: PVT) =>
        subDistrictInRegion.provinces.includes(subDistrict)
    );

    const prevSubdistrictSelected = districtWasSelected[0]
      ?.provinces as Provinces[];
    const indexSubdistrict: number =
      prevSubdistrictSelected.indexOf(subDistrict);
    const subdistrictIsSelected = prevSubdistrictSelected[
      indexSubdistrict
    ] as Provinces;

    const updateIsCheckSubDistrict: Provinces = {
      ...subdistrictIsSelected,
      isChecked: !addStatus,
    };

    const subDistrictIsCheckedUpdate: Provinces[] = prevSubdistrictSelected.map(
      (latestIsChecked) =>
        latestIsChecked === subdistrictIsSelected
          ? updateIsCheckSubDistrict
          : latestIsChecked
    );

    const updatedAllSubDistricts = {
      ...districtWasSelected[0],
      provinces: subDistrictIsCheckedUpdate,
    };

    const updatedAreaSelected = areaSelected.map((latestIsChecked) =>
      latestIsChecked === districtWasSelected[0]
        ? updatedAllSubDistricts
        : latestIsChecked
    ) as PVT[];

    setSubDistrictUpdatedStatus(updatedAreaSelected);

    if (!addStatus) {
      setSubDistrictValueSelected((prevSubDistrict) => {
        return [...prevSubDistrict, subDistrict.id];
      });
    } else {
      setSubDistrictValueSelected(() => {
        return subDistrictsValueSelected.filter(
          (prevSubDistrict) => prevSubDistrict !== subDistrict.id
        );
      });
    }

    setSubDistrictValue[1](subDistrict);
  };

  const allRegionValueHandler = () => {
    const regionsUpdated = regionsInThailand.map((region) => {
      return { ...region, isChecked: !allRegionChecked };
    });
    setRegionUpdatedStatus(regionsUpdated);
  };

  // console.log(regionsInThailand)

  const allProvincesSelectValueHandler = () => {
    const areaSelected: PVT[] =
      provinceUpdatedStatus.length > 0
        ? provinceUpdatedStatus
        : provincesInThailand;

    const initialSelectedProvincesInRegion: PVT[] = areaSelected.filter(
      (province) => province.region === regionValue.NameEN
    );

    const currentArea: PVT | undefined = initialSelectedProvincesInRegion[0];
    setAllProvinceSelectChecked(!currentArea!.selectAll);

    const regionSelectedAllProvinceStatus: boolean | undefined =
      initialSelectedProvincesInRegion[0]?.selectAll;
    const { provinces } = initialSelectedProvincesInRegion[0]!;

    const statusChecked: boolean = !regionSelectedAllProvinceStatus;

    // eslint-disable-next-line no-return-assign, no-param-reassign
    provinces.forEach((province) => (province.isChecked = statusChecked));
    const updateAreaChecked: PVT = {
      ...initialSelectedProvincesInRegion[0]!,
      provinces,
      selectAll: statusChecked,
    };
    const updateIsCheckedProvincesInRegion: PVT[] = areaSelected.map(
      (latestIsChecked) =>
        latestIsChecked === initialSelectedProvincesInRegion[0]
          ? updateAreaChecked
          : latestIsChecked
    );

    setProvinceUpdatedStatus(updateIsCheckedProvincesInRegion);
  };

  const allDistrictsSelectValueHandler = () => {
    const areaSelected: PVT[] =
      districtUpdatedStatus.length > 0
        ? districtUpdatedStatus
        : districtsInThailand;

    const initialSelectedDistrictsInProvince: PVT[] = areaSelected.filter(
      (district) => district.id === provinceValue.id
    );

    const currentArea: PVT | undefined = initialSelectedDistrictsInProvince[0];
    setAllDistrictsSelectChecked(!currentArea!.selectAll);

    const provinceSelectedAllDistrictStatus: boolean | undefined =
      initialSelectedDistrictsInProvince[0]?.selectAll;
    const { provinces } = initialSelectedDistrictsInProvince[0]!;

    const statusChecked: boolean = !provinceSelectedAllDistrictStatus;

    // eslint-disable-next-line no-return-assign, no-param-reassign
    provinces.forEach((province) => (province.isChecked = statusChecked));
    const updateAreaChecked: PVT = {
      ...initialSelectedDistrictsInProvince[0]!,
      provinces,
      selectAll: statusChecked,
    };
    const updateIsCheckedDistrictsInProvince: PVT[] = areaSelected.map(
      (latestIsChecked) =>
        latestIsChecked === initialSelectedDistrictsInProvince[0]
          ? updateAreaChecked
          : latestIsChecked
    );

    setDistrictUpdatedStatus(updateIsCheckedDistrictsInProvince);
  };

  const allSubDistrictsSelectValueHandler = () => {
    const areaSelected: PVT[] =
      subDistrictUpdatedStatus.length > 0
        ? subDistrictUpdatedStatus
        : subDistrictInThailand;

    const initialSelectedSubDistrictsInDistrict: PVT[] = areaSelected.filter(
      (subDistrict) => subDistrict.id === districtValue.id
    );

    const currentArea: PVT | undefined =
      initialSelectedSubDistrictsInDistrict[0];
    setAllSubDistrictsSelectChecked(!currentArea!.selectAll);

    const districtSelectedAllSubDistrictStatus: boolean | undefined =
      initialSelectedSubDistrictsInDistrict[0]?.selectAll;
    const { provinces } = initialSelectedSubDistrictsInDistrict[0]!;

    const statusChecked: boolean = !districtSelectedAllSubDistrictStatus;

    // eslint-disable-next-line no-return-assign, no-param-reassign
    provinces.forEach((province) => (province.isChecked = statusChecked));
    const updateAreaChecked: PVT = {
      ...initialSelectedSubDistrictsInDistrict[0]!,
      provinces,
      selectAll: statusChecked,
    };
    const updateIsCheckedSubDistrictsInDistrict: PVT[] = areaSelected.map(
      (latestIsChecked) =>
        latestIsChecked === initialSelectedSubDistrictsInDistrict[0]
          ? updateAreaChecked
          : latestIsChecked
    );

    setSubDistrictUpdatedStatus(updateIsCheckedSubDistrictsInDistrict);
  };

  useEffect(() => {
    const updateRegionsSelected: number[] = regionUpdatedStatus
      .filter((rg) => rg.isChecked)
      .map((rg) => rg.id);
    setRegionsValueSelected(updateRegionsSelected);
  }, [regionUpdatedStatus]);

  useEffect(() => {
    const updateProvincesSelected: number[] = provinceUpdatedStatus
      .flatMap((sdt) => sdt.provinces.filter((sd: Provinces) => sd.isChecked))
      .map((sd: Provinces) => sd.id);
    setProvincesValueSelected(updateProvincesSelected);
  }, [provinceUpdatedStatus]);

  useEffect(() => {
    const updateDsitrictsSelected: number[] = districtUpdatedStatus
      .flatMap((pvt) => pvt.provinces.filter((pv: Provinces) => pv.isChecked))
      .map((pv: Provinces) => pv.id);
    setDistrictValueSelected(updateDsitrictsSelected);
  }, [districtUpdatedStatus]);

  useEffect(() => {
    const updateSubDistrictsSelected: number[] = subDistrictUpdatedStatus
      .flatMap((sdt) => sdt.provinces.filter((sd: Provinces) => sd.isChecked))
      .map((sd: Provinces) => sd.id);
    setSubDistrictValueSelected(updateSubDistrictsSelected);
  }, [subDistrictUpdatedStatus]);

  const toggleProvinceHandler = (hideStatus: boolean) => {
    setToggleRegionDropdown(hideStatus);
  };

  const toggleDistrictHandler = (hideStatus: boolean) => {
    setToggleProvinceDropdown(hideStatus);
  };

  const toggleSubDistrictHandler = (hideStatus: boolean) => {
    setToggleDistrictDropdown(hideStatus);
  };

  const changeRegionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRegionSearched(event.target.value);
  };

  const changeProvinceHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProvinceSearched(event.target.value);
  };

  const changeDistrictHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDistrictSearched(event.target.value);
  };

  const changeSubDistrictHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSubDistrictSearched(event.target.value);
  };

  const areaSelectedarchedHandler = (
    areaName: Name[] | Provinces[],
    areaSearching: string
  ) => {
    return areaName.filter((region: any) => {
      return keySearch.some((searchRegions) => {
        return (
          region[searchRegions]
            .toString()
            .toLowerCase()
            .indexOf(areaSearching.toLowerCase()) > -1
        );
      });
    });
  };

  const toggleThailandDropndown = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const defaultValueHandler = () => {
    if (subDistrictsValueSelected.length > 0) {
      const defaultSubDistrict: PVT[] =
        subDistrictUpdatedStatus.length > 0
          ? subDistrictUpdatedStatus
          : subDistrictInThailand;

      const initialSelectedSubDistrictsInDistrict: PVT[] =
        defaultSubDistrict.filter(
          (subDistrict) => subDistrict.id === districtValue.id
        );

      setAllSubDistrictsSelectChecked(false);

      const { provinces: subDistrictRemove } =
        initialSelectedSubDistrictsInDistrict[0]!;

      // eslint-disable-next-line no-return-assign, no-param-reassign
      subDistrictRemove.forEach((province) => (province.isChecked = false));
      const updateAreaChecked: PVT = {
        ...initialSelectedSubDistrictsInDistrict[0]!,
        provinces: subDistrictRemove,
        selectAll: false,
      };
      const updateIsCheckedSubDistrictsInDistrict: PVT[] =
        defaultSubDistrict.map((latestIsChecked) =>
          latestIsChecked === initialSelectedSubDistrictsInDistrict[0]
            ? updateAreaChecked
            : latestIsChecked
        );

      setSubDistrictUpdatedStatus(updateIsCheckedSubDistrictsInDistrict);
    }

    if (districtsValueSelected.length > 0) {
      const defaultDistrict: PVT[] =
        districtUpdatedStatus.length > 0
          ? districtUpdatedStatus
          : districtsInThailand;

      const initialSelectedDistrictsInProvince: PVT[] = defaultDistrict.filter(
        (district) => district.id === provinceValue.id
      );

      setAllDistrictsSelectChecked(false);

      const { provinces: districtRemove } =
        initialSelectedDistrictsInProvince[0]!;

      // eslint-disable-next-line no-return-assign, no-param-reassign
      districtRemove.forEach((province) => (province.isChecked = false));
      const updateDistrictChecked: PVT = {
        ...initialSelectedDistrictsInProvince[0]!,
        provinces: districtRemove,
        selectAll: false,
      };
      const updateIsCheckedDistrictsInProvince: PVT[] = defaultDistrict.map(
        (latestIsChecked) =>
          latestIsChecked === initialSelectedDistrictsInProvince[0]
            ? updateDistrictChecked
            : latestIsChecked
      );

      setDistrictUpdatedStatus(updateIsCheckedDistrictsInProvince);
    }

    if (provincesValueSelected.length > 0) {
      const deafualtProvince: PVT[] =
        provinceUpdatedStatus.length > 0
          ? provinceUpdatedStatus
          : provincesInThailand;

      const initialSelectedProvincesInRegion: PVT[] = deafualtProvince.filter(
        (province) => province.id === regionValue.id
      );

      setAllProvinceSelectChecked(false);

      const { provinces: provinceRemove } =
        initialSelectedProvincesInRegion[0]!;

      // eslint-disable-next-line no-return-assign, no-param-reassign
      provinceRemove.forEach((province) => (province.isChecked = false));
      const updateProvinceChecked: PVT = {
        ...initialSelectedProvincesInRegion[0]!,
        provinces: provinceRemove,
        selectAll: false,
      };
      const updateIsCheckedProvincesInRegion: PVT[] = deafualtProvince.map(
        (latestIsChecked) =>
          latestIsChecked === initialSelectedProvincesInRegion[0]
            ? updateProvinceChecked
            : latestIsChecked
      );

      setProvinceUpdatedStatus(updateIsCheckedProvincesInRegion);
    }

    // eslint-disable-next-line no-return-assign, no-param-reassign
    // const regionsUpdated = regionsInThailand.map((region) => {
    //   return { ...region, isChecked: false };
    // });
    // eslint-disable-next-line no-return-assign, no-param-reassign
    regionsInThailand.forEach((region) => (region.isChecked = false));
    provincesInThailand.forEach((region) => {
      region.provinces.forEach((province) => {
        // eslint-disable-next-line no-param-reassign
        province.isChecked = false;
      });
    });
    districtsInThailand.forEach((region) => {
      region.provinces.forEach((province) => {
        // eslint-disable-next-line no-param-reassign
        province.isChecked = false;
      });
    });
    subDistrictInThailand.forEach((region) => {
      region.provinces.forEach((province) => {
        // eslint-disable-next-line no-param-reassign
        province.isChecked = false;
      });
    });
    setAllRegionChecked(false);
    setAllProvinceSelectChecked(false);
    setAllDistrictsSelectChecked(false);
    setAllSubDistrictsSelectChecked(false);
    setRegionsValueSelected([]);
    setRegionUpdatedStatus([]);
    setProvincesValueSelected([]);
    setProvinceUpdatedStatus([]);
    setDistrictValueSelected([]);
    setDistrictUpdatedStatus([]);
    setSubDistrictValueSelected([]);
    setSubDistrictUpdatedStatus([]);
  };

  const submitHandler = () => {
    const allThailandIDs = {
      RegionIDs: regionsValueSelected,
      ProvinceIDs: provincesValueSelected,
      DistrictIDs: districtsValueSelected,
      SubDistrictIDs: subDistrictsValueSelected,
    };

    // eslint-disable-next-line no-console
    console.log(allThailandIDs);
  };

  const dropdownRef = useRef<any>();

  useEffect(() => {
    const handle = (e: Event) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setToggleDropdown(false);
        setToggleRegionDropdown(false);
        setToggleProvinceDropdown(false);
        setToggleDistrictDropdown(false);
        defaultValueHandler();
      } else {
        setToggleDropdown(true);
      }
    };

    document.addEventListener('mousedown', handle);
  }, []);

  useEffect(() => {
    setProvinceUpdatedStatus([]);
  }, [toggleDropdown]);

  onFixedScreen(toggleDropdown);

  // console.log(provinceUpdatedStatus);

  return (
    <div className="flex flex-col w-[250px] z-20">
      <div className="w-full" onClick={toggleThailandDropndown}>
        <ButtonDropdown
          name="ทุกจังหวัด"
          icon={toggleDropdown ? IoCaretDown : IoCaretUp}
          toggleDropdown={toggleDropdown}
        />
      </div>

      {toggleDropdown && (
        <div
          className={`
            flex flex-row item-start p-1 bg-white 
            absolute mt-[50px] shadow-lg rounded-[10px]
          `}
          ref={dropdownRef}
        >
          {/** show Region */}
          {toggleDropdown && (
            <div className="bg-white w-[250px]">
              <>
                <div
                  className="
                    flex flex-col h-[400px] border-0 pb-4
                    border-b border-solid border-greyOcare/50
                  
                  "
                >
                  <div className="overflow-y-scroll">
                    <div className="flex flex-row items-center p-2 gap">
                      <RxMagnifyingGlass className="text-[20px] text-greyOcare/80" />
                      <input
                        type="search"
                        className="w-[90%] p-1 outline-none border-none text-[14px]"
                        placeholder="Search..."
                        onChange={changeRegionHandler}
                      />
                    </div>
                    <div
                      className="
                        flex flex-row justify-between items-center 
                        px-2 cursor-pointer pb-2
                      "
                      onClick={() => {
                        setAllRegionChecked(!allRegionChecked);
                        allRegionValueHandler();
                      }}
                    >
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 accent-blueOcare"
                          readOnly
                          checked={allRegionChecked}
                        />
                        <label className="ml-2 text-[12px]">ทุกภูมิภาค</label>
                      </div>
                    </div>
                    <div className="flex flex-row items-center p-2 gap-2">
                      <p className="text-greyOcare/70 text-[14px]">ภูมิภาค</p>
                    </div>
                    {areaSelectedarchedHandler(
                      thailandSelected,
                      regionSearched
                    ).map((region, index) => (
                      <RegionDropdown
                        onToggleProvinceHandler={toggleProvinceHandler}
                        onRegionValueHandler={regionValueHandler}
                        key={index}
                        region={region as Region}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-row gap-4 w-[100%] p-4">
                  <button
                    className="
                      rounded-[10px] text-blueOcare
                      bg-white w-[50%] py-2 border-2 border-solid 
                      border-blueOcare cursor-pointer
                    "
                    onClick={defaultValueHandler}
                  >
                    Default
                  </button>
                  <button
                    className={`
                      rounded-[10px] text-white
                      ${
                        regionsValueSelected.length > 0 ||
                        provincesValueSelected.length > 0 ||
                        districtsValueSelected.length > 0 ||
                        subDistrictsValueSelected.length > 0
                          ? 'bg-blueOcare border-blueOcare cursor-pointer'
                          : 'bg-blueOcare/50 border-none cursor-not-allowed'
                      } w-[50%] py-2 border-2 border-solid 
                    `}
                    // eslint-disable-next-line no-console
                    onClick={submitHandler}
                    disabled={
                      !(
                        regionsValueSelected.length > 0 ||
                        provincesValueSelected.length > 0 ||
                        districtsValueSelected.length > 0 ||
                        subDistrictsValueSelected.length > 0
                      )
                    }
                  >
                    Confirm
                  </button>
                </div>
              </>
            </div>
          )}

          {/** show Province mt-[200px] */}
          {toggleDropdown && regionSelected && toggleRegionDropdown && (
            <div className="bg-white w-[250px]">
              <>
                <div
                  className="
                    flex flex-col h-[400px] border-0 pb-4 px-1
                    border-b border-solid border-greyOcare/50
                  "
                >
                  <div className="overflow-y-scroll">
                    <div className="flex flex-row items-center p-2 gap">
                      <RxMagnifyingGlass className="text-[20px] text-greyOcare/80" />
                      <input
                        type="search"
                        className="w-[90%] p-1 outline-none border-none text-[14px]"
                        placeholder="Search..."
                        onChange={changeProvinceHandler}
                      />
                    </div>
                    <div
                      className="
                        flex flex-row justify-between items-center 
                        px-2 cursor-pointer pb-2
                      "
                      onClick={allProvincesSelectValueHandler}
                    >
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 accent-blueOcare"
                          readOnly
                          checked={allProvinceSelectChecked}
                        />
                        <label className="ml-2 text-[12px]">
                          ทุกจังหวัดในภาค
                          {regionValue.NameTH}
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-row items-center p-2 gap-2">
                      <p className="text-greyOcare/70 text-[14px]">
                        จังหวัดในภาค
                        {regionValue.NameTH}
                      </p>
                    </div>
                    {areaSelectedarchedHandler(
                      regionSelected?.provinces,
                      provinceSearched
                    ).map((province, index) => (
                      <ProvincesDropdown
                        onToggleDistrictHandler={toggleDistrictHandler}
                        onProvinceValueHandler={provinceValueHandler}
                        key={index}
                        province={province as Provinces}
                      />
                    ))}
                  </div>
                </div>
              </>
            </div>
          )}

          {/** show District mt-[400px] */}
          {toggleDropdown &&
            provinceSelected &&
            toggleRegionDropdown &&
            toggleProvinceDropdown && (
              <div className="bg-white w-[250px]">
                <>
                  <div
                    className="
                      flex flex-col h-[400px] border-0 pb-4
                      border-b border-solid border-greyOcare/50
                    "
                  >
                    <div className=" overflow-y-scroll">
                      <div className="flex flex-row items-center p-2 gap">
                        <RxMagnifyingGlass className="text-[20px] text-greyOcare/80" />
                        <input
                          type="search"
                          className="w-[90%] p-1 outline-none border-none text-[14px]"
                          placeholder="Search..."
                          onChange={changeDistrictHandler}
                        />
                      </div>
                      <div
                        className="
                          flex flex-row justify-between
                          px-2 cursor-pointer pb-2 items-center 
                        "
                        onClick={() => {
                          setAllDistrictsSelectChecked(
                            !allDistrictsSelectchecked
                          );
                          allDistrictsSelectValueHandler();
                        }}
                      >
                        <div className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 accent-blueOcare"
                            readOnly
                            checked={allDistrictsSelectchecked}
                          />
                          <label className="ml-2 text-[12px]">
                            ทุกอำเภอใน
                            {provinceValue.NameTH}
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-row items-center p-2 gap-2">
                        <p className="text-greyOcare/70 text-[12px]">
                          อำเภอในจังหวัด
                          {provinceValue.NameTH}
                        </p>
                      </div>
                      {areaSelectedarchedHandler(
                        provinceSelected?.provinces,
                        districtSearched
                      ).map((district, index) => (
                        <DistrictDropdown
                          onToggleSubDistrictHandler={toggleSubDistrictHandler}
                          onDistrictValueHandler={districtValueHandler}
                          key={index}
                          district={district as Provinces}
                        />
                      ))}
                    </div>
                  </div>
                </>
              </div>
            )}

          {/** show SubDistrict mt-[700px] */}
          {toggleDropdown &&
            districtSelected &&
            toggleRegionDropdown &&
            toggleProvinceDropdown &&
            toggleDistrictDropdown && (
              <div className="bg-white w-[250px]">
                <>
                  <div
                    className="
                      flex flex-col h-[400px] border-0 pb-4
                      border-b border-solid border-greyOcare/50
                    "
                  >
                    <div className=" overflow-y-scroll">
                      <div className="flex flex-row items-center p-2 gap">
                        <RxMagnifyingGlass className="text-[20px] text-greyOcare/80" />
                        <input
                          type="search"
                          className="w-[90%] p-1 outline-none border-none text-[14px]"
                          placeholder="Search..."
                          onChange={changeSubDistrictHandler}
                        />
                      </div>
                      <div
                        className="
                          flex flex-row justify-between
                          px-2 cursor-pointer pb-2 items-center 
                        "
                        onClick={() => {
                          setAllSubDistrictsSelectChecked(
                            !allSubDistrictsSelectchecked
                          );
                          allSubDistrictsSelectValueHandler();
                        }}
                      >
                        <div className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 accent-blueOcare"
                            readOnly
                            checked={allSubDistrictsSelectchecked}
                          />
                          <label className="ml-2 text-[12px]">
                            ทุกตำบลในอำเภอ
                            {districtValue.NameTH}
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-row items-center p-2 gap-2">
                        <p className="text-greyOcare/70 text-[14px]">
                          ตำบลในอำเภอ
                          {districtValue.NameTH}
                        </p>
                      </div>
                      {areaSelectedarchedHandler(
                        districtSelected?.provinces,
                        subDistrictSearched
                      ).map((subDistrict, index) => (
                        <SubDistrictDropdown
                          key={index}
                          subDistrict={subDistrict as Provinces}
                          onSubDistrictValueHandler={subDistrictValueHandler}
                        />
                      ))}
                    </div>
                  </div>
                </>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default ThailandDropdown;
