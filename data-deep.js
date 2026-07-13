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
