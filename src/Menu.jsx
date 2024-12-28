import React from 'react';
import './Menu.css';

export default function Menu({ group, isVisible, onToggle }) {
    return (
        <>
        <button className="menu-group-button" onClick={onToggle}>
                <img
                    src={group.icon}
                    className="menu-group-image"
                />
                {group.groupName}
        </button>
        </>
    )
}

