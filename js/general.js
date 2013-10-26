/*
 * verySmallAndBasicAudioPlayer
 * Copyright (c) 2013 Kor Dwarshuis (dwarshuis.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */
var verySmallAndBasicAudioPlayer = function (args) {
    "use strict";
    var AudioElement = function (args) {
        if (args.path) {
            this.path = args.path;
        }
        else {
            throw new Error("AudioElement(): You should provide a path to the soundfile.");
        }
        this.volume = args.volume || 1;
        this.loop = args.loop || false;
        this.createElement();
    };

    AudioElement.prototype.createElement = function () {
        var fragment = document.createDocumentFragment();
        this.audio = fragment.appendChild(document.createElement('audio'));
        this.audio.volume = this.volume;
        if (this.loop === true) {
            this.audio.setAttribute("loop", true);
        }
        var sourceMP3 = (document.createElement('source'));
        sourceMP3.setAttribute("src", this.path + ".mp3");
        sourceMP3.setAttribute("type", "audio/mpeg");
        var sourceOGG = (document.createElement('source'));
        sourceOGG.setAttribute("src", this.path + ".ogg");
        sourceOGG.setAttribute("type", "audio/ogg");
        this.audio.appendChild(sourceMP3);
        this.audio.appendChild(sourceOGG);
        document.getElementsByTagName('body').item(0).appendChild(fragment);
    };

    AudioElement.prototype.play = function () {
        this.audio.pause();
        if (this.audio.currentTime !== 0) {
            this.audio.currentTime = 0;
        }
        this.audio.play();
    };

    AudioElement.prototype.stop = function () {
        this.audio.pause();
        if (this.audio.currentTime !== 0) {
            this.audio.currentTime = 0;
        }
    };

    return new AudioElement(args);
};

/**
 * Create the objects
 */
var anElement2 = verySmallAndBasicAudioPlayer({path: "sound/61225__robinhood76__00430-fart-2", volume: 0.8});
var anElement3 = verySmallAndBasicAudioPlayer({path: "sound/140583__thecluegeek__confused", volume: 1});
var anElement4 = verySmallAndBasicAudioPlayer({path: "sound/151223__owlstorm__female-laugh", volume: 1});
var anElement5 = verySmallAndBasicAudioPlayer({path: "sound/26403__roscoetoon__kiss", volume: 0.5});
var anElement6 = verySmallAndBasicAudioPlayer({path: "sound/149492__mimikrycz__shock", volume: 0.5});
var anElement7 = verySmallAndBasicAudioPlayer({path: "sound/29543__bennychico11__wink", volume: 1});
var anElement8 = verySmallAndBasicAudioPlayer({path: "sound/124738__robinhood76__03311-cartoon-mocking-tongue", volume: 1});
var anElement9 = verySmallAndBasicAudioPlayer({path: "sound/197430__teammasaka__team-masaka-sad-moan", volume: 1});
var anElement10 = verySmallAndBasicAudioPlayer({path: "sound/180298__jorickhoofd__male-laughing-out-loud-2", volume: 0.6});
var anElement11 = verySmallAndBasicAudioPlayer({path: "sound/170781__esperar__hmm-ahh", volume: 1});
var testStartAndStop = verySmallAndBasicAudioPlayer({path: "sound/61225__robinhood76__00430-fart-2", volume: 1, loop: true});


/*
 * We need something, like smileys, or buttons where we can click on or touch to make the sound start or stop
 */


/*
 * Function to add mousedown and touchstart to a bunch of buttons
 */
function addMouseDownAndTouchStart(args) {
    for (var i = 0; i < args.length; i++) {
        if (Modernizr.touch) {
            args[i].target.addEventListener("touchstart", args[i].listener, false);
        } else {
            args[i].target.addEventListener("mousedown", args[i].listener, false);
        }
    }
}


/*
 * an array of objects with all the buttons and what to do with them
 */
var allButtons = [
    {
        target: document.querySelector("#play2"),
        listener: function(){anElement2.play();}
    },
    {
        target: document.querySelector("#play11"),
        listener: function(){anElement3.play();}
    },
    {
        target: document.querySelector("#play4"),
        listener: function(){anElement4.play();}
    },
    {
        target: document.querySelector("#play3"),
        listener: function(){anElement5.play();}
    },
    {
        target: document.querySelector("#play10"),
        listener: function(){anElement6.play();}
    },
    {
        target: document.querySelector("#play12"),
        listener: function(){anElement7.play();}
    },
    {
        target: document.querySelector("#play6"),
        listener: function(){anElement8.play();}
    },
    {
        target: document.querySelector("#play7"),
        listener: function(){anElement9.play();}
    },
    {
        target: document.querySelector("#play8"),
        listener: function(){anElement10.play();}
    },
    {
        target: document.querySelector("#play5"),
        listener: function(){anElement11.play();}
    },
    {
        target: document.querySelector("#start"),
        listener: function(){testStartAndStop.play();}
    },
    {
        target: document.querySelector("#stop"),
        listener: function(){testStartAndStop.stop();}
    }

];

/*
 * run the function
 */
addMouseDownAndTouchStart(allButtons);