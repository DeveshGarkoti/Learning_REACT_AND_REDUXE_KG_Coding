import Button from "./Button";
import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonContainers}>
        {buttons.map((button) => (
          <Button key={button} name={button} onButtonClick={onButtonClick} />
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
