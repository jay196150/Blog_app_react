import { useContext } from "react";
import { AppContext } from "../context/appContext";

function Pagination() {

    const { page, totalPages, handlePageChange } = useContext(AppContext);


    return (<div className="w-[1200px] mx-auto">


         <div className="flex justify-between">
           <div className="flex my-4">
           {
                page > 1 &&
                <button className="p-4 mx-4 rounded-lg bg-white" onClick={() => handlePageChange(page - 1)}>
                    Previous
                </button>
            }

            {
                page < totalPages &&
                (<button className="p-4 mx-4 rounded-lg bg-white"  onClick={() => handlePageChange(page + 1)} >next</button>)
            }
           </div>
   
            <p className="p-4  my-4 mx-4 rounded-lg bg-white"> Page {page} of {totalPages} </p>
        </div>




    </div>);
}

export default Pagination;