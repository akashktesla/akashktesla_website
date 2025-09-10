<script context="module" lang="ts">
  export const metadata = {
    title: "Exercise Selection",
    description: "How to select Exercise for you",
    date: "2025-09-11",
  };
</script>

<style>
  .main{
    padding-left: 20px;
  }
</style>

<div class="main">
<!-- Exercise Selection — drop into your .svelte blog -->
<article class="exercise-selection">
  <header>
    <h1>Exercise Selection</h1>
    <p>
      It's important to choose exercises that best suit you. Below are some tips on how to pick what's
      right for you, plus the exercises I choose for myself. Use whatever works and swap variations based 
      on comfort and availability.
    </p>
  </header>

  <section id="back">
    <h2>Back</h2>
    <p>
      For back there are two main components: <strong>lats</strong> and <strong>mid-back</strong> (rows).
      I usually do 2 variations for lats and 2 for rows. You can pick more, but don't exceed your
      overall set limit — keep it simple and effective.
    </p>

    <h3>Lats</h3>
    <p>Pick 1 compound and 1 isolation variation.</p>
    <ul>
      <li><strong>Compound</strong>
        <ol>
          <li>Lat pulldowns (my current choice)</li>
          <li>Pull-ups</li>
        </ol>
      </li>
      <li><strong>Isolation</strong>
        <ol>
          <li>Single-arm lat pulldowns (my current choice)</li>
          <li>Straight-arm lat pulldowns</li>
        </ol>
      </li>
    </ul>
    <p class="note">Choose any 2 variations — one compound + one isolation.</p>

    <h3>Rowing</h3>
    <ol>
      <li>T-bar row</li>
      <li>Seated v-grip row (my current choice)</li>
      <li>Bent-over row (my current choice)</li>
    </ol>

    <h4>Optional</h4>
    <p>
      Add Jefferson curls (light loads) to work spinal erectors and improve general lower-back health.
      Use very light weight and progress slowly.
    </p>
  </section>

  <section id="chest">
    <h2>Chest</h2>
    <p>
      Chest has three main regions: <strong>upper</strong>, <strong>middle</strong>, and <strong>lower</strong>.
      I like to pick 1 variation per region and run ~4 sets each (adjust to your plan).
    </p>

    <h3>Upper chest (clavicular head)</h3>
    <ol>
      <li>Incline bench press (*)</li>
      <li>Incline dumbbell press</li>
      <li>Incline cable or dumbbell flyes</li>
      <li>Incline dumbbell flyes</li>
      <li>Incline chest press</li>
    </ol>

    <h3>Middle chest (sternal head)</h3>
    <ol>
      <li>Flat bench press (dumbbell or barbell)</li>
      <li>Pec deck (*)</li>
      <li>Cable or dumbbell flyes</li>
    </ol>

    <h3>Lower chest</h3>
    <ol>
      <li>Decline bench press (barbell or dumbbell)</li>
      <li>Decline chest fly (*)</li>
      <li>Decline dumbbell flyes</li>
    </ol>

    <h4>Cable fly pointers</h4>
    <ul>
      <li>Incline: set cables low so they pull upward (cable at bottom)</li>
      <li>Middle: cables at mid-height</li>
      <li>Decline: set cables high so they pull downward (cable at top)</li>
    </ul>
  </section>

  <section id="legs">
    <h2>Legs</h2>
    <p>
      Legs have three main focuses: <strong>quads</strong>, <strong>hamstrings</strong>, and <strong>calves</strong>.
      Pick two variations each for quads and hamstrings.
    </p>

    <h3>Quads (choose 2)</h3>
    <ol>
      <li>Squats (*)</li>
      <li>Hack squats</li>
      <li>Leg extensions (*)</li>
      <li>Leg press</li>
    </ol>

    <h3>Hamstrings</h3>
    <ol>
      <li>Romanian deadlifts (barbell)</li>
      <li>Romanian deadlifts (dumbbell) (*)</li>
      <li>Straight-legged deadlifts</li>
      <li>Leg curls (*)</li>
    </ol>

    <h3>Calves</h3>
    <ol>
      <li>Seated calf raises</li>
      <li>Standing calf raises</li>
      <li>Calf press (leg-press machine)</li>
    </ol>
  </section>

  <section id="shoulders">
    <h2>Shoulders</h2>
    <p>Three heads: front (anterior), lateral (side), rear (posterior).</p>

    <h3>Anterior (front delts)</h3>
    <ol>
      <li>Overhead press (dumbbell or barbell — seated preferred) (*)</li>
      <li>Dumbbell front raises</li>
      <li>High-incline bench press</li>
    </ol>

    <h3>Lateral (side delts)</h3>
    <ol>
      <li>Dumbbell lateral raises (goat) (*)</li>
      <li>Lateral raise machine (if available)</li>
      <li>Cable lateral raises</li>
    </ol>

    <h3>Posterior (rear delts)</h3>
    <ol>
      <li>Rear-delt flyes (dumbbell or cable)</li>
      <li>Rear pec-deck</li>
      <li>Face pulls (*)</li>
    </ol>
  </section>

  <section id="biceps">
    <h2>Biceps</h2>
    <p>
      Two main heads: <strong>short head</strong> and <strong>long head</strong>. I usually pick a variation
      for each — 3 sets each is a decent starting point.
    </p>

    <h3>Short head (width)</h3>
    <ol>
      <li>Wide-grip barbell curl</li>
      <li>Preacher curl</li>
      <li>Concentration curl</li>
      <li>Cable / dumbbell curls (hands slightly forward) (*)</li>
    </ol>

    <h3>Long head (peak)</h3>
    <ol>
      <li>Drag curls (barbell or dumbbell) (*)</li>
      <li>Incline dumbbell curls</li>
      <li>Close-grip barbell curls</li>
    </ol>
  </section>

  <section id="triceps">
    <h2>Triceps</h2>
    <p>
      Three heads: <strong>long</strong>, <strong>lateral</strong>, and <strong>medial</strong> — pick a
      variation to hit each. The medial head gets worked in almost every triceps move, but listed below
      are exercises that bias it more.
    </p>

    <h3>Long head</h3>
    <p>Overhead or behind-the-head actions bias the long head.</p>
    <ol>
      <li>Cable overhead rope extensions (*)</li>
      <li>Skull crushers</li>
      <li>Behind-the-neck cable extensions</li>
      <li>Dips</li>
    </ol>

    <h3>Lateral head (horseshoe)</h3>
    <p>Pushdown style moves hit this head well.</p>
    <ol>
      <li>EZ / straight-bar cable pushdowns (*)</li>
      <li>Rope pushdowns</li>
      <li>Dips</li>
    </ol>

    <h3>Medial head</h3>
    <p>Works in almost every tricep exercise; these bias it a bit more.</p>
    <ol>
      <li>Reverse-grip pushdowns</li>
      <li>Dumbbell kickbacks</li>
      <li>Close-grip push-ups</li>
    </ol>
  </section>

  <footer>
    <p>
      <small>
        Notes: (*) marks my go-to choices. Always pick exercises that fit your joint health and gym
        equipment. Swap variations based on comfort and progress slowly. Keep the volume and intensity
        aligned with your phase (bulk vs cut vs power) and prioritize recovery.
      </small>
    </p>
  </footer>
</article>

</div>
