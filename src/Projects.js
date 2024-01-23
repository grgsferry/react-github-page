import "./fonts.css";
import myData from "./loop-files.json";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div class="flex justify-between">
        <p class="underline hover:font-bold hover:text-ds-green-2">
          <Link to="/" rel="noopener noreferrer">
            &lt; Back
          </Link>
        </p>
      </div>

      <hr class="h-px my-6 bg-gray-300 border-0 dark:bg-gray-300" />

      {myData.map((data) => (
        <Link to={data.link} target="_blank" rel="noopener noreferrer">
          <div class="container flex space-x-4 p-4 outline outline-[1px] outline-gray-300 rounded-sm my-4 hover:shadow-xl hover:outline-ds-green-2">
            <img class="min-w-52 max-w-60 min-h-12 max-h-36 object-cover" src={data.photo} alt={data.name} />
            <div class="flex-col space-y-1">
              <h2 class="font-bold text-md">{data.name}</h2>
              <div class="flex">
                {data.tags.map((dataTag) => (
                  <p class="text-xs bg-ds-green-2 text-white mr-1 px-2 py-0 rounded-full">{dataTag}</p>
                ))}
              </div>
              <p class="text-sm">{data.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Projects;
