import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <h2 className={styles.aboutTitle}>About me</h2>
      <p className={styles.aboutText}>
        Hello, my name is Jozef Gensor. I am 32 years old and i come from
        Hrustin. My hobbies are cycling and darts. In my free time i like to
        learn web technologies. My skills include Javascript, React, Next,
        Typescript, Node, Express, MongoDB and Git. I am ready for a new job as
        a frontend or backend or fullstack developer.
      </p>
    </div>
  );
};

export default About;
