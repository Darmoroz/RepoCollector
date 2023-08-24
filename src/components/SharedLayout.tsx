import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function SharedLayout() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center h-[70px] px-5 shadow-md bg-gray-500 text-white">
          <h2 className="font-bold text-amber-500 uppercase">Search Repo</h2>
          <ul className="flex text-lg font-bold">
            <li className="mr-5 p-4">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/favorite">Favorite</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
export default SharedLayout;
