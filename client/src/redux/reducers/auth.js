const authreducers = (
  state = { authdata: [], error: null, signup_error: null, isloading: false },
  action
) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        isloading: true,
      };
    case "END_LOADING":
      return {
        ...state,
        isloading: false,
      };

    case "AUTH":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      console.log(action?.data);
      return { ...state, authdata: action?.data };

    case "LOGOUT":
      localStorage.clear();
      return { ...state, authdata: action?.data };
    case "ERROR":
      localStorage.setItem("error", action?.payload);
      return { error: action?.payload };
    case "SIGNUP_ERROR":
      return { signup_error: action?.payload };
    case "UPDATE":
      var existing = localStorage.getItem("profile");
      existing = existing ? JSON.parse(existing) : {};
      var myprofile = existing?.result;
      myprofile["fullname"] = action?.data?.fullname;
      myprofile["username"] = action?.data?.username;
      myprofile["pic"] = action?.data?.pic;
      console.log(action?.data);
      console.log(myprofile);
      localStorage.setItem("profile", JSON.stringify(existing));
      return {
        ...state,
        authdata: state.authdata.map((post) =>
          post._id === action.data?._id ? action?.data : post
        ),
      };
    default:
      return state;
  }
};
export default authreducers;
