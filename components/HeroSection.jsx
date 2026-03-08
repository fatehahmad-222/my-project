"use client";

import { useState } from "react";
import { Ripple } from "@/components/ui/ripple";
import { VideoText } from "@/components/ui/video-text";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function HeroSection() {

  const [mobileOpen, setMobileOpen] = useState(false);

  // Array of nav items
  const navItems = [
    { name: "Products", link: "/products" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative min-h-screen bg-cyan-900">



      {/* Navbar */}
               <header className=" relative  bg-black h-15 rounded-4xl">
        <Navbar>
          {/* Desktop Nav */}
          <NavBody>
            <NavbarLogo />
            <div >
            <NavItems items={navItems} />
          </div>
           

              <NavbarButton href="/signup" className=" ml-auto  rounded-2xl"  >Sign Up</NavbarButton>
                
          </NavBody>
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu isOpen={mobileOpen}>
              <NavItems
                items={navItems}
                onItemClick={() => setMobileOpen(false)}
              />
            </MobileNavMenu>  
          </MobileNav>
        </Navbar>
        </header>
   

     

      {/* Hero Section */}
      <div className="relative h-159 w-full overflow-hidden">
        {/* Video masked in text */}
        
        {/* Ripple overlay */}
              
       <div className="flex items-center justify-center min-h-screen ">
  <span className="relative flex size-3">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
    <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
  </span>
</div>
        <Ripple className=" flex items-center justify-between h-180 absolute overflow-auto inset-0 z-10" />
      </div>
            
       
    </div>
  );
}