import "./styles.css"
const Footer = ({data:{copyright,autor}}) => {
    return (
        <footer className="mt-5">
            <p>{copyright} | <a  target="_blank" rel="noreferrer">{autor}</a></p>
        </footer>
    )
}

export default Footer