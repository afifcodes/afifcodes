import { IconBrandGithub, IconBrandDribbble } from "@tabler/icons";
import Link from "next/link";

interface FlutterCardInterface {
  title: string;
  youtube_link: string;
  github_link: string;
  dribbble_link?: string;
}

export default function FlutterCard({
  title,
  youtube_link,
  github_link,
  dribbble_link,
}: FlutterCardInterface) {
  return (
    <div className="bg-neutral-800 rounded-md">
      <div className="flex items-center py-2 px-3 gap-2">
        <div className="w-3 h-3 rounded-full cursor-pointer transition-all bg-neutral-700 hover:bg-red-500" />
        <div className="w-3 h-3 rounded-full cursor-pointer transition-all bg-neutral-700 hover:bg-yellow-500" />
        <div className="w-3 h-3 rounded-full cursor-pointer transition-all bg-neutral-700 hover:bg-green-500" />
      </div>
      <iframe
        src={youtube_link}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full aspect-square"
      ></iframe>
      <div className="p-4">
        <p className="mb-2">{title}</p>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={github_link}
            target="_blank"
            className="flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-all text-white bg-neutral-700 hover:bg-blue-600"
          >
            <IconBrandGithub className="w-4 h-4 mb-0.5" />
            <span>Github</span>
          </Link>
          {dribbble_link && (
            <Link
              href={dribbble_link}
              target="_blank"
              className="flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-all text-white bg-neutral-700 hover:bg-pink-600"
            >
              <IconBrandDribbble className="w-4 h-4 mb-0.5" />
              <span>Dribbble</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
