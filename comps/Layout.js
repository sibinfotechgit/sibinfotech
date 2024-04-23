import Header from "../comps/Header";
import Footer from "../comps/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <div className="cursor"></div>
        <div className="cursor"></div>
          <Header/>
          { children }
          <Footer/>
      </div>

      <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      <script defer src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script defer src="/assets/js/custom.js"></script>

    </>
  );
}

export default Layout;
