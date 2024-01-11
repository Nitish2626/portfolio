import React from 'react';
import ImageTag from '../image tag/ImageTag';

const SkillBar = (props) => {
    return (
        <div className="flex items-center my-10 px-4">
            <div className="font-bold">
                <ImageTag 
                    src={props.src}
                    alt={props.alt}
                />
            </div>
            <div className="w-10/12 h-5 bg-gray-200 rounded-full">
                <div className={`h-5 flex items-center justify-center text-md font-semibold ${props.text} ${props.bgColor} rounded-full`} style={{ width: `${props.percentage}%` }}>
                    {props.percentage}%
                </div>
            </div>
        </div>
    );
}

export default SkillBar;
