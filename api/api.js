import axios from "axios";

export const getResult = async (domain, formData) => {
  console.log("dlain", domain);
  const res = await axios.post(domain, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  });
  return res;
};

const autodomain =
  "https://sidehustle007.pockethost.io/api/collections/users/auth-with-password";

export const getAuthResult = async (username, password) => {
  console.log("dlain", autodomain);
  const data = {
    identity: username,
    password: password,
  };
  const res = await axios.post(autodomain, data);
  return res;
};
const autodomaincreate =
  "https://sidehustle007.pockethost.io/api/collections/users/records";
export const createAccount = async (phone, fullname, password, cpassword) => {
  console.log("dlain", autodomaincreate);
  const data = {
    username: phone,
    fullname: fullname,
    password: password,
    passwordConfirm: cpassword,
  };
  const res = await axios.post(autodomaincreate, data);
  return res;
};
