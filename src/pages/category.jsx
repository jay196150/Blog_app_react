import Header from "../component/header";
import { useLocation ,useNavigate } from "react-router-dom";
import Blogs from "../component/blogs";
import Pagination from "../component/pagination";
const CategoryPage = ()=>{
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    
    console.log(category);

    return (
   <div  className="w-screen h-full min-h-screen bg-blue-400  bg-opacity-70">
    <div className="py-4 w-[1200px] mx-auto">

    <Header/>
    <div>

        <button className="p-4 mx-4 rounded-lg bg-white"
            onClick={() => navigation(-1)}>
        back
        </button>
        <h2 className="p-4 mx-4  mt-5 rounded-lg max-w-fit bg-white"> 
           <p> Blog Category <span>{category}</span></p>
        </h2>
    </div>
    <Blogs/>
    <Pagination/>

    </div>
   </div>

    );
}

export default CategoryPage;