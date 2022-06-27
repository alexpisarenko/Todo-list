const today = new Date();

exports.getDate = () => {
  //   const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = () => {
  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
