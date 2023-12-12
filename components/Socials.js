import Link from "next/link";
import {
  RiLinkedinFill,
  RiInstagramFill,
  RiFacebookFill,
  RiGithubFill,
  RiTwitterXFill,
  RiDiscordFill
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/aakash-sharma-github"}
        target="__blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/aakash-sharma-918447178/"}
        target="__blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={"https://www.instagram.com/mr.sky__56/"}
        target="__blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramFill />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=100047117551153"}
        target="__blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookFill />
      </Link>
      <Link
        href={"https://twitter.com/mrsky5256"}
        target="__blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterXFill />
      </Link>
      <Link
        href={""}
        target="__blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiDiscordFill />
      </Link>
    </div>
  );
};

export default Socials;
