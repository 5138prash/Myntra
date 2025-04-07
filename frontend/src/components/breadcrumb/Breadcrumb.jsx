import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  // Get the current location from React Router
  const location = useLocation();
  
  // Split pathname into an array, filtering out empty values
  const pathnames = location.pathname.split("/").filter((x) => x);
  
  return (
    <nav className="text-sm text-gray-500 pt-2 px-8 text-[15px]">
      {/* Breadcrumb Navigation */}
      <ul className="flex">
        {/* Home link */}
        <li>
          <Link to="/" className="text-gray/400">
            Home
          </Link>
        </li>
        
        {/* Dynamic breadcrumb links */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center capitalize">
              <span className="mx-2">/</span>
              {isLast ? (
                // Last breadcrumb item should not be a link
                <span className="text-zinc-800 font-bold">
                  {decodeURIComponent(value)}
                </span>
              ) : (
                // Intermediate breadcrumb items should be links
                <Link to={to} className="text-gray-400">
                  {decodeURIComponent(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      
      {/* Section displaying the last breadcrumb as a title */}
      <div className="items-numbers">
        <h1 className="capitalize">
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            return (
              <div className="pt-3 flex" key={index}>
                <h1 className="text-[16px] gap-2 flex">
                  {/* Display last breadcrumb as a bold section title */}
                  <span className="font-bold text-zinc-900">
                    {decodeURIComponent(value)} :
                  </span>
                </h1>
              </div>
            );
          })}
        </h1>
      </div>
    </nav>
  );
};

export default Breadcrumb;
