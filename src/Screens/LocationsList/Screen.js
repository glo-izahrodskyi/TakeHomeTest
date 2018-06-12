// @flow
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from './Style';
import LocationListRow from './Components/LocationListRow';
import getSortedLocations from './Redux/LocationsSelector';

type Props = {
    locations: [],
};
export class LocationsList extends Component<Props> {
    onRowPress() {}

    renderItem = ({ item }) => (
        <LocationListRow onRowPress={() => this.onRowPress()} locationData={item} />
    );

    render() {
        const { locations } = this.props;
        return (
            <View style={styles.container}>
                <FlatList styles={styles.list} data={locations} renderItem={this.renderItem} />
            </View>
        );
    }
}

const mapStateToProps = state => ({ locations: getSortedLocations(state) });

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LocationsList);
