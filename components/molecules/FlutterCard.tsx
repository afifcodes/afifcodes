import { IconBrandGithub, IconBrandDribbble } from "@tabler/icons";
import Link from "next/link";

interface FlutterCardInterface {
  title: string;
  youtube_link: string;
  github_link: string;
}

export default function FlutterCard({
  title,
  youtube_link,
  github_link,
}: FlutterCardInterface) {
  const slug = title.split(" - ")[1].toLowerCase().split(" ").join("-");
  return (
    <div id={slug} className="bg-neutral-800 rounded-2xl">
      <iframe
        src={youtube_link}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-t-2xl w-full aspect-[5/3]"
      ></iframe>
      <div className="p-4">
        <h2 className="mb-2">{title}</h2>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Link
            href={github_link}
            target="_blank"
            className="flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-all text-white bg-neutral-700 hover:bg-blue-600"
          >
            <IconBrandGithub className="w-4 h-4 mb-0.5" />
            <span>Github</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
