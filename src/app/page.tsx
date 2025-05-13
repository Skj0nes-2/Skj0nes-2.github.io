import Link from "next/link";
import { SiNextdotjs, SiReact, SiTypescript, SiHtml5, SiJavascript, SiCss3, SiPython } from 'react-icons/si';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-screen">
      <p>Hello, I'm a nerdy web dev, that adores dogs.</p>
      <Link href="/projects" className="hover:scale-[1.01]">Check out what I'm working on!</Link>
      <ul className="mt-10">
        <h2>Languages I Know:</h2>
        <li className="flex flex-row"><SiHtml5 className="text-orange-500 mr-2"/>HTML</li>
        <li className="flex flex-row"><SiCss3 className="text-blue-500 mr-2"/>CSS</li>
        <li className="flex flex-row"><SiJavascript className="text-yellow-400 mr-2"/>Javascript</li>
        <li className="flex flex-row"><SiTypescript className="text-blue-500 mr-2"/>Typescript</li>
        <li className="flex flex-row"><SiNextdotjs className="text-black dark:text-white mr-2"/>Next.js</li>
        <li className="flex flex-row"><SiReact className="text-blue-600 mr-2"/>React</li>
        <li className="flex flex-row"><SiPython className="text-green-600 mr-2"/>Python</li>
  
      </ul>
      <embed className="mt-10" src="https://github-readme-stats.vercel.app/api?username=skj0nes-2&show_icons=true&theme=dark"/>
    </main>
  );
}
