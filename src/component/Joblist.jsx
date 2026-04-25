import { useContext, useState } from "react";
import { jobsContext } from "../context/Job";
import JobItem from "./JobItem";

const Joblist = () =>{

    const jobCon = useContext(jobsContext);
    const clearLocalStorage = jobCon.clearLocalStorage;
    const [searchText, setSearchText] = useState("");

   const filteredJobs = jobCon.jobs.filter((item)=> (item.company || "").toLowerCase().includes(searchText.toLowerCase()) || (item.role || "").toLowerCase().includes(searchText.toLowerCase()));


    return(
        <div>
           {jobCon?.jobs?.length > 0 ? 
           <div className="flex justify-center items-center py-5 flex-col">
                <div className="w-full flex items-center mb-3">
                    <input id="search" name="search" type="text" placeholder="Search by company or role..." className="border border-gray-400 px-2.5 py-2 rounded-sm w-full" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                </div>
                {
                filteredJobs.map((item, index)=>{
                    return(
                        <JobItem key={item.id} item={item}/>
                    )
                })
                }
                <button className="py-1.5 px-4 bg-red-600 rounded-lg text-white font-bold cursor-pointer" onClick={clearLocalStorage}>Delete All</button>
            </div> : <div className="w-full bg-gray-50 py-6 text-center font-bold text-gray-900">Job list will appear here</div>}
        </div>
    )
}

export default Joblist;

