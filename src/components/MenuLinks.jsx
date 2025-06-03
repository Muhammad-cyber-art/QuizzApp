import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";


function MenuLinks() {
  const { data, isPending, error } = useFetch("http://0.0.0.0:10000/quiz");
  console.log(data);
  return (
    <div className="pt-16">
      {isPending && <h1 className="text-white translate-y-40">Loading...</h1>}
      {error && <h2>{error}</h2>}
      {data && data.map((items) => {
          return (
               <Link key={items.title} to={`/quiz/${items.title}`}>
          <div className="menuLinks bg-white w-75 h-12 dark:bg-blue-950  rounded-sm flex items-center mt-3 hover:scale-110 duration-300 cursor-pointer active:scale-90 " > 
                    <img src={items.icon} className="w-5 ml-4"/>
                    <h1 className="text-xl ml-5 dark:text-white">{items.title}</h1>
          </div>
               </Link>
          )
      })}
    </div>
  );
}

export default MenuLinks;
