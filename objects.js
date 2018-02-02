var playlist = {"Avril Lavigne": "Nobody's Home"};

function updatePlaylist (playlist, artistName, songTitle) {
  var newPlaylist = {};
  newPlaylist = Object.assign(newPlaylist, playlist, {[artistName]: songTitle});
  return newPlaylist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

