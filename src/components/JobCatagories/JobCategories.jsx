import { useEffect, useState } from "react";
import Category from "../Category/Category";


const JobCategories = () => {
   
   const [categories,setCategories]=useState([]);
   useEffect(()=>{
    fetch('categories.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
   },[])

    return (
        <div>
            <div className="my-16">
                <h1 className="text-5xl text-center font-bold my-6">Job Category List</h1>
                <p className="text-center text-xl text-[#757575] my-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2">
                {
                    categories.map(category=><Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategories;