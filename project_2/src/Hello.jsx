const Hello = () => {
  let myname = "Devesh";
  let fullName = () => {
    return `Hello ${myname}`;
  };

  return (
    <>
      <h1>{fullName()}</h1>
    </>
  );
};

export default Hello;
