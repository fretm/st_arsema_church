import React, { Fragment } from 'react';
import biblepicture from '../../../../assets/bible.jpg';
import DailyVerse from './DailyVerse';

export default function Sections() {
  return (
    <div className="section-1">
      <div className="container text-center">
        <div className="row">
          <DailyVerse />
        </div>
      </div>
    </div>
  );
}
