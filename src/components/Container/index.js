import Aside from './Aside';
import Bottom from './bottom';
import LeftMenu from './LeftMenu';

function Container({ children }) {
  return (
    <>
      <div className="font-montserrat text-sm bg-gray-100 dark:bg-zinc-900 ">
        <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
          <LeftMenu />

          <div className=" flex-1 py-10  px-5 sm:px-10 ">{children}</div>

          <Aside />
        </div>
      </div>
      <Bottom />
    </>
  );
}

export default Container;
