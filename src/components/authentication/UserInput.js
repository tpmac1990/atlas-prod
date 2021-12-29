import React from 'react'

const UserInput = ({ icon, type, placeholder, name, style, value, handler }) => {

    // autoComplete="new-password": prevents auto complete
    return (
        <div className={style}>
            <span className="material-icons active-user-icon">{icon}</span>
            <input  
                type={type} 
                placeholder={placeholder} 
                value={value} 
                name={name}
                onChange={handler} />
        </div>
    )
}

export default UserInput;

// autoComplete="new-password"
