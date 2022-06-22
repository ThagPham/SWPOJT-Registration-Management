import React from "react";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";
import Job from "./Job";
import Nav from "../Component/Nav/navbar";
//import FooterPage from "../Component/footer/footer";

export default function Home(){
    return(
        <React.Fragment>         
    
    
    <Nav/>
    
    {/* <div class="banner header-text">
      <div class="owl-banner owl-carousel">
        <div class="banner-item-01">
          <div class="text-content">
            <h4>Find your car today!</h4>
            <h2>Lorem ipsum dolor sit amet</h2>
          </div>
        </div>
        <div class="banner-item-02">
          <div class="text-content">
            <h4>Fugiat Aspernatur</h4>
            <h2>Laboriosam reprehenderit ducimus</h2>
          </div>
        </div>
        <div class="banner-item-03">
          <div class="text-content">
            <h4>Saepe Omnis</h4>
            <h2>Quaerat suscipit unde minus dicta</h2>
          </div>
        </div>
      </div>
    </div> */}

    <div class="homePage">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">                      
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="latest-products">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Việc làm</h2>
              <a href="jobs.html">Xem thêm<i class="fa fa-angle-right"></i></a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-item">
                <NavLink to="/jobDetail" className="nav-link">
                  <img src="assets/images/logo-fpt.jpg" alt=""/>
                </NavLink>
              <div class="down-content">
                <NavLink to="/jobDetail" className="nav-link">
                <h4>Intern ship</h4>
                </NavLink>               
                <h6>$60 000</h6>

                <h4><small><i class="fa fa-briefcase"></i> Developer <br/> <strong><i class="fa fa-building"></i>FSoft</strong></small></h4>

                <small>
                     <strong title="Posted on"><i class="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Type"><i class="fa fa-file"></i> OJT</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                </small>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="product-item">
              <a href="job-details.html"><img src="assets/images/logo-fpt.jpg" alt=""/></a>
              <div class="down-content">
                <a href="job-details.html"><h4>Intern ship</h4></a>

                <h6>$60 000</h6>

                <h4><small><i class="fa fa-briefcase"></i> Developer <br/> <strong><i class="fa fa-building"></i>FSoft</strong></small></h4>

                <small>
                     <strong title="Posted on"><i class="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Type"><i class="fa fa-file"></i> OJT</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                </small>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="product-item">
              <a href="job-details.html"><img src="assets/images/logo-fpt.jpg" alt=""/></a>
              <div class="down-content">
                <a href="job-details.html"><h4>Intern ship</h4></a>

                <h6>$60 000</h6>

                <h4><small><i class="fa fa-briefcase"></i> Developer <br/> <strong><i class="fa fa-building"></i>FSoft</strong></small></h4>

                <small>
                     <strong title="Posted on"><i class="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Type"><i class="fa fa-file"></i> OJT</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<div class="services">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Tin tức</h2>

              <a href="blog.html">Xem thêm<i class="fa fa-angle-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item">
              <a href="#" class=""><img src="assets/images/blog-1-370x270.jpg" class="img-fluid" alt=""/></a>

              <div class="down-content">
                <h4><a href="#">Tin tuyển dụng tháng 5</a></h4>

                <p> Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service-item">
              <a href="#" class="services-item-image"><img src="assets/images/blog-2-370x270.jpg" class="img-fluid" alt=""/></a>

              <div class="down-content">
                <h4><a href="#">Tin tuyển dụng tháng 6</a></h4>

                <p> Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service-item">
              <a href="#" class="services-item-image"><img src="assets/images/blog-3-370x270.jpg" class="img-fluid" alt=""/></a>

              <div class="down-content">
                <h4><a href="#">Tin tuyển dụng tháng 7</a></h4>

                <p> Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/owl.js"></script> */}
    
    {/* <div>
          <FooterPage/>
        </div> */}
        </React.Fragment>
    )
}