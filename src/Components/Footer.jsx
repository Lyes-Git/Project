import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f8f8', padding: '20px', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h4>Jewelry Shop</h4>
                    <p>© 2020 - 2023</p>
                    <p>Privacy - Terms</p>
                </div>
                <div>
                    <p>Resources</p>
                    <ul>
                        <li>Product</li>
                        <li>Feature</li>
                        <li>Company</li>
                    </ul>
                </div>
                <div>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Sign up</button>
                    </form>
                    <div>
                        <p>Follow us:</p>
                        <p>[Icons Placeholder]</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
