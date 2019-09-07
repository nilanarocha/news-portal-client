export const formatDate = text => {
  const formatedDate = text
    .split("-")
    .reverse()
    .join("/");

  return formatedDate;
};
