import './App.css';
import { Nav, Footer, SingleBlog, ScrollToTop } from "components"
import { Routes, Route } from "react-router-dom";
import { Create, Edit, HomePage, BlogPage } from "page"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="App">
        <ScrollToTop />
        <ToastContainer
          position='top-right'
          autoClose={1500}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          limit={5}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path="/blog/:blogId" element={<SingleBlog />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
