import starLightLogo from "../assets/starlight_color_logo.png";
import DropDown, { NavigationWithSubMenu } from "./Dropdown";

const navigations: NavigationWithSubMenu[] = [
  {
    name: "Learn",
    href: "#",
    current: true,
    subMenu: [
      { name: "Mobile", href: "#", current: false },
      { name: "Web", href: "#", current: false },
      { name: "Desktop", href: "#", current: false },
      { name: "Embedded", href: "#", current: false },
    ],
  },
  {
    name: "Packages",
    href: "#",
    current: false,
    subMenu: [
      { name: "Learn", href: "#", current: false },
      { name: "Flutter Favorites", href: "#", current: false },
      { name: "Packages", href: "#", current: false },
      { name: "Games", href: "#", current: false },
    ],
  },
  {
    name: "ShowCases",
    href: "#",
    current: false,
    subMenu: [
      { name: "Community", href: "#", current: false },
      { name: "Event", href: "#", current: false },
      { name: "Culture", href: "#", current: false },
    ],
  },
];
export default function NavBar() {
  return (
    <div>
      <nav className="border-gray-200 bg-indigo-800 px-2 py-2.5 dark:bg-gray-900  sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src={starLightLogo}
              className="mr-3 h-6 sm:h-9"
              alt="Star Light Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-50 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg bg-indigo-800 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-3 md:border-0 md:bg-indigo-800 md:text-sm md:font-medium md:dark:bg-gray-900">
              {navigations.map((navigation, index) => {
                return <DropDown navigation={navigation} key={index} />;
              })}
              <li>
                <a
                  href="#getting-started"
                  className="mb-0.5  inline-flex w-full rounded bg-indigo-900 bg-opacity-20 py-2 pl-3 pr-4 text-white dark:bg-gray-700
                   dark:text-gray-400 dark:hover:bg-gray-600  sm:justify-center md:rounded-full md:bg-white md:px-5 md:py-2.5 md:text-blue-500 md:hover:bg-white/90 md:hover:text-blue-600"
                >
                  Getting Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
