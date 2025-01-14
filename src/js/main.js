"use strict";

const feather = require("feather-icons");

//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import Fern from "@ryangjchandler/fern";

window.Alpine = Alpine;
//Init intersect plugin
Alpine.plugin(intersect);
//Init Fern plugin
Alpine.plugin(Fern);
//Init Fern persisted store
Alpine.persistedStore("app", {
  isSiderbarOpen: false,
});
//Start Alpine JS
Alpine.start();

import { initPageLoader } from "./libs/components/pageloader/pageloader";
import "./libs/components";

const showPageloader = initPageLoader();

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //Switch backgrounds
    const changeBackgrounds = insertBgImages();

    //Feather Icons
    const featherIcons = feather.replace();

    var track = document.getElementById('track');

    var controlBtn = document.getElementById('play-pause');

    function playPause() {
        if (track.paused) {
            track.play();
            //controlBtn.textContent = "Pause";
            controlBtn.className = "pause";
        } else { 
            track.pause();
            //controlBtn.textContent = "Play";
            controlBtn.className = "play";
        }
    }

    // controlBtn.addEventListener("click", playPause);
    // track.addEventListener("ended", function() {
    //   controlBtn.className = "play";
    // });

  }
};
