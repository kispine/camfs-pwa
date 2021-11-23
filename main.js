const constrains = {
    audio: false,
    video: {
        width: { ideal: 1920 },
        height: { ideal: 1080 }
    }
}

const initCamera = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constrains)

        const video = document.querySelector('.video')
        video.srcObject = stream
        video.play()
    } catch (e) {
        console.error(e)
    }
    
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })    
}

window.addEventListener('load', () => {
    initCamera()
})