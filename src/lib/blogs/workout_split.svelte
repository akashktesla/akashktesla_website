
<script context="module" lang="ts">
  export const metadata = {
    title: "Workout Split",
    description: "Choose your workout split accordingly, for optimal gains",
    date: "2025-09-10",
  };
</script>
<style>
  .main{
    padding-left:20px;
  }
  </style>

<div class="main">

<!-- Workout Split — ready for your .svelte blog -->
<article class="workout-split">
  <h1>Workout Split</h1>
  <p>
    Choose a workout split that best suits the time you have and the goals you want to achieve.
    I have two main goals in a cycle: <strong>bulk</strong> (add muscle) and <strong>cut</strong>
    (shed excess fat gained during the bulk).
  </p>

  <section id="bulk">
    <h2>Bulk</h2>
    <p>
      In a bulk you should be as optimal as possible: train each muscle group <strong>twice a week</strong>
      for maximum hypertrophy. You can choose an async cycle, but my current gym is not open on
      Sunday evening, so I choose a <em>sync</em> split.
    </p>

    <h3>Bulk split</h3>
    <ol>
      <li>Day 1 — Back &amp; Biceps</li>
      <li>Day 2 — Legs &amp; Triceps</li>
      <li>Day 3 — Chest &amp; Shoulders</li>
      <li>Day 4 — Back &amp; Biceps</li>
      <li>Day 5 — Legs &amp; Triceps</li>
      <li>Day 6 — Chest &amp; Shoulders</li>
      <li>Day 7 — Rest</li>
    </ol>
    <p class="note">Do cardio in the morning (optional).</p>
  </section>

  <section id="cut">
    <h2>Cut</h2>
    <p>
      During a cut you need to train enough to avoid losing muscle, while also recovering well —
      recovery is harder on a calorie deficit. I choose a 5-day "bro split" (one muscle group per day)
      so I can have two rest days to focus on recovery. I also alternate between big and small muscle
      groups to help mentally with recovery (optional). The order below doesn't strictly matter — train
      what works for you.
    </p>

    <h3>Cut split</h3>
    <ol>
      <li>Day 1 — Back</li>
      <li>Day 2 — Arms</li>
      <li>Day 3 — Chest</li>
      <li>Day 4 — Shoulders</li>
      <li>Day 5 — Legs</li>
      <li>Day 6 — Rest</li>
      <li>Day 7 — Rest</li>
    </ol>
  </section>

  <section id="powerlifting">
    <h2>Powerlifting</h2>
    <p>
      For powerlifting it's recommended to have <strong>4 workouts a week</strong> so your CNS can recover
      between heavy sessions. If you don't lift heavy you won't make progress, so prioritize recovery and
      heavy loading. It's also important to train accessory lifts — include them. If you're a powerlifter
      in a hypertrophy phase you can add some hypertrophy work for maximum results; if you're in a power
      phase, focus on the main lifts and accessories.
    </p>

    <h3>Powerlifting split</h3>
    <ol>
      <li>Day 1 — Upper (bench + accessories)</li>
      <li>Day 2 — Lower (squats + accessories)</li>
      <li>Day 3 — Rest</li>
      <li>Day 4 — Upper (bench + accessories)</li>
      <li>Day 5 — Lower (squats + deadlifts)</li>
      <li>Day 6 — Rest</li>
      <li>Day 7 — Rest</li>
    </ol>
  </section>

  <footer class="meta">
    <p>
      <small>Notes: keep nutrition aligned with your phase (caloric surplus for bulk, deficit for cut).
      Prioritize sleep and recovery, and adjust volume/intensity based on how you recover.</small>
    </p>
  </footer>
</article>

</div>
