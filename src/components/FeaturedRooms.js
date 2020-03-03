import React from 'react';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

import { RoomContext } from '../context';


export default class FeaturedRooms extends React.Component {

  static contextType = RoomContext;

  render() {

    const { loading, featuredRooms } = this.context;
    const rooms = featuredRooms.map(eachRoom => {
      return  <Room key={eachRoom.id} room={eachRoom}>

              </Room>
    })

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  };
};