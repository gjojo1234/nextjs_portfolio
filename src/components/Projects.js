import Image from "next/image";
import styles from "@/styles/Projects.module.css";
import Link from "next/link";

const Projects = ({ projects, isLoading }) => {
  return (
    <div className={styles.projects} id="projects">
      <h2 className={styles.projectsTitle}>My projects</h2>
      {isLoading && <h2>Loading.....</h2>}
      {projects &&
        projects.map((project, index) => {
          const { name, used, imgUrl, projectUrl } = project;
          return (
            <div className={styles.projectsContainer} key={index}>
              <Image
                src={imgUrl}
                alt={name}
                width={240}
                height={200}
                className={styles.projectsImage}
              />
              <article className={styles.projectsArticle}>
                <h3 className={styles.projectsName}>#{name}</h3>
                <p>I am used: {used}</p>
                <Link href={projectUrl} className={styles.projectsLink}>
                  View project
                  <Image
                    src="/link.svg"
                    width={32}
                    height={32}
                    alt={`link to ${name}`}
                    className={styles.linkImageIcon}
                  />
                </Link>
              </article>
            </div>
          );
        })}
    </div>
  );
};

export default Projects;
