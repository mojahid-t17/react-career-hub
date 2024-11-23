const getStoredJobs=()=>{
    const storedJobs=localStorage.getItem('applied-jobs');
    if(storedJobs){
        return JSON.parse(storedJobs)
    }
    return [];
}
const saveAppliedJobs=(id)=>{
      const appliedJobs= getStoredJobs();
      console.log(id,appliedJobs)
      const exist=appliedJobs.find(jobId=>jobId===id);
       console.log(exist)
      if(!exist){
        appliedJobs.push(id);
        console.log(appliedJobs)
        localStorage.setItem('applied-jobs',JSON.stringify(appliedJobs))
       
      }
     
}

export { getStoredJobs, saveAppliedJobs };
