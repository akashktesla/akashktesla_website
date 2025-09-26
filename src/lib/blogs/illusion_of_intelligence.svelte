<script context="module" lang="ts">
  export const metadata = {
    title: "Illusion of Intelligence",
    description: "Understanding the Limits of AI and LLMs",
    date: "2025-09-26",
  };
</script>

<style>
  .main{
    padding-left: 20px;
    padding-right: 20px;
  }

  .illusion-of-intelligence header h1 {
    font-size: 2.5em;
    margin-bottom: 0.2em;
  }
  P{
    justify-content: center;
    text-align: justify;
    line-height: 1.4em;
  }
</style>

<div class="main">
  <article class="illusion-of-intelligence">
    <header>
      <h1 style="text-align:center">Illusion of Intelligence</h1>
      <p>
        Large Language models (LLMs) are powerful tools, but they have severe limitations. which to be considered 
        when using them or integrating them into "replacing human intelligence" applications. This blog would explore
        when and where LLMs can be useful, and where they fall short.
      </p>
    </header>
    <section>
      <h2>TLDR;</h2>
      <p>
        LLMs are powerful tools, but they have severe limitations. They struggle with reasoning tasks, are biased towards 
        popular opinion, and are not as good as humans at writing code. They can be useful for generating text, 
        summarizing information, and answering simple questions, but they should not be relied upon for tasks that require 
        careful thinking or complex problem-solving. Always view LLMs as assistants and never as replacements for human intelligence.
      </p>
    </section>
    <section id="limitations">
      <h2>Limitations of LLMs</h2>
      <section>
        <h3><strong>Reasoning tasks </strong> </h3>
        <p>
          LLMs or any type of AI for that matter struggle with reasoning tasks
          that require careful thinking, multi-step logic, or understanding complex relationships. They can generate
          plausible-sounding texts but often incorrect or nonsensical answers. For example, most LLms fail at logical
          problems or math word problems unless they are specifically made with a hybrid architecture that's made for
          math problems like Alpha Geometry.
        </p>
      </section>

      <section>
        <h3><strong>Bias towards popular opinon </strong> </h3>
        <p>
          LLMs are strongly biased towards popular opinion. and often treat them as truth unless specifically fine-tuned to 
          avoid that, since they are trained on large datasets from the internet, and there is no way curate/filter all the data, 
          to provide only factual information to the LLMs, since we are dealing with petabytes of data.
        </p>
      </section>

      <section>
        <h3><strong>Hallucinations </strong> </h3>
        <p>
          LLMs often generate text that is plausible-sounding but incorrect or nonsensical. This is known as "hallucination" and is a
          common problem with LLMs. Hallucinations can be caused by a variety of factors, including the training data, the model architecture, 
          and the prompting technique used. It's important as a developer when designing chatbots or other applications that use LLMs to 
          be aware of this limitation and to take steps to mitigate it, such as using multiple sources of information or fact-checking the
          output of the LLM.
        </p>
      </section>

      <section>
        <h3><strong>Coding tasks </strong> </h3>
        <p>
          While LLMs are popular for generating code, and most people are lead to believe that LLMs can write code as well as humans,
          They are not as good as humans at writing code for the same reason as reasoning tasks. Coding requires careful thinking, and 
          proper design choices to properly architect as a solutions which LLMs are not good at. They can generate code that looks good, 
          but often riddled with bugs, and security vulnerabilities. While you can learn about syntax and basic programming concepts from 
          LLms, they are not good at writing production ready code. If you want to use LLMs for coding, you can use them as a coding assitant
          to help you with syntax, and basic programming concepts, but not as a replacement for human programmers. and it's important to 
          always view LLMs as assistant and never as a replacement for human intelligence. you should always drive the process, 
        </p>
      </section>

      <h2>Capabilities</h2>
      <section>
        <h3><strong>Text generation </strong> </h3>
        <p>
          LLMs are good at generating coherent and gramatically correct text. They can be used to generate articles, stories, Blogs. 
          Matter of fact this blog is written with the help of an LLM, to correct grammer, sentence structure, and to make it more coherent.
          one thing to keep in mind is that LLMs are not good at generating original content, like code generation you should always be the 
          one to drive the narrative, story, or the article's intensions/ ideas, LLMs just help you with the execution. 
        </p>
      </section>
      <section>
        <h3><strong>Summarization </strong> </h3>
        <p>
          LLMs are good at summarizing long texts into shorter versions. They can be used to summarize articles, books, and other long texts. 
          This can be useful for quickly getting the gist of a long text without having to read the entire thing. This would be your main use case, 
          for many people who want to use LLMs for productivity. You can use this feature to summarize documentations for your coding requirements,
          or to summarize articles for research purposes.
        </p>
      </section>
      <section>
        <h3><strong>Learning</strong></h3>
        <p>
          LLMs can be used to learn new concepts and ideas. They can be used to explain complex topics in simple terms, which sometimes requires
          some careful prompting and some back and forth to get the right answer, but you atleast have someone to torture the information out of.
          I often use LLMs to learn or understand new concepts, summarize and ask follow up questions on a research paper to clarify my understanding.
        </p>
      </section>

      <section>
        <h3><strong>Brain Stroming/Ideation</strong> </h3>
        <p>
          Back in my days, we used to use a rubber duck to explain our code/ problems to, to get a different perspective on the problem. these
          generation won't even know what coding duck is. anyway you have LLMs to explain problems or design choices to, and unlike a rubber duck,
          they can actually give you a different perspective on the problem, and help you come up with new ideas. I often use LLMs to brainstorm 
          ideas for projects, or to get a different perspective on a problem I'm trying to solve. It might not give you the perfect or even a 
          correct answer, but it will atleast get you thinking in a different direction.
        </p>
      </section>





    </section>

  </article>
</div>
