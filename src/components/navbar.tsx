import Link from "next/link";
import { Button } from "./ui/button";
export default function Navbar() {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0">
        <nav
          className="relative max-w-[85rem] w-full mx-auto p-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-xl font-semibold"
              href="/"
              aria-label="Brand"
            >
              Gradient Picker
            </Link>
          </div>
        </nav>
      </header>

      <div className="flex p-4 justify-between items-center border-b border-gray-200 ">
        <div>color -{">"} color</div>

        <div>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500">
                Change Gradient
            </Button>
        </div>

        <div className="flex justify-between gap-x-2">
          <div>get css</div>
          <div>rotate gradient</div>
        </div>
      </div>
    </>
  );
}
