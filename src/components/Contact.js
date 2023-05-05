import styles from "@/styles/Contact.module.css";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <h2 className={styles.contactTitle}>Contact me</h2>

      <div className={styles.contactContainers}>
        <div className={styles.contactContainer}>
          <Image
            src="/static/icons/phone.svg"
            alt="phone"
            width={32}
            height={32}
            className={styles.contactSvg}
          />
          <h4>+421 907 584 505</h4>
        </div>
        <div className={styles.contactContainer}>
          <Image
            src="/static/icons/mail.svg"
            alt="mail"
            width={32}
            height={32}
            className={styles.contactSvg}
          />
          <h4>gensor1234@gmail.com</h4>
        </div>
        <Link
          href="https://www.linkedin.com/in/jozef-gen%C5%A1or-217777261/"
          className={styles.contactContainer}
        >
          <Image
            src="/static/icons/linkedin.svg"
            alt="linkedin"
            width={32}
            height={32}
            className={styles.contactSvg}
          />
          <h4>Linkedin profile</h4>
        </Link>
        <Link
          href="https://www.facebook.com/jojo.gensor"
          className={styles.contactContainer}
        >
          <Image
            src="/static/icons/facebook.svg"
            alt="facebook"
            width={32}
            height={32}
            className={styles.contactSvg}
          />
          <h4>Facebook profile</h4>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
