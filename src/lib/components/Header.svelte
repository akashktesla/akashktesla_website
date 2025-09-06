<script lang="ts">
  import smile from '$lib/assets/smile.png';
</script>

<style>
  :global(body) {
    margin: 0;
    background-color: #111111;
    color: white;
    font-family: sans-serif;
  }

  header {
    background-color: black;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
  }

  h1 {
    font-size: 24px;
  }

  nav {
    display: flex;
    justify-content:flex-end;
    margin-bottom: 10px;
  }
  nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
  }

  nav a:hover {
    color: #00ffff; /* cyan on hover */
  }

  main {
    padding: 20px;
  }
  .name {
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 80%; /* 80% of header height */
    width: auto; /* keeps aspect ratio */
  }
  .logo{
    height: 80%; /* 80% of header height */
    width: auto; /* keeps aspect ratio */
  }
</style>


<header>
  <div class = "name">
  <img src={smile} alt="logo" class="logo"/>
  <h1>Akash K Tesla</h1>
  </div>
  <nav>
    <a href="/">Home</a>
    <a href="/profile">Profile</a>
    <a href="/projects">Projects</a>
    <a href="/blog">Blog</a>
  </nav>
</header>
