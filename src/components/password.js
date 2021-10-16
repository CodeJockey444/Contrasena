import passwordGenerator from "generate-password";

export const generateMyPassword = (len, isNumReq, isSymbolReq) => {
  let password = passwordGenerator.generate({
    length: len,
    numbers: isNumReq,
    symbols: isSymbolReq,
  });
  console.log(password)
  return password;
};
