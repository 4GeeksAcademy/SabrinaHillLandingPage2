import AboutMe from "../Aboutme";
import ContactInfo from "../ContactInfo";
import Footer from "../Footer";

export function Landing() {
  return (
    
    <div className="landing">
     <main>
     <h1>Welcome to My Landing Page</h1>
        <section>
          <h2>About Me</h2>
          <AboutMe />
        </section>
        <section>
          <h2>Contact Information</h2>
          <ContactInfo/>
        </section>
       <section>
          <Footer/>
        </section>
      </main>
    </div>
  );
}

export default Landing