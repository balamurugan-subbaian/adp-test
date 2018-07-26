import React from 'react';
import {newCampaigns} from '../Common/Data';
import {pastCampaigns} from '../Common/Data';
import CampaignCardList from '../Common/CampaignCard/CampaignCardList';
import ContentHeader from '../Common/ContentHeader';

const newCampaignLength = newCampaigns.length;
const pastCampLength = pastCampaigns.length;

// campaign to be one compo
const Campaigns = () => {
    return(<div>
        <div className="campaigns">
            <ContentHeader title = "NEW CAMPAIGNS" length = {newCampaignLength} onclick = "onclick"/>
            <CampaignCardList campaignsList = {newCampaigns} />
        </div>
        <div className="campaigns">
            <ContentHeader title = "PAST CAMPAIGNS" length = {pastCampLength} onclick = "onclick"/>
            <CampaignCardList campaignsList = {pastCampaigns} />
        </div>
    </div>
    )
}

export default Campaigns;