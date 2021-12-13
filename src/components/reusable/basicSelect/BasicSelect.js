import React, { useEffect, useState, useRef } from 'react'


const BasicSelect = ({styles, placeholder, rows, value, handler}) => {

    const [ visible, setVisible ] = useState(false)

    const ref = useRef(null);

    // toggle dropdown on click
    const ClickHandler = () => {
        setVisible(!visible)
    }

    // handles the slected value in the parent component
    const ItemClickHandler = e => {
        handler(e.target.id)
    }

    const handleClickOutside = e => {
        // !ref.current.contains(e.target): a click occurs outside the element
        // active_dropdown === name: the active_dropdown is of this element. There will be click events for each infinity dropdown, so this
        //      will prevent a dispatch occurring when a click occurs outside another infinity dropdown
        ref.current && !ref.current.contains(e.target) && setVisible(false)
    };

    // every click triggers handleClickOutside. 
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <div ref={ref} className={styles} onClick={ClickHandler}>
            <div className={`infinity-select-input ${visible ? 'blue' : 'grey'}`}>
                <input 
                    autoComplete="off"
                    type='text' 
                    value={value == '' ? '' : rows[value]} 
                    placeholder={placeholder}
                    readOnly = {true}
                />
                <div className='infinity-down-arrow'>
                    <div className="material-icons">keyboard_arrow_down</div>
                </div>
            </div>
            {
                visible && 
                <div className='infinity-select-dropdown'>
                    {Object.keys(rows).map(row => <p key={row} id={row} onClick={ItemClickHandler}>{rows[row]}</p>)}          
                </div>
            }
        </div>
    )
}

export default BasicSelect;