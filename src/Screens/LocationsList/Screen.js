// @flow
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from './Style';
import LocationListRow from './Components/LocationListRow';
import getSortedLocations from './Redux/LocationsSelector';

type Props = {
    locations: [],
    navigation: any,
};
export class LocationsList extends Component<Props> {
    onRowPress(location: any) {
        this.props.navigation.navigate('Details', { location, editMode: false });
    }

    renderItem = (data: any) => {
        const { item } = data;
        return <LocationListRow onRowPress={() => this.onRowPress(item)} locationData={item} />;
    };

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
