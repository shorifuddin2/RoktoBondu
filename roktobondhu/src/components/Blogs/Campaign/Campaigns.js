import React from 'react';
import campaigns from './campaign.json';
import Campaign from './Campaign';

const Campaigns = () => {
    return (
        <div className='lg:mx-[105px] md:[50px] my-10'>
            <div>
                <h1 className="text-3xl text-black font-bold mt-[60px]">পোষ্ট সমূহ</h1>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12 md:container mx-auto">
                {
                    campaigns.map((campaign, index) => <Campaign
                        key={index}
                        campaign={campaign}
                    ></Campaign>)
                }
            </div>
        </div>
    );
};

export default Campaigns;