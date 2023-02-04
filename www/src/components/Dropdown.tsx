import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export interface Navigation {
  name: string;
  href: string;
  current: boolean;
}

export interface NavigationWithSubMenu extends Navigation {
  subMenu?: Navigation[];
}

interface IDropdownProps {
  navigation: NavigationWithSubMenu;
}

export default function Dropdown({ navigation }: IDropdownProps) {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block w-full text-left">
        <div>
          <Menu.Button className="mb-0.5  inline-flex w-full rounded bg-indigo-900 bg-opacity-20 py-2 pl-3 pr-4 text-white sm:justify-center md:rounded-full md:bg-transparent  md:px-5 md:py-2.5 md:text-white md:hover:bg-blue-300/30 md:hover:text-white">
            {navigation.name}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:w-48">
            <div className="px-1 py-1">
              {navigation.subMenu?.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm font-light`}
                    >
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
