import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";

import {  FaTwitter } from "react-icons/fa";
import { Dropdown } from "rsuite";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import "./header-style.css";
import 'rsuite/dist/rsuite.min.css'; 

const HeaderOptionsList = [
  { type: "link", value: "Home", route: "/" },
  
  { type: "link", value: "Community Members", route: "/members" },
  { type: "dropdown", value: "Featured", options: [
      { type: "link", value: "Community Stories", route: "/stories" },
      { type: "link", value: "Testimonials", route: "/testimonials" },
      { type: "link", value: "Featured Community Members", route: "/featured-community-members" }
  ]}
];

export default function Header() {
    const [headerOptions] = useState(HeaderOptionsList);
    return (
        <div className="header-announcement-wrapper">


                          {/* announcement-bar */}

            <div className="announcement-bar" 
                style={{
                    padding: '0.6rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.2rem'
                }}
            >
                <p>
                    We are working very hard and can't wait to lunch our site. 
                </p>
                <Link to="/mlh-localhackday-build-2022">
                    <Button>Learn more</Button>
                </Link>
            </div>




            <div className="header-component">
                <div className="header-content-wrapper content-center">
                    <div className="header-logo-wrapper">
                        <Link to="/" style={{ color: 'var(--h-dark)' }}>
                            <h4>LeetQuestion.com</h4>
                        </Link>
                    </div>
                    <div className="header-options-list-wrapper">
                        <ul className="header-options-list" style={{ listStyle: "none" }}>
                            {headerOptions.map((option, index) => {
                                if (option.type === 'link') {
                                    return (
                                        <Link to={option.route} key={index}>
                                            <li className="header-option">{option.value}</li>
                                        </Link>
                                    )
                                } else if (option.type === 'dropdown') {
                                    return (
                                        <Dropdown key={index} title="Featured">
                                            {option.options.map((_option, _index) => (
                                                <Link to={_option.route} key={_index}>
                                                    <DropdownItem>
                                                        {_option.value}
                                                    </DropdownItem>
                                                </Link>
                                            ))}
                                        </Dropdown>
                                    )
                                }
                            })}
                            <Button 
                            style={{ backgroundColor: 'white', color: 'black' }} 
                            onClick={() => window.open('https://twitter.com/LeetQuestion')}>
                                <FaTwitter/> Join Twitter
                            </Button>
                            <Button type="plain" style={{ backgroundColor: 'black', color: 'white' }}
                                onClick={() => window.open('#')}
                            >
                                Subscribe to Newsletter
                            </Button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}