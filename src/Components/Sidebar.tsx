import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar bg-slate-200 w-24 p-2">
            <ul>
                <li>
                    <a href="/front-end">Front-end</a>
                </li>
                <li>
                    <a href="/back-end">Back-end</a>
                </li>
                <li>
                    <a href="/design">Design</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;