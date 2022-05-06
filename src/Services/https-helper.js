import axios from "axios";
import { toast } from "react-toastify";

const fetchBlogs = async (dispatch) => {

    try {
        const data = await axios.get("https://crudcrud.com/api/bcd89d3386024841b4ae36247ec040d5/blog")
        dispatch({ type: "FETCH_DATA", payload: data.data })
    } catch (error) {
        console.log(error);
    }
}
const postBlog = async (formDetails, dispatch) => {
    try {
        const data = await axios.post("https://crudcrud.com/api/bcd89d3386024841b4ae36247ec040d5/blog", {
            "title": formDetails.title,
            "content": formDetails.content,
            "date": new Date().toLocaleDateString(),
            "category": formDetails.category,
            "image": formDetails.image,
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        dispatch({ type: "ADD_BLOG", payload: data.data })
        toast.success(<p>Blog created.</p>)
    } catch (error) {
        toast.error(<p>Failed to create blog.</p>)
    }
}
const deleteBlog = async (id, dispatch) => {
    try {
        const data = await axios.delete(`https://crudcrud.com/api/bcd89d3386024841b4ae36247ec040d5/blog/${id}`)
        dispatch({ type: "DELETE_BLOG", payload: id })
        toast.success(<p>Blog Deleted.</p>)
    } catch (error) {
        toast.error(<p>Failed to delete blog.</p>)
    }
}
const editBlog = async (id, formDetails, dispatch) => {
    try {
        const data = await axios.put(`https://crudcrud.com/api/bcd89d3386024841b4ae36247ec040d5/blog/${id}`, {
            "title": formDetails.title,
            "content": formDetails.content,
            "date": new Date().toLocaleDateString(),
            "category": formDetails.category,
            "image": formDetails.image,
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        dispatch({ type: "UPDATE_BLOG", payload: formDetails })
        toast.success(<p>Blog edited.</p>)
    } catch (error) {
        toast.error(<p>Failed to edit blog.</p>)
    }
}
export { fetchBlogs, deleteBlog, postBlog, editBlog }