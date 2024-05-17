"use client"

import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { NavigationMenuLink, NavigationMenuItem, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import MarketPlaceSection from "@/components/marketplace";
import TopSellersComponent from "@/components/top-vendedores";
import TopBuyersComponent from "@/components/top-buyers";
import { Header } from "@radix-ui/react-accordion";
import HeaderComponent from "@/components/header";

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">

      <HeaderComponent />
      
      <main className="flex-1 px-4 py-8">
        {/* <div className="prose dark:prose-invert">
          <h2>Welcome to BlockBocado</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel faucibus bibendum, nulla nunc
            tincidunt enim, a bibendum libero ante id erat. Nunc ac nisi vel nisl faucibus tristique. Sed auctor, magna
            vel faucibus bibendum, nulla nunc tincidunt enim, a bibendum libero ante id erat.
          </p>
          <p>
            Nunc ac nisi vel nisl faucibus tristique. Sed auctor, magna vel faucibus bibendum, nulla nunc tincidunt
            enim, a bibendum libero ante id erat. Nunc ac nisi vel nisl faucibus tristique.
          </p>
        </div> */}
        <MarketPlaceSection />

        <TopSellersComponent />

        <TopBuyersComponent />

      </main>

      <footer className="sticky bottom-0 flex h-16 w-full items-center justify-center bg-white shadow dark:bg-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 BlockBocado All rights reserved.</p>
      </footer>
    </div>
  )
}

