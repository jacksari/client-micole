module.exports = {
    reactStrictMode: true,
    env: {
        frontendUrl: 'https://micole.pe',
        apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : 'https://micole.jacksari.com/api'
    }
}