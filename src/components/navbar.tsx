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
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ height: '30px', width: 'auto' }}
          />
        </div>
        
        <div className="ml-auto flex items-center space-x-4">
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
          <Button size="sm" onClick={scrollToGetInvolved}>Join Program</Button>
        </div>
      </div>
    </header>
  )
}
