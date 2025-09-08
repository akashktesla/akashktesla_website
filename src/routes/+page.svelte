<script>
  import PageBase from "$lib/components/PageBase.svelte";
  // nothing needed here
</script>

<style>
  .profile-photo {
    display: flex;
    margin-right: 5%;
    margin-top: 5%;
    justify-content: center;
  }

  .profile {
    align-items: center;
    height: 30vh;
    width: 30vh;
    border-radius: 5%;
    padding:2%;
    object-fit: cover;
  }
  .bio{
    justify-content: center;
    align-items: center;
  }

  section {
    margin: 3% 5%;
  }
  section h3 {
    font-size: 1.5rem;
    color: #f0f0f0;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #555;
    padding-bottom: 0.25rem;
  }

  ul {
    list-style: disc inside;
    color: #ccc;
  }

  ul li {
    margin-bottom: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #00ffff; /* cyan on hover */
  }


</style>

<PageBase>

  <div class="profile-photo">
    <img src="/images/akash.jpg" alt="Profile Photo" class="profile"/>
    <div class="bio">
      <h1>Akash K <i>Tesla</i>⚡  </h1> 
      <h2>Machines and Muscles </h2>
      <p>
        Lives on Arch Linux and chaos energy.<br>
        Visit my <a href="/blogs">Blog</a> to learn about cool stuff
      </p>
    </div>

  </div>
  <!-- Hobbies / Interests -->
  <section>
    <h3>Hobbies & Interests</h3>
    <ul>
      <li>Machining & Robotics</li>
      <li>AI / AGI Development</li>
      <li>Developer (Game, Web, App) </li>
      <li>Mechanical Engineering</li>
      <li>Bodybuilding</li>
      <li>MMA - Muay Thai, Boxing, Grappling</li>
      <li>Rock Climbing</li>
    </ul>
  </section>

  <!-- Skills -->
  <section>
    <h3>Skillset</h3>
    <ul>
      <li>Python, Rust, c, c++, js, ts...</li>
      <li>Machine Learning & AI</li>
      <li>Robotics & Mechatronics</li>
      <li>CAD & Machining</li>
      <li>Mechanical Design & Analysis</li>
      <li>Developement (Game, Web, App) </li>
      <li>Combat Sports</li>
    </ul>
  </section>

  <section>
    <h3>Education</h3>
    <ul>
      <li>B.Tech in Computer and Communications - [Amrita University]</li>
      <li>Online Certifications: Google Cloud Practioner Advanced AI & ML Expert </li>
    </ul>
  </section>

</PageBase>
