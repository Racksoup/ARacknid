import React from 'react';
import './App.scss';
import { store } from '../redux/store';
import Landing from './Landing/Landing.jsx';
import Navbar from './Navbar/Navbar.jsx';
import ServicePage from './ServicePage/ServicePage.jsx';
import InfoPage from './InfoPage/InfoPage.jsx';
import LogoDesign from '../assets/images/LogoDesign.jpg';
import BusinessCard from '../assets/images/BusinessCard.jpg';
import Website3 from '../assets/images/Website3.jpg';
import Website4 from '../assets/images/Website4.jpg';
import Hosting from '../assets/images/Hosting.jpg';
import Donut from '../assets/images/Donut.jpg';
import Analysis from '../assets/images/Analysis.png';
import Connor from '../assets/images/Connor.jpg';
import Community from '../assets/images/Community.jpg';
import Desk1 from '../assets/images/Desk1.jpg';

import { Provider } from 'react-redux';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import {
  faIcons,
  faAddressCard,
  faSpider,
  faTv,
  faPieChart,
} from '@fortawesome/free-solid-svg-icons';
import { faCentos } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route
              path='/logo-design'
              element={
                <ServicePage
                  layout={2}
                  icon={faIcons}
                  label='Logo Design'
                  title='Well thought logo design is crucial for a successful business.'
                  subtitle='Crafting unique and memorable logos to represent your brand'
                  text={`Welcome to my Logo Design page! As a solo developer, I understand the importance of having a unique and memorable logo to represent your brand. Your logo is the face of your business, and it's the first thing that customers will see when they come across your brand.

                  I specialize in crafting custom logos that accurately represent your brand's values and identity. I work closely with my clients to understand their vision and design logos that are unique, memorable, and timeless.
                  
                  With my expertise in logo design, I am committed to delivering logos that are not only visually appealing but also effectively communicate your brand's message to your audience. Whether you're a startup or an established business, I am here to help you create a logo that you'll be proud to showcase.
                  
                  Investing in a professionally designed logo is a crucial step in building a successful brand. Contact me today to learn more about how I can help you craft a unique and memorable logo for your business.`}
                  image={LogoDesign}
                  examples='logoDesign'
                />
              }
            />
            <Route
              path='/business-cards'
              element={
                <ServicePage
                  layout={1}
                  icon={faAddressCard}
                  label='Business Cards'
                  title='First impressions matter. Business cards that inspire action'
                  subtitle='Creating eye-catching business card designs to make a lasting impression'
                  text={`As a developer, I understand the importance of having a professional and eye-catching business card to leave a lasting impression on potential clients and customers.

                  I specialize in designing custom business cards that accurately reflect your brand's identity and values. With my attention to detail and creativity, I strive to create designs that are unique, memorable, and effective in promoting your business.
                  
                  Whether you need a simple and elegant design or a more complex and creative one, I work closely with my clients to understand their vision and deliver designs that exceed their expectations.
                  
                  Investing in a professionally designed business card is a key component of your marketing strategy. It's a tangible representation of your brand that can make a lasting impression on potential clients and customers. Contact me today to learn more about how I can help you create an eye-catching business card design that will leave a lasting impression on anyone who receives it.`}
                  image={BusinessCard}
                  examples='businessCards'
                />
              }
            />
            <Route
              path='/website-design'
              element={
                <ServicePage
                  layout={1}
                  icon={faSpider}
                  label='Website Design'
                  title='First class website design. Connect with your customers'
                  subtitle='Creating custom, visually stunning websites to elevate your online presence'
                  text={`As a web designer, I believe that your website is the cornerstone of your online presence. I am committed to helping you create a custom website that accurately represents your brand and engages your audience.

                  With my experience and expertise, I specialize in designing visually stunning websites that are both aesthetically pleasing and functional. Whether you need a simple brochure website or a complex e-commerce platform, I will work closely with you to create a website that meets your unique needs and exceeds your expectations.
                  
                  Investing in a professionally designed website is crucial for the success of your online business. Contact me today to learn more about how I can help you elevate your online presence with a custom website design.`}
                  image={Website3}
                  examples='websiteDesign'
                />
              }
            />
            <Route
              path='/website-implementation'
              element={
                <ServicePage
                  layout={2}
                  icon={faTv}
                  label='Website Implementation'
                  title='Need someone to implement your website design?'
                  subtitle='Bringing your website design to life with seamless implementation'
                  text={`Creating a visually stunning website is only half the battle. The implementation of that design is just as crucial to ensure that your website functions properly and delivers a seamless user experience.

                  With my expertise in web development, I specialize in bringing your website design to life with seamless implementation. Whether you need a simple brochure website or a complex e-commerce platform, I am committed to delivering a website that is fast, responsive, and user-friendly.
                  
                  I use the latest web development technologies and techniques to ensure that your website is optimized for performance, security, and search engine visibility. I also work closely with my clients throughout the implementation process to ensure that their website meets their unique needs and exceeds their expectations.
                  
                  Investing in professional website implementation is crucial to the success of your online business. Contact me today to learn more about how I can help you bring your website design to life with seamless implementation.`}
                  image={Website4}
                  examples='none'
                />
              }
            />
            <Route
              path='/website-hosting'
              element={
                <ServicePage
                  layout={2}
                  icon={faCentos}
                  label='Website Hositing'
                  title='Looking for someone to host your website for you?'
                  subtitle='Reliable and secure website hosting to keep your online business running smoothly'
                  text={`I understand that reliable and secure website hosting is essential to keep your online business running smoothly. That's why I offer website hosting services that are fast, secure, and affordable.

                  I use industry-leading web hosting providers that offer the latest hosting technologies and features to ensure that your website is always up and running. From daily backups to server-level security, I take all the necessary measures to ensure that your website is protected from online threats and data loss.
                  
                  Whether you need shared hosting or a dedicated server, I offer hosting packages that are tailored to meet your unique needs and budget. I also provide ongoing maintenance and support to ensure that your website stays up-to-date and optimized for performance.
                  
                  Investing in reliable and secure website hosting is crucial to the success of your online business. Contact me today to learn more about how I can help you choose the right hosting package for your website and keep your online business running smoothly.`}
                  image={Hosting}
                  examples='none'
                />
              }
            />
            <Route
              path='/analytics'
              element={
                <ServicePage
                  layout={1}
                  icon={faPieChart}
                  label='SEO & Analytics'
                  title='Rank better on search engines and get stats for your website.'
                  subtitle='Gaining insights and making informed decisions with website analytics'
                  text={`I offer website analytics services that help you track, analyze, and improve your website's performance.

                  I use industry-leading analytics tools to help you measure and analyze key metrics such as website traffic, user behavior, and conversion rates. With this data, I can provide you with actionable insights that help you make informed decisions to improve your website's performance and achieve your business goals.
                  
                  Whether you need to optimize your website for search engines or improve user engagement, my website analytics services can help you identify areas for improvement and make data-driven decisions. I also provide ongoing support and recommendations to ensure that you are getting the most out of your website analytics data.
                  
                  Investing in website analytics is essential to the success of your online business. Contact me today to learn more about how I can help you gain insights and make informed decisions for your website's performance.`}
                  image={Analysis}
                  examples='none'
                />
              }
            />
            <Route
              path='/animation'
              element={
                <ServicePage
                  layout={2}
                  icon={faSpider}
                  label='Animation'
                  title='Website animations that develop character.'
                  subtitle='Captivate your audience with website animation'
                  text={`Adding animations to your website can captivate your audience and create a more engaging user experience. That's why I offer website animation services that help bring your website to life and make it stand out from the competition.

                  I use the latest web animation technologies and techniques to create stunning animations that are both functional and visually appealing. From simple hover effects to complex animated graphics, I can help you add animations that enhance your website's user experience and showcase your brand's unique personality.
                  
                  Whether you need animations for your website's homepage, product pages, or blog posts, my website animation services can help you create a more immersive and engaging experience for your users. I also work closely with my clients to ensure that their animations are optimized for performance, accessibility, and user experience.
                  
                  Investing in professional website animation can help your online business stand out from the crowd and increase user engagement. Contact me today to learn more about how I can help you captivate your audience with website animation.`}
                  image={Donut}
                  examples='animations'
                />
              }
            />
            <Route
              path='/about'
              element={
                <InfoPage
                  image={Connor}
                  title='Connor Rack'
                  subtitle='Developer, Designer'
                  text={`As a web developer, I specialize in designing, developing, and maintaining websites that are both visually appealing and functional. With years of experience in web development, I stay up-to-date with the latest technologies and design trends to create custom websites that meet each client's unique needs.

                  I understand that effective communication is crucial to building successful partnerships, so I work closely with my clients throughout the entire development process. From initial design concepts to the final launch of the website, my goal is to ensure that every client is completely satisfied with the end result.
                  
                  Whether you're a small business owner looking to establish an online presence or a large corporation in need of a complex e-commerce website, I have the expertise and experience to help you achieve your goals. Contact me today to learn more about how I can help you take your online presence to the next level.`}
                  contact={false}
                />
              }
            />
            <Route
              path='/community'
              element={
                <InfoPage
                  image={Community}
                  title='community'
                  subtitle='Building Up'
                  text='At Aracknid, I am dedicated to creating innovative and engaging online experiences for my clients. I believe that the power of the internet can transform businesses, and I am committed to helping our clients achieve their goals through cutting-edge web development services.

                  The Aracknid community is made up of the many businesses that I have helped over the years. I take pride in the success of my clients and the impact that Aracknid has had on their businesses. Through my partnership with these businesses, I have built a strong network of satisfied customers who are passionate about Aracknid Design services.
                  
                  I understand that the world of web development can be complex and intimidating, which is why I am committed to providing my clients with the highest level of support and guidance throughout their journey.
                  
                  The core goal of Aracknid is to help businesses succeed. I believe that by creating exceptional online experiences, I can help businesses reach their full potential and thrive in the digital age. I invite you to join our community of successful businesses and experience the transformative power of Aracknid Design services.
                  
                  I look forward to helping your business succeed!'
                  contact={false}
                />
              }
            />
            <Route
              path='/planning'
              element={
                <InfoPage
                  image={Desk1}
                  title='Planning'
                  subtitle='Getting Started'
                  text={`Building a website can be a daunting task, but it's also an exciting opportunity to create a strong online presence for your business. That's where we come in. I can help you build a website that meets your needs and exceeds your expectations. We understand that every business has unique needs and challenges when it comes to building a website. That's why I take a customized approach to every project I work on. Contact me today to learn more about how I can help you build the perfect website for your business.`}
                  contact={true}
                />
              }
            />
          </Routes>
        </Provider>
      </div>
    </Router>
  );
};

export default App;
