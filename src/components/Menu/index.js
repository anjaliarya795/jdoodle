import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './index.module.css'

import { faPencil, faEraser, faRotateRight, faRotateLeft, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";


const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.iconWrapper} >
                <FontAwesomeIcon icon={faPencil} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper} >
                <FontAwesomeIcon icon={faEraser} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon}/>
            </div>
        </div>
    )
}
export default Menu;
