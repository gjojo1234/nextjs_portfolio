import Image from "next/image";
import styles from "@/styles/Skills.module.css";

const Skills = ({ skills }) => {
  return (
    <section className={styles.skills} id="skills">
      <h1 className={styles.skillsTitle}>Skills</h1>
      <div className={styles.skillsContainers}>
        {skills &&
          skills.map((skill, index) => {
            const { name, imgUrl } = skill;
            return (
              <div className={styles.skill} key={index}>
                <Image src={imgUrl} width={96} height={96} alt={name} />
                <h3 className={styles.skillName}>{name}</h3>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
