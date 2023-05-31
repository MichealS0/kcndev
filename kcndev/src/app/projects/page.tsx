"use client"
import ProjectCard from "../components/projectcard"

export default async function Projects() {
    const data = await fetch("https://api.github.com/users/MichealS0/repos")
    const res = await data.json()

    return (
        <div>
            {res.map((results) => (
                <div key="results.id">
                    <ProjectCard name={results.name} description={results.description} createdAt={results.created_at} url={results.html_url} />
                </div>
            ))}
        </div>
    )
}