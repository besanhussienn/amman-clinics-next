function Footer() {
    return (
        <footer id ="Contactus" className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
            <div className="max-w-6xl mx-auto px-6">
                {/* Main Footer Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-stone-800">
                    
                    {/* Column 1: Brand & Info */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-extrabold text-white tracking-tight">
                            Amman<span className="text-emerald-500">.</span>Clinics
                        </h2>
                        <p className="text-sm text-stone-400 leading-relaxed">
                            Your trusted platform for booking medical appointments and discovering top clinics and doctors across Amman with ease.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <ul className="flex flex-col gap-2 text-sm text-stone-400">
                            <li><a href="#About" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#clinics" className="hover:text-white transition-colors">Featured Clinics</a></li>
                            <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Support */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-bold text-white">Contact Us</h3>
                        <p className="text-sm text-stone-400">
                            Have questions or need support? Reach out to us anytime.
                        </p>
                        <a 
                            href="mailto:support@ammanclinics.com" 
                            className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                        >
                            support@ammanclinics.com
                        </a>
                    </div>

                </div>

                {/* Bottom Bar: Copyright */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
                    <p>© 2026 Amman Clinics. All rights reserved.</p>
                    <p>Designed with care for better healthcare in Amman.</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;