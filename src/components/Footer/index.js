import Button from '../elements/Button';
import './footer-style.css';
import {FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="footer-component">
            <div className="footer-content-wrapper content-center"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <h4>Made with 💜 by @LeetQuestion</h4>
                <div className="footer-options-wrapper"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.4rem'
                    }}
                >


                {/* SOCIAL LINKS */}


                <Button type="plain" style={{ backgroundColor: 'black', color: 'white' }} onClick={() => window.open('https://twitter.com/LeetQuestion')}>
                    <FaTwitter /> Join Twitter
                </Button>
                <Button type="plain" 
                    onClick={() => window.open('https://github.com/Supsource/LeetQuestion/issues')}>
                    <FaGithub /> Found issues? Contribute
                </Button>
                <Button type="plain" 
                style={{ backgroundColor: 'black', color: 'white' }}
                    onClick={() => window.open('https://www.instagram.com/iam_supr7/')}>
                    <FaInstagram /> Join Instagram
                </Button>
                </div>
            </div>
        </footer>
    )
}