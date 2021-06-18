import * as api from "../../api/index";

export const signin = (formdata, history) => async (dispatch) => {
    try {
        dispatch({ type: "START_LOADING" })
        const { data } = await api.signin(formdata);
        dispatch({ type: "AUTH", data });
        history.push("/home");
        dispatch({ type: "END_LOADING" })
        dispatch({ type: "END_LOADING" })
    } catch (err) {
        const error_message = err.response.data.message;

        dispatch({ type: "ERROR", payload: error_message });
    }
};
export const signup = (formdata, history) => async (dispatch) => {
    try {
        dispatch({ type: "START_LOADING" })
        let { data } = await api.signup(formdata);
        dispatch({ type: "AUTH", data });
        history.push("/home");
        dispatch({ type: "END_LOADING" })
    } catch (err) {
        const error_message = err.response.data.message;
        console.log(error_message);
        dispatch({ type: "SIGNUP_ERROR", payload: error_message });
        // console.log(err)  ;
    }
};

export const updateprofile = (id, profile, history) => async (dispatch) => {
    try {
        dispatch({ type: "START_LOADING" });

        const { data } = await api.updateprofile(id, profile);

        dispatch({ type: "UPDATE", data });
        history.push("/Profile");
        dispatch({ type: "END_LOADING" });
    } catch (err) {
        console.log(err);
    }
};
