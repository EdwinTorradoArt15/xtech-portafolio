"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { dataHeader } from "./Header.data";
import { useState } from "react";
import { MotionTransition } from "../MotionTransition/";

export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <MotionTransition>
      <nav className="flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto md:py-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Logo.png"
            width="150"
            height="40"
            alt="Logo Bank"
          />
        </Link>
        {openMobileMenu ? (
          <AiOutlineClose
            className="text-2xl cursor-pointer md:hidden"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
        ) : (
          <AiOutlineAlignRight
            className="text-2xl  cursor-pointer md:hidden"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
        )}
        <div
          className={`${
            openMobileMenu ? "block fadeInDown" : "hidden fadeOutUp"
          } w-full md:block md:w-auto `}
        >
          <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 shadow-lg md:shadow-none">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="px-4 py-1 transition-all duration-500 ease-in-out"
              >
                <Link href={idLink} className="nav-items font-medium">
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </MotionTransition>
  );
};
