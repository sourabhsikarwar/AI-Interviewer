"use client";

import { sidebar } from "@/constants";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-full flex flex-col justify-between p-8 h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="font-medium text-5xl hindi text-blue-500">एकलव्य</h1>
        <hr className="border-[0.5px] border-gray-300" />
        <ul className="">
          {sidebar.map((item) => (
            <Link key={item.name} href={item.path}>
              <li className="p-3 my-1 hover:bg-blue-50 text-gray-700 text-lg font-medium rounded">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <p className="text-gray-400 text-sm">Eklavya AI © 2024</p>
    </div>
  );
};

export default Sidebar;
