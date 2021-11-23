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
    window.onload = () => {
        navigator.serviceWorker.register('/sw.js')
    }
    
}

window.onload = initCamera