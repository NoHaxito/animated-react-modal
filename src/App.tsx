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
      {display ? <Modal animation={animation} hide={hide} /> : null}
    </div>
  );
}
