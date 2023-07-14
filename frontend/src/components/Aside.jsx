import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faListCheck,
  faHome,
  faUser,
  faRightToBracket
} from "@fortawesome/free-solid-svg-icons";
const navbar = [
  { display: "Dashboard", path: "/admin", icon: faHome },
  { display: "Category", path: "/admin/category", icon: faListCheck },
  { display: "Product", path: "/admin/product", icon: faUser },
];
function Aside() {
  return (
    <aside className=" fixed top-0 left-0 z-40 transition-transform -translate-x-full sm:translate-x-0 bg-[#1e2137] h-screen py-6 pr-10 w-64 border-r border-gray-200 overflow-y-auto overflow-x-hidden ">
      <div className="border-white gap-x-3 bg-white w-full ml-2 rounded-lg p-3 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search ..."
          className="focus:outline-0 w-4/5"
        />
      </div>
      <ul className="flex flex-col gap-y-6 pt-10">
        {navbar.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex py-2 gap-x-4 items-start text-gray-500 hover:text-indigo-600 group"
            >
              <span className="w-1.5 h-8 rounder-r-full left-0 scale-y-0 bg-indigo-600 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0"></span>
              <span>{<FontAwesomeIcon icon={item.icon}/>}</span>
              <span>{item.display}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="flex py-2 gap-x-4 items-start text-gray-500 hover:text-indigo-600 group"
        to={"/auth/login"}
      >
        <span className="w-1.5 h-8 rounder-r-full left-0 scale-y-0 bg-indigo-600 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0"></span>
        <span>{<FontAwesomeIcon icon={faRightToBracket}/>}</span>
        <span> LogOut</span>
      </Link>
    </aside>
  );
}

export default Aside;
