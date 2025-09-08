<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<style>

  .main{
    background-color: #000000;
    flex:1;
    display:flex;
  }
  .main-pannel{
    flex:1;
    background-color: #000000;
    display:flex;
    flex-direction:column;

  }
  .parent{
    display:flex;
    flex-direction: column;
    min-height:100vh;
  }
  .side-pannel{
    opacity:0.15;
    width: 10%;
    background-color: #000000;
    background-image: url('$lib/assets/matrix.jpg');
    background-repeat:no-repeat repeat;      /* repeats the image horizontally + vertically */
    background-size: 10rem 10rem ;     /* size of each tile */
  }

</style>

<div class="parent">
  <Header/>
  <div class="main">
    <div class = "side-pannel"></div>
    <div class = "main-pannel">
      <slot>
      </slot>
    </div>
    <div class = "side-pannel"></div>
  </div>
  <Footer/>
</div>
