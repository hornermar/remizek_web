import styles from '../../styles/Projects.module.css';
import { projectsList } from '../../data/projectsList';
import Link from 'next/link';

const ProjectsContent = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.containerProjects}>
        <h1>PROJEKTY</h1>
        {/* <p>
        Jsme otevřená audiovizuální platforma pro obnovu biodiverzity a
        rovnoprávnosti.
      </p> */}

        {projectsList.map((project) => {
          return (
            <div className={styles.project} key={project.id}>
              <div className={styles.projectNumber}>
                <p>{project.id}</p>
                <div></div>
              </div>
              <h3>{project.name.toUpperCase()}</h3>
              <p>{project.text}</p>

              <Link href={project.link} passHref>
                <button>Více</button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsContent;
