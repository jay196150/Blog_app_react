import Header from "../component/header";
import Blogs from "../component/blogs";
import Pagination from "../component/pagination";
const Home = ()=> {
    return (
        <div className="w-screen h-full min-h-screen bg-blue-400  bg-opacity-70">
        <div className="py-4">
          <Header/>
          <Blogs />
          <Pagination />
        </div>
      </div>
    );
} 

export default Home;