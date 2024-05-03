
import NavbarItems from './NavbarItems';

function Navbar() {
  return (

    <nav className="flex flex-col sm:flex-row justify-between items-center w-full md:max-w-[70vw] m-auto h-16 px-4 md:px-0 mt-4 sm:mt-0">
      <NavbarItems />
    </nav>

  );
}

export default Navbar;
 