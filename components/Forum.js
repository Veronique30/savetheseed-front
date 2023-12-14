import styles from "../styles/Forum.module.css";
import Link from 'next/link';


function Forum(){

    return(
        <div>
<div className={styles.back}>

<div className={styles.topContainer}>
        <div className={styles.title}>
            Forum
        </div>

    <div>
        <div className={styles.recherche}>
            Recherche
        </div>
        <input type="textbox" className={styles.textbox}></input>
    </div>

    <div className={styles.publier}>
        <Link href="/forum2"><span className={styles.pubbtn}>Publier</span></Link>
    </div>

<div className={styles.categories}>
    <div>
    Sujets
    </div>

    <div>
    Date de publi.
    </div>

    <div>
    Num de msg
    </div>
</div>

<div className={styles.bottom}>
    <div>
    Pourquoi mes graines ne poussent pas ?
    </div>
    <div>
        12/13/2023
    </div>
    <div>
        150 Messages
    </div>
</div>


<div className={styles.bottom}>
    <div>
    J''ai un petit problème dans ma plantati...
    </div>
    <div>
        12/12/2023
    </div>
    <div>
        149 Messages
    </div>
</div>


<div className={styles.bottom}>
    <div>
    Pourquoi mes graines ne poussent pas ?
    </div>
    <div>
        12/13/2023
    </div>
    <div>
        150 Messages
    </div>
</div>


<div className={styles.bottom}>
    <div>
    J''ai un petit problème dans ma plantati...
    </div>
    <div>
        12/11/2023
    </div>
    <div>
        148 Messages
    </div>
</div>


<div className={styles.bottom}>
    <div>
    Pourquoi mes graines ne poussent pas ?
    </div>
    <div>
        12/13/2023
    </div>
    <div>
        150 Messages
    </div>
</div>


<div className={styles.bottom}>
    <div>
    J''ai un petit problème dans ma plantati...
    </div>
    <div>
        12/12/2023
    </div>
    <div>
        149 Messages
    </div>
</div>


<div className={styles.bottom}>
    <div>
    Pourquoi mes graines ne poussent pas ?
    </div>
    <div>
        12/13/2023
    </div>
    <div>
        150 Messages
    </div>
</div>


<div className={styles.bottom}>
    <div>
    J''ai un petit problème dans ma plantati...
    </div>
    <div>
        12/12/2023
    </div>
    <div>
        149 Messages
    </div>
</div>


<div className={styles.nav}>
 <button type="submit" className={styles.btnn}>1</button>
 <button type="submit" className={styles.btnn}>2</button>
 <button type="submit" className={styles.btnn}>3</button>
 <button type="submit" className={styles.btnn}>...</button>
</div>




<div className={styles.foot}></div>

    </div>

    </div>
</div>
    )
}

export default Forum;