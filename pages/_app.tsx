import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
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
      <Component {...pageProps} />
    </>
  );
}
