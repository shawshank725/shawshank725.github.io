import '@styles/Heading.css';

type HeadingProp = {
    heading: string;
}
export default function Heading({heading}: HeadingProp) {
    return (
        <div className="heading">
            {heading}
        </div>
    )
}