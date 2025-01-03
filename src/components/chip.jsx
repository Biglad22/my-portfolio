import '../style/base.css';
import {FaDownload} from 'react-icons/fa';

export function Chip({text, emphasize, link, linkPath, linkText, downloadable, downloadLink, downloadText}) {
    return(
        <>  
            <div className={ (emphasize ? (downloadable ? "chip-wrapper downloadable" : "chip-wrapper emphasize") : (downloadable ? "chip-wrapper downloadable" : "chip-wrapper"))} >
                {

                    !link ? (<small>{text}</small>) 
                    : (downloadable ? (<a href={downloadLink} download ="Aberuagba Emmanuel CV " ><small className='downloder'><span>{downloadText}</span><FaDownload /></small></a>) 
                    :  (<a href={linkPath} download><small>{linkText}</small></a>))          
                }
                
            </div>
        </>
    )
}