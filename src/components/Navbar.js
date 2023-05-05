import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      id: "#home",
      name: "home",
    },
    {
      id: "#about",
      name: "about",
    },
    {
      id: "#projects",
      name: "projects",
    },
    {
      id: "#skills",
      name: "skills",
    },
    {
      id: "#contact",
      name: "contact",
    },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Image src="/logo.webp" width={16} height={16} alt="jg" />
        <div className={styles.navbarName}>gensor</div>
      </div>
      <div className={styles.navbarLinks}>
        <button className={styles.btn} onClick={toggleMenu}>
          <Image
            src="/static/icons/menu.svg"
            width={32}
            height={32}
            alt="menu"
          />
        </button>
        {menu && (
          <div className={styles.menu}>
            {links.map((link, index) => {
              const { id, name } = link;
              return (
                <Link href={id} className={styles.menuLink} key={index}>
                  {name}
                </Link>
              );
            })}
          </div>
        )}
        {links.map((link, index) => {
          const { id, name } = link;
          return (
            <Link href={id} className={styles.navbarLink} key={index}>
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
