import axios from "axios";
import Swal from "sweetalert2";

// --------------- Daftar Constant ---------------
export const LOGIN = "LOGIN";
export const USERREGISTER = "USERREGISTER";
export const PROREGISTER = "PROREGISTER";
export const GET_USER_INFO = "GET_USER_INFO";
export const EDIT_USER = "EDIT_USER";
export const LOGOUT = "LOGOUT";

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

export const getUserInfo = (data) => {
  return {
    type: GET_USER_INFO,
    payload: data,
  };
};

export const editUser = (data) => {
  return {
    type: EDIT_USER,
    payload: data,
  };
};

export const getlogout = () => {
  return {
    type: LOGOUT,
  };
};

// --------------- Function isi dari Set --------------
export const userRegisterAction = (values, event, history) => (dispatch) => {
  event.preventDefault();

  return axios
    .post("https://server-promeet.herokuapp.com/api/user/register", values)
    .then((response) => {
      // console.log("res", response);
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
      // console.log("res", response);
      dispatch(setProRegister(response.data.user));
      // console.log('setelah daftar', response)
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
    .catch((error) => {
      console.log("err", error);
    });
};

export const loginAction = (values, event, history) => {
  return (dispatch) => {
    event.preventDefault();

    return axios
      .post("https://server-promeet.herokuapp.com/api/user/login", values)
      .then((response) => {
        // console.log('response login', response);

        if (response.data.token !== undefined) {
          localStorage.setItem("token", response.data.token);

          Swal.fire({
            title: "Berhasil Login",
            text: "Selamat Datang",
            icon: "success",
            confirmButtonText: "ok",
          });

          dispatch(setLogin(response.data.token));
          history.push("/");
        } else {
          Swal.fire({
            title: " Gagal Login",
            text: `${response.data.message}`,
            icon: "warning",
            confirmButtonText: "ok",
          });
        }
      })
      .catch((error) => {
        console.log("err", error);
      });
  };
};

export const getUserInfoAction = () => async (dispatch) => {
  const url = "https://server-promeet.herokuapp.com/api/auth";
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const userInfo = await axios.get(url, config);

  dispatch(getUserInfo(userInfo.data.member));
  // console.log("user login", userInfo);
};

export const getEditProfessional = (values, detailProfile, event) => {
  return async (dispatch) => {
    event.preventDefault();
    // console.log("isi status", values);
    return axios
      .put(
        `https://server-promeet.herokuapp.com/api/edit-prof/${detailProfile._id}`,
        values
      )
      .then((response) => {
        // console.log("response edit", response.data);
        dispatch(editUser(response.data));
      })
      .catch((error) => {
        console.log(` hasil eror edit ${error}`);
      });
  };
};

export const userLogout = (history) => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(getlogout());
    history.push("/login");
  };
};
