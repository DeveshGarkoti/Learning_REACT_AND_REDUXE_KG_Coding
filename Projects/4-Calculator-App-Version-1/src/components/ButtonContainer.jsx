import Button from "./Button";
import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  return (
    <>
      <div className={styles.buttonContainers}>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </>
  );
};

export default ButtonContainer;
