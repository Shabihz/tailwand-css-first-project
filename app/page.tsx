import React from "react";
import Card from "./components/Card";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div>
<div className="bg-red-500 m-3 h-18 font-semibold mr-9 ml-5 mt-1 pl-6 pt-3 pb-3 pr-6 w-30 border-collapse border-2 border-red-950"  >
<Card name='Shabih'
      rollNo={1234} 
    day='Monday'
    timing='2 to 5'
    />
   </div>

<br/>
<div className="font-bold text-wrap mb-2 px-16 py-4 w-30 h-18 border-green-800 border-collapse border-2 bg-green-200 ">
<Card  name='Kumail'                                                                                       
       rollNo={1345}
        day='Wednesday' 
        timing='6 to 9'
   />
  </div>
     <br/>
     <div className="justify-center items-center font-bold text-xl bg-gray-300 mt-1 ml-5 pt-2 pb-2 pl-5 w-30 h-18 mr-9 border-indigo-600 border-double border-4 ">
  <Card
    name='Zain'
   rollNo={5678}
    day='Tuesday'
    timing='9 to 12'
  />
</div>

</div>

        
  
    
  );
}
