import styles from "@/styles/Banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={styles.banner} id="home">
      <article className={styles.bannerArticle}>
        <h1 className={styles.title}>Hello</h1>
        <h2 className={styles.subTitle}>I am Jozef,</h2>
        <h2 className={styles.subTitle}>a Web Developer</h2>
      </article>
      <Image src="/static/jozefGensor.webp" width={180} height={250} alt="jg" />
    </div>
  );
};

export default Banner;
