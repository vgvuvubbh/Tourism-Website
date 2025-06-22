import React from "react";
import "./TourismWeb.css";
import IMG1 from "./assets/logo.png"
import { useState, useEffect } from "react";
import IMG2 from "./assets/map.webp";
import { FaMapMarkerAlt } from "react-icons/fa";
import IMG3 from "./assets/planet.webp";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaBed } from "react-icons/fa6";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FaTaxi } from "react-icons/fa";
import { FaBusSimple } from "react-icons/fa6";
import IMG4 from "./assets/computer.webp";
import IMG5 from "./assets/image.webp";
import IMG6 from "./assets/imagee.webp";
import IMG7 from "./assets/image7.png";
import IMG8 from "./assets/image8.png";
import IMG9 from "./assets/image9.png";
import IMG10 from "./assets/image01.png";
import IMG11 from "./assets/image02.png";
import { AiFillYoutube } from "react-icons/ai";
import { IoEarthOutline } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";
import IMG12 from "./assets/picture1.webp";
import IMG13 from "./assets/picture2.webp";
import IMG14 from "./assets/picture3.webp";
import IMG15 from "./assets/picture4.webp";
import IMG16 from "./assets/picture5.webp";
import IMG17 from "./assets/picture6.webp";
import IMG18 from "./assets/main-picture.webp";
import IMG19 from "./assets/img19.png";
import IMG20 from "./assets/img20.png";
import IMG21 from "./assets/img21.webp";
import IMG22 from "./assets/img22.png";
import IMG23 from "./assets/img23.png";
import IMG24 from "./assets/img24.png";
import IMG25 from "./assets/img25.png";
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import IMG26 from "./assets/img26.webp";
import { TbBrandLinkedin } from "react-icons/tb";
import { RiFacebookCircleLine } from "react-icons/ri";


const TourismWeb = () =>{

   
    const [menuOpen, setMenuOpen] = useState(false);
   
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (window.scrollY > 50) {
    //       setScrolled(true);
    //     } else {
    //       setScrolled(false);
    //     }
    //   };
  
    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // className={`navbar ${scrolled ? "scrolled" : ""}`}
    // }, []);

    return(
   <div className="TourismWeb">
   
 <nav >
    <a href="#" ><img src={IMG1} alt="img1" className="logo"/>
<div className="nav-text">RATE HAWK</div>
    </a>

    <div className="pages">
        <a href="https://www.ratehawk.com/lp/en/to-and-ta/" className="firstlink">Travel pofessionals</a>
        <a href="https://www.ratehawk.com/lp/en/API/" className="secondlink"> API solutions</a>
        <a href="https://www.ratehawk.com/lp/en/car-rental/" className="thirdlink"> Car rental</a>
       <a href="https://blog.ratehawk.com/" className="fourthlink">Blog</a>
       <a href="https://www.ratehawk.com/lp/en/#media" className="fifthlink">Media</a>
    </div>
    <button className="sign-in" type="button" onClick={() => {setMenuOpen(!menuOpen);}}>SIGN IN</button>
     <div className={`menu is-open ${menuOpen ? "show" : ""}`}aria-hidden={!menuOpen}>
      
        <div className="sign-text">Sign in</div>
        <div className="forgot">Forgot the password</div>
        <input type="email" placeholder="E-mail" className="email" />
        <input type="password" placeholder="Password" className="password" />
        <button className="card-btn">SIGN IN</button>
     
     </div>
      <a href="https://www.ratehawk.com/registration/"> <button className="register">REGISTER</button></a> 
   
</nav>
  
<div className="page-first">
    <div className="first-title">Unrivalled online booking tool for travel professionals</div>
    <div className="first-text">We lead the way in accommodation: 2.6M+ hotels worldwide from 280+ suppliers, air tickets, transfers, car rentals, and other services.</div>
<a href="https://www.ratehawk.com/registration/"><button className="first-btn">GET STARTED FOR FREE</button></a>
<img src={IMG2} alt="img2" className="first-image"/>
<FaMapMarkerAlt className="first-icon"/>
<FaMapMarkerAlt className="first-icon2"/>
<FaMapMarkerAlt className="first-icon3"/>
<FaMapMarkerAlt className="first-icon4"/>
<FaMapMarkerAlt className="first-icon5"/>
<FaMapMarkerAlt className="first-icon6"/>
<div className="first-image-text">Exclusive rates</div>
<img src={IMG3} alt="img3" className="first-image2"/>
<div className="first-text2">More than 2,600,000 + hotels worldwide</div>
<div className="first-card1">
    <div className="first-card-text">API integrations<spam className="change1"> for your business</spam></div>
    <RiBarChart2Fill  className="first-icon1"/>
    <RiBarChart2Fill className="first-icon7"/>
</div>

<div className="first-card2">
    <div className="first-card2-text">Multi-service <spam className="change2">platform</spam></div>
    <div className="first-card2-icon1">
        <FaBed className="fabedi"/>
     <div className="line1"></div>
     </div>
     <div className="first-card2-icon2">
     <PiAirplaneTiltFill className="fabedi"/>
     <div className="line2"></div>
     </div>
   
     <div className="first-card2-icon3">
     <FaTaxi className="fabedi"/>
      <div className="line2"></div>
     </div>
    
     <div className="first-card2-icon4">
     <FaBusSimple className="fabedi"/>
      <div className="line2"></div>
     </div>

</div>
<div className="first-card3">
    <div className="first-card3-text1">Multilingual 24/7 support</div>
    <div className="first-card3-text2"> Mehrsprachige Unterstützung</div>
    <div className="first-card3-text3">Πολυγλωσσική υποστήριξη</div>
    <div className="first-card3-text4">多语言支持</div>
    <div className="first-card3-text5">Çok dilli destek</div>
</div>
<div className="first-card4">
    <div className="first-card4-text1">Mobile app for any solution </div>
<div className="iphone-design">
    <div className="camera"></div>
</div>

</div>
<img src={IMG4} alt="img4" className="computer"/>
<div className="purple"></div>
</div>

<div className="page-second">
<div className="second-text">Supercharge your travel business</div>
<div className="second-text2">For travel professionals</div>
<button className="second-btn">LEARN MORE</button>
<div className="second-card1">
    <div className="second-card1-title">Get more profit</div>
    <div className="second-card1-line"></div>
    <div className="second-card1-text">
        Enjoy our <spam className="font-weight">profitable loyalty program</spam> to earn points and use 
        them to pay for bookings. Get special B2B rates and low prices to earn even more.</div>
</div>

<div className="second-card2">
    <div className="second-card2-title">Control your income</div>
    <div className="second-card2-line"></div>
    <div className="second-card2-text">
    Choose a work model, <spam
     className="font-weight">Net or Gross</spam>, that works for you. Pay by invoice or credit card, or use a credit limit to pay later.</div>
</div>

<div className="second-card3">
    <div className="second-card3-title">Easily interact with clients</div>
    <div className="second-card3-line2"></div>
    <div className="second-card3-text">Use <spam className="font-weight">the Selection</spam> tool and <spam className="font-weight">Pay by Link option</spam> to engage with clients and speed up your bookings even more.</div>
</div>

<div className="second-card4">
    <div className="second-card4-title">Confidence in every booking</div>
    <div className="second-card4-line2"></div>
    <div className="second-card4-text">We offer <spam className="font-weight">24/7 multilingual support</spam> and exclusive pre-check service to reconfirm each of your bookings.</div>
</div>
<div className="image5">
<img src={IMG5} alt="img5" className="second-image1"/>
</div>

<div className="second-text3">Empower our clients' progress</div>
<div className="second-text4">FFor API integrations</div>
<a href="https://www.ratehawk.com/lp/en/API/"><button className="second-btn2">LEARN MORE</button></a>
 
<img src={IMG6} alt="img6" className="image6"/>

<div className="second-card5">
    <div className="second-card1-title">Fast and simple API integration</div>
    <div className="second-card1-line"></div>
    <div className="second-card1-text">
    Our architectural solution allows you to quickly and easily install the functionality <spam className="font-weight">best suited for your business</spam>.
</div>
</div>
<div className="second-card6">
    <div className="second-card2-title">Control your income</div>
    <div className="second-card2-line"></div>
    <div className="second-card2-text">
    Enjoy multilingual information about <spam className="font-weight">2,600,000 hotels worldwide</spam>, including names, geographical names, photos, and locations.</div>
</div>

<div className="second-card7">
    <div className="second-card3-title">Hi-tech providers and mid-offices</div>
    <div className="second-card3-line2"></div>
    <div className="second-card3-text">Use our high-tech providers for <spam className="font-weight">fully 
        customized and rapid integration</spam>. You can also use mid-offices for accounting automation and financial reporting.</div>
</div>

<div className="second-card8">
    <div className="second-card4-title">Different integration models</div>
    <div className="second-card4-line2"></div>
    <div className="second-card4-text">Select the integration business model that is <spam className="font-weight">most 
        convenient</spam> and suited to you. Choose from net prices, commissions, or affiliates.</div>
</div>


<div className="second-card9">
    <img src={IMG7} alt="img7" className="image7"/>
    <div className="second-card9-text1">WORLD TRAVEL TECH AWARDS</div>
    <div className="second-card9-text2">2024</div>
</div>

<div className="second-card10">
    <img src={IMG8} alt="img8" className="image8"/>
    <div className="second-card9-text3">MAGELLAN AWARDS</div>
    <div className="second-card9-text4">2024</div>
</div>

<div className="second-card11">
    <img src={IMG9} alt="img9" className="image8"/>
    <div className="second-card9-text3">TDM TRAVEL TRADE EXCELLENCE AWARDS</div>
    <div className="second-card9-text4">2024</div>
</div>

<div className="second-card12">
    <img src={IMG10} alt="img10" className="image10"/>
    <div className="second-card9-text5">THE TRAVEL INDUSTRY AWARDS</div>
    <div className="second-card9-text6">2024</div>
</div>

<div className="second-card13">
    <img src={IMG11} alt="img11" className="image11"/>
    <div className="second-card9-text7">
    UZAKROTA TRAVEL AWARDS</div>
    <div className="second-card9-text8">2024</div>
</div>
<div className="purple1
"></div>
</div>
<div className="page-third">
     
     <div className="third-text1">Spread your wings with RateHawk!</div>
    <div className="third-text2">Book travel services from around the world. Anytime. Anywhere.</div>
    <div className="third-text3">Technology and travel agents' expertise come together to create a supercharged product that increases
         your revenue and efficiency.</div>
         <div className="third-text4">Check availability in real-time, book services, and receive booking confirmations immediately.</div>
        <a href="https://www.ratehawk.com/registration/"> <button className="third-btn">REGISTER NOW</button></a>


    <div className="third-card">
        <div className="triangle"></div>
        <AiFillYoutube className="youtube"/>
    </div>
    <div className="third-card2">
    <IoEarthOutline className="third-card2-icon1"/>
    <div className="third-card2-text1">Accommodation</div>
    <div className="third-card2-line"></div>
    <div className="third-card2-text2">Over 2.6M+ accommodation options in 220 countries and territories.</div>
    </div>


     <div className="third-card3">
    <FaCarSide className="third-card2-icon1"/>
    <div className="third-card2-text1">Transfers</div>
    <div className="third-card2-line"></div>
    <div className="third-card2-text2">Any type of transfer you need from micro to first-class available in 100+ countries.</div>
    </div> 


    <div className="third-card4">
    <MdAirplanemodeActive className="third-card2-icon1"/>
    <div className="third-card2-text1">Flights</div>
    <div className="third-card2-line"></div>
    <div className="third-card2-text2">
    Air tickets from 400 airlines worldwide, up to 9 passengers in a single booking.</div>
    </div> 

    
    <div className="third-card5">
    <FaCarSide className="third-card2-icon1"/>
    <div className="third-card2-text1">Car rental</div>
    <div className="third-card2-line"></div>
    <div className="third-card2-text2">
    Book a car for your clients within two minutes of sending a request without leaving the site.</div>
    </div> 
     
</div>

<div className="page-fourth">
    <div className="fourth-text1">Hawks all over the world</div>
    <div className="fourth-text2">Local RateHawk team. Meet in person anytime</div>
    <div className="fourth-text3">Just like our services, the RateHawk team operates all around the globe.
You can find our sales and account team members in 54 regions – ready to meet in person anytime, anywhere.
Learn more about our vacancies on the <a href="https://www.ratehawk.com/lp/en/career/"><spam className="color-purple">Career</spam></a> page.</div>

<img src={IMG18} alt="img18" className="fourth-image1"/>
<img src={IMG12} alt="img12" className="fourth-image"/>
<img src={IMG13} alt="img13" className="fourth-image2"/>
<img src={IMG14} alt="img14" className="fourth-image3"/>
<img src={IMG15} alt="img14" className="fourth-image4"/>
<img src={IMG16} alt="img14" className="fourth-image5"/>
<img src={IMG17} alt="img14" className="fourth-image6"/>
<div className="fourth-text4">Trusted by 100,000+ clients globally</div>


</div>
<div className="page-fifth">
    <div className="fifth-text">Our client’s feedback</div>
    <div className="fifth-card1">
        <img src={IMG19} alt="img19" className="fifth-card1-img1"/>
        <div className="fifth-card1-text">
        Myriam Ibañez
        </div>
        <div className="fifth-card1-text2">Owner — My Travel Your Travel</div>
        <div className="fifth-card1-line">  </div>
        <div className="fifth-card1-text3">RateHawk's professionalism allows me to offer my clients the required level of quality and service. At first, I chose RateHawk because of the rates, and now I am loyal to the service.
        The RateHawk website is easy to use, and I can find everything in one place, from accommodation management to booking transfers and flights </div>
        
            </div>


            <div className="fifth-card2">
       <div className="fifth-card1-img1"></div>
        <div className="fifth-card1-text">
        Sibel Tonkal
        </div>
        <div className="fifth-card1-text2">FIT Manager — Viking Turizm

        </div>
        <div className="fifth-card1-line">  </div>
        <div className="fifth-card1-text3">
        RateHawk has an easy and straightforward platform. It helps us find affordable and unique hotel 
        options worldwide that are not available in other systems.
When we are struggling to find a suitable hotel, RateHawk always provides many relevant options with good rates.
        </div>
        
            </div>


            
            <div className="fifth-card3">
       <div className="fifth-card1-img1"></div>
        <div className="fifth-card1-text">
        Paolo Corna
        </div>
        <div className="fifth-card1-text2">Owner — Shiva Viaggi

        </div>
        <div className="fifth-card1-line">  </div>
        <div className="fifth-card1-text3">
        I tried RateHawk on a whim. The commercial intrigued me and although I was initially doubtful, I was pleasantly surprised.
The platform is fast, intuitive, and full of accurate content and information. I also found the rates much more competitive than on other platforms.
        </div>
        
            </div>
            <div className="purple2"></div>
</div>
<div className="page-sixth">
<img src={IMG21} alt="img21" className="sixth-img"/>
<div className="sixth-text1">
Become a super travel agent
</div>
<div className="sixth-text2">
You're one step away. Get access to prices and bookings.
</div>
<div className="sixth-text3">
Quick, one-step registration to get access to the world. No waiting time. No fees. Fill in the form and start booking.
</div>
<a href="https://www.ratehawk.com/registration/">
<div className="sixth-btn">
    JOIN RATEHAWK
</div></a>
<div className="purple3
"></div>
</div>
<div className="page-seventh">
    <div className="seventh-title">
    News and promo
    </div>
    <button className="seventh-btn">
        MORE ARTICLES
    </button>
    <div className="seventh-card1">
        <img src={IMG22} alt="img22" className="seventh-img"/>
        <div className="seventh-card1-text1">15 Must-Visit Vacation Spots in 2025</div>
        <div className="seventh-card1-line"></div>
 <div className="C-text">  <FaRegCalendar  className="calendar"/><spam   className="text">28.02.2025</spam></div>
   
 <div className="T-text">
 <MdOutlineWatchLater />
<spam className="text">
3 days ago

</spam>
 </div>
</div>


<div className="seventh-card2
">
        <img src={IMG23} alt="img22" className="seventh-img"/>
        <div className="seventh-card1-text1">Seamless Transfers Start with RateHawk

        </div>
        <div className="seventh-card1-line"></div>
 <div className="C-text">  <FaRegCalendar  className="calendar"/><spam   className="text">27.02.2025
    </spam></div>
   
 <div className="T-text">
 <MdOutlineWatchLater />
<spam className="text">
4 days ago

</spam>
 </div>
</div>


<div className="seventh-card3
">
        <img src={IMG24

        } alt="img22" className="seventh-img"/>
        <div className="seventh-card1-text2
        ">Which Global Travel Trends Will Shape the Industry in 2025?

        </div>
        <div className="seventh-card1-line1
        "></div>
 <div className="C-text">  <FaRegCalendar  className="calendar"/><spam   className="text">25.02.2025
    </spam></div>
   
 <div className="T-text">
 <MdOutlineWatchLater />
<spam className="text">
6 days ago

</spam>
 </div>
</div>




<div className="seventh-card4
">
        <img src={IMG25

        } alt="img22" className="seventh-img"/>
        <div className="seventh-card1-text2
        ">RateHawk Q4 Digest: The Year of Innovation

        </div>
        <div className="seventh-card1-line1
        "></div>
 <div className="C-text">  <FaRegCalendar  className="calendar"/><spam   className="text">13.02.2025
    </spam></div>
   
 <div className="T-text">
 <MdOutlineWatchLater />
<spam className="text">
18 days ago

</spam>
 </div>
</div>

<div className="seventh-last">Media about us
    </div>




</div>
<div className="page-Eighth">
<div className="purple4"></div>
<img src={IMG26} alt="img26" className="eight-img"/>
<div className="Eight-text1">
Spread your wings with RateHawk
</div>
<button className="eight-btn">
    SIGN UP
</button>

</div>
<div className="page-ninth">
    <div className="ninth-text1">
    Partnership
    </div>
    <div className="ninth-text2">
    Cooperate and grow together with RateHawk
    </div>
    <div className="ninth-card1">
        <div className="ninth-card1-text1">
        For affiliate partners
        </div>
        <div className="ninth-card1-line">
        </div>
        <div className="ninth-card1-text2">
        Integrate our solution to make it easy and profitable to book hotels through your website or online service.
         Integrate quickly and reliably with our system. Still have questions? Contact us at <spam className="yellow">
         affiliate@emergingtravel.com</spam>

        
        </div>
        <button className="ninth-btn">
         LEARN MORE
        </button>
    </div>



    <div className="ninth-card2
    ">
        <div className="ninth-card1-text1">
        For suppliers
        </div>
        <div className="ninth-card1-line">
        </div>
        <div className="ninth-card1-text2">
        As official partners of the world's largest OTA, wholesalers, consolidators, and DMCs, we invite you to enhance your sales and grow your business together. Contact us at 
        <spam className="yellow">
        tpp@emergingtravel.com
         </spam>

        
        </div>
        <button className="ninth-btn">
         COOPERATE
        </button>
    </div>




    
    <div className="ninth-card3
    ">
        <div className="ninth-card1-text1">
        For hotels
        </div>
        <div className="ninth-card1-line">
        </div>
        <div className="ninth-card1-text2">
        Become our partner to increase your direct sales and the popularity 
        of your accommodation options. Register directly or contact <spam className="yellow">
        hotels@emergingtravel.com
      
         </spam>
        

        
        </div>
        <button className="ninth-btn2
        ">
         COOPERATE
        </button>
    </div>



     
    <div className="ninth-card4
    ">
        <div className="ninth-card1-text1">
        For technology providers
        </div>
        <div className="ninth-card1-line2
        ">
        </div>
        <div className="ninth-card1-text2">
        If you're mid-office or a platform looking to integrate with RateHawk to grow your business, contact <spam className="yellow">
        api@ratehawk.com
      
         </spam>
        
        

        
        </div>
        <button className="ninth-btn2
        ">
         COOPERATE
        </button>
    </div>



    <div className="ninth-card5
    ">
        <div className="ninth-card1-text1">
        For marketing and PR
        </div>
        <div className="ninth-card1-line3
        ">
        </div>
        <div className="ninth-card1-text2">
        We regularly run promotions, campaigns, and partner events to engage and incentivize our 
        clients with special offers. If you interested in such partnership please contact us at         <spam className="yellow">
        marketing@ratehawk.com
      
         </spam>

        
        

        
        </div>
        <button className="ninth-btn
        ">
         COOPERATE
        </button>
    </div>
    <a href="https://www.facebook.com/ratehawk">
    <RiFacebookCircleLine  className="facebook"
     /></a>
     <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGZPxisZ_pBygAAAZVbQ81IMIUuB7vgwGeeQLe61vQQZO-gt1OpZRqiQwsKs9cN4fC5i6euws39lmTqb0GR0xKI2orVR2YL3bU1OlSDvHKLvMBZo68MOhoJDYwfaAnx8khyohY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fratehawk-com%2F">
    <TbBrandLinkedin className="linkedin"
    /></a>

   <a href="https://www.ratehawk.com/lp/en/career/">
   
   <div className="carrer">
   Career
   </div>
</a>

<a href="https://blog.ratehawk.com/">
   <div className="blog">
    Blog
   </div>
</a>

<div className="ninth-text3">
Leaside Services Limited, reg.no HE342401, Business Address: 17 Karaiskaki Street, Office 22, Agaia Triada, Limassol, Cyprus, 3032
Emerging Travel Inc., reg.no 4869611, Business Address: 1000 N West Street, Suite 1200, Wilmington, DE 19801 USA
EMERGING TRAVEL UK LIMITED, Company number 12185384, Business Address: 19 Eastbourne Terrace, Office 3.01, Paddington, London, W2 6LG, UK
Emerging Travel Germany ETG GmbH, HRB 213546, Business Address: Friedrichstraße 171, 10117 Berlin, Germany
Emerging Travel Kazakhstan LLP, BIN 191240026456, Business address: Office SP2-18, 280 Baizakova Street, Bostandykskiy district, 050040, Almaty, Republic of Kazakhstan
Smart Middle East Travel Agency L.L.C, Reg.no: 1803677, Business address: MOHAMED HAMED SAIF ALRUMHI BUILDING, 104 – C4, Al Muteena, Dubai, United Arab Emirates
Emerging Travel Asia PTE. LTD, Reg.no: 201927854K, TA license: TA03682, Business address: 300 Tampines Avenue 5 #09-02, Tampines Junction Singapore 529653
</div>

<a href="https://www.ratehawk.com/legal/site/privacy-policy/">
<div className="ninth-text4">
Personal data processing and storage policy
</div>
</a>
<a href="https://www.ratehawk.com/legal/site/recommendation_technologies/">
<div className="ninth-text5">
Digital Services Act
</div>
</a>
<div className="ninth-text6">
Ratehawk is a registered service mark in the European Union
</div>

</div>
</div>

    );
};





export default TourismWeb;