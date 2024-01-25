import { NavLink } from "react-router-dom";

function Card({ post }) {

    return (<div className="py-5 mt-10 w-[1200px] mx-auto  px-10 rounded-3xl bg-white ">
        <div className="">
            <NavLink to={`/blog/${post.id}`}  >
                <p className="text-[24px]">{post.title}</p>
            </NavLink>
            <p className="mt-2" > By
            
             <span className="italic">{post.author} {"  "}</span>
             <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}  >
              <span className="underline">{post.category} </span> 
              </NavLink></p>

            <p className="mt-2">Post on {post.date}</p>

           
                <p className="mt-4 mb-4 text-[18px]">{post.content}</p>
          
            {
                post.tags.map((tag) => {
                    return (
                        <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}  >
                            <span className="underline me-3 text-blue-500"> #<span>{tag}</span></span>
                        </NavLink>)
                })
            }
        </div>
    </div>);
}

export default Card;