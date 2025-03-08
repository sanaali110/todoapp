// its a wrapper component that adds extra functionality to any other component

function FancyBorder({ color,children }) {
    const borderColor = color === undefined ? "black" : color
    return (
        <div style={{ border: `1px solid ${borderColor}` }}>
            {children}
        </div>
    );
}

export default FancyBorder