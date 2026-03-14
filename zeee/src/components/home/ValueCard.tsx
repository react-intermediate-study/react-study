interface ValueCardProps {
    title : string
    description : string
}

export default function ValueCard ({
    title,
    description,
}:ValueCardProps) {
    return(
        <article>
        <h3>{title}</h3>
        <p>{description}</p>
        </article>
    )
}