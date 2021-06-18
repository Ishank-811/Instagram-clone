const reducer = (
  state = { myprofile: [], userprofile: [], follow: [] },
  action
) => {
  switch (action.type) {
    case "MY_PROFILE":
      return {
        myprofile: [...action.payload],
      };
    case "USER_PROFILE":
      return {
        userprofile: [...action.payload],
      };
    case "REMOVE_USER_PROFILE":
      return {};
    case "FOLLOW":
      var existing = JSON.parse(localStorage.getItem("profile"));
      var myprofile = existing?.result;
      myprofile["following"].push(action?.payload?.following?._id);
      localStorage.setItem("profile", JSON.stringify(existing));
      return {
        ...state,
        follow: state.userprofile["1"]["0"].followers.map((post) =>
          post._id === action.payload.followers._id
            ? action.payload.followers
            : post
        ),
      };

    case "UNFOLLOW":
      existing = JSON.parse(localStorage.getItem("profile"));
      myprofile = existing?.result;

      myprofile["following"].pop(action?.payload?.following?._id);
      localStorage.setItem("profile", JSON.stringify(existing));
      return {
        ...state,
        follow: state.userprofile["1"]["0"].followers.map((post) =>
          post._id === action.payload.followers._id
            ? action.payload.followers
            : post
        ),
      };

    default:
      return { ...state };
  }
};
export default reducer;
