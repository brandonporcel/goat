import HeaderLink from "./link";
import Logo from "./logo";
const navLinks = [
  {
    title: "Inventory",
    url: "/",
    id: "1",
  },
  {
    title: "Collections",
    url: "/collections",
    id: "2",
  },
  {
    title: "Archive",
    url: "/archive",
    id: "3",
  },
  {
    title: "Craftsmanship",
    url: "/craftsmanship",
    id: "4",
  },
  {
    title: "Philosophy",
    url: "/philosophy",
    id: "5",
  },
];
function Header() {
  return (
    <header className="top-0 left-0 fixed md:pb-desktop md:mb-desktop pb-mobile pt-mobile md:pt-desktop z-40 w-full px-5 md:px-7 text-base md:text-xl">
      <div className="flex justify-between relative">
        <Logo />
        <ol className="flex justify-between -mr-3 md:mr-0 absolute left-1/2 transform -translate-x-1/2 md:w-full w-40 md:max-w-md xl:max-w-2xl">
          {navLinks.map((link) => (
            <HeaderLink key={link.id} {...link} />
          ))}
        </ol>
      </div>
    </header>
  );
}

export default Header;
