import React from 'react'

import "../scroll.css"
const Carousel = () => {
  return (
    <section className='my-10'>
    <h2 className="text-center text-4xl font-extrabold mb-10">Trusted By Leading Brands
</h2>
      <div class="wrapper">
  <img src="./brand-logos/1.png"  class="item item1"></img>
  <img  src="./brand-logos/2.png"class="item item2"></img>
  <img src="./brand-logos/3.png" class="item item3"></img>
  <img src="./brand-logos/4.png" class="item item4"></img>
  <img src="./brand-logos/5.png" class="item item5"></img>
  <img src="./brand-logos/6.png" class="item item6"></img>
  <img src="./brand-logos/7.png" class="item item7"></img>
  {/* <img src="./brand-logos/8.png" class="item item8"></img> */}
  {/* <img src="./brand-logos/9.png"  class="item item9"></img> */}
</div>
    </section>
  )
}

export default Carousel
