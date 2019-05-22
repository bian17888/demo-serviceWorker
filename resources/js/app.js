if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../sw.js', { scope: '/' })
        .then(r => console.log('SW Registered!'))
        .catch(console.error)
}