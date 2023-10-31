import Link from "next/link";

const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Projects",
    link: "#projects",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  return (
    <div className="h-16 w-full border-b border-zinc-300 px-6 flex items-center justify-between">
      <h1 className="font-rock-salt text-lg">neeraj</h1>
      <ul className="flex items-center gap-6">
        {navLinks.map((item) => {
          return (
            <li key={item.link}>
              <Link
                href={item.link}
                className="text-sm uppercase text-zinc-300 hover:text-white font-semibold"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
