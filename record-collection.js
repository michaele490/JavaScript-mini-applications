const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // Creates new album if it doesn't exist
  if (!records[id]) {
    records[id] = {};
  }

  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value; 
  } else {
    if (records[id].hasOwnProperty(prop)) {
      records[id].tracks.push(value);
    } else {
      records[id].tracks = [value];
    }
  }

  return records;
}

const newCollection = updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
console.log(newCollection);
