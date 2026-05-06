function Article(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date || "May 6, 2026"}</small>
            <p>{props.preview}</p>
        </article>
    );
}

export default Article