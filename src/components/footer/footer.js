import React from "react";
import { AddBook, AllBooks, FavouriteBooks } from "../icons";
import { NavItem } from "./nav-item";


export const Footer = () => {
  return (
    <footer>
      <nav className="bg-palewhite flex justify-around items-center h-[60px] fixed w-full bottom-0">
        <NavItem path={"/app/add-book"}><AddBook /></NavItem>
        <NavItem path={"/app/all-books"}><AllBooks /></NavItem>
        <NavItem path={"/app/favourite-books"}><FavouriteBooks /></NavItem>
      </nav>
    </footer>
  );
};
