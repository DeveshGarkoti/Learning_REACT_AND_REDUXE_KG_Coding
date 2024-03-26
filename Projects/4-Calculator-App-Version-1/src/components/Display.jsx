import styles from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <>
      <input
      
        className={styles.display}
        placeholder={displayValue}
        type="text"
        readOnly
      />
    </>
  );
};

export default Display;
