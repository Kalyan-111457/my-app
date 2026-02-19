"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot-Password", href: "/forgot-password" }
]

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname=usePathname();
    return (

        <div>

            {navlinks.map((item) => {
                const isactive=pathname===item.href || pathname.startsWith(item.href)
                return (
                    <>
                    <Link href={item.href} key={item.name}>
                        {item.name}
                    </Link>
                    <h1>{isactive}</h1>
              
                    </>

            )
            })}
            {children}



        </div>

    );
}
