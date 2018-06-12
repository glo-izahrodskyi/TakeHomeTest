// @flow
import geolib from 'geolib';

export function randomId(): string {
    return `id-${Math.random() * 1000}-${Math.random() * (Math.random() - Math.random()) * 10000}`;
}

export function formatDistance(distance: string | number): string {
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

export function regionContainingPoints(
    points: Array<any>,
): {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
} {
    if (points.length === 0) {
        return {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
        };
    }
    let minX;
    let maxX;
    let minY;
    let maxY;

    // init first point
    minX = points[0].latitude;
    maxX = points[0].latitude;
    minY = points[0].longitude;
    maxY = points[0].longitude;

    // calculate rect
    points.map(point => {
        minX = Math.min(minX, point.latitude);
        maxX = Math.max(maxX, point.latitude);
        minY = Math.min(minY, point.longitude);
        maxY = Math.max(maxY, point.longitude);
        return point;
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;

    const deltaX = maxX - minX + 0.2;
    const deltaY = maxY - minY + 0.2;
    return {
        latitude: midX,
        longitude: midY,
        latitudeDelta: deltaX,
        longitudeDelta: deltaY,
    };
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
