import React, { useState } from "react";
import { cn } from "../lib/utils";
export const Modal = ({ children = undefined }: { children?: JSX.Element }) => {
  const [animation, setAnimation] = useState<"open" | "close" | null>(null);
  const [showState, setShow] = useState(false);

  const hide = async (ms: number = 300) => {
    setAnimation("close");
    await new Promise((r) => setTimeout(r, ms));
    setShow(false);
  };
  const show = async (ms: number = 200) => {
    setAnimation("open");
    await new Promise((r) => setTimeout(r, ms));
    setShow(true);
  };
  return (
    <>
      <button
        className="w-full rounded-lg bg-neutral-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        onClick={() => show()}
      >
        Open modal
      </button>
      {showState && (
        <div
          data-state={animation === "open" ? "open" : "closed"}
          className={cn(
            " fixed inset-0 z-50 flex h-screen w-screen items-center justify-center",
          )}
        >
          <div
            data-state={animation === "open" ? "open" : "closed"}
            className={cn(
              "duration-400 relative z-10 w-[95%] space-y-2 rounded-lg bg-white p-6 data-[state=closed]:animate-slide-zoom-out-top data-[state=open]:animate-slide-zoom-in-top dark:bg-neutral-950 sm:max-w-[425px]",
            )}
          >
            <button
              onClick={() => hide()}
              className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full border p-1 hover:bg-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <line
                  x1="200"
                  y1="56"
                  x2="56"
                  y2="200"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <line
                  x1="200"
                  y1="200"
                  x2="56"
                  y2="56"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <h3 className="text-lg font-semibold leading-none tracking-tight">
                Edit profile
              </h3>
              <p className="text-sm text-neutral-500">
                Make changes to your profile here. Click save when you're done.
              </p>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  placeholder="NoHaxito"
                  autoComplete="off"
                  className="col-span-3 h-8 rounded-lg border border-transparent bg-neutral-100 px-3 py-1 outline-none transition-[border] duration-500 focus:border-neutral-300 dark:bg-neutral-900 dark:focus:border-neutral-800"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  placeholder="@nohaxito"
                  autoComplete="off"
                  className="col-span-3 h-8 rounded-lg border border-transparent bg-neutral-100 px-3 py-1 outline-none transition-[border] duration-500 focus:border-neutral-300 dark:bg-neutral-900 dark:focus:border-neutral-800"
                />
              </div>
            </div>
            <div className="flex flex-col-reverse gap-1 sm:flex-row sm:justify-end">
              <button
                className="rounded-lg bg-neutral-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-700"
                onClick={() => hide()}
              >
                Cancel
              </button>
              <button className="rounded-lg bg-neutral-950 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-900 dark:bg-neutral-200 dark:text-black dark:hover:bg-neutral-300">
                Save changes
              </button>
            </div>
          </div>
          <div
            onClick={() => hide()}
            className="backdrop fixed inset-0 bg-black bg-opacity-80"
          />
        </div>
      )}
    </>
  );
};
