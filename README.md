Hey use this with responsability, this nodejs code lets you grabb m3u8 streams or other kind of streams locally, using ffmpeg.

What is necessary?

1. nodejs >= v20.2.0
2. node js package: fluent-ffmpeg >= 2.1.2
3. ffmpeg version 4.3.6-0, tested in version: 4.3.6-0+deb11u1

The script hls2mp4.js, let you grabb streams into a mp4 file and the other one hls2stream.js grabbs and gives you the possibility to create a m3u8 stream that you can share with a webserver service locally in a server for example; this lets you create a kind of a stream proxy by reading the remote source and transforms it into a m3u8 stream, modifying the video resolution and quality with ffmpeg if you want.

Use this by your own responsibility, considering the intelectual righs of the video source.

 