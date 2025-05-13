import Link from "next/link";

export default function ProjectsPage(){
    return(
        <main>
            <h1 className="font-header text-3xl w-screen text-center">Projects</h1>
            <ul className="flex flex-col items-center mt-2" id="projects">
                <li className="hover:scale-[1.05] text-xl"><Link href="https://sunori.org" target="_blank">Sunori</Link></li>
                <li className="hover:scale-[1.05] text-xl"><Link href="https://embedium-app.github.io" target="_blank">Embedium</Link></li>
            </ul>
        </main>
    );
}