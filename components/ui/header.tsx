"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" }, // Home now links to "/"
    { name: "Plant Pots", link: "/plants" },
    { name: "Tables", link: "/tables" },
    { name: "Ceramics", link: "/ceramics" },
    { name: "Chairs", link: "/chairs" },
    { name: "Crockery", link: "/crockery" },
    { name: "Tableware", link: "/tableware" },
    { name: "Cutlery", link: "/cutlery" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between py-4 px-6">
        {/* Mobile Menu Button */}
        <button className="md:hidden block" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-[1.7rem] font-semibold tracking-wide">Avoin</h1>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 ml-auto">
          <Link href="/cart"><ShoppingCartIcon className="w-6 h-6 cursor-pointer" /></Link>
          <Link href="/"><UserIcon className="w-6 h-6 cursor-pointer" /></Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center space-x-6 py-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className={`text-sm font-medium ${
              active === item.name ? "text-blue-600 font-semibold" : "text-gray-700"
            } hover:text-blue-500 transition`}
            onClick={() => setActive(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center py-4 bg-white shadow-md">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-gray-700 py-2 w-full text-center hover:bg-gray-100"
              onClick={() => {
                setActive(item.name);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
// import Link from "next/link";

// const categories = [
//     { name: "Plant Pots", slug: "plant-pots"},
//     { name: "Tables", slug: "tables" },
//     { name: "Ceramics", slug: "ceramics" },
//     { name: "Chairs", slug: "chairs" },
//     { name: "Crockery", slug: "crockery" },
//     { name: "Tableware", slug: "tableware" },
//     { name: "Cutlery", slug: "cutlery" },
// ];

// export default function Header() {
//     return (
//         <header className="p-4 bg-gray-100 shadow">
//             <nav className="flex justify-center space-x-6">
//                 <Link href="/" className="font-bold text-blue-600">Home</Link>
//                 {categories.map((category) => (
//                     <Link key={category.slug} href={`/categories/${category.slug}`} className="text-gray-700 hover:text-blue-500">
//                         {category.name}
//                     </Link>
//                 ))}
//             </nav>
//         </header>
//     );
// }
