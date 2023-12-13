import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <>
      <header className="rounded-br-xl rounded-bl-lg sticky top-0 z-50 px-8">
        <div className="flex justify-between items-center py-2 h-100">
          <img
            src="../../public/img/shadowLogos.png"
            alt="logo image"
            className="h-100 me-2 heaven_drop_shadow"
          />
          <nav>
            <NavLink className="pe-4" to="/">
              Home
            </NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
