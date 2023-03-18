import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const AppFooter = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Fgear
              </h6>
              <p>
                Được biết đến là đơn vị ủy quyền bán lẻ chính thức tại Việt Nam, chuyên kinh doanh các sản phẩm Laptop Gaming cao cấp,
                PC đồ họa, linh-phụ kiện, thiết bị giải trí của nhiều nhãn hàng lớn
                như Acer, Asus, Apple, Dell, HP, Lenovo, MSI, Gigabyte, Razer, HyperX, Logitech, Samsung…
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Giới thiệu</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Shop
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tuyển dụng
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Phương thức thanh toán
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tra cứu đơn vận
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Chính sách</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Trả góp
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Giao hàng
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Đổi trả
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bảo hành
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Địa chỉ cửa hàng</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                08 Tự Lập, Phường 4, Tân Bình, TP.HCM
              </p>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                10A1 Ngõ 49, Linh Lang, Ba Đình, Hà Nội
              </p>
              <h6 className='text-uppercase fw-bold mb-4'>Liên hệ</h6>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                Mail: sales@thenewfgear.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' />Hottile: 028 7108 1881 - 093 373 1881
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: Fgear| All rights reserved | Chứng nhận đăng ký doanh nghiệp số : 0316898252 do sở KH và ĐT TP Hồ Chí Minh cấp.

      </div>
    </MDBFooter>
  )
}

export default AppFooter