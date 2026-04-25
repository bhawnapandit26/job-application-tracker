import { useContext } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { jobsContext } from "../context/Job";

const JobItem = ({item}) => {
    const jobCon = useContext(jobsContext);
    const deleteJob = jobCon.deleteJob;
    const setEditJob = jobCon.setEditJob;

    return(
        <div className="flex justify-between items-center bg-white shadow-sm hover:shadow-md rounded-2xl px-1.5 py-3 w-full my-2.5 flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex items-center">
                <div className="px-2 w-1/2">
                    <div className="text-[12px] text-gray-600">Company Name</div>
                    <div className="text-md text-gray-900 uppercase font-medium">{item.company}</div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="text-[12px] text-gray-600">Role</div>
                    <div className="text-md text-gray-900 uppercase font-medium">{item.role}</div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center mt-1.5 md:mt-0">
                <div className="px-2 w-1/3">
                    <div className="text-[12px] text-gray-600">Date</div>
                    <div className="text-md text-gray-900 uppercase font-medium">{item.date}</div>
                </div>
                <div className="px-2 w-1/3">
                    <div className="text-[12px] text-gray-600">Status</div>
                    <div className="text-md text-gray-900 uppercase font-medium">{item.status}</div>
                </div>
                <div className="px-2 w-1/3 flex justify-end">
                    <button className="bg-green-700 hover:bg-green-800 px-3 py-2 rounded-md cursor-pointer mr-2.5" onClick={()=> setEditJob(item)}><AiFillEdit /></button>
                    <button className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md cursor-pointer" onClick={()=>deleteJob(item.id)}><AiFillDelete /></button>
                </div>
            </div>
            {/* <div className="px-2 w-2/6">
                <div className="text-[12px] text-gray-600">Company Name</div>
                <div className="text-md text-gray-900 uppercase font-medium">{item.company}</div>
            </div>
            <div className="px-2 w-1/6">
                <div className="text-[12px] text-gray-600">Role</div>
                <div className="text-md text-gray-900 uppercase font-medium">{item.role}</div>
            </div>
            <div className="px-2 w-1/6">
                <div className="text-[12px] text-gray-600">Date</div>
                <div className="text-md text-gray-900 uppercase font-medium">{item.date}</div>
            </div>
            <div className="px-2 w-1/6">
                <div className="text-[12px] text-gray-600">Status</div>
                <div className="text-md text-gray-900 uppercase font-medium">{item.status}</div>
            </div>
            <div className="px-2 w-1/6 flex justify-end">
                <button className="bg-green-700 hover:bg-green-800 px-3 py-2 rounded-md cursor-pointer mr-2.5" onClick={()=> setEditJob(item)}><AiFillEdit /></button>
                <button className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md cursor-pointer" onClick={()=>deleteJob(item.id)}><AiFillDelete /></button>
            </div> */}
        </div>
    )
}

export default JobItem;