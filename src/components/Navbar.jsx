import Link from "next/link";
import AddJob from "./AddJob";


export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">Job app</div>
      <ul className="flex space-x-4">
        <div  className="text-white hover:text-gray-400">
          <AddJob/>
        </div>
        <Link href="/"  className="text-white hover:text-gray-400">
          About
        </Link>
        <Link href="/"  className="text-white hover:text-gray-400">
          Contact
        </Link>
      </ul>
    </nav>
  );
}
