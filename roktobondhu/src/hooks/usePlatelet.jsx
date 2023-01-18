import { useEffect, useState } from "react";

const usePlatelet = () =>{
    const [platelets, setPlatelet] = useState([]);

useEffect(() =>{
     fetch('platelet.json')
    .then(res =>res.json())
    .then(data => setPlatelet(data));
},[])
return [platelets, setPlatelet];
}
export default usePlatelet;