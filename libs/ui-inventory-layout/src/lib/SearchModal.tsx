import { Dialog, DialogContent, DialogTitle } from '@azkaban/ui-components';

interface Props {
  searchModalOpen: boolean;
  setSearchModalOpen: (value: boolean) => void;
}

export function SearchModal(props: Props) {
  return (
    <Dialog
      modal={true}
      open={props.searchModalOpen}
      onOpenChange={(value: boolean) => props.setSearchModalOpen(value)}
    >
      <DialogContent className="border border-transparent dark:border-slate-700 overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg">
        <DialogTitle className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase px-2 mb-2">
          Search Anything...
        </DialogTitle>
        <form className="justify-center">
          <div className="relative">
            <label htmlFor="searchId" className="sr-only">
              Search
            </label>
            <input
              id="searchId"
              className="w-full dark:text-slate-300 bg-white dark:bg-slate-800 border-0 focus:ring-transparent placeholder-slate-400 dark:placeholder-slate-500 appearance-none py-3 pl-10 pr-4"
              type="search"
              placeholder=""
            />
            <button
              className="absolute inset-0 right-auto group"
              type="submit"
              aria-label="Search"
            >
              <svg
                className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-4 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </form>
        <div className="py-4 px-2">
          <div className="mb-3 last:mb-0">
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-2">
              Recent searches
            </div>
            <ul className="text-sm">
              <li>
                <a
                  className="flex items-center p-2 text-slate-800 dark:text-slate-100 hover:text-white hover:bg-indigo-500 rounded group"
                  href="#"
                  onClick={() =>
                    props.setSearchModalOpen(!props.searchModalOpen)
                  }
                >
                  <svg
                    className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                  </svg>
                  <span>Form Builder - 23 hours on-demand video</span>
                </a>
              </li>

              <li>
                <a
                  className="flex items-center p-2 text-slate-800 dark:text-slate-100 hover:text-white hover:bg-indigo-500 rounded group"
                  href="#"
                  onClick={() =>
                    props.setSearchModalOpen(!props.searchModalOpen)
                  }
                >
                  <svg
                    className="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                  </svg>
                  <span>Form Builder - 23 hours on-demand video</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
