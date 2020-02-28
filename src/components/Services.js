import React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends React.Component {
  state={
    services:[
      {
        icon: <FaCocktail/>,
        title: "free cocktails",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        icon: <FaHiking/>,
        title: "endless hiking",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        icon: <FaShuttleVan/>,
        title: "free shuttle",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        icon: <FaBeer/>,
        title: "strongest beer",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {
            this.state.services.map((x, index) => {
              return  <article key={index} className="service">
                        <span>{x.icon}</span>
                        <h6>{x.title}</h6>
                        <p>{x.info}</p>
                      </article>
            })
          }
        </div>
      </section>
    );
  };
};