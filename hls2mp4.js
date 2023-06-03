var ffmpeg = require('fluent-ffmpeg');

const STREAM_URL = 'http://x.x.x.x/playlist.m3u8';
const FILE_PATH = 'video.mp4';

ffmpeg()
   // Input file
   .input(STREAM_URL)
   .inputOptions('-reconnect', '1')
   // .inputOptions('-reconnect_at_eof', '1') // sometimes this option dont let grabb the video stream
   .inputOptions('-reconnect_streamed', '1')
   // .inputOptions('-async', '1')
   .outputOptions('-vcodec', 'copy')
   .outputOptions('-c', 'copy')
   .outputOptions('-crf', '28')
   // Output file
   .saveToFile(FILE_PATH)
   .on('progress', (progress) => {
      // if (progress.percent) {
      //    console.log(`Processing: ${Math.floor(progress.percent)}% done`);
      // }
      console.log('Processing...');
   })
   // The callback that is run when FFmpeg is finished
   .on('end', () => {
      console.log('FFmpeg has finished.');
   })
   // The callback that is run when FFmpeg encountered an error
   .on('error', (error) => {
      console.error(error);
   });

