import React from 'react';
import { whatWeDo, whereWeAre } from '../constants';
import map from '../styles/map.png';
import architect from '../styles/architect.jpeg';

const Home = () => {
  return (
    <div>
      <h1 style={{ fontSize: '40px' }}>Why Call Eddie?</h1>
      <p>
        Remote Diagnostic: A professional will asses your problem BEFORE coming
        to your house, ensuring you have an accurate estimate for both time and
        cost, and that the technician will have all the right parts when he
        shows up at your door.
      </p>
      <p>
        Repair Database: Easily search for previous repairs, without going
        through stacks of old receipts.
      </p>
      <p>
        Scheduling: Take a look at our calendar to check for available times,
        making it easy to know how quickly a technician can come.
      </p>
      <div id="home-boxes">
        <div
          id="home-p1"
          style={{
            // backgroundImage: `url(${architect})`
            backgroundColor: 'rgb(78, 132, 219)',
          }}
        >
          <p>{whatWeDo}</p>
        </div>
        <p
          id="home-p2"
          style={{ backgroundImage: `url('${map}')` /*, opacity: 0.6*/ }}
        >
          {whereWeAre}
        </p>
      </div>
      <div id="app-link-box">
        <a href="https://fixiteddie-pwa.herokuapp.com/">Link to Our App</a>
      </div>
    </div>
  );
};

export default Home;
