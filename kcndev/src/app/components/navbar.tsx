"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar(){
    const currentPath = usePathname();

    return(
        <div className="flex justify-around">
            <span className=" p-3 text-2xl cursor-pointer">KCNDEV</span>
            <ul className="flex gap-4 px-10 py-3 rounded-md duration-200 items-center">
                <li className={currentPath === "/" ? "active" : "non-active"}><Link className=" px-4 py-1 rounded-md duration-200"  href='/'>Home</Link></li>
                <li className={currentPath === "/about" ? "active" : "non-active"}><Link className=" px-4 py-1 rounded-md duration-200 " href='/about' >About</Link></li>
                <li className={currentPath === "/projects" ? "active" : "non-active"}><Link className=" px-4 py-1 rounded-md duration-200" href='/projects'>Projects</Link></li>
            </ul>
            <Link href='/contact' className=" py-3 text-xl border border-3 rounded-xl border-gray-700 px-4 hover:border-transparent hover:bg-gray-500 duration-300">Contact</Link>
        </div>
    )
}