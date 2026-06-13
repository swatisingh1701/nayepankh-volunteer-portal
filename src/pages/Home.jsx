import Navbar from "../components/Navbar";
import VolunteerForm from "../components/VolunteerForm";

function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="home-container">
        <div className="hero-section">
          <h1>
            NayePankh Foundation
          </h1>

          <p>
            Empowering communities through volunteering,
            education, and social impact initiatives.
          </p>
        </div>

        <VolunteerForm />
      </div>
    </>
  );
}

export default Home;
