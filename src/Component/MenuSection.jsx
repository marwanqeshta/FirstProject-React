import React, { Component } from 'react'
import img1 from './img/1.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import img7 from './img/7.png';
import img8 from './img/8.png';
import img9 from './img/9.png';
import img10 from './img/10.png';
import img11 from './img/11.png';
import img12 from './img/12.png';
import Menu from '../mock/Menu';


export default class MenuSection extends Component {
  render() {
    return (
      <div className='container1' id='Menu'>
        <div className='Title'>
            <h3>Straight From Kitchen</h3>
            <p>Our Menu</p>
        </div>
        <div className='Menu'>
        <div className='right-menu'>
            <div className='main-menu'>
                <>
                <div><img src={img1} alt="" /></div>
                 <Menu text1='Lorem ipsum dolor sit amet' text2='Lorem ipsum dolor sit amet'/>
                <div className='line1'></div>
                <Menu price='Rs 222'/>
                </>
            </div>
            <div className='main-menu'>
                <>
                <div><img src={img9} alt="" /></div>
                 <Menu text1='Vivamus sodales augue vita' text2='Lorem ipsum dolor sit amet'/>
                <div className='line2'></div>
                <Menu price='Rs 590'/>
                </>
            </div>
            <div className='main-menu'>
                <>
                <div><img src={img3} alt="" /></div>
                 <Menu text1='Pellentesque semper semper' text2='Lorem ipsum dolor sit amet'/>
                <div className='line3'></div>
                <Menu price='Rs 130'/>
                </>
            </div>
            <div className='main-menu'>
                <>
                <div><img src={img4} alt="" /></div>
                 <Menu text1='Vestibulum est turpis' text2='Lorem ipsum dolor sit amet'/>
                <div className='line4'></div>
                <Menu price='Rs 135'/>
                </>
            </div>
            <div className='main-menu'>
                <>
                <div><img src={img5} alt="" /></div>
                 <Menu text1='Phasellus convallis maximus' text2='Lorem ipsum dolor sit amet'/>
                <div className='line5'></div>
                <Menu price='Rs 148'/>
                </>
            </div>
            <div className='main-menu'>
                <>
                <div><img src={img6} alt="" /></div>
                 <Menu text1='Nullam elementum magna' text2='Lorem ipsum dolor sit amet'/>
                <div className='line6'></div>
                <Menu price='Rs 200'/>
                </>
            </div>
        </div>
        <div className='left-menu'>
        <div className='main-menu'>
                <>
                <div><img src={img7} alt="" /></div>
                 <Menu text1='Phasellus convallis maximus' text2='Lorem ipsum dolor sit amet'/>
                <div className='line7'></div>
                <Menu price='Rs 222'/>
                </>
            </div>
            <div className='main-menu'>
                <>
                <div><img src={img8} alt="" /></div>
                 <Menu text1='Vestibulum est turpis' text2='Lorem ipsum dolor sit amet'/>
                <div className='line8'></div>
                <Menu price='Rs 148'/>
                </>
            </div>
            <div className='main-menu'>
                <>
                <div><img src={img9} alt="" /></div>
                 <Menu text1='Vivamus sodales augue vita' text2='Lorem ipsum dolor sit amet'/>
                <div className='line9'></div>
                <Menu price='Rs 135'/>
                </>
            </div>
            <div className='main-menu'>
                <>
                <div><img src={img10} alt="" /></div>
                 <Menu text1='Lorem ipsum dolor sit amet' text2='Lorem ipsum dolor sit amet'/>
                <div className='line10'></div>
                <Menu price='Rs 590'/>
                </>
            </div>
            <div className='main-menu'>
                <>
                <div><img src={img11} alt="" /></div>
                 <Menu text1='Nullam elementum magna' text2='Lorem ipsum dolor sit amet'/>
                <div className='line11'></div>
                <Menu price='Rs 200'/>
                </>
            </div>
            <div className='main-menu'>
                <>
                <div><img src={img12} alt="" /></div>
                 <Menu text1='Pellentesque semper semper' text2='Lorem ipsum dolor sit amet'/>
                <div className='line12'></div>
                <Menu price='Rs 130'/>
                </>
            </div>

            

        </div>
        </div>
        
      </div>
    )
  }
}
