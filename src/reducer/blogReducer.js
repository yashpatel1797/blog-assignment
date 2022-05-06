const blogReducer = (state, { type, payload }) => {
    switch (type) {
        case "FETCH_DATA":
            return { ...state, blog: payload }
        case "ADD_BLOG":
            return { ...state, blog: [...state.blog, payload] }
        case "DELETE_BLOG":
            return { ...state, blog: state.blog.filter(({ _id }) => _id !== payload) }
        case "UPDATE_BLOG":
            return {
                ...state,
                blog: state.blog.map((details) => details._id === payload._id ? { ...details, ...payload } : details),
            }
        default:
            break;
    }
}
export { blogReducer }