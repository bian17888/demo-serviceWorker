if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/demo-serviceWorker/sw.js', { scope: '/demo-serviceWorker' })
        .then(r => console.log('SW Registered!'))
        .catch(console.error)
}