"use client";

import React, { HtmlHTMLAttributes } from "react";
import { SearchManufacturer } from ".";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = (setManufacturer, setModel) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");

  const [searchModel, setSearchModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill the search bar");
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car modal icon"
        />
        <input
          type="text"
          name="modal"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          className="searchbar__input"
          placeholder="Tiguan"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
