import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="font-circular bg-neutral-900 text-white">
      <NextSeo
        title="Afifudin | Freelancer | Content Creator"
        description="I Build An App and Sharing My Thoughts | Available For Hire"
        canonical="https://afifudinx.vercel.app/"
        openGraph={{
          url: "https://afifudinx.vercel.app/",
          description:
            "I Build An App and Sharing My Thoughts | Available For Hire",
          siteName: "Afifudin | Freelancer | Content Creator",
          type: "website",
          locale: "id_ID",
        }}
      />
      <Head>
        <title>Afifudin | Freelancer | Content Creator</title>
      </Head>
      <div className="min-h-screen min-w-screen max-h-screen">
        <div className="max-w-4xl mx-auto min-h-screen flex flex-col items-start justify-center p-2">
          <p className="text-neutral-400">init</p>
          <div className="flex items-center justify-between gap-2 w-full">
            <div>
              <p className="text-6xl">Muhammad</p>
              <p className="text-6xl">Afifudin Abdullah</p>
            </div>
            <div className="h-36 w-36 relative border-4 border-blue-800 rounded-2xl">
              <Image
                src="https://avatars.githubusercontent.com/u/94339143?v=4"
                alt="pic"
                fill
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 w-full">
            <Link
              href="#"
              className="transition-all hover:bg-neutral-800 py-1 px-3 rounded text-sm"
            >
              Works
            </Link>
            <Link
              href="#"
              className="transition-all hover:bg-neutral-800 py-1 px-3 rounded text-sm"
            >
              Contents
            </Link>
            <Link
              href="#"
              className="transition-all hover:bg-neutral-800 py-1 px-3 rounded text-sm"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
