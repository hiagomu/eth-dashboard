import styles from './styles'
import ethereum from '../../assets/ethereum.png'

const Header: React.FC = () => {
    return <styles.header>
        <styles.wrapLogoNav>
            <styles.logo>
                <img src={ethereum} alt="Eth Dash logo" />
                <p>Eth Dash</p>
            </styles.logo>
            <styles.navBar>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">DApps</a>
                    </li>
                    <li>
                        <a href="">NFT Collections</a>
                    </li>
                    <li>
                        <a href="">My Collection</a>
                    </li>
                </ul>
            </styles.navBar>
        </styles.wrapLogoNav>
        <styles.connect>
            Connect
        </styles.connect>
    </styles.header>
}

export default Header