// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker, Callout } from 'react-native-maps';
import geolib from 'geolib';
import styles from './Style';
import getLocations from './Redux/LocationsSelector';
import { randomId, regionContainingPoints } from '../../Utils/Utils';
import LocationDetailsModal from './Components/LocationDetailsModal';
import NewLocationModal from './Components/NewLocationModal';

type Props = {
    locations: [],
    navigation: any,
    userLocation: { latitude: number, longitude: number },
};

type State = {
    initedRegion: boolean,
    mapReady: boolean,
    selectedLocation: any,
};
export class LocationsMap extends Component<Props, State> {
    locationDetailsModal: any;
    newLocationsModal: any;
    constructor(props: Props) {
        super(props);
        this.state = {
            initedRegion: false,
            mapReady: false,
            selectedLocation: {},
        };
    }

    getInitialRegion() {
        const { locations } = this.props;
        const points = locations.map(location => ({
            latitude: location.lat,
            longitude: location.lng,
        }));
        let initialRegion;
        if (points.length && !this.state.initedRegion && this.state.mapReady) {
            initialRegion = regionContainingPoints(points);
            this.setState({ initedRegion: true });
        } else {
            initialRegion = null;
        }
        return initialRegion;
    }

    onPressOnMarker(selectedLocation: any) {
        this.setState({ selectedLocation });
        this.locationDetailsModal.open();
    }

    onPressOnMap(coordinate: { latitude: number, longitude: number }) {
        const distance = geolib.getDistance(
            { latitude: coordinate.latitude, longitude: coordinate.longitude },
            {
                latitude: this.props.userLocation.latitude,
                longitude: this.props.userLocation.longitude,
            },
        );
        const locationInfo = {
            id: randomId(),
            name: 'Location title',
            distance,
            lat: coordinate.latitude,
            lng: coordinate.longitude,
            description: '',
        };

        this.setState({ selectedLocation: locationInfo });
        this.newLocationsModal.open();
    }

    onSaveNewLocation = () => {
        const { selectedLocation } = this.state;
        this.newLocationsModal.close();
        this.props.navigation.navigate('Details', { location: selectedLocation, editMode: true });
    };

    onCancelSave = () => {
        this.newLocationsModal.close();
    };

    openDetailsScreen = () => {
        const { selectedLocation } = this.state;
        this.locationDetailsModal.close();
        this.props.navigation.navigate('Details', { location: selectedLocation, editMode: false });
    };

    render() {
        const { locations } = this.props;
        const { selectedLocation } = this.state;
        return (
            <View style={styles.container}>
                <LocationDetailsModal
                    name={selectedLocation.name}
                    distance={selectedLocation.distance}
                    onDetails={this.openDetailsScreen}
                    ref={element => {
                        this.locationDetailsModal = element;
                    }}
                />
                <NewLocationModal
                    name={selectedLocation.name}
                    distance={selectedLocation.distance}
                    ref={element => {
                        this.newLocationsModal = element;
                    }}
                    onSave={this.onSaveNewLocation}
                    onCancel={this.onCancelSave}
                />
                <MapView
                    style={styles.map}
                    showsUserLocation
                    onMapReady={() => {
                        this.setState({ mapReady: true });
                    }}
                    onLongPress={event => this.onPressOnMap(event.nativeEvent.coordinate)}
                    region={this.getInitialRegion()}
                >
                    {locations.map(location => (
                        <Marker
                            key={location.id}
                            coordinate={{
                                latitude: location.lat,
                                longitude: location.lng,
                            }}
                            title={location.name}
                            onPress={() => {
                                this.onPressOnMarker(location);
                            }}
                            description={location.name}
                        >
                            <Callout tooltip>
                                <Text />
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    locations: getLocations(state),
    userLocation: state.userLocation,
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LocationsMap);
