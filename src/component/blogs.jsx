import { useContext } from "react";
import { AppContext } from "../context/appContext";
import Spinner from "./spinner"
import Card from "./card"
function Blogs() {

    // step 3
    const { posts, loading } = useContext(AppContext)
    return (
        <div className="h-full w-[1200px] flex flex-col gap-3  mx-auto ">
            {
                loading ? (<div className="h-[100vh] w-[1200px] flex justify-center items-center"> <Spinner /> </div>) : (
                    posts.length === 0 ? (
                        <div className=" p-5 bg-white rounded-lg mt-5 max-w-fit flex justify-center mx-auto items-center" >No post</div> ) : (
                        posts.map( (post)=>  (<Card post={post}/>) )
                    )
                )
            }
        </div>
    );
}

export default Blogs;