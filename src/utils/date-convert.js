export const formatDate = (dateString) => {
  const dateObject = new Date(Date.parse(dateString));

  const options = {
    year: `numeric`,
    month: `long`,
    day: `numeric`
  };

  return dateObject.toLocaleDateString(`en-US`, options);
};
