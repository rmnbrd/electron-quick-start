/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const startButton = document.getElementById('start')
const reloadButton = document.getElementById('reload')

startButton.addEventListener('click', async () => {
     const context = new AudioContext()

     console.log('Adding module')
     await context.audioWorklet.addModule('worklet.js')
})

reloadButton.addEventListener('click', () => {
     window.location.reload()
})