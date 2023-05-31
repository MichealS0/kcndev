import ProjectCard from "../components/projectcard"

export default async function ProjectPage(){

    const data = await fetch("https://api.github.com/repos/MichealS0/kcndev")
    const res = await data.json()

    return(
        <div>
            {res.map((info) => (
                <p key={info.id}>{info.name}</p>
            ))}
        </div>
    )
}