import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../component/pagination";
import Header from "../component/header";
import Blogs from "../component/blogs";
const TagPage = ()=> {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

    return (
   <div className="w-screen h-full min-h-screen bg-blue-400  bg-opacity-70">
   <div className="py-4 w-[1200px] mx-auto">
   <Header/>
    <div  >

        <button className="p-4 mx-4 rounded-lg bg-white"
            onClick={() => navigation(-1)}>
        back
        </button>
        <h2 className="p-4 mx-4 mt-10 max-w-fit rounded-lg bg-white"> 
            Blog Tagged <span>#{tag}</span>
        </h2>
    </div>
    <Blogs/>
    <Pagination/>
   </div>
   </div>

    );
}

export default TagPage;