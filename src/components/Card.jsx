import React, { useState } from 'react'
import example from '../assets/example.jpg'
import styles from './Card.module.css'
export default function Card({img,title, price, category}) {
    const [imageURL] = useState(img)
    const [ProdTitle] = useState(title)
    const [prodPrice] = useState(price)
    const [prodCategory] = useState(category)
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={imageURL} alt="imagem do produto" />
            </div>

            <div className={styles.textContainer}>
                <div className={styles.nameAndCategory}>
                    <strong className={styles.title}>{ ProdTitle.length > 8 ? ProdTitle.slice(0, 8) + '...' : ProdTitle}</strong>
                    <p className={styles.category}>{category}</p>
                </div>
                <p className={styles.price}>
                    R$ {parseFloat(prodPrice).toFixed(2)}
                </p>
            </div>

        </div>
    )
}
