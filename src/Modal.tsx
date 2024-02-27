import React from "react";
export default function Modal({
  animation,
  hide,
}: {
  animation: string | null;
  hide: (ms?: number) => void;
}) {
  return (
    <div className={`Modal layout ${animation} relative z-10`}>
      <div
        className={`fixed inset-0 flex items-center justify-center w-screen z-10 overflow-y-auto Modal ${animation}`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-neutral-900">
            <button
              onClick={() => hide(500)}
              type="button"
              className="absolute top-3 end-2.5 text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-neutral-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5">
              <div className="flex mb-3 items-center gap-2">
                <svg
                  className="size-8 text-neutral-400 dark:text-neutral-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M8 5.625c4.418 0 8-1.063 8-2.375S12.418.875 8 .875 0 1.938 0 3.25s3.582 2.375 8 2.375Zm0 13.5c4.963 0 8-1.538 8-2.375v-4.019c-.052.029-.112.054-.165.082a8.08 8.08 0 0 1-.745.353c-.193.081-.394.158-.6.231l-.189.067c-2.04.628-4.165.936-6.3.911a20.601 20.601 0 0 1-6.3-.911l-.189-.067a10.719 10.719 0 0 1-.852-.34 8.08 8.08 0 0 1-.493-.244c-.053-.028-.113-.053-.165-.082v4.019C0 17.587 3.037 19.125 8 19.125Zm7.09-12.709c-.193.081-.394.158-.6.231l-.189.067a20.6 20.6 0 0 1-6.3.911 20.6 20.6 0 0 1-6.3-.911l-.189-.067a10.719 10.719 0 0 1-.852-.34 8.08 8.08 0 0 1-.493-.244C.112 6.035.052 6.01 0 5.981V10c0 .837 3.037 2.375 8 2.375s8-1.538 8-2.375V5.981c-.052.029-.112.054-.165.082a8.08 8.08 0 0 1-.745.353Z" />
                </svg>
                <h3 className="mb-1 text-xl font-bold text-neutral-900 dark:text-white">
                  Approaching Full Capacity
                </h3>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400 mb-6">
                Choosing the right server storage solution is essential for
                maintaining data integrity.
              </p>
              <div className="flex justify-between mb-1 text-neutral-500 dark:text-neutral-400">
                <span className="text-base font-normal">My storage</span>
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                  376,3 of 500 GB used
                </span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2.5 dark:bg-neutral-600">
                <div className="bg-orange-500 h-2.5 rounded-full w-[75%]"></div>
              </div>

              <div className="justify-end flex items-center mt-6 gap-2 rtl:space-x-reverse">
                <button
                  onClick={() => hide(500)}
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-lg border border-neutral-200 hover:bg-neutral-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-neutral-100 dark:focus:ring-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700"
                >
                  Cancel
                </button>
                <button
                  onClick={() => hide(500)}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Upgrade to PRO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => hide(400)}
        className={`Modal backdrop ${animation} fixed inset-0 bg-neutral-900 bg-opacity-50`}
      ></div>
    </div>
  );
}
