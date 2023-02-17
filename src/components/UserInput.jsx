import React from "react";

export default function UserInput(setBoard, selectedIndex) {
  return (
    <form className="flex justify-center gap-4">
      <input required type="text" className="rounded border-2 w-[50px]" />
      <button type="submit" className="border-2 rounded-lg text-grey-400">
        Add Response{" "}
      </button>
    </form>
  );
}
