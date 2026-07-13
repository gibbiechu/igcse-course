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


// ============================================================ ADD MATH CH 8: CIRCULAR MEASURE
ADDMATH[7] = {
title:"Circular Measure (Radians)",
syl:"0606 §8 — Circular measure",
yt:["what is a radian explained from zero","arc length and sector area radians","segment area formula derivation","circular measure IGCSE worked examples"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>Your car's windscreen wiper is $40$ cm long and sweeps through an angle each pass. To design the wiper motor, engineers need to know exactly how much windscreen area it clears (a "sector" shape) and how far the tip travels (an "arc"). Degrees make the formulas for these ugly; there's a smarter unit — the <b>radian</b> — that makes them almost embarrassingly simple.</p></div>

<h2>1. What is a radian, really?</h2>
<div class="fig">
<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="150" r="100" fill="none" stroke="#ccc" stroke-width="1.5"/>
<line x1="150" y1="150" x2="250" y2="150" stroke="#5246D9" stroke-width="2.5"/>
<line x1="150" y1="150" x2="200" y2="63" stroke="#5246D9" stroke-width="2.5"/>
<path d="M 250 150 A 100 100 0 0 0 200 63" fill="none" stroke="#C2571B" stroke-width="4"/>
<text x="200" y="150" font-size="12" fill="#5246D9">r</text>
<text x="185" y="105" font-size="12" fill="#5246D9">r</text>
<text x="235" y="105" font-size="13" fill="#C2571B" font-weight="bold">arc = r</text>
<text x="160" y="130" font-size="14" fill="#1A2030" font-weight="bold">1 rad</text>
</svg>
<div class="figcap">Definition: <b>one radian</b> is the angle at the centre when the arc cut off is exactly the same length as the radius. It's a genuinely geometric definition — no arbitrary "360" involved.</div></div>
<p>A full circle's circumference is $2\pi r$ — that's $2\pi$ "radius-lengths" of arc, so a full turn is $2\pi$ radians. Since a full turn is also $360°$:</p>
$$2\pi \text{ rad} = 360° \qquad\Longrightarrow\qquad \pi \text{ rad} = 180°$$
<div class="formula">
Degrees → radians: multiply by $\dfrac{\pi}{180}$. &nbsp; Radians → degrees: multiply by $\dfrac{180}{\pi}$.
</div>
<div class="example"><div class="exhead">Worked example 1</div>
<p>Convert $150°$ to radians (exact), and $2.4$ rad to degrees (1 d.p.).</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Degrees to radians:</span> $150 \times \dfrac{\pi}{180} = \dfrac{150\pi}{180} = \dfrac{5\pi}{6}$ (simplify the fraction first).</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Radians to degrees:</span> $2.4 \times \dfrac{180}{\pi} = \dfrac{432}{\pi} \approx 137.5°$.</span></div>
</div></div>

<h2>2. Arc length and sector area — why radians make them simple</h2>
<div class="formula">
Arc length: $$s = r\theta$$
Sector area: $$A = \tfrac12 r^2\theta$$
<b>($\theta$ MUST be in radians for these exact formulas — this is precisely why radians exist.)</b>
</div>
<p><b>Where $s=r\theta$ comes from:</b> a full turn ($\theta=2\pi$) gives arc length $s=r(2\pi)=2\pi r$ — exactly the circumference. The formula scales proportionally for any smaller angle, because arc length is directly proportional to the angle swept.</p>
<div class="example"><div class="exhead">Worked example 2</div>
<p>A sector of radius $10$ cm has arc length $14$ cm. Find $\theta$ and the sector area.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Rearrange $s=r\theta$ for $\theta$:</span> $$\theta = \frac{s}{r} = \frac{14}{10} = 1.4 \text{ rad}$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Substitute directly into the area formula</span> (no unit conversion needed — $\theta$ is already in radians): $$A = \tfrac12(10)^2(1.4) = \tfrac12(100)(1.4) = 70 \text{ cm}^2$$</span></div>
</div></div>

<h2>3. Chords, segments, and the difference between "sector" and "segment"</h2>
<div class="fig">
<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
<circle cx="120" cy="110" r="80" fill="none" stroke="#ccc"/>
<path d="M 120 110 L 120 30 A 80 80 0 0 1 190 150 Z" fill="#EEECFC" stroke="#5246D9" stroke-width="2"/>
<text x="90" y="115" font-size="12" fill="#5246D9">sector</text>
<text x="55" y="205" font-size="11.5" fill="#555">sector = pie-slice (2 straight edges + arc)</text>
<circle cx="380" cy="110" r="80" fill="none" stroke="#ccc"/>
<path d="M 380 30 A 80 80 0 0 1 450 150 Z" fill="#FBEFE6" stroke="#C2571B" stroke-width="2"/>
<line x1="380" y1="30" x2="450" y2="150" stroke="#C2571B" stroke-width="2.5"/>
<text x="395" y="115" font-size="12" fill="#C2571B">segment</text>
<text x="305" y="205" font-size="11.5" fill="#555">segment = chord cuts off (curved cap only)</text>
</svg>
<div class="figcap">A <b>sector</b> keeps the two straight radii (pie-slice). A <b>segment</b> is what's left when you slice straight across with a chord instead — it has NO straight radius edges.</div></div>
<div class="formula">
Chord length: $$c = 2r\sin\left(\frac{\theta}{2}\right)$$
Segment area = sector area $-$ triangle area: $$A_{\text{segment}} = \tfrac12r^2\theta - \tfrac12r^2\sin\theta = \tfrac12r^2(\theta-\sin\theta)$$
</div>
<p><b>Where the segment formula comes from:</b> take the pie-slice sector, then cut away the triangle formed by the two radii and the chord (area $\tfrac12r^2\sin\theta$, from the "two sides and included angle" formula) — what remains is exactly the curved-cap segment.</p>
<div class="example"><div class="exhead">Worked example 3</div>
<p>Find the area of the segment cut off by a chord subtending $1.8$ rad at the centre of a circle of radius $5$ cm.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Identify values:</span> $r=5$, $\theta=1.8$ rad.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Substitute into the segment formula</span> (calculator in radian mode!): $$A=\tfrac12(5)^2(1.8-\sin1.8) = 12.5(1.8-0.974)$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Finish the arithmetic:</span> $12.5 \times 0.826 \approx 10.3 \text{ cm}^2$</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> leaving the calculator in DEGREE mode while $\theta$ is given in radians — $\sin(1.8)$ means "sine of 1.8 radians," completely different from $\sin(1.8°)$. Always check the mode before evaluating.</div>

<h2>4. Perimeters — don't forget which edges you're adding</h2>
<p>Sector perimeter $=2r+r\theta$ (two straight radii plus the arc). Segment perimeter $=$ chord $+$ arc only (no radii — a segment has no straight radius edges, as shown above).</p>
`,
quiz:[
{lvl:'basic',q:"Find the arc length of a sector with $r=5$ cm and $\\theta=2$ rad.",
a:"$10$ cm",
sol:"Step 1 — apply $s=r\\theta$ directly since $\\theta$ is already in radians. Step 2: $s=5\\times2=10$ cm — the radian formula is a genuine one-liner, no conversion needed."},
{lvl:'basic',q:"Convert $150°$ to radians (exact) and $2.4$ rad to degrees (1 d.p.).",
a:"$\\dfrac{5\\pi}{6}$; $137.5°$",
sol:"Step 1 — degrees to radians: multiply by $\\dfrac{\\pi}{180}$: $150\\times\\dfrac{\\pi}{180}=\\dfrac{5\\pi}{6}$ after simplifying. Step 2 — radians to degrees: multiply by $\\dfrac{180}{\\pi}$: $2.4\\times\\dfrac{180}{\\pi}=\\dfrac{432}{\\pi}\\approx137.5°$."},
{lvl:'inter',q:"A sector of radius $10$ cm has arc length $14$ cm. Find $\\theta$ and the sector area.",
a:"$\\theta=1.4$ rad; area $70$ cm²",
sol:"Step 1 — rearrange $s=r\\theta$: $\\theta=\\dfrac{s}{r}=\\dfrac{14}{10}=1.4$ rad. Step 2 — substitute into $A=\\tfrac12r^2\\theta$: $A=\\tfrac12(100)(1.4)=70$ cm². Both formulas need $\\theta$ in radians, which step 1 already gives directly."},
{lvl:'inter',q:"A sector has perimeter $20$ cm and radius $6$ cm. Find its angle and area.",
a:"$\\theta=\\tfrac43$ rad; area $24$ cm²",
sol:"Step 1 — sector perimeter is two radii plus the arc: $20=2r+r\\theta=2(6)+6\\theta=12+6\\theta$. Step 2 — solve: $6\\theta=8 \\Rightarrow \\theta=\\tfrac43$ rad. Step 3 — area: $A=\\tfrac12(36)\\left(\\tfrac43\\right)=24$ cm²."},
{lvl:'inter',q:"Find the area of the segment cut off by a chord subtending $1.8$ rad at the centre of a circle of radius $5$ cm.",
a:"$10.3$ cm² (3 s.f.)",
sol:"Step 1 — use the segment formula: $A=\\tfrac12r^2(\\theta-\\sin\\theta)$. Step 2 — substitute $r=5,\\theta=1.8$ (radian mode!): $A=\\tfrac12(25)(1.8-\\sin1.8)=12.5(1.8-0.974)$. Step 3 — finish: $12.5\\times0.826\\approx10.3$ cm²."},
{lvl:'adv',q:"For $r=4$, $\\theta=\\dfrac{\\pi}{3}$, find the perimeter of the segment (chord + arc) exactly where possible.",
a:"$4+\\dfrac{4\\pi}{3}$ cm",
sol:"Step 1 — chord length: $c=2r\\sin\\left(\\dfrac{\\theta}{2}\\right)=8\\sin\\left(\\dfrac{\\pi}{6}\\right)=8\\times\\tfrac12=4$ cm (exact, since $\\sin30°=\\tfrac12$ is a known value). Step 2 — arc length: $s=r\\theta=4\\times\\dfrac{\\pi}{3}=\\dfrac{4\\pi}{3}$ cm. Step 3 — segment perimeter is chord + arc (no radii): $4+\\dfrac{4\\pi}{3}\\approx8.19$ cm."},
{lvl:'adv',q:"Two circles of radius $6$ cm intersect so that each passes through the other's centre. Find the exact area of the overlapping region.",
a:"$24\\pi-18\\sqrt3\\approx44.2$ cm²",
sol:"Step 1 — set up the geometry: centres are $6$ cm apart (since each circle passes through the other's centre) with radius also $6$ — this makes an equilateral-triangle configuration. Step 2 — find the angle subtended: half the chord triangle gives $\\cos(\\theta/2)=\\dfrac{3}{6}=\\tfrac12 \\Rightarrow \\theta/2=\\tfrac{\\pi}{3} \\Rightarrow \\theta=\\tfrac{2\\pi}{3}$ at each centre. Step 3 — the overlap region is made of TWO identical segments (one from each circle): $$A_{\\text{overlap}}=2\\times\\tfrac12r^2(\\theta-\\sin\\theta)=36\\left(\\tfrac{2\\pi}{3}-\\sin\\tfrac{2\\pi}{3}\\right)$$ Step 4 — substitute $\\sin\\tfrac{2\\pi}{3}=\\tfrac{\\sqrt3}{2}$: $$36\\left(\\tfrac{2\\pi}{3}-\\tfrac{\\sqrt3}{2}\\right)=24\\pi-18\\sqrt3\\approx44.2\\text{ cm}^2$$"}
]};


// ============================================================ ADD MATH CH 9: TRIGONOMETRY
ADDMATH[8] = {
title:"Trigonometry",
syl:"0606 §9 — Trigonometry",
yt:["trig identities explained from zero","solving trig equations all solutions","amplitude period sine graph explained","sec cosec cot explained simply"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>The tide at Port Klang rises and falls roughly following $h(t)=3\\sin(30t)+5$, where $h$ is water depth (m) and $t$ is time in hours after midnight. A cargo ship needs at least $6$ m of depth to enter the port safely. <em>At what times of day is it safe to enter?</em> Answering that means <b>solving a trig equation</b> — and reading off amplitude, period and shift straight from the formula. That's this whole chapter.</p></div>

<h2>1. The six ratios, and the three you get "for free"</h2>
<p>You already know $\\sin,\\cos,\\tan$ from IGCSE Maths. Add Math introduces their <b>reciprocals</b>:</p>
$$\\csc\\theta=\\frac{1}{\\sin\\theta} \\qquad \\sec\\theta=\\frac{1}{\\cos\\theta} \\qquad \\cot\\theta=\\frac{1}{\\tan\\theta}=\\frac{\\cos\\theta}{\\sin\\theta}$$
<p>Nothing new to memorise here beyond "flip the fraction" — $\\sec$ is just $1/\\cos$, etc.</p>

<h2>2. The CAST diagram — where each ratio is positive</h2>
<div class="fig">
<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
<line x1="130" y1="20" x2="130" y2="240" stroke="#888"/><line x1="10" y1="130" x2="250" y2="130" stroke="#888"/>
<circle cx="130" cy="130" r="100" fill="none" stroke="#ccc"/>
<text x="185" y="80" font-size="16" fill="#1D7A4F" font-weight="bold">A</text>
<text x="60" y="80" font-size="16" fill="#5246D9" font-weight="bold">S</text>
<text x="60" y="190" font-size="16" fill="#C2571B" font-weight="bold">T</text>
<text x="185" y="190" font-size="16" fill="#8A6410" font-weight="bold">C</text>
<text x="170" y="70" font-size="10" fill="#555">(all +)</text>
<text x="30" y="70" font-size="10" fill="#555">(sin +)</text>
<text x="15" y="190" font-size="10" fill="#555">(tan +)</text>
<text x="175" y="205" font-size="10" fill="#555">(cos +)</text>
</svg>
<div class="figcap">Going anticlockwise from quadrant 1: <b>A</b>ll positive, <b>S</b>in positive (others negative), <b>T</b>an positive, <b>C</b>os positive. Memory trick: "All Students Take Calculus."</div></div>
<div class="example"><div class="exhead">Worked example 1 — using CAST to find ALL solutions</div>
<p>Solve $\\cos x=0.5$ for $0°\\leq x\\leq 360°$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find the principal value</span> using $\\cos^{-1}$: $\\cos^{-1}(0.5)=60°$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Ask: where else is cos positive?</span> From CAST, cos is positive in quadrants 1 AND 4.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Quadrant 1 solution</span> is the principal value itself: $x=60°$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Quadrant 4 solution:</span> reflect across the horizontal axis: $x=360°-60°=300°$.</span></div>
</div>
$$x=60°,\\;300°$$</div>
<div class="example"><div class="exhead">Worked example 2 — negative ratio</div>
<p>Solve $\\tan x=-1$ for $0°\\leq x\\leq360°$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Principal value</span> (ignore the sign first): $\\tan^{-1}(1)=45°$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Where is tan NEGATIVE?</span> From CAST, tan is positive in quadrants 1 and 3 — so negative in quadrants 2 and 4.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Quadrant 2:</span> $180°-45°=135°$. <span class="stlabel">Quadrant 4:</span> $360°-45°=315°$.</span></div>
</div>
$$x=135°,\\;315°$$</div>

<h2>3. Trig identities — one triangle, endless consequences</h2>
<div class="formula">
$$\\sin^2\\theta+\\cos^2\\theta \\equiv 1 \\qquad \\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta}$$
Dividing the first identity by $\\cos^2\\theta$: $$\\tan^2\\theta+1 \\equiv \\sec^2\\theta$$
Dividing by $\\sin^2\\theta$ instead: $$1+\\cot^2\\theta \\equiv \\csc^2\\theta$$
</div>
<p>The very first identity is just Pythagoras' theorem applied to a right triangle inscribed in the unit circle — everything else in this box is an algebraic consequence of it.</p>
<div class="example"><div class="exhead">Worked example 3 — proving an identity</div>
<p>Prove that $(1-\\cos^2\\theta)(1+\\cot^2\\theta)\\equiv1$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Golden rule for proofs:</span> convert everything to $\\sin$ and $\\cos$ first — it almost always simplifies.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Rewrite each bracket:</span> $1-\\cos^2\\theta=\\sin^2\\theta$ (from the Pythagorean identity), and $1+\\cot^2\\theta=\\csc^2\\theta=\\dfrac{1}{\\sin^2\\theta}$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Multiply:</span> $$\\sin^2\\theta \\times \\frac{1}{\\sin^2\\theta}=1 \\;\\checkmark$$</span></div>
</div></div>

<h2>4. Solving harder trig equations — extend the interval, or substitute</h2>
<div class="mistake"><b>Common mistake — the #1 lost mark in this topic:</b> when solving $\\sin(2x)=k$, you must extend the search interval to match: if $0°\\leq x\\leq360°$ then $0°\\leq 2x\\leq720°$ — find ALL solutions for $2x$ in that doubled range FIRST, then divide everything by 2. Stopping at the first solution for $2x$ loses answers.</div>
<div class="example"><div class="exhead">Worked example 4</div>
<p>Solve $2\\sin(2x)=1$ for $0°\\leq x\\leq360°$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Isolate the trig function:</span> $\\sin(2x)=\\tfrac12$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Extend the interval for $2x$:</span> since $0°\\leq x\\leq360°$, we need $0°\\leq2x\\leq720°$ — TWO full turns.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Principal value:</span> $\\sin^{-1}(\\tfrac12)=30°$. Sin positive in quadrants 1,2 each turn: $2x=30°,\\,150°$, then add $360°$ for the second turn: $2x=390°,\\,510°$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Divide everything by 2:</span> $$x=15°,\\,75°,\\,195°,\\,255°$$</span></div>
</div></div>
<div class="example"><div class="exhead">Worked example 5 — identity turns it into a quadratic</div>
<p>Solve $\\sec^2x-3\\tan x+1=0$ for $0°\\leq x\\leq360°$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Spot the identity link:</span> $\\sec^2x=1+\\tan^2x$. Substitute: $$1+\\tan^2x-3\\tan x+1=0 \\;\\Rightarrow\\; \\tan^2x-3\\tan x+2=0$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">This is now an ordinary quadratic</span> — let $u=\\tan x$: $(u-1)(u-2)=0 \\Rightarrow u=1$ or $u=2$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Solve $\\tan x=1$:</span> principal value $45°$; tan repeats every $180°$ (period), so also $45°+180°=225°$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Solve $\\tan x=2$:</span> principal value $\\tan^{-1}2\\approx63.4°$; plus $180°$: $243.4°$.</span></div>
</div>
$$x=45°,\\;63.4°,\\;225°,\\;243.4°$$</div>

<h2>5. Graphs of trig functions — amplitude, period, shift</h2>
<div class="formula">For $y=a\\sin(bx)+c$: <b>amplitude</b> $=|a|$ (how far above/below the midline) &nbsp;•&nbsp; <b>period</b> $=\\dfrac{360°}{b}$ (or $\\dfrac{2\\pi}{b}$ in radians) &nbsp;•&nbsp; <b>vertical shift</b> $=c$ (moves the midline up/down)</div>
<div class="fig">
<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="100" x2="480" y2="100" stroke="#888"/><line x1="20" y1="20" x2="20" y2="180" stroke="#888"/>
<path d="M 20 100 Q 65 20 110 100 Q 155 180 200 100 Q 245 20 290 100 Q 335 180 380 100 Q 425 20 470 100" fill="none" stroke="#5246D9" stroke-width="3"/>
<line x1="20" y1="60" x2="480" y2="60" stroke="#C2571B" stroke-dasharray="4 3"/>
<text x="380" y="55" font-size="11.5" fill="#C2571B">max (midline + amplitude)</text>
<text x="20" y="15" font-size="11.5" fill="#555">one full period ↔</text>
</svg>
<div class="figcap">$y=a\\sin(bx)+c$: amplitude $a$ stretches vertically, $b$ squeezes the period horizontally, $c$ slides the whole wave up or down.</div></div>
<div class="example"><div class="exhead">Worked example 6</div>
<p>State the amplitude and period of $y=3\\sin(2x)-1$, and its maximum value.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Read off directly:</span> $a=3 \\Rightarrow$ amplitude $3$. $b=2 \\Rightarrow$ period $=\\dfrac{360°}{2}=180°$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Maximum:</span> $\\sin$ maxes out at $1$, so max of $y$ is $3(1)-1=2$ (and minimum is $3(-1)-1=-4$).</span></div>
</div></div>
`,
quiz:[
{lvl:'basic',q:"Solve $\\cos x=0.5$ for $0°\\leq x\\leq360°$.",
a:"$x=60°,\\,300°$",
sol:"Step 1 — principal value: $\\cos^{-1}(0.5)=60°$. Step 2 — cos is positive in quadrants 1 and 4 (CAST diagram). Step 3 — quadrant 1 IS the principal value: $60°$. Step 4 — quadrant 4: $360°-60°=300°$."},
{lvl:'basic',q:"Solve $\\tan x=-1$ for $0°\\leq x\\leq360°$.",
a:"$x=135°,\\,315°$",
sol:"Step 1 — principal value ignoring sign: $\\tan^{-1}(1)=45°$. Step 2 — tan is NEGATIVE in quadrants 2 and 4. Step 3 — quadrant 2: $180°-45°=135°$. Step 4 — quadrant 4: $360°-45°=315°$."},
{lvl:'inter',q:"Prove that $(1-\\cos^2\\theta)(1+\\cot^2\\theta)\\equiv1$.",
a:"Identity proven",
sol:"Step 1 — convert everything to sin and cos. Step 2 — $1-\\cos^2\\theta=\\sin^2\\theta$ by the Pythagorean identity. Step 3 — $1+\\cot^2\\theta=\\csc^2\\theta=\\dfrac{1}{\\sin^2\\theta}$. Step 4 — multiply: $\\sin^2\\theta\\times\\dfrac{1}{\\sin^2\\theta}=1$ ✓."},
{lvl:'inter',q:"Solve $2\\sin(2x)=1$ for $0°\\leq x\\leq360°$.",
a:"$x=15°,\\,75°,\\,195°,\\,255°$",
sol:"Step 1 — isolate: $\\sin(2x)=\\tfrac12$. Step 2 — extend the range: since $0°\\leq x\\leq360°$, we need $0°\\leq2x\\leq720°$ (two full turns). Step 3 — principal value $30°$; sin positive in quadrants 1,2: $2x=30°,150°$ in the first turn, and $2x=390°,510°$ in the second (add $360°$). Step 4 — divide everything by 2: $x=15°,75°,195°,255°$."},
{lvl:'inter',q:"State the amplitude and period of $y=3\\sin(2x)-1$, and its maximum value.",
a:"Amplitude $3$, period $180°$, max $2$",
sol:"Step 1 — amplitude is $|a|=3$. Step 2 — period is $\\dfrac{360°}{b}=\\dfrac{360°}{2}=180°$. Step 3 — maximum: sin reaches at most $1$, so $y_{max}=3(1)-1=2$ (and minimum would be $3(-1)-1=-4$)."},
{lvl:'adv',q:"Solve $\\sec^2x-3\\tan x+1=0$ for $0°\\leq x\\leq360°$.",
a:"$x=45°,\\,63.4°,\\,225°,\\,243.4°$",
sol:"Step 1 — use the identity $\\sec^2x=1+\\tan^2x$: $1+\\tan^2x-3\\tan x+1=0 \\Rightarrow \\tan^2x-3\\tan x+2=0$. Step 2 — factorise as a quadratic in $\\tan x$: $(\\tan x-1)(\\tan x-2)=0$. Step 3 — solve $\\tan x=1$: principal $45°$, plus period $180°$ gives $225°$. Step 4 — solve $\\tan x=2$: principal $\\approx63.4°$, plus $180°$ gives $243.4°$."},
{lvl:'adv',q:"Solve $3\\sin x=2\\cos^2x$ for $0\\leq x\\leq2\\pi$ (radians).",
a:"$x=\\dfrac{\\pi}{6}$ and $\\dfrac{5\\pi}{6}$",
sol:"Step 1 — use the identity $\\cos^2x=1-\\sin^2x$ to get everything in terms of $\\sin x$: $3\\sin x=2(1-\\sin^2x)=2-2\\sin^2x$. Step 2 — rearrange to standard quadratic form: $2\\sin^2x+3\\sin x-2=0$. Step 3 — factorise: $(2\\sin x-1)(\\sin x+2)=0 \\Rightarrow \\sin x=\\tfrac12$ or $\\sin x=-2$. Step 4 — reject $\\sin x=-2$: sine can never be outside $[-1,1]$, so this root is impossible. Step 5 — solve $\\sin x=\\tfrac12$: principal value $\\dfrac{\\pi}{6}$; sin positive in quadrants 1,2: $x=\\dfrac{\\pi}{6}$ and $\\pi-\\dfrac{\\pi}{6}=\\dfrac{5\\pi}{6}$."}
]};


// ============================================================ ADD MATH CH 10: PERMUTATIONS & COMBINATIONS
ADDMATH[9] = {
title:"Permutations & Combinations",
syl:"0606 §10 — Permutations and combinations",
yt:["permutations vs combinations explained simply","factorial counting principle explained","nCr nPr formula derivation","counting with restrictions IGCSE"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>Your school is picking a badminton doubles team for a tournament, choosing $2$ players from a squad of $8$. Does it matter which of the two chosen players you name first? No — "Ahmad and Wei Jie" is the same pairing as "Wei Jie and Ahmad." But if instead you were lining up all $8$ squad members for a team photo in a specific left-to-right order, then order absolutely matters — swapping two people gives a genuinely different photo. <b>This one distinction — does order matter or not — decides which formula in this whole chapter you use.</b></p></div>

<h2>1. The fundamental counting principle</h2>
<div class="formula">If one choice can be made in $m$ ways, and (independently) a second choice in $n$ ways, the two together can be made in $m\\times n$ ways.</div>
<div class="fig">
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="100" r="6" fill="#1A2030"/>
<line x1="40" y1="100" x2="140" y2="40" stroke="#5246D9" stroke-width="2"/>
<line x1="40" y1="100" x2="140" y2="100" stroke="#5246D9" stroke-width="2"/>
<line x1="40" y1="100" x2="140" y2="160" stroke="#5246D9" stroke-width="2"/>
<text x="145" y="44" font-size="11">A</text><text x="145" y="104" font-size="11">B</text><text x="145" y="164" font-size="11">C</text>
<line x1="150" y1="40" x2="250" y2="20" stroke="#C2571B" stroke-width="1.5"/>
<line x1="150" y1="40" x2="250" y2="60" stroke="#C2571B" stroke-width="1.5"/>
<line x1="150" y1="100" x2="250" y2="80" stroke="#C2571B" stroke-width="1.5"/>
<line x1="150" y1="100" x2="250" y2="120" stroke="#C2571B" stroke-width="1.5"/>
<line x1="150" y1="160" x2="250" y2="140" stroke="#C2571B" stroke-width="1.5"/>
<line x1="150" y1="160" x2="250" y2="180" stroke="#C2571B" stroke-width="1.5"/>
<text x="255" y="100" font-size="12" fill="#1D7A4F" font-weight="bold">3 × 2 = 6 total paths</text>
</svg>
<div class="figcap">A tree diagram makes the multiplication principle visible: 3 branches, each splitting into 2, gives $3\\times2=6$ end-to-end routes.</div></div>

<h2>2. Permutations — order matters</h2>
<p>The number of ways to arrange ALL $n$ distinct items in a row is $n!$ ("$n$ factorial"): $n$ choices for the first slot, $n-1$ left for the second, and so on down to $1$:</p>
$$n! = n\\times(n-1)\\times(n-2)\\times\\cdots\\times2\\times1$$
<p>If you only want to arrange $r$ out of $n$ items (not all of them), the same logic gives $n$ choices, then $n-1$, stopping after $r$ factors:</p>
$$^nP_r = \\frac{n!}{(n-r)!}$$
<div class="example"><div class="exhead">Worked example 1</div>
<p>How many arrangements of the letters of the word ORANGE are there? How many begin with a vowel?</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">All 6 letters are distinct</span> — arranging all of them: $6! = 720$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Restriction — vowel first.</span> Vowels available: O, A, E — 3 choices for slot 1.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Fill the rest freely:</span> the remaining $5$ letters can go in the remaining $5$ slots in $5!=120$ ways.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Multiply</span> (fundamental counting principle): $3\\times120=360$.</span></div>
</div></div>

<h2>3. Combinations — order does NOT matter</h2>
<p>Since every group of $r$ items can be internally reordered $r!$ different ways (all counted separately in $^nP_r$), divide that overcounting out:</p>
$$^nC_r = \\frac{^nP_r}{r!} = \\frac{n!}{r!\\,(n-r)!}$$
<div class="example"><div class="exhead">Worked example 2</div>
<p>Evaluate $^5P_2$ and $^5C_2$, and explain why they differ.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">$^5P_2$:</span> $5\\times4=20$ — ordered pairs, e.g. (A,B) and (B,A) count separately.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">$^5C_2$:</span> $\\dfrac{20}{2!}=10$ — unordered pairs; (A,B) and (B,A) are now the same pair, so we divide by the $2!=2$ ways to order each pair.</span></div>
</div></div>
<div class="example"><div class="exhead">Worked example 3 — the badminton team</div>
<p>A team of 5 is chosen from 6 boys and 5 girls. How many teams contain exactly 3 boys?</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">This is a combination</span> — a "team" has no internal order, so use $^nC_r$, not $^nP_r$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Choose the boys:</span> $^6C_3=\\dfrac{6!}{3!3!}=20$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Choose the girls</span> (to make 5 total, need $5-3=2$ girls): $^5C_2=10$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Multiply</span> — the two choices are independent: $20\\times10=200$.</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> using $^nP_r$ when the problem describes a "group," "team," "committee" or "selection" (order irrelevant), or using $^nC_r$ when it says "arrange," "line up," or "in a row" (order relevant). Read the question for these keywords before picking a formula.</div>

<h2>4. Restrictions — "together" and "not together"</h2>
<div class="example"><div class="exhead">Worked example 4</div>
<p>In how many ways can 7 people sit in a row if two particular people must NOT sit together?</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Total unrestricted arrangements:</span> $7!=5040$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Count the OPPOSITE ("together") instead — it's easier:</span> glue the two people into one "block." Now you're arranging $6$ objects (the block + 5 others): $6!$ ways. But the two people inside the block can swap order: $\\times2!$. Total together: $6!\\times2!=1440$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Subtract</span> (complement counting): $$\\text{not together} = \\text{total} - \\text{together} = 5040-1440=3600$$</span></div>
</div></div>
<div class="note"><b>Exam tip:</b> whenever a question says "at least," "at most," or "not," it's almost always faster to count the OPPOSITE case and subtract from the total, rather than adding up several separate cases directly.</div>

<h2>5. Repeated items — divide out the identical swaps</h2>
<p>If some items are identical, arrangements that only swap identical items aren't genuinely different — divide by the factorial of each repeat count.</p>
<div class="example"><div class="exhead">Worked example 5</div>
<p>How many arrangements of the letters of DIGITS are there? How many have the two I's separated?</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">6 letters, with I repeated twice:</span> $$\\frac{6!}{2!}=\\frac{720}{2}=360$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Count "I's together" first</span> (complement trick again): glue the two I's into one block. Now arranging $5$ objects (block + 4 others): $5!=120$ — and crucially, NO extra $\\times2!$ here, because the two I's are identical, swapping them inside the block makes no visible difference.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Subtract:</span> $$\\text{separated} = 360-120=240$$</span></div>
</div></div>
`,
quiz:[
{lvl:'basic',q:"Evaluate $^5P_2$ and $^5C_2$.",
a:"$20$ and $10$",
sol:"Step 1 — $^5P_2=5\\times4=20$ (order matters, e.g. AB and BA count separately). Step 2 — $^5C_2=\\dfrac{20}{2!}=10$ (order doesn't matter, so we divide by the $2!$ ways each pair could be internally ordered)."},
{lvl:'inter',q:"How many arrangements of the letters of the word ORANGE are there? How many begin with a vowel?",
a:"$720$; $360$",
sol:"Step 1 — 6 distinct letters, arrange all: $6!=720$. Step 2 — vowels available (O, A, E): 3 choices for the first slot. Step 3 — remaining 5 letters fill the remaining 5 slots: $5!=120$ ways. Step 4 — multiply (independent choices): $3\\times120=360$."},
{lvl:'inter',q:"A team of 5 is chosen from 6 boys and 5 girls. How many teams contain exactly 3 boys?",
a:"$200$",
sol:"Step 1 — 'team' means order doesn't matter, so use combinations. Step 2 — choose 3 boys from 6: $^6C_3=20$. Step 3 — choose the remaining 2 spots from 5 girls: $^5C_2=10$. Step 4 — multiply independent choices: $20\\times10=200$."},
{lvl:'inter',q:"How many 3-digit numbers greater than 500 can be formed from 2, 3, 5, 7, 8 without repetition?",
a:"$36$",
sol:"Step 1 — 'greater than 500' restricts the FIRST digit: it must be 5, 7 or 8 (not 2 or 3) — 3 choices. Step 2 — the remaining two positions are filled from the 4 leftover digits without repetition: $4\\times3=12$ ways. Step 3 — multiply: $3\\times12=36$."},
{lvl:'adv',q:"In how many ways can 7 people sit in a row if two particular people must NOT sit together?",
a:"$3600$",
sol:"Step 1 — total unrestricted arrangements: $7!=5040$. Step 2 — count the complement ('together') instead: glue the pair into one block, giving 6 objects to arrange: $6!=720$, then multiply by $2!$ for the two internal orders of the pair: $720\\times2=1440$. Step 3 — subtract: not together $=5040-1440=3600$."},
{lvl:'adv',q:"A committee of 4 is chosen from 9 people including Mr and Mrs Tan. How many committees include at most one of them?",
a:"$105$",
sol:"Step 1 — 'at most one' is fastest via the complement: total minus 'both included'. Step 2 — total ways to choose any 4 from 9: $^9C_4=126$. Step 3 — committees with BOTH Tans: fix both, choose the remaining 2 members from the other 7: $^7C_2=21$. Step 4 — subtract: $126-21=105$."},
{lvl:'adv',q:"How many arrangements of the letters of DIGITS are there? How many have the two I's separated?",
a:"$360$ total; $240$ separated",
sol:"Step 1 — 6 letters with I repeated twice, so divide out the identical swap: $\\dfrac{6!}{2!}=360$. Step 2 — count 'I's together' via the block method: glue the two I's, giving 5 objects to arrange: $5!=120$ (no extra $\\times2!$ since the I's are identical — swapping them changes nothing visible). Step 3 — subtract for 'separated': $360-120=240$."}
]};


// ============================================================ ADD MATH CH 11: SERIES
ADDMATH[10] = {
title:"Series: Binomial, AP & GP",
syl:"0606 §11 — Series",
yt:["arithmetic series sum formula derivation","geometric series sum to infinity explained","binomial theorem explained from zero","pascal's triangle and binomial coefficients"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>You forward a funny video to $5$ friends on WhatsApp. Each of them forwards it to $5$ more friends, who each forward it to $5$ more... After $6$ rounds, how many people have seen it? This is a <b>geometric</b> pattern — each stage multiplies by a constant factor. Compare that to stadium seating for a Merdeka Day parade, where row 1 has $20$ seats, row 2 has $23$, row 3 has $26$ — each row adds a constant amount. That's an <b>arithmetic</b> pattern. Both are "series" — and this chapter also covers a third, seemingly unrelated skill (expanding $(1+x)^n$) that turns out to share the same $^nC_r$ counting tool from last chapter.</p></div>

<h2>1. Sequence vs. series — one word each</h2>
<p>A <b>sequence</b> is a list: $4,9,14,19,\\ldots$ A <b>series</b> is what you get by <em>adding</em> the terms of a sequence: $4+9+14+19+\\cdots$. "Find the sum" always means series; "find the $n$th term" always means sequence.</p>

<h2>2. Arithmetic progressions (AP) — constant difference</h2>
<div class="formula">
$n$th term: $$u_n = a+(n-1)d$$
Sum of first $n$ terms: $$S_n = \\frac{n}{2}\\big[2a+(n-1)d\\big]$$
where $a=$ first term, $d=$ common difference.</div>
<p><b>Where the sum formula comes from (Gauss's trick):</b> write the sum forwards and backwards, then add the two versions term by term — every pair adds to the SAME total ($a+l$, first plus last), and there are $n$ such pairs:</p>
<div class="fig">
<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="35" font-size="13">S = a + (a+d) + (a+2d) + ... + l</text>
<text x="20" y="65" font-size="13">S = l + (l−d) + (l−2d) + ... + a</text>
<line x1="20" y1="80" x2="460" y2="80" stroke="#888"/>
<text x="20" y="105" font-size="13" fill="#5246D9" font-weight="bold">2S = (a+l) + (a+l) + (a+l) + ... + (a+l)  [n times]</text>
<text x="20" y="135" font-size="13" fill="#1D7A4F" font-weight="bold">⟹ S = n(a+l)/2</text>
</svg>
<div class="figcap">Adding the sum to its own reverse makes every column equal to $(a+l)$ — the "first + last" pairing gives the sum formula directly.</div></div>
<div class="example"><div class="exhead">Worked example 1</div>
<p>An AP has first term $5$ and 12th term $49$. Find $d$ and $S_{20}$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Use the $n$th term formula</span> with $n=12$: $$a+11d=49 \\Rightarrow 5+11d=49 \\Rightarrow 11d=44 \\Rightarrow d=4$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Substitute into the sum formula</span> with $n=20$: $$S_{20}=\\frac{20}{2}\\big[2(5)+19(4)\\big]=10\\big[10+76\\big]=10(86)=860$$</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> individual terms are DIFFERENCES of consecutive sums: $u_n=S_n-S_{n-1}$ (not $S_n$ itself). Given a formula for $S_n$, find $u_1$ by evaluating $S_1$ directly, and find later terms by subtracting.</div>

<h2>3. Geometric progressions (GP) — constant ratio</h2>
<div class="formula">
$n$th term: $$u_n = ar^{n-1}$$
Sum of first $n$ terms: $$S_n = \\frac{a(1-r^n)}{1-r} \\quad(r\\neq1)$$
Sum to infinity (only exists if $|r|<1$): $$S_\\infty = \\frac{a}{1-r}$$
where $a=$ first term, $r=$ common ratio.</div>
<p><b>Why $S_\\infty$ needs $|r|<1$:</b> if $|r|<1$, each new term is smaller than the last, so $r^n\\to0$ as $n$ grows and the sum settles toward a fixed value. If $|r|\\geq1$, terms don't shrink and the sum grows without bound — there's nothing to converge to.</p>
<div class="example"><div class="exhead">Worked example 2</div>
<p>A GP has first term $81$ and common ratio $\\tfrac23$. Find the sum to infinity.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Check convergence first:</span> $|r|=\\tfrac23<1$ ✓ so $S_\\infty$ exists.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Substitute:</span> $$S_\\infty=\\frac{81}{1-\\tfrac23}=\\frac{81}{\\tfrac13}=81\\times3=243$$</span></div>
</div></div>

<h2>4. The binomial theorem — expanding $(a+b)^n$ without brute force</h2>
<p>Multiplying out $(1+x)^9$ term-by-term by hand would take forever. The binomial theorem gives every term directly using the SAME $^nC_r$ combinations you met last chapter:</p>
<div class="formula">$$(1+x)^n = \\sum_{r=0}^{n} {}^nC_r\\,x^r = {}^nC_0+{}^nC_1x+{}^nC_2x^2+\\cdots+{}^nC_nx^n$$
More generally: $$(a+b)^n=\\sum_{r=0}^{n}{}^nC_r\\,a^{n-r}b^r$$
General term (the $(r+1)$th term): $$T_{r+1} = {}^nC_r\\,a^{n-r}b^r$$</div>
<p><b>Why $^nC_r$ appears:</b> expanding $(a+b)^n$ means choosing, from each of the $n$ brackets, either an $a$ or a $b$. The coefficient of $a^{n-r}b^r$ counts how many ways to choose exactly $r$ of the $n$ brackets to contribute a $b$ — precisely $^nC_r$, the same "choose $r$ from $n$, order irrelevant" idea from Chapter 9.</p>
<div class="example"><div class="exhead">Worked example 3 — expansion and approximation</div>
<p>Expand $(1+2x)^6$ up to the $x^3$ term, and use it to estimate $1.02^6$ to 4 d.p.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Apply the general term formula</span> with $a=1$, $b=2x$, $n=6$, for $r=0,1,2,3$: $$^6C_0+{}^6C_1(2x)+{}^6C_2(2x)^2+{}^6C_3(2x)^3$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Compute each coefficient</span> ($^6C_1=6$, $^6C_2=15$, $^6C_3=20$) and simplify the powers of $2x$: $$1+12x+15(4x^2)+20(8x^3) = 1+12x+60x^2+160x^3$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Match the approximation to the expansion:</span> $1.02=1+2x \\Rightarrow 2x=0.02 \\Rightarrow x=0.01$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Substitute $x=0.01$</span> into the expansion (higher terms are tiny and can be dropped): $$1+12(0.01)+60(0.0001)+160(0.000001) = 1+0.12+0.006+0.00016 \\approx 1.1262$$</span></div>
</div></div>
<div class="example"><div class="exhead">Worked example 4 — finding one specific term</div>
<p>Find the term independent of $x$ (the constant term) in the expansion of $\\left(x+\\dfrac{2}{x^2}\\right)^9$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Write the general term</span> with $a=x$, $b=\\dfrac{2}{x^2}=2x^{-2}$, $n=9$: $$T_{r+1}={}^9C_r\\,x^{9-r}(2x^{-2})^r={}^9C_r\\,2^r\\,x^{9-r-2r}={}^9C_r\\,2^r\\,x^{9-3r}$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">"Independent of $x$"</span> means the power of $x$ is zero: $9-3r=0 \\Rightarrow r=3$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Substitute $r=3$</span> to get that specific term's coefficient: $$^9C_3\\times2^3 = 84\\times8=672$$</span></div>
</div></div>
<div class="note"><b>Exam tip:</b> never expand the whole thing when a question only asks for ONE term (e.g. "independent of $x$," "coefficient of $x^5$") — set up the general term, solve for the needed $r$, then substitute only that one value.</div>
`,
quiz:[
{lvl:'basic',q:"Find the 10th term of the AP $4, 9, 14, \\ldots$",
a:"$49$",
sol:"Step 1 — identify $a=4$, $d=5$. Step 2 — apply $u_n=a+(n-1)d$ with $n=10$: $u_{10}=4+9(5)=4+45=49$."},
{lvl:'inter',q:"An AP has first term $5$ and 12th term $49$. Find $d$ and $S_{20}$.",
a:"$d=4$; $S_{20}=860$",
sol:"Step 1 — use the 12th term to find $d$: $a+11d=49 \\Rightarrow 5+11d=49 \\Rightarrow d=4$. Step 2 — substitute into the sum formula with $n=20$: $S_{20}=\\dfrac{20}{2}[2(5)+19(4)]=10(10+76)=10(86)=860$."},
{lvl:'inter',q:"A GP has first term $81$ and common ratio $\\dfrac23$. Find the sum to infinity.",
a:"$243$",
sol:"Step 1 — check convergence: $|r|=\\tfrac23<1$ ✓, so $S_\\infty$ exists. Step 2 — substitute: $S_\\infty=\\dfrac{81}{1-\\tfrac23}=\\dfrac{81}{\\tfrac13}=243$."},
{lvl:'inter',q:"The sum of the first $n$ terms of an AP is $S_n=3n^2+2n$. Find the first term and the common difference.",
a:"$a=5$, $d=6$",
sol:"Step 1 — the first term is just $S_1$: $a=S_1=3(1)^2+2(1)=5$. Step 2 — find $S_2$: $S_2=3(4)+2(2)=16$. Step 3 — the second term is $u_2=S_2-S_1=16-5=11$. Step 4 — common difference: $d=u_2-u_1=11-5=6$."},
{lvl:'adv',q:"Find the term independent of $x$ in the expansion of $\\left(x+\\dfrac{2}{x^2}\\right)^9$.",
a:"$672$",
sol:"Step 1 — general term with $a=x$, $b=2x^{-2}$: $T_{r+1}={}^9C_r\\,x^{9-r}(2x^{-2})^r={}^9C_r\\,2^r\\,x^{9-3r}$. Step 2 — set the power of $x$ to zero: $9-3r=0 \\Rightarrow r=3$. Step 3 — substitute $r=3$: $^9C_3\\times2^3=84\\times8=672$."},
{lvl:'adv',q:"Expand $(1+2x)^6$ up to the $x^3$ term, and use it to estimate $1.02^6$ to 4 d.p.",
a:"$1+12x+60x^2+160x^3$; $1.02^6\\approx1.1262$",
sol:"Step 1 — apply the binomial expansion with $a=1,\\,b=2x,\\,n=6$ for $r=0,1,2,3$: coefficients $^6C_1=6,\\,^6C_2=15,\\,^6C_3=20$, giving $1+12x+60x^2+160x^3$. Step 2 — match to the target: $1.02=1+2x \\Rightarrow x=0.01$. Step 3 — substitute (later terms negligible): $1+12(0.01)+60(0.0001)+160(0.000001)=1+0.12+0.006+0.00016\\approx1.1262$."},
{lvl:'adv',q:"The 1st, 4th and 10th terms of an AP ($d\\neq0$) form a GP. Given the AP's first term is $6$, find $d$ and the GP's common ratio.",
a:"$d=2$, $r=2$",
sol:"Step 1 — write the three AP terms: $u_1=6$, $u_4=6+3d$, $u_{10}=6+9d$. Step 2 — 'form a GP' means the middle term squared equals the product of the outer two (the GP crossover rule): $(6+3d)^2=6(6+9d)$. Step 3 — expand: $36+36d+9d^2=36+54d$. Step 4 — simplify: $9d^2=18d \\Rightarrow 9d(d-2)=0 \\Rightarrow d=0$ or $d=2$; reject $d=0$ (given $d\\neq0$), so $d=2$. Step 5 — the GP is $6,\\,12,\\,24$, giving common ratio $r=\\dfrac{12}{6}=2$."}
]};


// ============================================================ ADD MATH CH 12: DIFFERENTIATION
ADDMATH[11] = {
title:"Differentiation",
syl:"0606 §12 — Calculus: differentiation",
yt:["what is differentiation explained from zero","chain rule product rule quotient rule explained","stationary points second derivative test","optimisation calculus word problems"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>A Milo tin factory needs to design a cylindrical can holding exactly $250\\pi\\text{ cm}^3$ of powder. Tin costs money, so the factory wants to use the <b>least possible material</b> (minimum surface area) while still holding that fixed volume. There's a whole family of cylinder shapes (tall & thin, short & wide) that all hold $250\\pi$ — which ONE uses the least metal? Differentiation — the mathematics of rates of change — is exactly the tool that finds this optimal shape, and we'll solve this exact problem by the end of the chapter.</p></div>

<h2>1. What does $\\dfrac{dy}{dx}$ actually measure?</h2>
<p>$\\dfrac{dy}{dx}$ is the <b>gradient of the tangent</b> to the curve $y=f(x)$ at a point — equivalently, the <b>instantaneous rate of change</b> of $y$ with respect to $x$ right at that point.</p>
<div class="fig">
<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg">
<path d="M 40 190 Q 200 20 420 60" fill="none" stroke="#5246D9" stroke-width="3"/>
<line x1="60" y1="150" x2="380" y2="70" stroke="#C2571B" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="140" y1="128" x2="280" y2="95" stroke="#C2571B" stroke-width="2" stroke-dasharray="3 2"/>
<line x1="185" y1="117" x2="235" y2="105" stroke="#1D7A4F" stroke-width="3"/>
<circle cx="210" cy="111" r="5" fill="#1D7A4F"/>
<text x="60" y="205" font-size="11.5" fill="#555">secant lines approach the TANGENT</text>
<text x="230" y="100" font-size="12" fill="#1D7A4F" font-weight="bold">tangent at this point</text>
</svg>
<div class="figcap">As the two points defining a "secant" (chord) line squeeze closer together, the secant's gradient approaches the tangent's gradient — that limiting value IS the derivative.</div></div>

<h2>2. The power rule (recap) and the chain rule (new)</h2>
<div class="formula">Power rule: $$\\frac{d}{dx}(x^n) = nx^{n-1}$$
Chain rule (for composite functions $y=f(g(x))$ — recall composite functions from Chapter 1!): $$\\frac{dy}{dx} = \\frac{dy}{du}\\times\\frac{du}{dx}$$</div>
<p><b>In practice</b> — for $y=(\\text{inside})^n$: bring the power down, reduce it by 1, then multiply by the derivative of the inside expression.</p>
<div class="example"><div class="exhead">Worked example 1</div>
<p>Differentiate $y=(2x-5)^7$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Treat $(2x-5)$ as "the inside."</span> Bring the power 7 down and reduce it by 1: $7(2x-5)^6$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Multiply by the derivative of the inside</span> ($\\frac{d}{dx}(2x-5)=2$): $$\\frac{dy}{dx}=7(2x-5)^6\\times2=14(2x-5)^6$$</span></div>
</div></div>

<h2>3. Product and quotient rules</h2>
<div class="formula">
Product rule: for $y=uv$: $$\\frac{dy}{dx}=u\\frac{dv}{dx}+v\\frac{du}{dx}$$
Quotient rule: for $y=\\dfrac{u}{v}$: $$\\frac{dy}{dx}=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}$$
Also needed: $$\\frac{d}{dx}(\\ln x)=\\frac{1}{x} \\qquad \\frac{d}{dx}(e^x)=e^x$$</div>
<div class="example"><div class="exhead">Worked example 2 — product rule</div>
<p>Differentiate $y=x\\ln x$, then find the $x$-coordinate of its stationary point.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Identify $u$ and $v$:</span> $u=x$ (so $\\frac{du}{dx}=1$), $v=\\ln x$ (so $\\frac{dv}{dx}=\\frac1x$).</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Apply the product rule:</span> $$\\frac{dy}{dx}=x\\cdot\\frac1x+\\ln x\\cdot1=1+\\ln x$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">A stationary point has $\\frac{dy}{dx}=0$:</span> $1+\\ln x=0 \\Rightarrow \\ln x=-1 \\Rightarrow x=e^{-1}=\\dfrac1e$.</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> in the product rule, forgetting one of the two terms (only writing $u\\frac{dv}{dx}$ and stopping) — both terms are compulsory, always.</div>

<h2>4. Tangents and normals</h2>
<p>Once you have $\\dfrac{dy}{dx}$ at a specific point, you have the gradient — build the tangent line the same way as Chapter 7 (point + gradient). The <b>normal</b> is perpendicular to the tangent, so its gradient is the negative reciprocal.</p>
<div class="example"><div class="exhead">Worked example 3</div>
<p>Find the equation of the tangent to $y=x^3-3x+2$ at $x=2$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Differentiate:</span> $\\dfrac{dy}{dx}=3x^2-3$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Find the gradient at $x=2$:</span> $3(4)-3=9$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Find the $y$-coordinate at $x=2$</span> (substitute into the ORIGINAL function, not the derivative): $y=8-6+2=4$. Point $(2,4)$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Build the tangent line:</span> $y-4=9(x-2) \\Rightarrow y=9x-14$.</span></div>
</div></div>

<h2>5. Stationary points — where the gradient is zero</h2>
<div class="fig">
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="170" x2="460" y2="170" stroke="#888"/>
<path d="M 30 150 Q 130 40 220 90 Q 310 140 400 30" fill="none" stroke="#5246D9" stroke-width="3"/>
<circle cx="132" cy="53" r="5" fill="#1D7A4F"/><text x="90" y="35" font-size="12" fill="#1D7A4F">maximum</text>
<circle cx="300" cy="128" r="5" fill="#C2571B"/><text x="255" y="150" font-size="12" fill="#C2571B">minimum</text>
</svg>
<div class="figcap">At a maximum, gradient goes $+\\to0\\to-$. At a minimum, gradient goes $-\\to0\\to+$. Both are "stationary" because $\\frac{dy}{dx}=0$ there.</div></div>
<div class="formula">Second derivative test: at a stationary point, if $\\dfrac{d^2y}{dx^2}<0$ it's a <b>maximum</b>; if $\\dfrac{d^2y}{dx^2}>0$ it's a <b>minimum</b>.</div>
<div class="example"><div class="exhead">Worked example 4</div>
<p>Find and classify the stationary points of $y=x^3-6x^2+9x+1$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Set the first derivative to zero:</span> $\\dfrac{dy}{dx}=3x^2-12x+9=3(x-1)(x-3)=0 \\Rightarrow x=1,3$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Find the second derivative:</span> $\\dfrac{d^2y}{dx^2}=6x-12$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Test $x=1$:</span> $6(1)-12=-6<0$ → maximum. $y(1)=1-6+9+1=5$. Point $(1,5)$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Test $x=3$:</span> $6(3)-12=6>0$ → minimum. $y(3)=27-54+27+1=1$. Point $(3,1)$.</span></div>
</div></div>

<h2>6. Connected rates of change — the chain rule in disguise</h2>
<p>When two quantities both change with time, the chain rule links their rates: $\\dfrac{dV}{dt}=\\dfrac{dV}{dx}\\times\\dfrac{dx}{dt}$ — this connects "the rate you know" to "the rate you want" via a shared variable.</p>
<div class="example"><div class="exhead">Worked example 5</div>
<p>The side of a cube increases at $0.05$ cm/s. Find the rate of increase of the volume when the side is $4$ cm.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Set up the volume-side relationship:</span> $V=x^3 \\Rightarrow \\dfrac{dV}{dx}=3x^2$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Chain the rates together:</span> $$\\frac{dV}{dt}=\\frac{dV}{dx}\\times\\frac{dx}{dt}=3x^2\\times0.05$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Substitute $x=4$:</span> $3(16)(0.05)=2.4$ cm³/s.</span></div>
</div></div>

<h2>7. Optimisation — solving the Milo tin problem</h2>
<div class="example"><div class="exhead">Worked example 6 — the scenario, solved</div>
<p>Find the radius that minimises the total surface area of a closed cylindrical can with volume $250\\pi\\text{ cm}^3$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Write down what you're minimising, and the constraint:</span> $S=2\\pi r^2+2\\pi rh$ (total surface area — two circular ends plus the curved side), with constraint $V=\\pi r^2h=250\\pi$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Use the constraint to eliminate $h$</span> — you can only differentiate a function of ONE variable: $h=\\dfrac{250}{r^2}$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Substitute into $S$:</span> $$S=2\\pi r^2+2\\pi r\\left(\\frac{250}{r^2}\\right)=2\\pi r^2+\\frac{500\\pi}{r}$$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Differentiate and set to zero:</span> $$\\frac{dS}{dr}=4\\pi r-\\frac{500\\pi}{r^2}=0 \\;\\Rightarrow\\; 4\\pi r=\\frac{500\\pi}{r^2} \\;\\Rightarrow\\; r^3=125 \\;\\Rightarrow\\; r=5$$</span></div>
<div class="st"><span class="n">5</span><span><span class="stlabel">Confirm it's a minimum:</span> $\\dfrac{d^2S}{dr^2}=4\\pi+\\dfrac{1000\\pi}{r^3}$, which is positive for any $r>0$ — confirmed minimum. So $r=5$ cm (giving $h=10$ cm).</span></div>
</div></div>
<div class="note"><b>Exam tip — the optimisation recipe:</b> (1) write the quantity to optimise in terms of TWO variables, (2) use the given constraint to eliminate one variable, (3) differentiate the one-variable version and set to zero, (4) always check max/min with the second derivative.</div>
`,
quiz:[
{lvl:'basic',q:"Differentiate $y=5x^3-2x+7$.",
a:"$15x^2-2$",
sol:"Step 1 — apply the power rule term by term: $\\dfrac{d}{dx}(5x^3)=15x^2$, $\\dfrac{d}{dx}(-2x)=-2$. Step 2 — the constant $7$ has zero derivative (it never changes, so its rate of change is zero). Final: $15x^2-2$."},
{lvl:'inter',q:"Differentiate $y=(2x-5)^7$.",
a:"$14(2x-5)^6$",
sol:"Step 1 — chain rule: treat $(2x-5)$ as the inside function. Bring the power down and reduce by 1: $7(2x-5)^6$. Step 2 — multiply by the derivative of the inside, $\\frac{d}{dx}(2x-5)=2$: $7(2x-5)^6\\times2=14(2x-5)^6$."},
{lvl:'inter',q:"Find the equation of the tangent to $y=x^3-3x+2$ at $x=2$.",
a:"$y=9x-14$",
sol:"Step 1 — differentiate: $\\dfrac{dy}{dx}=3x^2-3$. Step 2 — gradient at $x=2$: $3(4)-3=9$. Step 3 — find $y$ at $x=2$ using the ORIGINAL function: $y=8-6+2=4$. Step 4 — build the line: $y-4=9(x-2) \\Rightarrow y=9x-14$."},
{lvl:'inter',q:"Find and classify the stationary points of $y=x^3-6x^2+9x+1$.",
a:"Max $(1,5)$, min $(3,1)$",
sol:"Step 1 — set $\\dfrac{dy}{dx}=3x^2-12x+9=3(x-1)(x-3)=0 \\Rightarrow x=1,3$. Step 2 — second derivative: $\\dfrac{d^2y}{dx^2}=6x-12$. Step 3 — test $x=1$: $6-12=-6<0 \\Rightarrow$ maximum; $y=1-6+9+1=5$. Step 4 — test $x=3$: $18-12=6>0 \\Rightarrow$ minimum; $y=27-54+27+1=1$."},
{lvl:'inter',q:"Differentiate $y=x\\ln x$, then find the $x$-coordinate of its stationary point.",
a:"$\\dfrac{dy}{dx}=\\ln x+1$; stationary at $x=\\dfrac1e$",
sol:"Step 1 — product rule with $u=x$, $v=\\ln x$: $\\dfrac{dy}{dx}=x\\cdot\\dfrac1x+\\ln x\\cdot1=1+\\ln x$. Step 2 — set to zero: $1+\\ln x=0 \\Rightarrow \\ln x=-1 \\Rightarrow x=e^{-1}=\\dfrac1e$."},
{lvl:'adv',q:"The side of a cube increases at $0.05$ cm/s. Find the rate of increase of the volume when the side is $4$ cm.",
a:"$2.4$ cm³/s",
sol:"Step 1 — relate volume to side: $V=x^3 \\Rightarrow \\dfrac{dV}{dx}=3x^2$. Step 2 — chain the known rate to the wanted rate: $\\dfrac{dV}{dt}=\\dfrac{dV}{dx}\\times\\dfrac{dx}{dt}=3x^2\\times0.05$. Step 3 — substitute $x=4$: $3(16)(0.05)=2.4$ cm³/s."},
{lvl:'adv',q:"A closed cylindrical can has volume $250\\pi$ cm³. Find the radius that minimises its total surface area, and prove it is a minimum.",
a:"$r=5$ cm ($h=10$ cm)",
sol:"Step 1 — write $S=2\\pi r^2+2\\pi rh$ with constraint $V=\\pi r^2h=250\\pi \\Rightarrow h=\\dfrac{250}{r^2}$. Step 2 — substitute to get $S$ in terms of $r$ only: $S=2\\pi r^2+\\dfrac{500\\pi}{r}$. Step 3 — differentiate and set to zero: $\\dfrac{dS}{dr}=4\\pi r-\\dfrac{500\\pi}{r^2}=0 \\Rightarrow r^3=125 \\Rightarrow r=5$. Step 4 — confirm minimum: $\\dfrac{d^2S}{dr^2}=4\\pi+\\dfrac{1000\\pi}{r^3}>0$ for all $r>0$ — confirmed minimum."}
]};


// ============================================================ ADD MATH CH 13: INTEGRATION
ADDMATH[12] = {
title:"Integration",
syl:"0606 §12 — Calculus: integration",
yt:["what is integration explained from zero","area under curve integration explained","definite integral evaluating limits","area between two curves calculus"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>During a monsoon downpour in Kuala Lumpur, rainwater flows into a drain at a rate $r(t)=4t-t^2$ litres/minute, where $t$ is minutes since the rain started ($0\\leq t\\leq4$). The drain has capacity $10$ litres before it overflows. Does it overflow? You know the RATE at every instant, but you need the TOTAL volume collected — and total-from-rate is exactly what <b>integration</b> computes. Integration is the reverse process of differentiation: if differentiation turns "position" into "velocity," integration turns "velocity" back into "position" (or here, "flow rate" into "total volume").</p></div>

<h2>1. Integration is the reverse of differentiation</h2>
<div class="formula">$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+c \\qquad (n\\neq-1)$$</div>
<p><b>Why it works:</b> differentiating $\\dfrac{x^{n+1}}{n+1}$ brings the power $(n+1)$ down and reduces it by 1 — giving back exactly $x^n$. Integration just runs that process backwards: raise the power by 1, then divide by the NEW power.</p>
<p><b>Why "$+c$"?</b> Differentiating any constant gives zero — so $x^2$, $x^2+5$, and $x^2-100$ all have the exact same derivative $2x$. Going backwards from $2x$, we can't know which constant was there originally, so we must always add an unknown constant $c$ to cover every possibility.</p>
<div class="example"><div class="exhead">Worked example 1</div>
<p>Find $\\int(6x^2-4x+1)\\,dx$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Apply the rule term by term:</span> raise each power by 1, divide by the new power.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Work through each term:</span> $\\dfrac{6x^3}{3}-\\dfrac{4x^2}{2}+x+c$</span></div>
</div>
$$=2x^3-2x^2+x+c$$</div>

<h2>2. Integrating $(ax+b)^n$ — the reverse chain rule</h2>
<div class="formula">$$\\int(ax+b)^n\\,dx = \\frac{(ax+b)^{n+1}}{a(n+1)}+c$$</div>
<p>Compare to Chapter 12's chain rule: differentiating $(ax+b)^{n+1}$ brings the power down AND multiplies by $a$ (the inner derivative). Integration divides by BOTH of those — the new power, and $a$ — to undo them.</p>
<div class="example"><div class="exhead">Worked example 2</div>
<p>Find $\\int(2x+1)^5\\,dx$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Raise the power by 1:</span> $(2x+1)^6$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Divide by the NEW power (6) AND the inner derivative ($a=2$):</span> $$\\frac{(2x+1)^6}{6\\times2}+c = \\frac{(2x+1)^6}{12}+c$$</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> forgetting to divide by $a$ as well as the new power — only dividing by $6$ gives an answer that's exactly double what it should be (since differentiating it would bring back an extra factor of 2 that shouldn't be there).</div>

<h2>3. Finding a curve from its gradient</h2>
<div class="example"><div class="exhead">Worked example 3</div>
<p>The gradient of a curve is $\\dfrac{dy}{dx}=4x-5$ and the curve passes through $(1,2)$. Find $y$ when $x=3$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Integrate the gradient function</span> to recover $y$ (with an unknown constant): $$y=2x^2-5x+c$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Use the given point to pin down $c$:</span> substitute $(1,2)$: $2=2(1)-5(1)+c=2-5+c \\Rightarrow c=5$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Write the full equation, then evaluate</span> at $x=3$: $y=2x^2-5x+5 \\Rightarrow y=18-15+5=8$.</span></div>
</div></div>

<h2>4. Definite integrals — the area under a curve</h2>
<div class="fig">
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="170" x2="440" y2="170" stroke="#888"/>
<path d="M 60 160 Q 200 20 400 90" fill="none" stroke="#5246D9" stroke-width="3"/>
<rect x="60" y="150" width="30" height="15" fill="#EEECFC" stroke="#5246D9" opacity="0.8"/>
<rect x="90" y="110" width="30" height="55" fill="#EEECFC" stroke="#5246D9" opacity="0.8"/>
<rect x="120" y="75" width="30" height="90" fill="#EEECFC" stroke="#5246D9" opacity="0.8"/>
<rect x="150" y="55" width="30" height="110" fill="#EEECFC" stroke="#5246D9" opacity="0.8"/>
<rect x="180" y="45" width="30" height="120" fill="#EEECFC" stroke="#5246D9" opacity="0.8"/>
<text x="220" y="185" font-size="12" fill="#555">thinner rectangles → exact area = ∫ f(x) dx</text>
</svg>
<div class="figcap">Approximate the area under the curve with thin rectangles; as they get infinitely thin, the sum of rectangle areas becomes exactly $\\int_a^b f(x)\\,dx$ — this is what a definite integral MEANS.</div></div>
<div class="formula">$$\\int_a^b f(x)\\,dx = \\Big[F(x)\\Big]_a^b = F(b)-F(a)$$where $F(x)$ is any antiderivative of $f(x)$. Note: <b>no $+c$ needed</b> — it would cancel out anyway when you subtract $F(a)$ from $F(b)$.</div>
<div class="example"><div class="exhead">Worked example 4</div>
<p>Evaluate $\\displaystyle\\int_1^4 3\\sqrt{x}\\,dx$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Rewrite $\\sqrt{x}$ as $x^{1/2}$</span> so the power rule applies: $3x^{1/2}$ integrates to $\\dfrac{3x^{3/2}}{3/2}=2x^{3/2}$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Evaluate at the top limit</span> ($x=4$): $2(4)^{1.5}=2(8)=16$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Evaluate at the bottom limit</span> ($x=1$): $2(1)^{1.5}=2$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Subtract (top minus bottom):</span> $16-2=14$.</span></div>
</div></div>

<h2>5. Area when the curve dips below the axis — signed area trap</h2>
<div class="mistake"><b>Common mistake — huge exam trap:</b> a definite integral gives a NEGATIVE value for any region below the $x$-axis. If a curve crosses the axis within your interval, integrating straight through causes positive and negative parts to <em>cancel</em>, silently under-reporting the true (physical) area. Always: find where the curve crosses zero first, split the integral at that point, take the ABSOLUTE VALUE of each piece, then add.</p></div>
<div class="example"><div class="exhead">Worked example 5</div>
<p>Find the total area between $y=x(x-2)$ and the $x$-axis from $x=0$ to $x=3$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find where the curve crosses zero</span> within the interval: $x(x-2)=0 \\Rightarrow x=0,2$. So the curve is below the axis on $(0,2)$ and above on $(2,3)$ — split there.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Integrate the first piece</span> $(0$ to $2)$: $$\\int_0^2(x^2-2x)\\,dx=\\left[\\frac{x^3}{3}-x^2\\right]_0^2=\\left(\\frac83-4\\right)-0=-\\frac43$$ Negative, as expected (below axis) — take the absolute value: area $=\\dfrac43$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Integrate the second piece</span> $(2$ to $3)$: $$\\left[\\frac{x^3}{3}-x^2\\right]_2^3=(9-9)-\\left(\\frac83-4\\right)=0-\\left(-\\frac43\\right)=\\frac43$$ Positive (above axis) ✓.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Add the two AREAS</span> (both taken as positive): $$\\frac43+\\frac43=\\frac83$$</span></div>
</div></div>

<h2>6. Area between two curves — line and parabola</h2>
<div class="formula">$$\\text{Area between curves} = \\int_a^b\\big[(\\text{top curve})-(\\text{bottom curve})\\big]\\,dx$$where $a,b$ are the $x$-coordinates of the intersection points.</div>
<div class="example"><div class="exhead">Worked example 6</div>
<p>The curve $y=x^2$ and the line $y=kx$ ($k>0$) enclose a region of area $36$. Find $k$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find the intersection points</span> (simultaneous equations, Chapter 5!): $x^2=kx \\Rightarrow x(x-k)=0 \\Rightarrow x=0,k$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Identify which curve is on top</span> between $0$ and $k$: the line $y=kx$ is above the parabola there (test any value, e.g. $x=\\tfrac{k}{2}$).</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Set up (top $-$ bottom) and integrate:</span> $$\\int_0^k(kx-x^2)\\,dx=\\left[\\frac{kx^2}{2}-\\frac{x^3}{3}\\right]_0^k=\\frac{k^3}{2}-\\frac{k^3}{3}=\\frac{k^3}{6}$$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Set equal to the given area and solve:</span> $$\\frac{k^3}{6}=36 \\Rightarrow k^3=216 \\Rightarrow k=6$$</span></div>
</div></div>
`,
quiz:[
{lvl:'basic',q:"Find $\\int 4x\\,dx$.",
a:"$2x^2+c$",
sol:"Step 1 — raise the power of $x$ by 1 (from 1 to 2) and divide by the new power: $\\dfrac{4x^2}{2}=2x^2$. Step 2 — always add the constant of integration: $2x^2+c$."},
{lvl:'inter',q:"Find $\\int(6x^2-4x+1)\\,dx$.",
a:"$2x^3-2x^2+x+c$",
sol:"Step 1 — apply the power rule to each term separately: $\\dfrac{6x^3}{3}=2x^3$, $\\dfrac{4x^2}{2}=2x^2$ (with the minus sign kept), and $x$ integrates to $x$ (since $x=x^1 \\to \\tfrac{x^2}{2}$... actually the constant term $1$ integrates to $x$). Step 2 — combine with $+c$: $2x^3-2x^2+x+c$."},
{lvl:'inter',q:"Find $\\int(2x+1)^5\\,dx$.",
a:"$\\dfrac{(2x+1)^6}{12}+c$",
sol:"Step 1 — this is the reverse chain rule: raise the power to 6. Step 2 — divide by BOTH the new power (6) AND the derivative of the inside ($a=2$): $\\dfrac{(2x+1)^6}{6\\times2}+c=\\dfrac{(2x+1)^6}{12}+c$."},
{lvl:'inter',q:"Evaluate $\\displaystyle\\int_1^4 3\\sqrt{x}\\,dx$.",
a:"$14$",
sol:"Step 1 — rewrite $3\\sqrt{x}=3x^{1/2}$ and integrate: $\\dfrac{3x^{3/2}}{3/2}=2x^{3/2}$. Step 2 — evaluate at the top limit $x=4$: $2(4)^{1.5}=2(8)=16$. Step 3 — evaluate at the bottom limit $x=1$: $2(1)^{1.5}=2$. Step 4 — subtract: $16-2=14$."},
{lvl:'inter',q:"The gradient of a curve is $\\dfrac{dy}{dx}=4x-5$ and the curve passes through $(1,2)$. Find $y$ when $x=3$.",
a:"$y=8$",
sol:"Step 1 — integrate the gradient: $y=2x^2-5x+c$. Step 2 — use the point $(1,2)$ to find $c$: $2=2-5+c \\Rightarrow c=5$. Step 3 — write the full equation: $y=2x^2-5x+5$. Step 4 — evaluate at $x=3$: $18-15+5=8$."},
{lvl:'adv',q:"Find the total area between $y=x(x-2)$ and the $x$-axis from $x=0$ to $x=3$.",
a:"$\\dfrac83$",
sol:"Step 1 — find where the curve crosses zero within the interval: $x=0,2$ — the curve dips below the axis on $(0,2)$ and rises above on $(2,3)$, so split there. Step 2 — integrate $(0,2)$: $\\left[\\dfrac{x^3}{3}-x^2\\right]_0^2=\\dfrac83-4=-\\dfrac43$ — negative confirms below-axis; take $\\left|-\\dfrac43\\right|=\\dfrac43$. Step 3 — integrate $(2,3)$: $\\left[\\dfrac{x^3}{3}-x^2\\right]_2^3=0-\\left(-\\dfrac43\\right)=\\dfrac43$ — positive, above axis. Step 4 — add the two AREAS (both positive): $\\dfrac43+\\dfrac43=\\dfrac83$."},
{lvl:'adv',q:"The curve $y=x^2$ and the line $y=kx$ ($k>0$) enclose a region of area $36$. Find $k$.",
a:"$k=6$",
sol:"Step 1 — find intersections: $x^2=kx \\Rightarrow x(x-k)=0 \\Rightarrow x=0,k$. Step 2 — the line is above the parabola on this interval (check any point in between). Step 3 — integrate (top minus bottom): $\\int_0^k(kx-x^2)dx=\\left[\\dfrac{kx^2}{2}-\\dfrac{x^3}{3}\\right]_0^k=\\dfrac{k^3}{2}-\\dfrac{k^3}{3}=\\dfrac{k^3}{6}$. Step 4 — set equal to 36 and solve: $\\dfrac{k^3}{6}=36 \\Rightarrow k^3=216 \\Rightarrow k=6$."}
]};


// ============================================================ ADD MATH CH 14: KINEMATICS (CALCULUS)
ADDMATH[13] = {
title:"Kinematics (Calculus of Motion)",
syl:"0606 §12 — Applications of calculus: kinematics",
yt:["calculus kinematics displacement velocity acceleration","total distance vs displacement calculus","kinematics differentiation integration IGCSE","exponential velocity function kinematics"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>An LRT train pulling out of KL Sentral along a straight section of track has displacement $s=2t^3-9t^2+12t$ (metres, $t$ in seconds) from the platform. The driver wants to know: when does the train come to a complete stop (e.g. at a signal)? How fast is it going at any moment? This chapter is Chapter 12–13's differentiation and integration, applied specifically to motion — the SAME calculus, one specific real-world use.</p></div>

<h2>1. The calculus chain: displacement → velocity → acceleration</h2>
<div class="formula">$$v=\\frac{ds}{dt} \\qquad a=\\frac{dv}{dt}=\\frac{d^2s}{dt^2}$$
Differentiate to go displacement → velocity → acceleration. Integrate to go the other way: $$v=\\int a\\,dt \\qquad s=\\int v\\,dt$$</div>
<div class="fig">
<svg viewBox="0 0 460 130" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="40" width="110" height="55" rx="10" fill="#EEECFC" stroke="#5246D9" stroke-width="2"/>
<text x="40" y="72" font-size="14" fill="#5246D9" font-weight="bold">s (displacement)</text>
<rect x="175" y="40" width="110" height="55" rx="10" fill="#FBEFE6" stroke="#C2571B" stroke-width="2"/>
<text x="205" y="72" font-size="14" fill="#C2571B" font-weight="bold">v (velocity)</text>
<rect x="330" y="40" width="110" height="55" rx="10" fill="#E3F4EA" stroke="#1D7A4F" stroke-width="2"/>
<text x="350" y="72" font-size="14" fill="#1D7A4F" font-weight="bold">a (acceleration)</text>
<path d="M 130 55 L 175 55" stroke="#1A2030" stroke-width="2" marker-end="url(#ka)"/>
<text x="132" y="45" font-size="11">differentiate</text>
<path d="M 285 55 L 330 55" stroke="#1A2030" stroke-width="2" marker-end="url(#ka)"/>
<text x="287" y="45" font-size="11">differentiate</text>
<path d="M 330 90 L 285 90" stroke="#999" stroke-width="2" marker-end="url(#ka)"/>
<text x="292" y="112" font-size="11" fill="#999">integrate</text>
<path d="M 175 90 L 130 90" stroke="#999" stroke-width="2" marker-end="url(#ka)"/>
<text x="140" y="112" font-size="11" fill="#999">integrate</text>
<defs><marker id="ka" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1A2030"/></marker></defs>
</svg>
<div class="figcap">Differentiation moves right (displacement → velocity → acceleration); integration moves left, restoring $+c$ from given initial conditions at each step.</div></div>

<h2>2. "At rest" means $v=0$ — NOT $s=0$</h2>
<div class="mistake"><b>Common mistake:</b> "at rest" is a statement about VELOCITY being zero, not about the particle being back at the starting point. A particle can be far from the origin and still momentarily at rest (e.g. at the top of a thrown ball's path).</div>
<div class="example"><div class="exhead">Worked example 1 — the scenario, solved</div>
<p>$s=2t^3-9t^2+12t$. Find the times when the particle is at rest.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Differentiate to get velocity:</span> $v=\\dfrac{ds}{dt}=6t^2-18t+12$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Set $v=0$</span> (at rest, NOT $s=0$): $$6t^2-18t+12=0 \\Rightarrow 6(t-1)(t-2)=0 \\Rightarrow t=1,2$$</span></div>
</div></div>

<h2>3. Working backwards — integrate, and use initial conditions</h2>
<div class="example"><div class="exhead">Worked example 2</div>
<p>A particle has $v=6t^2-4t+2$ and $s=3$ when $t=0$. Find $s$ when $t=2$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Integrate velocity to get displacement</span> (with unknown constant): $$s=\\int(6t^2-4t+2)\\,dt=2t^3-2t^2+2t+c$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Use the given condition to find $c$:</span> at $t=0$, $s=3$: $0-0+0+c=3 \\Rightarrow c=3$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Evaluate at $t=2$:</span> $s=2(8)-2(4)+2(2)+3=16-8+4+3=15$.</span></div>
</div></div>
<div class="example"><div class="exhead">Worked example 3 — integrate TWICE</div>
<p>Given $a=6t-4$, $v=2$ when $t=0$, and $s=0$ when $t=0$, find $s$ in terms of $t$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Integrate acceleration to get velocity</span> (first unknown constant, $c_1$): $$v=\\int(6t-4)\\,dt=3t^2-4t+c_1$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Use the velocity condition to find $c_1$:</span> at $t=0$, $v=2$: $c_1=2$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Integrate velocity to get displacement</span> (second unknown constant, $c_2$): $$s=\\int(3t^2-4t+2)\\,dt=t^3-2t^2+2t+c_2$$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Use the displacement condition to find $c_2$:</span> at $t=0$, $s=0$: $c_2=0$.</span></div>
</div>
$$s=t^3-2t^2+2t$$</div>

<h2>4. Total distance vs. displacement — the reversal trap</h2>
<p>This is the kinematics version of the "signed area" trap from Chapter 13. <b>Displacement</b> is the net change in position — direction-reversals cancel out. <b>Distance travelled</b> adds up every bit of movement regardless of direction, so you must split at every point where $v=0$ (a reversal) and take absolute values.</p>
<div class="example"><div class="exhead">Worked example 4</div>
<p>A particle starts from $O$ with $v=4t-t^2$. Find the total distance travelled in the first 5 seconds.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find when the particle reverses</span> (velocity zero): $v=0 \\Rightarrow t(4-t)=0 \\Rightarrow t=0,4$. So it moves one way for $0\\leq t\\leq4$, then reverses for $4\\leq t\\leq5$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Integrate to get displacement:</span> $s=\\int(4t-t^2)\\,dt=2t^2-\\dfrac{t^3}{3}$ (starts from $O$ so $c=0$).</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Evaluate at each key time:</span> $s(0)=0$; $s(4)=32-\\dfrac{64}{3}=\\dfrac{32}{3}$; $s(5)=50-\\dfrac{125}{3}=\\dfrac{25}{3}$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Add the SIZE of each leg</span> (forward leg $0\\to4$, then reverse leg $4\\to5$): $$\\left|\\frac{32}{3}-0\\right|+\\left|\\frac{25}{3}-\\frac{32}{3}\\right|=\\frac{32}{3}+\\frac73=\\frac{39}{3}=13\\text{ m}$$</span></div>
</div>
<p>Compare: the NET displacement after 5 s is just $s(5)=\\dfrac{25}{3}\\approx8.33$ m — much less than the $13$ m actually travelled, because the particle backtracked partway.</p></div>

<h2>5. Exponential velocity functions</h2>
<div class="example"><div class="exhead">Worked example 5</div>
<p>A particle's velocity is $v=12e^{-2t}-4$ m/s. Find (a) when it is at rest, (b) its acceleration then, (c) its displacement from $t=0$ to that instant.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">(a) Set $v=0$:</span> $12e^{-2t}=4 \\Rightarrow e^{-2t}=\\tfrac13 \\Rightarrow -2t=\\ln\\tfrac13=-\\ln3 \\Rightarrow t=\\tfrac12\\ln3\\approx0.549$ s (using logs, Chapter 6).</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">(b) Differentiate $v$ for acceleration:</span> $a=\\dfrac{dv}{dt}=-24e^{-2t}$. At $t=\\tfrac12\\ln3$: $e^{-2t}=\\tfrac13$, so $a=-24\\times\\tfrac13=-8$ m/s².</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">(c) Integrate $v$ for displacement:</span> $s=\\int(12e^{-2t}-4)\\,dt=-6e^{-2t}-4t+c$; with $s=0$ at $t=0$: $-6+c=0 \\Rightarrow c=6$.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Evaluate at $t=\\tfrac12\\ln3$:</span> $$s=-6\\left(\\tfrac13\\right)-4\\left(\\tfrac12\\ln3\\right)+6=-2-2\\ln3+6=4-2\\ln3\\approx1.80\\text{ m}$$</span></div>
</div></div>
`,
quiz:[
{lvl:'basic',q:"$s=5t^2$. Find the velocity at $t=3$.",
a:"$30$ m/s",
sol:"Step 1 — differentiate to get velocity: $v=\\dfrac{ds}{dt}=10t$. Step 2 — substitute $t=3$: $v=30$ m/s."},
{lvl:'inter',q:"$s=2t^3-9t^2+12t$. Find the times when the particle is at rest.",
a:"$t=1$ s and $t=2$ s",
sol:"Step 1 — differentiate: $v=\\dfrac{ds}{dt}=6t^2-18t+12$. Step 2 — 'at rest' means $v=0$ (NOT $s=0$): $6(t-1)(t-2)=0 \\Rightarrow t=1,2$."},
{lvl:'inter',q:"A particle has $v=6t^2-4t+2$ and $s=3$ when $t=0$. Find $s$ when $t=2$.",
a:"$s=15$",
sol:"Step 1 — integrate: $s=2t^3-2t^2+2t+c$. Step 2 — use $s=3$ at $t=0$: $c=3$. Step 3 — evaluate at $t=2$: $s=16-8+4+3=15$."},
{lvl:'inter',q:"$v=3t^2-12$. Find the acceleration when the particle is instantaneously at rest ($t>0$).",
a:"$12$ m/s²",
sol:"Step 1 — set $v=0$: $3t^2=12 \\Rightarrow t^2=4 \\Rightarrow t=2$ (taking $t>0$). Step 2 — differentiate $v$ for acceleration: $a=\\dfrac{dv}{dt}=6t$. Step 3 — evaluate at $t=2$: $a=12$ m/s²."},
{lvl:'adv',q:"A particle starts from $O$ with $v=4t-t^2$. Find the total distance travelled in the first 5 seconds.",
a:"$13$ m",
sol:"Step 1 — find reversal points: $v=0 \\Rightarrow t=0,4$, so the particle reverses direction at $t=4$. Step 2 — integrate: $s=2t^2-\\dfrac{t^3}{3}$ (starting from $O$, $c=0$). Step 3 — evaluate: $s(4)=\\dfrac{32}{3}$, $s(5)=\\dfrac{25}{3}$. Step 4 — add the SIZE of each leg (not the net change): $\\left|\\dfrac{32}{3}\\right|+\\left|\\dfrac{25}{3}-\\dfrac{32}{3}\\right|=\\dfrac{32}{3}+\\dfrac73=13$ m."},
{lvl:'adv',q:"Given $a=6t-4$, $v=2$ when $t=0$, and $s=0$ when $t=0$, find $s$ in terms of $t$.",
a:"$s=t^3-2t^2+2t$",
sol:"Step 1 — integrate acceleration to get velocity: $v=3t^2-4t+c_1$; using $v=2$ at $t=0$ gives $c_1=2$. Step 2 — integrate velocity to get displacement: $s=t^3-2t^2+2t+c_2$; using $s=0$ at $t=0$ gives $c_2=0$. Step 3 — final answer: $s=t^3-2t^2+2t$. Two integrations means two separate constants, each fixed by its own given condition."},
{lvl:'adv',q:"A particle's velocity is $v=12e^{-2t}-4$ m/s. Find (a) when it is at rest, (b) its acceleration then, (c) the displacement from $t=0$ to that instant.",
a:"(a) $t=\\tfrac12\\ln3\\approx0.549$ s (b) $a=-8$ m/s² (c) $s=4-2\\ln3\\approx1.80$ m",
sol:"Step 1 (a) — set $v=0$: $12e^{-2t}=4 \\Rightarrow e^{-2t}=\\tfrac13 \\Rightarrow t=\\tfrac12\\ln3$ (taking logs, Chapter 6). Step 2 (b) — differentiate: $a=-24e^{-2t}$; at this $t$, $e^{-2t}=\\tfrac13$, so $a=-24\\times\\tfrac13=-8$ m/s². Step 3 (c) — integrate $v$: $s=-6e^{-2t}-4t+c$; using $s=0$ at $t=0$ gives $c=6$. Step 4 — evaluate at $t=\\tfrac12\\ln3$: $s=-6(\\tfrac13)-4(\\tfrac12\\ln3)+6=-2-2\\ln3+6=4-2\\ln3\\approx1.80$ m."}
]};


// ============================================================ ADD MATH CH 15: VECTORS
ADDMATH[14] = {
title:"Vectors in Two Dimensions",
syl:"0606 §13 — Vectors in two dimensions",
yt:["what is a vector explained from zero","unit vector magnitude explained","collinear points vectors proof","vector collision problem explained"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>A ferry crosses the Penang Strait from Butterworth. Its own engine gives it a heading and speed — but the sea current also pushes it sideways. The ferry's <em>actual</em> path over the water is the <b>combination</b> of both effects. Speed alone (a single number, a <b>scalar</b>) can't describe this — you need both a size AND a direction together. That combined quantity is a <b>vector</b>, and this chapter is about doing arithmetic with them.</p></div>

<h2>1. What is a vector?</h2>
<p>A <b>vector</b> has both magnitude (size) and direction; a <b>scalar</b> has magnitude only. "The wind is blowing at 20 km/h" is a scalar (speed); "the wind is blowing at 20 km/h from the north-west" is a vector (velocity).</p>
<div class="formula">Column form: $\\begin{pmatrix}x\\\\y\\end{pmatrix}$ &nbsp;&nbsp; $\\mathbf{i}$-$\\mathbf{j}$ form: $x\\mathbf{i}+y\\mathbf{j}$, where $\\mathbf{i}=\\begin{pmatrix}1\\\\0\\end{pmatrix}$ and $\\mathbf{j}=\\begin{pmatrix}0\\\\1\\end{pmatrix}$ are unit "step" vectors along each axis.</div>
<div class="fig">
<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="190" x2="270" y2="190" stroke="#888"/><line x1="30" y1="20" x2="30" y2="200" stroke="#888"/>
<line x1="30" y1="190" x2="210" y2="60" stroke="#5246D9" stroke-width="3" marker-end="url(#kv)"/>
<line x1="30" y1="190" x2="210" y2="190" stroke="#C2571B" stroke-dasharray="4 3"/>
<line x1="210" y1="190" x2="210" y2="60" stroke="#C2571B" stroke-dasharray="4 3"/>
<text x="105" y="205" font-size="12" fill="#C2571B">x (horiz. component)</text>
<text x="220" y="130" font-size="12" fill="#C2571B">y (vert. component)</text>
<text x="130" y="110" font-size="13" fill="#5246D9" font-weight="bold">v = xi + yj</text>
<defs><marker id="kv" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5246D9"/></marker></defs>
</svg>
<div class="figcap">A vector's arrow can always be split into an $\\mathbf{i}$-step (horizontal) plus a $\\mathbf{j}$-step (vertical) — this decomposition is what makes vector arithmetic just component-by-component ordinary arithmetic.</div></div>

<h2>2. Magnitude — Pythagoras, one more time</h2>
<div class="formula">$$|x\\mathbf{i}+y\\mathbf{j}| = \\sqrt{x^2+y^2}$$</div>
<div class="example"><div class="exhead">Worked example 1</div>
<p>Find the magnitude of $3\\mathbf{i}+4\\mathbf{j}$.</p>
<div class="steps"><div class="st"><span class="n">1</span><span>$|v|=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$ — the classic 3-4-5 right triangle.</span></div></div></div>

<h2>3. Unit vectors — direction only, size stripped away</h2>
<div class="formula">$$\\hat{v} = \\frac{v}{|v|}$$ — dividing a vector by its own magnitude leaves a vector of length exactly 1, pointing the same way.</div>
<div class="example"><div class="exhead">Worked example 2</div>
<p>Find the unit vector in the direction of $5\\mathbf{i}-12\\mathbf{j}$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find the magnitude first:</span> $|v|=\\sqrt{25+144}=\\sqrt{169}=13$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Divide every component by it:</span> $$\\hat{v}=\\frac{5}{13}\\mathbf{i}-\\frac{12}{13}\\mathbf{j}$$</span></div>
</div></div>

<h2>4. Position vectors and displacement between two points</h2>
<div class="formula">$$\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = \\mathbf{b}-\\mathbf{a}$$"end minus start"</div>

<h2>5. Parallel vectors and collinear points</h2>
<div class="formula">Two vectors are <b>parallel</b> if and only if one is a scalar multiple of the other: $\\mathbf{u} = k\\mathbf{v}$ for some scalar $k$.</div>
<div class="example"><div class="exhead">Worked example 3</div>
<p>$\\mathbf{p}=2\\mathbf{i}+\\lambda\\mathbf{j}$ and $\\mathbf{q}=6\\mathbf{i}+9\\mathbf{j}$ are parallel. Find $\\lambda$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Set $\\mathbf{p}=k\\mathbf{q}$</span> and match the $\\mathbf{i}$-components: $2=6k \\Rightarrow k=\\tfrac13$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Use the SAME $k$ for the $\\mathbf{j}$-components:</span> $\\lambda=9k=9\\times\\tfrac13=3$.</span></div>
</div></div>
<p><b>Collinear points</b> ($A$, $B$, $C$ all on ONE straight line) are proven by showing $\\overrightarrow{AB}$ is parallel to $\\overrightarrow{BC}$ AND that they share the common point $B$.</p>
<div class="example"><div class="exhead">Worked example 4</div>
<p>$A(1,2)$, $B(4,8)$, $C(6,12)$. Show that $A$, $B$, $C$ are collinear.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find both displacement vectors</span> (end minus start): $\\overrightarrow{AB}=(4-1)\\mathbf{i}+(8-2)\\mathbf{j}=3\\mathbf{i}+6\\mathbf{j}$; $\\overrightarrow{BC}=(6-4)\\mathbf{i}+(12-8)\\mathbf{j}=2\\mathbf{i}+4\\mathbf{j}$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Check for a scalar multiple:</span> $3\\mathbf{i}+6\\mathbf{j}=\\tfrac32(2\\mathbf{i}+4\\mathbf{j})$ — yes, $\\overrightarrow{AB}=\\tfrac32\\overrightarrow{BC}$, so they're parallel.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Both vectors share the point $B$</span> — parallel plus a shared point means $A$, $B$, $C$ all lie on one line: collinear.</span></div>
</div></div>

<h2>6. Vectors and motion — position at time $t$</h2>
<div class="formula">$$\\mathbf{r}(t) = \\mathbf{a}+t\\mathbf{v}$$ starting position $\\mathbf{a}$, plus $t$ lots of the (constant) velocity vector $\\mathbf{v}$.</div>
<div class="example"><div class="exhead">Worked example 5</div>
<p>A particle starts at $3\\mathbf{i}-\\mathbf{j}$ and moves with velocity $2\\mathbf{i}+5\\mathbf{j}$ (m, s). Find its position vector after 4 s and its distance from the origin then.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Substitute into $\\mathbf{r}=\\mathbf{a}+t\\mathbf{v}$</span> with $t=4$: $$\\mathbf{r}=(3+2(4))\\mathbf{i}+(-1+5(4))\\mathbf{j}=11\\mathbf{i}+19\\mathbf{j}$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Distance from origin is the magnitude:</span> $\\sqrt{11^2+19^2}=\\sqrt{121+361}=\\sqrt{482}\\approx22.0$ m.</span></div>
</div></div>

<div class="fig">
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="170" x2="440" y2="170" stroke="#888"/><line x1="30" y1="20" x2="30" y2="190" stroke="#888"/>
<line x1="60" y1="150" x2="200" y2="90" stroke="#5246D9" stroke-width="3" marker-end="url(#kv2)"/>
<line x1="380" y1="40" x2="240" y2="100" stroke="#C2571B" stroke-width="3" marker-end="url(#kv2)"/>
<circle cx="200" cy="90" r="4" fill="#1D7A4F"/><circle cx="240" cy="100" r="4" fill="#1D7A4F"/>
<text x="80" y="140" font-size="11.5" fill="#5246D9">ship A's path</text>
<text x="330" y="65" font-size="11.5" fill="#C2571B">ship B's path</text>
<text x="200" y="75" font-size="11" fill="#1D7A4F">paths CROSS — but do the ships arrive at the SAME time?</text>
<defs><marker id="kv2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1A2030"/></marker></defs>
</svg>
<div class="figcap">Two paths crossing on paper is NOT enough for a collision — both ships' $\\mathbf{i}$ AND $\\mathbf{j}$ components must match at the exact SAME value of $t$.</div></div>
<div class="example"><div class="exhead">Worked example 6 — collision problem</div>
<p>At noon, ship $A$ is at $(2\\mathbf{i}+3\\mathbf{j})$ km moving with velocity $(4\\mathbf{i}+\\mathbf{j})$ km/h; ship $B$ is at $(10\\mathbf{i}-\\mathbf{j})$ km with velocity $(2\\mathbf{i}+2\\mathbf{j})$ km/h. Show they collide, and find the time and place.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Write each position vector as a function of $t$:</span> $$\\mathbf{r}_A=(2+4t)\\mathbf{i}+(3+t)\\mathbf{j} \\qquad \\mathbf{r}_B=(10+2t)\\mathbf{i}+(-1+2t)\\mathbf{j}$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Equate the $\\mathbf{i}$-components</span> to find a candidate collision time: $2+4t=10+2t \\Rightarrow 2t=8 \\Rightarrow t=4$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Check the $\\mathbf{j}$-components AT THAT SAME $t$</span> — this step is compulsory, not optional: $3+4=7$ (ship $A$) and $-1+2(4)=7$ (ship $B$). Both equal 7 ✓.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Since BOTH components match at the same $t$,</span> a genuine collision occurs at $t=4$ h (4 pm), at position $\\mathbf{r}=18\\mathbf{i}+7\\mathbf{j}$ km.</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> solving only the $\\mathbf{i}$-equation and declaring "collision" — you MUST verify the $\\mathbf{j}$-components also match at that same $t$. If they don't, the paths cross on paper but the ships pass through that point at different times — no collision.</div>

<h2>7. Dividing a line in a given ratio</h2>
<div class="example"><div class="exhead">Worked example 7</div>
<p>$\\overrightarrow{OA}=\\mathbf{a}$, $\\overrightarrow{OB}=\\mathbf{b}$. $P$ divides $AB$ such that $AP:PB=2:1$. Find $\\overrightarrow{OP}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Build a route to $P$ via $A$:</span> $\\overrightarrow{OP}=\\overrightarrow{OA}+\\overrightarrow{AP}$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">$AP$ is a fraction of the whole $\\overrightarrow{AB}$:</span> since $AP:PB=2:1$, $P$ is $\\tfrac23$ of the way from $A$ to $B$, so $\\overrightarrow{AP}=\\tfrac23\\overrightarrow{AB}=\\tfrac23(\\mathbf{b}-\\mathbf{a})$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Combine:</span> $$\\overrightarrow{OP}=\\mathbf{a}+\\tfrac23(\\mathbf{b}-\\mathbf{a})=\\tfrac13\\mathbf{a}+\\tfrac23\\mathbf{b}=\\frac{\\mathbf{a}+2\\mathbf{b}}{3}$$</span></div>
</div></div>
`,
quiz:[
{lvl:'basic',q:"Find the magnitude of $3\\mathbf{i}+4\\mathbf{j}$.",
a:"$5$",
sol:"Step 1 — apply the magnitude formula (Pythagoras): $|v|=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}$. Step 2 — simplify: $5$ — the classic 3-4-5 right triangle."},
{lvl:'inter',q:"Find the unit vector in the direction of $5\\mathbf{i}-12\\mathbf{j}$.",
a:"$\\dfrac{5\\mathbf{i}-12\\mathbf{j}}{13}$",
sol:"Step 1 — find the magnitude: $|v|=\\sqrt{25+144}=\\sqrt{169}=13$. Step 2 — divide EVERY component by the magnitude to get a length-1 vector pointing the same way: $\\hat{v}=\\dfrac{5}{13}\\mathbf{i}-\\dfrac{12}{13}\\mathbf{j}$."},
{lvl:'inter',q:"$A(1,2)$, $B(4,8)$, $C(6,12)$. Show that $A$, $B$, $C$ are collinear.",
a:"$\\overrightarrow{AB}=(3,6)$, $\\overrightarrow{BC}=(2,4)$; $\\overrightarrow{AB}=1.5\\overrightarrow{BC}$ → collinear",
sol:"Step 1 — find both displacement vectors (end minus start): $\\overrightarrow{AB}=3\\mathbf{i}+6\\mathbf{j}$; $\\overrightarrow{BC}=2\\mathbf{i}+4\\mathbf{j}$. Step 2 — check for a scalar multiple: $\\overrightarrow{AB}=\\tfrac32\\overrightarrow{BC}$, confirming they're parallel. Step 3 — since they share point $B$, parallel + shared point means $A,B,C$ all lie on one straight line."},
{lvl:'inter',q:"$\\mathbf{p}=2\\mathbf{i}+\\lambda\\mathbf{j}$ and $\\mathbf{q}=6\\mathbf{i}+9\\mathbf{j}$ are parallel. Find $\\lambda$.",
a:"$\\lambda=3$",
sol:"Step 1 — parallel means $\\mathbf{p}=k\\mathbf{q}$ for some scalar $k$. Step 2 — match the $\\mathbf{i}$-components: $2=6k \\Rightarrow k=\\tfrac13$. Step 3 — apply the SAME $k$ to the $\\mathbf{j}$-components: $\\lambda=9k=9\\times\\tfrac13=3$."},
{lvl:'inter',q:"A particle starts at $3\\mathbf{i}-\\mathbf{j}$ and moves with velocity $2\\mathbf{i}+5\\mathbf{j}$ (m, s). Find its position vector after 4 s and its distance from the origin then.",
a:"$\\mathbf{r}=11\\mathbf{i}+19\\mathbf{j}$; distance $\\sqrt{482}\\approx22.0$ m",
sol:"Step 1 — apply $\\mathbf{r}=\\mathbf{a}+t\\mathbf{v}$ with $t=4$: $\\mathbf{r}=(3+8)\\mathbf{i}+(-1+20)\\mathbf{j}=11\\mathbf{i}+19\\mathbf{j}$. Step 2 — distance from the origin is the magnitude of $\\mathbf{r}$: $\\sqrt{11^2+19^2}=\\sqrt{121+361}=\\sqrt{482}\\approx22.0$ m."},
{lvl:'adv',q:"$\\overrightarrow{OA}=\\mathbf{a}$, $\\overrightarrow{OB}=\\mathbf{b}$. $P$ divides $AB$ such that $AP:PB=2:1$. Find $\\overrightarrow{OP}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
a:"$\\overrightarrow{OP}=\\dfrac{\\mathbf{a}+2\\mathbf{b}}{3}$",
sol:"Step 1 — route to $P$ via $A$: $\\overrightarrow{OP}=\\overrightarrow{OA}+\\overrightarrow{AP}$. Step 2 — since $AP:PB=2:1$, $P$ is $\\tfrac23$ of the way from $A$ to $B$: $\\overrightarrow{AP}=\\tfrac23\\overrightarrow{AB}=\\tfrac23(\\mathbf{b}-\\mathbf{a})$. Step 3 — combine and simplify: $\\overrightarrow{OP}=\\mathbf{a}+\\tfrac23(\\mathbf{b}-\\mathbf{a})=\\tfrac13\\mathbf{a}+\\tfrac23\\mathbf{b}=\\dfrac{\\mathbf{a}+2\\mathbf{b}}{3}$."},
{lvl:'adv',q:"At noon, ship $A$ is at $(2\\mathbf{i}+3\\mathbf{j})$ km moving with velocity $(4\\mathbf{i}+\\mathbf{j})$ km/h; ship $B$ is at $(10\\mathbf{i}-\\mathbf{j})$ km with velocity $(2\\mathbf{i}+2\\mathbf{j})$ km/h. Show they collide, and find the time and place.",
a:"Collide at 4 pm at $(18\\mathbf{i}+7\\mathbf{j})$ km",
sol:"Step 1 — write position as a function of $t$ for each ship: $\\mathbf{r}_A=(2+4t)\\mathbf{i}+(3+t)\\mathbf{j}$; $\\mathbf{r}_B=(10+2t)\\mathbf{i}+(-1+2t)\\mathbf{j}$. Step 2 — equate $\\mathbf{i}$-components: $2+4t=10+2t \\Rightarrow t=4$. Step 3 — CHECK the $\\mathbf{j}$-components at this same $t$ (compulsory step): $3+4=7$ and $-1+2(4)=7$ — both match ✓. Step 4 — since both components agree at the same $t$, a genuine collision occurs at $t=4$ h (4 pm) at position $18\\mathbf{i}+7\\mathbf{j}$ km."}
]};


// ============================================================ PHYSICS CH 1: MEASUREMENT
PHYSICS[0] = {
title:"Physical Quantities & Measurement",
syl:"0625 §1.1 — Physical quantities and measurement techniques",
yt:["vernier caliper reading explained from zero","micrometer screw gauge explained","density experiment water displacement","scalars and vectors explained simply"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>A pawnshop in Petaling Street is offered a "gold" ring. Pure gold has density $19.3\\text{ g/cm}^3$ — a fake (brass-coated) ring will read noticeably lower. The shopkeeper can't melt the ring down to check, but there's a clean physics trick: measure its mass on a balance, dunk it in a measuring cylinder to find its volume by how much the water level rises, then compute $\\rho=\\dfrac{m}{V}$. Get an unexpected number, and the ring is fake. This chapter is about doing exactly this kind of measurement carefully and correctly.</p></div>

<h2>1. Base quantities and units — the SI system</h2>
<p>All physical quantities in this course are built from a small set of <b>base quantities</b>, each with its own SI unit:</p>
<div class="formula">Length — metre (m) &nbsp;•&nbsp; Mass — kilogram (kg) &nbsp;•&nbsp; Time — second (s) &nbsp;•&nbsp; Current — ampere (A) &nbsp;•&nbsp; Temperature — kelvin (K)</div>
<p>Everything else (speed, force, density, energy...) is a <b>derived quantity</b>, built by combining base units, e.g. speed $=\\dfrac{\\text{distance}}{\\text{time}}$ has unit m/s.</p>
<div class="mistake"><b>Common mistake:</b> mixing units within one calculation (e.g. cm with m, or g with kg) — ALWAYS convert everything to consistent (usually SI base) units before calculating, not after.</div>

<h2>2. Scalars and vectors</h2>
<p>A <b>scalar</b> has magnitude only (e.g. mass, distance, speed, temperature). A <b>vector</b> has magnitude AND direction (e.g. displacement, velocity, force, acceleration).</p>
<div class="example"><div class="exhead">Worked example 1 — combining perpendicular vectors</div>
<p>A plane flies $400$ km east then $300$ km north. Find its displacement.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">The two legs are perpendicular</span> — sketch a right triangle with legs $400$ and $300$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Apply Pythagoras for the resultant magnitude:</span> $$\\sqrt{400^2+300^2}=\\sqrt{160000+90000}=\\sqrt{250000}=500\\text{ km}$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Find the direction</span> using $\\tan^{-1}$: $$\\tan^{-1}\\left(\\frac{300}{400}\\right)=36.9° \\text{ north of east}$$</span></div>
</div>
<p><b>Note the distinction:</b> total DISTANCE flown is $400+300=700$ km (a scalar, just adds up), but the DISPLACEMENT (a vector, straight-line shortcut) is only $500$ km — always smaller unless the path is a straight line.</p></div>

<h2>3. Measuring length precisely — vernier calipers and micrometers</h2>
<div class="fig">
<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg">
<rect x="30" y="50" width="380" height="18" fill="#EEECFC" stroke="#5246D9"/>
<line x1="30" y1="50" x2="30" y2="68" stroke="#5246D9"/>
<line x1="70" y1="50" x2="70" y2="68" stroke="#5246D9"/>
<line x1="110" y1="50" x2="110" y2="68" stroke="#5246D9"/>
<text x="25" y="45" font-size="10">0</text><text x="65" y="45" font-size="10">1</text><text x="105" y="45" font-size="10">2 cm (main scale)</text>
<rect x="82" y="68" width="150" height="14" fill="#FBEFE6" stroke="#C2571B"/>
<text x="85" y="95" font-size="10" fill="#C2571B">sliding vernier scale — find where a line matches the main scale</text>
</svg>
<div class="figcap">Reading a vernier caliper: (1) read the main scale at the ZERO of the vernier (gives whole + one decimal), (2) find which vernier line aligns EXACTLY with a main-scale line (gives the next decimal), (3) add the two readings.</div></div>
<p>A <b>micrometer screw gauge</b> works similarly but for very small objects (e.g. wire diameter): a main scale (whole mm and half-mm) plus a rotating thimble scale (hundredths of a mm) read together. Both instruments must be checked for <b>zero error</b> first — close the jaws/gap on nothing and read; if it doesn't read exactly zero, subtract that zero error from every subsequent reading.</p>

<h2>4. Measuring time — why we time MANY oscillations</h2>
<div class="example"><div class="exhead">Worked example 2</div>
<p>Why do we time 30 oscillations of a pendulum instead of 1?</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Human reaction time is a fixed error</span> — roughly $0.2$ s — no matter how long the thing you're timing takes.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Spread that same fixed error over many swings:</span> timing 1 swing of $\\sim2$ s gives a percentage error of $\\dfrac{0.2}{2}=10\\%$. Timing 30 swings ($\\sim60$ s) gives the SAME $0.2$ s absolute error, but now as a percentage of a much bigger number: $\\dfrac{0.2}{60}\\approx0.3\\%$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Divide the total time by 30</span> to get an accurate period per swing — the percentage error has shrunk roughly 30-fold.</span></div>
</div></div>
<div class="note"><b>Exam tip:</b> this "measure many, divide by the count" trick applies to ANY quantity too small to measure accurately once — thickness of one sheet of paper (measure a stack of 100), mass of one grain of rice, etc.</div>

<h2>5. Density — mass packed into a given volume</h2>
<div class="formula">$$\\rho = \\frac{m}{V}$$</div>
<p><b>Regular shapes</b> (cubes, cylinders): measure dimensions with a ruler/caliper and calculate $V$ from a geometry formula. <b>Irregular shapes</b> (a stone, a ring): use the <b>displacement method</b>.</p>
<div class="fig">
<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
<rect x="60" y="30" width="80" height="140" fill="none" stroke="#5246D9" stroke-width="2"/>
<rect x="62" y="90" width="76" height="78" fill="#EEECFC"/>
<text x="20" y="94" font-size="11" fill="#5246D9">V₁</text>
<line x1="55" y1="90" x2="65" y2="90" stroke="#5246D9"/>
<rect x="250" y="30" width="80" height="140" fill="none" stroke="#C2571B" stroke-width="2"/>
<rect x="252" y="60" width="76" height="108" fill="#FBEFE6"/>
<ellipse cx="290" cy="80" rx="18" ry="12" fill="#888"/>
<text x="210" y="64" font-size="11" fill="#C2571B">V₂</text>
<line x1="245" y1="60" x2="255" y2="60" stroke="#C2571B"/>
<text x="150" y="100" font-size="13" fill="#1A2030">object added →</text>
</svg>
<div class="figcap">Volume of the irregular object $=V_2-V_1$ (the rise in water level). Read the meniscus at eye level to avoid parallax error.</div></div>
<div class="example"><div class="exhead">Worked example 3</div>
<p>A block measures $4\\text{ cm}\\times5\\text{ cm}\\times2\\text{ cm}$ and has mass $108$ g. Find its density and state whether it floats in water.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find the volume</span> (regular shape — multiply dimensions): $V=4\\times5\\times2=40\\text{ cm}^3$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Apply the density formula:</span> $\\rho=\\dfrac{108}{40}=2.7\\text{ g/cm}^3$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Compare to water's density</span> ($1.0\\text{ g/cm}^3$): since $2.7>1.0$, the block SINKS. An object floats only if its density is LESS than the liquid's.</span></div>
</div></div>

<h2>6. Mass vs. weight — a classic confusion</h2>
<div class="formula">Mass ($m$, kg): amount of matter — a SCALAR, measured with a balance, the SAME everywhere in the universe. Weight ($W=mg$, N): the gravitational FORCE on that mass — a VECTOR, measured with a force meter (spring balance), and SMALLER on the Moon (where $g$ is smaller) even though mass hasn't changed.</div>
`,
quiz:[
{lvl:'basic',q:"Convert $2.5\\text{ g/cm}^3$ to $\\text{kg/m}^3$.",
a:"$2500\\text{ kg/m}^3$",
sol:"Step 1 — recall the conversion factor: $1\\text{ g/cm}^3=1000\\text{ kg/m}^3$ (because 1 g = 0.001 kg and 1 cm³ = 0.000001 m³, and dividing those conversions gives a net factor of 1000). Step 2 — apply it: $2.5\\times1000=2500\\text{ kg/m}^3$."},
{lvl:'basic',q:"Why do we time 30 oscillations of a pendulum instead of 1?",
a:"To reduce the percentage error from reaction time",
sol:"Step 1 — human reaction time (~0.2 s) is a fixed error, whatever you're timing. Step 2 — spread over 30 swings, that same 0.2 s becomes a much smaller fraction of the total time measured: $\\dfrac{0.2}{30\\times(\\text{one period})}$, drastically shrinking the PERCENTAGE error compared to timing just one swing."},
{lvl:'inter',q:"A block measures $4\\text{ cm}\\times5\\text{ cm}\\times2\\text{ cm}$ and has mass $108$ g. Find its density and state whether it floats in water.",
a:"$2.7\\text{ g/cm}^3$; sinks",
sol:"Step 1 — find the volume: $V=4\\times5\\times2=40\\text{ cm}^3$. Step 2 — apply $\\rho=\\dfrac{m}{V}=\\dfrac{108}{40}=2.7\\text{ g/cm}^3$. Step 3 — compare to water ($1.0\\text{ g/cm}^3$): since the block's density is greater, it sinks."},
{lvl:'inter',q:"State two differences between mass and weight.",
a:"Mass: scalar, kg, constant everywhere. Weight: vector (force), N, varies with gravitational field",
sol:"Step 1 — mass is the amount of matter in an object, measured in kg with a balance — it is a SCALAR and stays the same anywhere in the universe. Step 2 — weight is the gravitational FORCE on that mass ($W=mg$), measured in newtons with a force meter — it is a VECTOR and CHANGES depending on the local gravitational field strength (e.g. smaller on the Moon)."},
{lvl:'inter',q:"A plane flies $400$ km east then $300$ km north. Find its displacement.",
a:"$500$ km at $37°$ north of east",
sol:"Step 1 — the two legs are perpendicular, forming a right triangle: apply Pythagoras: $\\sqrt{400^2+300^2}=\\sqrt{250000}=500$ km. Step 2 — find the direction with $\\tan^{-1}$: $\\tan^{-1}\\left(\\dfrac{300}{400}\\right)\\approx36.9°$ north of east. Step 3 — note: total DISTANCE travelled is $400+300=700$ km, but displacement (the straight-line vector) is only $500$ km."},
{lvl:'adv',q:"Describe how to find the density of an irregular stone.",
a:"Mass by balance; volume by water displacement; $\\rho=m/V$",
sol:"Step 1 — measure the mass $m$ using a balance. Step 2 — part-fill a measuring cylinder with water and record the level $V_1$. Step 3 — lower the stone in fully (submerged, not touching the sides) and record the new level $V_2$. Step 4 — the stone's volume is $V_2-V_1$ (the rise caused purely by the stone displacing its own volume of water). Step 5 — compute density: $\\rho=\\dfrac{m}{V_2-V_1}$. Reading the meniscus at eye level avoids parallax error."},
{lvl:'adv',q:"A measuring cylinder reads $48.0\\text{ cm}^3$ of liquid of mass $38.4$ g. 20 identical ball bearings (total mass $54.0$ g) are added and the level rises to $54.0\\text{ cm}^3$. Find the density of the liquid AND of the bearing metal.",
a:"Liquid $0.80\\text{ g/cm}^3$; metal $9.0\\text{ g/cm}^3$",
sol:"Step 1 — liquid density needs only the first reading: $\\rho_{\\text{liquid}}=\\dfrac{38.4}{48.0}=0.80\\text{ g/cm}^3$. Step 2 — the bearings' TOTAL volume is the rise in level: $54.0-48.0=6.0\\text{ cm}^3$ for all 20 balls together. Step 3 — bearing metal density uses the bearings' own mass and this combined volume: $\\rho_{\\text{metal}}=\\dfrac{54.0}{6.0}=9.0\\text{ g/cm}^3$. Measuring 20 at once (rather than 1 tiny ball) massively improves accuracy — same 'measure many, divide' trick as the pendulum."}
]};


// ============================================================ PHYSICS CH 3: FORCES & MOMENTUM
PHYSICS[2] = {
title:"Forces & Momentum",
syl:"0625 §1.3, §1.5, §1.6 — Mass/weight, forces, momentum",
yt:["newton's laws explained from zero","hooke's law explained simply","principle of moments explained","momentum conservation collisions explained"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>Car safety engineers design crumple zones and airbags for a reason grounded entirely in this chapter's physics. In a crash, a car's momentum must drop to zero either way — but a rigid car stops in a fraction of a second (tiny $\\Delta t$), while a crumple zone stretches that same momentum-change over a longer time. Since force $=\\dfrac{\\text{change in momentum}}{\\text{time}}$, a LONGER stopping time means a SMALLER force on the passengers. This single idea — connecting force, momentum, and time — is the heart of the whole chapter.</p></div>

<h2>1. Newton's three laws — the rules for how forces cause motion</h2>
<div class="formula">
<b>1st law:</b> an object stays at rest or moving at constant velocity UNLESS acted on by a resultant (unbalanced) force.<br>
<b>2nd law:</b> $$F=ma$$ a resultant force causes acceleration in its own direction, proportional to the force and inversely proportional to mass.<br>
<b>3rd law:</b> every force has an equal and opposite reaction force, acting on the OTHER object (never cancelling, since they act on different bodies).
</div>
<div class="example"><div class="exhead">Worked example 1</div>
<p>A resultant force of $12$ N acts on a $4$ kg mass. Find the acceleration. What is the object's weight on Earth?</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Apply Newton's second law:</span> $a=\\dfrac{F}{m}=\\dfrac{12}{4}=3\\text{ m/s}^2$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Weight is a SEPARATE force</span> ($W=mg$, always present due to gravity, distinct from the given resultant): $W=4\\times9.8=39.2$ N.</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> weight and "resultant force" are not automatically the same thing — weight is only one of possibly several forces acting; the resultant is whatever is left after all forces combine.</div>

<h2>2. Hooke's law — springs stretch proportionally (until they don't)</h2>
<div class="formula">$$F=kx$$ (within the "limit of proportionality"), where $k$ is the spring constant (N/m) and $x$ is the extension.</div>
<div class="example"><div class="exhead">Worked example 2</div>
<p>A spring extends $4$ cm under a $10$ N load. Find $k$ and the extension under $25$ N.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Convert to consistent units and find $k$:</span> $4\\text{ cm}=0.04$ m; $k=\\dfrac{F}{x}=\\dfrac{10}{0.04}=250$ N/m.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Rearrange for the new extension:</span> $x=\\dfrac{F}{k}=\\dfrac{25}{250}=0.1\\text{ m}=10\\text{ cm}$.</span></div>
</div>
<p>Sense-check: force went up $2.5\\times$ ($10\\to25$), and extension went up $2.5\\times$ too ($4\\to10$ cm) — exactly proportional, as Hooke's law demands.</p></div>

<h2>3. Moments — the turning effect of a force</h2>
<div class="formula">$$\\text{moment} = F\\times d$$ (force times PERPENDICULAR distance from the pivot). Principle of moments: for equilibrium, sum of clockwise moments $=$ sum of anticlockwise moments.</div>
<div class="fig">
<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg">
<line x1="40" y1="80" x2="420" y2="80" stroke="#5246D9" stroke-width="6"/>
<polygon points="230,80 215,110 245,110" fill="#1A2030"/>
<line x1="120" y1="80" x2="120" y2="40" stroke="#C2571B" stroke-width="2" marker-end="url(#kf)"/>
<text x="90" y="30" font-size="12" fill="#C2571B">300 N</text>
<line x1="380" y1="80" x2="380" y2="40" stroke="#1D7A4F" stroke-width="2" marker-end="url(#kf)"/>
<text x="360" y="30" font-size="12" fill="#1D7A4F">F = ?</text>
<text x="150" y="125" font-size="11">1.2 m</text>
<text x="330" y="125" font-size="11">2 m</text>
<defs><marker id="kf" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto"><path d="M0,6 L6,6 L3,0 Z" fill="#1A2030"/></marker></defs>
</svg>
<div class="figcap">Balancing a plank: clockwise moment (left load) must equal anticlockwise moment (right force) about the pivot.</div></div>
<div class="example"><div class="exhead">Worked example 3</div>
<p>A uniform $4$ m plank (weight $200$ N) is pivoted at its centre. A $300$ N load hangs $1.2$ m from the pivot. What force applied at the far end ($2$ m) balances it?</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">The plank's own weight acts at the pivot</span> (its centre, since it's uniform) — zero distance means zero moment, so it doesn't enter the balance.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Set clockwise = anticlockwise moments:</span> $$F\\times2 = 300\\times1.2$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Solve:</span> $F=\\dfrac{360}{2}=180$ N.</span></div>
</div></div>

<h2>4. Momentum — mass in motion, and why airbags work</h2>
<div class="formula">$$p=mv \\qquad F=\\frac{\\Delta p}{\\Delta t}$$ (Newton's second law, in its more general momentum form)</div>
<div class="example"><div class="exhead">Worked example 4 — the scenario, in numbers</div>
<p>A $1500$ kg car travelling at $20$ m/s brakes to rest in $5$ s. Find the momentum change and average braking force.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find the momentum change:</span> $\\Delta p=m(v-u)=1500(0-20)=-30\\,000\\text{ kg·m/s}$ (size $30\\,000$).</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Divide by the TIME taken</span> to get the force: $F=\\dfrac{\\Delta p}{\\Delta t}=\\dfrac{30\\,000}{5}=6000$ N.</span></div>
</div>
<p>If the SAME momentum change happened in $0.5$ s instead (a rigid, non-crumpling collision), the force would be $\\dfrac{30\\,000}{0.5}=60\\,000$ N — ten times bigger. Longer stopping time genuinely means smaller force.</p></div>

<h2>5. Conservation of momentum — collisions</h2>
<div class="formula">Total momentum before $=$ total momentum after, PROVIDED no external force acts. This holds for EVERY collision. Kinetic energy is only conserved in <b>elastic</b> collisions — most real collisions (like this one) are <b>inelastic</b>, and KE is "lost" to heat, sound, or deformation.</div>
<div class="example"><div class="exhead">Worked example 5</div>
<p>A $0.05$ kg bullet travelling at $400$ m/s embeds in a $1.95$ kg wooden block hanging at rest. Find the block's speed just after impact, and the kinetic energy lost.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Momentum before = momentum after</span> (bullet+block now move together, combined mass $2.00$ kg): $$0.05\\times400 = 2.00\\times v \\;\\Rightarrow\\; v=\\frac{20}{2.00}=10\\text{ m/s}$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Find KE before</span> (bullet only, block at rest contributes nothing): $\\tfrac12(0.05)(400)^2=4000$ J.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Find KE after</span> (combined mass, shared velocity): $\\tfrac12(2)(10)^2=100$ J.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Subtract:</span> $4000-100=3900$ J lost — converted to heat and deformation as the bullet embeds.</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> assuming kinetic energy is always conserved, like momentum. It ISN'T — momentum conservation is universal, energy conservation only holds if you count ALL forms of energy (here, most became heat, not just KE).</div>

<h2>6. Circular motion — accelerating without speeding up</h2>
<div class="example"><div class="exhead">Worked example 6</div>
<p>Explain why a satellite in circular orbit at constant SPEED is accelerating, and name the force responsible.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Recall: acceleration is change of VELOCITY,</span> a vector — and velocity includes direction, not just speed.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">In a circle, direction changes continuously</span> even while speed stays fixed — so velocity IS changing, meaning there IS acceleration, pointing toward the centre of the circle.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">The force responsible</span> is Earth's gravitational pull, which supplies this centre-pointing ("centripetal") force.</span></div>
</div></div>
`,
quiz:[
{lvl:'basic',q:"Find the weight of a $3$ kg bag on Earth ($g=9.8$ N/kg).",
a:"$29.4$ N",
sol:"Step 1 — apply $W=mg$. Step 2: $W=3\\times9.8=29.4$ N."},
{lvl:'inter',q:"A resultant force of $12$ N acts on a $4$ kg mass. Find the acceleration. What is the object's weight on Earth?",
a:"$3\\text{ m/s}^2$; $39.2$ N",
sol:"Step 1 — Newton's second law: $a=\\dfrac{F}{m}=\\dfrac{12}{4}=3\\text{ m/s}^2$. Step 2 — weight is a separate, always-present force: $W=mg=4\\times9.8=39.2$ N."},
{lvl:'inter',q:"A spring extends $4$ cm under a $10$ N load. Find $k$ and the extension under $25$ N (within the limit of proportionality).",
a:"$k=250$ N/m; $10$ cm",
sol:"Step 1 — convert units and find $k$: $x=0.04$ m, so $k=\\dfrac{F}{x}=\\dfrac{10}{0.04}=250$ N/m. Step 2 — rearrange Hooke's law for the new force: $x=\\dfrac{F}{k}=\\dfrac{25}{250}=0.1$ m $=10$ cm."},
{lvl:'inter',q:"A uniform $4$ m plank (weight $200$ N) is pivoted at its centre. A $300$ N load hangs $1.2$ m from the pivot. What force applied at the far end ($2$ m) balances it?",
a:"$180$ N",
sol:"Step 1 — the plank's weight acts through the pivot itself (uniform plank, centred pivot), so it contributes zero moment. Step 2 — balance clockwise and anticlockwise moments: $F\\times2=300\\times1.2=360$. Step 3 — solve: $F=180$ N."},
{lvl:'adv',q:"A $1500$ kg car travelling at $20$ m/s brakes to rest in $5$ s. Find the momentum change and average braking force.",
a:"$\\Delta p=30\\,000$ kg·m/s; $F=6000$ N",
sol:"Step 1 — find the momentum change: $\\Delta p=m(v-u)=1500(0-20)=-30\\,000$ kg·m/s (magnitude $30\\,000$). Step 2 — divide by the time to get force: $F=\\dfrac{\\Delta p}{\\Delta t}=\\dfrac{30\\,000}{5}=6000$ N, opposing the car's motion."},
{lvl:'adv',q:"Explain why a satellite in circular orbit at constant speed is accelerating, and name the force responsible.",
a:"Velocity direction constantly changes; gravity provides the centripetal force",
sol:"Step 1 — acceleration is defined as the rate of change of VELOCITY, a vector quantity that includes direction as well as size. Step 2 — even at constant speed, a satellite's DIRECTION changes continuously as it goes around the circle, so its velocity is genuinely changing — meaning it is accelerating, toward the centre of the orbit. Step 3 — this centre-pointing force is supplied by Earth's gravitational pull."},
{lvl:'adv',q:"A $0.05$ kg bullet travelling at $400$ m/s embeds in a $1.95$ kg wooden block hanging at rest. Find the block's speed just after impact, and the kinetic energy lost.",
a:"$10$ m/s; $3900$ J lost",
sol:"Step 1 — apply conservation of momentum (bullet+block move together after, combined mass $2.00$ kg): $0.05\\times400=2.00\\times v \\Rightarrow v=10$ m/s. Step 2 — find KE before (bullet only): $\\tfrac12(0.05)(400)^2=4000$ J. Step 3 — find KE after (combined mass): $\\tfrac12(2)(10)^2=100$ J. Step 4 — subtract to find the loss: $4000-100=3900$ J, converted to heat and deformation. Momentum is ALWAYS conserved in collisions; kinetic energy only in elastic ones."}
]};


// ============================================================ PHYSICS CH 4: ENERGY, WORK & POWER
PHYSICS[3] = {
title:"Energy, Work & Power",
syl:"0625 §1.7 — Energy, work and power",
yt:["work done and energy explained from zero","kinetic and potential energy explained","efficiency and power explained physics","roller coaster physics energy conservation"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>On a roller coaster at Sunway Lagoon, the chain-lift drags the car slowly up to the highest point — doing WORK against gravity, storing energy as <b>gravitational potential energy (GPE)</b>. Then gravity takes over: as the car plunges down, that stored GPE converts into <b>kinetic energy (KE)</b>, and the car reaches its maximum speed at the LOWEST point of the track. This back-and-forth GPE $\\leftrightarrow$ KE exchange, and how fast the whole system can do work (power), is what this chapter is about.</p></div>

<h2>1. Work done — force causing movement</h2>
<div class="formula">$$W = Fd$$ (force in the SAME direction as the displacement, distance in metres, work in joules). Work done equals energy transferred.</div>
<div class="example"><div class="exhead">Worked example 1</div>
<p>How much work is done pushing a box $4$ m with a force of $50$ N?</p>
<div class="steps"><div class="st"><span class="n">1</span><span>$W=Fd=50\\times4=200$ J — this is also the energy transferred to (or converted while moving) the box.</span></div></div></div>

<h2>2. Kinetic energy — energy of motion</h2>
<div class="formula">$$E_k=\\tfrac12mv^2$$</div>
<div class="example"><div class="exhead">Worked example 2</div>
<p>A $900$ kg car travels at $25$ m/s. Find its kinetic energy.</p>
<div class="steps"><div class="st"><span class="n">1</span><span>$E_k=\\tfrac12(900)(25)^2=\\tfrac12(900)(625)=281\\,250$ J $\\approx280$ kJ.</span></div></div>
<p><b>Road-safety note:</b> speed is SQUARED in this formula — doubling your speed doesn't double your kinetic energy, it QUADRUPLES it. A crash at 60 km/h carries 4× the energy of one at 30 km/h, not 2×.</p></div>

<h2>3. Gravitational potential energy — energy of height</h2>
<div class="formula">$$E_p=mgh$$</div>
<div class="fig">
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg">
<path d="M 40 30 L 40 170 L 200 170 Q 260 170 260 110 Q 260 60 340 60 L 440 100" fill="none" stroke="#5246D9" stroke-width="4"/>
<circle cx="40" cy="30" r="8" fill="#C2571B"/>
<text x="10" y="20" font-size="12" fill="#C2571B">top: all GPE</text>
<circle cx="200" cy="170" r="8" fill="#1D7A4F"/>
<text x="150" y="195" font-size="12" fill="#1D7A4F">bottom: all KE (max speed)</text>
<line x1="30" y1="30" x2="30" y2="170" stroke="#888" stroke-dasharray="3 3"/>
<text x="5" y="105" font-size="11" fill="#555">h</text>
</svg>
<div class="figcap">At the top, energy is entirely GPE (relative to the lowest point); at the bottom, all of that GPE has converted to KE (ignoring friction/air resistance) — this is energy conservation in action.</div></div>
<div class="example"><div class="exhead">Worked example 3</div>
<p>A pendulum bob is released from a height of $0.10$ m above its lowest point. Find its maximum speed (ignore air resistance).</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Apply conservation of energy:</span> ALL the GPE lost converts to KE at the lowest point (no other energy losses assumed): $$mgh=\\tfrac12mv^2$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Notice mass cancels</span> — divide both sides by $m$: $gh=\\tfrac12v^2$.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Rearrange for $v$:</span> $$v=\\sqrt{2gh}=\\sqrt{2\\times9.8\\times0.10}=\\sqrt{1.96}=1.4\\text{ m/s}$$</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> forgetting that mass cancels in this type of problem — you do NOT need to know the mass to find the speed at the bottom of a fall/swing, since both GPE and KE scale with mass identically.</div>

<h2>4. Power — how FAST energy is transferred</h2>
<div class="formula">$$P=\\frac{W}{t}=\\frac{E}{t} \\qquad(\\text{unit: watt, W} = \\text{J/s})$$</div>
<div class="example"><div class="exhead">Worked example 4</div>
<p>An electric kettle transfers $540\\,000$ J in $4$ minutes. Find its power in kW.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Convert time to seconds</span> (SI units): $4$ min $=240$ s.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Apply the formula:</span> $P=\\dfrac{540\\,000}{240}=2250$ W $=2.25$ kW.</span></div>
</div></div>

<h2>5. Efficiency — no machine is perfect</h2>
<div class="formula">$$\\text{efficiency} = \\frac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$$ ALWAYS less than $100\\%$ for a real machine — the rest is wasted, almost always as heat (and sometimes sound).</div>
<div class="fig">
<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="60" width="60" height="40" fill="#1A2030"/>
<text x="25" y="55" font-size="11">input</text>
<path d="M 80 75 L 200 45" stroke="#1D7A4F" stroke-width="18" fill="none"/>
<text x="210" y="45" font-size="12" fill="#1D7A4F">useful output</text>
<path d="M 80 90 L 200 130" stroke="#C2571B" stroke-width="8" fill="none"/>
<text x="210" y="135" font-size="12" fill="#C2571B">wasted (heat/sound)</text>
</svg>
<div class="figcap">Energy input always splits between useful output and waste — efficiency measures what fraction made it to "useful."</div></div>
<div class="example"><div class="exhead">Worked example 5</div>
<p>A motor lifts a $50$ kg load through $12$ m in $20$ s using $8000$ J of electrical energy. Find (a) the useful work done, (b) the useful power output, (c) the efficiency.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">(a) Useful work</span> = energy gained as GPE by the load: $mgh=50\\times9.8\\times12=5880$ J.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">(b) Power output:</span> $P=\\dfrac{5880}{20}=294$ W.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">(c) Efficiency:</span> $\\dfrac{5880}{8000}\\times100=73.5\\%$.</span></div>
</div>
<p>The missing $8000-5880=2120$ J was wasted, mostly as heat in the motor's moving parts — useful output can never exceed the energy put in.</p></div>

<h2>6. Renewable vs. non-renewable energy sources</h2>
<div class="note"><b>Wind power</b> — advantage: renewable, no CO₂ emitted during operation. Disadvantage: unreliable (depends on wind speed, so needs backup or storage), and each turbine's output is small compared to a fossil-fuel power station of similar size.</div>
`,
quiz:[
{lvl:'basic',q:"How much work is done pushing a box $4$ m with a force of $50$ N?",
a:"$200$ J",
sol:"Step 1 — apply $W=Fd$. Step 2: $W=50\\times4=200$ J."},
{lvl:'inter',q:"A $900$ kg car travels at $25$ m/s. Find its kinetic energy.",
a:"$281\\,250$ J $\\approx280$ kJ",
sol:"Step 1 — apply $E_k=\\tfrac12mv^2$. Step 2: $\\tfrac12(900)(25)^2=\\tfrac12(900)(625)=281\\,250$ J. Note squaring the speed: doubling speed would quadruple this value."},
{lvl:'inter',q:"An electric kettle transfers $540\\,000$ J in $4$ minutes. Find its power in kW.",
a:"$2.25$ kW",
sol:"Step 1 — convert time to seconds: $4\\times60=240$ s. Step 2 — apply $P=\\dfrac{E}{t}=\\dfrac{540\\,000}{240}=2250$ W. Step 3 — convert to kW: $2.25$ kW."},
{lvl:'inter',q:"A pendulum bob is released from a height of $0.10$ m above its lowest point. Find its maximum speed (ignore air resistance).",
a:"$1.4$ m/s",
sol:"Step 1 — apply conservation of energy: all GPE lost becomes KE gained: $mgh=\\tfrac12mv^2$. Step 2 — mass cancels from both sides: $gh=\\tfrac12v^2$. Step 3 — rearrange: $v=\\sqrt{2gh}=\\sqrt{2\\times9.8\\times0.10}=\\sqrt{1.96}=1.4$ m/s."},
{lvl:'inter',q:"State one advantage and one disadvantage of wind power compared with fossil fuels.",
a:"Advantage: renewable / no CO₂. Disadvantage: unreliable / low output per turbine",
sol:"Step 1 — advantage: wind is a renewable resource and produces no carbon dioxide during operation, unlike burning fossil fuels. Step 2 — disadvantage: wind speed is variable and unpredictable, so output is intermittent and needs backup or storage; also each turbine's power output is relatively small compared to a similarly-sized fossil-fuel power station."},
{lvl:'adv',q:"A motor lifts a $50$ kg load through $12$ m in $20$ s using $8000$ J of electrical energy. Find (a) the useful work done, (b) the useful power output, (c) the efficiency.",
a:"(a) $5880$ J (b) $294$ W (c) $73.5\\%$",
sol:"Step 1 (a) — useful work is the GPE gained by the load: $mgh=50\\times9.8\\times12=5880$ J. Step 2 (b) — power is work over time: $P=\\dfrac{5880}{20}=294$ W. Step 3 (c) — efficiency is useful output over total input: $\\dfrac{5880}{8000}\\times100=73.5\\%$. The remaining $2120$ J is wasted, mainly as heat."},
{lvl:'adv',q:"A $1200$ kg car climbs a hill $60$ m high at constant speed in $90$ s against a friction force of $400$ N acting over the $500$ m road. Find the useful output power of the engine.",
a:"$\\approx10.1$ kW",
sol:"Step 1 — work done against gravity: $mgh=1200\\times9.8\\times60=705\\,600$ J. Step 2 — work done against friction: $Fd=400\\times500=200\\,000$ J. Step 3 — since speed is CONSTANT, there is no change in kinetic energy, so ALL the engine's work goes into these two: total $=705\\,600+200\\,000=905\\,600$ J. Step 4 — power: $P=\\dfrac{905\\,600}{90}\\approx10\\,062$ W $\\approx10.1$ kW."}
]};


// ============================================================ PHYSICS CH 5: PRESSURE
PHYSICS[4] = {
title:"Pressure",
syl:"0625 §1.8 — Pressure",
yt:["pressure explained from zero","liquid pressure depth formula explained","why dams are thicker at the base","manometer explained simply"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>A stiletto heel and an elephant's foot both press down on the ground — but which one is more likely to punch through soft grass? Surprisingly, the stiletto: a $600$ N woman standing on a heel of just $1\\text{ cm}^2$ produces a pressure of MILLIONS of pascals, far more than an elephant's several-tonne weight spread over its huge, wide feet. Pressure isn't just about how much force you apply — it's about how CONCENTRATED that force is. This chapter is about that relationship, and how it plays out in liquids too.</p></div>

<h2>1. Pressure — force concentrated over an area</h2>
<div class="formula">$$p=\\frac{F}{A} \\qquad(\\text{unit: pascal, Pa} = \\text{N/m}^2)$$</div>
<div class="example"><div class="exhead">Worked example 1 — the scenario, solved</div>
<p>A woman of weight $600$ N stands on one heel of area $1\\text{ cm}^2$. Find the pressure in Pa.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Convert area to $\\text{m}^2$</span> (SI units — this step is essential): $1\\text{ cm}^2=1\\times10^{-4}\\text{ m}^2$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Apply the formula:</span> $$p=\\frac{600}{1\\times10^{-4}}=6\\,000\\,000\\text{ Pa}=6\\times10^6\\text{ Pa}$$</span></div>
</div>
<p>This is why heels can damage soft floors and elephants can't — the SAME kind of force, over a vastly smaller area, gives a vastly bigger pressure.</p></div>
<div class="example"><div class="exhead">Worked example 2 — the reverse application</div>
<p>Explain why a sharp knife cuts more easily than a blunt one, using the pressure equation.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Identify what changes:</span> a sharp edge has a MUCH smaller contact area $A$ than a blunt edge, for a similar applied force $F$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Apply $p=F/A$:</span> smaller $A$ (denominator) with similar $F$ gives a much larger $p$ — large enough to break through the material's surface, where a blunt edge (small $p$, same $F$ spread wide) can't.</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> forgetting to convert cm² to m² before substituting — a factor-of-10,000 error, since $1\\text{ cm}^2=1\\times10^{-4}\\text{ m}^2$ (NOT $1\\times10^{-2}$, a common slip).</div>

<h2>2. Pressure in liquids — depends only on depth and density</h2>
<div class="formula">$$p=\\rho gh$$ liquid density $\\rho$, gravitational field strength $g$, DEPTH $h$ below the surface.</div>
<div class="fig">
<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect x="60" y="20" width="180" height="180" fill="#EEECFC" stroke="#5246D9" stroke-width="2"/>
<line x1="60" y1="70" x2="240" y2="70" stroke="#5246D9" stroke-dasharray="3 2"/>
<line x1="60" y1="130" x2="240" y2="130" stroke="#5246D9" stroke-dasharray="3 2"/>
<circle cx="150" cy="70" r="4" fill="#C2571B"/>
<circle cx="150" cy="130" r="4" fill="#C2571B"/>
<circle cx="150" cy="190" r="4" fill="#C2571B"/>
<text x="245" y="75" font-size="11">shallow: low p</text>
<text x="245" y="135" font-size="11">deeper: more p</text>
<text x="245" y="195" font-size="11">deepest: most p</text>
</svg>
<div class="figcap">Pressure grows with depth, regardless of the container's shape or width — only $h$ (and the liquid) matters, which is why a dam must be built thickest at its base.</div></div>
<div class="example"><div class="exhead">Worked example 3</div>
<p>Calculate the pressure due to a $0.76$ m column of mercury ($\\rho=13\\,600\\text{ kg/m}^3$).</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Substitute directly:</span> $$p=\\rho gh=13\\,600\\times9.8\\times0.76\\approx101\\,300\\text{ Pa}$$</span></div>
</div>
<p>That number IS standard atmospheric pressure — which is exactly why old mercury barometers used a $76$ cm column: the atmosphere pushing on an open mercury reservoir can support a column of exactly this height, no more, no less.</p></div>
<div class="example"><div class="exhead">Worked example 4 — why dams are thick at the base</div>
<p>Why is a dam built thicker at its base than at its top?</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Recall the formula:</span> $p=\\rho gh$ — pressure depends on the DEPTH of water above that point.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Compare base to top:</span> at the base, $h$ (the depth of water above) is at its GREATEST, so $p$ is greatest there too. The dam wall must be strongest exactly where the pressure pushing on it is highest.</span></div>
</div></div>

<h2>3. Adding atmospheric pressure — total pressure at depth</h2>
<div class="formula">$$p_{\\text{total}} = p_{\\text{atmosphere}} + \\rho gh$$ (the atmosphere presses on the open surface too, and pressures simply add)</div>
<div class="example"><div class="exhead">Worked example 5</div>
<p>A rectangular tank $2$ m deep is full of oil ($\\rho=800\\text{ kg/m}^3$). Find the pressure due to the oil at the bottom, and the total pressure (atmospheric $=1.0\\times10^5$ Pa).</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find the oil's own contribution:</span> $p=\\rho gh=800\\times9.8\\times2=15\\,680$ Pa.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Add atmospheric pressure</span> (pushing on the open surface above): $$100\\,000+15\\,680\\approx115\\,700\\text{ Pa}$$</span></div>
</div></div>

<h2>4. The manometer — measuring gas pressure with a liquid column</h2>
<div class="example"><div class="exhead">Worked example 6</div>
<p>A U-tube manometer containing water ($\\rho=1000\\text{ kg/m}^3$) is connected to a gas supply. The water on the open side stands $15$ cm higher. Atmospheric pressure is $1.00\\times10^5$ Pa. Find the gas pressure.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Interpret the height difference:</span> the open side being HIGHER means the gas is pushing the water DOWN on its own side — i.e. the gas pressure exceeds atmospheric.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Add the extra column's pressure to atmospheric:</span> $$p_{\\text{gas}} = p_{\\text{atm}}+\\rho gh = 100\\,000+1000\\times9.8\\times0.15$$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Finish the arithmetic:</span> $100\\,000+1470=101\\,470\\approx1.015\\times10^5$ Pa.</span></div>
</div></div>
<div class="note"><b>Exam tip:</b> in manometer problems, always work out FIRST whether the gas pressure should be above or below atmospheric by looking at which side of the tube stands higher — then add or subtract the $\\rho gh$ term accordingly.</div>
`,
quiz:[
{lvl:'basic',q:"A force of $60$ N acts on $0.02\\text{ m}^2$. Find the pressure.",
a:"$3000$ Pa",
sol:"Step 1 — apply $p=\\dfrac{F}{A}$. Step 2: $p=\\dfrac{60}{0.02}=3000$ Pa."},
{lvl:'inter',q:"A woman of weight $600$ N stands on one heel of area $1\\text{ cm}^2$. Find the pressure in Pa.",
a:"$6\\times10^6$ Pa",
sol:"Step 1 — convert area to m²: $1\\text{ cm}^2=1\\times10^{-4}\\text{ m}^2$. Step 2 — apply $p=\\dfrac{F}{A}=\\dfrac{600}{1\\times10^{-4}}=6\\,000\\,000$ Pa."},
{lvl:'inter',q:"Calculate the pressure due to a $0.76$ m column of mercury ($\\rho=13\\,600\\text{ kg/m}^3$).",
a:"$\\approx1.0\\times10^5$ Pa",
sol:"Step 1 — apply $p=\\rho gh$ directly. Step 2: $13\\,600\\times9.8\\times0.76\\approx101\\,300$ Pa — this IS standard atmospheric pressure, which is why barometers historically used a 76 cm mercury column."},
{lvl:'inter',q:"Why is a dam built thicker at its base than at its top?",
a:"Liquid pressure increases with depth ($p=\\rho gh$), so the base must withstand more",
sol:"Step 1 — recall $p=\\rho gh$: pressure depends on the DEPTH of liquid above the point in question. Step 2 — at the base of the dam, the depth of water above is greatest, so the pressure pushing on the wall is greatest there too — the structure must be strongest exactly where the pressure is highest."},
{lvl:'inter',q:"Explain why a sharp knife cuts more easily than a blunt one, using the pressure equation.",
a:"Smaller contact area → larger pressure for the same force",
sol:"Step 1 — apply $p=\\dfrac{F}{A}$: pressure depends inversely on contact area. Step 2 — a sharp edge concentrates the same applied force $F$ onto a tiny area $A$, producing a much larger pressure than a blunt edge would with the same force — large enough to break through the material's surface."},
{lvl:'adv',q:"A rectangular tank $2$ m deep is full of oil ($\\rho=800\\text{ kg/m}^3$). Find the pressure due to the oil at the bottom, and the total pressure (atmospheric $=1.0\\times10^5$ Pa).",
a:"$15\\,680$ Pa; $\\approx1.16\\times10^5$ Pa",
sol:"Step 1 — find the oil's contribution: $p=\\rho gh=800\\times9.8\\times2=15\\,680$ Pa. Step 2 — add atmospheric pressure, since it also pushes on the open surface: $100\\,000+15\\,680\\approx115\\,700$ Pa."},
{lvl:'adv',q:"A U-tube manometer containing water ($\\rho=1000\\text{ kg/m}^3$) is connected to a gas supply. The water on the open side stands $15$ cm higher. Atmospheric pressure is $1.00\\times10^5$ Pa. Find the gas pressure.",
a:"$1.015\\times10^5$ Pa",
sol:"Step 1 — interpret the height difference: the open side sitting HIGHER means the gas is pushing water down on its own side, so the gas pressure is ABOVE atmospheric. Step 2 — add the extra column's pressure: $p_{\\text{gas}}=p_{\\text{atm}}+\\rho gh=100\\,000+1000\\times9.8\\times0.15$. Step 3 — finish: $100\\,000+1470=101\\,470\\approx1.015\\times10^5$ Pa."}
]};


// ============================================================ PHYSICS CH 6: THERMAL PHYSICS
PHYSICS[5] = {
title:"Thermal Physics",
syl:"0625 §2 — Thermal physics (kinetic model, properties, transfer)",
yt:["kinetic theory of matter explained","specific heat capacity explained from zero","boyle's law explained simply","conduction convection radiation explained"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>In Malaysia's heat and humidity, sweating is your body's cooling system — but WHY does it actually cool you down? And why does a pressure cooker (common for cooking rendang) speed up cooking by trapping steam under pressure? Both questions are answered by the <b>kinetic model of matter</b>: temperature is really just a measure of how fast particles are jiggling around, and this one idea explains an enormous range of everyday thermal effects.</p></div>

<h2>1. The kinetic model — temperature is particle motion</h2>
<p>In a gas, particles move freely at high speed in random directions, colliding with each other and the container walls. <b>Temperature is a measure of the AVERAGE kinetic energy of these particles</b> — hotter means faster, on average.</p>
<div class="formula">Kelvin scale: $$T(\\text{K}) = T(°\\text{C})+273$$ Kelvin is the "absolute" scale — $0$ K (absolute zero) is the theoretical point where particles have the minimum possible kinetic energy.</div>
<div class="example"><div class="exhead">Worked example 1</div>
<p>Convert $27°$C to kelvin.</p>
<div class="steps"><div class="st"><span class="n">1</span><span>$T=27+273=300$ K.</span></div></div></div>

<h2>2. Gas pressure — a kinetic explanation</h2>
<div class="fig">
<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
<rect x="40" y="30" width="150" height="130" fill="none" stroke="#5246D9" stroke-width="2.5"/>
<circle cx="80" cy="60" r="4" fill="#C2571B"/><circle cx="140" cy="90" r="4" fill="#C2571B"/><circle cx="100" cy="130" r="4" fill="#C2571B"/>
<text x="55" y="175" font-size="11" fill="#555">cool: slow, infrequent hits</text>
<rect x="230" y="30" width="150" height="130" fill="none" stroke="#C2571B" stroke-width="2.5"/>
<circle cx="260" cy="50" r="4" fill="#C2571B"/><circle cx="330" cy="70" r="4" fill="#C2571B"/><circle cx="280" cy="110" r="4" fill="#C2571B"/><circle cx="350" cy="140" r="4" fill="#C2571B"/><circle cx="260" cy="145" r="4" fill="#C2571B"/>
<text x="245" y="175" font-size="11" fill="#555">hot: fast, frequent HARD hits</text>
</svg>
<div class="figcap">Heating a gas makes particles move faster: they hit the container walls both MORE OFTEN and HARDER — both effects push pressure up.</div></div>
<div class="example"><div class="exhead">Worked example 2</div>
<p>Use the particle model to explain why gas pressure increases when a sealed gas is heated at constant volume.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Link heat to particle speed:</span> heating raises the average kinetic energy of the gas particles, so they move faster.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Link speed to collisions:</span> faster particles hit the container walls both more FREQUENTLY and with more FORCE per collision.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Link collisions to pressure:</span> pressure $=$ force$/$area — more frequent, harder impacts mean more total force on the walls, so pressure rises.</span></div>
</div></div>

<h2>3. Boyle's law — squeezing a gas at constant temperature</h2>
<div class="formula">$$p_1V_1 = p_2V_2 \\quad(\\text{constant temperature})$$</div>
<div class="example"><div class="exhead">Worked example 3</div>
<p>A gas has volume $300\\text{ cm}^3$ at $100$ kPa. It is compressed to $120\\text{ cm}^3$ at constant temperature. Find the new pressure.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Apply Boyle's law:</span> $p_1V_1=p_2V_2 \\Rightarrow 100\\times300=p_2\\times120$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Solve:</span> $p_2=\\dfrac{30\\,000}{120}=250$ kPa.</span></div>
</div>
<p><b>Why it works:</b> squeezing particles into a smaller volume means they hit the walls more often (less distance to travel between collisions), even though their speed (temperature) hasn't changed — more frequent collisions means higher pressure.</p></div>

<h2>4. Specific heat capacity — how much a substance resists warming up</h2>
<div class="formula">$$E=mc\\Delta\\theta$$ where $c$ is the specific heat capacity (J/(kg·°C)) — the energy needed to raise 1 kg of the substance by 1°C.</div>
<div class="example"><div class="exhead">Worked example 4</div>
<p>A $0.5$ kg aluminium block ($c=900$ J/(kg·°C)) is heated with $13\\,500$ J. Find the temperature rise.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Rearrange the formula for $\\Delta\\theta$:</span> $\\Delta\\theta=\\dfrac{E}{mc}$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Substitute:</span> $\\Delta\\theta=\\dfrac{13\\,500}{0.5\\times900}=\\dfrac{13\\,500}{450}=30°$C.</span></div>
</div></div>
<div class="example"><div class="exhead">Worked example 5 — heat exchange between two substances</div>
<p>A $0.2$ kg copper block ($c=390$ J/(kg·°C)) at $95°$C is dropped into $0.5$ kg of water ($c=4200$ J/(kg·°C)) at $20°$C. Ignoring losses, find the final temperature.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Heat lost by the hot object = heat gained by the cool one</span> (energy conservation, no losses): $$0.2\\times390\\times(95-T)=0.5\\times4200\\times(T-20)$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Simplify each side:</span> $78(95-T)=2100(T-20) \\Rightarrow 7410-78T=2100T-42\\,000$</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Collect $T$ terms:</span> $7410+42\\,000=2100T+78T \\Rightarrow 49\\,410=2178T$</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Solve:</span> $T=\\dfrac{49\\,410}{2178}\\approx22.7°$C.</span></div>
</div>
<p>Notice the final temperature is much closer to water's starting temperature ($20°$C) than copper's ($95°$C) — water's LARGE specific heat capacity means it barely warms while releasing far more thermal "resistance" against the copper's rapid cooling.</p></div>

<h2>5. Evaporation — cooling without boiling</h2>
<div class="example"><div class="exhead">Worked example 6 — the scenario, explained</div>
<p>Explain why sweating cools you down.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Not all liquid particles move at the same speed</span> — there's a whole range, some fast, some slow.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Evaporation is selective:</span> only the FASTEST (most energetic) particles have enough energy to escape the liquid surface into the air as vapour.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Removing the fastest particles</span> lowers the AVERAGE kinetic energy of what's left behind — and average kinetic energy IS temperature. So the remaining sweat (and the skin beneath it) cools down.</span></div>
</div></div>

<h2>6. Heat transfer — conduction, convection, radiation</h2>
<div class="example"><div class="exhead">Worked example 7</div>
<p>Why are the heating elements of a kettle at the bottom, and the freezer compartment of a fridge at the top?</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Kettle (heating from below):</span> water heated at the bottom expands slightly, becomes LESS dense, and rises; cooler, denser water sinks to take its place and gets heated in turn — this circulation (convection current) heats the whole volume efficiently.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Fridge (cooling from above):</span> air cooled near the freezer at the top becomes denser and SINKS, displacing warmer air upward to be cooled next — the same convection principle, just running to cool instead of heat.</span></div>
</div>
<p>Both designs deliberately place the temperature-changing element where convection currents will do the most work automatically.</p></div>
`,
quiz:[
{lvl:'basic',q:"Convert $27°$C to kelvin.",
a:"$300$ K",
sol:"Step 1 — apply the conversion $T(\\text{K})=T(°\\text{C})+273$. Step 2: $27+273=300$ K."},
{lvl:'inter',q:"A $0.5$ kg aluminium block ($c=900$ J/(kg·°C)) is heated with $13\\,500$ J. Find the temperature rise.",
a:"$30°$C",
sol:"Step 1 — rearrange $E=mc\\Delta\\theta$ for $\\Delta\\theta$: $\\Delta\\theta=\\dfrac{E}{mc}$. Step 2 — substitute: $\\dfrac{13\\,500}{0.5\\times900}=\\dfrac{13\\,500}{450}=30°$C."},
{lvl:'inter',q:"A gas has volume $300\\text{ cm}^3$ at $100$ kPa. It is compressed to $120\\text{ cm}^3$ at constant temperature. Find the new pressure.",
a:"$250$ kPa",
sol:"Step 1 — apply Boyle's law: $p_1V_1=p_2V_2$. Step 2 — substitute: $100\\times300=p_2\\times120$. Step 3 — solve: $p_2=\\dfrac{30\\,000}{120}=250$ kPa. Smaller volume means more frequent particle collisions with the walls, hence higher pressure."},
{lvl:'inter',q:"Explain why sweating cools you down.",
a:"Evaporation removes the most energetic particles, lowering average KE (temperature) of what remains",
sol:"Step 1 — liquid particles have a range of speeds, not all identical. Step 2 — only the fastest, most energetic particles have enough energy to escape the surface as vapour (evaporation). Step 3 — removing these fastest particles lowers the AVERAGE kinetic energy — and hence the temperature — of the sweat and skin left behind."},
{lvl:'inter',q:"Why are the heating elements of a kettle at the bottom, and the freezer compartment of a fridge at the top?",
a:"Convection: hot fluid rises, cold fluid sinks",
sol:"Step 1 — kettle: water heated at the bottom expands, becomes less dense, and rises, while cooler denser water sinks to be heated next — this circulation (convection) heats the whole tank. Step 2 — fridge: air cooled at the top becomes denser and sinks, pushing warmer air up to be cooled — the same convection principle used for cooling instead of heating."},
{lvl:'adv',q:"Use the particle model to explain why gas pressure increases when a sealed gas is heated at constant volume.",
a:"Faster particles hit walls harder and more often → more force per area",
sol:"Step 1 — heating raises the average kinetic energy of the gas particles, so they move faster. Step 2 — faster particles collide with the container walls both more frequently and with greater force per collision. Step 3 — since pressure $=$ force$/$area, this increase in total force on the walls (same area, since volume is constant) means pressure rises."},
{lvl:'adv',q:"A $0.2$ kg copper block ($c=390$ J/(kg·°C)) at $95°$C is dropped into $0.5$ kg of water ($c=4200$ J/(kg·°C)) at $20°$C. Ignoring losses, find the final temperature.",
a:"$\\approx22.7°$C",
sol:"Step 1 — set heat lost by copper equal to heat gained by water: $0.2\\times390\\times(95-T)=0.5\\times4200\\times(T-20)$. Step 2 — simplify: $78(95-T)=2100(T-20) \\Rightarrow 7410-78T=2100T-42\\,000$. Step 3 — collect terms: $49\\,410=2178T$. Step 4 — solve: $T\\approx22.7°$C. Water's large specific heat capacity means it barely warms compared to how much copper cools."}
]};


// ============================================================ PHYSICS CH 7: WAVES & SOUND
PHYSICS[6] = {
title:"Waves & Sound",
syl:"0625 §3.1, §3.4 — General properties of waves; sound",
yt:["transverse and longitudinal waves explained","wave speed frequency wavelength equation","echo speed of sound experiment explained","refraction wave speed wavelength frequency"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>Inside the vast limestone chamber of Batu Caves, a single clap produces a lingering echo — the sound wave travels out, bounces off the far cave wall, and returns to your ear a fraction of a second later. Timing this delay is actually a real technique for measuring the speed of sound (and, with radar and sonar, for measuring distances to aircraft and submarines). This chapter is about waves — the vibrations that carry energy from place to place — and sound is one specific, very familiar example.</p></div>

<h2>1. Describing a wave — the key vocabulary</h2>
<div class="fig">
<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="90" x2="460" y2="90" stroke="#888" stroke-dasharray="3 3"/>
<path d="M 20 90 Q 60 20 100 90 Q 140 160 180 90 Q 220 20 260 90 Q 300 160 340 90 Q 380 20 420 90" fill="none" stroke="#5246D9" stroke-width="3"/>
<line x1="60" y1="90" x2="60" y2="20" stroke="#C2571B" stroke-width="1.5" marker-end="url(#kw)"/>
<text x="65" y="50" font-size="11" fill="#C2571B">amplitude</text>
<line x1="100" y1="105" x2="180" y2="105" stroke="#1D7A4F" stroke-width="1.5"/>
<text x="110" y="120" font-size="11" fill="#1D7A4F">wavelength λ</text>
<defs><marker id="kw" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto"><path d="M0,6 L6,6 L3,0 Z" fill="#C2571B"/></marker></defs>
</svg>
<div class="figcap"><b>Wavelength</b> ($\\lambda$): distance between two identical points on consecutive cycles (e.g. crest to crest). <b>Amplitude</b>: maximum displacement from the rest position (relates to energy, NOT speed).</div></div>
<div class="formula">
Period $T$ (seconds per cycle) and frequency $f$ (cycles per second, Hz) are reciprocals: $$f=\\frac{1}{T}$$
Wave speed equation: $$v=f\\lambda$$
</div>
<div class="example"><div class="exhead">Worked example 1</div>
<p>A wave completes 5 cycles per second. State its frequency and period.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Frequency is defined directly</span> by "cycles per second": $f=5$ Hz.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Period is the reciprocal:</span> $T=\\dfrac{1}{f}=\\dfrac{1}{5}=0.2$ s.</span></div>
</div></div>

<h2>2. Transverse vs. longitudinal waves</h2>
<div class="fig">
<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg">
<path d="M 20 80 Q 60 30 100 80 Q 140 130 180 80" fill="none" stroke="#5246D9" stroke-width="3"/>
<text x="30" y="20" font-size="12" fill="#5246D9">transverse (e.g. light): vibration ⊥ to travel</text>
<line x1="240" y1="80" x2="460" y2="80" stroke="#888"/>
<g fill="#C2571B">
<rect x="250" y="70" width="6" height="20"/><rect x="270" y="70" width="6" height="20"/>
<rect x="310" y="70" width="10" height="20"/>
<rect x="360" y="70" width="6" height="20"/><rect x="380" y="70" width="6" height="20"/>
</g>
<text x="240" y="20" font-size="12" fill="#C2571B">longitudinal (e.g. sound): compressions ∥ to travel</text>
</svg>
<div class="figcap">Transverse: particles vibrate PERPENDICULAR to the direction of travel (light, water ripples). Longitudinal: particles vibrate PARALLEL to travel, bunching into compressions and spreading into rarefactions (sound).</div></div>
<div class="example"><div class="exhead">Worked example 2</div>
<p>State two differences between transverse and longitudinal waves, giving one example of each.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Direction of vibration:</span> transverse waves vibrate perpendicular (at right angles) to the direction of energy travel (example: light); longitudinal waves vibrate parallel to the direction of travel, forming compressions and rarefactions (example: sound).</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Medium requirement:</span> all electromagnetic (transverse) waves can travel through a vacuum; sound (longitudinal) cannot — it needs particles to compress and pass the vibration along.</span></div>
</div></div>

<h2>3. Applying $v=f\\lambda$</h2>
<div class="example"><div class="exhead">Worked example 3</div>
<p>A wave has frequency $50$ Hz and wavelength $6.6$ m. Find its speed.</p>
<div class="steps"><div class="st"><span class="n">1</span><span>$v=f\\lambda=50\\times6.6=330$ m/s — recognisable as roughly the speed of sound in air.</span></div></div></div>
<div class="example"><div class="exhead">Worked example 4</div>
<p>A sound wave has period $0.002$ s. Find its frequency, and state whether a human can hear it.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find frequency from period:</span> $f=\\dfrac1T=\\dfrac{1}{0.002}=500$ Hz.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Compare to the human hearing range</span> ($20$ Hz to $20\\,000$ Hz): $500$ Hz sits comfortably within it — audible.</span></div>
</div></div>

<h2>4. Measuring the speed of sound with an echo</h2>
<div class="example"><div class="exhead">Worked example 5 — the scenario, solved</div>
<p>A student claps $100$ m from a wall and hears the echo $0.6$ s later. Find the speed of sound.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Recognise the ROUND TRIP:</span> the sound travels TO the wall and BACK before it's heard — total distance is $2\\times100=200$ m, not just $100$ m.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Apply speed $=$ distance$/$time:</span> $$v=\\frac{200}{0.6}\\approx333\\text{ m/s}$$</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> forgetting the factor of $2$ for the round trip — using $100$ m instead of $200$ m gives exactly half the correct speed. Any echo problem (sound, radar, sonar) involves a there-AND-back journey.</div>

<h2>5. Refraction — waves changing speed at a boundary</h2>
<div class="example"><div class="exhead">Worked example 6</div>
<p>When light passes from air into glass, what happens to its speed, wavelength, and frequency?</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Frequency is fixed by the SOURCE</span> — it cannot change just because the wave enters a new medium: frequency stays the SAME.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Speed decreases</span> in the denser medium (glass) compared to air.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Use $v=f\\lambda$ to deduce wavelength's fate:</span> since $f$ is fixed and $v$ has decreased, $\\lambda$ must decrease too (to keep the equation balanced).</span></div>
</div>
<p>This speed change between media is exactly what causes the wave to bend at the boundary — the phenomenon called refraction.</p></div>

<h2>6. Radar and sonar — the same echo idea, very different speeds</h2>
<div class="example"><div class="exhead">Worked example 7</div>
<p>A radar pulse (EM wave, $3\\times10^8$ m/s) reflects off an aircraft and returns in $4\\times10^{-4}$ s. Later, sonar ($1500$ m/s in water) returns from a submarine in the same $4\\times10^{-4}$ s. Find both distances and explain the huge difference.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Both are round-trip echoes — divide by 2:</span> $$\\text{distance}=\\frac{vt}{2}$$</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Radar (aircraft):</span> $\\dfrac{3\\times10^8\\times4\\times10^{-4}}{2}=60\\,000$ m $=60$ km.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Sonar (submarine):</span> $\\dfrac{1500\\times4\\times10^{-4}}{2}=0.3$ m.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">Explain the gap:</span> radio waves travel roughly $200\\,000$ times faster than sound in water — the SAME echo time therefore corresponds to a vastly larger distance for radar than for sonar.</span></div>
</div></div>
`,
quiz:[
{lvl:'basic',q:"A wave completes 5 cycles per second. State its frequency and period.",
a:"$5$ Hz; $0.2$ s",
sol:"Step 1 — frequency is defined directly as cycles per second: $f=5$ Hz. Step 2 — period is the reciprocal: $T=\\dfrac1f=0.2$ s."},
{lvl:'inter',q:"A wave has frequency $50$ Hz and wavelength $6.6$ m. Find its speed.",
a:"$330$ m/s",
sol:"Step 1 — apply the wave speed equation $v=f\\lambda$. Step 2: $v=50\\times6.6=330$ m/s."},
{lvl:'inter',q:"State two differences between transverse and longitudinal waves, giving one example of each.",
a:"Transverse: vibration perpendicular to travel (light). Longitudinal: parallel, with compressions/rarefactions (sound)",
sol:"Step 1 — direction of vibration: transverse waves oscillate perpendicular to the direction of travel (example: light); longitudinal waves oscillate parallel to it, forming compressions and rarefactions (example: sound). Step 2 — medium requirement: transverse EM waves can cross a vacuum; longitudinal sound waves need a medium of particles to compress."},
{lvl:'inter',q:"A student claps $100$ m from a wall and hears the echo $0.6$ s later. Find the speed of sound.",
a:"$333$ m/s",
sol:"Step 1 — recognise the round trip: the sound travels to the wall AND back, a total of $2\\times100=200$ m. Step 2 — apply speed $=$ distance/time: $\\dfrac{200}{0.6}\\approx333$ m/s."},
{lvl:'inter',q:"A sound wave has period $0.002$ s. Find its frequency, and state whether a human can hear it.",
a:"$500$ Hz; yes",
sol:"Step 1 — find frequency from period: $f=\\dfrac1T=\\dfrac{1}{0.002}=500$ Hz. Step 2 — compare to the human hearing range ($20$ Hz–$20\\,000$ Hz): $500$ Hz falls comfortably inside it, so it is audible."},
{lvl:'adv',q:"When light passes from air into glass, what happens to its speed, wavelength, and frequency?",
a:"Speed decreases, wavelength decreases, frequency unchanged",
sol:"Step 1 — frequency is set entirely by the source and cannot change when entering a new medium. Step 2 — speed decreases in the denser medium (glass). Step 3 — using $v=f\\lambda$ with $f$ fixed and $v$ decreased, $\\lambda$ must decrease proportionally too. This speed change is what causes refraction (bending toward the normal)."},
{lvl:'adv',q:"A radar pulse (EM wave, $3\\times10^8$ m/s) reflects off an aircraft and returns in $4\\times10^{-4}$ s. Later, sonar ($1500$ m/s in water) returns from a submarine in the same $4\\times10^{-4}$ s. Find both distances and explain the huge difference.",
a:"Aircraft $60$ km; submarine $0.3$ m",
sol:"Step 1 — both are round-trip echoes, so distance $=\\dfrac{vt}{2}$. Step 2 — radar: $\\dfrac{3\\times10^8\\times4\\times10^{-4}}{2}=60\\,000$ m $=60$ km. Step 3 — sonar: $\\dfrac{1500\\times4\\times10^{-4}}{2}=0.3$ m. Step 4 — explanation: radio waves travel about $200\\,000\\times$ faster than sound in water, so identical echo TIMES correspond to wildly different DISTANCES."}
]};


// ============================================================ PHYSICS CH 8: LIGHT & THE EM SPECTRUM
PHYSICS[7] = {
title:"Light & the Electromagnetic Spectrum",
syl:"0625 §3.2, §3.3 — Light; electromagnetic spectrum",
yt:["refraction refractive index explained from zero","total internal reflection critical angle explained","optical fibres explained physics","electromagnetic spectrum explained simply"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>Your Unifi fibre broadband carries internet data as pulses of light down a hair-thin glass fibre, bouncing off the INSIDE of the glass wall over and over — even around bends — without leaking any light out. This is <b>total internal reflection</b>, and understanding exactly when and why it happens (not just "light bounces") is the core of this chapter.</p></div>

<h2>1. Reflection — the simple law</h2>
<div class="formula">Angle of incidence $=$ angle of reflection (both measured from the <b>normal</b> — the imaginary line perpendicular to the surface).</div>
<div class="mistake"><b>Common mistake:</b> angles in optics are ALWAYS measured from the normal, never from the surface itself. Measuring from the surface by mistake gives the complement of the correct angle.</div>

<h2>2. Refraction — bending at a boundary</h2>
<div class="fig">
<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="110" x2="300" y2="110" stroke="#888" stroke-width="2"/>
<line x1="160" y1="30" x2="160" y2="190" stroke="#999" stroke-dasharray="3 3"/>
<text x="165" y="30" font-size="10" fill="#999">normal</text>
<line x1="80" y1="50" x2="160" y2="110" stroke="#5246D9" stroke-width="2.5" marker-end="url(#kl)"/>
<text x="70" y="45" font-size="11" fill="#5246D9">incident ray</text>
<line x1="160" y1="110" x2="210" y2="180" stroke="#C2571B" stroke-width="2.5" marker-end="url(#kl)"/>
<text x="195" y="195" font-size="11" fill="#C2571B">refracted ray</text>
<text x="60" y="105" font-size="20" fill="#EEECFC">AIR</text>
<text x="60" y="160" font-size="20" fill="#FBEFE6">GLASS</text>
<defs><marker id="kl" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1A2030"/></marker></defs>
</svg>
<div class="figcap">Light bends TOWARD the normal when entering a denser medium (like glass) — it slows down but its frequency stays fixed.</div></div>
<div class="formula">Refractive index (relates angles OR speeds — same $n$ both ways): $$n=\\frac{\\sin i}{\\sin r} = \\frac{c}{v}$$where $c$ = speed in the first (usually less dense) medium, $v$ = speed in the second.</div>
<div class="example"><div class="exhead">Worked example 1</div>
<p>Light hits a glass block at $45°$ and refracts at $28°$. Find the refractive index.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Apply the angle form directly:</span> $$n=\\frac{\\sin45°}{\\sin28°}=\\frac{0.707}{0.469}\\approx1.51$$</span></div>
</div></div>

<h2>3. The critical angle and total internal reflection</h2>
<p>Going the OTHER way (glass to air, denser to less dense), refraction bends the ray AWAY from the normal. As the angle inside the glass increases, the refracted ray bends further and further away from the normal — until, at the <b>critical angle</b> $c$, the refracted ray grazes along the surface itself ($90°$). Beyond that angle, the light can't escape at all — it reflects entirely back inside instead.</p>
<div class="formula">$$\\sin c = \\frac{1}{n}$$</div>
<div class="fig">
<svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="60" width="420" height="60" fill="#EEECFC" stroke="#5246D9" stroke-width="2"/>
<line x1="30" y1="90" x2="90" y2="60" stroke="#5246D9" stroke-width="2" marker-end="url(#kl2)"/>
<line x1="90" y1="60" x2="150" y2="90" stroke="#5246D9" stroke-width="2" marker-end="url(#kl2)"/>
<line x1="150" y1="90" x2="210" y2="120" stroke="#5246D9" stroke-width="2" marker-end="url(#kl2)"/>
<line x1="210" y1="120" x2="270" y2="90" stroke="#5246D9" stroke-width="2" marker-end="url(#kl2)"/>
<line x1="270" y1="90" x2="330" y2="60" stroke="#5246D9" stroke-width="2" marker-end="url(#kl2)"/>
<text x="60" y="45" font-size="11" fill="#555">angle exceeds critical angle at EVERY bounce</text>
<defs><marker id="kl2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5246D9"/></marker></defs>
</svg>
<div class="figcap">Inside an optical fibre, light hits the wall at an angle greater than the critical angle every time — so it totally internally reflects, zig-zagging along (even around gentle bends) without escaping.</div></div>
<div class="example"><div class="exhead">Worked example 2</div>
<p>The refractive index of water is $1.33$. Find the critical angle.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Apply the critical angle formula:</span> $\\sin c=\\dfrac1n=\\dfrac{1}{1.33}=0.752$.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Take $\\sin^{-1}$:</span> $c=\\sin^{-1}(0.752)\\approx48.8°$.</span></div>
</div>
<p>Above this angle, light travelling inside water that hits the surface totally internally reflects instead of escaping — this is why looking up from underwater, you only see the sky through a narrow circular "window" directly above.</p></div>
<div class="example"><div class="exhead">Worked example 3 — the scenario, explained</div>
<p>Explain how an optical fibre carries light around bends.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Light enters the fibre</span> and travels toward the internal glass-air boundary (the fibre's wall).</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">The fibre's geometry ensures the ray always strikes this wall at an angle GREATER than the critical angle,</span> so it undergoes total internal reflection — no light energy escapes, all of it bounces back inside.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">This repeats at every bounce,</span> letting the light zig-zag down the fibre (even through gentle bends) while carrying its encoded data pulse intact.</span></div>
</div></div>

<h2>4. Converging lenses — a quick qualitative case</h2>
<div class="example"><div class="exhead">Worked example 4</div>
<p>An object is placed $5$ cm from a converging lens of focal length $10$ cm. Describe the image.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Compare object distance to focal length:</span> $5$ cm $< 10$ cm — the object is INSIDE the focal length.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Recall what happens in this case:</span> the lens can't converge the diverging rays back to a real focus; instead they continue diverging after the lens, and appear (to an eye on the far side) to come from a larger point behind the object.</span></div>
</div>
<p>Result: virtual, upright, magnified image — this is exactly the magnifying-glass arrangement.</p></div>

<h2>5. The electromagnetic spectrum</h2>
<div class="formula">Radio $\\to$ microwaves $\\to$ infrared $\\to$ visible light $\\to$ ultraviolet $\\to$ X-rays $\\to$ gamma rays — increasing FREQUENCY (and energy), decreasing WAVELENGTH, left to right. ALL travel at the same speed ($3\\times10^8$ m/s) through a vacuum.</div>
<div class="example"><div class="exhead">Worked example 5</div>
<p>Name the EM wave used for (a) mobile phone signals, (b) sterilising surgical instruments, (c) TV remote controls, and state one danger of ultraviolet.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span>(a) <b>Microwaves</b> — penetrate the atmosphere well and carry phone/satellite signals.</span></div>
<div class="st"><span class="n">2</span><span>(b) <b>Gamma rays</b> — high enough energy to kill microorganisms without heating the instrument.</span></div>
<div class="st"><span class="n">3</span><span>(c) <b>Infrared</b> — carries short-range coded pulses to remote-controlled devices.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">UV danger:</span> high enough frequency to damage living cells — causes sunburn, skin cancer, and eye damage (cataracts) with excess exposure.</span></div>
</div></div>
`,
quiz:[
{lvl:'basic',q:"A ray hits a plane mirror at $35°$ to the normal. What is the angle of reflection?",
a:"$35°$",
sol:"Step 1 — apply the law of reflection: angle of incidence equals angle of reflection, both from the normal. Step 2: angle of reflection $=35°$."},
{lvl:'inter',q:"Light hits a glass block at $45°$ and refracts at $28°$. Find the refractive index.",
a:"$n\\approx1.51$",
sol:"Step 1 — apply $n=\\dfrac{\\sin i}{\\sin r}$. Step 2: $n=\\dfrac{\\sin45°}{\\sin28°}=\\dfrac{0.707}{0.469}\\approx1.51$. Angles are always measured from the normal, not the surface."},
{lvl:'inter',q:"The refractive index of water is $1.33$. Find the critical angle.",
a:"$c\\approx48.8°$",
sol:"Step 1 — apply $\\sin c=\\dfrac1n$: $\\sin c=\\dfrac{1}{1.33}=0.752$. Step 2 — take the inverse sine: $c=\\sin^{-1}(0.752)\\approx48.8°$. Above this angle, light inside water totally internally reflects at the surface."},
{lvl:'inter',q:"Explain how an optical fibre carries light around bends.",
a:"Repeated total internal reflection",
sol:"Step 1 — light entering the fibre strikes the internal glass wall at an angle greater than the critical angle (by the fibre's design). Step 2 — at this angle, light totally internally reflects — no energy escapes through the wall. Step 3 — this repeats at every bounce, letting light zig-zag down the fibre, even around gentle curves."},
{lvl:'inter',q:"An object is placed $5$ cm from a converging lens of focal length $10$ cm. Describe the image.",
a:"Virtual, upright, magnified (magnifying glass arrangement)",
sol:"Step 1 — compare: the object distance ($5$ cm) is LESS than the focal length ($10$ cm), so the object sits inside the focal length. Step 2 — in this case, rays diverge after passing through the lens rather than converging to a real image. Step 3 — an eye viewing from the far side sees a virtual, upright, magnified image — the magnifying-glass configuration."},
{lvl:'adv',q:"Name the EM wave used for (a) mobile phone signals, (b) sterilising surgical instruments, (c) TV remote controls, and state one danger of ultraviolet.",
a:"(a) microwaves (b) gamma rays (c) infrared; UV causes skin cancer/eye damage",
sol:"Step 1 (a) — microwaves penetrate the atmosphere effectively and carry phone/satellite signals. Step 2 (b) — gamma rays have enough energy to destroy microorganisms, used for sterilising equipment. Step 3 (c) — infrared carries short-range coded pulses for remote controls. Step 4 — UV danger: its high frequency/energy can damage living cells, causing sunburn, skin cancer, and eye damage such as cataracts."},
{lvl:'adv',q:"Light travels at $3.0\\times10^8$ m/s in air and $2.0\\times10^8$ m/s in a plastic. Find the refractive index, the critical angle, and whether a ray hitting the inside surface at $45°$ escapes.",
a:"$n=1.5$; $c\\approx41.8°$; no — it totally internally reflects",
sol:"Step 1 — find $n$ using the speed form: $n=\\dfrac{c}{v}=\\dfrac{3\\times10^8}{2\\times10^8}=1.5$. Step 2 — find the critical angle: $\\sin c=\\dfrac{1}{1.5} \\Rightarrow c=\\sin^{-1}(0.667)\\approx41.8°$. Step 3 — compare the given angle to the critical angle: $45°>41.8°$, so the ray EXCEEDS the critical angle — it totally internally reflects and does NOT escape. This is exactly the condition that makes optical fibres work."}
]};


// ============================================================ PHYSICS CH 9: ELECTRICITY
PHYSICS[8] = {
title:"Electricity",
syl:"0625 §4.1–4.4 — Static, current, circuits, safety",
yt:["current voltage resistance explained from zero","series and parallel circuits explained","electrical power and energy cost explained","fuse and earth wire safety explained"],
body:`
<div class="scenario"><div class="schead">Real-life scenario — start here</div>
<p>Your family's TNB electricity bill charges by the kilowatt-hour — and every appliance in the house (kettle, air-conditioner, washing machine) draws current according to the SAME rules of circuits you'll learn here. Understanding resistance, series/parallel wiring, and power lets you calculate exactly how much running the air-con overnight actually costs — and why a washing machine's earth wire and fuse together can save your life if something goes wrong internally.</p></div>

<h2>1. Charge and current</h2>
<div class="formula">$$I=\\frac{Q}{t}$$ current (amperes, A) $=$ charge (coulombs, C) per second.</div>
<div class="example"><div class="exhead">Worked example 1</div>
<p>A charge of $240$ C flows through a lamp in $2$ minutes. Find the current.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Convert to seconds:</span> $2$ min $=120$ s.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Apply the formula:</span> $I=\\dfrac{240}{120}=2$ A.</span></div>
</div></div>

<h2>2. Resistance — Ohm's law</h2>
<div class="formula">$$V=IR$$</div>
<div class="example"><div class="exhead">Worked example 2</div>
<p>A $6$ V battery drives $2$ A through a lamp. Find the lamp's resistance.</p>
<div class="steps"><div class="st"><span class="n">1</span><span>Rearrange: $R=\\dfrac{V}{I}=\\dfrac{6}{2}=3\\ \\Omega$.</span></div></div></div>

<h2>3. Series and parallel circuits</h2>
<div class="fig">
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="60" x2="90" y2="60" stroke="#5246D9" stroke-width="2.5"/>
<rect x="90" y="45" width="50" height="30" fill="none" stroke="#5246D9" stroke-width="2.5"/>
<line x1="140" y1="60" x2="200" y2="60" stroke="#5246D9" stroke-width="2.5"/>
<rect x="200" y="45" width="50" height="30" fill="none" stroke="#5246D9" stroke-width="2.5"/>
<line x1="250" y1="60" x2="280" y2="60" stroke="#5246D9" stroke-width="2.5"/>
<text x="60" y="105" font-size="12" fill="#5246D9">series: same current everywhere, R adds</text>
<line x1="330" y1="30" x2="330" y2="130" stroke="#C2571B" stroke-width="2.5"/>
<line x1="330" y1="50" x2="380" y2="50" stroke="#C2571B" stroke-width="2.5"/>
<rect x="380" y="35" width="40" height="30" fill="none" stroke="#C2571B" stroke-width="2.5"/>
<line x1="420" y1="50" x2="450" y2="50" stroke="#C2571B" stroke-width="2.5"/>
<line x1="330" y1="110" x2="380" y2="110" stroke="#C2571B" stroke-width="2.5"/>
<rect x="380" y="95" width="40" height="30" fill="none" stroke="#C2571B" stroke-width="2.5"/>
<line x1="420" y1="110" x2="450" y2="110" stroke="#C2571B" stroke-width="2.5"/>
<line x1="450" y1="50" x2="450" y2="110" stroke="#C2571B" stroke-width="2.5"/>
<text x="320" y="155" font-size="12" fill="#C2571B">parallel: same voltage per branch</text>
</svg>
<div class="figcap">Series: one path, current is identical everywhere, resistances simply ADD. Parallel: multiple paths, each branch sees the FULL supply voltage, and total resistance is always LESS than the smallest branch.</div></div>
<div class="formula">Series: $$R_{\\text{total}}=R_1+R_2+\\cdots$$ Parallel: $$\\frac{1}{R_{\\text{total}}}=\\frac{1}{R_1}+\\frac{1}{R_2}+\\cdots$$</div>
<div class="example"><div class="exhead">Worked example 3</div>
<p>Two resistors, $3\\ \\Omega$ and $6\\ \\Omega$, are connected in parallel to a $6$ V supply. Find the total resistance and total current from the supply.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Apply the parallel formula:</span> $\\dfrac{1}{R}=\\dfrac13+\\dfrac16=\\dfrac26+\\dfrac16=\\dfrac36=\\dfrac12 \\Rightarrow R=2\\ \\Omega$ — smaller than either branch alone, as always in parallel.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Find the total current:</span> $I=\\dfrac{V}{R}=\\dfrac{6}{2}=3$ A.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Sense-check with branch currents</span> (each branch sees the full 6 V): $I_3=\\dfrac63=2$ A, $I_6=\\dfrac66=1$ A; total $2+1=3$ A ✓ matches.</span></div>
</div></div>

<h2>4. Electrical power, energy, and cost</h2>
<div class="formula">$$P=VI \\qquad E=Pt \\qquad \\text{cost} = \\text{energy (kWh)}\\times\\text{tariff rate}$$</div>
<div class="example"><div class="exhead">Worked example 4 — the scenario, in numbers</div>
<p>An electric heater rated $2$ kW runs for $3$ hours daily. If electricity costs RM$0.50$ per kWh, find the weekly cost.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Find daily energy</span> (kW $\\times$ hours gives kWh directly — no further conversion needed): $2\\times3=6$ kWh.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Scale up to a week:</span> $6\\times7=42$ kWh.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">Multiply by the tariff:</span> $42\\times0.50=\\text{RM}21$.</span></div>
</div></div>
<div class="example"><div class="exhead">Worked example 5 — choosing a fuse</div>
<p>A $2.5$ kW kettle runs on $230$ V. Find the current and choose a suitable fuse ($3$ A, $5$ A, or $13$ A).</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Rearrange $P=VI$ for current:</span> $I=\\dfrac{P}{V}=\\dfrac{2500}{230}\\approx10.9$ A.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">Choose the fuse rated just ABOVE the working current:</span> a $5$ A fuse would blow immediately (below the working current); a $13$ A fuse sits comfortably above $10.9$ A while still protecting against a genuine fault. Answer: $13$ A.</span></div>
</div></div>
<div class="mistake"><b>Common mistake:</b> picking the fuse with the SMALLEST rating that's still "safe-sounding" — a fuse rated below the appliance's normal working current will blow constantly during normal use. The fuse must sit just above normal operating current, not as low as possible.</div>

<h2>5. Safety — earth wire and fuse working together</h2>
<div class="example"><div class="exhead">Worked example 6</div>
<p>Explain how the earth wire and fuse together protect a user if the live wire touches the metal casing of a washing machine.</p>
<div class="steps">
<div class="st"><span class="n">1</span><span><span class="stlabel">Normally the casing is earthed</span> — connected via the earth wire to the ground, at zero potential.</span></div>
<div class="st"><span class="n">2</span><span><span class="stlabel">If a fault sends live current to the casing,</span> the earth wire offers a path of very LOW resistance back to the ground — MUCH lower than the resistance of a person who might touch the casing.</span></div>
<div class="st"><span class="n">3</span><span><span class="stlabel">This low resistance allows a very LARGE current to flow</span> — far exceeding the fuse's rating.</span></div>
<div class="st"><span class="n">4</span><span><span class="stlabel">The surge melts the fuse wire,</span> breaking the circuit and disconnecting the live supply before a dangerous shock can occur.</span></div>
</div></div>
`,
quiz:[
{lvl:'basic',q:"A $6$ V battery drives $2$ A through a lamp. Find the lamp's resistance.",
a:"$3\\ \\Omega$",
sol:"Step 1 — rearrange Ohm's law: $R=\\dfrac{V}{I}$. Step 2: $R=\\dfrac{6}{2}=3\\ \\Omega$."},
{lvl:'inter',q:"A charge of $240$ C flows through a lamp in $2$ minutes. Find the current.",
a:"$2$ A",
sol:"Step 1 — convert time to seconds: $2$ min $=120$ s. Step 2 — apply $I=\\dfrac{Q}{t}=\\dfrac{240}{120}=2$ A."},
{lvl:'inter',q:"Two resistors, $3\\ \\Omega$ and $6\\ \\Omega$, are connected in parallel to a $6$ V supply. Find the total resistance and total current from the supply.",
a:"$2\\ \\Omega$; $3$ A",
sol:"Step 1 — apply the parallel resistance formula: $\\dfrac1R=\\dfrac13+\\dfrac16=\\dfrac12 \\Rightarrow R=2\\ \\Omega$ (less than the smallest branch, as always). Step 2 — find total current: $I=\\dfrac{V}{R}=\\dfrac{6}{2}=3$ A. Step 3 — check via branch currents: $\\dfrac63+\\dfrac66=2+1=3$ A ✓."},
{lvl:'inter',q:"A $2.5$ kW kettle runs on $230$ V. Find the current and choose a suitable fuse ($3$ A, $5$ A, or $13$ A).",
a:"$I\\approx10.9$ A → $13$ A fuse",
sol:"Step 1 — rearrange $P=VI$: $I=\\dfrac{P}{V}=\\dfrac{2500}{230}\\approx10.9$ A. Step 2 — the fuse must be rated just ABOVE the working current, not below (which would blow immediately) and not excessively above (which wouldn't protect the cable): choose $13$ A."},
{lvl:'inter',q:"An electric heater rated $2$ kW runs for $3$ hours daily. If electricity costs RM$0.50$ per kWh, find the weekly cost.",
a:"RM$21$",
sol:"Step 1 — daily energy: $2\\text{ kW}\\times3\\text{ h}=6$ kWh. Step 2 — weekly energy: $6\\times7=42$ kWh. Step 3 — cost: $42\\times0.50=\\text{RM}21$."},
{lvl:'adv',q:"Explain how the earth wire and fuse together protect a user if the live wire touches the metal casing of a washing machine.",
a:"Earth wire gives a low-resistance path → large current → fuse melts → circuit disconnected",
sol:"Step 1 — normally the metal casing is connected to earth (ground) via the earth wire. Step 2 — if the live wire faults onto the casing, the earth wire provides a path of much LOWER resistance than a person would offer, so most current flows harmlessly through it rather than through anyone touching the casing. Step 3 — this large current exceeds the fuse's rated value. Step 4 — the fuse wire melts, breaking the circuit and disconnecting the live supply before a dangerous shock can occur."},
{lvl:'adv',q:"A $12$ V battery connects to a $2\\ \\Omega$ resistor in series with a parallel pair ($3\\ \\Omega$ and $6\\ \\Omega$). Find the current through EACH resistor.",
a:"$2\\ \\Omega$: $3$ A; $3\\ \\Omega$: $2$ A; $6\\ \\Omega$: $1$ A",
sol:"Step 1 — combine the parallel pair first: $\\dfrac1R=\\dfrac13+\\dfrac16=\\dfrac12 \\Rightarrow R=2\\ \\Omega$. Step 2 — add the series resistor: total $=2+2=4\\ \\Omega$. Step 3 — find supply current (this ALL flows through the series resistor, since it's the only path there): $I=\\dfrac{12}{4}=3$ A. Step 4 — find the p.d. across the parallel pair: $V=IR_{\\text{pair}}=3\\times2=6$ V (same across BOTH branches). Step 5 — find each branch current: $I_3=\\dfrac63=2$ A, $I_6=\\dfrac66=1$ A. Check: $2+1=3$ A matches the supply current ✓."}
]};
