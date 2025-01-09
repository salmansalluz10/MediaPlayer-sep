import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-3">
          <h5>
            <i className="fa-solid fa-music me-2"></i>Media-Player
          </h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.0.2.</p>
        </div>

        {/* Column 2 */}
        <div className="col-md-3 d-flex flex-column ps-5">
          <h5>Links</h5>
          <Link to={'/'} style={{color:"white",textDecoration:"none"}}>Landing Page</Link>
          <Link to={'/home'} style={{color:"white",textDecoration:"none"}}>Home Page</Link>
          <Link to={'/history'} style={{color:"white",textDecoration:"none"}}>History Page</Link>
        </div>

        {/* Column 3 */}
        <div className="col-md-3 d-flex flex-column" >
          <h5>Guides</h5>
          <a style={{color:"white",textDecoration:"none"}} href="https://react.dev/" target='_blank'>React</a>
          <a style={{color:"white",textDecoration:"none"}} href="https://react-bootstrap.netlify.app/" target='_blank'>React bootstrap</a>
          <a style={{color:"white",textDecoration:"none"}} href="https://www.npmjs.com/package/react-router-dom" target='_blank'>React Router Dom</a>
        </div>

        {/* Column 4 */}
        <div className="col-md-3 d-flex flex-column">
          <h5>Contact Us</h5>
          <div className='d-flex'>
            <input type="text" placeholder='Enter your email' className='form-control me-4'/>
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex mt-3 justify-content-between'>
            <a href=""><i class="fa-brands fa-twitter" style={{color:"white",textDecoration:"none"}}></i></a>
            <a href=""><i class="fa-brands fa-instagram" style={{color:"white",textDecoration:"none"}}></i></a>
            <a href=""><i class="fa-brands fa-facebook" style={{color:"white",textDecoration:"none"}}></i></a>
            <a href=""><i class="fa-brands fa-linkedin" style={{color:"white",textDecoration:"none"}}></i></a>
            <a href=""><i class="fa-brands fa-github" style={{color:"white",textDecoration:"none"}}></i></a>
          </div>
        </div>
      </div>
      <p className=' text-center mt-3'>Copyright @copy May 2024 Batch,Media Player.Built with React</p>
    </div>
  );
};

export default Footer;
