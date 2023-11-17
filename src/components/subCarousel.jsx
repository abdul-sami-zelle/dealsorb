import Carousel from 'react-bootstrap/Carousel';
import './subCarousel.css'



function SubCarousel() {
  return (
    <Carousel className='mainSubCarousel'>
      <Carousel.Item>
        <div style={{height:'450px', width:'100%',borderRadius:'50%'}}>
        <img src="https://img.freepik.com/free-vector/discount-hanging-price-tags-red-background_1017-27324.jpg?size=626&ext=jpg&ga=GA1.1.735021433.1693642284&semt=ais" style={{borderRadius:'20px'}}  height="100%" width='100%' alt="" srcset="" />
        </div>
        <Carousel.Caption>
          <div style={{ backgroundColor:'red',padding:'10px'}}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{height:'450px', width:'100%',borderRadius:'50%'}}>
        <img src="https://img.freepik.com/free-vector/modern-gift-voucher-template_23-2147943131.jpg?size=626&ext=jpg&ga=GA1.1.735021433.1693642284&semt=ais"  style={{borderRadius:'20px'}}   height="100%" width='100%' alt="" srcset="" />
        </div>
        <Carousel.Caption>
          <div style={{ backgroundColor:'red'}}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{height:'450px', width:'100%',borderRadius:'50%'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhItx6kp_2zNDdcUXd8RnxHBPjRnbN5u72o_rGYtyoqOT5znYFX8fcd0-qU0aeMcpRVj8&usqp=CAU" style={{borderRadius:'20px'}}   height="100%" width='100%' alt="" srcset="" />
        </div>
        <Carousel.Caption>
          <div style={{ backgroundColor:'red'}}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SubCarousel;