const reducer = (posts = [], action) => {
    switch (action.type) {
        case "CREATE":
            return [...posts, action.payload];
        case "FETCH_ALL":
            return action.payload;
        case "LIKE":
            return posts.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
        case "UNLIKE":
            return posts.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
        case "DELETE":
            return posts.filter((post) => post._id !== action.payload);
        case "COMMENT":
            // console.log(action.payload) ;
            return posts.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
        default:
            return posts;
    }
};
export default reducer;
