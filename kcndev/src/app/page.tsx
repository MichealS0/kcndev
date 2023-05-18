import Link from "next/link"

export default function Home(){
  return(
    <section className="bg-white dark:bg-gray-900 items-center">
      <div className=" py-4 mx-auto max-w-screen-xl text-center lg:py-5 ">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md-text-5xl lg:text-6xl dark:text-white">The big bossMan</h1>
        <p className="mb-8 text-lg font-normal text-gray-600 lg:px-48 sm:px-16 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam ab maxime asperiores aspernatur reiciendis porro quidem est. Doloremque cumque, ducimus sapiente ipsam quia pariatur adipisci tenetur optio ut illo dicta praesentium. Odio quam at eveniet ea eaque voluptas? Magnam consectetur dignissimos tenetur delectus, alias deleniti. Ab nihil magni fugit?</p>
        <div className=" flex flex-col mb-8 gap-5 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-x-4">
          <Link href='/more' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">More</Link>
          <Link href='/projects'>Projects</Link>
        </div>
      </div>
    </section>
  )
}