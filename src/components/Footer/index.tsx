import styles from './styles'
import { BsGithub as GithubIcon} from 'react-icons/bs'

const Footer: React.FC = () => {
    return <styles.containerFooter>
        <a href="">Made by hiagomu on
            <GithubIcon className='icon'/>
        </a>
    </styles.containerFooter>
}

export default Footer