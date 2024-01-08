import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
const Header = ({varients='transparent'}) => {
    useEffect(() => {
        window.onscroll = function(){
            const navbar = document.getElementById("topnav");
            if (navbar != null) {
                if (
                    document.body.scrollTop >= 50 ||
                    document.documentElement.scrollTop >= 50
                ) {
                    navbar.classList.add("nav-sticky");
                } else {
                    navbar.classList.remove("nav-sticky");
                }
            }
        }
    }, [])
    return (
        <>
            <nav  className="defaultscroll is-sticky" id="topnav">
                <div className="container relative">
                    <Link className="logo float-left" href="/">
                        <span className="inline-block dark:hidden">
                            <Image 
                                src="/assets/images/logo/logo-black.png" 
                                className="l-dark" 
                                height={34} 
                                width={120}    
                                alt="" 
                            />
                            <Image 
                                src="/assets/images/logo/logo-white.png" 
                                className="l-light" 
                                height={34} 
                                width={120}    
                                alt="" 
                            />
                        </span>
                        <img src="assets/images/logo-light.png" height="24" className="hidden dark:inline-block" alt="" />
                    </Link>

                    <div className="menu-extras hidden md:block">
                        <div className="menu-item">
                            <a className="navbar-toggle" id="isToggle">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <ul className="buy-button list-none mb-0 float-right">
                        <li className="inline mb-0">
                            <a href="#">
                                <span className="login-btn-primary"><span className="w-fit px-5 py-2 font-bold inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-slate-600/6 hover:bg-indigo-600 border border-indigo-600 hover:border-indigo-600 text-indigo-600 hover:text-white">Get Free Demo</span></span>
                                <span className="login-btn-light"><span className="w-fit px-4 py-2 font-bold inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-gray-50 hover:text-white hover:bg-indigo-600 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-indigo-600 dark:border-gray-700 dark:hover:border-gray-700">Get Free Demo</span></span> 
                            </a>
                        </li>
                    </ul>
                
                    <div id="navigation">
                        <ul className={`navigation-menu ${varients == 'dark' ? 'nav-dark' : 'nav-light' }`}>
                            <li><a href="/">Home</a></li>

                            <li className="parent-menu-item">
                                <a href="/trainers">Find Trainers</a>
                            </li>

                            <li className="parent-menu-item">
                                <a href="/blogs">Blogs</a>
                            </li>

                            <li>
                                <a href="/contact-us" className="sub-menu-item">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;