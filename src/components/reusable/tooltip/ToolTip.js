import React, {useState, useEffect, useRef} from 'react'

// Wrap this around an element to apply the tooltip to
// styles: bottom-left, bottom-right, top-left, top-right, left, right
// source: https://codesandbox.io/s/how-to-make-an-extremely-reusable-tooltip-component-with-react-and-nothing-else-7opo3?from-embed=&file=/src/Tooltip.css:0-2056
// styling: elements/tooltips.scss
const Tooltip = ({children, styles, content}) => {

    let timeout;
    const [active, setActive] = useState(false);
    const [trigger, setTrigger] = useState(false)
    
    // I had to put the setTimeout in a useEffect so I could clean it up in the case the component is unmounted
    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current){
            firstRender.current = false
            return
        }
        timeout = setTimeout(() => {
            setActive(true);
        }, 600);
        return () => {
            clearTimeout(timeout);
        };
    },[trigger])

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };
    
    return (
        <div className="Tooltip-Wrapper" onMouseEnter={() => setTrigger(prev => !prev)} onMouseLeave={hideTip} >
            {children}
            {active && (<div className={`Tooltip-Tip ${styles}`}>
                {content}
            </div>)}
        </div>
    );
};
  
export default Tooltip;
