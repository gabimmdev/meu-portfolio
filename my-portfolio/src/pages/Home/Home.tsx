import NavBar from "../../components/NavBar/NavBar"
import Hero from "./sections/Hero/Hero"
import AboutSection from "./sections/About/About"
import ProjectsSection from "./sections/Projects/Projects"
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return (
      <>
      <NavBar/>
      <Hero />
      <AboutSection/>
      <ProjectsSection/>
      <Footer/>
      </>
    )
  }
  
  export default Home