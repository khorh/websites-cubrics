/**
 * Method to format the title to uppercase
 * @param title which is a string e.g. Purpose
 * @returns title which is changed to uppercase e.g. PURPOSE
 */

export const titleUppercase = (title: string) => {
  const changeTitle = title.toLocaleUpperCase();
  return changeTitle;
};
