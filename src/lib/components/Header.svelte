<script lang="ts">
    import { goto } from '$app/navigation';
    import smile from '$lib/assets/smile.png';
    import {page} from '$app/state';
    let currentPath = page.url.pathname;
    let history:any = [];
    let currentInput = "";
    const blogModules = Object.keys(import.meta.glob('/src/lib/blogs/*.svelte'))
    .map(path=>path.replace("/src/lib/blogs/","").replace(".svelte","")); 
    const routes:Record<string,string[]> = { "/":["projects","blogs"],"/blogs":blogModules };
    console.log(routes);
    console.log(currentPath);
    /*console.log(routes[currentPath]);*/

    let inputRef: HTMLInputElement;
    function handleGlobalKeyDown(e:KeyboardEvent){
        if (e.key===":"){
            e.preventDefault()
            inputRef.focus();
        }
    }

    function handleKeyDown(e: KeyboardEvent){
        if (e.key === "Enter"){
            if (!currentInput.trim()){
                return;
            }
            history = [...history, {"type":"input","content":currentInput}];

            if (["clear","c"].includes(currentInput)){
                history = []
            }
            else if(currentInput.trim() === "ls"){
                if(Object.keys(routes).includes(currentPath)){
                    history = [...history, {"type":"ouput","content": routes[currentPath].join("\t \t ")}];
                }
                else{
                    history = [...history, {"type":"ouput","content": "No files found"}];
                }
            }
            else if(currentInput.trim() === "help"){
                console.log("helooooooo")
                goto("/blogs/terminal")
            }
            else if(currentInput.startsWith("cd")){
                let path = currentInput.replace("cd ","").trim();
                console.log("alskdfj")
                console.log(path)
                console.log(["/","~","home"].includes(path));
                if(["/","~","home"].includes(path)){
                    goto("/");
                    return;
                }
                if(currentPath.endsWith("/")){
                    path = currentPath+path;
                }
                else{
                    path = currentPath+"/"+path;
                }
                goto(path);
            }

            currentInput = "";
            console.log(history)
        }
        if (e.key === "Tab") {
            e.preventDefault();

            if (currentInput.startsWith("cd ")) {
                const partial = currentInput.replace("cd ", "");

                const options = routes[currentPath] || [];

                const match = options.find(route => route.startsWith(partial));

                if (match) {
                    currentInput = "cd " + match;
                }
            }
        }
    }

</script>

<style>

    :global(body) {
        margin: 0;
        background-color: #111111;
        color: white;
        font-family: sans-serif;
    }

    header {
        position: sticky;
        top: 0;
        z-index: 1000;  
        background-color: black;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 20px;
        border-bottom: 0;
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
        color: #aaaaaa; /* cyan on hover */
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
    .terminal-line{
        display: flex;
        background-color:#000000 ;
        white-space: pre;
    }
    input{
        background-color:#000000 ;
        color: #ffffff;
        border: none;
        outline: none;
        width: 100%;
    }
</style>


<svelte:window onkeydown={handleGlobalKeyDown} />
<header>
    <div class = "name">
        <img src={smile} alt="logo" class="logo"/>
        <h1>Akash K Tesla</h1>
    </div>
  <nav>
    <a href="/">~</a>
    <a href="https://github.com/akashktesla" target="_blank" >/Projects</a>
    <a href="/blogs">/Blogs</a>
  </nav>
</header>

<main>
    {#each history as line}
        {#if line.type ==="input"}
            <div class="terminal-line">
                <span class="prompt">root@akashktesla.com:~$ {line.content}</span>
            </div>
        {:else}
            <div class="terminal-line">
                <span>{line.content}</span>
            </div>
        {/if}
    {/each}

    <div class="terminal-line">
      <span class="prompt">root@akashktesla.com:~$ </span>
      <input class="terminal-input" bind:this={inputRef} bind:value={currentInput} on:keydown={handleKeyDown} />
    </div>
</main>
