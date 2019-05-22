if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/demo-serviceWorker/sw.js', { scope: '/' })
        .then(r => console.log('SW Registered!'))
        .catch(console.error)
}