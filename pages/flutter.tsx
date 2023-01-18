import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useState } from "react";
import FlutterCard from "../components/molecules/FlutterCard";
const Flutter: NextPage = () => {
  const examples = [
    {
      title: "Flutter UI - Insta Like Button",
      youtube_link: "https://www.youtube.com/embed/w0ht4lsbYXw",
      github_link:
        "https://github.com/afifcodes/flutter-insta-like-button-example",
    },
    {
      title: "Flutter UI - Fade Animation",
      youtube_link: "https://www.youtube.com/embed/DoSa6E5ST1Q",
      github_link:
        "https://github.com/afifcodes/flutter-fade-animation-example",
    },
    {
      title: "Flutter UI - Instagram Search",
      youtube_link: "https://www.youtube.com/embed/5jSqwk_noDM",
      github_link: "https://github.com/afifcodes/flutter-instagram-search-ui",
    },
    {
      title: "Flutter UI - Rating App",
      youtube_link: "https://www.youtube.com/embed/D6mXQFjSYtk",
      github_link: "https://github.com/afifcodes/flutter-rating-app-ui",
    },
    {
      title: "Flutter UI - Select Image",
      youtube_link: "https://www.youtube.com/embed/l1irwebgm9k",
      github_link: "https://github.com/afifcodes/flutter-select-image-example",
    },
    {
      title: "Flutter UI - Onboarding",
      youtube_link: "https://www.youtube.com/embed/ZJ1pl-TImYE",
      github_link: "https://github.com/afifcodes/flutter-onboarding-ui",
    },
    {
      title: "Flutter UI - Draggable Image",
      youtube_link: "https://www.youtube.com/embed/ImyD5gclg7c",
      github_link:
        "https://github.com/afifcodes/flutter-draggable-image-example",
    },
    {
      title: "Flutter UI - Video Call",
      youtube_link: "https://www.youtube.com/embed/1dKSHYxuuKE",
      github_link: "https://github.com/afifcodes/flutter-video-call-ui",
    },
    {
      title: "Flutter UI - Simple Route Animation",
      youtube_link: "https://www.youtube.com/embed/UJM8XhvNu-k",
      github_link:
        "https://github.com/afifcodes/flutter-simple-route-animation-example",
    },
    {
      title: "Flutter UI - Hero Animation",
      youtube_link: "https://www.youtube.com/embed/1rOf4j8-Ma4",
      github_link:
        "https://github.com/afifcodes/flutter-hero-animation-example",
    },
  ];

  const [search, setSearch] = useState("");

  const doChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div className="font-circular bg-neutral-900 text-white">
      <NextSeo
        title="Flutter UI Challenge | Afifudin"
        description="A curated list of Flutter UI Example including Repository"
        canonical="https://afifcodes.vercel.app/flutter/"
        openGraph={{
          url: "https://afifcodes.vercel.app/flutter/",
          description:
            "A curated list of Flutter UI Example including Repository",
          siteName: "Flutter UI Challenge | Afifudin",
          type: "website",
          locale: "id_ID",
        }}
      />
      <Head>
        <title>Flutter UI Challenge | Afifudin</title>
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
