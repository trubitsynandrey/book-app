import React from "react";
import { AddBook, AllBooks, FavouriteBooks } from "../icons";
import { NavItem } from "./nav-item";


export const Footer = () => {
  return (
    <footer>
      <nav className="bg-palewhite flex justify-around py-[18px] fixed w-full bottom-0">
        <NavItem path={"/add-book"}><AddBook /></NavItem>
        <NavItem path={"/all-books"}><AllBooks /></NavItem>
        <NavItem path={"/favourite-books"}><FavouriteBooks /></NavItem>
      </nav>
    </footer>
  );
};
