import styles from "@/app/components/stars/page.module.scss"
import { GiPalmTree } from "react-icons/gi";

export default function Page() {
 return (

    <div className={styles.root}>
    <div className={styles.body}>
        <div className={styles.camping}>
            <div className={styles.sky}>
                <div className={styles.moon}></div>
                <div className={`${styles.star} ${styles['star--part-fill']}`}></div>
                <div className={`${styles.star} ${styles['star--full-fill']}`}></div>
                <div className={`${styles.star} ${styles['star--1']}`}></div>
                <div className={`${styles.star} ${styles['star--2']}`}></div>
                <div className={`${styles.star} ${styles['star--3']}`}></div>
                <div className={`${styles.star} ${styles['star--4']}`}></div>
                <div className={`${styles.star} ${styles['star--5']}`}></div>
            </div>
         

            <div className={styles.forest}>
                <div  className={`${styles.star} ${styles['spruce--1']}`} > </div>
                <div className={styles['spruce__mid']}></div>
                <div className={styles['spruce__top']}></div>
                </div>
                        </div>
                     


<div className="tree">
<GiPalmTree/>
hello

</div>





    </div>
    </div>
 );
}
