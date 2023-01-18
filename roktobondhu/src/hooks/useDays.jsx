import { useEffect, useState } from "react";

const useDays = () =>{
    const [days, setDays] = useState([]);

useEffect(() =>{
     fetch('day.json')
    .then(res =>res.json())
    .then(data => setDays(data));
},[])
return [days, setDays];
}
export default useDays;