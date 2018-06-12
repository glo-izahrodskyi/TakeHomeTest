export default function randomId() {
    return `id-${Math.random() * 1000}-${Math.random() * (Math.random() - Math.random()) * 10000}`;
}
