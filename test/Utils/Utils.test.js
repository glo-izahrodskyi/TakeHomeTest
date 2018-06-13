import { formatDistance, regionContainingPoints } from '../../src/Utils/Utils';

describe('formatDistance', () => {
    it('should correct parse meters', () => {
        expect(formatDistance(32)).toBe('32 m');
    });

    it('should correct parse km', () => {
        expect(formatDistance(12333)).toBe('12.33 km');
    });

    it('should correct parse huge distance in km', () => {
        expect(formatDistance(543345)).toBe('543 km');
    });
});

describe('regionContainingPoints', () => {
    it('should coorect calculate region with one point', () => {
        const points = [{ latitude: 22, longitude: 33 }];
        const region = regionContainingPoints(points);
        const result = {
            latitude: 22,
            latitudeDelta: 0.2,
            longitude: 33,
            longitudeDelta: 0.2,
        };
        expect(region).toEqual(result);
    });

    it('should coorect calculate region with several points', () => {
        const points = [
            { latitude: 22, longitude: 33 },
            { latitude: 0, longitude: 0 },
            { latitude: -22, longitude: -3 },
        ];
        const region = regionContainingPoints(points);
        const result = {
            latitude: 0,
            latitudeDelta: 44.2,
            longitude: 15,
            longitudeDelta: 36.2,
        };
        expect(region).toEqual(result);
    });
});
