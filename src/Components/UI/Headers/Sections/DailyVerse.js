import React, { Fragment } from 'react';
import biblepicture from '../../../../assets/dailyverse.jpg';

export default function DailyVerse(props) {
  return (
    <Fragment>
      <div className="col-md-6">
        <div className="pray">
          <img src={biblepicture} alt="dailyversebible" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="panel text-left">
          <h1>Daily Verse</h1>
          <p className="pt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos asperiores in voluptas nisi earum blanditiis a soluta
            saepe, eaque neque.
          </p>
          <p className="pt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            exercitationem animi nihil repudiandae eaque debitis dolorum
            cupiditate praesentium, ratione maiores provident saepe consequuntur
            natus ea, odio ipsa voluptatibus, et quaerat.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
