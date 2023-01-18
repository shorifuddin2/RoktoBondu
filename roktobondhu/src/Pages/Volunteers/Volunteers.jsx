import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import VolunteerCard from './VolunteerCard';
import "./Volunteers.css";


const Volunteers = () => {

    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch("volunteers.json")
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])

    return (
        <div className='volunteerContainer mb-32'>
            <div className='flex justify-center'>
                <h3 className='text-lg bg-primary w-fit text-white font-bold px-12 py-2 my-8 rounded-full'>ভলান্টিয়ার্সঃ</h3>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {volunteers?.map(volunteerData => <VolunteerCard key={Math.random()*1000} volunteerData={volunteerData} />)}
            </div>
        </div>
    );
};

export default Volunteers;