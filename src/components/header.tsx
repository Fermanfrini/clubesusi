"use client";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: { title: string; href: string }[] = [
    {
      title: "Sobre",
      href: "#About",
    },
    {
      title: "Valores",
      href: "#Values",
    },
    {
      title: "Serviços",
      href: "#Services",
    },
    {
      title: "Planos",
      href: "#Plans",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="py-14"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <Link href="#Home">
          <NavbarBrand>
          {/* <h1 className="text-3xl font-bold xl:text-5xl">CLUBE SUSI</h1> */}
            <Image
              src={Logo}
              alt="CLUBESUSI"
              sizes="50vw"
              height={0}
              width={0}
              className="h-auto w-52 object-cover"
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden gap-8 md:flex" justify="center">
        <NavbarItem>
          <Link
            className="text-black text-xl transition-all duration-300 hover:font-bold"
            href="#About"
          >
            Sobre
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black text-xl transition-all duration-300 hover:font-bold"
            href="#Values"
          >
            Valores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black text-xl transition-all duration-300 hover:font-bold"
            href="#Services"
          >
            Serviços
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black text-xl transition-all duration-300 hover:font-bold"
            href="#Plans"
          >
            Planos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex cursor-pointer items-center justify-center gap-4">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="https://www.facebook.com/p/Clube-Susi-Clube-de-Vantagens-100066682329154/?paipv=0&eav=AfZ-8m8MShX8om9zTKqsEOfBStmm3x6ZjCQOZ8ZiDKv5sgUJtPZSEwM7hLkrVhPOGOE&_rdr"
              variant="solid"
              isIconOnly
              target="_blank"
              startContent={
                <FaFacebookF
                  size={40}
                  className=" p-2 text-white"
                />
              }
            />
          </NavbarItem>

          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="https://www.instagram.com/clubesusi/"
              variant="solid"
              isIconOnly
              target="_blank"
              startContent={
                <FaInstagram
                  size={60}
                  className="p-2 text-white"
                />
              }
            />
          </NavbarItem>

          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="https://api.whatsapp.com/send/?phone=5543988579315&text=Gostaria+de+informa%C3%A7%C3%B5es+sobre+o+ClubeSusi&type=phone_number&app_absent=0"
              variant="solid"
              isIconOnly
              target="_blank"
              startContent={
                <FaWhatsapp
                  size={60}
                  className=" p-2 text-white"
                />
              }
            />
          </NavbarItem>
        </div>
      </NavbarContent>
      <NavbarMenu className="pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" href={item.href} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
