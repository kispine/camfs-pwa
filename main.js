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
    navigator.serviceWorker.register('service-worker.js');
}

window.onload = initCamera