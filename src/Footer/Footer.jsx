

const Footer = () => {
    return (
        <footer className="footer p-10  bg-gradient-to-r from-cyan-200 to-cyan-500 rounded-lg  text-base-content" >
        <aside>
         <img src="https://i.ibb.co/nzHPCbL/righting-check-logo-design-template-7dc687a42c30ed98e888feaa3e67f8a4-screen.jpg" className="h-[100px] rounded-2xl" alt="" />
          <p className="font-Lobstar text-xl" >A Trustful platform for future<br/>Providing reliable tech since 1992</p>
          <p className="font-Lobstar" >Copyright © 2023 - Maded by mehedi islam niloy</p>
        </aside> 
        <nav className="text-xl font-ubuntu " >
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav className="text-xl font-ubuntu " >
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav className="text-xl font-ubuntu " >
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;