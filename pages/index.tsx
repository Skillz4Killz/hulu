import Head from "next/head";
import { GetServerSideProps } from "next";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Nav from "../components/Nav";
import request from "../utils/request";

type Props = {
  results: Results[];
};

export interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: unknown[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type?: string;
  first_air_date?: string;
}

export default function Home(props: Props) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Gallery results={props.results} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre =
    typeof context.query.genre === "string"
      ? context.query.genre
      : context.query.genre?.[0] || "";

  // const data = await fetch(
  //   `https://api.themoviedb.org/3${
  //     request[genre]?.url || request.fetchTrending.url
  //   }`
  // )
  //   .then((res) => res.json())
  //   .catch(console.error);

  return {
    props: {
      // results: data?.results || [],
      results: [],
    },
  };
};
