import React from 'react';
import {
    createNavigationContainer,
    createNavigator,
    TabRouter,
    SafeAreaView,
    createStackNavigator,
    createMaterialTopTabNavigator,
} from 'react-navigation';
import { Platform, SegmentedControlIOS } from 'react-native';
import LocationsListScreen from '../Screens/LocationsList/Screen';
import LocationsMapScreen from '../Screens/LocationsMap/Screen';

function createIOSTabsNavigation(tabRoutes) {
    const IOSTabBar = ({ navigation }) => {
        const { routes } = navigation.state;
        const values = routes.map(r => r.routeName);
        return (
            <SafeAreaView>
                <SegmentedControlIOS
                    values={values}
                    selectedIndex={0}
                    style={{ margin: 20 }}
                    onChange={event => {
                        const r = routes[event.nativeEvent.selectedSegmentIndex];
                        navigation.navigate(r.routeName);
                    }}
                />
            </SafeAreaView>
        );
    };

    const IOSTabView = ({ descriptors, navigation }) => {
        const { routes, index } = navigation.state;
        const descriptor = descriptors[routes[index].key];
        const ActiveScreen = descriptor.getComponent();
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
                <IOSTabBar navigation={navigation} />
                <ActiveScreen navigation={descriptor.navigation} />
            </SafeAreaView>
        );
    };

    const IOSTabRouter = TabRouter(tabRoutes);
    const IOSTabs = createNavigationContainer(createNavigator(IOSTabView, IOSTabRouter, {}));

    return IOSTabs;
}

function createAndroidTabsNavigation(routes) {
    const navigationOptions = {};
    return createMaterialTopTabNavigator(routes, navigationOptions);
}

function createStackNavigation(tabs) {
    const stack = createStackNavigator({
        Home: {
            screen: tabs,
            navigationOptions: () => ({
                header: null,
            }),
        },
    });
    return stack;
}

function createNavigationRouter() {
    const tabRoutes = {
        Map: {
            screen: LocationsMapScreen,
        },
        List: {
            screen: LocationsListScreen,
        },
    };
    const tabs =
        Platform.OS === 'ios'
            ? createIOSTabsNavigation(tabRoutes)
            : createAndroidTabsNavigation(tabRoutes);
    return createStackNavigation(tabs);
}

export default createNavigationRouter();
