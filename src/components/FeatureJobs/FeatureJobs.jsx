import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
    const [featureJobs,setFeatureJobs]=useState([]);
    const [dataLength,setDataLength]=useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setFeatureJobs(data))
    },[])
    return (
        <div className="mt-10 ">
              <div className="my-5">
                <h1 className="text-5xl text-center font-bold">Featured Jobs</h1>
                <p className="text-center text-xl text-[#757575] my-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-12">
              {
                featureJobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
              }
            </div>
            <div className={`${ dataLength==featureJobs.length? 'hidden' : ' flex justify-center'}`}>
              <button className=" bg-purple-400 px-3 py-2 rounded text-white mb-7 hover:bg-purple-500" onClick={()=>setDataLength(featureJobs.length)}>Show More</button>
            </div>
        </div>
    );
};

export default FeatureJobs;