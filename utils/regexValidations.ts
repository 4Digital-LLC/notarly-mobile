export const isUpperCase = (str: string) => /[A-Z]/.test(str);
export const isLowerCase = (str: string) => /[a-z]/.test(str);
export const hasNumber = (str: string) => /\d/.test(str);
export const containsSpecialChars = (str: string) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
};
export const isEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const isAlphabetical = (str: string) =>
  /^[^\u0600-\u06FF\d!#$%*()=\[\]{};:"\\|,<>\/?]+$/u.test(str);

export const isUrl = (str: string) =>
  str.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
