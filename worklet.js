class CustomWorkletProcessor extends AudioWorkletProcessor {
     process() {
          console.log('Worklet is processing')
          
          return true
     }
}

registerProcessor('worklet-processor', CustomWorkletProcessor);