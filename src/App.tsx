import "./App.css";
import React, { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [animation, setAnimation] = useState<"open" | "close" | null>(null);
  const [display, setDisplay] = useState(false);

  const hide = async (ms: number = 1000) => {
    setAnimation("close");
    await new Promise((r) => setTimeout(r, ms));
    setDisplay(false);
  };
  const show = async (ms: number = 1000) => {
    setAnimation("open");
    await new Promise((r) => setTimeout(r, ms));
    setDisplay(true);
  };

  return (
    <div className="dark:text-white dark:bg-neutral-950 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold mb-3">Animated React Modal</h1>
      <button
        className="rounded-lg px-3 py-2 dark:bg-neutral-900 dark:hover:bg-neutral-800 bg-neutral-200 hover:bg-neutral-300"
        onClick={() => show(200)}
      >
        Open modal
      </button>

      <footer className="fixed bottom-2 right-5">
        <a
          href="https://github.com/nohaxito/animated-react-modal"
          target="_blank"
          className="size-8 p-1 dark:border-neutral-800 rounded-full border dark:hover:bg-neutral-900 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size-4"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <span className="sr-only">Icon description</span>
        </a>
      </footer>

      {display ? <Modal animation={animation} hide={hide} /> : null}
    </div>
  );
}
