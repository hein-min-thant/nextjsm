"use client";

import { useTheme } from "@/context/ThemeProvider";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900  data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="assets/icons/sun.svg"
              className="active-theme"
              alt="sun"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              className="active-theme"
              alt="moon"
              width={20}
              height={20}
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="background-light900_dark200 absolute -right-12 mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem
              key={item.label}
              onClick={() => {
                setMode(item.value);

                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={20}
                height={20}
                className={`${mode === item.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === item.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
