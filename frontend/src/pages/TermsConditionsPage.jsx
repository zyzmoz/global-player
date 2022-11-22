import { NavLink } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import LandingPageNavMenu from '../components/Header/LandingPageNavMenu'

function TermsConditionsPage() {
  return (
    <div className="termsconditions-page">
      <LandingPageNavMenu className="nav-side-menu" />
      <div className="termsconditions-wrapper">
        <Header />
        <Headline text="Terms and Conditions" textAlign="center" color="#7DFAA4" fontSize="48px" />
        <div className="terms-conditions-wrapper">
          <p>Last updated: Oct 06, 2022 </p>
          <h2>TABLE OF CONTENTS</h2>
          <ol>
            <li>AGREEMENT TO TERMS</li>
            <li>INTELLECTUAL PROPERTY RIGHTS</li>
            <li>USER DATA</li>
            <li>CONTACT US</li>
          </ol>
          <h2>1. AGREEMENT TO TERMS</h2>
          <p>
            <br />
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf
            of an entity (&quot;you&quot;) and Supernova (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;), concerning your access to and use of the Global Player website as well as any other media
            form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto
            (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to
            be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p>
            <br />
            Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby
            expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or
            modifications to these Terms of Use from time to time. We will alert you about any changes by updating the
            “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such
            change. Please ensure that you check the applicable Terms every time you use our Site so that you understand
            which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have
            accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such
            revised Terms of Use are posted.
          </p>
          <p>
            <br />
            The information provided on the Site is not intended for distribution to or use by any person or entity in
            any jurisdiction or country where such distribution or use would be contrary to law or regulation or which
            would subject us to any registration requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Site from other locations do so on their own initiative and are solely
            responsible for compliance with local laws, if and to the extent local laws are applicable.
          </p>
          <br />
          <h2>2. INTELLECTUAL PROPERTY RIGHTS</h2>
          <p>
            <br />
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
            functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”)
            are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and
            various other intellectual property rights and unfair competition laws of the United States, international
            copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS”
            for your information and personal use only. Except as expressly provided in these Terms of Use, no part of
            the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted,
            publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited
            for any commercial purpose whatsoever, without our express prior written permission.
          </p>
          <p>
            <br />
            Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site
            and to download or print a copy of any portion of the Content to which you have properly gained access
            solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to
            the Site, the Content and the Marks.
          </p>
          <br />
          <h2>3. USER DATA</h2>
          <p>
            <br />
            We will maintain certain data that you transmit to the Site for the purpose of managing the performance of
            the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of
            data, you are solely responsible for all data that you transmit or that relates to any activity you have
            undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of
            any such data, and you hereby waive any right of action against us arising from any such loss or corruption
            of such data.
          </p>
          <br />
          <h2>4. CONTACT US</h2>
          <br />
          <NavLink to="/contact-us" className="contact-us-button">
            Contact Us
          </NavLink>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default TermsConditionsPage
