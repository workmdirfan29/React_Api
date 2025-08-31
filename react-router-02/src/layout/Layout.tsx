import { Outlet, useLocation } from "react-router";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  const location = useLocation();

  const isServicePage = location.pathname === "/service";
  const isAbout = location.pathname === "/about";

  return (
    <section>
      {!isServicePage ? <Navbar /> : ""}
      <main>
        <Outlet />
      </main>
      {isAbout ? "" : <Footer />}
    </section>
  );
};

export default Layout;
