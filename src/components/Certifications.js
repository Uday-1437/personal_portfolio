import React from 'react';
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { VerifiedUser } from '@mui/icons-material';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className='hq'>
        <div className="text-center mb-5">
        <VerifiedUser className="mb-4" style={{ width: "40px", height: "40px" }} />
          <h1 className='heading'>Certifications</h1>
          <p className='description'>Showcasing my commitment to continuous learning and professional growth. Each certification represents a milestone in my journey, validating my skills and knowledge in specific domains.</p>
        </div>
        <div className='items'>
          <ol className="bk">
            <li className="uj">
              <BadgeCheckIcon className="icon" style={{ width: "24px", height: "24px" }} />
              <span>UI with React Development - 6 months training</span>
            </li>
            <li className="uj">
              <BadgeCheckIcon className="icon" style={{ width: "24px", height: "24px" }} />
              <span>Python 100 days Boot-Camp</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

