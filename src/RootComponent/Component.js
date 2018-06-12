// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationView from '../Components/TabsRouter';
import setCurrentUserLocation from './Redux/Actions/SetUserLocation';
import listLocations from './Redux/Actions/ListLocations';

type Props = {
    listLocations: Function,
    setCurrentUserLocation: Function,
    locations: [],
};
export class RootComponent extends Component<Props> {
    componentDidMount() {
        // load locations only if we don't load them before
        if (this.props.locations.length === 0) {
            this.props.listLocations();
        }
        navigator.geolocation.getCurrentPosition(position => {
            this.props.setCurrentUserLocation(position.coords.latitude, position.coords.longitude);
        });
    }

    render() {
        return <NavigationView />;
    }
}

const mapStateToProps = state => ({
    locations: state.locations,
});

const mapDispatchToProps = {
    listLocations,
    setCurrentUserLocation,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RootComponent);
