import React from 'react';
import { RoomContext } from '../context';

export default class FeaturedRooms extends React.Component {

  static contextType = RoomContext;

  render() {

    const { featuredRooms } = this.context;
    console.log({featuredRooms});

    return (
      <div>
        from featured rooms
      </div>
    );
  };
};