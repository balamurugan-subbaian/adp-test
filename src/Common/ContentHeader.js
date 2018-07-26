import React from 'react';

const ContentHeader = ({title, length, onclick}) => {
    return (
        <div className="campaignType">
            <p>{title}<span> ({length})</span></p>
            <div className="line"><hr /></div>
            {onclick === "onclick" &&
            <input type="button" value="Add New" />
            }
        </div>
    )
}

export default ContentHeader;