import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full  flex justify-between px-5 py-3 bg-[#21266f]">
      <ul className="flex justify-between w-full items-center text-2xl font-bold text-slate-50">
        <li>ToDO</li>
        <Link
          href={"/addTask"}
          className="text-lg text-black bg-white px-5 py-3"
        >
          Add Task
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
