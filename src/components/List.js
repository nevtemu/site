import React from 'react'
import Flag from './Flag.jsx';

const List = ({fullName, capital, id}) => {
        return (
            <li className="region-container" className="p-2 border-black border-2 flex flex-row">
                <div className="flex-none mr-2"><Flag region={id} style={{width:60+'px'}}/></div>
                <div className="flex flex-col">
                    <div className="text-center font-bold flex-grow">{fullName.EN}</div>
                    <div>Capital: {capital}</div>
                </div>
            </li>
        )
}
export default List;