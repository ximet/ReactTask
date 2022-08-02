import React from 'react';
import me from '../resources/me.jpg';

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1>About</h1>

      <p>Welcome to Whatever Weather!</p>
      <p>
        <span className="bold_text">Our mission is simple:</span> to help weather enthusiasts choose
        not only the best but the most suitable weather instruments for their particular needs.
      </p>
      <p>
        Our expert team, with a passion for all things weather, spend their time testing, reviewing,
        and comparing the latest home weather stations and accessories on the market today to
        provide the most comprehensive and unbiased buying guides and reviews on the Internet.
      </p>
      <p>
        We have done the hard work, so you don’t have to. Our reviews and insights showcase the top
        weather instruments from the leading brands such as Davis Instruments, Ambient Weather,
        AcuRite, La Crosse Technology, and much more!
      </p>
      <p>
        Personal weather stations are not just a gadget for weather enthusiasts to enjoy but an
        important piece of technology for a number of entities, including business owners, farmers,
        schools, and sporting teams, to capture accurate and real-time information on the weather
        around them.
      </p>
      <h2>Meet Our Team</h2>
      <figure>
        <img className="img-circle" src={me} alt="developer alternate picture" />
        <figcaption>Yep, that's me alright!</figcaption>
      </figure>
    </div>
  );
}
