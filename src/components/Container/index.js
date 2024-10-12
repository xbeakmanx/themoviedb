import Aside from './Aside';
import LeftMenu from './LeftMenu';

function Container({ children }) {
  return (
    <div className="font-montserrat text-sm bg-black dark:bg-zinc-900 ">
      <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
        <LeftMenu />

        <div className=" flex-1 py-10  px-5 sm:px-10 ">
          <header className=" font-bold text-lg flex items-center  gap-x-3 md:hidden mb-12 ">
            <span className="mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-700 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </span>
          </header>

          {children}
        </div>

        <Aside />
      </div>
    </div>
  );
}

export default Container;
