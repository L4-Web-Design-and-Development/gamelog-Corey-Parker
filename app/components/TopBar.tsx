import logo from "app\\assets\\svg\\logo-full.svg";
import { Link } from "@remix-run/react";

// uses absolute values
export default function TopBar() {
  return (
    <div className="col-span-3 w-full pt-5 flex items-center justify-between  ">
      <div>
        <img src={logo} alt=""></img>
      </div>
      <div className="flex flex-row-reverse gap-4 space-x-3">
        <Link to={`/Games`}>
          <button
            type="submit"
            className="text-white-300  transition hover:bg-red-50/10  w-full"
          >
            Games
          </button>
        </Link>
        <Link to={`/About`}>
          <button
            type="submit"
            className="text-white-300  transition hover:bg-red-50/10  w-full"
          >
            About
          </button>
        </Link>
        <Link to={`/Blog`}>
          <button
            type="submit"
            className="text-white-300  transition hover:bg-red-50/10  w-full"
          >
            Blog
          </button>
        </Link>
      </div>
    </div>
  );
}
