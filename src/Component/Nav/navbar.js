import React from "react";

import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <React.Fragment>
            <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#"><h2>FPTU<em>CAREERY</em></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <NavLink to="/" className="nav-link">
                    <span className="pcoded-mtext"> Trang chủ</span>
                    </NavLink>
                </li>

                <li class="nav-item">
                    <NavLink to="/job" className="nav-link">
                    <span className="pcoded-mtext"> Việc làm</span>
                    </NavLink>
                </li>

                <li class="nav-item"><a class="nav-link" href="about-us.html">Danh sách công ty</a></li>
                
                <li class="nav-item">
                    <NavLink to="/info" className="nav-link">
                    <span className="pcoded-mtext"> Tin tức</span>
                    </NavLink>
                </li>                   

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                    
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="team.html">Thông báo OJT</a>
                      <a class="dropdown-item" href="testimonials.html">Hướng dẫn đăng ký OJT</a>
                      <a class="dropdown-item" href="terms.html">Quy định kỳ OJT</a>
                    </div>
                </li>
                <li class="nav-item">
                    <NavLink to="/signin" className="nav-link">
                    <span className="pcoded-mtext"> Đăng nhập</span>
                    </NavLink>
                </li> 
            </ul>
          </div>
        </div>
      </nav>
    </header>
        </React.Fragment>
    )
}