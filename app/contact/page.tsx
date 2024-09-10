"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import styles from "../components/style/Page.module.css";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/kellen-xavier/",
    label: "Linkedin",
    handle: "in/kellen-xavier",
  },

  {
    icon: <Mail size={20} />,
    href: "mailto:kellenxaviier@gmail.com",
    label: "Email",
    handle: "kellenxaviier@gmail.com",
  },

  {
    icon: <Github size={20} />,
    href: "https://github.com/kellen-xavier",
    label: "Github",
    handle: "kellen-xavier",
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className={styles.container}>
        <div className={styles.grid}>
          {socials.map((s) => (
            <Card key={s.label}>
              <Link href={s.href} target="_blank" className={styles.cardLink}>
                <span className={styles.verticalLine} aria-hidden="true" />
                <span className={styles.iconContainer}>{s.icon}</span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className={styles.handle}>{s.handle}</span>
                  <span className={styles.label}>{s.label}</span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
