import "../style/base.css";
import { FaDownload } from "react-icons/fa";
import clsx from "clsx";

export function Chip({
    text,
    emphasize,
    link,
    linkPath,
    linkText,
    downloadable,
    downloadLink,
    downloadText,
}) {
    const chipWrapper = clsx(
        "chip-wrapper",
        downloadable && "downloadable",
        !downloadable && emphasize && "emphasize"
    );
    return (
        <>
            <div className={chipWrapper}>
                {!link ? (
                    <small>{text}</small>
                ) : downloadable ? (
                    <a href={downloadLink} download="Aberuagba Emmanuel CV ">
                        <small className="downloder">
                            <span>{downloadText}</span>
                            <FaDownload />
                        </small>
                    </a>
                ) : (
                    <a href={linkPath} download>
                        <small>{linkText}</small>
                    </a>
                )}
            </div>
        </>
    );
}
