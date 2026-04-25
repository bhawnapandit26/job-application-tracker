import { createContext, useEffect, useState } from "react"

export const jobsContext = createContext();

export const JobProvider = ({children}) =>{
    const data = localStorage.getItem("jobs");
    const [jobs, setJobs] = useState(data? JSON.parse(data) : []);
    const [editJob, setEditJob] = useState(null);

    // Save to localStorage whenever jobs change
    useEffect(()=>{
        localStorage.setItem("jobs", JSON.stringify(jobs));
    }, [jobs]);

    const clearLocalStorage = () =>{
        localStorage.removeItem("jobs")
        setJobs([]);
    }

    const deleteJob = (id) =>{
        setJobs((prev)=> prev.filter((item)=>item.id !== id));
    }

    return(
        <jobsContext.Provider value={{jobs, setJobs, clearLocalStorage, deleteJob, editJob, setEditJob}}>{children}</jobsContext.Provider>
    );
}