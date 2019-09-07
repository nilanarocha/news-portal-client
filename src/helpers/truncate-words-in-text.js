export const returnMaxWordsInText = (text, maximumOfWords) => {
  const truncatedText = text
    .split(" ")
    .splice(0, maximumOfWords)
    .join(" ");

  return `${truncatedText} (...)`;
};
