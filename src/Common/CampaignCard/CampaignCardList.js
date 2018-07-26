import React from 'react';
import CampaignCard from './CampaignCard';

const CampaignCardList = ({campaignsList}) => {
    return(
        <div className="campaignList">
            {
                campaignsList.map((campaign, index) =>
                    <CampaignCard 
                        campaign = {campaign}
                        key = {index}
                    />
                )
            }
        </div>
    )
}

export default CampaignCardList;