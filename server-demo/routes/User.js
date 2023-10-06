const Schema = require("../model/Schemas");

const songs = [
    {
      id: 1,
      title: 'Song 1',
      artist: 'Artist 1',
    },

    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
     
    },

    {
        id: 3,
        title: 'Song 3',
        artist: 'Artist 3',
      
      }
    // Add more songs here
  ];
  
  const playlists = [
    {
      id: 1,
      title: 'My Playlist',
      songs: [1, 2,3], // Song IDs
    },
    // Add more playlists here
  ];
  
  // Get all songs
  app.get('/api/songs', (req, res) => {
    res.json(songs);
  });
  
  // Get a specific song by ID
  app.get("/getDetails", async (req, res) => {
    try {
      const songId= await Schemas.find();

      res.send(songId);

    } catch (error) {

      console.log("error", error);
    }
  });


  app.post("/save_details", async (req, res) => {

    const newPlaylist = {
        id: playlists.length + 1,
        title: req.body.name,
        songs: req.body.songs || [], // Song IDs
      };
      playlists.push(newPlaylist);
      res.status(201).json(newPlaylist);
    try {

      let post = new Schema({
       
            id: playlists.length + 1,
            title: req.body.name,
            songs: req.body.songs || [], // Song IDs
        
      });
      const postSaved = await post.save();

      res.send({ message: "succesfully saved", postSaved });

    } catch (error) {

      console.error("post error", error);

      res.send({ message: "post error" }).status(405);
    }
  });
  model.exports = router;
 
 
  
  
  








  // Add a song to a playlist
//   app.put('/api/playlists/:id/add-song', (req, res) => {
//     const playlistId = parseInt(req.params.id);
//     const { songId } = req.body;
  
//     const playlist = playlists.find((p) => p.id === playlistId);
//     if (!playlist) {
//       return res.status(404).json({ message: 'Playlist not found' });
//     }
  
//     const songIndex = songs.findIndex((s) => s.id === songId);
//     if (songIndex === -1) {
//       return res.status(404).json({ message: 'Song not found' });
//     }
  
//     playlist.songs.push(songId);
//     res.json(playlist);
//   });
  
//   // Delete a playlist
//   app.delete('/api/playlists/:id', (req, res) => {
//     const playlistId = parseInt(req.params.id);
//     const index = playlists.findIndex((p) => p.id === playlistId);
//     if (index === -1) {
//       return res.status(404).json({ message: 'Playlist not found' });
//     }
//     playlists.splice(index, 1);
//     res.json({ message: 'Playlist deleted' });
//   });

