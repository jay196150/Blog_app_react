import { useContext, useEffect, useState } from "react"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { baseUrl } from "../baseUrl";
import Spinner from "../component/spinner";
import Card from "../component/card";
import Header from "../component/header";
const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [ralatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    console.log(blogId)
    const newurl = "https://codehelp-apis.vercel.app/api/"
    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newurl}get-blog?blogId=${blogId}`;
        console.log("akdcjjvfi c ec cdecdeed")
        console.log(url)
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log("i am jay")
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

        } catch (error) {
            console.log("erroe aa gaya");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

    return (
        <div className="w-screen h-full min-h-screen bg-blue-400  bg-opacity-70">
            <div className="py-4 w-[1200px] mx-auto">
                <Header />

                <div >
                    <button className="p-4 mx-4 rounded-lg bg-white" 
                    onClick={() => navigation(-1)}>
                        Back
                    </button>
                </div>

                {
                    loading ?
                        (<div className="h-[100vh] w-[1200px] flex justify-center items-center"> <Spinner /> </div>) :
                        blog ? (<div>
                            <Card post={blog} />
                            <h2 className="p-4 mx-4 mt-10 max-w-fit rounded-lg bg-white" >Related Blogs</h2>
                            {console.log(ralatedblogs.length)}
                            {
                                ralatedblogs.map((post) => (
                                    <div key={post.id} >
                                        <Card post={post} />
                                    </div>
                                ))
                            }

                        </div>) : (<div>
                            <p> No Data </p>
                        </div>)
                }
            </div>
        </div>
    );


}

export default BlogPage;