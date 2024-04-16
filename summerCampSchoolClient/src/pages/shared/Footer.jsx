import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="footer p-10 bg-[#101218] text-white">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="join">
              <input type="text" placeholder="Youremail@gmail.com" className="input md:input-md sm:input-sm input-bordered join-item md:w-full w-32 placeholder:text-base text-[#AEE5FF]" />
              <button className="btn bg-[#A3A3F5] hover:bg-[#A3A3F5] join-item md:btn-md sm:btn-sm">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>

      <footer className="lg:flex lg:items-center lg:justify-between lg:w-full lg:h-full lg:p-4 bg-[#101218] text-white">
        <Link to={`/`} className="btn btn-ghost text-xl text-[#ffffff]">ShutterCraft</Link>
        <aside className='lg:flex-grow'>
          <p className="text-center">Copyright © {year} - All rights reserved by ShutterCraft</p>
        </aside>
      </footer>



    </footer>
  );
};

export default Footer;