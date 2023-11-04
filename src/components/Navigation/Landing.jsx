import AboutMe from "../Aboutme";
import ContactInfo from "../ContactInfo";

export function Landing() {
  return (
    <div className="landing">
      <main>
        <section>
          <h2>About Me</h2>
          <AboutMe />
        </section>
        <section>
          <h2>Contact Information</h2>
          <ContactInfo/>
        </section>
        
      </main>
    </div>
  );
}

export default Landing;
