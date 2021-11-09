export default function Title(props) {
    return (
        <div className={props.className}>
            <div className="grid"></div>
            <div className="lines"></div>
            <h1>
            <span>ALEXI</span>
            <span>ALEXI</span>
            </h1>
            <h2>{props.title}</h2>
        </div>
    )
};