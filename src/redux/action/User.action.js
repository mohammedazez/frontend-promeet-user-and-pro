import axios from "axios";
import Swal from "sweetalert2";

// --------------- Daftar Constant ---------------
export const LOGIN = "LOGIN";
export const USERREGISTER = "USERREGISTER";
export const PROREGISTER = "PROREGISTER";

// --------------- Function dari Constant ---------------
export const setUserRegister = (data) => {
  return {
    type: USERREGISTER,
    payload: data,
  };
};

export const setProRegister = (data) => {
  return {
    type: PROREGISTER,
    payload: data,
  };
};

export const setLogin = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

// --------------- Function isi dari Set --------------
export const userRegisterAction = (values, event, history) => (dispatch) => {
  event.preventDefault();

  return axios
    .post("https://server-promeet.herokuapp.com/api/user/register", values)
    .then((response) => {
      console.log("res", response);
      dispatch(setUserRegister(response.data.user));
      if (response.data !== "email sudah tersedia") {
        Swal.fire({
          title: "Berhasil mendaftar",
          icon: "success",
          timer: 3000,
        });
        history.push("/login");
      } else {
        Swal.fire({
          title: "Gagal Mendaftar",
          text: `${response.data}`,
          icon: "warning",
          timer: 3000,
        });
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const proRegisterAction = (values, event, history) => (dispatch) => {
  event.preventDefault();

  return axios
    .post("https://server-promeet.herokuapp.com/api/prof/register", values)
    .then((response) => {
      console.log("res", response);
      dispatch(setProRegister(response.data.user));
      if (response.data !== "Email Sudah Tersedia") {
        Swal.fire({
          title: "Berhasil mendaftar",
          icon: "success",
          timer: 3000,
        });
        history.push("/login");
      } else {
        Swal.fire({
            title: "Gagal Mendaftar",
            text: `${response.data}`,
            icon: "warning",
            timer: 3000,
          });
      }
    })
    .catch ((error)=>{
        console.log("err", error);
    });
};

export const loginAction =(values, event, history) => {
    return (dispatch) => {
        event.preventDefault();

        return axios
        .post("https://server-promeet.herokuapp.com/api/user/login", values)
        .then ((response)=> {
          console.log(response)

            if(response.data.token !== undefined) {
                localStorage.setItem("token", response.data.token);

                Swal.fire({
                    title: "Berhasil Login",
                    text: "Selamat Datang",
                    icon: "success",
                    confirmButtonText: "ok"
                })

                dispatch(setLogin(response.data.token));
                history.push("/");

            } else {
                Swal.fire({
                    title: " Gagal Login",
                    text: `${response.data.message}`,
                    icon: "warning",
                    confirmButtonText: "ok"
                })
            }
        })
        .catch ((error)=>{
            console.log("err", error);
            

        });
    };
};

