import Image from "next/image";
import LinkIcon from "../public/icons/live.svg";
import GithubIcon from "../public/icons/github.svg";
import LinkedinIcon from "../public/icons/linkedin.svg";
import Link from "next/link";
import { cn } from "@/helpers/tailwind-utils";

type IconButtonProps = {
  icon: "github" | "linkedin" | "live";
  link: string;
  size?: "sm" | "md";
  className?: string;
  showText?: boolean;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  link,
  size = "sm",
  className,
  showText = true,
}) => {
  const s = size === "sm" ? 48 : 56;

  const getIconUrl = (): string => {
    if (icon === "github") {
      return GithubIcon;
    } else if (icon === "linkedin") {
      return LinkedinIcon;
    } else {
      return LinkIcon;
    }
  };

  return (
    <button
      className={cn(
        `flex flex-col items-center group cursor-pointer text-zinc-300 group-hover:text-white font-medium`,
        className
      )}
    >
      <Link href={link} target="_blank">
        <Image
          width={s}
          height={s}
          src={getIconUrl()}
          alt="Github Logo"
          className="group-hover:scale-110 group-hover:translate-y-1 transition duration-500"
        />
        {showText && <span className="capitalize text-sm">{icon}</span>}
      </Link>
    </button>
  );
};

export default IconButton;
