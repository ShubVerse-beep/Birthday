<audio id="bg-music" src="./images/Sahiba.mp3" loop muted></audio>

<script>
  window.addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    if (audio && audio.paused) {
      audio.muted = false;   // unmute before play
      audio.play().catch(err => {
        console.log("Playback failed:", err);
      });
    }
  }, { once: true });
</script>
