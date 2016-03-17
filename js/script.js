var player;

function onYouTubeIframeAPIReady() {
    // player = new YT.Player('banner', {
    //     events: {
    //         'onReady': onPlayerReady
    //     }
    // });
}

function onPlayerReady(event) {
    player.mute();
    player.playVideo();
}