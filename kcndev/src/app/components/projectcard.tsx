import Link from "next/link"

export default function ProjectCard({ name, description, createdAt, url }){
    return(
        <div className=" text-center items-center w-fit">
            <Link href={"/" + name}>
            <div className=" bg-orange-500 p-2">
               <h1>{name}</h1>
                <p>{description}</p>
                <p>{createdAt}</p>
                <a href={url}>Go to page</a> 
            </div>
            </Link>
            
        </div>
    )
}