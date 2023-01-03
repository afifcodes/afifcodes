import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FlutterCard from "../components/molecules/FlutterCard";

const Flutter: NextPage = () => {
  return (
    <div className="font-circular bg-neutral-900 text-white">
      <Head>
        <title>Flutter UI Challenge</title>
      </Head>
      <div className="min-h-screen min-w-screen max-w-screen">
        <div className="max-w-7xl mx-auto p-2">
          <div className="py-24">
            <div className="relative w-48 h-48 mx-auto mb-12">
              <Image
                src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"
                alt="flutter"
                fill
              />
            </div>
            <h1 className="text-3xl sm:text-7xl text-center">
              Flutter UI Challenge
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-8">
            <FlutterCard
              title="Fashion ECommerce"
              youtube_link="https://www.youtube.com/embed/v5UTlAf6_mU"
              github_link="https://github.com/afifudinx/flutter-fashion-ecommerce"
              dribbble_link="https://dribbble.com/shots/20257137-Fashion-Ecommerce-Application"
            />
            <FlutterCard
              title="Spotify"
              youtube_link="https://www.youtube.com/embed/PT8PfXvOuxg"
              github_link="https://github.com/afifudinx/flutter-spotify"
            />
            <FlutterCard
              title="Album View"
              youtube_link="https://www.youtube.com/embed/0dhRQOlhY-U"
              github_link="https://github.com/afifudinx/flutter-album-view"
              dribbble_link="https://dribbble.com/shots/17461178-Album-View"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flutter;
