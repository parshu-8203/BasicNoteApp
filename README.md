<h1>Basic Notes App</h1>
<p>This is a simple note taking API built using Express and MongoDB. It allows users to perform CRUD (Create, Read, Update, Delete) operations on notes.</p>

<h2>Getting Started</h2>
<ul>
  <b>Clone Repistory</b>
  <li><code>git clone https://github.com/your_username/BasicNoteApp.git</code></li>
  <br>
  <b>Change to clones Repistory</b>
  <li><code>cd BasicNoteApp</code></li>
  <br>
  <b>Install the dependencies</b>
  <li><code>npm install</code></li>
  <br>
  <b>Build the docker container</b>
  <li><code>docker-compose build</code></li>
  <br>
  <b>Start the Docker Container</b>
  <li><code>docker-compose up</code></li>
  <br>
  <b>Access the api at http://localhost:5000 in your browser using Postman</b>
 
</ul>
<h2>API Endpoints</h2>
<p>The following API are available</p>
<ul>
<li><b><q>/notes</q></b> POST - Create a new Note</li>
<li><b><q>/notes</q></b> GET - Get all Notes</li>
<li><b><q>/notes/:id</q></b> GET - Get a note by ID</li>
<li><b><q>/notes/:id</q></b> PUT - Update a note by ID</li>
<li><b><q>/notes/:id</q></b>DELETE - Delete a note by ID</li>
</ul>
