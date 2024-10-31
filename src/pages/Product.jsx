import React from 'react';
import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import useFetchFirebase from '../hooks/useFetchFirebase';
import Loading from '../components/Loading';
import Card from '../components/Card';

export default function Product() {
  const { id } = useParams();
  const { data, loading, error } = useFetchFirebase('Produtos', id);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loadingAnimation}><Loading /></div>
      ) : data?.length === 0 ? (
        <p>O produto foi removido ou ocorreu algum outro erro</p>
      ) : (
        data?.map((produto) => (
          <div className={styles.contentContainer} key={produto.id}>
            <div className={styles.image}>
              <img src={produto.imgURL} alt="imagem do produto" />
            </div>
            <div className={styles.info}>
              <div className={styles.texts}>
                <h1>{produto.name}</h1>
                <p>R$ {produto.price}</p>
              </div>
              <div className={styles.btn}>
                <button>
                  Adicionar ao carrinho
                </button>
              </div>
              <div className={styles.description}>
                {produto.description}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
