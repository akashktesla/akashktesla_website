<script lang="ts">
  import PageBase from "$lib/components/PageBase.svelte";
  const modules = import.meta.glob('$lib/blogs/*.svelte',{eager: true});
  console.log(modules)
  let posts = [];
  for (const key in modules){
    try{
      posts.push(modules[key].metadata)
    }
    catch{
    }

  }
</script>
<style>

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #ffffff; /* cyan on hover */
  }

.blog-list {
  display: flex;
  flex-direction:column;
  list-style: none;
  padding: 0;
}

.card {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 12px;
  transition: transform 0.2s, background 0.2s;
  margin:4px;
}

.card:hover {
  background: #ffffff30;
  transform: translateY(-4px);
}

.card h2 {
  margin: 0 0 8px;
  color: #ffffff;
}
.card p {
  color:#555555
}


</style>

<PageBase>
<ul class="blog-list">
  {#each posts as post}
    <li>
      <a href={`/blogs/${post}`}>
        <div class="card">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      </a>
    </li>
  {/each}
</ul>

</PageBase>
