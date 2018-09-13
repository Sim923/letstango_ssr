import React, { Component } from "react";
import { injectIntl, intlShape } from 'react-intl';
import * as constants from '../../helpers/constants';

class Menu extends Component {

  render() {



    const pathName      = constants.getPathName();
    const AllCategories = this.props.intl.formatMessage({id: 'AllCategories'});
    const MobilesTablets= this.props.intl.formatMessage({id: 'MobilesTablets'});
    const Gadgets       = this.props.intl.formatMessage({id: 'Gadgets'});
    const Gaming        = this.props.intl.formatMessage({id: 'Gaming'});
    const Electronics   = this.props.intl.formatMessage({id: 'Electronics'});
    const Photography   = this.props.intl.formatMessage({id: 'Photography'});
    const HomeOutdoors  = this.props.intl.formatMessage({id: 'HomeOutdoors'});
    const SportsFitness = this.props.intl.formatMessage({id: 'SportsFitness'});
    const FashionBeauty = this.props.intl.formatMessage({id: 'FashionBeauty'});
    const BabyKids      = this.props.intl.formatMessage({id: 'BabyKids'});



    return (
    <section id="header-base">
    <div className="main container">
        <nav id="primary-menu">
            <ul className="nav-category">
           
                <li className="nav-header">
                   
                   <div className="pull-left-menu-brand">
                    <a href="https://www.letstango.com/">
                        <img alt="" src="/images/float-logo.png"/>
                    </a>
                   </div>              
                    <div className="nav-bar">
                        <i className="top"></i>
                        <i className="middle"></i>
                        <i className="base"></i>
                    </div>
                                    
                </li>
                
                
                <li className="user-detail">
                
                     
                    <div className="user-displayg">
                    Hi dhanesh!
                    <span className="user-mail-display">dhanesh@letstango.com</span>
                    </div>
                    
                </li>
            
        
            
                            
                    
                <li className="mbob-head-icons category-wrapper">
                    <ul className="inline-list-icons">
                        <li>
                            <a className="" href="#">
                            <i className="fa fa-home " ></i>
                            <span className="menuTitle">Home</span>
                            </a>
                        </li>
                    
                        <li >
                            <a className="" href="#">
                                <i className="fa fa-user " ></i>
                                <span className=" menuTitle">Account</span>
                            </a>
                        </li>
                        
                        <li >
                            <a  className="">
                                <i className="fa fa-shopping-cart " ></i>
                                <span className="menuTitle">Cart</span>
                            </a>
                        </li>
                        
                        <li >
                            <a  className="">
                            <i className="fa fa-heart " ></i>
                            <span className=" menuTitle">Wishlist</span>
                            </a>
                        </li>
                    </ul>
                </li>
            
            
            
            
                <li className="category-wrapper d-none d-md-inline-block" >
                    <a>
                        <i className="fa fa-globe sm-icon icon-primary-style"></i> 
                        {AllCategories}                  
                         <i className="fa fa-chevron-down"> </i>
                            <i className="fa fa-angle-right"></i>
                    </a>
                    <div className="dropdown-wrapper">
                        
                        <ul className="nav-subcategory row">
                            <li className="list-navigation">
                                <a>Top Categories </a>
                                <ul className="nav-items">
                                <li><a href="/mobiles-tablets">{MobilesTablets}</a></li>
                                <li><a href="/gadgets">{Gadgets} </a></li>
                                <li><a href="/gaming">{Gaming} </a></li>
                                <li><a href="/electronics">{Electronics} </a></li>
                                <li><a href="/photography">{Photography} </a></li>
                                <li><a href="/home-outdoors">{HomeOutdoors}</a></li>
                                <li><a href="/sports-fitness">{SportsFitness}</a></li>
                                <li><a href="/fashion-beauty">{FashionBeauty}</a></li>
                                <li><a href="/baby-kids">{BabyKids}</a></li>
                                </ul>
                         
                            </li>
                            
                            <li className="brand-menu">
                                <a>Top Brands </a>
                                <ul className="nav-items">
                                 <div id="megamenu-brand-logo" className="row">
                                    <div className="col-4">
                                        <a href="#"><img src="/images/brand1.png" alt=""/></a>
                                    </div>
                                    
                                    <div className="col-4">
                                        <a href="#"><img src="/images/brand2.png" alt=""/></a>
                                    </div>
                                    
                                    <div className="col-4">
                                        <a href="#"><img src="/images/brand3.png" alt=""/></a>
                                    </div>
                                    
                                    <div className="col-4">
                                        <a href="#"><img src="/images/brand4.png" alt=""/></a>
                                    </div>
                                    
                                    <div className="col-4">
                                        <a href="#"><img src="/images/brand5.png" alt=""/></a>
                                    </div>
                                    
                                    <div className="col-4">
                                        <a href="#"><img src="/images/brand6.png" alt=""/></a>
                                    </div>
                                    
                                    <div className="col-4">
                                        <a href="#"><img src="/images/brand7.png" alt=""/></a>
                                    </div>
                                    
                                    <div className="col-4">
                                        <a href="#"><img src="/images/brand8.png" alt=""/></a>
                                    </div>
                                    
                                    <div className="col-4">
                                        <a href="#"><img src="/images/brand1.png" alt=""/></a>
                                    </div>
                                    
                                 </div>  
                               </ul>
                            </li>
                            
                            
                                <li className="featured-ad-big"><a target="_blank" href="#"><img alt="Global Letstango" src="/images/allcategory-banner-large.jpg"/></a>
                                </li>
                                
                                <li className="featured-ad-small"><a target="_blank" href="#"><img alt="Global Letstango" src="/images/allcategory-banner-small.jpg"/></a>
                                </li>
                            </ul>

                    </div>
                       
                </li>
                <li className="category-wrapper">
                
               
                <i className="fa fa-arrow-left icon-back"></i> 
                    <a href="/mobiles-tablets">
                        {MobilesTablets} 
                        <i className="fa fa-chevron-down"> </i>
                        <i className="fa fa-angle-right"></i>
                    </a>
                
                <div className="dropdown-wrapper">
                    <ul className="nav-subcategory">
                        
                        
                        
                        
                        <li><a href="/mobiles-tablets/mobiles">Mobiles </a>
                            <ul className="nav-items">
                                
                                <li className="list-header"><a href="/mobiles-tablets/mobiles">View All Products</a></li>
                                <li><a href="/mobiles-tablets/mobiles/apple">Apple </a></li>
                                <li><a href="/mobiles-tablets/mobiles/samsung">Samsung </a></li>
                                <li><a href="/mobiles-tablets/mobiles/huawei">Huawei </a></li>
                                <li><a href="/mobiles-tablets/mobiles/lenovo">Lenovo </a></li>
                                <li><a href="/mobiles-tablets/mobiles/xiaomi">Xiaomi</a></li>
                                <li><a href="/mobiles-tablets/mobiles/sony">Sony </a></li>
                                <li><a href="/mobiles-tablets/mobiles">View All </a></li>
                            </ul>
                       
                        </li>
                        
                        
                        <li><a href="/mobiles-tablets/tablets"> Tablets </a>
                            <ul className="nav-items">
                                <li className="list-header"><a href="/mobiles-tablets/tablets">View All Products</a></li>
                                <li><a href="/mobiles-tablets/tablets/apple">iPad</a></li>
                                <li><a href="/mobiles-tablets/tablets/samsung">Samsung </a></li>
                                <li><a href="/mobiles-tablets/tablets/lenovo">Lenovo </a></li>
                                <li><a href="/mobiles-tablets/tablets/acer">Microsoft</a></li>
                                <li><a href="/mobiles-tablets/tablets/e-readers">E-readers</a></li>
                                <li><a href="/mobiles-tablets/tablets">View All </a></li>
                            </ul>
                            
                            
                            
                        </li>
                        
                        
                        <li><a href="/mobiles-tablets/accessories"> Accessories </a>
                            <ul className="nav-items">
                                <li className="list-header"><a href="/mobiles-tablets/accessories">View All Products</a></li>
                               
                                <li><a href="/mobiles-tablets/accessories/iphone-accessories">iPhone accessories</a></li>
                                <li><a href="#">iPad Accessories</a></li>
                                <li><a href="#">Headsets </a></li>
                                <li><a href="/mobiles-tablets/accessories/cases-screen-accessories">Cases & Screens </a></li>
                                <li><a href="/mobiles-tablets/accessories/cases-screen-accessories">Cable & Chargers </a></li>
                                
                                
                                <li><a href="/mobiles-tablets/accessories/powerbank">Powerbanks </a></li>
                                <li><a href="/mobiles-tablets/accessories/powerbank">Memmmory cards</a></li>
                                <li><a href="/mobiles-tablets/mobiles">View All </a></li>
                            </ul>
                        </li>
                        
                        
                        <li><a href="/mobiles-tablets/accessories"> Trending Mobiles </a>
                            <ul className="nav-items">
                                
                                <li><a href="#">iPhone X</a></li>
                                <li><a href="#">Samsung S9</a></li>
                                <li><a href="#">Huawei Nova 3 </a></li>
                                <li><a href="#">Honor 10</a></li>
                                <li><a href="#">Blabkberry Motion</a></li>
                                <li><a href="#">HTC desire 10 pro</a></li>
                                <li><a href="/mobiles-tablets/mobiles">View All </a></li>
                            </ul>
                        </li>
                        
                        <li className="featured-ad medium">
                            <a href="/ipad-pro-10-5inch-256gb-wi-fi-rose-gold-with-facetime"><img src="https://www.letstango.com/media/wysiwyg/menu-banner-nar-18-m1-min.jpg" alt=""/></a>
                        </li>
                        
                        <li className="list-header"><a href="/mobiles-tablets">View All Products</a>
                        </li>
                        
                     </ul>
                        
                        
                    </div>
             
                </li>
   
           
           

                <li className="category-wrapper">
                <a href="/gadgets">
                    {Gadgets}                   
                        <i className="fa fa-chevron-down"></i>
                        <i className="fa fa-angle-right"></i>
                </a>
                <div className="dropdown-wrapper">
                    <ul className="nav-subcategory">
                        <li className="list-header"><a href="/gadgets"> View All Products</a></li>
                        <li><a href="/gadgets/gadgets">Gadgets </a>
                            <ul className="nav-items">
                                <li><a title="Drones" href="/gadgets/gadgets/drones">Drones </a></li>
                                <li><a title="E-Readers" href="/gadgets/gadgets/e-readers">E-Readers </a></li>
                                <li><a title="Pens" href="/gadgets/gadgets/pens">Pens </a></li>
                                <li><a title="Health and Fitness" href="/gadgets/gadgets/health-and-fitness">Health and Fitness </a></li>
                                <li><a title="Activiy Trackers" href="/gadgets/gadgets/activiy-trackers">Activiy Trackers </a></li>
                                <li><a title="Smartwatches" href="/gadgets/gadgets/smartwatches">Smartwatches </a></li>
                            </ul>
                        </li>
                        
                        <li><a href="/gadgets/wearables">Wearables </a>
                            <ul className="nav-items">
                                <li><a title="Apple" href="/gadgets/wearables/apple">Apple </a></li>
                                <li><a title="Android" href="/gadgets/wearables/android">Android </a></li>
                                <li><a title="Huawei" href="/gadgets/wearables/huawei">Huawei </a></li>
                                <li><a title="Accessories" href="/gadgets/wearables/accessories">Accessories </a></li>
                                <li><a title="On Sale" href="/gadgets/wearables/on-sale">On Sale </a></li>
                            </ul>
                        </li>
                       
                        <li><a href="/gadgets/accessories">Accessories </a>
                             <ul className="nav-items">
                                <li><a title="Fitness Bands" href="/gadgets/accessories/fitness-bands">Fitness Bands </a></li>
                                <li><a title="Healthcare" href="/gadgets/accessories/healthcare">Healthcare </a></li>
                                <li><a title="Headsets" href="/gadgets/accessories/headsets">Headsets </a></li>
                                <li><a title="Cases &amp; Screen Protection" href="/gadgets/accessories/cases-screen-protection">Cases &amp; Screen Protection </a></li>
                                
                                <li><a title="Powerbank" href="/gadgets/accessories/powerbank">Powerbank </a></li>
                                <li><a title="Memory Cards" href="/gadgets/accessories/memory-cards">Memory Cards </a></li>
                             </ul>
                        </li>
                        
                        <li className="featured-ad medium"><a href="/product/bloody-b2100-gaming-keyboard-and-mouse-black"><img src="https://www.letstango.com/media/wysiwyg/menu-banner-nar-18-m1-min.jpg" alt=""/></a></li>
                   </ul>
              </div>
            </li>
           
                <li className="category-wrapper">
                    <a href="/gaming">
                    <i className="fa fa-arrow-left icon-back"></i> 
                     
                        {Gaming}                    
                        <i className="fa fa-chevron-down"></i>
                        <i className="fa fa-angle-right"></i>
                    </a>
                    
                    
                    <div className="dropdown-wrapper">
                         
                         <ul className="nav-subcategory">
                            
                            <li><a href="/gaming/consoles"> Consoles </a>
                                <ul className="nav-items">
                                    
                                    <li><a title="Microsoft Xbox" href="/gaming/consoles/microsoft-xbox">Microsoft Xbox </a></li>
                                    <li><a title="Sony Playstation" href="/gaming/consoles/sony-playstation">Sony Playstation</a></li>
                                    <li><a title="Nintendo " href="/gaming/consoles/nintendo">Nintendo </a></li>
                                    
                                    <li><a title="All other console" href="/gaming/consoles/all-other-console">All other console </a></li>
                                    
                                    <li className="list-header">
                                    <a href="/gaming/consoles">View All Products</a>
                                    </li>
                                    
                                </ul>
                            </li>
                            
                            <li><a href="/gaming/pc-laptops"> PC and Laptops </a>
                                <ul className="nav-items">
                                        <li className="list-header"><a href="/gaming/pc-laptops">View All Products</a></li>
                                        <li><a title="Gaming Laptops " href="/gaming/pc-laptops/gaming-laptops">Gaming Laptops </a></li>
                                        <li><a title="Asus Gaming" href="/gaming/pc-laptops/asus-gaming">Asus Gaming </a></li>
                                        <li><a title="Alienware Laptops " href="/gaming/pc-laptops/alienware-laptops">Alienware Laptops </a></li>
                                        <li><a title="Gaming Computers " href="/gaming/pc-laptops/gaming-computers">Gaming Computers </a></li>
                                        <li><a title="Gaming Accessories " href="/gaming/pc-laptops/gaming-accessories">Gaming Accessories </a></li>
                                        <li><a title="High Performing Machines " href="/gaming/pc-laptops/high-performing-machines">High Performing Machines </a></li>
                                </ul>
                            </li>
                            
                            <li><a href="/gaming/game-titles"> Accessories </a>
                                <ul className="nav-items">
                                    <li className="list-header"><a href="/gaming/game-titles">View All Products</a></li>
                                    <li><a title="Top Selling Games " href="/gaming/game-titles/top-selling-games">Top Selling Games </a></li>
        
                                    <li><a title="Xbox Games " href="/gaming/game-titles/xbox-games">Xbox Games </a></li>
                                    <li><a title="Playstation games " href="/gaming/game-titles/playstation-games">Playstation games </a></li>
                                    <li><a title="Other Game Titles " href="/gaming/game-titles/other-game-titles">Other Game Titles </a></li>
                                    <li><a title="Game Accessories " href="/gaming/game-titles/game-accessories">Game Accessories </a></li>
                                 </ul>
                            </li>
                            
                            <li className="featured-ad large"><a href="/product/sony-playstation-4-pro-pro"><img src="https://www.letstango.com/media/wysiwyg/menu-banner-jul-18-ps4-min.jpg" alt=""/></a></li>
                            
                            
                            <li className="list-header"><a href="/gaming"> View All Products</a></li>
                            
                         </ul>                
                     </div>
                  
                </li>
    
            <li className="category-wrapper">
                
             
                <i className="fa fa-arrow-left icon-back"></i> 
                    <a href="/electronics">
                        {Electronics}         
                        <i className="fa fa-chevron-down"></i>
                         <i className="fa fa-angle-right"></i>
                    </a>
                
                <i className="fa fa-plus-square-o"></i>
                <div className="dropdown-wrapper">
                     <ul className="nav-subcategory">
                        <li className="list-header"><a href="/electronics">View All Products</a></li>
                       
                        <li><a href="/electronics/television">Televisions </a>
                            <ul className="nav-items">
                                <li><a title="LG Smart TV" href="/electronics/television/lg-smart-tv">LG Smart TV </a></li>
                                <li><a title="Curved TV" href="/electronics/television/curved-tv">Curved TV </a></li>
                                <li><a title="TV Accessories " href="/electronics/television/tv-accessories">TV Accessories </a></li>
                                <li><a title="Samsung Televisions " href="/electronics/television/samsung-televisions">Samsung Televisions  </a></li>
                                <li><a title="Hisense Televisions" href="/electronics/television/hisense-televisions">Hisense Televisions </a></li>
                                <li><a title="Large Screen Televisions " href="/electronics/television/large-screen-televisions">Large Screen Televisions </a></li>
                                <li><a title="Projectors" href="/electronics/television/projectors">Projectors </a></li>
                                <li><a title="All Televisions " href="/electronics/television/all-televisions">All Televisions </a></li>
                                <li className="list-header"><a href="/electronics/television">View All Products</a></li>
                            </ul>
                        </li>
                        
                        <li>
                        <a href="/electronics/audio-video">Audio &amp; Video </a>
                             <ul className="nav-items">
                                
                                <li><a title="Speakers " href="/electronics/audio-video?cat=791">Speakers </a></li>
                                <li><a title="Car Infotainment System" href="/electronics/audio-video?cat=791">Car Infotainment System </a></li>
                                <li><a title="iPod &amp; Mp3 Players" href="/electronics/audio-video/ipod-mp3-players">iPod &amp; Mp3 Players </a></li>
                                <li><a title="Home Theater " href="/electronics/audio-video/home-theater">Home Theater </a></li>
                               
                                <li><a title="DJ Equipment " href="/electronics/audio-video/dj-equipment">DJ Equipment </a></li>
                                
                                <li className="list-header"><a href="/electronics/audio-video">View All Products</a></li>
                                
                            </ul>
                        </li>
                        
                        <li>
                        <a href="/electronics/laptops">Laptops </a>
                            <ul className="nav-items">
                                <li className="list-header"><a href="/electronics/laptops">View All Products</a></li>
                                <li><a title="Dell" href="/electronics/laptops/dell">Dell </a></li>
                                <li><a title="Lenovo" href="/electronics/laptops/lenovo">Lenovo </a></li>
                                <li><a title="HP" href="/electronics/laptops/hp">HP </a></li>
                                <li><a title="Macbook" href="/electronics/laptops?manufacturer=42">Apple </a></li>
                                <li><a title="Microsoft Surface" href="/electronics/laptops/microsoft-surface">Microsoft Surface </a></li>
                                <li><a title="Gaming Laptops" href="/electronics/laptops/gaming-laptops">Gaming Laptops </a></li>
                                <li><a title="Laptop Bags &amp; Accessories " href="/electronics/laptops/laptop-bags-accessories">Laptop Bags &amp; Accessories </a></li>
                            </ul>
                        </li>
                        
                        <li><a href="/electronics/computers-accessories">Computers &amp; Accessories </a>
                            <ul className="nav-items">
                                
                                <li><a title="Computers" href="/electronics/computers-accessories/computers">Computers </a></li>
                                <li><a title="Monitors " href="/electronics/computers-accessories/monitors">Monitors </a></li>
                                <li><a title="Printers &amp; Office Supplies " href="/electronics/computers-accessories/printers-office-supplies">Printers &amp; Office Supplies </a></li>
                                <li><a title="Hardisks" href="/electronics/computers-accessories/hardisks">Hardisks </a></li>
                                <li><a title="Cables &amp; USB's" href="/electronics/computers-accessories/cables-usb-s">Cables &amp; USBs </a></li>
                                <li><a title="Routers" href="/electronics/computers-accessories/routers">Routers </a></li>
                                <li><a title="Softwares" href="/electronics/computers-accessories/softwares">Softwares </a></li>
                                <li><a title="Storage Devices" href="/electronics/computers-accessories/storage-devices">Storage Devices </a></li>
                                <li><a title="GPS &amp; Accessories " href="/electronics/computers-accessories/gps-accessories">GPS &amp; Accessories </a></li>
                                <li><a title="IP Cameras " href="/electronics/computers-accessories/ip-cameras">IP Cameras </a></li>
                                
                                <li className="list-header"><a href="/electronics/computers-accessories">View All Products</a></li>
                                
                            </ul>
                        </li>
                        
                        <li className="featured-ad medium"><a href="/star-x-55-inch-ultra-hd-smart-android-led-tv-55uhd800"><img src="https://www.letstango.com/media/wysiwyg/menu-banner-jul-18-tv-min.jpg" alt=""/></a></li>
                        
                     </ul>                
                </div>
              
            </li>
          
            <li className="category-wrapper">
                
                
                <a href="/photography"><i className="fa fa-arrow-left icon-back"></i> 
                
                    {Photography}                    
                    <i className="fa fa-chevron-down"></i>
                     <i className="fa fa-angle-right"></i>
                </a>
                
                
                <div className="dropdown-wrapper">
                      <ul className="nav-subcategory">
                        <li className="list-header"><a href="/photography">View All Products</a></li>
                        <li><a href="/photography/cameras"> Cameras </a>
                        <ul className="nav-items">
                        <li className="list-header"><a href="/photography/cameras">View All Products</a></li>
                        <li><a title="DSLR" href="/photography/cameras/dslr">DSLR </a></li>
                        <li><a title="Digital Camares " href="/photography/cameras/digital-camares">Digital Cameras </a></li>
                        <li><a title="Sports Cameras" href="/photography/cameras/sports-cameras">Sports Cameras </a></li>
                        <li><a title="Instant Camera " href="/photography/cameras/instant-camera">Instant Camera </a></li>
                        <li><a title="Camcorders" href="/photography/cameras/camcorders">Camcorders </a></li>
                        <li><a title="Canon" href="/photography/cameras/canon">Canon </a></li>
                        <li><a title="Nikon" href="/photography/cameras/nikon">Nikon </a></li>
                        <li><a title="Fujifilms" href="/photography/cameras/fujifilms">Fujifilms </a></li>
                        <li><a title="Sony" href="/photography/cameras/sony">Sony </a></li>
                        <li><a title="Best Sellers " href="/photography/cameras/best-sellers">Best Sellers </a></li>
                        </ul>
                        </li>
                        <li><a href="/photography/lenses">Lenses </a>
                        <ul className="nav-items">
                        <li className="list-header"><a href="/photography/lenses">View All Products</a></li>
                        <li><a title="Canon " href="/photography/lenses/canon">Canon </a></li>
                        <li><a title="Nikon AR" href="/photography/lenses/nikon-ar">Nikon AR </a></li>
                        <li><a title="Tamron" href="/photography/lenses/tamron">Tamron </a></li>
                        <li><a title="Sigma" href="/photography/lenses/sigma">Sigma </a></li>
                        <li><a title="Pentax" href="/photography/lenses/pentax">Pentax </a></li>
                        <li><a title="Tokina" href="/photography/lenses/tamron">Tokina </a></li>
                        </ul>
                        </li>
                        <li><a href="/photography/accessories"> Accessories </a>
                        <ul className="nav-items">
                        <li className="list-header"><a href="/photography/accessories">View All Products</a></li>
                        <li><a title="Bags" href="/photography/accessories/bags">Bags </a></li>
                        <li><a title="Cases" href="/photography/accessories/cases">Cases </a></li>
                        <li><a title="Covers" href="/photography/accessories/covers">Covers </a></li>
                        <li><a title="Memory Cards" href="/photography/accessories/memory-cards">Memory Cards </a></li>
                        <li><a title="Tripods" href="/photography/accessories/tripods">Tripods </a></li>
                        <li><a title="Mounts " href="/photography/accessories/mounts">Mounts </a></li>
                        <li><a title="GoPro Accessories " href="/photography/accessories/gopro-accessories">GoPro Accessories </a></li>
                        </ul>
                        </li>
                        <li className="featured-ad medium"><a href="/product/canon-eos-80d-dslr-camera-with-18-135mm-lens"><img src="https://www.letstango.com/media/wysiwyg/menu-banner-jul-18-photography-min.jpg" alt=""/></a></li>
                     </ul>                
                </div>

            </li>
     
            
   
            <li className="category-wrapper">
                <a href="/home-outdoors">
                <i className="fa fa-angle-left icon-back"></i> 
                
                    {HomeOutdoors }
                    <i className="fa fa-chevron-down"></i>
                     <i className="fa fa-angle-right"></i>
                </a>
                
                
                <div className="dropdown-wrapper">
                     <ul className="nav-subcategory">
                        <li className="list-header"><a href="/home-outdoors/small-appliances">View All Products</a></li>
                        <li><a href="/home-outdoors/kitchen-storage"> Kitchen Storage </a>
                        <ul className="nav-items">
                        <li className="list-header"><a href="/home-outdoors/kitchen-storage">View All Products</a></li>
                        <li><a title="cook wares " href="/home-outdoors/kitchen-storage/cook-wares">Cook wares </a></li>
                        <li><a title="Bakeware " href="/home-outdoors/kitchen-storage/bakeware">Bakeware </a></li>
                        <li><a title="Dinnerware" href="/home-outdoors/kitchen-storage/dinnerware">Dinnerware </a></li>
                        <li><a title="pot &amp; pans " href="/home-outdoors/kitchen-storage/pot-pans">pot &amp; pans </a></li>
                        <li><a title="Pressure Cookers " href="/home-outdoors/kitchen-storage/pressure-cookers">Pressure Cookers </a></li>
                        <li><a title="Toast &amp; Grills " href="/home-outdoors/kitchen-storage/toast-grills">Toast &amp; Grills </a></li>
                        </ul>
                        </li>
                        <li><a href="/home-outdoors/home-decors">Home Decors </a>
                        <ul className="nav-items">
                        <li className="list-header"><a href="/home-outdoors/home-decors">View All Products</a></li>
                        <li><a title="Wall Clocks " href="/home-outdoors/home-decors/wall-clocks">Wall Clocks </a></li>
                        <li><a title="Wall Decals " href="/home-outdoors/home-decors/wall-decals">Wall Decals </a></li>
                        <li><a title="Bed Spreads &amp; pillows" href="/home-outdoors/home-decors/bed-spreads-pillows">Bed Spreads &amp; pillows </a></li>
                        <li><a title="Lightings " href="/home-outdoors/home-decors/lightings">Lightings </a></li>
                        <li><a title="Wall Decors " href="/home-outdoors/home-decors/wall-decors">Wall Decors </a></li>
                        <li><a title="Rugs &amp; Mats " href="/home-outdoors/home-decors/rugs-mats">Rugs &amp; Mats  </a></li>
                        <li><a title="Bathroom Storage" href="/home-outdoors/home-decors/bathroom-storage">Bathroom Storage </a></li>
                        <li><a title="Solar Products " href="/home-outdoors/home-decors/solar-products">Solar Products </a></li>
                        </ul>
                        </li>
                        <li className="featured-ad medium"><a title="blender" href="/product/kenwood-ttm440-toaster"><img src="https://www.letstango.com/media/wysiwyg/menu-banner-jul-18-home-min.jpg" alt=""/></a></li>
                        </ul>                </div>
          
            </li>

            
            <li className="category-wrapper">
                
                <a href="/fashion-beauty">
                <i className="fa fa-arrow-left icon-back"></i> 
               
                    {FashionBeauty}                  
                    <i className="fa fa-chevron-down"></i>
                     <i className="fa fa-angle-right"></i>
                </a>
                
                <i className="fa fa-plus-square-o"></i>
                
                <div className="dropdown-wrapper">
                     <ul className="nav-subcategory">
                        <li className="list-header"><a href="/fashion-beauty">View All Products</a></li>
                        <li><a href="/fashion-beauty/for-men"> For Men </a>
                            <ul className="nav-items">
                                <li><a title="Clothing " href="/fashion-beauty/for-men/clothing">Clothing </a></li>
                                <li><a title="Eyewear " href="/fashion-beauty/for-men/eyewear">Sunglasses </a></li>
                                <li><a title="Bags" href="/fashion-beauty/for-men/bags">Bags </a></li>
                                <li><a title="Shoes" href="/fashion-beauty/for-men/shoes">Shoes </a></li>
                                <li><a title="Watches " href="/fashion-beauty/watches">Watches </a></li>
                                <li><a title="Accessories " href="/fashion-beauty/for-men/accessories">Accessories </a></li>
                                <li><a title="Undergarments " href="/fashion-beauty/for-men/undergarments">Undergarments </a></li>
                            </ul>
                        </li>
                        
                        <li>
                        <a href="/fashion-beauty/for-woman"> For Women </a>
                              <ul className="nav-items">
                                <li className="list-header"><a href="/fashion-beauty/for-woman">View All Products</a></li>
                                <li><a title="Clothing " href="/fashion-beauty/for-woman/clothing">Clothing </a></li>
                                <li><a title="Sleepwear" href="/fashion-beauty/for-woman/sleepwear">Sleepwear </a></li>
                                <li><a title="Handbags " href="/fashion-beauty/for-woman/handbags">Handbags </a></li>
                                <li><a title="Shoes" href="/fashion-beauty/for-woman/shoes">Shoes </a></li>
                                <li><a title="Eyewear " href="/fashion-beauty/for-woman/eyewear">Sunglasses </a></li>
                                
                                <li><a title="Jewellery" href="/fashion-beauty/for-woman/jewellery">Jewellery </a></li>
                                <li><a title="Abaya's" href="/fashion-beauty/for-woman/abaya-s">Abayas </a></li>
                                <li><a title="Personal Care" href="/fashion-beauty/for-woman/personal-care">Personal Care </a></li>
                            </ul>
                        </li>
                        <li>
                        
                        <a href="/fashion-beauty/perfumes">Perfumes </a>
                        
                             <ul className="nav-items">
                                <li className="list-header"><a href="/fashion-beauty/perfumes">View All Products</a></li>
                                <li><a title="Davidoff" href="/fashion-beauty/perfumes/davidoff">Davidoff </a></li>
                                <li><a title="Chanel" href="/fashion-beauty/perfumes/chanel">Chanel </a></li>
                                <li><a title="Oud" href="/fashion-beauty/perfumes/oud">Oud </a></li>
                                <li><a title="Men's Perfume " href="/fashion-beauty/perfumes/men-s-perfume">Mens Perfume </a></li>
                                <li><a title="Woman's Perfume " href="/fashion-beauty/perfumes/woman-s-perfume">Womans Perfume </a></li>
                                <li><a title="Trending Now" href="/fashion-beauty/perfumes/trending-now">Trending Now </a></li>
                            </ul>
                        </li>
                        
                        <li>
                        <a href="/fashion-beauty/personel-care">Personal Care </a>
                           <ul className="nav-items">
                                <li className="list-header"><a href="/fashion-beauty/personel-care">View All Products</a></li>
                                <li><a title="Hair Straightening and Stylers " href="/fashion-beauty/personel-care/hair-straightening-and-stylers">Hair Straightening and Stylers </a></li>
                                <li><a title="Hair Dryers " href="/fashion-beauty/personel-care/hair-dryers">Hair Dryers </a></li>
                                <li><a title="Massage and Sauna " href="/fashion-beauty/personel-care/massage-and-sauna">Massage and Sauna </a></li>
                                <li><a title="Hair &amp; Skin Care " href="/fashion-beauty/personel-care/hair-skin-care">Hair &amp; Skin Care </a></li>
                                <li><a title="Blood Pressure Monitor " href="/fashion-beauty/personel-care/blood-pressure-monitor">Blood Pressure Monitor </a></li>
                                <li><a title="Dental Care " href="/fashion-beauty/personel-care/dental-care">Dental Care </a></li>
                                <li><a title="Foot Care " href="/fashion-beauty/personel-care/foot-care">Foot Care </a></li>
                                <li><a title="Makeup Products " href="/fashion-beauty/personel-care/makeup-products">Makeup Products </a></li>
                            </ul>
                        </li>
                        
                        <li>
                        <a href="/fashion-beauty/mens-grooming"> Mens Grooming </a>
                            <ul className="nav-items">
                                <li className="list-header"><a href="/fashion-beauty/mens-grooming">View All Products</a></li>
                                <li><a title="Trimmers &amp; electric shavers " href="/fashion-beauty/mens-grooming/trimmers-electric-shavers">Trimmers &amp; electric shavers </a></li>
                                <li><a title="Skin Care " href="/fashion-beauty/mens-grooming/skin-care">Skin Care </a></li>
                                <li><a title="Hair Care " href="/fashion-beauty/mens-grooming/hair-care">Hair Care </a></li>
                              </ul>
                        </li>
                        
                        <li className="featured-ad medium"><a href="/product/braun-br710-satin-hair-brush"><img src="https://www.letstango.com/media/wysiwyg/menu-banner-jul-18-fashion-min.jpg" alt=""/></a></li>
                      </ul>                
                  </div>
              
            </li>
         
            <li className="category-wrapper hidden-xs hidden-sm">
                <a href="/baby-kids">
                
                
                {BabyKids} 
                <i className="fa fa-chevron-down"></i>
                 <i className="fa fa-angle-right"></i>
                </a>
                <i className="fa fa-plus-square-o"></i>
                
                <div className="dropdown-wrapper">
                  
                  <ul className="nav-subcategory">
                    <li><a href="/baby-kids/baby">Baby </a>
                    <ul className="nav-items">
                    <li><a title="Diapers " href="/baby-kids/baby/diapers">Diapers </a></li>
                    <li><a title="Bath &amp; Body Care" href="/baby-kids/baby/bath-body-care">Bath &amp; Body Care </a></li>
                    <li><a title="Feeding Products " href="/baby-kids/baby/feeding-products">Feeding Products </a></li>
                    <li><a title="Cloths &amp; shoes " href="/baby-kids/baby/cloths-shoes">Cloths &amp; shoes </a></li>
                    <li><a title="Baby Gift set " href="/baby-kids/baby/baby-gift-set">Baby Gift set </a></li>
                    </ul>
                    </li>
                    <li><a href="/baby-kids/baby-essentials">Baby Essentials </a>
                    <ul className="nav-items">
                    <li><a title="Car Seat &amp; Accessories " href="/baby-kids/baby-essentials/car-seat-accessories">Car Seat &amp; Accessories </a></li>
                    <li><a title="strollers " href="/baby-kids/baby-essentials/strollers">strollers </a></li>
                    <li><a title="Baby Cam" href="/baby-kids/baby-essentials/baby-cam">Baby Cam </a></li>
                    <li><a title="Baby Bed" href="/baby-kids/baby-essentials/baby-bed">Baby Bed </a></li>
                    </ul>
                    </li>
                    <li><a href="/baby-kids/outdoor">Outdoor </a>
                    <ul className="nav-items">
                    <li><a title="Beach &amp; water Toys " href="/baby-kids/outdoor/beach-water-toys">Beach &amp; water Toys </a></li>
                    <li><a title="Outdoor Play" href="/baby-kids/outdoor/outdoor-play">Outdoor Play </a></li>
                    <li><a title="Play House " href="/baby-kids/outdoor/play-house">Play House </a></li>
                    <li><a title="Skateboard " href="/baby-kids/outdoor/skateboard">Skateboard </a></li>
                    <li><a title="Safety Equipments" href="/baby-kids/outdoor/safety-equipments">Safety Equipments </a></li>
                    </ul>
                    </li>
                    <li><a href="/baby-kids/toys">Toys </a>
                    <ul className="nav-items">
                    <li><a title="Rc &amp; electronic toys " href="/baby-kids/toys/rc-electronic-toys">Rc &amp; electronic toys </a></li>
                    <li><a title="Action figures " href="/baby-kids/toys/action-figures">Action figures </a></li>
                    <li><a title="Building Blocks " href="/baby-kids/toys/building-blocks">Building Blocks </a></li>
                    <li><a title="Card Games &amp; Puzzles " href="/baby-kids/toys/card-games-puzzles">Card Games &amp; Puzzles </a></li>
                    <li><a title="Art &amp; Crafts " href="/baby-kids/toys/art-crafts">Art &amp; Crafts </a></li>
                    <li><a title="Baby Toys" href="/baby-kids/toys/baby-toys">Baby Toys </a></li>
                    <li><a title="Gifting Toys" href="/baby-kids/toys/gifting-toys">Gifting Toys </a></li>
                    </ul>
                    </li>
                    <li className="featured-ad medium"><a href="/product/chillafish-quadie-grow-with-me-ride-on-bike-lime-lim"><img src="https://www.letstango.com/media/wysiwyg/menu-banner-nar-18-28-k-min.jpg" alt=""/></a></li>
                    </ul>                
               </div>
          
            </li>
 
            
            <li className="dilaw featured-link d-none d-sm-inline-block"><a href="/promotions/2018-hot-deals"> Hot Deals</a></li>
            
            <li className="dilaw featured-link d-none d-sm-inline-block"><a href="/promotions/daily-deals"> Deal Zone</a></li>
            
            
            <li className="devider">
                &nbsp;
            </li>
            
                       
            <li className="menu-group">
                   <ul>
                       <li ><a className="country" ><i className="fa fa-flag sm-icon icon-basic-style"></i> Country</a>
                            
                            <span className="pull-right nav-item dropdown">
                                
                            
                                    
                                      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                       <span className="flag-icon flag-icon-ae"></span> AED
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-us"></span> USD</a>
                                        <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-eu"></span> EU</a>
                                        <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-sa"></span> SAR</a>
                                        
                                        <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-bh"></span> BHD</a>
                                        
                                        <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-om"></span> OMR</a>
                                        
                                        <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-kw"></span> KWD</a>
                                        
                                      </div>
                                   
                                
                            </span>
                        
                       </li>
                   </ul>
             </li>

            
            <li className="menu-group">
                <ul>
                     <li>
                                <a className="country" ><i className="fa fa-globe sm-icon icon-secondary-style"></i>Language</a>
                                
                                
                                 
                                 <span className="pull-right nav-item dropdown">
                                
                                
                                      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                       <span></span> English
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#"> English</a>
                                        <a className="dropdown-item" href="#">العربية&lrm;</a>
                                       
                                        
                                      </div>
                                   
                                
                            </span>
                     </li>
                     
                      
                 </ul>
                        
            </li>
            
            <li className="menu-group">
                        <ul>
                            <li><a href="/faqs"><i className="fa fa-info-circle sm-icon icon-basic-style"></i> Help Center</a></li>
                            <li><a href="contacts"><i className="fa fa-headphones sm-icon icon-basic-style"></i> Contact Us</a></li>
                         
                                                
                        </ul>
                 
             </li>

          </ul>
      </nav>

        
    </div>

    
</section>
);
}
}
export default injectIntl(Menu);
