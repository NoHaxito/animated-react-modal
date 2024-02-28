import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/use-on-click-outside";
import { Theme, useTheme } from "./theme-provider";

const THEMES = [
  {
    value: "light",
    label: "Light",
    icon: (
      <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path>
      </svg>
    ),
  },
  {
    value: "dark",
    label: "Dark",
    icon: (
      <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
      </svg>
    ),
  },
  {
    value: "system",
    label: "System",
    icon: (
      <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"></path>
      </svg>
    ),
  },
];

export const ModeToggle = () => {
  const [animation, setAnimation] = useState<"open" | "close" | null>(null);
  const [display, setDisplay] = useState(false);
  const ref = useRef(null);
  const hide = async (ms: number = 300) => {
    setAnimation("close");
    await new Promise((r) => setTimeout(r, ms));
    setDisplay(false);
  };
  const show = async (ms: number = 200) => {
    setAnimation("open");
    await new Promise((r) => setTimeout(r, ms));
    setDisplay(true);
  };
  const { setTheme, theme } = useTheme();
  useOnClickOutside(ref, () => hide());
  return (
    <div className="relative">
      <button
        onClick={() => (display ? hide() : show())}
        className="flex size-8 items-center justify-center rounded-full border p-1 dark:border-neutral-800 dark:hover:bg-neutral-900"
        type="button"
      >
        {THEMES.find((t) => theme === t.value)?.icon}
      </button>
      {display && (
        <div
          ref={ref}
          data-state={animation === "open" ? "open" : "closed"}
          id="dropdown"
          className="duration-600 absolute bottom-full right-0 z-10 mb-2 w-44 divide-y divide-neutral-100 rounded-lg bg-neutral-50 shadow data-[state=closed]:animate-zoom-out data-[state=open]:animate-zoom-in dark:bg-neutral-900"
        >
          <ul className="p-1 text-sm text-neutral-700 dark:text-neutral-200">
            {THEMES.map((t) => (
              <li key={t.value}>
                <button
                  onClick={() => {
                    setTheme(t.value as Theme);
                    hide(600);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-white"
                >
                  {t.icon}
                  {t.label}
                  {theme === t.value && (
                    <span className="ml-auto">
                      <svg
                        className="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
