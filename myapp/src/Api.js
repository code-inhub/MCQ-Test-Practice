import axios from "axios";

const baseURL = "http://localhost:8000";

const getData = ({ setData }) => {
  axios
    .get({ baseURL })
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((err) => console.log(err));
};
const deleteData = ({ _id, setData }) => {
  axios
    .post(`${baseURL}/delete`, { _id })
    .then(() => {
      console.log("data deleted");
      getData(setData);
    })
    .catch((err) => console.log(err));
};

const updataData = ({ setData }) => {
  axios
    .post(`${baseURL}/update`)
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((err) => console.log(err));
};
const addData = ({ Bdata, setData }) => {
  axios
    .post(`${baseURL}/add`, {Bdata})
    .then((res) => {
      console.log(res);
      console.log({Bdata});
      getData(setData);
    })
    .catch((err) => console.log(err));
};
  
export { addData, updataData, deleteData, getData };
