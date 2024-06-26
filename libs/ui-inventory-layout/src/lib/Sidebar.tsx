import { SidebarLinkPartial } from './partials/sidebar-link.partial';
import { SidebarDashboardIconPartial } from './partials/sidebar-dashboard-icon.partial';
import { SidebarCategoryIconPartial } from './partials/sidebar-category-icon.partial';
import { SidebarProductIconPartial } from './partials/sidebar-product-icon.partial';
import { SidebarBrandIconPartial } from './partials/sidebar-brand-icon.partial';

interface Props {
  isOpen: boolean;
  closeSidebar: () => void;
  path: string;
  apiVersion: string;
}

export function Sidebar(props: Props) {
  return (
    <div>
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          props.isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      <div
        id="sidebar"
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          props.isOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <button
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => props.closeSidebar()}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

          <a className="block" href="#">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient
                  x1="28.538%"
                  y1="20.229%"
                  x2="100%"
                  y2="108.156%"
                  id="logo-a"
                >
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="88.638%"
                  y1="29.267%"
                  x2="22.42%"
                  y2="100%"
                  id="logo-b"
                >
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path
                d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                fill="#4F46E5"
              />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg>
          </a>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                FoodFolio Admin
              </span>
            </h3>

            <ul className="mt-3 mb-3">
              <SidebarLinkPartial
                title="Dashboard"
                currentPath={props.path}
                shouldPath="/"
                icon={
                  <SidebarDashboardIconPartial
                    currentPath={props.path}
                    shouldPath="/"
                  />
                }
              />
              <SidebarLinkPartial
                title="Categories"
                currentPath={props.path}
                shouldPath="/categories"
                icon={
                  <SidebarCategoryIconPartial
                    currentPath={props.path}
                    shouldPath="/categories"
                  />
                }
              />
              <SidebarLinkPartial
                title="Brands"
                currentPath={props.path}
                shouldPath="/brands"
                icon={
                  <SidebarBrandIconPartial
                    currentPath={props.path}
                    shouldPath="/brands"
                  />
                }
              />
              <SidebarLinkPartial
                title="Products"
                currentPath={props.path}
                shouldPath="/products"
                icon={
                  <SidebarProductIconPartial
                    currentPath={props.path}
                    shouldPath="/products"
                  />
                }
              />
              <SidebarLinkPartial
                title="Locations"
                currentPath={props.path}
                shouldPath="/locations"
                icon={
                  <SidebarCategoryIconPartial
                    currentPath={props.path}
                    shouldPath="/locations"
                  />
                }
              />
              <SidebarLinkPartial
                title="Sizes"
                currentPath={props.path}
                shouldPath="/sizes"
                icon={
                  <SidebarCategoryIconPartial
                    currentPath={props.path}
                    shouldPath="/sizes"
                  />
                }
              />
              <SidebarLinkPartial
                title="Types"
                currentPath={props.path}
                shouldPath="/types"
                icon={
                  <SidebarCategoryIconPartial
                    currentPath={props.path}
                    shouldPath="/types"
                  />
                }
              />
              <SidebarLinkPartial
                title="Receipts"
                currentPath={props.path}
                shouldPath="/receipts"
                icon={
                  <SidebarCategoryIconPartial
                    currentPath={props.path}
                    shouldPath="/receipts"
                  />
                }
              />
              <SidebarLinkPartial
                title="Warehouses"
                currentPath={props.path}
                shouldPath="/warehouse"
                icon={
                  <SidebarCategoryIconPartial
                    currentPath={props.path}
                    shouldPath="/warehouse"
                  />
                }
              />
            </ul>

            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                API Version: {props.apiVersion}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
