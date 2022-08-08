import React from 'react'
import './../App.css';

const Project = () => {
  return (
    <div className="lists">
        <h2>Projects:</h2><br/>
        <ul>
            <li>StickyNotes APP using React:
              <p>&nbsp;&nbsp;&nbsp;An App to jott down important notes, which can be edited and deleted. Components and modals are
                used with attractive UI.
              </p></li>
            <li>StickyNotes App using Javascript only:
              <p>&nbsp;&nbsp;&nbsp;Here, purely Html, CSS and Javascript concepts been used with local storage so that even after refreshing 
                the page the notes won't delete.
              </p>
            </li>
            <li>Global time display App:
              <p>&nbsp;&nbsp;&nbsp;This App helps us in comparing Indian Time with any other country Time.</p>
            </li>
            <li>Final year Project(Garbage Collector Board) using Java language:
              <p>&nbsp;&nbsp;&nbsp;An App which should be installed by all users, through which user can notify whenever they see
                garbage/trash splitted in their area just by sharing the picture of that area and provided the location
                details. Respective area heads/ worker can check and collect the garbage.
              </p>
            </li>
        </ul>
    </div>
  )
}

export default Project