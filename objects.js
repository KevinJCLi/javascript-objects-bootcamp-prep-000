var playlist = {"Avril Lavigne": "Nobody's Home"};

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign(newPlaylist, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

