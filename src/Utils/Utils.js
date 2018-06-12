// @flow
import geolib from 'geolib';

export function randomId(): string {
    return `id-${Math.random() * 1000}-${Math.random() * (Math.random() - Math.random()) * 10000}`;
}

export function formatDistance(distance): string {
    const numberDistance = parseInt(distance, 10);
    let result;
    if (numberDistance < 1000) {
        result = `${numberDistance} m`;
    } else if (numberDistance >= 1000 && numberDistance < 100000) {
        result = `${(numberDistance / 1000).toFixed(2)} km`;
    } else {
        result = `${Math.floor(numberDistance / 1000)} km`;
    }
    return result;
}

export function calculateLocationsDistance(
    locations: [],
    userPosition: { latitude: number, longitude: number },
) {
    locations.forEach(location => {
        location.distance = geolib.getDistance(
            { latitude: location.lat, longitude: location.lng },
            { latitude: userPosition.latitude, longitude: userPosition.latitude },
        );
    });
}
