export async function load({ params }) {
    const { slug } = params;
    try {
      const module = await import(`$lib/blogs/${slug}.svelte`);
      return { post: module.default };
    } catch (err) {
      return {
        status: 404,
        error: new Error("Post not found")
      };
    }
  }
