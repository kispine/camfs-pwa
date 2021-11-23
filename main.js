const constrains = {
  audio: false,
  video: {
    width: { ideal: 1920 },
    height: { ideal: 1080 },
  },
}

const initCamera = async (video) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constrains)
    video.srcObject = stream
    video.play()
  } catch (e) {
    console.error(e)
  }
}

const openFullscreen = (elem) => {
    elem.requestFullscreen()

    elem.addEventListener('mousedown', () => elem.exitFullscreen())
    elem.addEventListener('keydown', () => elem.exitFullscreen())
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then((res) => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err))
  });
}

window.addEventListener('load', () => {
    const video = document.querySelector('.video')
    openFullscreen(video)
    initCamera(video)
})
