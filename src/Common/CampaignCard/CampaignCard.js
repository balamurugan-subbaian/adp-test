import React from 'react';

/*To do
distributive property of es6
*/

const CampaignCard = ({ campaign }) => {
    const { image, title, status, author, date } = campaign;
    return (
        <div className="campaign">
            <div className="campaignImage">
                <img src={image} alt="" />
                <div className="campaignContent">
                    <div className="campaignTitle"><p className="overflow ellipsis">{title}</p><span className={status}></span></div>
                    <div className="campaignDesc">
                        <span>Created by </span>{author}<span> on </span>{date}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignCard;