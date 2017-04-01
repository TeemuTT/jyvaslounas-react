import React from 'react'

export function MenuTitle({options, active, onClick}) {
    return (
        <div className="menuTitle">
            {options.map(option => {
                return (
                    option === active ? <a href="#" className="btn active" key={option}>{option} </a>
                    : <a href="#" className="btn" key={option} onClick={e => onClick(option)}>{option} </a>
                )}
            )}
        </div>
    )
}

export default MenuTitle
