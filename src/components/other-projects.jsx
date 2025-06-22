export function OtherProjects({ name, link }) {
    return (
        <>
            <div className="other-proj-wrapper">
                <p className="card-link">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
                </p>
                <iframe
                    src={link}
                    loading="lazy"
                    frameborder="0"
                    title={`live page of ${name}`}
                ></iframe>
            </div>
        </>
    );
}
