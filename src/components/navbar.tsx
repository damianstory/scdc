"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const scrollToGetInvolved = () => {
    const getInvolvedSection = document.getElementById('get-involved');
    if (getInvolvedSection) {
      getInvolvedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-col md:flex-row h-auto md:h-[103px] w-full items-center px-4 md:px-6 py-4 md:py-0">
        <div className="flex items-center justify-center w-full md:w-auto mb-4 md:mb-0">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={160}
            height={40}
            priority
            quality={100}
            className="h-10 w-auto"
          />
        </div>
        
        <div className="flex items-center justify-between w-full md:w-auto md:ml-auto gap-4 md:gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
              Partner Schools <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                Chestermere High School
              </DropdownMenuItem>
              <DropdownMenuItem>
                McKinnon Park Secondary School
              </DropdownMenuItem>
              <DropdownMenuItem>
                Paris District High School
              </DropdownMenuItem>
              <DropdownMenuItem>
                Pembina Trails Collegiate
              </DropdownMenuItem>
              <DropdownMenuItem>
                Waterford District High School
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" onClick={scrollToGetInvolved} className="px-6">Join Program</Button>
        </div>
      </div>
    </header>
  )
}
