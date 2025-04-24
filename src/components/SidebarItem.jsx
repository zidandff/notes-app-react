export default function SidebarItem({ children }) {
  return (
    <li
      className="menu-item nav-link flex items-center gap-2 active p-4 cursor-pointer self-start leading-[0] "
      id="notes"
    >
      {children}
    </li>
  );
}
