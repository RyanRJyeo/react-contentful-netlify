import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  // getData

  componentDidMount(){
    // this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  };

  formatData(items){
    let tempItems = items.map(eachItem => {
      let id = eachItem.sys.id
      let images = eachItem.fields.images.map(eachImage => eachImage.fields.file.url);
      let room = {...eachItem.fields, images, id}
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    );
  };
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext } ;