const Date = () => {
  const date = new Date.now().toString();
  return (
    <>
      <h3 className="heading">This is the current time: {date} </h3>
    </>
  );
};

export default Date;
