import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AuthForm = ({ type }: {type : string }) => {
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 d:gap-8'>
           <Link href="/"
            className="
            cursor-pointer flex
            items-center gap-1">
                <Image
                  src="/icons/logo-two.svg"
                  width={20}
                  height={20}
                  alt="Jewel logo"
                  className="size-[200px]
                  max-xl:size-200"
                /> 
                <h1
                className="text-26 font-ibm-plex-serif font-bold text-black-1">
                  
                </h1>

            </Link>
        </header>
    </section>
  )
}

export default AuthForm
