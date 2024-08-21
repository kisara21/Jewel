'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

  

const MobileNav = () => {

  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
    <Sheet>
    <SheetTrigger>
        <Image
         src="/icons/hamburger.svg"
         width={30}
         height={30}
         alt="menu"
         className='cursor-pointer'

        />
    </SheetTrigger>
    <SheetContent side="left" className='border-none bg-white w-[320px] sm:w-[540px]'>
    <Link href="/"
            className="mb-20
            cursor-pointer flex
            items-center gap-10">
                <Image
                  src="/icons/logo-two.svg"
                  width={20}
                  height={20}
                  alt="Jewel logo"
                  className="size-[230px]
                  max-xl:size-200"
                  style={{ position:'fixed', top: '-55px', left: '0px' }}
                /> 
                <h1
                className="text-26 font-ibm-plex-serif font-bold text-black-1">
                  
                </h1>

            </Link>
            <div className='mobilenav-sheet'>
                <SheetClose asChild>
                    <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                    {sidebarLinks.map((item) => {
              
                    const isActive =  
                    pathname === item.
                    route || pathname.
                    startsWith(`${item.route}/`)


                    return (
                        <SheetClose asChild key={item.route}> 

                            <Link href={item.route} key={item.label} 
                            className={cn('mobilenav-sheet_close w-full', {
                            'bg-bank-gradient': isActive
                            })}>
                            
                            
                            
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    width={20}
                                    height={20}
                                    className={cn({
                                    'brightness-[3] invert-0':
                                    isActive
                                    })}
                                />
                            
                            <p className={cn('text-16 font-semibold text-black-2', {'text-white':isActive})}>
                                {item.label}
                            </p>

                            </Link>


                        </SheetClose>


                    ) 
                    })}       

                    USER
                    </nav>
                </SheetClose>

            FOOTER
            </div>
    </SheetContent>
    </Sheet>
    </section>
  )
}

export default MobileNav
