import type { FC } from 'react';
import { createElement } from 'react';
import type { IconType } from 'react-icons';

interface ButtonDropdownProps {
  name: string;
  icon: IconType;
  toggleDropdown: boolean;
}

const ButtonDropdown: FC<ButtonDropdownProps> = ({
  name,
  icon,
  toggleDropdown,
}) => {
  return (
    <button
      className={`
        td
        border-1 flex h-10 w-full cursor-pointer
        justify-between rounded-lg border-solid 
        ${toggleDropdown ? 'border-blueOcare' : 'border-[#E5E5EA]'}
        bg-white px-4 text-black items-center 
      `}
    >
      {name}
      {createElement(icon, { className: 'w-4 h-4 fill-greyDarkOcare' })}
    </button>
  );
};

export default ButtonDropdown;
