import mobileLogo from "../assets/mobile-logo.svg";
import desktopLogo from "../assets/desktop-logo.svg";

export default function Header() {
  return (
    <header className="app-bar bg-gray-200 rounded-2xl flex justify-between items-center gap-2">
      <div className="brand-logo bg-gray-200 p-4 rounded-[50%] leading-[0]">
        <img className="mobile-logo md:hidden" src={mobileLogo} alt="" />
        <img className="desktop-logo" src={desktopLogo} alt="" />
      </div>
      <form className="search-bar flex-grow mr-4" id="search-form">
        <input
          className="search-input bg-gray-50 p-4 rounded-3xl w-full text-base leading-4"
          type="search"
          placeholder="Search Note..."
        />
      </form>
    </header>
  );
}
