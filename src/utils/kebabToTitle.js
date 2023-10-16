export const kebabToTitle = (kebabCase) => {
  const words = kebabCase.split("-");
  const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  const standardCase = [firstWord, ...words.slice(1)].join(" ");

  return standardCase;
};
