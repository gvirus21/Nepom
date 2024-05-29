import Menu from "./menu";

const Navbar = () => {
  return (
    <nav className="fixed inset-0 h-24">
      <div className="flex justify-between items-center h-full w-10/12 xl:w-full max-w-[140rem] mx-auto">
        <p className="font-semibold text-xl">Joshel</p>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
