import Link from "next/link"

export default function NavBar(){
    return(
        <div className="flex justify-around">
            <span className=" p-3">KCNDEV</span>
            <ul className="flex gap-4 bg-gray-900 px-10 py-2 rounded-md hover:bg-gray-500 hover:px-[80px] hover:gap-[50px] duration-200 ">
                <li className=""><Link className="hover:bg-black px-4 py-1 rounded-md duration-200" href='/'>Home</Link></li>
                <li><Link className="hover:bg-black px-4 py-1 rounded-md duration-200" href='/about'>About</Link></li>
                <li><Link className="hover:bg-black px-4 py-1 rounded-md duration-200" href='/project'>Project</Link></li>
            </ul>
        </div>
    )
}