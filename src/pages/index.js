import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import ContactForm from '../components/ContactForm';

import phoenix from '../assets/images/phoenix1.jpg';
import lumchrist from '../assets/images/lumchrist1.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/cod2.jpg';
import service from '../assets/images/service.webp';
import contact from '../assets/images/contact1.jpg';
import Scroll from '../components/Scroll';
import SEO from '../components/seo';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'service', name: 'My Services', icon: 'fa-server' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const Config = require('../../config');

const IndexPage = () => (
  <Layout>
    <SEO
      title={Config.siteTitle}
      description={Config.siteDescription}
      meta={Config.siteKeywords}
    />
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hello there! I am <strong>Wilson KOMLAN</strong>
              <br />A full stack developer - Cloud developer.
            </h2>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'about'}>
              <a href="#about" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>Some of my projects</p>

          <div className="row">
            <div className="col-6 col-12-mobile">
              <article className="item">
                <a
                  href="https://www.phoenixinvestmentpartners.biz/"
                  target="_blank"
                  className="image fit"
                >
                  <img src={phoenix} alt="" />
                </a>
                <header>
                  <h3>Phoenix Investment Partners Togo - website</h3>
                  <p>
                    <u>Technical specifications</u> :{' '}
                    <i>
                      ReactJs - HTML5 - Bootstrap4 - AWS Lambda - Amazon SNS -
                      Headless CMS Flottiq
                    </i>
                  </p>
                </header>
              </article>
            </div>
            <div className="col-6 col-12-mobile">
              <article className="item">
                <a
                  href="https://www.lumchristamofia.com/"
                  target="_blank"
                  className="image fit"
                >
                  <img src={lumchrist} alt="" />
                </a>
                <header>
                  <h3>Lumchrist Amofia Shop - website</h3>
                  <p>
                    <u>Technical specifications</u> :{' '}
                    <i>
                      ReactJs - HTML5 - Bootstrap4 - AWS Lambda - Amazon SNS -
                      Headless CMS Flottiq
                    </i>
                  </p>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>
          <h3>
            Full Stack <u>Developer</u> | Cloud <u>Developer</u>
          </h3>
          <br></br>
          <div className="row">
            <div className="col-4 col-12-mobile">
              <a href="/#" className="image featured">
                <img src={pic8} alt="" />
              </a>
            </div>
            <div className="col-8 col-12-mobile">
              <p>
                I am a freelance full stack developer since 2010. I have a solid
                background in Java and React, Spring boot and Bootstrap with
                a both monolithic and microservice architectures proficiency. I
                can build AWS cloud-based apps and perform on-premises migration
                to the cloud!{' '}
              </p>
              <p>
                Do you want to learn little yet proven programming tips? Visit
                my{' '}
                <a href="https://blog.koffikomlan.co" target="_blanck">
                  blog
                </a>{' '}
                and
                <a href="https://twitter.com/KomlanWilson" target="_blanck">
                  {' '}
                  my Twitter account
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="four">
        <div className="container">
          <header>
            <h2>My services</h2>
          </header>
          <div className="row">
            <div className="col-6 col-12-mobile">
              <br></br>
              <ul>
                <li>Website building</li>
                <li>Web Apps development</li>
                <li>Enterprise Software development</li>
                <li>On-premises migration to Cloud</li>
                <li>IT Consulting</li>
              </ul>
            </div>
            <div className="col-6 col-12-mobile">
              <a href="/#" className="image featured">
                <img src={service} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="five">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>
          <div className="row">
            <div className="col-5 col-12-mobile">
              <br></br>
              <a href="/#" className="image featured">
                <img src={contact} alt="" />
              </a>
            </div>
            <div className="col-7 col-12-mobile">
              <p>Please fill the below form to send me a quote request.</p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
