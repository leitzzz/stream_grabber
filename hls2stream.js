const ffmpeg = require('fluent-ffmpeg')

let counter = 0;

const STREAM_URL = 'http://x.x.x.x/playlist.m3u8';
const SAVE_FILES_PATH = 'stream.m3u8';

ffmpeg()
   .input(STREAM_URL)
   .inputOptions('-reconnect', '1')
   .inputOptions('-reconnect_streamed', '1')
   .addOptions([
      '-profile:v baseline',
      '-level 3.0',
      '-start_number 0',
      '-hls_time 10',
      '-hls_list_size 0',
      '-f hls',
      // '-sn -ignore_unknown', // sometimes is useful this option
   ])
   // .outputOptions('-vf', 'scale=640:480') // scale factor
   .outputOptions('-crf', '32') // video quality, lower value means high processor usage
   .output(SAVE_FILES_PATH).on('end', () => {
      console.log('end');
   }).on('progress', function (progress) {
      counter++;
      console.log('Processing: ' + counter + ' done')
   }).run();