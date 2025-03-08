import './splitview.css';

const SplitView = ({ leftContent, rightContent }) => {
    return <div className="container">
        <div className="left">{leftContent}</div>
        <div className="right">{rightContent}</div>
    </div>
}

export default SplitView