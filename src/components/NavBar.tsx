import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-opacity-40');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = 50;

      if (scrollY > triggerHeight) {
        setNavbarBg('bg-opacity-90');
      } else {
        setNavbarBg('bg-opacity-40');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed z-10 w-full mx-auto bg-violet-100 ${navbarBg} border-gray-200 px-2 sm:px-4 py-3 rounded`}
      >
        <div className="max-w-[1080px] container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center flex-1">
            <span className="flex flex-row items-center self-center text-2xl font-semibold font-sans whitespace-nowrap text-[#9504ff] hover:text-[#a137df]">
              <Image
                src="https://github.com/vrajdesai78/Learning-GIT/assets/43074241/204a133d-2e6b-46ed-b1d8-191596f0223f"
                width="40"
                height="40"
                className="mr-2"
                alt="RouteXLogo"
              />
              RouteX
            </span>
          </Link>
          <div className="flex md:order-2" style={{ marginLeft: '2rem' }}>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="ml-2 md:ml-0 inline-flex items-center py-2 px-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineMenu size="20" />
            </button>
          </div>
          <div
            className={`${
              isOpenMenu ? 'block' : 'hidden'
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  href="/"
                  className={`${'text-gray-700'} block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0`}
                  aria-current="page"
                >
                  <b>Home</b>
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className={`${'text-gray-700'} block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0`}
                  aria-current="page"
                >
                  <b>Features</b>
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={`${'text-gray-700'} block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0`}
                  aria-current="page"
                >
                  <b>About</b>
                </Link>
              </li>
              <li>
                <Link
                  href="#flow"
                  className={`${'text-gray-700'} block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0`}
                  aria-current="page"
                >
                  <b>Flow</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
