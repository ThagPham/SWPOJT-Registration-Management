import React from "react";
import Nav from "../Component/Nav/navbar";

export default function JobDetail(){
    return(
        <React.Fragment>
    <Nav/>
    <div class="page-heading about-heading header-text defaultBackground">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">             
              <h2>Intern ship</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="products">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-8">
              <p class="lead">
                   <i class="fa fa-map-marker"></i> HoChi Minh &nbsp;&nbsp;
                   <i class="fa fa-calendar"></i> 20-06-2020 &nbsp;&nbsp;
                   <i class="fa fa-file"></i> OJT
              </p>

              <br/>
              <br/>
              
              <div class="form-group">
                <h5>Thông tin tuyển dụng</h5>
              </div>

              <p>
                - Lập trình và phát triển ứng dụng trên nền tảng Java theo hướng dẫn của phòng lập trình;<br/>
                - Được tham gia nghiên cứu, phát triển các công nghệ mã nguồn mở vào dự án về thương mại điện tử, BigData, dịch vụ hành chính công theo hướng dẫn.<br/>
                - Được tham gia vào phân tích thiết kế các hệ thống.<br/>
                - Nghiên cứu ngôn ngữ lập trình và phát triển sản phẩm theo hướng dẫn của cán bộ đào tạo.<br/>
                - Các công việc khác theo sự phân công yêu cầu của cán bộ đào tạo.<br/>                
              </p>   
              <br/>
              <br/>
          </div>

          <div class="col-md-3 col-sm-4">
            <div class="contact-form">
              <div class="form-group">
                <button type="submit" class="filled-button btn-block">Đăng ký</button>
              </div>
            </div>

            <div>
              <img src="assets/images/logo-fpt.jpg" alt="" class="img-fluid wc-image"/>
            </div>

            <br/>

            <ul class="social-icons text-center">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-envelope"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa fa-behance"></i></a></li>
            </ul>

            <br/>
            <br/>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="section-heading">
              <h2>Thông tin công ty</h2>
            </div>

            <p class="lead">
                   <i class="fa fa-map-marker"></i> Ho Chi Minh 
              </p>

            <p>FPT Software thành lập năm 1999, là công ty thành viên của FPT, Tập đoàn Công nghệ hàng đầu của Việt Nam. Sau 17 năm thành lập FPT Software hiện đang là công ty phần mềm lớn nhất của Việt Nam và đứng trong Top 100 Nhà cung cấp dịch vụ Outsourcing toàn cầu do International Association of Outsourcing Professionals (IAOP) đánh giá.</p>
            <br/>
            <p>Là công ty chuyên xuất khẩu dịch vụ phần mềm, FPT Software cung cấp các dịch vụ phát triển phần mềm và bảo trì, triển khai ERP, QA, chuyển đổi ứng dụng, hệ thống nhúng, điện toán di động, điện toán đám mây… trong nhiều lĩnh vực như: Tài chính ngân hàng, Viễn thông, Y tế, Chế tạo, Công nghiệp xe hơi, Dịch vụ công… Hiện FPT Software đang tập trung nghiên cứu và phát triển dịch vụ CNTT dựa trên những nền tảng công nghệ mới như IoT, S.M.A.C, cho các lĩnh vực sản xuất máy bay, sản xuất ô tô, ngân hàng, truyền hình vệ tinh, viễn thông trên phạm vi toàn cầu. Công ty hiện đã và đang cung cấp dịch vụ cho khoảng 450 khách hàng là các tập đoàn lớn trên thế giới, trong đó có 43 khách hàng nằm trong danh sách Fortune Global 500.</p>
          </div>

          <div class="col-md-3">
            <div class="section-heading">
              <h2>Contact Details</h2>
            </div>
            
            <div class="left-content">
              <p>
                <span>Tên</span>

                <br/>

                <strong>Long</strong>
              </p>

              <p>
                <span>Số điện thoại</span>

                <br/>
                
                <strong>
                  <a href="tel:123-456-789">123-456-789</a>
                </strong>
              </p>       

              <p>
                <span>Email</span>

                <br/>
                
                <strong>
                  <a href="mailto:john@carsales.com">john@carsales.com</a>
                </strong>
              </p>

              <p>
                <span>Website</span>

                <br/>
                
                <strong>
                  <a href="https://www.fpt-software.com/">https://www.fpt-software.com/</a>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </React.Fragment>
    )
}