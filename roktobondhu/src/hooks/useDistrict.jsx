import { useEffect, useState } from "react";

const useDistrict = () =>{
    const [districts, setDistricts] = useState([]);

useEffect(() =>{
     fetch('districts.json')
    .then(res =>res.json())
    .then(data => setDistricts(data));
},[])
return [districts, setDistricts];
}
export default useDistrict;