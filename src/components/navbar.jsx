import '../style/base.css';
import { Contacts } from './contacts';
export function Nav() {
    return(
        <>
            <nav>
                <Contacts visible={true} />
                <a href="https://youquest.netlify.app" title="dare to play?" target='blank'>play game</a>
            </nav>
        </>
    )
}