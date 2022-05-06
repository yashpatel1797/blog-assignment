import axios from "axios";
import { createContext, useEffect, useContext, useReducer } from "react";
import { blogReducer } from "reducer/blogReducer";
import { fetchBlogs } from "Services/https-helper";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {

    const [state, dispatch] = useReducer(blogReducer, {
        blog: []
    })
    const { blog } = state;
    useEffect(() => {
        fetchBlogs(dispatch);
    }, [])
    return (
        <BlogContext.Provider value={{ blog, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}

const useBlog = () => useContext(BlogContext)

export { useBlog, BlogProvider }