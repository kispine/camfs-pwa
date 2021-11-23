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

let fullscreen = false
const requestFullscreen = elem => {
    if (elem.requestFullscreen) {
        elem.requestFullscreen()
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen()
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen()
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
    }
}
const exitFullscreen = elem => {
    if (elem.exitFullscreen) {
        Document.exitFullscreen()
    } else if (elem.webkitExitFullscreen) {
        elem.webkitExitFullscreen()
    } else if (elem.mozCancelFullScreen) {
        elem.mozCancelFullScreen() 
    } else if (elem.msExitFullscreen) {
        elem.msExitFullscreen()
    }
}
const toggleFullscreen = (elem) => {
    if (!fullscreen) {
        requestFullscreen(elem)
    } else {
        exitFullscreen(elem)
    }
    fullscreen = !fullscreen
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then((res) => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err))
  })
}

window.addEventListener('load', () => {
    const video = document.querySelector('.video')
    document.addEventListener('keydown', (e) => toggleFullscreen(video))
    document.addEventListener('click', (e) => {
      e.preventDefault()
      if (e.button === 0) {
        toggleFullscreen(video)
      }
    })
    initCamera(video)
})
