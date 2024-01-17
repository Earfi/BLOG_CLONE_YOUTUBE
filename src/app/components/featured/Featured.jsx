import React from "react";
import styles from './Featured.module.css'
import Image from "next/image";

const Featured = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Lorem ipsum dolor sit.</b> Lorem ipsum dolor sit amet consectetur.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quisquam.</h1>
                    <p className={styles.postDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto excepturi recusandae repudiandae fugiat, similique aspernatur? Atque natus sed suscipit neque dolorem magni fuga voluptate molestias vel. Quos porro, nemo rerum illum error corporis inventore et aperiam repudiandae exercitationem adipisci dignissimos.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;