import Menu from "./menu";

const Navbar = () => {
  return (
    <nav className="fixed inset-0 h-16 lg:h-24">
      <div className="relative flex justify-between items-center h-full w-11/12 lg:w-10/12 max-w-[140rem] mx-auto">
        <p className="font-semibold text-xl">Joshel</p>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
