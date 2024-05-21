import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header class="text-gray-600 body-font bg-slate-500">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={`/`}
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span class="ml-3 text-xl text-white font-bold">Todos-Crud</span>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={`/create`}
              class="mr-5 hover:text-gray-900 text-white cursor-pointer"
            >
              Create Todo
            </Link>
            <Link
              href={`/view`}
              class="mr-5 hover:text-gray-900 text-white cursor-pointer"
            >
              View Todos
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
