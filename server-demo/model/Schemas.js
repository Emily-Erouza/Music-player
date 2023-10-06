
const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({

    title: { type: String, required: true },

    songs: [
        {
            title: { type: String, required: true },

            artist: { type: String, required: true },

            duration: { type: Number, required: true },
        },
    ],

  
});

module.exports = mongoose.model('Playlist', playlistSchema);


// const Playlist = require('./playlist'); // Import your playlist model

// const testPlaylist = new Playlist({
//   title: 'My Test Playlist',
//   songs: [
//     { title: 'amapiano', artist: 'Seemah -Thando', duration: 180 },
//     { title: 'rnb', artist: 'Cardi B - Ring', duration: 240 },
//     { title: 'hip hop', artist: '2pac - lost you', duration: 240 },
//   ],
//   createdBy: 'userId', // Replace 'userId' with the actual user ID
// });

// testPlaylist.save()
// .then(doc =>{
//     console.log("doc")
// })
// .catch(err =>{
// console.log("err occured")
// });