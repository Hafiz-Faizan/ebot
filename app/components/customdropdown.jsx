import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const CustomDropdown = ({ title, items, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setOpenSubDropdown(null);
  };

  const handleSubDropdownLeave = () => {
    setOpenSubDropdown(null); // Close only the sub-dropdown
  };

  const handleItemEnter = (itemName) => {
    setOpenSubDropdown(itemName); // Open the corresponding sub-dropdown
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center  text-sm font-semibold leading-6 text-gray-900">
        {title}
        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 z-20 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid  bg-white px-5 py-6  sm:p-8">
              {items.map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() => handleItemEnter(item.name)}
                >
                  <div className="flex justify-between items-center">
                    <Link href={item.href} className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                      <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </Link>
                    {subItems[item.name] && (
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-500 cursor-pointer"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  {openSubDropdown === item.name && subItems[item.name] && (
                    <div
                      className=" ml-8"
                      onMouseLeave={handleSubDropdownLeave} // Close the sub-dropdown when mouse leaves it
                    >
                      <ul className=" ml-4">
                        {subItems[item.name].map((subItem) => (
                          <li key={subItem.name} className="py-2">
                            <Link
                              href={subItem.href}
                              className="border-b border-gray-300 bg-gray-50 px-4 py-4 font-bold text-sm text-gray-600 hover:text-indigo-600 block pb-2 border-b border-gray-200 last:border-none"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
