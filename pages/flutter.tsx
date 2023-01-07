import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import FlutterCard from "../components/molecules/FlutterCard";

const Flutter: NextPage = () => {
  const examples = [
    {
      title: "Flutter UI - Rating App",
      youtube_link: "https://www.youtube.com/embed/D6mXQFjSYtk",
      github_link: "https://github.com/afifudinx/flutter-rating-app",
    },
    {
      title: "Flutter UI - Dark Mode Lamp",
      youtube_link: "https://www.youtube.com/embed/sW5-U8oNcoM",
      github_link: "https://github.com/afifudinx/flutter-dark-mode-lamp",
    },
    {
      title: "Flutter UI - Job Landing",
      youtube_link: "https://www.youtube.com/embed/rPXYkcQCQXk",
      github_link: "https://github.com/afifudinx/flutter-job-landing",
    },
    {
      title: "Flutter UI - Fashion ECommerce Part 2",
      youtube_link: "https://www.youtube.com/embed/RhQ-nHy7MJs",
      github_link: "https://github.com/afifudinx/flutter-fashion-ecommerce",
      dribbble_link:
        "https://dribbble.com/shots/20257137-Fashion-Ecommerce-Application",
    },
    {
      title: "Flutter UI - Fashion ECommerce",
      youtube_link: "https://www.youtube.com/embed/v5UTlAf6_mU",
      github_link: "https://github.com/afifudinx/flutter-fashion-ecommerce",
      dribbble_link:
        "https://dribbble.com/shots/20257137-Fashion-Ecommerce-Application",
    },
    {
      title: "Flutter UI - Spotify",
      youtube_link: "https://www.youtube.com/embed/PT8PfXvOuxg",
      github_link: "https://github.com/afifudinx/flutter-spotify",
    },
    {
      title: "Flutter UI - Album View",
      youtube_link: "https://www.youtube.com/embed/0dhRQOlhY-U",
      github_link: "https://github.com/afifudinx/flutter-album-view",
      dribbble_link: "https://dribbble.com/shots/17461178-Album-View",
    },
  ];

  const [search, setSearch] = useState("");

  const doChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div className="font-circular bg-neutral-900 text-white">
      <Head>
        <title>Flutter UI Challenge</title>
      </Head>
      <div className="min-h-screen min-w-screen max-w-screen">
        <div className="max-w-6xl mx-auto p-4">
          <div className="p-8 text-center">
            <h1 className="text-xl sm:text-3xl font-bold">
              Flutter UI Challenge
            </h1>
            <p className="text-neutral-500 font-medium">
              A curated list of Flutter UI Example including Repository
            </p>
          </div>
          <div className="max-w-2xl mx-auto mb-8">
            <input
              type="text"
              value={search}
              onChange={doChangeSearch}
              className="rounded-xl border-2 border-neutral-800 focus:border-neutral-700 outline-none w-full p-4 bg-neutral-900 focus:bg-neutral-800 transition-all"
              placeholder="Search for title"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pb-8">
            {examples
              .filter((example) =>
                example.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((example) => {
                return (
                  <FlutterCard
                    key={example.title}
                    title={example.title}
                    youtube_link={example.youtube_link}
                    github_link={example.github_link}
                    dribbble_link={example.dribbble_link ?? ""}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flutter;
