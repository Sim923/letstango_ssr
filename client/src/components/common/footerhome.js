import React, { Component } from "react";
import { injectIntl, intlShape } from 'react-intl';


class Footer extends Component {

  render() {



    const letstango_com             = this.props.intl.formatMessage({id: 'letstango_com'});
    const Online_shopping_UAE       = this.props.intl.formatMessage({id: 'Online_shopping_UAE'});
    const bestdeal                  = this.props.intl.formatMessage({id: 'bestdeal'});
    const letstango_is_the          = this.props.intl.formatMessage({id: 'letstango_is_the'});
    const onlineshopping_UAE_is_fun = this.props.intl.formatMessage({id: 'onlineshopping_UAE_is_fun'});
    const best_shopping_experience  = this.props.intl.formatMessage({id: 'best_shopping_experience'});
    const genuine                   = this.props.intl.formatMessage({id: 'genuine'});
    const quickdelivery             = this.props.intl.formatMessage({id: 'quickdelivery'});    
    const daysreturn                = this.props.intl.formatMessage({id: 'daysreturn'});
    const Worldwide_Shipping        = this.props.intl.formatMessage({id: 'Worldwide_Shipping'});
    const nevermissout              = this.props.intl.formatMessage({id: 'nevermissout'});
    const signup_and_exclusive_offer= this.props.intl.formatMessage({id: 'signup_and_exclusive_offer'});
    const Enter_mail_ID             = this.props.intl.formatMessage({id: 'Enter_mail_ID'});
    const BE_AWESOME                = this.props.intl.formatMessage({id: 'BE_AWESOME'});
    const we_are_always_here        = this.props.intl.formatMessage({id: 'we_are_always_here'});
    const reach_out_to_us           = this.props.intl.formatMessage({id: 'reach_out_to_us'});
    const hepl_centre               = this.props.intl.formatMessage({id: 'hepl_centre'});
    const email_support             = this.props.intl.formatMessage({id: 'email_support'});
    const team_letstango            = this.props.intl.formatMessage({id: 'team_letstango'});
    const phone_support             = this.props.intl.formatMessage({id: 'phone_support'});
    const contcactno                = this.props.intl.formatMessage({id: 'contcactno'});
    const letstango                 = this.props.intl.formatMessage({id: 'letstango'});
    const the_letstango_story       = this.props.intl.formatMessage({id: 'the_letstango_story'});  
    const Why_LetsTango_com         = this.props.intl.formatMessage({id: 'Why_LetsTango_com'}); 
    const airrewards                = this.props.intl.formatMessage({id: 'airrewards'});
    const jetprevilege              = this.props.intl.formatMessage({id: 'jetprevilege'});
    const air_miles                 = this.props.intl.formatMessage({id: 'air_miles'});
    const career                    = this.props.intl.formatMessage({id: 'career'});
    const seller_dashboard          = this.props.intl.formatMessage({id: 'seller_dashboard'});
    const lets_help_you             = this.props.intl.formatMessage({id: 'lets_help_you'});
    const contact_us                = this.props.intl.formatMessage({id: 'contact_us'});
    const extended_warranty         = this.props.intl.formatMessage({id: 'extended_warranty'});
    const faq                       = this.props.intl.formatMessage({id: 'faq'});
    const buyers_protection         = this.props.intl.formatMessage({id: 'buyers_protection'});
    const shipping_return           = this.props.intl.formatMessage({id: 'shipping_return'});
    const safe_secure               = this.props.intl.formatMessage({id: 'safe_secure'});
    const terms_condition           = this.props.intl.formatMessage({id: 'terms_condition'});
    const popular_category          = this.props.intl.formatMessage({id: 'popular_category'});
    const smartphones               = this.props.intl.formatMessage({id: 'smartphones'});
    const televisions               = this.props.intl.formatMessage({id: 'televisions'});
    const gadgets                   = this.props.intl.formatMessage({id: 'gadgets'});
    const gaming                    = this.props.intl.formatMessage({id: 'gaming'});
    const photography               = this.props.intl.formatMessage({id: 'photography'});
    const laptops                   = this.props.intl.formatMessage({id: 'laptops'});
    const smartwatches              = this.props.intl.formatMessage({id: 'smartwatches'});
    const sunglasses                = this.props.intl.formatMessage({id: 'sunglasses'});
    const toys                      = this.props.intl.formatMessage({id: 'toys'});
    const womens_fashion            = this.props.intl.formatMessage({id: 'womens_fashion'});
    const mens_clothing             = this.props.intl.formatMessage({id: 'mens_clothing'});
    const home_appliance            = this.props.intl.formatMessage({id: 'home_appliance'});
    const baby_esssentials          = this.props.intl.formatMessage({id: 'baby_esssentials'});
    const sports_ftnes              = this.props.intl.formatMessage({id: 'sports_ftnes'});
    const shop_on_the_go            = this.props.intl.formatMessage({id: 'shop_on_the_go'});
    const copyright                 = this.props.intl.formatMessage({id: 'copyright'});
    
    








    return (<footer>
    <section id="blog_block">
        <div className="container">
            <div className="row d-none d-sm-block ">
                <h1>
                    {Online_shopping_UAE},<br/>
                    {bestdeal}
                </h1>
                <p>{letstango_is_the}</p>
                <p>{onlineshopping_UAE_is_fun}
                </p>
            </div>
            <div id="service_block"  className="row  align-items-center">
                <div className="col-md-4 headblock d-none d-sm-block">
                    <h2>Tang<i className="fa fa-heart-o"></i> Promise</h2>
                    <p>{best_shopping_experience}</p>
                </div>
                <div className="col-md-2 col-6">
                    <img src="images/Genuine.png" alt=""/>
                    <p>{genuine}</p>
                </div>
                <div className="col-md-2 col-6">
                    <img src="images/Quick_Delivery.png" alt=""/>
                    <p>{quickdelivery}</p>
                </div>
                <div className="col-md-2 col-6">
                    <img src="images/15_Day_Returns.png" alt=""/>
                    <p>{daysreturn}</p>
                </div>
                <div className="col-md-2 col-6">
                    <img src="images/Worldwide_Shipping.png" alt=""/>
                    <p>{Worldwide_Shipping}</p>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </section>
    <section id="footer_mddle_block">
        <div className="container">
            <div id="newsletter_footer" className="row align-items-center">
                <div className="col-md-3 col-12">
                    <h2>{nevermissout}</h2>
                    <p>{signup_and_exclusive_offer}</p>
                </div>
                <div className="input-group mb-8 col-md-4 col-12">
                    <input type="text" className="form-control" placeholder={Enter_mail_ID} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn_newsletter" type="button">{BE_AWESOME}</button>
                    </div>
                </div>
            </div>
            <div id="customer_service_footer" className="row align-items-center">
                <div className="col-md-4 col-12">
                    <h3>{we_are_always_here}</h3>
                    <p><span>{reach_out_to_us}</span></p>
                </div>
                <div className="col">
                    <div className="media">
                          <img className="align-self-end mr-3" src="/images/help-center.png" srcSet="images/help-center.png 1x, images/help-center2x.png 2x, images/help-center3x.png 3x"  alt="" />
                          <div className="media-body">
                            <h5 className="mt-0">{hepl_centre}</h5>
                            <p>{letstango_com}</p>
                          </div>
                        </div>
                </div>
                
                <div className="col">
                    <div className="media">
                          <img className="align-self-end mr-3" src="/images/EMAIL_SUPPORT.png"  srcSet="/images/EMAIL_SUPPORT.png 1x, /images/EMAIL_SUPPORT2x.png 2x, /images/EMAIL_SUPPORT3x.png 3x" alt="" />
                         
                          <div className="media-body">
                            <h5 className="mt-0">{email_support}</h5>
                            <p>{team_letstango}</p>
                          </div>
                        </div>
                </div>
                
                <div className="col">
                    <div className="media">
                          <img className="align-self-end mr-3" src="/images/PHONE_SUPPORT.png" srcSet="/images/PHONE_SUPPORT.png 1x, /images/PHONE_SUPPORT2x.png 2x, /images/PHONE_SUPPORT3x.png 3x" alt="" />
                          <div className="media-body">
                            <h5 className="mt-0">{phone_support}</h5>
                            <p>+971-4-3388225</p>
                          </div>
                        </div>
                </div>
            </div>
            <div id="navigation_footer" className="row ">
                <div className="col-sm-3">
                    <ul className="ft-links">
                        <li className="foot-nav-head">{letstango}</li>
                        <li><a href="/about-us/">{the_letstango_story}</a></li>
                        <li><a href="/why-letstango/">{Why_LetsTango_com}</a></li>
                        <li><a href="/air-rewards">{airrewards}</a></li>
                        <li><a href="/jp-miles">{jetprevilege}</a></li>
                        <li><a href="/airmiles">{air_miles}</a></li>
                        <li><a href="/careers">{career} </a></li>
                        <li><a href="https://www.letstango.com/marketplace/marketplaceaccount/myproductslist/">{seller_dashboard}</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul className="ft-links">
                        <li className="foot-nav-head">{lets_help_you}</li>
                        <li><a href="/contact-us">{contact_us}</a></li>
                        <li><a href="/extended-warranty">{extended_warranty}</a></li>
                        <li><a href="/faq">{faq}</a></li>
                        <li><a href="/buyer-protection">{buyers_protection}</a></li>
                        <li><a href="/shipping-and-returns">{shipping_return}</a></li>
                        <li><a href="/safe-shopping-guarantee">{safe_secure}</a></li>
                        <li><a href="/terms">{terms_condition}</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul className="ft-links">
                        <li className="foot-nav-head">{popular_category}</li>
                        <li><a href="/mobiles-tablets/mobiles">{smartphones}</a></li>
                        <li><a href="/electronics/television">{televisions}</a></li>
                        <li><a href="/gadgets">{gadgets}</a></li>
                        <li><a href="/gaming">{gaming}</a></li>
                        <li><a href="/photography">{photography}</a></li>
                        <li><a href="/electronics/laptops">{laptops}</a></li>
                        <li><a href="/gadgets/wearables">{smartwatches}</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul className="ft-links">
                        <li className="foot-nav-head">&nbsp;</li>
                        <li><a href="/fashion-beauty/for-men/eyewear">{sunglasses}</a></li>
                        <li><a href="/fashion-beauty/for-woman">{womens_fashion}</a></li>
                        <li><a href="/fashion-beauty/for-men/clothing">{mens_clothing}</a></li>
                        <li><a href="/home-outdoors">{home_appliance}</a></li>
                        <li><a href="/baby-kids/baby-essentials">{baby_esssentials}</a></li>
                        <li><a href="/baby-kids/toys">{toys}</a></li>
                        <li><a href="/sports-fitness">{sports_ftnes}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </section>
    <section id="footer_bottom_block">
        <div className="container ">
            <div className="row ">
                <div className="col-sm-2 col-6 lt-afl">
                    <a  href="/dxb-chamber-certificate" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/ft-afl-1.jpg"/>
                    </a>
                </div>
                <div className="col-sm-2 col-6 lt-afl">
                    <img src="https://www.letstango.com/media/wysiwyg/ft-afl-3.jpg"/>
                </div>
                <div className="col-sm-2 col-6 lt-afl">
                    <a   href="/airmiles" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/ft-afl-4.jpg"/>
                    </a>
                </div>
                <div className="col-sm-2 col-6 lt-afl">
                    <a  href="/jp-miles" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/ft-afl-5.jpg"/>
                    </a>
                </div>
                <div className="col-sm-2 col-6 lt-afl">
                    <a   href="/air-rewards" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/footer-arireward.jpg"/>
                    </a>
                </div>
                <div className="col-sm-2 col-6 lt-afl">
                    <a  href="https://global.letstango.com/" rel="noopener" target="_blank"><img src="https://www.letstango.com/media/wysiwyg/ft-afl-6.jpg"/></a>
                </div>
            </div>
            <div id="app-store-footer" className="row">
                <div className="col-12 text-center">
                    <h2>{shop_on_the_go}</h2>
                    <a href="https://itunes.apple.com/in/app/letstango.com/id1018634851?mt=8" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/aps.png"/>
                    </a><a href="https://play.google.com/store/apps/details?id=com.letstango.mobile&amp;hl=en" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/aps2.png"/>
                    </a>
                </div>
            </div>
        </div>
        <div className="footer_bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <ul>
                            <li  className="brand">
                                <img src="/images/lets-tango-logo-light.png" srcSet="/images/lets-tango-logo-light.png 1x, /images/lets-tango-logo-light-2x.png 2x, /images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com"/>
                            </li>
                            <li> <img  src="images/facebook.png" alt=""/></li>
                            <li> <img  src="images/twitter.png" alt=""/></li>
                            <li> <img  src="images/instagram.png" alt=""/></li>
                        </ul>
                    </div>
                    <div className="col-md-6 copyright">
                        <p>{copyright}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </section>
    <div className="clearfix"></div>
</footer>);
  }
}
export default injectIntl(Footer);
