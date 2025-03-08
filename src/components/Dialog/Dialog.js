import FancyBorder from "../FancyBorder/FancyBorder";

function Dialog({ title, message }) {
    return (
        <FancyBorder color="blue">
            <h1>{title}</h1>
            <p>{message}</p>
        </FancyBorder>
    );
}

export default Dialog