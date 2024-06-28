import appStyles from '../App/styles.module.css';
import art3 from './art-3.png';
import { Link } from 'react-router-dom';

export default function TermsPage() {
    return (
        <>
            <div className={appStyles.hero}  style={{backgroundImage:"url("+art3+")"}}>
                <div className={appStyles.heroContent}>
                    <div className={appStyles.content}>
                    <h1>Terms & Conditions</h1>
                    </div>
                </div>
            </div>
     
        <div className={appStyles.content}>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing Terra Major, you confirm that you have read, understood, and agreed to these Terms and Conditions in full. If you do not agree with any part of these terms, you must not download, install, or use the game.</p>

            <h2>2. Game License</h2>
            <p>Terra Major is provided to you free of charge for your personal, non-commercial use only. We grant you a non-exclusive, non-transferable license to download, install, and play Terra Major on your device in accordance with these terms. All rights, title, and interest in and to the game not expressly granted under this license remain with the developers.</p>

            <h2>3. User Responsibilities</h2>
            <ul>
                <li>You agree to use Terra Major for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the game.</li>
                <li>The game is provided "as is" and on an "as available" basis. You agree to play Terra Major at your own risk. The developers are not liable for any loss or damage arising from your use of the game, including, but not limited to, data loss or corruption.</li>
            </ul>

            <h2>4. User Accounts</h2>
            <p>- To access some features of the game, you may be required to create an account using an email address and password. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
            <p>- Your privacy is important to us. The only personal data we collect are your email and password, which are used for account creation and management purposes.</p>

            <h2>5. Data Deletion</h2>
            <p>Should you wish to delete your data from our records, you may do so by submitting a request to the developers. We will process your request in a timely manner, subject to any legal obligations to retain data.</p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>The developers disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. We do not guarantee that Terra Major will always be available, be uninterrupted, secure, or free from bugs or viruses.</p>

            <h2>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, the developers shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use of or inability to use the game.</p>

            <h2>8. Amendments to Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Your continued use of Terra Major after such changes signifies your acceptance of the new terms.</p>

            <h2>9. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which the developers are based, without giving effect to any principles of conflicts of law.</p>

            <p><Link to="/">Return Home</Link></p>
        </div>
        </>
    )
}