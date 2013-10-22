verySmallAndBasicAudioPlayer
============================

A very small and basic audio player. Uses the &lt;audio> element, and no web audio.

## Demo
See <a href="http://www.woudziel.nl/githubdemo/verySmallAndBasicAudioPlayer/">demo</a>.

## Instructions
1: First create sound-files. You need an .mp3 and an .ogg version of everything. Audicity (http://audacity.sourceforge.net/) is great for this.

2: Create an object
```
var foo = verySmallAndBasicAudioPlayer({
    path: "path/to/sound", // required
    volume: 1, // optional, default = 1
    loop: true // optional, default = false
});
```

3: Start the sound:
```
foo.start();
```

4: Stop the sound:
```
foo.stop();
```

5: You can now attach this to any DOM element, like buttons, images, paragraphs, whatever.