import { useContext, useEffect, useState } from "react";
import { jobsContext } from "../context/Job";

const Applicationform = () =>{

    const [formData, setFormData] = useState({company:"", role:"", date:"",status:""});
    const jobCon = useContext(jobsContext);

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!formData.company || !formData.role || !formData.status) {
            alert("Please fill all required fields");
            return;
        }

        if(jobCon.editJob){
            const updatedJobList = jobCon.jobs.map((item)=> item.id === jobCon.editJob.id ? formData : item);
            jobCon.setJobs(updatedJobList);
            jobCon.setEditJob(null);
        }else{
            const newJob = {...formData, id: Date.now()}
            jobCon.setJobs([...jobCon.jobs, newJob]);
        }
        setFormData({company:"", role:"", date:"",status:""});
    }

    useEffect(()=>{
        if(jobCon.editJob){
            setFormData(jobCon.editJob);
            console.log("here");
        }
    },[jobCon.editJob])

    return(
        <div className="flex justify-center py-8 w-full">
            <form className="bg-white inline-flex flex-col p-8 rounded-4xl shadow-xl shadow-gray-400 w-full md:w-2/3 ">
                <div className="text-center text-2xl font-bold text-gray-800 pb-5">Add a Job</div>
                <div>
                    <label htmlFor="company" className="text-md text-gray-800">Company Name</label><br/>
                    <input type="text" name="company" id="company" value={formData?.company} onChange={handleChange} className="w-full border border-gray-400 mt-1.5 mb-3.5 rounded-sm p-1.5"/>
                </div>
                <div>
                    <label htmlFor="role" className="text-md text-gray-800">Role</label><br/>
                    <input type="text" name="role" id="role" value={formData?.role} onChange={handleChange} className="w-full border border-gray-400 mt-1.5 mb-3.5 rounded-sm p-1.5"/>
                </div>
                <div>
                    <label htmlFor="date" className="text-md text-gray-800">Date</label><br/>
                    <input type="date" name="date" id="date" value={formData?.date} onChange={handleChange} className="w-full border border-gray-400 mt-1.5 mb-3.5 rounded-sm p-1.5"/>
                </div>
                <div>
                    <label htmlFor="status" className="text-md text-gray-800">Status</label><br/>
                    <select name="status" id="status" value={formData.status} onChange={handleChange} className="w-full border border-gray-400 mt-1.5 mb-3.5 rounded-sm p-1.5">
                        <option>Select Status</option>
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Offer</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <button onClick={handleSubmit} className="bg-blue-950 hover:bg-blue-900 p-2.5 rounded-lg text-white font-bold mt-2.5 cursor-pointer">{jobCon.editJob ? "Update" : "Add"} Job</button>
            </form>
        </div>
    )
}   

export default Applicationform;