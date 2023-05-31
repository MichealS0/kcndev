import Link from "next/link"
import Image from "next/image"

export default function Home(){
  return(
    <section className=" translate-y-[100px]">
      <div className="justify-around mt-auto lg:flex">
        <div className=" items-center text-center w-fit my-auto mx-auto">
          <div>
            <p className="font-extralight">My</p>
            <h1 className=" text-[72px] font-extrabold"><span className=" hover:text-gray-900 hover:px-3 duration-150 cursor-pointer">Programming</span> Journal</h1>
            <p className="max-w-[600px] text-center items-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et eros ac risus dictum viverra. Suspendisse potenti. Duis tempus orci ut lorem gravida vulputate. Proin.</p></div>
            <div className="flex justify-around mt-10 w-fit mx-auto gap-8">
              <div className=" p-3 px-5 bg-gray-500 rounded-xl hover:bg-gray-900 duration-150">
                <Link href='/contact' className=" text-2xl">Contact</Link>
              </div>
              <div className=" p-3 px-5 border border-gray-500 rounded-xl hover:bg-gray-900 hover:border-gray-900 duration-150 ">
                <Link href='/projects' className=" text-2xl">Projects</Link>
              </div>
            </div>
        </div>
        <div className="mx-auto mix-blend-screen">
          <Image
           src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80"
           height={900}
           width={600}
           alt="Hero Image"
          />
        </div>
      </div>
    </section>
  )
}