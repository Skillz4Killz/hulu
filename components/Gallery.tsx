import Image from "next/image";
import { Results } from "../pages";
import { ThumbUpIcon } from "@heroicons/react/outline";

type Props = {
  results: Results[];
};

function Gallery({ results }: Props) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <div
          key={result.id}
          className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            layout="responsive"
            height={1080}
            width={1920}
          />

          <div className="p-2">
            <p className="truncate max-w-md">{result.overview}</p>
            <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
              {result.title || result.original_title || "Unknown"}
            </h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">
              {result.media_type && `${result.media_type} •`}{" "}
              {result.release_date || result.first_air_date} •{" "}
              <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count || 0}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
