verySmallAndBasicAudioPlayer
============================

A very small and basic audio player. Uses the &lt;audio> element, and no web audio.

## Demo
See <a href="http://www.woudziel.nl/githubdemo/verySmallAndBasicAudioPlayer/">demo</a>.

## Instructions
Create sound-files. You need an .mp3 and an .ogg version of everything. Audicity (http://audacity.sourceforge.net/) is great for this.

Create an object
```var foo = verySmallAndBasicAudioPlayer({
    path: "path/to/sound", // required
    volume: 1, // optional, default = 1
    loop: true // optional, default = false
});```

Start the sound:
```foo.start();```

Stop the sound:
```foo.stop();```



