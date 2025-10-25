
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import styles from "./Glame.module.css";

import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

    


const members = [
  
  {
    name: "Marty",
    photo: "/images/Marty3.jpg",
    instagram: "https://www.instagram.com/marturosa_?igsh=OTY2cW1qdjh1Z3gy",
    twitter: "https://x.com/MartinaHelenaR1?t=IY0J6STpCTbpXliFJFs8cw&s=09",
    tiktok: "https://www.tiktok.com/@marturosa_?_t=ZS-8xCxbtgnz4i&_r=1",
    color: "#7BB4E3",
  },

  {
    name: "GLAME",
    photo: "/images/logo.jpeg",
    instagram: "https://www.instagram.com/itsglame?igsh=MXRrOWV5bGp4a2tmaA==",
    twitter: "https://x.com/itsglame?t=tKmgi6885sJPy4aIUN5KEg&s=09",
    tiktok: "https://www.tiktok.com/@itsglame?_t=ZM-8wpIPeIVwJS&_r=1",
    youtube:"https://youtube.com/@itsglame?si=i8ACY6PTbxdosOIm",
    color: "",
  },  {
    name: "Leivit",
    photo: "/images/lei.jpg",
    instagram: "https://www.instagram.com/leivitmusic/",
    color: "#F0B9D7",
  },
  {
    name: "Maca",
    photo: "/images/maca.jpg",
    instagram: "https://www.instagram.com/macaacsta?igsh=MXkwdzR0MWxpcjg5cg==",
    twitter: "https://x.com/grynn33?t=H6Y56RY1QeOmr1gksDFj5A&s=09",
    tiktok: "https://www.tiktok.com/@grynn33?_t=ZM-901kXmjbdts&_r=1",
    youtube: "https://youtube.com/@grynn33?si=w2oewuXkjuqGExCd",
    color: "#588157",
  },
  {
    name: "Nai",
    photo: "/images/nai.jpg",
    instagram: "https://www.instagram.com/naii.kill?igsh=MW04bm13eDE5YXRucA==",
    tiktok: "https://www.tiktok.com/@naaa_nai?_t=ZM-900WB1P3U1z&_r=1",
    color: "#9a7cc1",
  },
  {
    name: "Lola",
    photo: "/images/lola.jpg",
    instagram:
      "https://www.instagram.com/lolacetraro?igsh=cHhidTMzMTlmMTFz&utm_source=qr",
    tiktok: "https://www.tiktok.com/@loluxita?_t=ZS-8xtoVoOOXQ5&_r=1",
    youtube: "https://youtube.com/@lolacetraro?si=sUgouUvYjY1Zvo3O",
    color: "#ed54b3",
  },
];

const Glame = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleBackground = () => {
    setDarkMode(!darkMode);
  };

  return (
     <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      <button onClick={toggleBackground} className={styles.toggleBtn}>
        {darkMode ? <StarIcon /> : <StarBorderIcon />}
      </button>

      <h1 className={styles.title}>GLAME</h1>
      <div className={styles.members}>
       {members.map((member, index) => (
  <div
    key={index}
    className={`${styles.card} ${member.name === "GLAME" ? styles.glameGlow : ""}`}
    style={member.name === "GLAME" ? { "--glow-color": member.color } : {}}
  >
    <div
      className={styles.photoContainer}
      style={{ boxShadow: `0 0 20px ${member.color}` }}
    >
      <img
        src={member.photo}
        alt={member.name}
        className={styles.photo}
      />
    </div>
    <h2 className={styles.name}>{member.name}</h2>
    <div className={styles.socials}>
      {member.instagram && (
        <a href={member.instagram} target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      )}
      {member.twitter && (
        <a href={member.twitter} target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      )}
      {member.tiktok && (
        <a href={member.tiktok} target="_blank" rel="noreferrer">
          <FaTiktok />
        </a>
      )}
      {member.youtube && (
        <a href={member.youtube} target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
      )}
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default Glame;