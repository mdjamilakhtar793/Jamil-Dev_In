"use client";

import { PlaceholdersAndVanishInput } from "./ui/PlaceholdersAndVanishInput";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Find my all Kind of my Work Experience?",
    "find my Personal Info and my Tech Stack || Services?",
    "Programing language : Java , JavaScript, MySQL  , C++ , Python",
    "ReactJS, NextJS , MongoDB , NodeJS , Express , React-Native",
    "Tools : VSCode , Git , GitHub , AWS , Docker , Android Studio",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[10rem] flex flex-col justify-center  items-center px-1">
      <h2 className=" sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black"></h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
