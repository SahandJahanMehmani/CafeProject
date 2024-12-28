import './Footer.css'

export default function Footer() {
    return (
        <div id='footer' className="footer-container">
            <h2>ارتباط با ما</h2>
            <ul>
                <li>
                    <a href="tel:+989380707317">
                        <i className="fas fa-phone"></i> شماره تماس
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/cafe300mil/profilecard/?igsh=eWs2dW9qbnlmNjZz" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> اینستاگرام
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/989380707317" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i> واتس اپ
                    </a>
                </li>
            </ul>
        </div>
    );
}

