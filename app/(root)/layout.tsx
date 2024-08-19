import MobileNav from "@/components/MobileNav";
import  Sidebar  from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Kisara', lastName: 'Batugedara' };

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="root-layout">

            <Image src="/icons/logo-one.svg" width={120} height={40}
            alt="menu icon"   
            className="relative"
            style={{ left: '-20px' }}  />

            <div>
                <MobileNav user={loggedIn} />

            </div>

          </div>
          {children}
        </div>
    </main>
  );
}
