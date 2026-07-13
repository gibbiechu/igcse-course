// Cambridge IGCSE Additional Mathematics 0606 — full course data
// Each chapter: title, syl (syllabus ref), body (HTML), yt (YouTube search terms), quiz [{q, a, sol}]

const ADDMATH = [

// ---------------------------------------------------------------- 1 FUNCTIONS
{
title:"Functions",
syl:"0606 §1 — Functions",
yt:["IGCSE Add Maths functions domain range","composite functions IGCSE 0606","inverse functions IGCSE add maths"],
body:`
<p>A <b>function</b> is a rule that takes an input and gives exactly <i>one</i> output. We write f(x) = 2x + 3, meaning "take x, double it, add 3". Think of it as a machine: input → rule → output.</p>
<h2>1. Domain and range</h2>
<ul>
<li><b>Domain</b> = the set of allowed inputs (x-values).</li>
<li><b>Range</b> = the set of possible outputs (y-values).</li>
</ul>
<p>Example: f(x) = x<sup>2</sup> for all real x. Any x is allowed (domain: all real numbers), but the output can never be negative, so the range is f(x) ≥ 0.</p>
<div class="note"><b>Watch out:</b> Restrictions on the domain change the range. If f(x) = x<sup>2</sup> for x ≥ 2, the range is f(x) ≥ 4.</div>
<h2>2. One-one functions</h2>
<p>A function is <b>one-one</b> if every output comes from exactly one input. Graphically: any horizontal line cuts the graph at most once. f(x) = 2x + 3 is one-one; f(x) = x<sup>2</sup> (all x) is not, because f(2) = f(−2) = 4. Only one-one functions have inverses.</p>
<h2>3. Composite functions</h2>
<p>fg(x) means "do g first, then f": fg(x) = f(g(x)).</p>
<div class="example"><div class="exhead">Worked example</div>
<p>f(x) = 2x + 3, g(x) = x<sup>2</sup> − 1. Find fg(x) and gf(x).</p>
<p>fg(x) = f(x<sup>2</sup> − 1) = 2(x<sup>2</sup> − 1) + 3 = <b>2x<sup>2</sup> + 1</b></p>
<p>gf(x) = g(2x + 3) = (2x + 3)<sup>2</sup> − 1 = <b>4x<sup>2</sup> + 12x + 8</b></p>
<p>Note fg ≠ gf in general — order matters!</p></div>
<h2>4. Inverse functions</h2>
<p>f<sup>−1</sup> undoes f. To find it:</p>
<ol><li>Write y = f(x)</li><li>Swap x and y</li><li>Make y the subject</li></ol>
<div class="example"><div class="exhead">Worked example</div>
<p>f(x) = (3x − 2)/5. Find f<sup>−1</sup>(x).</p>
<p>y = (3x − 2)/5 → swap: x = (3y − 2)/5 → 5x = 3y − 2 → y = (5x + 2)/3.</p>
<p>So <b>f<sup>−1</sup>(x) = (5x + 2)/3</b>.</p></div>
<div class="formula">Key facts: ff<sup>−1</sup>(x) = x &nbsp;|&nbsp; domain of f<sup>−1</sup> = range of f &nbsp;|&nbsp; range of f<sup>−1</sup> = domain of f &nbsp;|&nbsp; graph of f<sup>−1</sup> is the reflection of f in the line y = x</div>
<h2>5. Graphs of y = |f(x)|</h2>
<p>To sketch y = |f(x)|: draw y = f(x), then reflect any part <i>below</i> the x-axis to above it. The modulus makes all outputs non-negative.</p>
`,
quiz:[
{q:"f(x) = 3x − 4. Find f<sup>−1</sup>(x) and state f<sup>−1</sup>(5).",
a:"f<sup>−1</sup>(x) = (x + 4)/3; f<sup>−1</sup>(5) = 3",
sol:"y = 3x − 4. Swap: x = 3y − 4, so 3y = x + 4, y = (x + 4)/3. Then f<sup>−1</sup>(5) = 9/3 = 3. Reason: the inverse reverses the operations — f did '×3 then −4', so f<sup>−1</sup> does '+4 then ÷3'."},
{q:"f(x) = x<sup>2</sup> + 2 for x ≥ 0, g(x) = 2x − 1. Find gf(x) and the range of gf.",
a:"gf(x) = 2x<sup>2</sup> + 3, range gf(x) ≥ 3",
sol:"gf(x) = g(x<sup>2</sup> + 2) = 2(x<sup>2</sup> + 2) − 1 = 2x<sup>2</sup> + 3. Since x ≥ 0, x<sup>2</sup> ≥ 0, so 2x<sup>2</sup> + 3 ≥ 3. Reason: track the minimum of the inner expression through the outer function."},
{q:"Explain why f(x) = x<sup>2</sup> − 4x for all real x has no inverse, and state a domain restriction that fixes this.",
a:"Not one-one; restrict to x ≥ 2 (or x ≤ 2)",
sol:"f(x) = (x − 2)<sup>2</sup> − 4 is a parabola with vertex at x = 2, so e.g. f(0) = f(4) = 0 — two inputs share one output, so no inverse exists. Restricting to x ≥ 2 keeps only the right half of the parabola, which passes the horizontal line test, making f one-one and invertible."},
{q:"f(x) = 5/(x − 2), x ≠ 2. Solve ff(x) = x is NOT required — instead find f<sup>−1</sup>(x).",
a:"f<sup>−1</sup>(x) = 5/x + 2 = (5 + 2x)/x",
sol:"y = 5/(x − 2). Swap: x = 5/(y − 2) → y − 2 = 5/x → y = 5/x + 2. Reason: undo 'subtract 2 then divide 5 by it' in reverse. Note f<sup>−1</sup> has domain x ≠ 0, which matches the range of f."},
{q:"Sketch-thinking: describe the graph of y = |2x − 4| and state its minimum point.",
a:"V-shape with vertex (2, 0)",
sol:"y = 2x − 4 is a straight line crossing the x-axis at x = 2. The modulus reflects the part below the axis (x < 2) upward, creating a V with vertex at (2, 0), left arm gradient −2 and right arm gradient +2."}
]},

// ---------------------------------------------------------------- 2 QUADRATICS
{
title:"Quadratic Functions",
syl:"0606 §2 — Quadratic functions",
yt:["completing the square IGCSE add maths","discriminant quadratic IGCSE 0606","quadratic maximum minimum completing square"],
body:`
<p>A quadratic is y = ax<sup>2</sup> + bx + c (a ≠ 0). Its graph is a <b>parabola</b>: a "smile" ∪ if a &gt; 0, a "frown" ∩ if a &lt; 0.</p>
<div class="fig">
<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="190" x2="400" y2="190" stroke="#888" stroke-width="1.5"/>
<line x1="60" y1="10" x2="60" y2="210" stroke="#888" stroke-width="1.5"/>
<path d="M 80 30 Q 170 320 260 30" fill="none" stroke="#5246D9" stroke-width="3"/>
<circle cx="170" cy="175" r="4" fill="#C2571B"/>
<text x="180" y="180" font-size="12" fill="#C2571B">vertex (min point)</text>
<circle cx="103" cy="120" r="3.5" fill="#1D7A4F"/><circle cx="237" cy="120" r="3.5" fill="#1D7A4F"/>
<text x="255" y="124" font-size="12" fill="#1D7A4F">roots (y = 0)</text>
<text x="300" y="205" font-size="12" fill="#555">x</text><text x="45" y="20" font-size="12" fill="#555">y</text>
</svg>
<div class="figcap">Parabola with a &gt; 0: minimum at the vertex, roots where it crosses the x-axis.</div></div>
<h2>1. Completing the square</h2>
<p>Rewrite ax<sup>2</sup> + bx + c in the form a(x + p)<sup>2</sup> + q. This reveals the <b>vertex</b> directly: minimum/maximum value q at x = −p.</p>
<div class="example"><div class="exhead">Worked example</div>
<p>Express 2x<sup>2</sup> − 12x + 7 in the form a(x + p)<sup>2</sup> + q.</p>
<p>2x<sup>2</sup> − 12x + 7 = 2(x<sup>2</sup> − 6x) + 7 = 2[(x − 3)<sup>2</sup> − 9] + 7 = <b>2(x − 3)<sup>2</sup> − 11</b>.</p>
<p>Minimum value −11 at x = 3. Range: y ≥ −11.</p></div>
<h2>2. The discriminant</h2>
<div class="formula">For ax<sup>2</sup> + bx + c = 0: &nbsp; discriminant D = b<sup>2</sup> − 4ac<br>
D &gt; 0 → two distinct real roots &nbsp;|&nbsp; D = 0 → one repeated root (line is tangent) &nbsp;|&nbsp; D &lt; 0 → no real roots</div>
<p>This is the #1 exam tool for "show the line meets/misses/touches the curve" questions: substitute the line into the curve, form a quadratic, apply the discriminant condition.</p>
<div class="example"><div class="exhead">Worked example</div>
<p>Find k so that y = kx + 1 is a tangent to y = x<sup>2</sup> + 3x + 2.</p>
<p>Equate: x<sup>2</sup> + 3x + 2 = kx + 1 → x<sup>2</sup> + (3 − k)x + 1 = 0.</p>
<p>Tangent → D = 0: (3 − k)<sup>2</sup> − 4 = 0 → 3 − k = ±2 → <b>k = 1 or k = 5</b>.</p></div>
<h2>3. Quadratic inequalities</h2>
<p>To solve x<sup>2</sup> − x − 6 &gt; 0: factorise (x − 3)(x + 2) &gt; 0. Sketch the parabola: it is above zero <i>outside</i> the roots → x &lt; −2 or x &gt; 3. (For &lt; 0 the answer is <i>between</i> the roots.) Always sketch — never guess the direction.</p>
`,
quiz:[
{q:"Express x<sup>2</sup> + 8x + 3 in the form (x + p)<sup>2</sup> + q, and state the minimum point of y = x<sup>2</sup> + 8x + 3.",
a:"(x + 4)<sup>2</sup> − 13; minimum (−4, −13)",
sol:"Half of 8 is 4: (x + 4)<sup>2</sup> = x<sup>2</sup> + 8x + 16, so subtract 16: (x + 4)<sup>2</sup> − 16 + 3 = (x + 4)<sup>2</sup> − 13. A square is smallest (zero) when x = −4, giving minimum y = −13."},
{q:"Find the range of values of k for which x<sup>2</sup> + (k − 2)x + 4 = 0 has no real roots.",
a:"−2 < k < 6",
sol:"No real roots → D < 0: (k − 2)<sup>2</sup> − 16 < 0 → (k − 2)<sup>2</sup> < 16 → −4 < k − 2 < 4 → −2 < k < 6. Reason: the square of a real number is less than 16 only when the number itself is between −4 and 4."},
{q:"Solve the inequality 2x<sup>2</sup> + 5x − 3 ≤ 0.",
a:"−3 ≤ x ≤ 1/2",
sol:"Factorise: (2x − 1)(x + 3) ≤ 0. Roots x = 1/2 and x = −3. The parabola opens upward, so it is ≤ 0 between the roots: −3 ≤ x ≤ 1/2."},
{q:"Show that the line y = 2x − 7 does not meet the curve y = x<sup>2</sup> − 4x + 3.",
a:"D = −4 < 0, so no intersection",
sol:"x<sup>2</sup> − 4x + 3 = 2x − 7 → x<sup>2</sup> − 6x + 10 = 0. D = 36 − 40 = −4 < 0 → no real solutions → the line and curve never meet. Reason: intersection points are real solutions of the combined equation; none exist."},
{q:"A quadratic has maximum value 5 at x = −1 and passes through (0, 3). Find it in the form a(x + p)<sup>2</sup> + q.",
a:"y = −2(x + 1)<sup>2</sup> + 5",
sol:"Maximum 5 at x = −1 → y = a(x + 1)<sup>2</sup> + 5 with a < 0. Substitute (0, 3): 3 = a(1) + 5 → a = −2. So y = −2(x + 1)<sup>2</sup> + 5."}
]},

// ---------------------------------------------------------------- 3 POLYNOMIALS
{
title:"Factors of Polynomials",
syl:"0606 §3 — Factors of polynomials",
yt:["factor theorem remainder theorem IGCSE","polynomial division IGCSE add maths","solving cubic equations factor theorem"],
body:`
<p>A polynomial is an expression like p(x) = 2x<sup>3</sup> − 5x<sup>2</sup> + x + 2. This chapter gives you two power tools for cracking cubics.</p>
<h2>1. Remainder theorem</h2>
<div class="formula">When p(x) is divided by (x − a), the remainder = p(a).<br>Divided by (bx − a), remainder = p(a/b).</div>
<p>No long division needed to find a remainder — just substitute!</p>
<h2>2. Factor theorem</h2>
<div class="formula">(x − a) is a factor of p(x) &nbsp;⇔&nbsp; p(a) = 0</div>
<p>To factorise a cubic: try small values (±1, ±2, ±3, factors of the constant term) until p(a) = 0, then divide out (x − a).</p>
<div class="example"><div class="exhead">Worked example — full method</div>
<p>Factorise completely p(x) = x<sup>3</sup> − 4x<sup>2</sup> + x + 6.</p>
<p><b>Step 1:</b> Trial: p(1) = 1 − 4 + 1 + 6 = 4 ✗. p(−1) = −1 − 4 − 1 + 6 = 0 ✓ → (x + 1) is a factor.</p>
<p><b>Step 2:</b> Divide (long division or compare coefficients): x<sup>3</sup> − 4x<sup>2</sup> + x + 6 = (x + 1)(x<sup>2</sup> − 5x + 6).</p>
<p><b>Step 3:</b> Factorise the quadratic: x<sup>2</sup> − 5x + 6 = (x − 2)(x − 3).</p>
<p><b>Answer:</b> p(x) = (x + 1)(x − 2)(x − 3). Roots: −1, 2, 3.</p></div>
<h2>3. Comparing coefficients (quick division)</h2>
<p>Write x<sup>3</sup> − 4x<sup>2</sup> + x + 6 = (x + 1)(x<sup>2</sup> + bx + c). Expanding, the x<sup>2</sup> term gives b + 1 = −4 → b = −5; the constant gives c = 6. Faster than long division once you are comfortable.</p>
<div class="note"><b>Exam tip:</b> Questions often combine both theorems: "p(x) leaves remainder 4 when divided by (x − 1) and (x + 2) is a factor — find unknowns a and b." Set up two equations: p(1) = 4 and p(−2) = 0, then solve simultaneously.</div>
`,
quiz:[
{q:"Find the remainder when 2x<sup>3</sup> + 3x<sup>2</sup> − 4x + 1 is divided by (x − 2).",
a:"21",
sol:"Remainder theorem: substitute x = 2. p(2) = 16 + 12 − 8 + 1 = 21. Reason: dividing by (x − a) leaves remainder p(a) — no division needed."},
{q:"Show that (x − 3) is a factor of x<sup>3</sup> − 2x<sup>2</sup> − 5x + 6 and factorise completely.",
a:"(x − 3)(x − 1)(x + 2)",
sol:"p(3) = 27 − 18 − 15 + 6 = 0 → factor confirmed. Divide: x<sup>3</sup> − 2x<sup>2</sup> − 5x + 6 = (x − 3)(x<sup>2</sup> + x − 2) = (x − 3)(x + 2)(x − 1)."},
{q:"p(x) = x<sup>3</sup> + ax<sup>2</sup> + bx − 6. Given (x − 1) is a factor and the remainder on dividing by (x − 2) is 4, find a and b.",
a:"a = −4, b = 9",
sol:"p(1) = 0: 1 + a + b − 6 = 0 → a + b = 5. p(2) = 4: 8 + 4a + 2b − 6 = 4 → 4a + 2b = 2 → 2a + b = 1. Subtract: a = −4, so b = 9. Reason: factor theorem gives one equation, remainder theorem the other; solve simultaneously."},
{q:"Solve x<sup>3</sup> − 7x + 6 = 0.",
a:"x = 1, 2, −3",
sol:"p(1) = 1 − 7 + 6 = 0 → (x − 1) factor. Divide: (x − 1)(x<sup>2</sup> + x − 6) = (x − 1)(x + 3)(x − 2) = 0 → x = 1, −3, 2."},
{q:"When 4x<sup>3</sup> + kx + 1 is divided by (2x − 1), the remainder is 2. Find k.",
a:"k = 1",
sol:"For divisor (2x − 1), substitute x = 1/2: 4(1/8) + k/2 + 1 = 2 → 1/2 + k/2 + 1 = 2 → k/2 = 1/2 → k = 1. Reason: (2x − 1) = 0 when x = 1/2, so the remainder is p(1/2)."}
]},

// ---------------------------------------------------------------- 4 EQUATIONS INEQ MODULUS
{
title:"Equations, Inequalities & Modulus Graphs",
syl:"0606 §4 — Equations, inequalities and graphs",
yt:["modulus equations IGCSE add maths","modulus inequalities 0606","graphing cubic functions IGCSE"],
body:`
<h2>1. Modulus (absolute value)</h2>
<p>|x| means the distance of x from zero: |3| = 3 and |−3| = 3. Key idea: <b>|a| = b ⇒ a = b or a = −b</b> (b ≥ 0).</p>
<div class="example"><div class="exhead">Worked example — modulus equation</div>
<p>Solve |2x − 1| = |x + 4|.</p>
<p>Either 2x − 1 = x + 4 → x = 5, or 2x − 1 = −(x + 4) → 3x = −3 → x = −1.</p>
<p><b>x = 5 or x = −1.</b> (Alternative: square both sides — |a| = |b| ⇔ a² = b².)</p></div>
<h2>2. Modulus inequalities</h2>
<div class="formula">|x| &lt; a ⇔ −a &lt; x &lt; a &nbsp;&nbsp;|&nbsp;&nbsp; |x| &gt; a ⇔ x &lt; −a or x &gt; a</div>
<p>For harder ones like |2x − 1| &gt; |x + 4|, square both sides (both sides are non-negative, so this is safe): (2x−1)<sup>2</sup> &gt; (x+4)<sup>2</sup> → 3x<sup>2</sup> − 12x − 15 &gt; 0 → x<sup>2</sup> − 4x − 5 &gt; 0 → (x−5)(x+1) &gt; 0 → x &lt; −1 or x &gt; 5.</p>
<h2>3. Graphs of y = |ax + b| and solving graphically</h2>
<p>y = |ax + b| is a V-shape with vertex on the x-axis at x = −b/a. To solve |ax + b| = cx + d graphically, sketch both and read intersection points; algebraically, treat the two arms separately and <b>check each solution is on the correct arm</b>.</p>
<h2>4. Cubic graphs and their moduli</h2>
<p>You should sketch y = k(x − a)(x − b)(x − c): crosses the x-axis at a, b, c; if a factor is squared, e.g. (x − a)<sup>2</sup>, the curve <i>touches</i> at x = a. For y = |cubic|, reflect below-axis sections upward.</p>
<div class="note"><b>Exam tip:</b> When solving modulus equations, always substitute answers back — squaring or arm-splitting can produce false "solutions".</div>
`,
quiz:[
{q:"Solve |3x − 2| = 7.",
a:"x = 3 or x = −5/3",
sol:"3x − 2 = 7 → x = 3, or 3x − 2 = −7 → 3x = −5 → x = −5/3. Reason: an expression with absolute value 7 must equal 7 or −7."},
{q:"Solve |x + 2| < 2x − 1.",
a:"x > 3",
sol:"Need RHS > 0, so x > 1/2. Then −(2x − 1) < x + 2 < 2x − 1. Right part: x + 2 < 2x − 1 → x > 3. Left part: −2x + 1 < x + 2 → x > −1/3 (already satisfied). Answer x > 3. Check x = 4: |6| = 6 < 7 ✓."},
{q:"Solve |x² − 5| = 4.",
a:"x = ±3, ±1",
sol:"x² − 5 = 4 → x² = 9 → x = ±3; or x² − 5 = −4 → x² = 1 → x = ±1. Four solutions."},
{q:"Sketch-thinking: y = |2x − 6|. State the vertex and solve |2x − 6| = x.",
a:"Vertex (3, 0); x = 2 or x = 6",
sol:"Vertex where inside = 0: x = 3. Solve: 2x − 6 = x → x = 6 (on right arm, x ≥ 3 ✓); −(2x − 6) = x → 6 = 3x → x = 2 (left arm, x < 3 ✓). Both valid."},
{q:"Solve the inequality |x − 1| ≥ |2x + 3|.",
a:"−4 ≤ x ≤ −2/3",
sol:"Square: (x−1)² ≥ (2x+3)² → x² − 2x + 1 ≥ 4x² + 12x + 9 → 0 ≥ 3x² + 14x + 8 = (3x + 2)(x + 4). Parabola ≤ 0 between roots: −4 ≤ x ≤ −2/3."}
]},

// ---------------------------------------------------------------- 5 SIMULTANEOUS
{
title:"Simultaneous Equations",
syl:"0606 §5 — Simultaneous equations",
yt:["simultaneous equations one linear one quadratic IGCSE","line and curve intersection add maths"],
body:`
<p>In Add Math you solve one <b>linear</b> and one <b>non-linear</b> equation together. The solutions are the intersection points of a line and a curve.</p>
<h2>The method (always the same)</h2>
<ol>
<li>Make x or y the subject of the <b>linear</b> equation.</li>
<li>Substitute into the non-linear equation.</li>
<li>Solve the resulting quadratic.</li>
<li>Back-substitute to find the other variable. Pair your answers!</li>
</ol>
<div class="example"><div class="exhead">Worked example</div>
<p>Solve: y = x + 1 and x<sup>2</sup> + y<sup>2</sup> = 25.</p>
<p>Substitute: x<sup>2</sup> + (x + 1)<sup>2</sup> = 25 → 2x<sup>2</sup> + 2x − 24 = 0 → x<sup>2</sup> + x − 12 = 0 → (x + 4)(x − 3) = 0.</p>
<p>x = −4 → y = −3; &nbsp; x = 3 → y = 4. <b>Solutions: (−4, −3) and (3, 4)</b> — the two points where the line cuts the circle.</p></div>
<h2>Link with the discriminant</h2>
<p>After substitution you get a quadratic. Its discriminant tells you the geometry:</p>
<table><tr><th>D</th><th>Meaning</th></tr>
<tr><td>D &gt; 0</td><td>line crosses curve at 2 points</td></tr>
<tr><td>D = 0</td><td>line is a <b>tangent</b> (touches once)</td></tr>
<tr><td>D &lt; 0</td><td>line misses the curve</td></tr></table>
<div class="note"><b>Exam tip:</b> "Find the coordinates of the points of intersection" and "show the line is a tangent" are the two most common question styles. Both start with the same substitution.</div>
`,
quiz:[
{q:"Solve simultaneously: y = 2x − 3 and y = x<sup>2</sup> − 3x + 1.",
a:"(1, −1) and (4, 5)",
sol:"x² − 3x + 1 = 2x − 3 → x² − 5x + 4 = 0 → (x − 1)(x − 4) = 0 → x = 1 or 4. Then y = 2(1) − 3 = −1 and y = 2(4) − 3 = 5."},
{q:"Solve: x + y = 5 and xy = 6.",
a:"(2, 3) and (3, 2)",
sol:"y = 5 − x → x(5 − x) = 6 → x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0. Pairs: x = 2, y = 3 and x = 3, y = 2."},
{q:"Show that the line y = x + 3 is a tangent to the curve y = x<sup>2</sup> − 3x + 7.",
a:"D = 0 at x = 2, tangent point (2, 5)",
sol:"x² − 3x + 7 = x + 3 → x² − 4x + 4 = 0 → (x − 2)² = 0. Repeated root x = 2 (D = 16 − 16 = 0) → line touches the curve exactly once at (2, 5), so it is a tangent."},
{q:"Find k such that y = 3x + k meets y = x<sup>2</sup> − x + 2 at exactly one point.",
a:"k = −2",
sol:"x² − x + 2 = 3x + k → x² − 4x + (2 − k) = 0. One point → D = 0: 16 − 4(2 − k) = 0 → 16 − 8 + 4k = 0 → k = −2."},
{q:"Solve: 2x + y = 7 and x<sup>2</sup> − xy = 6.",
a:"(−2/3, 25/3) and (3, 1)",
sol:"y = 7 − 2x → x² − x(7 − 2x) = 6 → 3x² − 7x − 6 = 0 → (3x + 2)(x − 3) = 0 → x = −2/3 or x = 3. Then y = 7 − 2(−2/3) = 25/3, and y = 7 − 6 = 1. Solutions: (−2/3, 25/3) and (3, 1). (Always back-substitute into the LINEAR equation.)"}
]},

// ---------------------------------------------------------------- 6 LOGS & EXPONENTIALS
{
title:"Logarithmic & Exponential Functions",
syl:"0606 §6 — Logarithmic and exponential functions",
yt:["logarithm rules IGCSE add maths","solving exponential equations logs 0606","change of base logarithms IGCSE"],
body:`
<h2>1. What is a logarithm?</h2>
<p>A log answers: "what power?" If a<sup>x</sup> = y, then log<sub>a</sub> y = x. Example: 2<sup>3</sup> = 8 ⇔ log<sub>2</sub> 8 = 3. Special bases: log means log<sub>10</sub>, ln means log<sub>e</sub> (e ≈ 2.718, the natural base).</p>
<h2>2. Log laws (memorise cold)</h2>
<div class="formula">
log<sub>a</sub>(xy) = log<sub>a</sub>x + log<sub>a</sub>y<br>
log<sub>a</sub>(x/y) = log<sub>a</sub>x − log<sub>a</sub>y<br>
log<sub>a</sub>(x<sup>n</sup>) = n·log<sub>a</sub>x<br>
log<sub>a</sub>a = 1, &nbsp; log<sub>a</sub>1 = 0<br>
Change of base: log<sub>a</sub>b = log b / log a = 1 / log<sub>b</sub>a
</div>
<h2>3. Solving exponential equations</h2>
<div class="example"><div class="exhead">Worked example</div>
<p>Solve 3<sup>2x+1</sup> = 20.</p>
<p>Take logs: (2x + 1) log 3 = log 20 → 2x + 1 = log 20 / log 3 ≈ 2.727 → <b>x ≈ 0.863</b>.</p></div>
<div class="example"><div class="exhead">Worked example — hidden quadratic</div>
<p>Solve 2<sup>2x</sup> − 5·2<sup>x</sup> + 4 = 0.</p>
<p>Let u = 2<sup>x</sup>: u<sup>2</sup> − 5u + 4 = 0 → (u − 1)(u − 4) = 0 → u = 1 or 4 → 2<sup>x</sup> = 1 or 2<sup>x</sup> = 4 → <b>x = 0 or x = 2</b>.</p></div>
<h2>4. Solving log equations</h2>
<p>Combine into a single log using the laws, then "undo" it: log<sub>a</sub>(expr) = k ⇒ expr = a<sup>k</sup>. <b>Always check answers</b>: you can only take logs of positive numbers, so reject solutions that make any log argument ≤ 0.</p>
<h2>5. Graphs</h2>
<p>y = e<sup>x</sup>: passes (0, 1), always positive, grows fast; y → 0 as x → −∞ (asymptote y = 0). y = ln x: passes (1, 0), only defined for x &gt; 0, asymptote x = 0. The two graphs are reflections of each other in y = x (inverse functions!).</p>
`,
quiz:[
{q:"Evaluate without a calculator: log<sub>2</sub> 32 + log<sub>3</sub> (1/9) − log<sub>5</sub> 5.",
a:"2",
sol:"log₂32 = 5 (2⁵ = 32); log₃(1/9) = −2 (3⁻² = 1/9); log₅5 = 1. Total: 5 − 2 − 1 = 2."},
{q:"Solve 5<sup>x−1</sup> = 3<sup>x</sup>, giving x to 3 s.f.",
a:"x ≈ 3.15",
sol:"(x − 1)ln5 = x ln3 → x ln5 − x ln3 = ln5 → x(ln5 − ln3) = ln5 → x = ln5/(ln5 − ln3) = 1.609/0.511 ≈ 3.15. Reason: take logs of both sides, collect x terms."},
{q:"Solve log<sub>2</sub>(x + 3) + log<sub>2</sub>(x − 4) = 3.",
a:"x = 5",
sol:"log₂[(x+3)(x−4)] = 3 → (x+3)(x−4) = 2³ = 8 → x² − x − 20 = 0 → (x − 5)(x + 4) = 0 → x = 5 or −4. Reject x = −4 since x − 4 = −8 < 0 (log undefined). Answer x = 5."},
{q:"Solve 3<sup>2x</sup> − 10·3<sup>x</sup> + 9 = 0.",
a:"x = 0 or x = 2",
sol:"Let u = 3ˣ: u² − 10u + 9 = 0 → (u − 1)(u − 9) = 0 → 3ˣ = 1 → x = 0, or 3ˣ = 9 → x = 2. Reason: 3²ˣ = (3ˣ)², a quadratic in disguise."},
{q:"Given log<sub>a</sub>2 = p and log<sub>a</sub>3 = q, express log<sub>a</sub>(12a) in terms of p and q.",
a:"2p + q + 1",
sol:"12a = 2²·3·a → logₐ(12a) = 2logₐ2 + logₐ3 + logₐa = 2p + q + 1. Reason: break the number into prime factors and apply the product and power laws."}
]},

// ---------------------------------------------------------------- 7 STRAIGHT LINES
{
title:"Straight Line Graphs",
syl:"0606 §7 — Straight line graphs",
yt:["coordinate geometry IGCSE add maths","perpendicular bisector line equation","linear law log graphs IGCSE 0606"],
body:`
<h2>1. Core formulas</h2>
<div class="formula">
Gradient m = (y₂ − y₁)/(x₂ − x₁)<br>
Line: y − y₁ = m(x − x₁) &nbsp; or &nbsp; y = mx + c<br>
Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)<br>
Distance = √[(x₂−x₁)² + (y₂−y₁)²]<br>
Parallel: m₁ = m₂ &nbsp;|&nbsp; Perpendicular: m₁ × m₂ = −1
</div>
<div class="example"><div class="exhead">Worked example — perpendicular bisector</div>
<p>Find the perpendicular bisector of A(1, 2) and B(5, 10).</p>
<p>Midpoint = (3, 6). Gradient AB = 8/4 = 2 → perpendicular gradient = −1/2.</p>
<p>Line: y − 6 = −½(x − 3) → <b>y = −½x + 7½</b> (or x + 2y = 15).</p></div>
<h2>2. Area of a polygon — the shoelace formula</h2>
<p>For vertices listed anticlockwise (x₁,y₁), (x₂,y₂), (x₃,y₃):</p>
<div class="formula">Area = ½ |x₁y₂ + x₂y₃ + x₃y₁ − y₁x₂ − y₂x₃ − y₃x₁|</div>
<h2>3. Linear law — turning curves into lines</h2>
<p>This is the signature 0606 topic. Experimental data following y = ax<sup>n</sup> or y = ab<sup>x</sup> can be turned into a straight line by taking logs:</p>
<table>
<tr><th>Model</th><th>Take logs</th><th>Plot</th><th>Gradient</th><th>Intercept</th></tr>
<tr><td>y = ax<sup>n</sup></td><td>log y = n log x + log a</td><td>log y vs log x</td><td>n</td><td>log a</td></tr>
<tr><td>y = ab<sup>x</sup></td><td>log y = (log b)x + log a</td><td>log y vs x</td><td>log b</td><td>log a</td></tr>
<tr><td>y = ax² + bx</td><td>y/x = ax + b</td><td>y/x vs x</td><td>a</td><td>b</td></tr>
</table>
<p>Method: identify what to plot so the equation looks like Y = mX + c, read m and c from the line, then convert back to a and b (often a = 10<sup>intercept</sup>).</p>
`,
quiz:[
{q:"A(−2, 1), B(4, 9). Find the equation of the perpendicular bisector of AB.",
a:"y = −¾x + 23/4 (i.e. 3x + 4y = 23)",
sol:"Midpoint (1, 5). m(AB) = 8/6 = 4/3 → perpendicular m = −3/4. y − 5 = −¾(x − 1) → 4y − 20 = −3x + 3 → 3x + 4y = 23."},
{q:"P(2, 3), Q(6, 1), R(4, 7). Find the area of triangle PQR.",
a:"10 units²",
sol:"Shoelace: ½|x_P y_Q + x_Q y_R + x_R y_P − y_P x_Q − y_Q x_R − y_R x_P| = ½|(2·1 + 6·7 + 4·3) − (3·6 + 1·4 + 7·2)| = ½|56 − 36| = 10."},
{q:"Line L passes through (3, −1) parallel to 2x + 5y = 7. Find its equation.",
a:"2x + 5y = 1",
sol:"2x + 5y = 7 has gradient −2/5, and parallel lines share gradients. y + 1 = −⅖(x − 3) → 5y + 5 = −2x + 6 → 2x + 5y = 1."},
{q:"Data fits y = ax<sup>n</sup>. Plotting log y against log x gives a straight line with gradient 1.5 and intercept 0.30. Find a and n.",
a:"n = 1.5, a ≈ 2.0",
sol:"log y = n log x + log a. Gradient = n = 1.5; intercept = log a = 0.30 → a = 10^0.30 ≈ 2.0. Reason: the log transform maps the power model onto Y = mX + c."},
{q:"Data fits y = ab<sup>x</sup>. The line of log y vs x has gradient 0.48 and intercept 0.70. Find a and b.",
a:"a ≈ 5.0, b ≈ 3.0",
sol:"log y = (log b)x + log a → log b = 0.48 → b = 10^0.48 ≈ 3.0; log a = 0.70 → a = 10^0.70 ≈ 5.0."}
]},

// ---------------------------------------------------------------- 8 CIRCULAR MEASURE
{
title:"Circular Measure (Radians)",
syl:"0606 §8 — Circular measure",
yt:["radians arc length sector area IGCSE","circular measure add maths 0606"],
body:`
<h2>1. Radians</h2>
<p>A radian is the angle at the centre of a circle when the arc length equals the radius. Full circle = 2π rad = 360°, so:</p>
<div class="formula">π rad = 180° &nbsp;|&nbsp; 1 rad ≈ 57.3° &nbsp;|&nbsp; degrees → radians: × π/180 &nbsp;|&nbsp; radians → degrees: × 180/π</div>
<p>Common values: 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2.</p>
<h2>2. Arc length and sector area (θ in radians!)</h2>
<div class="formula">Arc length s = rθ &nbsp;&nbsp;|&nbsp;&nbsp; Sector area A = ½r²θ &nbsp;&nbsp;|&nbsp;&nbsp; Triangle area = ½r² sin θ</div>
<div class="fig">
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
<path d="M 60 160 L 220 160 A 160 160 0 0 0 173 47 Z" fill="#EEECFC" stroke="#5246D9" stroke-width="2.5"/>
<text x="130" y="150" font-size="13" fill="#5246D9">θ</text>
<text x="130" y="178" font-size="12" fill="#555">r</text>
<text x="215" y="95" font-size="12" fill="#C2571B">arc s = rθ</text>
</svg>
<div class="figcap">Sector: two radii + arc. Segment: chord + arc.</div></div>
<h2>3. Segment area — the classic exam combo</h2>
<div class="formula">Segment area = sector − triangle = ½r²θ − ½r² sin θ = ½r²(θ − sin θ)</div>
<div class="example"><div class="exhead">Worked example</div>
<p>A sector has radius 8 cm and angle 1.2 rad. Find (a) arc length, (b) sector area, (c) segment area.</p>
<p>(a) s = 8 × 1.2 = <b>9.6 cm</b></p>
<p>(b) A = ½ × 64 × 1.2 = <b>38.4 cm²</b></p>
<p>(c) Segment = ½ × 64 × (1.2 − sin 1.2) = 32(1.2 − 0.932) = <b>8.58 cm²</b> (calculator in RAD mode!)</p></div>
<div class="note"><b>Deadly mistake:</b> using degree mode when θ is in radians. Before every circular-measure question, check your calculator shows RAD.</div>
<h2>4. Perimeters</h2>
<p>Perimeter of sector = 2r + rθ. Perimeter of segment = chord + arc, where chord = 2r sin(θ/2).</p>
`,
quiz:[
{q:"Convert 150° to radians (exact) and 2.4 rad to degrees (1 d.p.).",
a:"5π/6; 137.5°",
sol:"150 × π/180 = 5π/6. 2.4 × 180/π = 432/π ≈ 137.5°."},
{q:"A sector of radius 10 cm has arc length 14 cm. Find θ and the sector area.",
a:"θ = 1.4 rad; area 70 cm²",
sol:"s = rθ → θ = 14/10 = 1.4 rad. A = ½ × 100 × 1.4 = 70 cm². Reason: both formulas need θ in radians, which the first equation gives directly."},
{q:"A sector has perimeter 20 cm and radius 6 cm. Find its angle and area.",
a:"θ = 4/3 rad; area 24 cm²",
sol:"Perimeter = 2r + rθ → 20 = 12 + 6θ → θ = 8/6 = 4/3. Area = ½ × 36 × 4/3 = 24 cm²."},
{q:"Find the area of the segment cut off by a chord subtending 1.8 rad at the centre of a circle of radius 5 cm.",
a:"10.3 cm² (3 s.f.)",
sol:"Segment = ½r²(θ − sinθ) = ½ × 25 × (1.8 − sin1.8) = 12.5 × (1.8 − 0.974) = 12.5 × 0.826 ≈ 10.3 cm²."},
{q:"The perimeter of a segment is chord + arc. For r = 4, θ = π/3, find this perimeter exactly where possible.",
a:"4 + 4π/3 cm",
sol:"Chord = 2r sin(θ/2) = 8 sin(π/6) = 8 × ½ = 4. Arc = rθ = 4π/3. Perimeter = 4 + 4π/3 ≈ 8.19 cm."}
]},

// ---------------------------------------------------------------- 9 TRIGONOMETRY
{
title:"Trigonometry",
syl:"0606 §9 — Trigonometry",
yt:["trig identities IGCSE add maths","solving trigonometric equations 0606","sec cosec cot graphs IGCSE"],
body:`
<h2>1. The six ratios</h2>
<div class="formula">tan θ = sin θ / cos θ &nbsp;|&nbsp; sec θ = 1/cos θ &nbsp;|&nbsp; cosec θ = 1/sin θ &nbsp;|&nbsp; cot θ = 1/tan θ = cos θ/sin θ</div>
<h2>2. Identities (the engine of every proof question)</h2>
<div class="formula">sin²θ + cos²θ = 1<br>1 + tan²θ = sec²θ<br>1 + cot²θ = cosec²θ</div>
<p>The last two come from dividing the first by cos²θ or sin²θ.</p>
<h2>3. Graphs of sin, cos, tan</h2>
<div class="fig">
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="85" x2="440" y2="85" stroke="#888"/>
<path d="M 30 85 C 60 15, 100 15, 130 85 S 200 155, 230 85 S 300 15, 330 85 S 400 155, 430 85" fill="none" stroke="#5246D9" stroke-width="2.5"/>
<path d="M 30 20 C 55 20, 75 150, 130 150 C 180 150, 200 20, 230 20 C 280 20, 300 150, 330 150 C 380 150, 400 20, 430 20" fill="none" stroke="#C2571B" stroke-width="2" stroke-dasharray="5 4"/>
<text x="35" y="30" font-size="12" fill="#5246D9">sin x</text>
<text x="35" y="145" font-size="12" fill="#C2571B">cos x (dashed)</text>
<text x="225" y="105" font-size="11" fill="#555">360°</text>
</svg>
<div class="figcap">sin and cos: same wave, cos is sin shifted left 90°. Both between −1 and 1, period 360° (2π).</div></div>
<p>For y = a sin(bx) + c: <b>amplitude</b> = |a|, <b>period</b> = 360°/b (or 2π/b), vertical shift c. tan has period 180° and vertical asymptotes at 90°, 270°, ...</p>
<h2>4. Solving trig equations — the CAST method</h2>
<p>Solve sin x = 0.5 for 0° ≤ x ≤ 360°: principal value x = 30°. Sine is also positive in the 2nd quadrant: x = 180° − 30° = 150°. <b>Answers: 30°, 150°.</b></p>
<table><tr><th>Positive ratio</th><th>Second solution rule (0–360°)</th></tr>
<tr><td>sin</td><td>180° − principal</td></tr>
<tr><td>cos</td><td>360° − principal</td></tr>
<tr><td>tan</td><td>180° + principal</td></tr></table>
<div class="example"><div class="exhead">Worked example — quadratic in trig</div>
<p>Solve 2cos²x + 3sin x − 3 = 0 for 0° ≤ x ≤ 360°.</p>
<p>Replace cos²x = 1 − sin²x: 2 − 2sin²x + 3sin x − 3 = 0 → 2sin²x − 3sin x + 1 = 0 → (2sin x − 1)(sin x − 1) = 0.</p>
<p>sin x = ½ → x = 30°, 150°; sin x = 1 → x = 90°. <b>Answers: 30°, 90°, 150°.</b></p></div>
<div class="note"><b>Exam tip:</b> For sin(2x) = k with 0° ≤ x ≤ 360°, solve for 2x over 0°–720° first, THEN divide by 2 — otherwise you lose solutions.</div>
`,
quiz:[
{q:"Solve tan x = −1 for 0° ≤ x ≤ 360°.",
a:"x = 135°, 315°",
sol:"Principal value −45°. Tan is negative in quadrants 2 and 4: 180° − 45° = 135° and 360° − 45° = 315°."},
{q:"Prove that (1 − cos²θ)(1 + cot²θ) = 1.",
a:"Identity proven",
sol:"1 − cos²θ = sin²θ, and 1 + cot²θ = cosec²θ = 1/sin²θ. Product = sin²θ × 1/sin²θ = 1. Reason: convert everything to sin and cos, the identities do the rest."},
{q:"Solve 2sin(2x) = 1 for 0° ≤ x ≤ 360°.",
a:"x = 15°, 75°, 195°, 255°",
sol:"sin 2x = ½ with 0° ≤ 2x ≤ 720°: 2x = 30°, 150°, 390°, 510°. Divide by 2: x = 15°, 75°, 195°, 255°. Reason: double the interval before halving, or solutions are lost."},
{q:"State the amplitude and period of y = 3sin(2x) − 1, and its maximum value.",
a:"Amplitude 3, period 180°, max 2",
sol:"a = 3 → amplitude 3. b = 2 → period 360°/2 = 180°. Max = 3(1) − 1 = 2 (min = −4). Reason: sine oscillates between −1 and 1; scale by 3, shift down 1."},
{q:"Solve sec²x − 3tan x + 1 = 0 for 0° ≤ x ≤ 360°.",
a:"x = 45°, 63.4°, 225°, 243.4°",
sol:"sec²x = 1 + tan²x: tan²x − 3tanx + 2 = 0 → (tanx − 1)(tanx − 2) = 0. tanx = 1 → 45°, 225°. tanx = 2 → 63.4°, 243.4°. Reason: the identity converts to a quadratic in tan x; tan repeats every 180°."}
]},

// ---------------------------------------------------------------- 10 PERMUTATIONS
{
title:"Permutations & Combinations",
syl:"0606 §10 — Permutations and combinations",
yt:["permutations combinations IGCSE add maths","nPr nCr problems 0606","arrangement restriction problems IGCSE"],
body:`
<h2>1. The counting principle</h2>
<p>If task 1 can be done in m ways and task 2 in n ways, doing both = m × n ways. Everything in this chapter builds on this.</p>
<h2>2. Factorials and arrangements</h2>
<div class="formula">n! = n × (n−1) × ... × 2 × 1 &nbsp;&nbsp;(0! = 1)<br>
Arrangements of n distinct objects in a row = n!</div>
<h2>3. Permutations vs combinations</h2>
<div class="formula">Permutation (order matters): &nbsp; ⁿPᵣ = n!/(n−r)!<br>
Combination (order does not matter): &nbsp; ⁿCᵣ = n!/[r!(n−r)!]</div>
<p><b>Ask: does swapping two chosen items give a different outcome?</b> Podium places (gold/silver/bronze) → yes → permutation. Choosing a committee → no → combination.</p>
<div class="example"><div class="exhead">Worked example</div>
<p>From 8 people: (a) how many ways to pick a president, secretary, treasurer? (b) how many ways to pick a committee of 3?</p>
<p>(a) Order matters: ⁸P₃ = 8 × 7 × 6 = <b>336</b>.</p>
<p>(b) Order doesn't: ⁸C₃ = 336/3! = <b>56</b>.</p></div>
<h2>4. Restriction problems (the exam favourites)</h2>
<ul>
<li><b>Items together:</b> glue them into one block, arrange, then arrange within the block. E.g. 5 books with 2 particular ones together: 4! × 2! = 48.</li>
<li><b>Items apart:</b> total − together. 5! − 48 = 72.</li>
<li><b>Fixed ends:</b> fill the restricted positions first, then the rest.</li>
<li><b>Digits/numbers:</b> handle "no repeats", "even", "&gt; 5000" by fixing the constrained digit position first.</li>
</ul>
<div class="example"><div class="exhead">Worked example — digits</div>
<p>How many even 4-digit numbers can be made from 1, 2, 3, 4, 5, 6, 7 with no repeats?</p>
<p>Last digit even: 3 choices (2, 4, 6). Remaining 3 positions from remaining 6 digits: 6 × 5 × 4 = 120.</p>
<p>Total = 3 × 120 = <b>360</b>. Reason: fix the restricted slot first.</p></div>
`,
quiz:[
{q:"How many arrangements of the letters of the word ORANGE are there? How many begin with a vowel?",
a:"720; 360",
sol:"6 distinct letters → 6! = 720. Vowels O, A, E: 3 choices for the first slot, then 5! = 120 for the rest → 3 × 120 = 360."},
{q:"A team of 5 is chosen from 6 boys and 5 girls. How many teams contain exactly 3 boys?",
a:"200",
sol:"Choose 3 boys from 6: ⁶C₃ = 20. Choose 2 girls from 5: ⁵C₂ = 10. Multiply: 20 × 10 = 200. Reason: independent choices multiply."},
{q:"In how many ways can 7 people sit in a row if two particular people must NOT sit together?",
a:"3600",
sol:"Total = 7! = 5040. Together: treat pair as a block → 6! × 2! = 1440. Apart = 5040 − 1440 = 3600. Reason: 'not together' = total minus 'together'."},
{q:"How many 3-digit numbers greater than 500 can be formed from 2, 3, 5, 7, 8 without repetition?",
a:"36",
sol:"First digit must be 5, 7 or 8 → 3 choices. Remaining two positions: 4 × 3 = 12. Total 3 × 12 = 36."},
{q:"A committee of 4 is chosen from 9 people including Mr and Mrs Tan. How many committees include at most one of them?",
a:"105",
sol:"Total ⁹C₄ = 126. Committees with BOTH Tans: choose remaining 2 from 7 → ⁷C₂ = 21. At most one = 126 − 21 = 105. Reason: complement counting is faster than adding 'exactly 0' + 'exactly 1' cases (which gives ⁷C₄ + 2×⁷C₃ = 35 + 70 = 105 ✓)."}
]},

// ---------------------------------------------------------------- 11 SERIES
{
title:"Series: Binomial, AP & GP",
syl:"0606 §11 — Series",
yt:["binomial expansion IGCSE add maths","arithmetic geometric progression 0606","sum to infinity GP IGCSE"],
body:`
<h2>1. Binomial expansion</h2>
<div class="formula">(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ &nbsp;&nbsp; (r = 0 to n)<br>
General term: T(r+1) = ⁿCᵣ aⁿ⁻ʳ bʳ</div>
<div class="example"><div class="exhead">Worked example</div>
<p>Find the coefficient of x³ in (2 − 3x)⁵.</p>
<p>Term with x³: ⁵C₃ (2)² (−3x)³ = 10 × 4 × (−27)x³ = <b>−1080x³</b>. Coefficient −1080.</p>
<p>Keep the sign INSIDE the bracket with b — most marks are lost on signs.</p></div>
<h2>2. Arithmetic progression (AP)</h2>
<p>Constant difference d: 3, 7, 11, 15, ...</p>
<div class="formula">nth term: uₙ = a + (n−1)d<br>Sum: Sₙ = n/2 [2a + (n−1)d] = n/2 (a + l)</div>
<h2>3. Geometric progression (GP)</h2>
<p>Constant ratio r: 2, 6, 18, 54, ...</p>
<div class="formula">nth term: uₙ = arⁿ⁻¹<br>Sum: Sₙ = a(1 − rⁿ)/(1 − r)<br>Sum to infinity (only if |r| &lt; 1): S∞ = a/(1 − r)</div>
<div class="example"><div class="exhead">Worked example — GP</div>
<p>A GP has 2nd term 6 and 5th term 48. Find a, r and S∞ if it exists.</p>
<p>ar = 6 and ar⁴ = 48. Divide: r³ = 8 → r = 2, a = 3.</p>
<p>|r| = 2 ≥ 1, so <b>S∞ does not exist</b> — the terms grow forever. (If |r| &lt; 1 the terms shrink to zero and the sum converges.)</p></div>
<div class="note"><b>Exam tip:</b> "The 3rd, 5th and 9th terms of an AP form a GP..." — write everything in terms of a and d, then use the GP condition (middle term)² = (first)(third). Classic crossover question.</div>
`,
quiz:[
{q:"Find the term independent of x in the expansion of (x + 2/x²)⁹.",
a:"672",
sol:"T(r+1) = ⁹Cᵣ x⁹⁻ʳ (2/x²)ʳ = ⁹Cᵣ 2ʳ x⁹⁻³ʳ. Independent of x: 9 − 3r = 0 → r = 3. Term = ⁹C₃ × 2³ = 84 × 8 = 672."},
{q:"An AP has first term 5 and 12th term 49. Find d and S₂₀.",
a:"d = 4; S₂₀ = 860",
sol:"a + 11d = 49 → 11d = 44 → d = 4. S₂₀ = 20/2 [2(5) + 19(4)] = 10 × 86 = 860."},
{q:"A GP has first term 81 and common ratio 2/3. Find the sum to infinity.",
a:"243",
sol:"|r| = 2/3 < 1 so S∞ exists: S∞ = 81/(1 − 2/3) = 81/(1/3) = 243."},
{q:"Expand (1 + 2x)⁶ up to the x³ term, and use it to estimate 1.02⁶ to 4 d.p.",
a:"1 + 12x + 60x² + 160x³; 1.02⁶ ≈ 1.1262",
sol:"⁶C₀ + ⁶C₁(2x) + ⁶C₂(2x)² + ⁶C₃(2x)³ = 1 + 12x + 60x² + 160x³. Put x = 0.01: 1 + 0.12 + 0.006 + 0.00016 = 1.12616 ≈ 1.1262."},
{q:"The sum of the first n terms of an AP is Sₙ = 3n² + 2n. Find the first term and the common difference.",
a:"a = 5, d = 6",
sol:"a = S₁ = 3 + 2 = 5. S₂ = 12 + 4 = 16 → u₂ = 16 − 5 = 11 → d = 11 − 5 = 6. Reason: individual terms are differences of consecutive sums: uₙ = Sₙ − Sₙ₋₁."}
]},

// ---------------------------------------------------------------- 12 DIFFERENTIATION
{
title:"Differentiation",
syl:"0606 §12 — Calculus: differentiation",
yt:["differentiation from first principles intuition","chain rule product rule quotient rule IGCSE","stationary points maxima minima add maths","connected rates of change IGCSE 0606"],
body:`
<h2>1. What is differentiation?</h2>
<p>dy/dx is the <b>gradient function</b> — it tells you the slope of the curve at any point. Physically: rate of change. If y is position and x is time, dy/dx is velocity.</p>
<div class="fig">
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="180" x2="400" y2="180" stroke="#888"/>
<path d="M 40 170 Q 200 -80 380 170" fill="none" stroke="#5246D9" stroke-width="3"/>
<line x1="120" y1="160" x2="260" y2="40" stroke="#C2571B" stroke-width="2"/>
<circle cx="190" cy="100" r="4" fill="#C2571B"/>
<text x="270" y="45" font-size="12" fill="#C2571B">tangent — gradient = dy/dx here</text>
</svg>
<div class="figcap">The derivative at a point = gradient of the tangent at that point.</div></div>
<h2>2. Rules</h2>
<div class="formula">
Power rule: d/dx (xⁿ) = n·xⁿ⁻¹<br>
d/dx (eˣ) = eˣ &nbsp;|&nbsp; d/dx (ln x) = 1/x<br>
d/dx (sin x) = cos x &nbsp;|&nbsp; d/dx (cos x) = −sin x &nbsp;|&nbsp; d/dx (tan x) = sec²x<br>
Chain: d/dx f(g(x)) = f'(g(x))·g'(x)<br>
Product: (uv)' = u'v + uv'<br>
Quotient: (u/v)' = (u'v − uv')/v²
</div>
<div class="example"><div class="exhead">Worked examples</div>
<p>1) y = (3x² − 1)⁵ → chain: dy/dx = 5(3x² − 1)⁴ × 6x = 30x(3x² − 1)⁴</p>
<p>2) y = x² sin x → product: dy/dx = 2x sin x + x² cos x</p>
<p>3) y = eˣ/(x + 1) → quotient: dy/dx = [eˣ(x+1) − eˣ]/(x+1)² = x·eˣ/(x+1)²</p></div>
<h2>3. Tangents and normals</h2>
<p>Tangent at x = a has gradient f'(a); the normal is perpendicular: gradient = −1/f'(a). Then use y − y₁ = m(x − x₁).</p>
<h2>4. Stationary points</h2>
<p>Where dy/dx = 0. Classify with the second derivative: d²y/dx² &gt; 0 → minimum; &lt; 0 → maximum; = 0 → test further.</p>
<h2>5. Rates of change (chain rule in action)</h2>
<div class="formula">dA/dt = dA/dr × dr/dt</div>
<div class="example"><div class="exhead">Worked example</div>
<p>A circle's radius grows at 0.2 cm/s. How fast is the area growing when r = 5?</p>
<p>A = πr² → dA/dr = 2πr. dA/dt = 2πr × dr/dt = 2π(5)(0.2) = <b>2π ≈ 6.28 cm²/s</b>.</p></div>
<h2>6. Small increments</h2>
<div class="formula">δy ≈ (dy/dx) × δx</div>
`,
quiz:[
{q:"Differentiate y = (2x − 5)⁷.",
a:"14(2x − 5)⁶",
sol:"Chain rule: bring the power down and multiply by the derivative of the inside: 7(2x − 5)⁶ × 2 = 14(2x − 5)⁶."},
{q:"Find the equation of the tangent to y = x³ − 3x + 2 at x = 2.",
a:"y = 9x − 14",
sol:"dy/dx = 3x² − 3 = 9 at x = 2. Point: y(2) = 8 − 6 + 2 = 4 → (2, 4). Tangent: y − 4 = 9(x − 2) → y = 9x − 14."},
{q:"Find and classify the stationary points of y = x³ − 6x² + 9x + 1.",
a:"Max (1, 5), min (3, 1)",
sol:"dy/dx = 3x² − 12x + 9 = 3(x − 1)(x − 3) = 0 → x = 1, 3. d²y/dx² = 6x − 12: at x = 1 it is −6 < 0 → maximum, y = 5; at x = 3 it is +6 > 0 → minimum, y = 1."},
{q:"Differentiate y = x·ln x, then find the x-coordinate of its stationary point.",
a:"dy/dx = ln x + 1; stationary at x = 1/e",
sol:"Product rule: u = x, v = ln x → dy/dx = 1·ln x + x·(1/x) = ln x + 1. Zero when ln x = −1 → x = e⁻¹ = 1/e."},
{q:"The side of a cube increases at 0.05 cm/s. Find the rate of increase of the volume when the side is 4 cm.",
a:"2.4 cm³/s",
sol:"V = x³ → dV/dx = 3x². dV/dt = 3x² × dx/dt = 3(16)(0.05) = 2.4 cm³/s. Reason: chain rule connects the rate you want to the rate you know."}
]},

// ---------------------------------------------------------------- 13 INTEGRATION
{
title:"Integration",
syl:"0606 §12 — Calculus: integration",
yt:["integration IGCSE add maths basics","definite integrals area under curve","integration reverse chain rule 0606"],
body:`
<h2>1. Integration = anti-differentiation</h2>
<div class="formula">∫ xⁿ dx = xⁿ⁺¹/(n+1) + c &nbsp;&nbsp;(n ≠ −1)<br>
∫ eˣ dx = eˣ + c &nbsp;|&nbsp; ∫ 1/x dx = ln|x| + c<br>
∫ sin x dx = −cos x + c &nbsp;|&nbsp; ∫ cos x dx = sin x + c &nbsp;|&nbsp; ∫ sec²x dx = tan x + c<br>
∫ (ax + b)ⁿ dx = (ax + b)ⁿ⁺¹ / [a(n+1)] + c
</div>
<p>Never forget <b>+ c</b> for indefinite integrals — it costs a mark every time.</p>
<h2>2. Finding c</h2>
<div class="example"><div class="exhead">Worked example</div>
<p>A curve has dy/dx = 3x² − 4 and passes through (2, 5). Find its equation.</p>
<p>y = x³ − 4x + c. Substitute (2, 5): 5 = 8 − 8 + c → c = 5. <b>y = x³ − 4x + 5.</b></p></div>
<h2>3. Definite integrals and area</h2>
<div class="formula">∫ₐᵇ f(x) dx = F(b) − F(a) = signed area between the curve and the x-axis</div>
<p>Area below the axis comes out negative — take the modulus of each region separately and add.</p>
<div class="example"><div class="exhead">Worked example — area between line and curve</div>
<p>Find the area enclosed by y = x² and y = 2x.</p>
<p>Intersect: x² = 2x → x = 0, 2. Area = ∫₀² (top − bottom) dx = ∫₀² (2x − x²) dx = [x² − x³/3]₀² = 4 − 8/3 = <b>4/3</b>.</p></div>
<h2>4. Reverse chain rule pattern</h2>
<p>∫ (2x)(x² + 3)⁴ dx — notice the derivative of the inside sits outside → answer (x² + 3)⁵/5 + c. Check by differentiating!</p>
`,
quiz:[
{q:"Find ∫ (6x² − 4x + 1) dx.",
a:"2x³ − 2x² + x + c",
sol:"Raise each power by 1 and divide by the new power: 6x³/3 − 4x²/2 + x + c = 2x³ − 2x² + x + c."},
{q:"Evaluate ∫₁⁴ (3√x) dx.",
a:"14",
sol:"3x^(1/2) integrates to 3·x^(3/2)/(3/2) = 2x^(3/2). Evaluate: 2(4^1.5) − 2(1) = 2(8) − 2 = 14."},
{q:"Find ∫ (2x + 1)⁵ dx.",
a:"(2x + 1)⁶/12 + c",
sol:"(ax + b)ⁿ rule: raise the power, divide by both the new power (6) and the inner derivative (2): (2x+1)⁶/(6×2) + c."},
{q:"The gradient of a curve is dy/dx = 4x − 5 and the curve passes through (1, 2). Find y when x = 3.",
a:"y = 8",
sol:"y = 2x² − 5x + c; at (1, 2): 2 = 2 − 5 + c → c = 5, so y = 2x² − 5x + 5. At x = 3: 18 − 15 + 5 = 8."},
{q:"Find the total area between y = x(x − 2) and the x-axis from x = 0 to x = 3.",
a:"8/3",
sol:"Curve is below the axis on (0, 2) and above on (2, 3). ∫₀²(x² − 2x)dx = [x³/3 − x²]₀² = 8/3 − 4 = −4/3 → area 4/3. ∫₂³ = (9 − 9) − (8/3 − 4) = 4/3. Total = 4/3 + 4/3 = 8/3. Reason: signed areas cancel if you integrate straight through a root."}
]},

// ---------------------------------------------------------------- 14 KINEMATICS
{
title:"Kinematics (Calculus of Motion)",
syl:"0606 §12 — Applications of calculus: kinematics",
yt:["kinematics differentiation integration IGCSE add maths","displacement velocity acceleration calculus"],
body:`
<h2>The one diagram to remember</h2>
<div class="formula">
displacement s &nbsp;→ differentiate → velocity v = ds/dt &nbsp;→ differentiate → acceleration a = dv/dt<br>
acceleration a &nbsp;→ integrate → velocity v &nbsp;→ integrate → displacement s
</div>
<ul>
<li><b>Displacement</b> s: position relative to a fixed point O (can be negative).</li>
<li><b>Velocity</b> v: rate of change of displacement (sign = direction).</li>
<li><b>Acceleration</b> a: rate of change of velocity.</li>
<li><b>Instantaneously at rest:</b> v = 0. <b>Constant velocity:</b> a = 0.</li>
<li><b>Distance travelled ≠ displacement</b> if the particle turns around: split the motion at the times where v = 0.</li>
</ul>
<div class="example"><div class="exhead">Worked example — the full routine</div>
<p>A particle moves so that s = t³ − 6t² + 9t (metres, seconds), t ≥ 0.</p>
<p><b>(a)</b> v = ds/dt = 3t² − 12t + 9 = 3(t − 1)(t − 3). At rest when t = 1 and t = 3.</p>
<p><b>(b)</b> a = dv/dt = 6t − 12. At t = 1: a = −6 m/s².</p>
<p><b>(c)</b> Distance in first 4 s: s(0) = 0, s(1) = 4, s(3) = 0, s(4) = 4.</p>
<p>Legs: 0→4 (4 m), 4→0 (4 m), 0→4 (4 m). <b>Total distance = 12 m</b> (but displacement is only 4 m!).</p></div>
<div class="note"><b>Exam tip:</b> Whenever a question says "find the total distance", first solve v = 0, then evaluate s at t = 0, each turning point, and the final time, and add the absolute leg lengths.</div>
`,
quiz:[
{q:"s = 2t³ − 9t² + 12t. Find the times when the particle is at rest.",
a:"t = 1 s and t = 2 s",
sol:"v = ds/dt = 6t² − 18t + 12 = 6(t − 1)(t − 2) = 0 → t = 1, 2. At rest means velocity zero, not displacement zero."},
{q:"A particle has v = 6t² − 4t + 2 and s = 3 when t = 0. Find s when t = 2.",
a:"s = 15",
sol:"s = ∫v dt = 2t³ − 2t² + 2t + c. t = 0, s = 3 → c = 3. s(2) = 16 − 8 + 4 + 3 = 15."},
{q:"v = 3t² − 12. Find the acceleration when the particle is instantaneously at rest (t > 0).",
a:"12 m/s²",
sol:"v = 0 → t² = 4 → t = 2. a = dv/dt = 6t = 12 m/s² at t = 2."},
{q:"A particle starts from O with v = 4t − t². Find the total distance travelled in the first 5 seconds.",
a:"13 m",
sol:"v = 0 at t = 0, 4. s = 2t² − t³/3. s(4) = 32 − 64/3 = 32/3. s(5) = 50 − 125/3 = 25/3. Distance = |32/3 − 0| + |25/3 − 32/3| = 32/3 + 7/3 = 39/3 = 13 m. Reason: the particle moves forward until t = 4, then reverses."},
{q:"Given a = 6t − 4, v = 2 when t = 0, and s = 0 when t = 0, find s in terms of t.",
a:"s = t³ − 2t² + 2t",
sol:"v = ∫a dt = 3t² − 4t + c₁; v(0) = 2 → c₁ = 2. s = ∫v dt = t³ − 2t² + 2t + c₂; s(0) = 0 → c₂ = 0. Integrate twice, fixing a constant each time from the initial conditions."}
]},

// ---------------------------------------------------------------- 15 VECTORS
{
title:"Vectors in Two Dimensions",
syl:"0606 §13 — Vectors in two dimensions",
yt:["vectors IGCSE add maths","position vectors magnitude unit vector","velocity vectors relative motion IGCSE 0606"],
body:`
<h2>1. Basics</h2>
<p>A vector has magnitude AND direction. Write as column (x over y) or as xi + yj where i, j are unit vectors along the axes.</p>
<div class="formula">
Magnitude: |ai + bj| = √(a² + b²)<br>
Unit vector in direction of v: v̂ = v/|v|<br>
AB→ = OB→ − OA→ = b − a
</div>
<h2>2. Position vectors and geometry</h2>
<div class="example"><div class="exhead">Worked example</div>
<p>A has position vector 2i + 3j, B has 8i − 5j. Find AB→, |AB| and the position vector of the midpoint M.</p>
<p>AB→ = b − a = 6i − 8j. |AB| = √(36 + 64) = <b>10</b>.</p>
<p>M = (a + b)/2 = <b>5i − j</b>.</p></div>
<h2>3. Parallel vectors and collinearity</h2>
<p>u parallel to v ⇔ u = kv for some scalar k. Points A, B, C are collinear ⇔ AB→ = k·BC→ (parallel AND sharing point B).</p>
<h2>4. Velocity vectors</h2>
<p>If a particle starts at position a with constant velocity v, its position at time t is:</p>
<div class="formula">r(t) = a + t·v &nbsp;&nbsp;|&nbsp;&nbsp; speed = |v|</div>
<div class="example"><div class="exhead">Worked example — interception</div>
<p>Ship P starts at (i + 2j) km with velocity (3i + 4j) km/h. Find its position at t hours and its speed.</p>
<p>r = (1 + 3t)i + (2 + 4t)j. Speed = |3i + 4j| = √25 = <b>5 km/h</b>.</p>
<p>For two ships meeting: set r_P = r_Q and solve the i and j components — both must match at the SAME time t.</p></div>
`,
quiz:[
{q:"Find the unit vector in the direction of 5i − 12j.",
a:"(5i − 12j)/13",
sol:"|v| = √(25 + 144) = 13. Unit vector = v/|v| = (5/13)i − (12/13)j. Reason: dividing by the magnitude scales the length to exactly 1 while keeping the direction."},
{q:"A(1, 2), B(4, 8), C(6, 12). Show that A, B, C are collinear.",
a:"AB→ = (3, 6), BC→ = (2, 4); AB→ = 1.5·BC→ → collinear",
sol:"AB→ = 3i + 6j and BC→ = 2i + 4j. AB→ = (3/2)BC→, so they are parallel; since both pass through B, the three points lie on one straight line."},
{q:"p = 2i + λj and q = 6i + 9j are parallel. Find λ.",
a:"λ = 3",
sol:"Parallel → p = kq: 2 = 6k → k = 1/3, so λ = 9k = 3."},
{q:"A particle starts at 3i − j and moves with velocity 2i + 5j (units: m, s). Find its position vector after 4 s and its distance from the origin then.",
a:"r = 11i + 19j; distance √482 ≈ 22.0 m",
sol:"r = a + tv = (3 + 8)i + (−1 + 20)j = 11i + 19j. Distance = √(121 + 361) = √482 ≈ 21.95 m."},
{q:"OA→ = a, OB→ = b. P divides AB such that AP:PB = 2:1. Find OP→ in terms of a and b.",
a:"OP→ = (a + 2b)/3",
sol:"OP→ = OA→ + AP→ = a + (2/3)AB→ = a + (2/3)(b − a) = (1/3)a + (2/3)b. Reason: P is two-thirds of the way from A to B."}
]}
];
