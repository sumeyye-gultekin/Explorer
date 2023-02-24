import styles from "./Find.module.css";

export const Card = ({ image, make }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="/" />
      <p>{make}</p>
    </div>
  );
};
