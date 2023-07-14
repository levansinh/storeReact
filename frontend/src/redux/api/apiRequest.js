import { loginFailed, loginStart, loginSuccess } from "../auth/authSlice";

import {} from "../users/userSlice";

import instance from "../../configs/config";

export const loginUser = async (user, dispatch, navigate) => {
  try {
    dispatch(loginStart());
    const res = await instance.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    if (res.data.account.role === "Admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
    localStorage.setItem("accessToken", res.data.accessToken);
    return res;
  } catch (err) {
    dispatch(loginFailed());
  }
};
export const registerUser = (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = instance.post("/auth/registers", user);
    // console.log(res.data);
    dispatch(loginSuccess(res.data));
    navigate("/auth");
  } catch (error) {
    dispatch(loginFailed());
  }
};
