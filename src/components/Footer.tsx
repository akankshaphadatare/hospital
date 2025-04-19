"use client";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-300 text-white py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
                <div>
                    <h3 className="text-2xl font-bold">Smart Hospital</h3>
                    <p className="text-white mt-2">"Smart Care for Smart Choices: Where Your Health Is Our Priority."</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-x-6 md:space-y-0">
                        <a href="#" className="text-white hover:underline">About Us</a>
                        <a href="#" className="text-white hover:underline">Home</a>
                        <a href="#" className="text-white hover:underline">Doctors</a>
                        <a href="#" className="text-white hover:underline">Services</a>
                        <a href="#" className="text-white hover:underline">Appointments</a>
                        <a href="#" className="text-white hover:underline">Testimonials</a>
                        <a href="#" className="text-white hover:underline">Gallery</a>
                        <a href="#" className="text-white hover:underline">Contact Us</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-4">
                <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4">
                    <input
                        type="email"
                        placeholder="Subscribe for updates"
                        className="p-2 rounded-l border border-gray-400 focus:outline-none w-full md:w-1/3"
                    />
                    <button className="bg-black-600 text-white p-2 rounded-r hover:bg-blue-500 mt-2 md:mt-0">Subscribe</button>
                </div>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.194 0 3.582.012 4.851.07 1.266.058 2.08.287 2.565.478.576.243 1.02.553 1.471 1.004.451.451.762.895 1.004 1.471.191.485.42 1.299.478 2.565.058 1.269.07 1.657.07 4.851s-.012 3.582-.07 4.851c-.058 1.266-.287 2.08-.478 2.565-.243.576-.553 1.02-1.004 1.471-.451.451-.895.762-1.471 1.004-.485.191-1.299.42-2.565.478C8.418 2.175 8.806 2.163 12 2.163zm0-2.163C8.687 0 8.252.011 7.02.072 4.787.166 3.37.57 2.18 1.24 1.005 1.914.458 3.237.18 4.694.002 5.707 0 7.278 0 12s.002 6.293.18 7.306c.279 1.457.825 2.78 1.998 3.454 1.19.675 2.606 1.072 4.88 1.167 1.178.061 1.613.072 4.85.072s3.672-.011 4.85-.072c2.274-.095 3.69-.492 4.88-1.167 1.172-.674 1.719-1.997 1.998-3.454.179-1.013.18-2.582.18-7.306s-.001-6.293-.18-7.306C22.171.493 21.725.17 20.68 1.03c-1.19.675-2.606 1.072-4.88 1.167C16.613.288 16.179 0 12 0zm0 5.839c-3.725 0-6.613 2.888-6.613 6.613s2.888 6.613 6.613 6.613 6.613-2.888 6.613-6.613S15.725 5.839 12 5.839zm0 11.66c-2.767 0-5.047-2.237-5.047-5.047S9.233 7.405 12 7.405s5.047 2.237 5.047 5.047-2.237 5.047-5.047 5.047zm4.74-9.127a1.532 1.532 0 100-3.064 1.532 1.532 0 000 3.064z" />
                    </svg>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h21.35C23.407 24 24 23.407 24 22.675v-21.35C24 .593 23.407 0 22.675 0zm-3.788 24H16.04v-10.525h3.124l.465-3.626h-3.589V6.569c0-1.046.291-1.759 1.796-1.759h1.915V2.039C19.659 2 18.71 2 17.76 2c-2.01 0-3.375 1.161-3.375 3.295v1.845h-2.269v3.626h2.22V24h3.626z" />
                    </svg>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10.167 10.167 0 01-2.825.775 4.935 4.935 0 002.163-2.724 10.174 10.174 0 01-3.127 1.144 4.918 4.918 0 00-8.39 4.482A13.938 13.938 0 011.671 3.149 4.916 4.916 0 003.195 8.19 4.904 4.904 0 012.3 7.785v.061a4.917 4.917 0 003.946 4.828A4.897 4.897 0 012.5 12a4.936 4.936 0 00.923.09 4.918 4.918 0 004.59-3.418 9.86 9.86 0 002.342-.002A4.915 4.915 0 0017.79 21c-1.295.194-2.66.196-3.99.003A14.028 14.028 0 0024 12 13.932 13.932 0 0024 12z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.516v-5.571c0-1.33-.024-3.046-1.853-3.046-1.853 0-2.137 1.443-2.137 2.918v5.699H10.54V9h3.381v1.553h.048c.47-.888 1.622-1.82 3.33-1.82 3.557 0 4.216 2.9 4.216 6.673v5.046l-.11-.001zM5.339 7.57c-1.13 0-1.733-.735-1.733-1.661 0-.956.61-1.765 1.579-1.765 1.307 0 1.733.796 1.733 1.762 0 .903-.569 1.664-1.628 1.664zm1.88 1.513H3.849v11.37h3.37v-11.37zM12 3c0-.346 0-.692-.014-1.034-1.799.00-3.418 1.12-4.206 2.843-1.08.197-1.125 1.42-1.125 2.16v11.037h3.363V12.788s.012-4.652 0-5z" />
                    </svg>
                </a>
            </div>

            <div className="text-center mt-6">
                <p className="text-white">© 2025 Smart Hospital. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;