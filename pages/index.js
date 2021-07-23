import BlogContent from '../components/BlogContent';
import ContactContent from '../components/ContactContent';
import ExperienceContent from '../components/ExperienceContent';
import HeaderID from '../components/HeaderID';
import PhilosophyContent from '../components/PhilosophyContent';
import ProjectsContent from '../components/ProjectsContent';
import RentalContent from '../components/RentalContent';
import TeamContent from '../components/TeamContent';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <HeaderID />
      <div className="container_page">
        <p>
          My jsme remízek - bezpečné útočiště pro podporu biodiverzity a
          rovnoprávnosti
        </p>
        <p>
          To, co v remízku tvoříme, nám dává hluboký smysl. Není to pro nás
          práce, je to pro nás láska. Naše motivace vychází z přirozené morálky
          a přesvědčení, že každý z nás má sílu změnit nepráví, které nás
          obklopuje.
        </p>
        <p>Zalij remízek na darujme - fungujeme jen díky lidem, jako vy.</p>
      </div>
      <div className="container_page" id="projekty">
        <ProjectsContent />
      </div>
      <div className="container_page" id="kolektiv-umelcu">
        <TeamContent />
      </div>
      <div className="container_page" id="filosofie-spolku">
        <PhilosophyContent />
      </div>
      <div className="container_page" id="zazij-remizek">
        <ExperienceContent />
      </div>
      <div className="container_page" id="kontakt">
        <ContactContent />
      </div>
      <div id="blog">
        <BlogContent />
      </div>
      <div className="container_page" id="rental">
        <RentalContent />
      </div>
    </div>
  );
}
