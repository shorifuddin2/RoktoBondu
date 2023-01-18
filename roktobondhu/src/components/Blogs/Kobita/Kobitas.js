import React from 'react';
import Kobita from './Kobita';
import poems from './poems.json'

const Kobitas = () => {

  return (
    <div className='lg:mx-[105px] md:[50px] my-10'>
      <div>
        <h1 className="text-3xl text-black font-bold mt-[60px]">পোষ্ট সমূহ</h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12 md:container mx-auto">
        {
          poems.map((poem, index) => <Kobita
            key={index}
            poem={poem}
          ></Kobita>)
        }
      </div>
    </div>
  );
};

export default Kobitas;