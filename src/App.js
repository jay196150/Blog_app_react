import Header from "./component/header"
import Blogs from "./component/blogs"
import Pagination from "./component/pagination"
import { useContext, useEffect } from "react";
import { AppContext } from "./context/appContext";
import "./App.css"
import CategoryPage from "./pages/category";
import Home from "./pages/home";
import BlogPage from "./pages/blogPage";
import TagPage from "./pages/tagPage";
import { Route, Routes,useSearchParams ,useLocation } from "react-router-dom";

export default function App() {

  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams,setSearchParams ] = useSearchParams();
  const location = useLocation(); 
  

  useEffect(() => {
   
  const page = searchParams.get("page") ??1;
  if(location.pathname.includes("tags")){
    const tag = location.pathname.split("/").at(-1).replace("-"," ");
    fetchBlogPosts(Number(page),tag)
  }else if(location.pathname.includes("categories")){
    const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchBlogPosts(Number(page),null,category);
  }else{
    fetchBlogPosts(Number(page ))
  }

  }, [location.pathname,location.search]);


  return (
  <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/blog/:blogId" element= {<BlogPage/>}/>
    <Route path="/tags/:tag" element= {<TagPage/>}/>
    <Route path="/categories/:category" element= {<CategoryPage/>}/>
  </Routes>
  );
}
 
{/* */}
