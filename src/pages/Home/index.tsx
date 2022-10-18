import Header from '../../components/Header'
import styles from './styles'
import ethereumHome from '../../assets/ethereum_home.svg'
import { BsArrowRight as ExploreIcon } from 'react-icons/bs'
import Footer from '../../components/Footer'

const Home: React.FC = () => {
    return (
        <styles.main>
            <Header />
            <styles.welcomeWrapper>
                <styles.welcomeTextWrapper>
                    <h1>Olá mundo!</h1>
                    <h2>App desenvolvido para conhecer o ecosistema da Ethereum, explore DApps, conheça coleções novas e tendências da Blockchain</h2>
                    <button>
                        Explore
                        <ExploreIcon className='icon'/>
                    </button>
                </styles.welcomeTextWrapper>
                <img src={ethereumHome} alt="Home" />
            </styles.welcomeWrapper>
            <Footer />
        </styles.main>
    )
}

export default Home