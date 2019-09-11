export const removeHtmlFromString = html => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";
  return text;
};

export const returnMaxWordsInText = (text, maximumOfWords) => {
  const textWithoutHtml = removeHtmlFromString(text);
  const truncatedText = textWithoutHtml
    .split(" ")
    .splice(0, maximumOfWords)
    .join(" ");

  return `${truncatedText} (...)`;
};
