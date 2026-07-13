// DEEP LESSONS — full zero-base rewrites with proper math (KaTeX), scenarios, diagrams,
// and step-by-step solutions. Loaded LAST: replaces the short versions.
// Upgraded so far: Add Math Ch1 (Functions), Ch2 (Quadratics); Physics Ch2 (Motion).

// ============================================================ ADD MATH CH 1: FUNCTIONS
ADDMATH[0] = {
title:"Functions",
syl:"0606 §1 — Functions",
yt:["what is a function beginner","IGCSE Add Maths functions domain range","composite functions step by step","inverse functions explained simply"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>Your Grab ride costs RM2.00 flat fee plus RM1.50 per km. So a 4 km ride costs $2 + 1.5(4) = \\text{RM}8$. A 10 km ride costs $2 + 1.5(10) = \\text{RM}17$.</p>
<p>Notice the pattern: you put in a distance, one fixed rule runs, and out comes a price. <b>That rule is a function.</b> We could name it $f$ and write:</p>
$$f(x) = 1.5x + 2$$
<p>where $x$ = distance in km and $f(x)$ = cost in RM. This whole chapter is just about working with rules like this.</p></div>

<h2>1. What exactly is a function?</h2>
<p>A <b>function</b> is a machine: it takes an <b>input</b>, applies a <b>rule</b>, and produces exactly <b>one output</b>.</p>
<div class="fig">
<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="63" font-size="15" fill="#1A2030">input x</text>
<line x1="90" y1="58" x2="150" y2="58" stroke="#5246D9" stroke-width="2.5" marker-end="url(#a1)"/>
<rect x="155" y="25" width="190" height="66" rx="12" fill="#EEECFC" stroke="#5246D9" stroke-width="2"/>
<text x="180" y="55" font-size="14" fill="#5246D9" font-weight="bold">RULE: double it,</text>
<text x="180" y="75" font-size="14" fill="#5246D9" font-weight="bold">then add 3</text>
<line x1="350" y1="58" x2="410" y2="58" stroke="#5246D9" stroke-width="2.5" marker-end="url(#a1)"/>
<text x="418" y="63" font-size="15" fill="#1A2030">output 2x + 3</text>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5246D9"/></marker></defs>
</svg>
<div class="figcap">The function machine for $f(x) = 2x + 3$. Feed in $x = 5$: double it (10), add 3 → out comes 13.</div></div>

<p><b>How to read the notation.</b> $f(x) = 2x + 3$ says: "the function is called $f$, its input is called $x$, and the rule is: multiply by 2, then add 3." Then $f(5)$ means "run the machine with input 5":</p>
$$f(5) = 2(5) + 3 = 13$$
<p>The input doesn't have to be a number — it can be a whole expression. Whatever sits in the brackets replaces <em>every</em> $x$ in the rule:</p>
$$f(a) = 2a + 3 \\qquad f(x+1) = 2(x+1) + 3 = 2x + 5 \\qquad f(x^2) = 2x^2 + 3$$
<div class="mistake"><b>Common mistake #1:</b> $f(x+1)$ is <u>not</u> $f(x) + 1$. You must substitute $x+1$ into the rule and use brackets: $2(x+1)+3$, not $2x+1+3$.</div>

<h2>2. Domain and range — what goes in, what comes out</h2>
<ul>
<li><b>Domain</b> = the set of inputs the function is allowed to take.</li>
<li><b>Range</b> = the set of outputs the function can actually produce.</li>
</ul>
<p>Back to the Grab ride: distance can't be negative, so the domain is $x \\geq 0$. The cheapest ride is $f(0) = 2$, and cost grows forever, so the range is $f(x) \\geq 2$. See how the domain restriction shaped the range?</p>
<div class="example"><div class="exhead">Worked example 1 — finding a range from a graph idea</div>
<p>Find the range of $f(x) = x^2$ (a) for all real $x$, (b) for $x \\geq 3$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span>Think about what squaring does: any number squared is never negative. The smallest possible output is $0$ (when $x = 0$).</span></div>
<div class="st"><span class="n">2</span><span>(a) So for all real $x$: range is $f(x) \\geq 0$.</span></div>
<div class="st"><span class="n">3</span><span>(b) Now inputs start at 3. The smallest output is $f(3) = 9$, and outputs grow as $x$ grows. Range: $f(x) \\geq 9$.</span></div>
</div>
<p><b>Lesson:</b> restricting the domain changes the range. Always ask "what is the smallest/largest output possible with these inputs?"</p></div>

<h2>3. One-one functions — does each output have only one owner?</h2>
<p>A function is <b>one-one</b> if no two different inputs share the same output.</p>
<div class="fig">
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="170" x2="250" y2="170" stroke="#888"/><line x1="60" y1="20" x2="60" y2="185" stroke="#888"/>
<line x1="40" y1="160" x2="240" y2="40" stroke="#5246D9" stroke-width="3"/>
<line x1="30" y1="95" x2="250" y2="95" stroke="#C2571B" stroke-width="1.8" stroke-dasharray="5 4"/>
<circle cx="148" cy="95" r="4.5" fill="#C2571B"/>
<text x="70" y="195" font-size="12" fill="#1D7A4F">✓ one-one: line cuts once</text>
<line x1="310" y1="170" x2="540" y2="170" stroke="#888"/><line x1="425" y1="20" x2="425" y2="185" stroke="#888"/>
<path d="M 330 40 Q 425 260 520 40" fill="none" stroke="#5246D9" stroke-width="3"/>
<line x1="310" y1="90" x2="540" y2="90" stroke="#C2571B" stroke-width="1.8" stroke-dasharray="5 4"/>
<circle cx="355" cy="90" r="4.5" fill="#C2571B"/><circle cx="495" cy="90" r="4.5" fill="#C2571B"/>
<text x="330" y="195" font-size="12" fill="#B02E14">✗ not one-one: cuts twice</text>
</svg>
<div class="figcap">The horizontal line test. Left: $y = 2x+3$ — every horizontal line crosses at most once → one-one. Right: $y = x^2$ — the line $y=4$ crosses at $x = -2$ AND $x = 2$ → not one-one.</div></div>
<p>Why do we care? Because only one-one functions can be <em>reversed</em> — which brings us to inverses.</p>

<h2>4. Inverse functions — running the machine backwards</h2>
<div class="scenario"><div class="schead">Scenario</div>
<p>Your Grab app shows the fare was RM11. How far did you travel? You're mentally undoing the rule: subtract the RM2 fee (leaving 9), then divide by 1.5 → <b>6 km</b>. Congratulations — you just computed $f^{-1}(11)$. The inverse function $f^{-1}$ undoes $f$: it takes outputs back to inputs.</p></div>
<p><b>The 3-step recipe to find $f^{-1}$:</b></p>
<div class="steps">
<div class="st"><span class="n">1</span><span>Write the function as $y = \\ldots$</span></div>
<div class="st"><span class="n">2</span><span>Swap every $x$ and $y$ (because inverse swaps inputs and outputs).</span></div>
<div class="st"><span class="n">3</span><span>Rearrange to make $y$ the subject. That expression is $f^{-1}(x)$.</span></div>
</div>
<div class="example"><div class="exhead">Worked example 2 — every step shown</div>
<p>Find the inverse of $f(x) = \\dfrac{3x - 2}{5}$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span>Write: $\\;y = \\dfrac{3x-2}{5}$</span></div>
<div class="st"><span class="n">2</span><span>Swap $x \\leftrightarrow y$: $\\;x = \\dfrac{3y-2}{5}$</span></div>
<div class="st"><span class="n">3</span><span>Multiply both sides by 5: $\\;5x = 3y - 2$</span></div>
<div class="st"><span class="n">4</span><span>Add 2 to both sides: $\\;5x + 2 = 3y$</span></div>
<div class="st"><span class="n">5</span><span>Divide by 3: $\\;y = \\dfrac{5x+2}{3}$</span></div>
</div>
$$\\therefore\\; f^{-1}(x) = \\frac{5x+2}{3}$$
<p><b>Check it:</b> $f(1) = \\frac{3-2}{5} = \\frac{1}{5}$. Now $f^{-1}\\!\\left(\\frac15\\right) = \\frac{5 \\cdot \\frac15 + 2}{3} = \\frac{3}{3} = 1$ ✓ — back where we started.</p></div>
<div class="formula">Facts to memorise:
$$f^{-1}(f(x)) = x \\qquad \\text{domain of } f^{-1} = \\text{range of } f \\qquad \\text{range of } f^{-1} = \\text{domain of } f$$
Graphically: the graph of $y = f^{-1}(x)$ is the mirror image of $y = f(x)$ in the line $y = x$.</div>

<h2>5. Composite functions — two machines in a chain</h2>
<div class="fig">
<svg viewBox="0 0 640 110" xmlns="http://www.w3.org/2000/svg">
<text x="10" y="60" font-size="14">x</text>
<line x1="30" y1="55" x2="70" y2="55" stroke="#5246D9" stroke-width="2.5" marker-end="url(#a2)"/>
<rect x="75" y="25" width="130" height="60" rx="12" fill="#FBEFE6" stroke="#C2571B" stroke-width="2"/>
<text x="110" y="60" font-size="15" fill="#C2571B" font-weight="bold">g first</text>
<line x1="210" y1="55" x2="260" y2="55" stroke="#5246D9" stroke-width="2.5" marker-end="url(#a2)"/>
<text x="268" y="60" font-size="14">g(x)</text>
<line x1="310" y1="55" x2="350" y2="55" stroke="#5246D9" stroke-width="2.5" marker-end="url(#a2)"/>
<rect x="355" y="25" width="130" height="60" rx="12" fill="#EEECFC" stroke="#5246D9" stroke-width="2"/>
<text x="390" y="60" font-size="15" fill="#5246D9" font-weight="bold">f second</text>
<line x1="490" y1="55" x2="540" y2="55" stroke="#5246D9" stroke-width="2.5" marker-end="url(#a2)"/>
<text x="548" y="60" font-size="14">fg(x)</text>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5246D9"/></marker></defs>
</svg>
<div class="figcap">$fg(x)$ means $f(g(x))$: the output of $g$ becomes the input of $f$. <b>Read right-to-left: the letter closest to $x$ acts first.</b></div></div>
<div class="example"><div class="exhead">Worked example 3</div>
<p>$f(x) = 2x + 3$ and $g(x) = x^2 - 1$. Find $fg(x)$ and $gf(x)$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span>$fg(x)$: $g$ acts first, producing $x^2 - 1$. Now feed that whole expression into $f$ — it replaces the $x$ in $2x + 3$:</span></div>
</div>
$$fg(x) = f(x^2 - 1) = 2(x^2 - 1) + 3 = 2x^2 - 2 + 3 = 2x^2 + 1$$
<div class="steps">
<div class="st"><span class="n">2</span><span>$gf(x)$: now $f$ acts first, producing $2x+3$. Feed it into $g$ — it replaces the $x$ in $x^2 - 1$:</span></div>
</div>
$$gf(x) = g(2x+3) = (2x+3)^2 - 1 = 4x^2 + 12x + 9 - 1 = 4x^2 + 12x + 8$$
<p>Notice $fg \\neq gf$ — <b>order matters</b>, just like putting on socks and shoes.</p></div>
<div class="mistake"><b>Common mistake #2:</b> $fg(x)$ does NOT mean $f(x) \\times g(x)$. It is a chain (composition), not a multiplication.</div>

<h2>6. Graphs of $y = |f(x)|$</h2>
<p>$|{\\cdot}|$ (modulus) makes every output non-negative: $|3| = 3$, $|-3| = 3$. So to sketch $y = |f(x)|$: draw $y = f(x)$ normally, then take any part hanging <em>below</em> the $x$-axis and flip it up (reflect in the $x$-axis). Nothing above the axis moves.</p>
`,
quiz:[
{lvl:'basic',q:"$f(x) = 4x + 1$. Find $f(3)$, $f(-2)$ and $f(a+1)$.",
a:"$f(3)=13$, $f(-2)=-7$, $f(a+1)=4a+5$",
sol:"Substitute the input for every $x$, using brackets: $$f(3) = 4(3)+1 = 13$$ $$f(-2) = 4(-2)+1 = -8+1 = -7$$ $$f(a+1) = 4(a+1)+1 = 4a+4+1 = 4a+5$$ The bracket around $(a+1)$ is essential — the 4 multiplies the whole input."},
{lvl:'basic',q:"State the range of $f(x) = x^2 + 5$ for all real $x$.",
a:"$f(x) \\geq 5$",
sol:"Step 1: $x^2$ is a square, so its smallest value is $0$ (at $x=0$) and it can be as large as we like. Step 2: adding 5 shifts every output up by 5, so the smallest output is $0 + 5 = 5$. Range: $f(x) \\geq 5$."},
{lvl:'inter',q:"$f(x) = 3x - 4$. Find $f^{-1}(x)$ and evaluate $f^{-1}(5)$.",
a:"$f^{-1}(x) = \\dfrac{x+4}{3}$; $f^{-1}(5) = 3$",
sol:"Step 1 — write as $y$: $y = 3x - 4$. Step 2 — swap $x$ and $y$: $x = 3y - 4$. Step 3 — rearrange: add 4 to both sides, $x + 4 = 3y$; divide by 3: $$y = \\frac{x+4}{3} \\;\\Rightarrow\\; f^{-1}(x) = \\frac{x+4}{3}$$ Step 4 — evaluate: $f^{-1}(5) = \\frac{5+4}{3} = \\frac93 = 3$. Sense-check: $f(3) = 9 - 4 = 5$ ✓ — the inverse took us back."},
{lvl:'inter',q:"$f(x) = x^2 + 2$ for $x \\geq 0$, and $g(x) = 2x - 1$. Find $gf(x)$ and its range.",
a:"$gf(x) = 2x^2 + 3$; range $gf(x) \\geq 3$",
sol:"Step 1 — order: $gf$ means $f$ acts first. $f$ outputs $x^2 + 2$. Step 2 — feed into $g$: replace the $x$ in $2x-1$ with $(x^2+2)$: $$gf(x) = 2(x^2 + 2) - 1 = 2x^2 + 4 - 1 = 2x^2 + 3$$ Step 3 — range: since $x \\geq 0$, we have $x^2 \\geq 0$, so $2x^2 \\geq 0$, so $2x^2 + 3 \\geq 3$. Minimum output 3 at $x = 0$. Range: $gf(x) \\geq 3$."},
{lvl:'inter',q:"$f(x) = \\dfrac{5}{x-2}$, $x \\neq 2$. Find $f^{-1}(x)$.",
a:"$f^{-1}(x) = \\dfrac{5}{x} + 2$",
sol:"Step 1: $y = \\dfrac{5}{x-2}$. Step 2 — swap: $x = \\dfrac{5}{y-2}$. Step 3 — multiply both sides by $(y-2)$: $x(y-2) = 5$. Step 4 — divide by $x$: $y - 2 = \\dfrac{5}{x}$. Step 5 — add 2: $$f^{-1}(x) = \\frac{5}{x} + 2, \\quad x \\neq 0$$ The domain excludes $0$ because the range of $f$ never includes $0$ (a fraction with numerator 5 can't equal zero)."},
{lvl:'adv',q:"Explain why $f(x) = x^2 - 4x$ (all real $x$) has no inverse, and find the largest domain of the form $x \\geq k$ for which the inverse exists. Then find $f^{-1}(x)$ for that domain.",
a:"Not one-one; $k = 2$; $f^{-1}(x) = 2 + \\sqrt{x+4}$",
sol:"Step 1 — complete the square to see the shape: $$f(x) = x^2 - 4x = (x-2)^2 - 4$$ This is a parabola with vertex at $(2, -4)$. Step 2 — why no inverse: e.g. $f(0) = 0$ and $f(4) = 0$: two inputs share one output, so the function fails the horizontal line test — reversing it would be ambiguous. Step 3 — fix: keep only the right half, $x \\geq 2$ (from the vertex onward the graph only rises, so it becomes one-one). So $k = 2$. Step 4 — find the inverse: $y = (x-2)^2 - 4$; swap: $x = (y-2)^2 - 4$; add 4: $x + 4 = (y-2)^2$; square-root: $y - 2 = \\pm\\sqrt{x+4}$. Since our domain has $y \\geq 2$, take the $+$ root: $$f^{-1}(x) = 2 + \\sqrt{x+4}, \\quad x \\geq -4$$"},
{lvl:'adv',q:"Sketch-thinking: describe fully the graph of $y = |2x - 4|$, then solve $|2x-4| = x$.",
a:"V-shape, vertex $(2, 0)$; solutions $x = \\tfrac43$ and $x = 4$",
sol:"Step 1 — the graph: $y = 2x - 4$ is a straight line crossing the $x$-axis at $x = 2$. The modulus flips the below-axis part ($x < 2$) upward → a V with vertex $(2,0)$; right arm gradient $+2$, left arm gradient $-2$. Step 2 — solve on each arm. Right arm ($x \\geq 2$): $2x - 4 = x \\Rightarrow x = 4$. Valid since $4 \\geq 2$ ✓. Left arm ($x < 2$): $-(2x-4) = x \\Rightarrow -2x + 4 = x \\Rightarrow 4 = 3x \\Rightarrow x = \\tfrac43$. Valid since $\\tfrac43 < 2$ ✓. Step 3 — always check arm conditions: a 'solution' on the wrong arm must be rejected."}
]};

// ============================================================ ADD MATH CH 2: QUADRATICS
ADDMATH[1] = {
title:"Quadratic Functions",
syl:"0606 §2 — Quadratic functions",
yt:["completing the square explained from zero","discriminant explained visually","quadratic inequalities sketch method","why parabola shape quadratic"],
body:`
<div class="scenario"><div class="schead">Real-life scenario</div>
<p>You kick a football. Its height (metres) after $t$ seconds is $$h = -5t^2 + 20t.$$ How high does it go? When does it land? Both questions are answered by this chapter — the flight path of every thrown object is a <b>quadratic</b>, and its graph is a <b>parabola</b>.</p></div>

<h2>1. What is a quadratic?</h2>
<p>Any function of the form</p>
$$y = ax^2 + bx + c, \\qquad a \\neq 0$$
<p>The $x^2$ term is what makes it quadratic. The number $a$ controls the shape:</p>
<div class="fig">
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="180" x2="260" y2="180" stroke="#888"/><line x1="140" y1="15" x2="140" y2="195" stroke="#888"/>
<path d="M 50 40 Q 140 290 230 40" fill="none" stroke="#5246D9" stroke-width="3"/>
<text x="55" y="28" font-size="13" fill="#5246D9">a &gt; 0 : smile ∪, has a MINIMUM</text>
<line x1="320" y1="60" x2="545" y2="60" stroke="#888"/><line x1="430" y1="15" x2="430" y2="195" stroke="#888"/>
<path d="M 345 180 Q 430 -75 520 180" fill="none" stroke="#C2571B" stroke-width="3"/>
<text x="335" y="200" font-size="13" fill="#C2571B">a &lt; 0 : frown ∩, has a MAXIMUM</text>
</svg>
<div class="figcap">The sign of $a$ decides everything about the shape. The turning point is called the <b>vertex</b>.</div></div>
<p>Three anatomy parts you must be able to find: the <b>roots</b> (where $y = 0$, i.e. where the graph crosses the $x$-axis), the <b>$y$-intercept</b> (put $x = 0$: it's just $c$), and the <b>vertex</b> (max/min point).</p>

<h2>2. Completing the square — finding the vertex</h2>
<p>The idea: rewrite $ax^2 + bx + c$ into the form</p>
$$a(x + p)^2 + q$$
<p>Why bother? Because a square like $(x+p)^2$ is <b>never negative</b> — its smallest value is $0$, happening when $x = -p$. So the whole expression has minimum value $q$ at $x = -p$ (or maximum if $a &lt; 0$). The vertex just falls out.</p>
<div class="example"><div class="exhead">Worked example 1 — basic case ($a = 1$)</div>
<p>Express $x^2 + 8x + 3$ in the form $(x+p)^2 + q$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><b>Halve the $x$-coefficient:</b> half of $8$ is $4$. Write $(x+4)^2$.</span></div>
<div class="st"><span class="n">2</span><span><b>But check what that gives:</b> $(x+4)^2 = x^2 + 8x + 16$. We wanted $x^2 + 8x + 3$, and we've accidentally added $16$ instead of $3$.</span></div>
<div class="st"><span class="n">3</span><span><b>Correct it:</b> subtract the unwanted $16$, then add the $3$ we actually want: $$x^2 + 8x + 3 = (x+4)^2 - 16 + 3 = (x+4)^2 - 13$$</span></div>
</div>
<p>Read off the vertex: minimum value $-13$ at $x = -4$. Range: $y \\geq -13$.</p></div>
<div class="example"><div class="exhead">Worked example 2 — when $a \\neq 1$</div>
<p>Express $2x^2 - 12x + 7$ in the form $a(x+p)^2 + q$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><b>Factor $a$ out of the $x$-terms only:</b> $$2x^2 - 12x + 7 = 2(x^2 - 6x) + 7$$</span></div>
<div class="st"><span class="n">2</span><span><b>Complete the square inside:</b> half of $-6$ is $-3$; $(x-3)^2 = x^2 - 6x + 9$, so $x^2 - 6x = (x-3)^2 - 9$: $$= 2\\big[(x-3)^2 - 9\\big] + 7$$</span></div>
<div class="st"><span class="n">3</span><span><b>Expand the outer 2 carefully</b> (it multiplies the $-9$ too!): $$= 2(x-3)^2 - 18 + 7 = 2(x-3)^2 - 11$$</span></div>
</div>
<p>Vertex: minimum $-11$ at $x = 3$.</p></div>
<div class="mistake"><b>Common mistake:</b> in step 3, forgetting that the factor $2$ multiplies the $-9$ (writing $-9 + 7$ instead of $-18 + 7$). This single slip is one of the most common lost marks in 0606.</div>

<div class="scenario"><div class="schead">Scenario solved</div>
<p>The football: $h = -5t^2 + 20t = -5(t^2 - 4t) = -5\\big[(t-2)^2 - 4\\big] = -5(t-2)^2 + 20$.</p>
<p>Maximum height <b>20 m</b>, reached at $t = 2$ s. It lands when $h = 0$: $-5t(t-4) = 0 \\Rightarrow t = 4$ s.</p></div>

<h2>3. The discriminant — how many roots?</h2>
<p>The quadratic formula solves $ax^2 + bx + c = 0$:</p>
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
<p>Look at the part under the square root. Call it the <b>discriminant</b>:</p>
$$D = b^2 - 4ac$$
<p>Everything depends on its sign, because you can't square-root a negative number (in real numbers):</p>
<div class="fig">
<svg viewBox="0 0 620 190" xmlns="http://www.w3.org/2000/svg">
<line x1="15" y1="120" x2="195" y2="120" stroke="#888"/>
<path d="M 35 30 Q 105 210 175 30" fill="none" stroke="#5246D9" stroke-width="3"/>
<text x="30" y="160" font-size="12.5" fill="#1D7A4F">D &gt; 0 : crosses twice</text>
<text x="30" y="177" font-size="12.5" fill="#1D7A4F">two distinct roots</text>
<line x1="220" y1="105" x2="400" y2="105" stroke="#888"/>
<path d="M 240 25 Q 310 185 380 25" fill="none" stroke="#5246D9" stroke-width="3"/>
<text x="240" y="160" font-size="12.5" fill="#8A6410">D = 0 : just touches</text>
<text x="240" y="177" font-size="12.5" fill="#8A6410">one repeated root (tangent!)</text>
<line x1="425" y1="130" x2="605" y2="130" stroke="#888"/>
<path d="M 445 20 Q 515 155 585 20" fill="none" stroke="#5246D9" stroke-width="3"/>
<text x="445" y="160" font-size="12.5" fill="#B02E14">D &lt; 0 : never reaches axis</text>
<text x="445" y="177" font-size="12.5" fill="#B02E14">no real roots</text>
</svg>
<div class="figcap">Same parabola at three heights — the discriminant tells you which picture you're in without drawing it.</div></div>
<div class="example"><div class="exhead">Worked example 3 — the tangent question (huge exam favourite)</div>
<p>Find the values of $k$ for which the line $y = kx + 1$ is a <b>tangent</b> to the curve $y = x^2 + 3x + 2$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><b>Intersection = equate the two:</b> $$x^2 + 3x + 2 = kx + 1$$</span></div>
<div class="st"><span class="n">2</span><span><b>Bring everything to one side</b> (collect the $x$-terms): $$x^2 + (3 - k)x + 1 = 0$$</span></div>
<div class="st"><span class="n">3</span><span><b>Translate "tangent" into algebra:</b> a tangent touches exactly once → one repeated root → $D = 0$. Here $a = 1$, $b = (3-k)$, $c = 1$: $$(3-k)^2 - 4(1)(1) = 0$$</span></div>
<div class="st"><span class="n">4</span><span><b>Solve for $k$:</b> $(3-k)^2 = 4 \\Rightarrow 3 - k = \\pm 2 \\Rightarrow k = 1 \\text{ or } k = 5$</span></div>
</div></div>
<div class="formula">Translation table (memorise): line <b>crosses</b> curve at 2 points $\\Leftrightarrow D > 0$ • line is <b>tangent</b> $\\Leftrightarrow D = 0$ • line <b>misses</b> curve $\\Leftrightarrow D < 0$ • quadratic is <b>always positive</b> $\\Leftrightarrow a > 0$ AND $D < 0$</div>

<h2>4. Quadratic inequalities — always sketch</h2>
<div class="example"><div class="exhead">Worked example 4</div>
<p>Solve $x^2 - x - 6 > 0$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><b>Factorise:</b> need two numbers multiplying to $-6$, adding to $-1$: that's $-3$ and $+2$. $$(x-3)(x+2) > 0$$</span></div>
<div class="st"><span class="n">2</span><span><b>Roots:</b> $x = 3$ and $x = -2$. Sketch a ∪ parabola crossing there.</span></div>
<div class="st"><span class="n">3</span><span><b>Read the sketch:</b> we want where the curve is ABOVE zero — that's the two outer arms: $$x < -2 \\quad\\text{or}\\quad x > 3$$</span></div>
</div>
<p>(If the question had $< 0$, the answer would be the dip <em>between</em> the roots: $-2 < x < 3$.)</p></div>
<div class="mistake"><b>Common mistake:</b> writing "$x < -2$ and $x > 3$" — impossible for one number! Outside the roots is an "<b>or</b>"; between the roots is one connected interval.</div>
`,
quiz:[
{lvl:'basic',q:"Solve $x^2 - 7x + 12 = 0$ by factorising.",
a:"$x = 3$ or $x = 4$",
sol:"Step 1: find two numbers that multiply to $+12$ and add to $-7$: they are $-3$ and $-4$. Step 2: factorise: $(x-3)(x-4) = 0$. Step 3: a product is zero only if a factor is zero: $x - 3 = 0 \\Rightarrow x = 3$, or $x - 4 = 0 \\Rightarrow x = 4$."},
{lvl:'basic',q:"Write $x^2 + 6x + 1$ in the form $(x+p)^2 + q$ and state the minimum point.",
a:"$(x+3)^2 - 8$; minimum $(-3, -8)$",
sol:"Step 1: halve the 6 → 3, so try $(x+3)^2 = x^2 + 6x + 9$. Step 2: we've added 9 but only wanted $+1$, so subtract 8: $$x^2 + 6x + 1 = (x+3)^2 - 8$$ Step 3: the square is smallest (zero) at $x = -3$, giving $y = -8$. Minimum point $(-3, -8)$."},
{lvl:'inter',q:"Express $x^2 + 8x + 3$ in the form $(x+p)^2 + q$, hence state the range of $y = x^2 + 8x + 3$.",
a:"$(x+4)^2 - 13$; range $y \\geq -13$",
sol:"Step 1: halve 8 → 4: $(x+4)^2 = x^2 + 8x + 16$. Step 2: adjust the constant: we added 16 but want 3, so subtract 13: $(x+4)^2 - 13$. Step 3: $(x+4)^2 \\geq 0$ always, so $y \\geq 0 - 13 = -13$. The range is $y \\geq -13$, with the minimum at $x = -4$."},
{lvl:'inter',q:"Find the range of values of $k$ for which $x^2 + (k-2)x + 4 = 0$ has no real roots.",
a:"$-2 < k < 6$",
sol:"Step 1 — condition: no real roots means $D < 0$. Step 2 — identify $a = 1$, $b = k - 2$, $c = 4$: $$(k-2)^2 - 4(1)(4) < 0$$ Step 3: $(k-2)^2 < 16$. Step 4 — careful with square roots of inequalities: a square is less than 16 exactly when the base is between $-4$ and $4$: $$-4 < k - 2 < 4$$ Step 5 — add 2 throughout: $-2 < k < 6$."},
{lvl:'inter',q:"Solve the inequality $2x^2 + 5x - 3 \\leq 0$.",
a:"$-3 \\leq x \\leq \\tfrac12$",
sol:"Step 1 — factorise: look for factors of $2x^2 + 5x - 3$: $(2x - 1)(x + 3)$. Check: $2x^2 + 6x - x - 3 = 2x^2 + 5x - 3$ ✓. Step 2 — roots: $x = \\tfrac12$ and $x = -3$. Step 3 — sketch: $a = 2 > 0$ so it's a ∪ shape crossing at those roots. Step 4 — we want $\\leq 0$: the part on/below the axis is the dip BETWEEN the roots: $$-3 \\leq x \\leq \\tfrac12$$"},
{lvl:'adv',q:"Show that the line $y = 2x - 7$ does not meet the curve $y = x^2 - 4x + 3$.",
a:"$D = -4 < 0$, so no intersection",
sol:"Step 1 — equate (intersections are shared points): $$x^2 - 4x + 3 = 2x - 7$$ Step 2 — collect on one side: $x^2 - 6x + 10 = 0$. Step 3 — discriminant with $a=1, b=-6, c=10$: $$D = (-6)^2 - 4(1)(10) = 36 - 40 = -4$$ Step 4 — conclude: $D < 0$ means the equation has no real solutions, so there is no $x$ where the line and curve share a point — they never meet."},
{lvl:'adv',q:"A quadratic curve has maximum value $5$ at $x = -1$ and passes through $(0, 3)$. Find its equation in the form $y = a(x+p)^2 + q$.",
a:"$y = -2(x+1)^2 + 5$",
sol:"Step 1 — use the vertex form directly: maximum $5$ at $x = -1$ means vertex $(-1, 5)$, so $$y = a(x+1)^2 + 5$$ with $a < 0$ (maximum → frown shape). Step 2 — use the known point $(0,3)$: substitute $x = 0, y = 3$: $$3 = a(0+1)^2 + 5 = a + 5 \\Rightarrow a = -2$$ Step 3 — write the answer: $y = -2(x+1)^2 + 5$. Check $a < 0$ ✓ consistent with a maximum."},
{lvl:'adv',q:"The line $y = mx + 2$ meets the curve $y = x^2 - 4x + 6$ at two distinct points. Find the range of values of $m$.",
a:"$m < -8$ or $m > 0$",
sol:"Step 1 — equate: $x^2 - 4x + 6 = mx + 2$. Step 2 — one side: $$x^2 - (4+m)x + 4 = 0$$ Step 3 — two distinct points means $D > 0$ with $a = 1$, $b = -(4+m)$, $c = 4$: $$(4+m)^2 - 16 > 0$$ Step 4 — expand: $m^2 + 8m + 16 - 16 > 0 \\Rightarrow m^2 + 8m > 0$. Step 5 — factorise and sketch: $m(m+8) > 0$ is a ∪ parabola in $m$ with roots $0$ and $-8$; positive OUTSIDE the roots: $$m < -8 \\quad\\text{or}\\quad m > 0$$"}
]};

// ============================================================ PHYSICS CH 2: MOTION
PHYSICS[1] = {
title:"Motion",
syl:"0625 §1.2 — Motion",
yt:["speed velocity acceleration for beginners","speed time graph area distance explained","free fall terminal velocity skydiver","distance time graph explained IGCSE"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>You're in a Grab from Sunway to KL Sentral. The app says "12 km, 24 minutes". The car speeds up leaving campus, cruises on the highway, crawls in a jam, then stops at lights. This chapter gives you the language and the graphs to describe ALL of that precisely — and it's the foundation for the whole Forces chapter next.</p></div>

<h2>1. Speed — how fast, ignoring direction</h2>
$$\\text{speed} = \\frac{\\text{distance}}{\\text{time}} \\qquad v = \\frac{d}{t} \\quad (\\text{m/s})$$
<p>Your Grab trip: average speed $= \\dfrac{12\\,000 \\text{ m}}{24 \\times 60 \\text{ s}} = \\dfrac{12000}{1440} \\approx 8.3$ m/s. But the speedometer wasn't stuck on 8.3 the whole way — sometimes 0 in the jam, sometimes 25 on the highway. That's the difference between:</p>
<ul>
<li><b>Average speed</b> = total distance ÷ total time (the whole-journey number)</li>
<li><b>Instantaneous speed</b> = the speedometer reading right now</li>
</ul>
<div class="mistake"><b>Unit trap:</b> always convert BEFORE calculating — km → m (×1000), minutes → s (×60), hours → s (×3600). To convert km/h → m/s, divide by 3.6 (e.g. 90 km/h = 25 m/s).</div>

<h2>2. Velocity — speed WITH direction</h2>
<p>Walk 3 m east then 3 m west: distance = 6 m but <b>displacement</b> (net position change) = 0. Velocity is the vector version of speed: $$\\text{velocity} = \\frac{\\text{displacement}}{\\text{time}}$$ Two cars doing 60 km/h in opposite directions have the SAME speed but DIFFERENT velocities. This distinction matters hugely in the momentum chapter.</p>

<h2>3. Acceleration — how quickly velocity changes</h2>
$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - u}{t} \\qquad (\\text{m/s}^2)$$
<p>where $u$ = starting velocity, $v$ = final velocity. Read m/s² as "metres per second, <em>per second</em>": $a = 2$ m/s² means the car gains 2 m/s of speed every second: 0 → 2 → 4 → 6...</p>
<div class="example"><div class="exhead">Worked example 1</div>
<p>A car speeds up from $10$ m/s to $30$ m/s in $8$ s. Find its acceleration.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span>List the values: $u = 10$ m/s, $v = 30$ m/s, $t = 8$ s.</span></div>
<div class="st"><span class="n">2</span><span>Apply the formula: $$a = \\frac{v - u}{t} = \\frac{30 - 10}{8} = \\frac{20}{8} = 2.5 \\text{ m/s}^2$$</span></div>
<div class="st"><span class="n">3</span><span>Interpret: the car gains 2.5 m/s of speed each second. A negative answer would mean slowing down (deceleration).</span></div>
</div></div>

<h2>4. Distance–time graphs — position as a story</h2>
<div class="fig">
<svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg">
<line x1="45" y1="195" x2="480" y2="195" stroke="#888" stroke-width="1.5"/>
<line x1="45" y1="15" x2="45" y2="195" stroke="#888" stroke-width="1.5"/>
<line x1="45" y1="195" x2="170" y2="90" stroke="#C2571B" stroke-width="3"/>
<line x1="170" y1="90" x2="300" y2="90" stroke="#C2571B" stroke-width="3"/>
<path d="M 300 90 Q 350 88 380 60 Q 400 40 415 25" stroke="#C2571B" stroke-width="3" fill="none"/>
<text x="60" y="150" font-size="12" fill="#555">constant speed</text>
<text x="185" y="80" font-size="12" fill="#555">stopped (flat)</text>
<text x="315" y="130" font-size="12" fill="#555">speeding up (curve steepens)</text>
<text x="440" y="215" font-size="12" fill="#555">time</text>
<text x="8" y="25" font-size="12" fill="#555">dist</text>
</svg>
<div class="figcap"><b>Gradient = speed.</b> Steeper = faster; flat = stationary; curving = changing speed.</div></div>

<h2>5. Speed–time graphs — the exam workhorse</h2>
<div class="fig">
<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
<line x1="45" y1="195" x2="480" y2="195" stroke="#888" stroke-width="1.5"/>
<line x1="45" y1="15" x2="45" y2="195" stroke="#888" stroke-width="1.5"/>
<path d="M 45 195 L 165 70 L 320 70 L 450 195" fill="none" stroke="#C2571B" stroke-width="3"/>
<path d="M 45 195 L 165 70 L 165 195 Z" fill="#FBEFE6" opacity="0.85"/>
<rect x="165" y="70" width="155" height="125" fill="#EEECFC" opacity="0.85"/>
<text x="75" y="185" font-size="11.5" fill="#C2571B">triangle area</text>
<text x="200" y="140" font-size="11.5" fill="#5246D9">rectangle area</text>
<text x="60" y="55" font-size="12" fill="#555">gradient = acceleration</text>
<text x="150" y="225" font-size="12.5" fill="#1D7A4F" font-weight="bold">AREA UNDER GRAPH = DISTANCE TRAVELLED</text>
<text x="445" y="215" font-size="12" fill="#555">time</text>
<text x="8" y="25" font-size="12" fill="#555">v</text>
</svg>
<div class="figcap">Two superpowers of the speed–time graph: read acceleration from the <b>slope</b>, distance from the <b>area</b>.</div></div>
<div class="example"><div class="exhead">Worked example 2 — the full graph routine</div>
<p>A car accelerates uniformly from $10$ m/s to $30$ m/s in $8$ s, then holds $30$ m/s for $12$ s. Find the total distance.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><b>Phase 1</b> (sloped line from 10 to 30 over 8 s) — area of a trapezium: $$d_1 = \\tfrac12(u + v)\\,t = \\tfrac12(10 + 30)(8) = \\tfrac12 \\times 40 \\times 8 = 160 \\text{ m}$$</span></div>
<div class="st"><span class="n">2</span><span><b>Phase 2</b> (flat line at 30 for 12 s) — a rectangle: $$d_2 = 30 \\times 12 = 360 \\text{ m}$$</span></div>
<div class="st"><span class="n">3</span><span><b>Total:</b> $d = 160 + 360 = 520$ m.</span></div>
</div></div>

<h2>6. Free fall and terminal velocity</h2>
<p>Drop anything near Earth's surface (no air resistance) and it accelerates downward at $$g \\approx 9.8 \\text{ m/s}^2$$ — the same for a coin and a bowling ball. A hammer and a feather dropped on the Moon (no air!) land together — the Apollo 15 astronauts actually filmed this.</p>
<p>WITH air, a skydiver's story has three acts:</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><b>Just after jumping:</b> speed is low → air resistance tiny → weight wins → accelerates at nearly $g$.</span></div>
<div class="st"><span class="n">2</span><span><b>Speeding up:</b> air resistance grows with speed → resultant force shrinks → still accelerating, but less and less.</span></div>
<div class="st"><span class="n">3</span><span><b>Terminal velocity:</b> air resistance has grown to equal weight → resultant force zero → constant maximum speed (~55 m/s belly-down). Opening the parachute hugely increases drag → decelerates to a new, slower terminal velocity for safe landing.</span></div>
</div>
`,
quiz:[
{lvl:'basic',q:"A cyclist travels $1.2$ km in $4$ minutes. Find the average speed in m/s.",
a:"$5$ m/s",
sol:"Step 1 — convert units first: $1.2$ km $= 1200$ m; $4$ min $= 240$ s. Step 2 — apply: $$v = \\frac{d}{t} = \\frac{1200}{240} = 5 \\text{ m/s}$$ Never mix km with seconds — convert, then calculate."},
{lvl:'basic',q:"A runner covers $100$ m in $12.5$ s. Average speed?",
a:"$8$ m/s",
sol:"Units already SI. $$v = \\frac{100}{12.5} = 8 \\text{ m/s}$$ (About Olympic 100 m pace is ~10 m/s, so 8 m/s is a very fast club runner.)"},
{lvl:'inter',q:"From a speed–time graph, a train accelerates uniformly from rest to $24$ m/s in $60$ s. Find (a) the acceleration, (b) the distance covered.",
a:"(a) $0.4$ m/s² (b) $720$ m",
sol:"(a) Gradient of the line: $u = 0$, $v = 24$, $t = 60$: $$a = \\frac{24 - 0}{60} = 0.4 \\text{ m/s}^2$$ (b) Area under the line — a triangle with base 60 and height 24: $$d = \\tfrac12 \\times 60 \\times 24 = 720 \\text{ m}$$ Slope gives acceleration; area gives distance — the two graph superpowers."},
{lvl:'inter',q:"A ball is dropped from rest (ignore air resistance, $g = 9.8$ m/s²). Find its speed after $3$ s and the distance fallen.",
a:"$29.4$ m/s; $44.1$ m",
sol:"Step 1 — speed: gains $9.8$ m/s every second: $$v = gt = 9.8 \\times 3 = 29.4 \\text{ m/s}$$ Step 2 — distance = area under the v–t graph (a triangle from 0 to 29.4 over 3 s): $$d = \\tfrac12 \\times 3 \\times 29.4 = 44.1 \\text{ m}$$ That's a 14-storey building in 3 seconds — free fall is fast."},
{lvl:'inter',q:"On a distance–time graph, describe the motion when the line is (a) horizontal, (b) straight with positive gradient, (c) a curve of increasing gradient.",
a:"(a) stationary (b) constant speed (c) accelerating",
sol:"The gradient of a distance–time graph IS the speed. (a) Zero gradient → zero speed → not moving. (b) Constant gradient → constant speed. (c) Gradient growing → speed growing → accelerating. (A curve flattening out would mean decelerating.)"},
{lvl:'adv',q:"Explain, in terms of forces, why a skydiver reaches terminal velocity, and what happens when the parachute opens.",
a:"Drag grows with speed until it equals weight → zero resultant force → constant velocity. Parachute: drag suddenly exceeds weight → decelerates to a lower terminal velocity",
sol:"Phase 1: weight $>$ drag → downward resultant force → acceleration. Phase 2: as speed rises, air resistance rises, shrinking the resultant force and the acceleration. Phase 3: drag $=$ weight → resultant force zero → by Newton's first law, constant (terminal) velocity. Parachute opens: area increases massively → drag now exceeds weight → resultant force points UP → the diver decelerates (still moving down!) until drag again balances weight at a much lower terminal velocity, safe for landing."},
{lvl:'adv',q:"A car travels at $30$ m/s. The driver's reaction time is $0.6$ s, then the brakes decelerate the car at $5$ m/s². Find the total stopping distance.",
a:"$108$ m",
sol:"Step 1 — thinking distance (constant speed during the reaction): $$d_1 = 30 \\times 0.6 = 18 \\text{ m}$$ Step 2 — braking time: from 30 to 0 at 5 m/s² takes $t = 30/5 = 6$ s. Step 3 — braking distance = triangle area under the v–t graph: $$d_2 = \\tfrac12 \\times 6 \\times 30 = 90 \\text{ m}$$ Step 4 — total: $18 + 90 = 108$ m. Note braking distance grows with speed²: double the speed → quadruple the braking distance."}
]};


// ============================================================ ADD MATH CH 3: FACTORS OF POLYNOMIALS
ADDMATH[2] = {
title:"Factors of Polynomials",
syl:"0606 §3 — Factors of polynomials",
yt:["remainder theorem explained from zero","factor theorem step by step IGCSE","polynomial long division beginner","factorising cubics IGCSE add maths"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>A kuih seller at the pasar malam has a rectangular sheet of cardboard $30$ cm by $20$ cm. She cuts a square of side $x$ cm from each corner and folds up the sides to make an open box for packing kuih. The box's volume is:</p>
$$V(x) = x(30-2x)(20-2x)$$
<p>Multiply that out and you get a <b>cubic</b> (degree-3) expression in $x$. If she wants a box of a specific volume — say exactly $1000\\text{ cm}^3$ — she needs to solve a cubic equation. This chapter gives you the tools: the <b>remainder theorem</b> and the <b>factor theorem</b>, which turn "solve this messy cubic" into "test a few simple numbers."</p></div>

<h2>1. What is a polynomial?</h2>
<p>A <b>polynomial</b> in $x$ is an expression built only from whole-number powers of $x$, added or subtracted, each with a coefficient:</p>
$$p(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0$$
<p>The <b>degree</b> is the highest power present. $x^3 - 2x^2 + 5$ has degree 3 (a <b>cubic</b>); $4x^2 + x - 1$ has degree 2 (a <b>quadratic</b>, which you met last chapter). The number multiplying the highest power ($a_n$) is called the <b>leading coefficient</b>, and $a_0$ (no $x$ attached) is the <b>constant term</b>.</p>
<div class="mistake"><b>Common mistake:</b> $\sqrt{x}$, $\dfrac{1}{x}$ and $x^{-2}$ are <u>not</u> polynomial terms — powers must be positive whole numbers (0, 1, 2, 3, ...). An expression containing any of these is not a polynomial.</div>

<h2>2. Dividing polynomials — long division, step by step</h2>
<p>Just like $17 \div 3 = 5$ remainder $2$ (because $17 = 3 \times 5 + 2$), we can divide one polynomial by another and get a quotient and a remainder:</p>
$$p(x) = (\text{divisor}) \times (\text{quotient}) + (\text{remainder})$$
<div class="example"><div class="exhead">Worked example 1 — polynomial long division</div>
<p>Divide $2x^3 + 3x^2 - 4x + 1$ by $(x - 2)$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Set up like number long division.</span><br>Divide the leading term of the polynomial by the leading term of the divisor: $2x^3 \div x = 2x^2$. Write $2x^2$ on top.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Multiply and subtract.</span><br>$2x^2 \times (x-2) = 2x^3 - 4x^2$. Subtract this from $2x^3+3x^2-4x+1$: $$(2x^3+3x^2) - (2x^3-4x^2) = 7x^2 \;\Rightarrow\; \text{bring down: } 7x^2 - 4x + 1$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Repeat: divide the new leading term.</span><br>$7x^2 \div x = 7x$. Multiply: $7x(x-2) = 7x^2 - 14x$. Subtract: $(7x^2-4x) - (7x^2-14x) = 10x \;\Rightarrow\; 10x + 1$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Repeat once more.</span><br>$10x \div x = 10$. Multiply: $10(x-2) = 10x - 20$. Subtract: $(10x+1)-(10x-20) = 21$. Nothing left to bring down — that's the remainder.</span></div>
</div>
$$2x^3+3x^2-4x+1 = (x-2)(2x^2+7x+10) + 21$$
<p>Check by substituting $x=2$: $(2-2)(\ldots) + 21 = 21$ — matches the original at $x=2$: $2(8)+3(4)-8+1 = 16+12-8+1=21$ ✓.</p></div>

<div class="fig">
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="20" width="180" height="120" fill="none" stroke="#5246D9" stroke-width="2"/>
<rect x="20" y="20" width="30" height="30" fill="#EEECFC" stroke="#5246D9"/>
<rect x="170" y="20" width="30" height="30" fill="#EEECFC" stroke="#5246D9"/>
<rect x="20" y="110" width="30" height="30" fill="#EEECFC" stroke="#5246D9"/>
<rect x="170" y="110" width="30" height="30" fill="#EEECFC" stroke="#5246D9"/>
<text x="30" y="40" font-size="11" fill="#5246D9">x</text>
<text x="180" y="40" font-size="11" fill="#5246D9">x</text>
<text x="30" y="130" font-size="11" fill="#5246D9">x</text>
<text x="180" y="130" font-size="11" fill="#5246D9">x</text>
<text x="90" y="14" font-size="12" fill="#1A2030">30 cm</text>
<text x="0" y="85" font-size="12" fill="#1A2030" transform="rotate(-90 8 85)">20 cm</text>
<path d="M 230 80 L 280 80" stroke="#1A2030" stroke-width="2" marker-end="url(#a3)"/>
<path d="M 320 30 L 320 10 L 460 10 L 460 30" fill="none" stroke="#C2571B" stroke-width="2"/>
<path d="M 320 130 L 320 150 L 460 150 L 460 130" fill="none" stroke="#C2571B" stroke-width="2"/>
<rect x="320" y="30" width="140" height="100" fill="#FBEFE6" stroke="#C2571B" stroke-width="2"/>
<text x="345" y="85" font-size="12.5" fill="#C2571B" font-weight="bold">folded open box</text>
<defs><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1A2030"/></marker></defs>
</svg>
<div class="figcap">Cut squares of side $x$ from each corner, fold up the flaps: base becomes $(30-2x)$ by $(20-2x)$, height $x$. Volume is the cubic $V(x)=x(30-2x)(20-2x)$.</div></div>

<h2>3. The remainder theorem — a shortcut with no division at all</h2>
<p>Long division works, but there's a much faster way to find <em>just the remainder</em> when dividing by something simple like $(x-a)$:</p>
<div class="formula"><b>Remainder theorem:</b> when a polynomial $p(x)$ is divided by $(x-a)$, the remainder equals $p(a)$.</div>
<p><b>Why does this work?</b> From $p(x) = (x-a)\times(\text{quotient}) + (\text{remainder})$, substitute $x=a$: the first term becomes $(a-a)\times(\ldots) = 0$, leaving $p(a) = \text{remainder}$. The whole messy division collapses to one substitution!</p>
<div class="example"><div class="exhead">Worked example 2</div>
<p>Find the remainder when $2x^3+3x^2-4x+1$ is divided by $(x-2)$ — without doing long division.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Identify $a$.</span><br>Divisor is $(x-2)$, so $a=2$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Substitute into $p(x)$.</span><br>$$p(2) = 2(2)^3+3(2)^2-4(2)+1 = 16+12-8+1 = 21$$</span></div>
</div>
<p>Matches Worked example 1 exactly — but took three lines instead of a full division.</p></div>
<div class="mistake"><b>Common mistake:</b> dividing by $(x+3)$ means testing $a=-3$, not $a=3$. Always rewrite the divisor as $(x-a)$ first: $(x+3) = (x-(-3))$.</div>

<h2>4. The factor theorem — turning "solve" into "test"</h2>
<div class="formula"><b>Factor theorem:</b> $(x-a)$ is a factor of $p(x)$ if and only if $p(a)=0$.</div>
<p>This is just the remainder theorem's special case: remainder $0$ means the division was exact, i.e. $(x-a)$ divides in perfectly. This is the single most useful idea in this chapter — it turns solving a cubic equation into <b>testing candidate numbers</b>.</p>
<p><b>Which numbers to test?</b> Any factor that makes $p(x)=0$ must (for integer-coefficient polynomials) be a divisor of the constant term. So list the divisors of the constant term (positive and negative) and test them in order: $\pm1, \pm2, \pm3, \ldots$</p>
<div class="example"><div class="exhead">Worked example 3 — full factorisation of a cubic</div>
<p>Factorise completely: $x^3-2x^2-5x+6$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">List candidates.</span><br>Constant term is $6$, so try divisors: $\pm1,\pm2,\pm3,\pm6$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Test $x=1$.</span><br>$p(1) = 1-2-5+6 = 0$ ✓ — so $(x-1)$ is a factor.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Divide out the factor found.</span><br>Using long division (or inspection): $$x^3-2x^2-5x+6 = (x-1)(x^2-x-6)$$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Factorise what's left — it's just a quadratic now.</span><br>$x^2-x-6 = (x-3)(x+2)$.</span></div>
</div>
$$\therefore\; x^3-2x^2-5x+6 = (x-1)(x-3)(x+2)$$
<p><b>The pattern:</b> find ONE root by trial, divide it out, and you're left with a quadratic — which you already know how to factorise from Chapter 2. Never trial-test more than needed once the degree drops to 2.</p></div>

<div class="fig">
<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="120" x2="500" y2="120" stroke="#888"/>
<line x1="260" y1="20" x2="260" y2="210" stroke="#888"/>
<path d="M 30 40 C 120 220 180 20 260 120 C 340 220 400 20 490 60" fill="none" stroke="#5246D9" stroke-width="3"/>
<circle cx="140" cy="120" r="5" fill="#C2571B"/>
<circle cx="260" cy="120" r="5" fill="#C2571B"/>
<circle cx="380" cy="120" r="5" fill="#C2571B"/>
<text x="120" y="145" font-size="12" fill="#C2571B">x = −2</text>
<text x="245" y="145" font-size="12" fill="#C2571B">x = 1</text>
<text x="365" y="145" font-size="12" fill="#C2571B">x = 3</text>
</svg>
<div class="figcap">The graph of $y=x^3-2x^2-5x+6$ crosses the $x$-axis exactly at the three roots found above — each crossing point IS a solution of $p(x)=0$, and each corresponds to one factor.</div></div>

<div class="note"><b>Exam tip:</b> if the leading coefficient isn't $1$ (e.g. $2x^3+\ldots$), candidates to test are $\pm\dfrac{\text{factor of constant term}}{\text{factor of leading coefficient}}$ — e.g. for a divisor $(2x-1)$, test $x=\tfrac12$ directly rather than trying to guess an integer root.</p></div>
`,
quiz:[
{lvl:'basic',q:"Find the remainder when $2x^3 + 3x^2 - 4x + 1$ is divided by $(x - 2)$.",
a:"$21$",
sol:"Step 1 — remainder theorem: divisor is $(x-2)$ so $a=2$; no division is needed, just substitute. Step 2: $$p(2) = 2(2)^3+3(2)^2-4(2)+1 = 16+12-8+1 = 21$$"},
{lvl:'basic',q:"Is $(x-1)$ a factor of $x^3+2x^2-3x$?",
a:"Yes",
sol:"Step 1 — factor theorem: test $a=1$. Step 2: $p(1) = 1+2-3 = 0$. Step 3 — since $p(1)=0$, $(x-1)$ IS a factor (indeed $p(x)=x(x-1)(x+3)$)."},
{lvl:'inter',q:"Show that $(x-3)$ is a factor of $x^3-2x^2-5x+6$ and factorise completely.",
a:"$(x-3)(x-1)(x+2)$",
sol:"Step 1 — test $a=3$: $p(3)=27-18-15+6=0$, so $(x-3)$ is confirmed a factor. Step 2 — divide it out: $x^3-2x^2-5x+6 = (x-3)(x^2+x-2)$. Step 3 — factorise the remaining quadratic: $x^2+x-2=(x+2)(x-1)$. Step 4 — combine: $$(x-3)(x+2)(x-1)$$"},
{lvl:'inter',q:"Solve $x^3-7x+6=0$.",
a:"$x=1,\\,2,\\,-3$",
sol:"Step 1 — trial-test divisors of the constant $6$: try $x=1$: $p(1)=1-7+6=0$ ✓ so $(x-1)$ is a factor. Step 2 — divide: $x^3-7x+6=(x-1)(x^2+x-6)$. Step 3 — factorise the quadratic: $x^2+x-6=(x+3)(x-2)$. Step 4 — a product is zero only when a factor is zero: $x=1,\\,-3,\\,2$."},
{lvl:'inter',q:"When $4x^3+kx+1$ is divided by $(2x-1)$, the remainder is $2$. Find $k$.",
a:"$k=1$",
sol:"Step 1 — the divisor $(2x-1)=0$ when $x=\\tfrac12$, so substitute $x=\\tfrac12$ (this generalised remainder theorem still applies). Step 2: $$4\\left(\\tfrac12\\right)^3+k\\left(\\tfrac12\\right)+1 = 2$$ Step 3 — simplify: $4 \\times \\tfrac18 + \\tfrac{k}{2} + 1 = 2 \\Rightarrow \\tfrac12+\\tfrac{k}{2}+1=2$. Step 4 — solve: $\\tfrac{k}{2} = 2 - 1.5 = 0.5 \\Rightarrow k=1$."},
{lvl:'adv',q:"$p(x)=x^3+ax^2+bx-6$. Given $(x-1)$ is a factor and the remainder on dividing by $(x-2)$ is $4$, find $a$ and $b$.",
a:"$a=-4,\\,b=9$",
sol:"Step 1 — translate 'factor' into an equation: $p(1)=0 \\Rightarrow 1+a+b-6=0 \\Rightarrow a+b=5$. Step 2 — translate 'remainder is 4': $p(2)=4 \\Rightarrow 8+4a+2b-6=4 \\Rightarrow 4a+2b=2 \\Rightarrow 2a+b=1$. Step 3 — now solve simultaneously: subtract the first equation from the second: $(2a+b)-(a+b)=1-5 \\Rightarrow a=-4$. Step 4 — back-substitute: $-4+b=5 \\Rightarrow b=9$."},
{lvl:'adv',q:"$p(x)=2x^3+ax^2+bx-2$ has a factor $(x-2)$ and leaves remainder $-12$ when divided by $(x+1)$. Find $a$ and $b$, then factorise $p(x)$ completely.",
a:"$a=-5,\\,b=3$; $p(x)=(x-2)(2x^2-x+1)$",
sol:"Step 1 — factor condition: $p(2)=0$: $16+4a+2b-2=0 \\Rightarrow 4a+2b=-14 \\Rightarrow 2a+b=-7$. Step 2 — remainder condition: $p(-1)=-12$: $-2+a-b-2=-12 \\Rightarrow a-b=-8$. Step 3 — add the two equations: $(2a+b)+(a-b)=-7+(-8) \\Rightarrow 3a=-15 \\Rightarrow a=-5$, so $b=3$. Step 4 — write $p(x)=2x^3-5x^2+3x-2$ and divide by $(x-2)$: $p(x)=(x-2)(2x^2-x+1)$. Step 5 — check whether the quadratic factorises further: $D=(-1)^2-4(2)(1)=1-8=-7<0$, so it doesn't. Final answer: $(x-2)(2x^2-x+1)$."}
]};


// ============================================================ ADD MATH CH 4: EQUATIONS, INEQUALITIES & MODULUS
ADDMATH[3] = {
title:"Equations, Inequalities & Modulus Graphs",
syl:"0606 §4 — Equations, inequalities and graphs",
yt:["absolute value equations explained from zero","modulus inequalities IGCSE step by step","solving modulus graphically","modulus function graph transformation"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>A bottled drinks factory in Shah Alam labels every bottle "500 ml". Quality control can't hit exactly 500.000 ml every time — machines have tiny variation. The rule is: a bottle passes if its actual volume $V$ is within $5$ ml of the target, in <em>either</em> direction. Mathematically:</p>
$$|V - 500| \le 5$$
<p>This single symbol $|{\cdot}|$ — <b>modulus</b>, or absolute value — captures "distance from target, direction doesn't matter." It shows up everywhere tolerances matter: exam mark boundaries, GPS accuracy, engineering fits. This chapter is about solving equations and inequalities that contain it.</p></div>

<h2>1. What does $|x|$ actually mean?</h2>
<p>$|x|$ is the <b>distance of $x$ from zero</b> on the number line — always non-negative, since distance can't be negative:</p>
$$|5| = 5 \qquad |-5| = 5 \qquad |0| = 0$$
<div class="fig">
<svg viewBox="0 0 520 110" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="60" x2="490" y2="60" stroke="#888" stroke-width="1.5"/>
<line x1="260" y1="45" x2="260" y2="75" stroke="#1A2030" stroke-width="2"/>
<text x="253" y="95" font-size="13" fill="#1A2030">0</text>
<line x1="140" y1="45" x2="140" y2="75" stroke="#C2571B" stroke-width="2"/>
<text x="128" y="95" font-size="13" fill="#C2571B">−5</text>
<line x1="380" y1="45" x2="380" y2="75" stroke="#C2571B" stroke-width="2"/>
<text x="373" y="95" font-size="13" fill="#C2571B">5</text>
<path d="M 260 30 Q 200 10 140 30" fill="none" stroke="#5246D9" stroke-width="2" marker-end="url(#a4)"/>
<path d="M 260 30 Q 320 10 380 30" fill="none" stroke="#5246D9" stroke-width="2" marker-end="url(#a4)"/>
<text x="175" y="15" font-size="11.5" fill="#5246D9">distance 5</text>
<text x="300" y="15" font-size="11.5" fill="#5246D9">distance 5</text>
<defs><marker id="a4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5246D9"/></marker></defs>
</svg>
<div class="figcap">Both $-5$ and $5$ are exactly $5$ units from zero — that's why $|{-5}|=|5|=5$. Two different numbers, same modulus.</div></div>
<p>Formally: $|x| = x$ if $x \ge 0$, and $|x| = -x$ if $x < 0$ (the minus sign flips a negative number positive). This "two cases" idea is the key to every technique in this chapter.</p>

<h2>2. Solving modulus equations — the two-case method</h2>
<div class="formula">If $|A| = k$ (where $k \ge 0$), then $A = k$ <b>or</b> $A = -k$.</div>
<div class="example"><div class="exhead">Worked example 1</div>
<p>Solve $|3x-2| = 7$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Split into two cases</span> — the inside can equal $+7$ or $-7$:<br>Case A: $3x-2=7$. Case B: $3x-2=-7$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Solve Case A.</span><br>$3x = 9 \Rightarrow x = 3$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Solve Case B.</span><br>$3x = -5 \Rightarrow x = -\tfrac53$.</span></div>
</div>
$$x = 3 \quad\text{or}\quad x = -\tfrac53$$
<p><b>Always check:</b> $|3(3)-2|=|7|=7$ ✓, $|3(-\tfrac53)-2|=|-5-2|=|-7|=7$ ✓.</p></div>

<div class="example"><div class="exhead">Worked example 2 — modulus on BOTH sides: square instead</div>
<p>Solve $|x-1| = |2x+3|$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Why squaring works here:</span> if $|A|=|B|$ then $A^2=B^2$ (squaring removes the modulus cleanly on both sides at once — faster than four sign-cases).</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Square both sides:</span> $(x-1)^2 = (2x+3)^2$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Expand both:</span> $x^2-2x+1 = 4x^2+12x+9$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Collect to one side:</span> $0 = 3x^2+14x+8$, i.e. $3x^2+14x+8=0$</span></div>
<div class="st"><span class="n">5</span><span><span class="stlabel">Factorise:</span> $(3x+2)(x+4)=0 \Rightarrow x=-\tfrac23 \text{ or } x=-4$</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> squaring is only safe when BOTH sides are modulus expressions (both automatically $\ge 0$). If only one side has modulus and the other is a plain expression like $2x-1$, you must use the two-case method AND remember the plain side must be $\ge 0$ for the case to be valid (see next section).</div>

<h2>3. Modulus inequalities — greater than vs. less than</h2>
<p>These split into two totally different shapes, and mixing them up is the #1 cause of lost marks in this topic:</p>
<div class="formula">
$|A| < k$ (where $k>0$) means $A$ is <b>between</b> $-k$ and $k$: $$-k < A < k$$
$|A| > k$ means $A$ is <b>outside</b> that range: $$A < -k \quad\text{or}\quad A > k$$
</div>
<div class="example"><div class="exhead">Worked example 3</div>
<p>Solve $|x+2| < 2x-1$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Check the right side can be positive first.</span><br>For $|x+2|$ (which is $\ge 0$) to be less than $2x-1$, we need $2x-1>0$, i.e. $x>\tfrac12$. Keep this condition — check it at the end.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Apply the "between" rule:</span> $$-(2x-1) < x+2 < 2x-1$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Solve the right inequality</span> ($x+2 < 2x-1$): $$3 < x \;\Rightarrow\; x>3$$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Solve the left inequality</span> ($-2x+1 < x+2$): $$-1 < 3x \;\Rightarrow\; x > -\tfrac13$$</span></div>
<div class="st"><span class="n">5</span><span><span class="stlabel">Combine everything</span> — need ALL three conditions true ($x>\tfrac12$, $x>3$, $x>-\tfrac13$). The strictest wins: $$x>3$$</span></div>
</div>
<p><b>Check</b> $x=4$: $|6|=6 < 2(4)-1=7$ ✓.</p></div>

<h2>4. Graphical view — where two graphs meet</h2>
<div class="fig">
<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="190" x2="500" y2="190" stroke="#888"/>
<line x1="260" y1="20" x2="260" y2="200" stroke="#888"/>
<path d="M 40 40 L 260 190 L 480 40" fill="none" stroke="#5246D9" stroke-width="3"/>
<line x1="60" y1="170" x2="480" y2="60" stroke="#C2571B" stroke-width="2.5"/>
<circle cx="200" cy="128" r="5" fill="#1D7A4F"/>
<circle cx="335" cy="97" r="5" fill="#1D7A4F"/>
<text x="130" y="35" font-size="12" fill="#5246D9">y = |2x − 6|</text>
<text x="370" y="55" font-size="12" fill="#C2571B">y = x</text>
<text x="165" y="145" font-size="11.5" fill="#1D7A4F">x = 2</text>
<text x="345" y="115" font-size="11.5" fill="#1D7A4F">x = 6</text>
</svg>
<div class="figcap">Solving $|2x-6|=x$ graphically: wherever the V-shape and the line cross IS a solution. Two crossings here → two solutions, matching the algebra.</div></div>
<p>The V-shape of $y=|f(x)|$ (built by reflecting the below-axis part of $y=f(x)$ upward, as you saw in Chapter 1) means a straight line can cross it 0, 1, or 2 times — matching 0, 1, or 2 algebraic solutions. Sketching first tells you how many answers to expect, so you can spot an arithmetic slip if you get the wrong count.</p>

<h2>5. When the inside is quadratic — solutions can double</h2>
<p>If the expression inside the modulus is itself quadratic, each of the two cases becomes its own quadratic equation, potentially giving up to <b>four</b> solutions total.</p>
<div class="mistake"><b>Common mistake:</b> stopping after solving only Case A when the inside is quadratic. Always solve BOTH cases fully, then double-check every root by substituting back — with quadratics inside, some roots often need to be rejected only in inequality problems, not equation problems.</div>
`,
quiz:[
{lvl:'basic',q:"Solve $|x-4|=6$.",
a:"$x=10$ or $x=-2$",
sol:"Step 1 — split into two cases: $x-4=6$ or $x-4=-6$. Step 2 — solve each: $x=10$, or $x=-2$. Step 3 — check: $|10-4|=6$ ✓, $|-2-4|=|-6|=6$ ✓."},
{lvl:'basic',q:"Solve $|3x-2|=7$.",
a:"$x=3$ or $x=-\\tfrac53$",
sol:"Step 1 — two cases: $3x-2=7$ or $3x-2=-7$. Step 2 — Case A: $3x=9 \\Rightarrow x=3$. Step 3 — Case B: $3x=-5 \\Rightarrow x=-\\tfrac53$. Step 4 — check both back in the original: both give modulus $7$ ✓."},
{lvl:'inter',q:"Solve $|x^2-5|=4$.",
a:"$x=\\pm3,\\;\\pm1$",
sol:"Step 1 — two cases since the inside is quadratic: $x^2-5=4$ or $x^2-5=-4$. Step 2 — Case A: $x^2=9 \\Rightarrow x=\\pm3$. Step 3 — Case B: $x^2=1 \\Rightarrow x=\\pm1$. Step 4 — four solutions total; this is expected because the inside is quadratic (potentially two roots per case)."},
{lvl:'inter',q:"State the vertex of $y=|2x-6|$ and solve $|2x-6|=x$.",
a:"Vertex $(3,0)$; $x=2$ or $x=6$",
sol:"Step 1 — the vertex of $y=|f(x)|$ is where the inside equals zero: $2x-6=0 \\Rightarrow x=3$, giving vertex $(3,0)$. Step 2 — solve on the right arm ($x\\geq3$, inside $\\geq 0$ so modulus does nothing): $2x-6=x \\Rightarrow x=6$; check $6\\geq3$ ✓. Step 3 — solve on the left arm ($x<3$, inside negative so modulus flips the sign): $-(2x-6)=x \\Rightarrow -2x+6=x \\Rightarrow 6=3x \\Rightarrow x=2$; check $2<3$ ✓. Both roots valid on their own arm."},
{lvl:'inter',q:"Solve $|x+2| < 2x-1$.",
a:"$x>3$",
sol:"Step 1 — the right side must be positive for this to be possible: $2x-1>0 \\Rightarrow x>\\tfrac12$ (keep as a condition to check at the end). Step 2 — apply the 'between' rule: $-(2x-1) < x+2 < 2x-1$. Step 3 — right part: $x+2<2x-1 \\Rightarrow x>3$. Step 4 — left part: $-2x+1<x+2 \\Rightarrow x>-\\tfrac13$ (always true once $x>3$). Step 5 — combine all conditions: the strictest is $x>3$."},
{lvl:'adv',q:"Solve the inequality $|x-1| \\geq |2x+3|$.",
a:"$-4 \\leq x \\leq -\\tfrac23$",
sol:"Step 1 — both sides are modulus expressions (both $\\geq 0$), so squaring is safe and removes both moduli at once: $(x-1)^2 \\geq (2x+3)^2$. Step 2 — expand: $x^2-2x+1 \\geq 4x^2+12x+9$. Step 3 — collect to one side: $0 \\geq 3x^2+14x+8$, i.e. $3x^2+14x+8 \\leq 0$. Step 4 — factorise: $(3x+2)(x+4) \\leq 0$. Step 5 — sketch a ∪ parabola with roots $x=-\\tfrac23$ and $x=-4$; we want $\\leq 0$, which is the dip BETWEEN the roots: $$-4 \\leq x \\leq -\\tfrac23$$"},
{lvl:'adv',q:"Solve $|x^2-4x|=3$.",
a:"$x=1,\\,3,\\,2\\pm\\sqrt7$",
sol:"Step 1 — two cases since the inside is quadratic. Case A: $x^2-4x=3 \\Rightarrow x^2-4x-3=0$. Step 2 — solve Case A with the quadratic formula ($a=1,b=-4,c=-3$): $$x=\\frac{4\\pm\\sqrt{16+12}}{2}=\\frac{4\\pm\\sqrt{28}}{2}=2\\pm\\sqrt7$$ Step 3 — Case B: $x^2-4x=-3 \\Rightarrow x^2-4x+3=0$. Step 4 — factorise Case B: $(x-1)(x-3)=0 \\Rightarrow x=1,\\,3$. Step 5 — combine all four roots from both cases: $x=1,\\,3,\\,2\\pm\\sqrt7$ — a quadratic inside a modulus can indeed produce up to four solutions."}
]};


// ============================================================ ADD MATH CH 5: SIMULTANEOUS EQUATIONS
ADDMATH[4] = {
title:"Simultaneous Equations",
syl:"0606 §5 — Simultaneous equations",
yt:["simultaneous equations linear quadratic explained","substitution method simultaneous equations","tangent line simultaneous equations discriminant","sum and product simultaneous equations"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>A zip-line at a Genting adventure park follows a straight cable, height $y = -0.5x + 12$ (metres, where $x$ is horizontal distance). A safety net below is shaped like a shallow parabola, $y = 0.02x^2 - 8$. Where does the cable pass exactly at net height? You need a value of $x$ that satisfies <b>both</b> equations <b>at the same time</b> — that's what "solve simultaneously" means: find the point(s) shared by two graphs.</p></div>

<h2>1. What does "solve simultaneously" mean?</h2>
<p>Each equation on its own describes a whole graph — infinitely many $(x,y)$ pairs. Solving two equations <b>simultaneously</b> means finding the specific point(s) that lie on <em>both</em> graphs — i.e. where they intersect.</p>
<div class="fig">
<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="190" x2="500" y2="190" stroke="#888"/>
<line x1="260" y1="20" x2="260" y2="200" stroke="#888"/>
<line x1="60" y1="60" x2="480" y2="170" stroke="#C2571B" stroke-width="2.5"/>
<path d="M 60 175 Q 260 15 460 175" fill="none" stroke="#5246D9" stroke-width="3"/>
<circle cx="165" cy="100" r="5.5" fill="#1D7A4F"/>
<circle cx="365" cy="147" r="5.5" fill="#1D7A4F"/>
<text x="70" y="50" font-size="12" fill="#C2571B">line: cable</text>
<text x="330" y="35" font-size="12" fill="#5246D9">curve: safety net</text>
<text x="130" y="90" font-size="11.5" fill="#1D7A4F">intersection 1</text>
<text x="330" y="137" font-size="11.5" fill="#1D7A4F">intersection 2</text>
</svg>
<div class="figcap">The two intersection points are the only $(x,y)$ pairs that satisfy BOTH the line equation and the curve equation simultaneously.</div></div>

<h2>2. The substitution method — the only method you need</h2>
<div class="formula">Rearrange the LINEAR equation to make one letter the subject, then substitute that expression into the other equation. This turns two equations into one, in one unknown.</div>
<div class="example"><div class="exhead">Worked example 1 — line meets curve</div>
<p>Solve simultaneously: $y = 2x-3$ and $y = x^2-3x+1$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Both are already "$y=\ldots$"</span> — substitute the linear expression for $y$ directly into the quadratic equation: $$x^2-3x+1 = 2x-3$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Collect everything to one side</span> to get a standard quadratic: $$x^2-5x+4=0$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Factorise and solve for $x$:</span> $(x-1)(x-4)=0 \Rightarrow x=1 \text{ or } x=4$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Back-substitute EACH $x$ into the LINEAR equation</span> (always the simpler one) to find the matching $y$: $$x=1: \; y=2(1)-3=-1 \qquad x=4: \; y=2(4)-3=5$$</span></div>
</div>
$$(x,y) = (1,-1) \quad\text{and}\quad (4,5)$$
<p><b>Why the linear equation for back-substitution?</b> Either equation technically works, but the linear one avoids an unnecessary $\pm$ square-root step — always take the easy road once $x$ is known.</p></div>
<div class="mistake"><b>Common mistake:</b> finding both values of $x$ but forgetting to pair each one with its own $y$ — always report solutions as matched pairs $(x,y)$, never mix an $x$ from one solution with a $y$ from the other.</div>

<h2>3. How many intersection points? Back to the discriminant</h2>
<p>After substitution you always land on a quadratic — and Chapter 2's discriminant tells you the intersection count before you even solve fully:</p>
<div class="formula">$D>0$: line crosses curve at <b>2</b> distinct points &nbsp;•&nbsp; $D=0$: line is a <b>tangent</b> (touches once) &nbsp;•&nbsp; $D<0$: line and curve <b>never meet</b></div>
<div class="example"><div class="exhead">Worked example 2 — the tangent question</div>
<p>Find $k$ such that $y=3x+k$ meets $y=x^2-x+2$ at exactly one point.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Substitute and collect:</span> $$x^2-x+2 = 3x+k \;\Rightarrow\; x^2-4x+(2-k)=0$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Translate "exactly one point" into algebra:</span> a repeated root, so $D=0$. Here $a=1,\,b=-4,\,c=2-k$: $$(-4)^2-4(1)(2-k)=0$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Solve for $k$:</span> $16-8+4k=0 \Rightarrow 4k=-8 \Rightarrow k=-2$</span></div>
</div></div>

<h2>4. Sum-and-product systems</h2>
<div class="scenario"><div class="schead">Another scenario</div>
<p>A rectangular durian orchard near Raub has a perimeter of $10$ m (in some fenced unit plot) — meaning length + width $=5$ — and must enclose an area of exactly $6$ m². Find the possible dimensions.</p></div>
<p>Let length $=x$, width $=y$. Then $x+y=5$ and $xy=6$ — same substitution idea, just dressed differently.</p>
<div class="example"><div class="exhead">Worked example 3</div>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Make $y$ the subject of the linear equation:</span> $y=5-x$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Substitute into the product equation:</span> $$x(5-x)=6 \;\Rightarrow\; 5x-x^2=6 \;\Rightarrow\; x^2-5x+6=0$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Factorise:</span> $(x-2)(x-3)=0 \Rightarrow x=2 \text{ or } x=3$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Pair with $y$:</span> $x=2 \Rightarrow y=3$; and $x=3 \Rightarrow y=2$.</span></div>
</div>
<p>Dimensions are $2\text{ m} \times 3\text{ m}$ either way round — makes sense, since swapping length and width doesn't change the rectangle.</p></div>

<div class="fig">
<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
<rect x="80" y="40" width="240" height="100" fill="#EEECFC" stroke="#5246D9" stroke-width="2.5"/>
<text x="180" y="30" font-size="13" fill="#1A2030">x (length)</text>
<text x="10" y="95" font-size="13" fill="#1A2030" transform="rotate(-90 20 95)">y (width)</text>
<text x="150" y="95" font-size="13" fill="#5246D9" font-weight="bold">Area = xy = 6</text>
<text x="120" y="160" font-size="12.5" fill="#C2571B">Perimeter condition: x + y = 5</text>
</svg>
<div class="figcap">One linear condition (perimeter/sum), one product condition (area) — always substitute the LINEAR one into the product one.</div></div>

<h2>5. Systems with $x^2$ and a mixed $xy$ term</h2>
<p>The exact same substitution strategy handles messier-looking systems like $2x+y=7$ and $x^2-xy=6$ — isolate $y$ from the linear equation, substitute everywhere $y$ appears (even inside a product term), then simplify.</p>
`,
quiz:[
{lvl:'basic',q:"Solve $y=x+2$ and $y=3x-4$.",
a:"$x=3,\\,y=5$",
sol:"Step 1 — both equal $y$, so equate the right-hand sides: $x+2=3x-4$. Step 2 — collect: $6=2x \\Rightarrow x=3$. Step 3 — back-substitute: $y=3+2=5$."},
{lvl:'inter',q:"Solve simultaneously: $y=2x-3$ and $y=x^2-3x+1$.",
a:"$(1,-1)$ and $(4,5)$",
sol:"Step 1 — substitute the linear expression for $y$: $x^2-3x+1=2x-3$. Step 2 — collect to one side: $x^2-5x+4=0$. Step 3 — factorise: $(x-1)(x-4)=0 \\Rightarrow x=1$ or $x=4$. Step 4 — back-substitute each into the LINEAR equation: $x=1 \\Rightarrow y=2(1)-3=-1$; $x=4 \\Rightarrow y=2(4)-3=5$. Solutions: $(1,-1)$ and $(4,5)$."},
{lvl:'inter',q:"Solve $x+y=5$ and $xy=6$.",
a:"$(2,3)$ and $(3,2)$",
sol:"Step 1 — make $y$ the subject: $y=5-x$. Step 2 — substitute into the product: $x(5-x)=6 \\Rightarrow x^2-5x+6=0$. Step 3 — factorise: $(x-2)(x-3)=0 \\Rightarrow x=2$ or $x=3$. Step 4 — pair each with $y=5-x$: $x=2 \\Rightarrow y=3$; $x=3 \\Rightarrow y=2$."},
{lvl:'inter',q:"Solve $2x+y=7$ and $x^2-xy=6$.",
a:"$\\left(-\\tfrac23,\\tfrac{25}{3}\\right)$ and $(3,1)$",
sol:"Step 1 — isolate $y$ from the linear equation: $y=7-2x$. Step 2 — substitute into the second equation, including inside the product term: $$x^2-x(7-2x)=6 \\Rightarrow x^2-7x+2x^2=6 \\Rightarrow 3x^2-7x-6=0$$ Step 3 — factorise: $(3x+2)(x-3)=0 \\Rightarrow x=-\\tfrac23$ or $x=3$. Step 4 — back-substitute into the LINEAR equation $y=7-2x$: $x=-\\tfrac23 \\Rightarrow y=7+\\tfrac43=\\tfrac{25}{3}$; $x=3 \\Rightarrow y=7-6=1$."},
{lvl:'adv',q:"Show that the line $y=x+3$ is a tangent to the curve $y=x^2-3x+7$.",
a:"$D=0$ at $x=2$, tangent point $(2,5)$",
sol:"Step 1 — substitute: $x^2-3x+7=x+3$. Step 2 — collect: $x^2-4x+4=0$. Step 3 — factorise: $(x-2)^2=0$ — a REPEATED root, $x=2$ only (confirmed by $D=16-16=0$). Step 4 — a repeated root means the line touches the curve at exactly one point rather than crossing it — by definition, that is a tangent. Step 5 — find the point: $y=2+3=5$, so the tangent point is $(2,5)$."},
{lvl:'adv',q:"Find $k$ such that $y=3x+k$ meets $y=x^2-x+2$ at exactly one point.",
a:"$k=-2$",
sol:"Step 1 — substitute and collect: $x^2-x+2=3x+k \\Rightarrow x^2-4x+(2-k)=0$. Step 2 — 'exactly one point' means a repeated root, so set the discriminant to zero: with $a=1,\\,b=-4,\\,c=2-k$: $$(-4)^2-4(1)(2-k)=0$$ Step 3 — expand: $16-8+4k=0 \\Rightarrow 8+4k=0$. Step 4 — solve: $k=-2$."},
{lvl:'adv',q:"The line $x+y=k$ is a tangent to the curve $x^2+2y^2=3$. Find the possible values of $k$.",
a:"$k=\\pm\\dfrac{3\\sqrt2}{2}$",
sol:"Step 1 — isolate $y$: $y=k-x$. Step 2 — substitute into the curve equation: $$x^2+2(k-x)^2=3$$ Step 3 — expand $(k-x)^2=k^2-2kx+x^2$, so $2(k-x)^2=2k^2-4kx+2x^2$: $$x^2+2k^2-4kx+2x^2=3 \\Rightarrow 3x^2-4kx+(2k^2-3)=0$$ Step 4 — tangent condition: $D=0$ with $a=3,\\,b=-4k,\\,c=2k^2-3$: $$(-4k)^2-4(3)(2k^2-3)=0 \\Rightarrow 16k^2-24k^2+36=0 \\Rightarrow -8k^2+36=0$$ Step 5 — solve: $k^2=\\tfrac{36}{8}=4.5 \\Rightarrow k=\\pm\\sqrt{4.5}=\\pm\\dfrac{3\\sqrt2}{2}$."}
]};


// ============================================================ ADD MATH CH 6: LOGARITHMS & EXPONENTIALS
ADDMATH[5] = {
title:"Logarithmic & Exponential Functions",
syl:"0606 §6 — Logarithmic and exponential functions",
yt:["what is a logarithm explained from zero","laws of logarithms proof","solving exponential equations with logs","change of base formula explained"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>You put RM1000 into a fixed deposit account paying $4\%$ compound interest per year. After $t$ years your savings are $$A = 1000(1.04)^t$$ This is an <b>exponential function</b> — the variable $t$ is in the exponent. Two natural questions: how much after 10 years (easy — just substitute $t=10$)? And: <em>how many years until it doubles to RM2000?</em> That second question needs you to solve $2000=1000(1.04)^t$ for $t$ — and $t$ is trapped in an exponent. <b>Logarithms are the tool built to free it.</b></p></div>

<h2>1. Exponential functions — growth and decay</h2>
$$y = a^x, \qquad a > 0,\; a \neq 1$$
<div class="fig">
<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="185" x2="500" y2="185" stroke="#888"/>
<line x1="260" y1="15" x2="260" y2="195" stroke="#888"/>
<path d="M 260 180 Q 350 175 400 130 Q 450 80 480 25" fill="none" stroke="#5246D9" stroke-width="3"/>
<path d="M 260 180 Q 200 175 130 130 Q 90 90 60 30" fill="none" stroke="#C2571B" stroke-width="3"/>
<text x="340" y="60" font-size="12.5" fill="#5246D9">y = 2ˣ (a &gt; 1: growth)</text>
<text x="65" y="65" font-size="12.5" fill="#C2571B">y = (½)ˣ (0&lt;a&lt;1: decay)</text>
<text x="245" y="170" font-size="11" fill="#1A2030">(0, 1)</text>
</svg>
<div class="figcap">Every exponential $a^x$ passes through $(0,1)$ since $a^0=1$ for any $a$. If $a>1$: grows forever, approaches $0$ but never touches it as $x\to-\infty$. If $0<a<1$: decays toward $0$ instead.</div></div>
<p>Notice both curves have the $x$-axis as an <b>asymptote</b> — they get arbitrarily close to $y=0$ but never actually reach it, because $a^x$ can never equal exactly zero for any finite $x$.</p>

<h2>2. What is a logarithm? The inverse question</h2>
<p>A logarithm answers: "to what power must I raise the base to get this number?"</p>
$$\log_a y = x \quad\Longleftrightarrow\quad a^x = y$$
<p>Example: $\log_2 8 = 3$ because $2^3=8$. Read $\log_2 8$ literally as "the power of 2 that gives 8."</p>
<div class="example"><div class="exhead">Worked example 1 — converting between forms</div>
<p>Write $10^3=1000$ in log form, and $\log_2\!\left(\tfrac18\right)$ as a power statement, then evaluate it.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">$10^3=1000$ in log form:</span> the base stays the base, the exponent becomes the answer: $\log_{10}1000=3$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">$\log_2\left(\tfrac18\right)=x$ means</span> $2^x=\tfrac18=2^{-3}$, so $x=-3$.</span></div>
</div></div>
<p>Because $\log_a$ and $(\;)^a$ undo each other, $y=\log_a x$ is literally the <b>inverse function</b> of $y=a^x$ from Chapter 1 — its graph is the mirror image in the line $y=x$.</p>
<div class="fig">
<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="230" x2="380" y2="230" stroke="#888"/>
<line x1="60" y1="20" x2="60" y2="250" stroke="#888"/>
<line x1="30" y1="250" x2="380" y2="0" stroke="#aaa" stroke-dasharray="4 3"/>
<path d="M 60 210 Q 130 205 180 150 Q 230 90 260 40" fill="none" stroke="#5246D9" stroke-width="3"/>
<path d="M 210 60 Q 155 65 120 120 Q 90 180 80 220" fill="none" stroke="#C2571B" stroke-width="3"/>
<text x="230" y="40" font-size="12" fill="#5246D9">y = 2ˣ</text>
<text x="215" y="55" font-size="12" fill="#C2571B">y = log₂x</text>
<text x="290" y="20" font-size="11" fill="#999">y = x</text>
</svg>
<div class="figcap">Reflecting $y=2^x$ in the line $y=x$ gives $y=\log_2 x$ — exactly as any function reflects to give its inverse (Chapter 1).</div></div>

<h2>3. The three laws of logarithms</h2>
<p>These come directly from the index laws you already know, since a log IS an exponent in disguise:</p>
<div class="formula">
<b>Product law:</b> $$\log_a(xy) = \log_a x + \log_a y$$
<b>Quotient law:</b> $$\log_a\!\left(\frac{x}{y}\right) = \log_a x - \log_a y$$
<b>Power law:</b> $$\log_a(x^n) = n\log_a x$$
</div>
<p><b>Where the product law comes from:</b> if $\log_a x = p$ and $\log_a y = q$, then $x=a^p$ and $y=a^q$, so $xy = a^p \cdot a^q = a^{p+q}$ (index law: multiplying powers adds exponents). Taking $\log_a$ of both sides: $\log_a(xy) = p+q = \log_a x + \log_a y$. The other two laws follow the same way from the matching index laws.</p>
<div class="mistake"><b>Common mistake:</b> $\log_a(x+y) \neq \log_a x + \log_a y$. The product law needs a <em>product</em> $xy$ inside, not a sum. There is no rule for splitting up $\log_a(x+y)$ at all.</div>
<div class="example"><div class="exhead">Worked example 2</div>
<p>Given $\log_a 2=p$ and $\log_a 3=q$, express $\log_a(12a)$ in terms of $p$ and $q$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Break the number into prime factors first</span> — this is always the way in: $12a = 2^2 \times 3 \times a$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Apply the product law</span> to split the log of a product into a sum of logs: $$\log_a(12a) = \log_a(2^2) + \log_a 3 + \log_a a$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Apply the power law</span> to $\log_a(2^2)$: $= 2\log_a2$. And recall $\log_a a = 1$ (since $a^1=a$).</span></div>
</div>
$$\log_a(12a) = 2p + q + 1$$</div>

<h2>4. Solving exponential equations — take logs of both sides</h2>
<div class="example"><div class="exhead">Worked example 3 — different bases, can't equate exponents directly</div>
<p>Solve $5^{x-1}=3^x$, giving $x$ to 3 s.f.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Take $\ln$ (or $\log$) of both sides</span> — logs let us bring exponents down as multipliers: $$(x-1)\ln5 = x\ln3$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Expand the left side:</span> $x\ln5-\ln5=x\ln3$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Collect all $x$-terms on one side:</span> $x\ln5-x\ln3=\ln5 \Rightarrow x(\ln5-\ln3)=\ln5$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Divide to isolate $x$:</span> $$x=\frac{\ln5}{\ln5-\ln3}=\frac{1.609}{0.511}\approx3.15$$</span></div>
</div></div>
<p><b>Scenario solved:</b> for the RM1000 doubling to RM2000 at 4%: $1000(1.04)^t=2000 \Rightarrow 1.04^t=2 \Rightarrow t=\dfrac{\ln2}{\ln1.04}\approx17.7$ years.</p>

<h2>5. Solving log equations — combine, then exponentiate</h2>
<div class="example"><div class="exhead">Worked example 4</div>
<p>Solve $\log_2(x+3)+\log_2(x-4)=3$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Combine using the product law</span> (sum of logs, same base → log of a product): $$\log_2[(x+3)(x-4)]=3$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Undo the log by exponentiating both sides</span> with base 2: $$(x+3)(x-4)=2^3=8$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Expand and solve the quadratic:</span> $x^2-x-12=8 \Rightarrow x^2-x-20=0 \Rightarrow (x-5)(x+4)=0 \Rightarrow x=5$ or $x=-4$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Check BOTH roots in the original — this step is compulsory:</span> logs are only defined for positive arguments. At $x=-4$: $x-4=-8<0$, so $\log_2(-8)$ doesn't exist — <b>reject</b>. At $x=5$: both $x+3=8>0$ and $x-4=1>0$ ✓.</span></div>
</div>
$$x=5 \text{ only}$$</div>
<div class="mistake"><b>Common mistake:</b> skipping the domain check. Log equations routinely produce an extra "solution" from the algebra that is mathematically invalid once you remember logs need positive arguments — always substitute back into the ORIGINAL log expressions, not just the final polynomial.</div>

<h2>6. Quadratics in disguise</h2>
<p>Spotting the pattern $a^{2x} = (a^x)^2$ turns some exponential equations into ordinary quadratics via a substitution.</p>
<div class="example"><div class="exhead">Worked example 5</div>
<p>Solve $3^{2x}-10\cdot3^x+9=0$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Spot the disguise:</span> $3^{2x}=(3^x)^2$. Let $u=3^x$: $$u^2-10u+9=0$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Solve the quadratic in $u$:</span> $(u-1)(u-9)=0 \Rightarrow u=1$ or $u=9$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Convert back to $x$</span> using $u=3^x$: $3^x=1 \Rightarrow x=0$ (since $3^0=1$); $3^x=9=3^2 \Rightarrow x=2$.</span></div>
</div></div>

<h2>7. Change of base — mixing different bases</h2>
<div class="formula">$$\log_a b = \frac{\log_c b}{\log_c a}\quad\text{for any convenient base }c\text{ (often }10\text{ or }e\text{)}$$</div>
<p>Use this whenever an equation mixes logs of different bases that don't simplify nicely into each other.</p>
`,
quiz:[
{lvl:'basic',q:"Write $10^3=1000$ and $2^{-3}=\\tfrac18$ in log form.",
a:"$\\log_{10}1000=3$; $\\log_2\\left(\\tfrac18\\right)=-3$",
sol:"Step 1 — recall the definition: $a^x=y \\Leftrightarrow \\log_a y=x$ — the log IS the exponent. Step 2 — apply to $10^3=1000$: base stays $10$, exponent $3$ becomes the answer: $\\log_{10}1000=3$. Step 3 — apply to $2^{-3}=\\tfrac18$: $\\log_2\\left(\\tfrac18\\right)=-3$."},
{lvl:'basic',q:"Evaluate without a calculator: $\\log_2 32 + \\log_3\\left(\\tfrac19\\right) - \\log_5 5$.",
a:"$2$",
sol:"Step 1 — evaluate each term as 'what power gives this number': $\\log_2 32=5$ since $2^5=32$. Step 2: $\\log_3\\left(\\tfrac19\\right)=-2$ since $3^{-2}=\\tfrac19$. Step 3: $\\log_5 5=1$ since $5^1=5$. Step 4 — combine: $5+(-2)-1=2$."},
{lvl:'inter',q:"Solve $5^{x-1}=3^x$, giving $x$ to 3 s.f.",
a:"$x \\approx 3.15$",
sol:"Step 1 — take $\\ln$ of both sides to bring exponents down: $(x-1)\\ln5=x\\ln3$. Step 2 — expand: $x\\ln5-\\ln5=x\\ln3$. Step 3 — collect $x$-terms on one side: $x(\\ln5-\\ln3)=\\ln5$. Step 4 — divide: $x=\\dfrac{\\ln5}{\\ln5-\\ln3}=\\dfrac{1.609}{0.511}\\approx3.15$."},
{lvl:'inter',q:"Solve $3^{2x}-10\\cdot3^x+9=0$.",
a:"$x=0$ or $x=2$",
sol:"Step 1 — recognise $3^{2x}=(3^x)^2$ and substitute $u=3^x$: $u^2-10u+9=0$. Step 2 — factorise: $(u-1)(u-9)=0 \\Rightarrow u=1$ or $u=9$. Step 3 — convert back: $3^x=1 \\Rightarrow x=0$; $3^x=9=3^2 \\Rightarrow x=2$."},
{lvl:'inter',q:"Given $\\log_a2=p$ and $\\log_a3=q$, express $\\log_a(12a)$ in terms of $p$ and $q$.",
a:"$2p+q+1$",
sol:"Step 1 — factorise the number inside: $12a=2^2\\times3\\times a$. Step 2 — apply the product law to split into a sum: $\\log_a(12a)=\\log_a(2^2)+\\log_a3+\\log_a a$. Step 3 — apply the power law to the first term: $\\log_a(2^2)=2\\log_a2=2p$. Step 4 — recall $\\log_a a=1$ always. Step 5 — combine: $2p+q+1$."},
{lvl:'adv',q:"Solve $\\log_2(x+3)+\\log_2(x-4)=3$.",
a:"$x=5$",
sol:"Step 1 — combine using the product law: $\\log_2[(x+3)(x-4)]=3$. Step 2 — exponentiate both sides with base 2 to remove the log: $(x+3)(x-4)=2^3=8$. Step 3 — expand and solve: $x^2-x-12=8 \\Rightarrow x^2-x-20=0 \\Rightarrow (x-5)(x+4)=0 \\Rightarrow x=5$ or $x=-4$. Step 4 — domain check both roots in the ORIGINAL log expressions: at $x=-4$, $x-4=-8<0$, undefined — reject. At $x=5$, both arguments positive ✓. Final answer $x=5$ only."},
{lvl:'adv',q:"Solve $\\log_3x-\\log_9x=2$.",
a:"$x=81$",
sol:"Step 1 — the bases don't match, so use change of base to express $\\log_9x$ in base 3: $\\log_9x=\\dfrac{\\log_3x}{\\log_39}=\\dfrac{\\log_3x}{2}$ (since $9=3^2$, $\\log_39=2$). Step 2 — let $u=\\log_3x$: the equation becomes $u-\\dfrac{u}{2}=2$. Step 3 — simplify: $\\dfrac{u}{2}=2 \\Rightarrow u=4$. Step 4 — convert back: $\\log_3x=4 \\Rightarrow x=3^4=81$."}
]};


// ============================================================ ADD MATH CH 7: STRAIGHT LINE GRAPHS
ADDMATH[6] = {
title:"Straight Line Graphs",
syl:"0606 §7 — Straight line graphs",
yt:["gradient distance midpoint formula explained","perpendicular bisector explained step by step","linear law log graphs explained","shoelace formula area of triangle"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>A durian orchard owner near Bentong is fencing a plot marked by GPS corner posts $A(1,2)$, $B$, $C(7,10)$ and $D$ on a grid (units of 10 m). He needs to know: how long is each fence side, where should the gate go (exactly halfway along $AC$), are two fence lines at right angles for a square corner, and what's the total land area (for tax purposes)? Every one of those questions is answered by coordinate geometry — the algebra of points, lines and distances on a grid.</p></div>

<h2>1. The three basic formulas — all built from Pythagoras</h2>
<div class="fig">
<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="190" x2="370" y2="190" stroke="#888"/><line x1="30" y1="20" x2="30" y2="200" stroke="#888"/>
<circle cx="80" cy="150" r="5" fill="#5246D9"/><text x="55" y="175" font-size="12">A(x₁,y₁)</text>
<circle cx="300" cy="50" r="5" fill="#5246D9"/><text x="280" y="35" font-size="12">B(x₂,y₂)</text>
<line x1="80" y1="150" x2="300" y2="50" stroke="#5246D9" stroke-width="2.5"/>
<line x1="80" y1="150" x2="300" y2="150" stroke="#C2571B" stroke-dasharray="4 3"/>
<line x1="300" y1="150" x2="300" y2="50" stroke="#C2571B" stroke-dasharray="4 3"/>
<text x="170" y="168" font-size="12" fill="#C2571B">run = x₂−x₁</text>
<text x="308" y="105" font-size="12" fill="#C2571B">rise = y₂−y₁</text>
<circle cx="190" cy="100" r="4" fill="#1D7A4F"/><text x="196" y="98" font-size="11" fill="#1D7A4F">midpoint</text>
</svg>
<div class="figcap">Distance is the hypotenuse of the rise/run right triangle (Pythagoras); gradient is rise ÷ run; midpoint just averages the coordinates.</div></div>
<div class="formula">
<b>Gradient:</b> $$m = \frac{y_2-y_1}{x_2-x_1}$$
<b>Distance:</b> $$d = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$
<b>Midpoint:</b> $$\left(\frac{x_1+x_2}{2},\;\frac{y_1+y_2}{2}\right)$$
</div>
<p>Distance is literally Pythagoras' theorem applied to the horizontal and vertical gaps between two points; midpoint is just "average the $x$'s, average the $y$'s."</p>

<h2>2. Equation of a line, and the parallel/perpendicular rules</h2>
<div class="formula">
Point + gradient form: $$y - y_1 = m(x-x_1)$$
Parallel lines: <b>same gradient</b> ($m_1=m_2$). Perpendicular lines: gradients <b>multiply to $-1$</b> ($m_1m_2=-1$, i.e. $m_2=-\dfrac{1}{m_1}$).
</div>
<div class="example"><div class="exhead">Worked example 1 — perpendicular bisector (finding the gate)</div>
<p>$A(-2,1)$, $B(4,9)$. Find the equation of the perpendicular bisector of $AB$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find the midpoint</span> (the bisector must pass through here): $$\left(\frac{-2+4}{2},\frac{1+9}{2}\right)=(1,5)$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Find the gradient of $AB$:</span> $$m_{AB}=\frac{9-1}{4-(-2)}=\frac{8}{6}=\frac43$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Take the negative reciprocal</span> for the perpendicular gradient: $m=-\dfrac{3}{4}$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Build the equation</span> through the midpoint with this gradient: $$y-5=-\tfrac34(x-1)$$</span></div>
<div class="st"><span class="n">5</span><span><span class="stlabel">Clear fractions</span> by multiplying by 4: $4y-20=-3x+3 \Rightarrow 3x+4y=23$.</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> forgetting to flip AND negate for the perpendicular gradient. If $m_{AB}=\tfrac43$, the perpendicular is $-\tfrac34$ (flip the fraction upside down, THEN change the sign) — not $-\tfrac43$ and not $\tfrac34$.</div>

<h2>3. Area of a triangle from coordinates — the shoelace formula</h2>
<div class="formula">$$\text{Area}=\frac12\big|x_1y_2+x_2y_3+x_3y_1-y_1x_2-y_2x_3-y_3x_1\big|$$</div>
<div class="example"><div class="exhead">Worked example 2</div>
<p>$P(2,3)$, $Q(6,1)$, $R(4,7)$. Find the area of triangle $PQR$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Write out both diagonal sums</span> (multiply each $x$ by the NEXT point's $y$, going around):<br>Sum 1: $x_Py_Q+x_Qy_R+x_Ry_P = 2(1)+6(7)+4(3) = 2+42+12=56$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Sum 2</span> (each $y$ times the next point's $x$): $y_Px_Q+y_Qx_R+y_Rx_P = 3(6)+1(4)+7(2)=18+4+14=36$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Subtract, halve, take absolute value:</span> $$\text{Area}=\tfrac12|56-36|=\tfrac12(20)=10 \text{ units}^2$$</span></div>
</div></div>

<h2>4. Linear law — turning curves into straight lines</h2>
<div class="scenario"><div class="schead">A second scenario</div>
<p>A science-fair student measures how the extension $y$ (cm) of a spring depends on the number of marbles $x$ loaded onto it, suspecting $y=ax^n$ for some constants $a,n$. Raw $(x,y)$ data plotted directly gives a curve — curves are hard to read constants off. The trick: transform the data so it plots as a <em>straight</em> line instead.</p></div>
<div class="example"><div class="exhead">Worked example 3 — power law $y=ax^n$</div>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Take $\log$ of both sides</span> of $y=ax^n$: $$\log y = \log(ax^n) = \log a + \log(x^n) = n\log x + \log a$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Compare to $Y=mX+c$:</span> plotting $\log y$ (vertical) against $\log x$ (horizontal) gives a straight line with gradient $=n$ and vertical intercept $=\log a$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Read off from an actual line:</span> suppose the plotted line has gradient $1.5$ and intercept $0.30$. Then $n=1.5$ directly, and $\log a=0.30 \Rightarrow a=10^{0.30}\approx 2.0$.</span></div>
</div></div>
<div class="example"><div class="exhead">Worked example 4 — exponential law $y=ab^x$</div>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Take logs:</span> $\log y=\log a+\log(b^x)=x\log b+\log a$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Compare to $Y=mX+c$:</span> plot $\log y$ against $x$ (NOT $\log x$ this time!) — gradient is $\log b$, intercept is $\log a$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Numbers:</span> gradient $0.48 \Rightarrow \log b=0.48 \Rightarrow b=10^{0.48}\approx3.0$. Intercept $0.70 \Rightarrow \log a=0.70 \Rightarrow a=10^{0.70}\approx5.0$.</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> mixing up the two models. $y=ax^n$ needs $\log y$ <em>vs</em> $\log x$ (both axes logged). $y=ab^x$ needs $\log y$ <em>vs</em> plain $x$ (only the $y$-axis logged). Always check which variable sits in the exponent before deciding what to plot.</div>
<div class="fig">
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="170" x2="220" y2="170" stroke="#888"/><line x1="20" y1="20" x2="20" y2="180" stroke="#888"/>
<path d="M 20 165 Q 100 160 220 40" fill="none" stroke="#C2571B" stroke-width="3"/>
<text x="60" y="30" font-size="11.5" fill="#C2571B">raw data: y = axⁿ (curve)</text>
<line x1="280" y1="170" x2="460" y2="170" stroke="#888"/><line x1="280" y1="20" x2="280" y2="180" stroke="#888"/>
<line x1="290" y1="150" x2="450" y2="45" stroke="#5246D9" stroke-width="3"/>
<text x="300" y="35" font-size="11.5" fill="#5246D9">log y vs log x: STRAIGHT</text>
<text x="365" y="185" font-size="10.5" fill="#555">log x</text>
<text x="120" y="185" font-size="10.5" fill="#555">x</text>
</svg>
<div class="figcap">The logging transform doesn't change the underlying data — it just re-draws the SAME relationship on different axes so it becomes readable as a straight line: gradient and intercept can now be measured directly with a ruler.</div></div>
`,
quiz:[
{lvl:'basic',q:"Find the gradient and $y$-intercept of $3y=6x-9$.",
a:"$m=2$, intercept $-3$",
sol:"Step 1 — rearrange into $y=mx+c$ form by dividing every term by 3: $y=2x-3$. Step 2 — compare directly: gradient $m=2$, $y$-intercept $c=-3$."},
{lvl:'inter',q:"Line $L$ passes through $(3,-1)$ parallel to $2x+5y=7$. Find its equation.",
a:"$2x+5y=1$",
sol:"Step 1 — find the gradient of the given line by rearranging to $y=mx+c$: $5y=-2x+7 \\Rightarrow y=-\\tfrac25x+\\tfrac75$, so $m=-\\tfrac25$. Step 2 — parallel lines share gradient, so $L$ also has $m=-\\tfrac25$. Step 3 — build the equation through $(3,-1)$: $y+1=-\\tfrac25(x-3)$. Step 4 — clear fractions (×5): $5y+5=-2x+6 \\Rightarrow 2x+5y=1$."},
{lvl:'inter',q:"$A(-2,1)$, $B(4,9)$. Find the equation of the perpendicular bisector of $AB$.",
a:"$3x+4y=23$",
sol:"Step 1 — midpoint of $AB$: $\\left(\\dfrac{-2+4}{2},\\dfrac{1+9}{2}\\right)=(1,5)$. Step 2 — gradient of $AB$: $m_{AB}=\\dfrac{9-1}{4-(-2)}=\\dfrac{8}{6}=\\dfrac43$. Step 3 — perpendicular gradient (negative reciprocal): $-\\dfrac34$. Step 4 — equation through the midpoint: $y-5=-\\tfrac34(x-1)$. Step 5 — clear fractions (×4): $4y-20=-3x+3 \\Rightarrow 3x+4y=23$."},
{lvl:'inter',q:"$P(2,3)$, $Q(6,1)$, $R(4,7)$. Find the area of triangle $PQR$.",
a:"$10$ units²",
sol:"Step 1 — apply the shoelace formula. Sum 1 (each $x$ times next $y$): $2(1)+6(7)+4(3)=2+42+12=56$. Step 2 — Sum 2 (each $y$ times next $x$): $3(6)+1(4)+7(2)=18+4+14=36$. Step 3 — Area $=\\tfrac12|56-36|=\\tfrac12(20)=10$ units²."},
{lvl:'inter',q:"Data fits $y=ax^n$. Plotting $\\log y$ against $\\log x$ gives a straight line with gradient $1.5$ and intercept $0.30$. Find $a$ and $n$.",
a:"$n=1.5$, $a\\approx2.0$",
sol:"Step 1 — recall the log-transformed model: $\\log y=n\\log x+\\log a$, which matches $Y=mX+c$ with $Y=\\log y$, $X=\\log x$. Step 2 — the gradient directly IS $n$: $n=1.5$. Step 3 — the intercept IS $\\log a$: $\\log a=0.30$. Step 4 — undo the log: $a=10^{0.30}\\approx2.0$."},
{lvl:'adv',q:"Data fits $y=ab^x$. The line of $\\log y$ vs $x$ has gradient $0.48$ and intercept $0.70$. Find $a$ and $b$.",
a:"$a\\approx5.0$, $b\\approx3.0$",
sol:"Step 1 — the log-transformed model is $\\log y=(\\log b)x+\\log a$, matching $Y=mX+c$ with $Y=\\log y$, $X=x$ (note: $x$ itself, NOT $\\log x$, because the base of this model, not $x$, is what determines the shape). Step 2 — the gradient IS $\\log b$: $\\log b=0.48 \\Rightarrow b=10^{0.48}\\approx3.0$. Step 3 — the intercept IS $\\log a$: $\\log a=0.70 \\Rightarrow a=10^{0.70}\\approx5.0$."},
{lvl:'adv',q:"$ABCD$ is a rhombus with $A(1,2)$ and $C(7,10)$. $B$ lies on the line $y=x+1$. Find the coordinates where diagonal $BD$ crosses $AC$, and the equation of $BD$.",
a:"Crossing point $(4,6)$; $BD:\\;y=-\\tfrac34x+9$",
sol:"Step 1 — key rhombus fact: diagonals bisect each other AND are perpendicular. So $BD$ crosses $AC$ exactly at the midpoint of $AC$: $\\left(\\dfrac{1+7}{2},\\dfrac{2+10}{2}\\right)=(4,6)$. Step 2 — find the gradient of $AC$: $m_{AC}=\\dfrac{10-2}{7-1}=\\dfrac{8}{6}=\\dfrac43$. Step 3 — since $BD \\perp AC$, its gradient is the negative reciprocal: $-\\dfrac34$. Step 4 — build the equation of $BD$ through $(4,6)$: $y-6=-\\tfrac34(x-4) \\Rightarrow y=-\\tfrac34x+3+6=-\\tfrac34x+9$."}
]};
