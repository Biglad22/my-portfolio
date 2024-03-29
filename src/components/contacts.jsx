import { IconGithub } from '../assets/IconGithub';
import { IconGmail } from '../assets/IconGmail';
import { IconLinkd } from '../assets/IconLinkd';
import '../style/contacts.css';

export function Contacts({visible}){
    return(
        <>
            <div className={visible ? 'contacts' : 'contacts invisible'} >
                <a href="mailto:emmanuelaberuagba22@gmail.com">
                    <IconGmail /> 
                </a>
                <a href="http://github.com/biglad22" target="_blank" rel="noopener noreferrer">
                    <IconGithub /> 
                </a>
                <a href="http://www.linkedin.com/in/emmanuel-aberuagba-a38925238" target="_blank" rel="noopener noreferrer"><IconLinkd /></a>
                 
            </div>
        </>
    )
}