import Link from "next/link";
import Image from "next/image";

export function Header(){
    return(
        <header className="flex justify-center p-3 border-b-1 border-black dark:border-white mb-2">
            <Link href="/" className="flex flex-row hover:scale-[1.01]">
                <Image className="mr-2" alt="Site Icon" width={40} height={40} src="/profile.png"/>
                <h1 className="font-header text-5xl">Skj0nes-2</h1>
            </Link>
            <ul className="flex absolute right-0 top-[4.5vh]" id="nav">
                <li className="mx-2 text-xl hover:scale-[1.05]"><Link href="/">Home</Link></li>
                <li className="mx-2 text-xl hover:scale-[1.05]"><Link href="/projects">Projects</Link></li>
                <li className="mx-2 text-xl hover:scale-[1.05]"><Link href="https://github.com/Skj0nes-2" target="_blank">Github</Link></li>
            </ul>
        </header>
    );
}
export function Footer(){
    return(
        <footer className="flex justify-left pl-2 w-screen bottom-0 fixed">
            <p>Made by SKj0nes-2.</p>
        </footer>
    );
}