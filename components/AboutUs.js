import styles from "../styles/About.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";


function AboutUs() {
    const [showWho, setShowWho] = useState(false);
    const [showWhy, setShowWhy] = useState(false);
    const [showHow, setShowHow] = useState(false);
    const [showPurpose, setShowPurpose] = useState(false);

    const handleClick = () => {
      console.log('Click')
      setShowWho(!showWho)
    }

    const handleClick2= () => {
      console.log('Click')
      setShowWhy(!showWhy)
    }

    const handleClick3= () => {
      console.log('Click')
      setShowHow(!showHow)
    }

    const handleClick4= () => {
      console.log('Click')
      setShowPurpose(!showPurpose)
    }


  return (
    <div>
      <main className={styles.main}>
        <h2 className={styles.title}>A PROPOS</h2>
        <div className={styles.about}>
          <h3 className={styles.questions} onClick={handleClick}>Qui ?</h3>
          {showWho && <p className={styles.answers}>Nous sommes une petite équipe de développeurs soucieux de l'environnement.</p>}
          <h3 className={styles.questions} onClick={handleClick2}>Pourquoi ?</h3>
          {showWhy && <p className={styles.answers}>Nous voulons rendre le monde meilleur en diminuant notre impact sur l'environnement.</p>}
          <h3 className={styles.questions} onClick={handleClick3}>Comment ?</h3>
          {showHow && <p className={styles.answers}>Replanter des arbres à partir de graines et noyaux que l'on trouve dans notre alimentation.</p>}
          <h3 className={styles.questions} onClick={handleClick4}>Notre but ?</h3>
          {showPurpose && <p className={styles.answers}>Améliorer la biodiversité de notre environnement et diminuer notre impact écologique</p>}
        </div>
        <div className={styles.socialNetworks}>
          <div className={styles.facebook}>
          <FontAwesomeIcon  icon={faFacebook} className={styles.icons}/>
          <p>Facebook</p>
          </div>
          <div className={styles.instagram}>
          <FontAwesomeIcon  icon={faInstagram} className={styles.icons}/>
          <p>Instagram</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;