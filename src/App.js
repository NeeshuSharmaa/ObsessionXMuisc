import React, { useState } from "react";
import "./styles.css";

var songsDictionary = {
  love: [
    {
      name: "Take On The World",
      artist: "You Me At Six"
    },
    {
      name: "Home",
      artist: "Edward Sharpe"
    },
    {
      name: "Just You & I",
      artist: "Tom Walker"
    }
  ],
  fire: [
    {
      name: "I Lived",
      artist: "One Direction"
    },
    {
      name: "Don't Stop Believing",
      artist: "Glee Cast"
    },
    {
      name: "Whatever It Takes",
      artist: "Imagine Dragons"
    }
  ],
  soul: [
    {
      name: "Comfort in the Chaos",
      artist: "Emma Charles"
    },
    {
      name: "Best Day of my Life",
      artist: "American Authors"
    },
    {
      name: "Leap of Faith",
      artist: "Cristopher"
    }
  ]
};

export default function App() {
  var [category, setCategory] = useState("love");

  function loveSongsHandler() {
    var loveSongs = "love";
    setCategory(loveSongs);
  }
  function fireSongsHandler() {
    var fireSongs = "fire";
    setCategory(fireSongs);
  }
  function soulSongsHandler() {
    var soulSongs = "soul";
    setCategory(soulSongs);
  }

  return (
    <div className="App">
      <div className="hero-box">
        <h1>Obsession X Music</h1>
        <p>Checkout my favourite songs !! Select a category to get started. </p>
        <button onClick={loveSongsHandler}>love</button>
        <button onClick={fireSongsHandler}>fire</button>
        <button onClick={soulSongsHandler}>soul</button>
      </div>

      <br />
      <br />

      {songsDictionary[category].map(function (song) {
        return (
          <div className="song-box">
            <div key={song.name}>
              {song.name} <br /> <span className="artist">{song.artist}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
