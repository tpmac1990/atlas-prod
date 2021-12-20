import React, {useState} from 'react'

// Wrap this around an element to apply the tooltip to
// styles: bottom-left, bottom-right, top-left, top-right, left, right
// source: https://codesandbox.io/s/how-to-make-an-extremely-reusable-tooltip-component-with-react-and-nothing-else-7opo3?from-embed=&file=/src/Tooltip.css:0-2056
// styling: elements/tooltips.scss
const Tooltipp = ({children, styles, content}) => {

    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
        setActive(true);
        }, 600);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };
    
    return (
        <div className="Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={hideTip} >
            {children}
            {active && (<div className={`Tooltip-Tip ${styles}`}>
                {content}
            </div>)}
        </div>
    );
};
  
export default Tooltipp;
