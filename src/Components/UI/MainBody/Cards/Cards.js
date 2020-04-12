import React from 'react';

import Card from './Card';
import img1 from '../../../../assets/worms-eyeview-of-green-trees-957024.jpg';

export default function Cards() {
  return (
    <div>
      <div className="container   mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={img1} title="Our Beliefs" />
          </div>
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={img1} title="Staff" />
          </div>
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={img1} title="Message Library" />
          </div>
        </div>
      </div>
    </div>
  );
}
