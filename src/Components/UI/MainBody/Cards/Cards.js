import React from 'react';

import Card from './Card';
import img1 from '../../../../assets/worms-eyeview-of-green-trees-957024.jpg';

export default function Cards() {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={img1} title="Chess" />
          </div>
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={img1} title="Console" />
          </div>
          <div className="col-md-4 col-sm-4">
            <Card imgsrc={img1} title="Game center" />
          </div>
        </div>
      </div>
    </div>
  );
}
