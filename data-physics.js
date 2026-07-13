// Cambridge IGCSE Physics 0625 — full course data

const PHYSICS = [

// ---------------------------------------------------------------- 1 MEASUREMENT
{
title:"Physical Quantities & Measurement",
syl:"0625 §1.1 — Physical quantities and measurement techniques",
yt:["IGCSE physics measurement techniques","micrometer vernier calipers reading","scalars and vectors IGCSE physics"],
body:`
<h2>1. Measuring length, volume, time</h2>
<ul>
<li><b>Ruler</b>: to 1 mm. <b>Micrometer</b>: to 0.01 mm. <b>Measuring cylinder</b>: volume of liquids (read the bottom of the meniscus at eye level).</li>
<li><b>Irregular solid volume</b>: displacement method — submerge it, volume = rise in water level.</li>
<li><b>Time</b>: stopwatch. For a pendulum, time 20 swings and divide by 20 — this reduces the effect of human reaction time.</li>
</ul>
<h2>2. Scalars vs vectors</h2>
<table><tr><th>Scalar (size only)</th><th>Vector (size + direction)</th></tr>
<tr><td>distance, speed, time, mass, energy, temperature</td><td>displacement, velocity, acceleration, force, weight, momentum, gravitational field strength</td></tr></table>
<p>Two vectors are combined by drawing them tip-to-tail or using a parallelogram; for perpendicular vectors use Pythagoras: resultant = √(a² + b²), direction from tan θ = opposite/adjacent.</p>
<div class="example"><div class="exhead">Worked example</div>
<p>A boat moves 3 m/s east while the current pushes it 4 m/s north. Resultant velocity?</p>
<p>Perpendicular → R = √(3² + 4²) = <b>5 m/s</b>, at tan⁻¹(4/3) = 53° north of east.</p></div>
<h2>3. Density</h2>
<div class="formula">ρ = m / V &nbsp;&nbsp;(kg/m³ or g/cm³) &nbsp;|&nbsp; 1 g/cm³ = 1000 kg/m³</div>
<p>An object floats in a liquid if its density is LESS than the liquid's density. Water: 1.0 g/cm³.</p>
<div class="example"><div class="exhead">Worked example</div>
<p>A stone of mass 135 g raises the water level in a cylinder from 60 cm³ to 110 cm³. Density?</p>
<p>V = 50 cm³ → ρ = 135/50 = <b>2.7 g/cm³</b> (denser than water → sinks).</p></div>
`,
quiz:[
{q:"Why do we time 30 oscillations of a pendulum instead of 1?",
a:"To reduce the percentage error from reaction time",
sol:"Human reaction time (~0.2 s) is fixed per measurement. Spread over 30 swings, the error per swing becomes 0.2/30 ≈ 0.007 s instead of 0.2 s — the percentage uncertainty shrinks dramatically."},
{q:"A block measures 4 cm × 5 cm × 2 cm and has mass 108 g. Find its density and state whether it floats in water.",
a:"2.7 g/cm³; sinks",
sol:"V = 40 cm³. ρ = 108/40 = 2.7 g/cm³ > 1.0 g/cm³ (water), so it sinks. Floating requires the object's density to be below the liquid's."},
{q:"State two differences between mass and weight.",
a:"Mass: scalar, kg, constant everywhere. Weight: vector (force), N, varies with gravitational field",
sol:"Mass is the amount of matter (measured with a balance, same on the Moon). Weight = mg is the gravitational force on that mass (measured with a force meter, smaller on the Moon because g is smaller)."},
{q:"A plane flies 400 km east then 300 km north. Find its displacement.",
a:"500 km at 37° north of east",
sol:"Perpendicular legs → Pythagoras: √(400² + 300²) = 500 km. Angle = tan⁻¹(300/400) = 36.9° N of E. Note the DISTANCE travelled is 700 km — displacement is the straight-line vector."},
{q:"Describe how to find the density of an irregular stone.",
a:"Mass by balance; volume by water displacement; ρ = m/V",
sol:"Measure mass m with a balance. Part-fill a measuring cylinder, note V₁; lower the stone in fully, note V₂. Volume = V₂ − V₁. Density = m/(V₂ − V₁). Read the meniscus at eye level to avoid parallax error."}
]},

// ---------------------------------------------------------------- 2 MOTION
{
title:"Motion",
syl:"0625 §1.2 — Motion",
yt:["speed time graphs IGCSE physics","acceleration free fall IGCSE","distance time graph gradient"],
body:`
<h2>1. Speed, velocity, acceleration</h2>
<div class="formula">speed = distance / time &nbsp;|&nbsp; average speed = total distance / total time<br>
acceleration a = Δv / Δt &nbsp;(m/s²)</div>
<p>Velocity is speed with direction. Deceleration = negative acceleration.</p>
<h2>2. Graphs — the most-tested skill</h2>
<div class="fig">
<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg">
<line x1="40" y1="180" x2="440" y2="180" stroke="#888" stroke-width="1.5"/>
<line x1="40" y1="10" x2="40" y2="180" stroke="#888" stroke-width="1.5"/>
<path d="M 40 180 L 160 60 L 300 60 L 420 180" fill="none" stroke="#C2571B" stroke-width="3"/>
<text x="70" y="120" font-size="12" fill="#C2571B">accelerating</text>
<text x="195" y="50" font-size="12" fill="#C2571B">constant speed</text>
<text x="330" y="120" font-size="12" fill="#C2571B">decelerating</text>
<text x="415" y="200" font-size="12" fill="#555">time</text>
<text x="8" y="20" font-size="12" fill="#555">v</text>
<text x="150" y="200" font-size="11" fill="#1D7A4F">area under graph = distance</text>
</svg>
<div class="figcap">Speed–time graph: gradient = acceleration; area under = distance.</div></div>
<table>
<tr><th>Graph</th><th>Gradient means</th><th>Area under means</th></tr>
<tr><td>Distance–time</td><td>speed</td><td>—</td></tr>
<tr><td>Speed–time</td><td>acceleration</td><td>distance travelled</td></tr>
</table>
<p>On a distance–time graph: flat = stationary, straight slope = constant speed, curving upward = accelerating.</p>
<h2>3. Free fall and terminal velocity</h2>
<p>Near Earth, free-fall acceleration g ≈ <b>9.8 m/s²</b> (all masses fall equally without air resistance). With air resistance, a falling object speeds up → drag increases → eventually drag = weight → resultant force zero → constant <b>terminal velocity</b>.</p>
<div class="example"><div class="exhead">Worked example</div>
<p>A car accelerates uniformly from 10 m/s to 30 m/s in 8 s, then travels at 30 m/s for 12 s. Find the acceleration and the total distance.</p>
<p>a = (30 − 10)/8 = <b>2.5 m/s²</b>.</p>
<p>Distance = area: trapezium ½(10 + 30)(8) = 160 m, plus rectangle 30 × 12 = 360 m → <b>520 m</b>.</p></div>
`,
quiz:[
{q:"A cyclist travels 1.2 km in 4 minutes. Find the average speed in m/s.",
a:"5 m/s",
sol:"1.2 km = 1200 m, 4 min = 240 s. Speed = 1200/240 = 5 m/s. Always convert to SI units first."},
{q:"From a speed–time graph, a train accelerates from rest to 24 m/s in 60 s. Find the acceleration and the distance covered.",
a:"0.4 m/s²; 720 m",
sol:"a = 24/60 = 0.4 m/s². Distance = area of triangle = ½ × 60 × 24 = 720 m."},
{q:"Explain, in terms of forces, why a skydiver reaches terminal velocity.",
a:"Drag grows with speed until it equals weight; resultant force = 0 → constant velocity",
sol:"Initially weight > drag → net downward force → acceleration. As speed rises, air resistance rises. When drag = weight, resultant force is zero, so by Newton's first law the velocity stays constant — terminal velocity."},
{q:"A ball is dropped from rest (ignore air resistance, g = 9.8 m/s²). Find its speed after 3 s and the distance fallen (use area under v–t graph).",
a:"29.4 m/s; 44.1 m",
sol:"v = at = 9.8 × 3 = 29.4 m/s. Distance = triangle area = ½ × 3 × 29.4 = 44.1 m."},
{q:"On a distance–time graph, describe the motion when the line is (a) horizontal, (b) straight with positive gradient, (c) a curve of increasing gradient.",
a:"(a) stationary (b) constant speed (c) accelerating",
sol:"The gradient of a distance–time graph IS the speed: zero gradient = at rest; constant gradient = steady speed; increasing gradient = speeding up."}
]},

// ---------------------------------------------------------------- 3 FORCES
{
title:"Forces & Momentum",
syl:"0625 §1.3, §1.5, §1.6 — Mass/weight, forces, momentum",
yt:["Newton's laws IGCSE physics","Hooke's law spring constant experiment","momentum conservation collisions IGCSE","moments principle IGCSE physics"],
body:`
<h2>1. Weight and resultant force</h2>
<div class="formula">W = mg &nbsp;(g = 9.8 N/kg) &nbsp;&nbsp;|&nbsp;&nbsp; F = ma (resultant force)</div>
<p>Newton's laws in plain words: (1) no resultant force → constant velocity (or rest); (2) resultant force → acceleration in the force's direction, F = ma; (3) forces come in equal-and-opposite pairs acting on <i>different</i> bodies.</p>
<h2>2. Hooke's law</h2>
<div class="formula">F = kx &nbsp;— force ∝ extension, up to the limit of proportionality</div>
<p>A force–extension graph is a straight line through the origin until the limit of proportionality; beyond it the spring deforms permanently. k = gradient = spring constant (N/m).</p>
<h2>3. Friction, circular motion</h2>
<p>Friction opposes motion and produces heating. An object in circular motion at constant speed is still <i>accelerating</i> (direction changes!) — it needs a resultant force toward the centre (centripetal force). Bigger speed, bigger mass, or smaller radius → bigger force needed.</p>
<h2>4. Moments (turning effects)</h2>
<div class="formula">Moment = force × perpendicular distance from pivot &nbsp;(N·m)<br>
Equilibrium: sum of clockwise moments = sum of anticlockwise moments, and resultant force = 0</div>
<div class="example"><div class="exhead">Worked example — seesaw</div>
<p>A 600 N child sits 1.5 m left of a pivot. Where must a 450 N child sit to balance?</p>
<p>Anticlockwise = 600 × 1.5 = 900 N·m. Balance: 450 × d = 900 → <b>d = 2.0 m right</b>.</p></div>
<h2>5. Momentum</h2>
<div class="formula">p = mv &nbsp;(kg·m/s)<br>
Impulse = FΔt = Δp &nbsp;&nbsp;|&nbsp;&nbsp; Conservation: total p before = total p after (no external force)</div>
<div class="example"><div class="exhead">Worked example — collision</div>
<p>A 2 kg trolley at 3 m/s hits a stationary 1 kg trolley and they stick together. Speed after?</p>
<p>p before = 2 × 3 + 0 = 6 kg·m/s. After: (2 + 1)v = 6 → <b>v = 2 m/s</b>.</p></div>
<p>Crumple zones and airbags increase the collision <i>time</i>, so for the same Δp the force F = Δp/Δt is smaller — that is why they protect you.</p>
`,
quiz:[
{q:"A resultant force of 12 N acts on a 4 kg mass. Find the acceleration. What is the object's weight on Earth?",
a:"3 m/s²; 39.2 N",
sol:"a = F/m = 12/4 = 3 m/s². Weight W = mg = 4 × 9.8 = 39.2 N. Note weight and resultant force are different forces."},
{q:"A spring extends 4 cm under a 10 N load. Find k and the extension under 25 N (within the limit of proportionality).",
a:"k = 250 N/m; 10 cm",
sol:"k = F/x = 10/0.04 = 250 N/m. x = F/k = 25/250 = 0.1 m = 10 cm. Hooke's law is linear, so 2.5× the force → 2.5× the extension."},
{q:"A uniform 4 m plank (weight 200 N) is pivoted at its centre. A 300 N load hangs 1.2 m from the pivot. What force applied at the far end (2 m) balances it?",
a:"180 N",
sol:"Plank's weight acts at the pivot → no moment. Balance: F × 2 = 300 × 1.2 = 360 → F = 180 N. Reason: equal clockwise and anticlockwise moments."},
{q:"A 1500 kg car travelling at 20 m/s brakes to rest in 5 s. Find the momentum change and average braking force.",
a:"Δp = 30 000 kg·m/s; F = 6000 N",
sol:"Δp = m(v − u) = 1500 × (0 − 20) = −30 000 kg·m/s (size 30 000). F = Δp/Δt = 30 000/5 = 6000 N opposing motion."},
{q:"Explain why a satellite in circular orbit at constant speed is accelerating, and name the force responsible.",
a:"Velocity direction constantly changes; gravity provides the centripetal force",
sol:"Acceleration is change of VELOCITY, which includes direction. In a circle the direction changes continuously, so the satellite accelerates toward the centre. Earth's gravitational pull supplies this centripetal force."}
]},

// ---------------------------------------------------------------- 4 ENERGY WORK POWER
{
title:"Energy, Work & Power",
syl:"0625 §1.7 — Energy, work and power",
yt:["energy stores transfers IGCSE physics","kinetic potential energy calculations","efficiency sankey diagram IGCSE","power watt calculation physics"],
body:`
<h2>1. Energy stores and transfers</h2>
<p>Energy is stored as: kinetic, gravitational potential, chemical, elastic (strain), nuclear, internal (thermal), electrostatic, magnetic. It is transferred by: mechanical work (forces), electrical work (currents), heating, and radiation (light/sound/waves). <b>Principle of conservation of energy: energy cannot be created or destroyed, only transferred.</b></p>
<div class="formula">
Kinetic energy: Eₖ = ½mv²<br>
Gravitational PE change: ΔEₚ = mgΔh<br>
Work done: W = Fd (force × distance moved in the force's direction) = energy transferred<br>
Power: P = W/t = E/t &nbsp;(watts; 1 W = 1 J/s)<br>
Efficiency = useful energy out / total energy in × 100%
</div>
<div class="example"><div class="exhead">Worked example — the rollercoaster classic</div>
<p>A 0.5 kg ball is dropped from 20 m. Find its speed just before landing (ignore air resistance).</p>
<p>ΔEₚ = mgh = 0.5 × 9.8 × 20 = 98 J. All becomes kinetic: ½mv² = 98 → v² = 392 → <b>v ≈ 19.8 m/s</b>.</p>
<p>(Notice mass cancels: v = √(2gh) — any mass lands at the same speed.)</p></div>
<div class="example"><div class="exhead">Worked example — power</div>
<p>A student of mass 60 kg runs up stairs of height 5 m in 6 s. Useful power?</p>
<p>W = mgh = 60 × 9.8 × 5 = 2940 J. P = 2940/6 = <b>490 W</b>.</p></div>
<h2>2. Energy resources</h2>
<table>
<tr><th>Resource</th><th>Renewable?</th><th>Key point</th></tr>
<tr><td>Fossil fuels (coal/oil/gas)</td><td>No</td><td>Reliable, high output; CO₂ → climate change</td></tr>
<tr><td>Nuclear (fission)</td><td>No</td><td>No CO₂ in operation; radioactive waste</td></tr>
<tr><td>Solar</td><td>Yes</td><td>Energy from the Sun; intermittent (weather/night)</td></tr>
<tr><td>Wind, wave, tidal, hydro</td><td>Yes</td><td>No fuel cost; site- and weather-dependent</td></tr>
<tr><td>Geothermal, biofuel</td><td>Yes</td><td>Geothermal: heat from Earth; biofuel: from plants</td></tr>
</table>
<p>The Sun is the ultimate source of most of our energy (fossil fuels, wind, waves, solar, biofuel) — the exceptions are nuclear, geothermal, and tidal (Moon's gravity). The Sun's own energy comes from <b>nuclear fusion</b> of hydrogen.</p>
`,
quiz:[
{q:"A 900 kg car travels at 25 m/s. Find its kinetic energy.",
a:"281 250 J ≈ 280 kJ",
sol:"Eₖ = ½mv² = ½ × 900 × 625 = 281 250 J. Squaring the speed matters: doubling speed quadruples KE — a key road-safety fact."},
{q:"A motor lifts a 50 kg load through 12 m in 20 s using 8000 J of electrical energy. Find (a) the useful work done, (b) the useful power output, (c) the efficiency.",
a:"(a) 5880 J (b) 294 W (c) 73.5%",
sol:"(a) Useful work = mgh = 50 × 9.8 × 12 = 5880 J. (b) P = W/t = 5880/20 = 294 W. (c) Efficiency = useful/input × 100 = 5880/8000 × 100 = 73.5%. The missing 2120 J is wasted as heat and sound — useful output can never exceed input."},
{q:"A pendulum bob is released from a height of 0.10 m above its lowest point. Find its maximum speed (ignore air resistance).",
a:"1.4 m/s",
sol:"mgh = ½mv² → v = √(2gh) = √(2 × 9.8 × 0.10) = √1.96 = 1.4 m/s. All GPE converts to KE at the lowest point."},
{q:"State one advantage and one disadvantage of wind power compared with fossil fuels.",
a:"Advantage: renewable / no CO₂. Disadvantage: unreliable (wind varies) / visual impact / low output density",
sol:"Wind is renewable and emits no greenhouse gases in operation. But output depends on wind speed (intermittent), turbines need large sites, and energy output per turbine is small compared to a fossil-fuel station, so storage or backup is needed."},
{q:"An electric kettle transfers 540 000 J in 4 minutes. Find its power in kW.",
a:"2.25 kW",
sol:"t = 240 s. P = E/t = 540 000/240 = 2250 W = 2.25 kW."}
]},

// ---------------------------------------------------------------- 5 PRESSURE
{
title:"Pressure",
syl:"0625 §1.8 — Pressure",
yt:["pressure IGCSE physics p=F/A","liquid pressure depth density","manometer barometer IGCSE"],
body:`
<h2>1. Pressure from a force</h2>
<div class="formula">p = F / A &nbsp;&nbsp;(pascal; 1 Pa = 1 N/m²)</div>
<p>Same force, smaller area → bigger pressure. That's why knives are sharp (huge pressure) and camels have wide feet (low pressure, don't sink in sand). Snowshoes, tractor tyres, drawing pins — all area tricks.</p>
<div class="example"><div class="exhead">Worked example</div>
<p>A box weighs 300 N and its base is 0.5 m × 0.4 m. Pressure on the floor?</p>
<p>A = 0.2 m². p = 300/0.2 = <b>1500 Pa</b>.</p></div>
<h2>2. Pressure in a liquid</h2>
<div class="formula">Δp = ρgΔh &nbsp;— pressure increases with depth and with density</div>
<ul>
<li>Pressure at a given depth acts equally in all directions.</li>
<li>Doesn't depend on the container's shape or width — only depth and density.</li>
<li>Dam walls are thicker at the bottom; a diver feels more pressure deeper.</li>
</ul>
<div class="example"><div class="exhead">Worked example</div>
<p>Extra pressure 10 m underwater (ρ = 1000 kg/m³)?</p>
<p>Δp = 1000 × 9.8 × 10 = <b>98 000 Pa</b> — roughly one whole extra atmosphere per 10 m of water.</p></div>
<h2>3. Total pressure</h2>
<p>Total pressure at depth = atmospheric pressure + ρgh. Atmospheric pressure ≈ 100 000 Pa (1.0 × 10⁵ Pa) at sea level, caused by the weight of the air above us; it decreases with altitude.</p>
`,
quiz:[
{q:"A woman of weight 600 N stands on one heel of area 1 cm². Find the pressure in Pa.",
a:"6 × 10⁶ Pa",
sol:"A = 1 cm² = 1 × 10⁻⁴ m². p = 600/10⁻⁴ = 6 000 000 Pa — far more than an elephant's foot, because area is tiny."},
{q:"Calculate the pressure due to a 0.76 m column of mercury (ρ = 13 600 kg/m³).",
a:"≈ 1.0 × 10⁵ Pa",
sol:"p = ρgh = 13 600 × 9.8 × 0.76 ≈ 101 300 Pa — that is atmospheric pressure, and exactly why old barometers used a 76 cm mercury column."},
{q:"Why is a dam built thicker at its base than at its top?",
a:"Liquid pressure increases with depth (p = ρgh), so the base must withstand more",
sol:"Pressure depends on the depth of water above the point. At the base h is greatest, so p = ρgh is greatest — the wall must be strongest there."},
{q:"A rectangular tank 2 m deep is full of oil (ρ = 800 kg/m³). Find the pressure due to the oil at the bottom, and the total pressure (atmospheric = 1.0 × 10⁵ Pa).",
a:"15 680 Pa; ≈ 1.16 × 10⁵ Pa",
sol:"Oil: p = 800 × 9.8 × 2 = 15 680 Pa. Total = 100 000 + 15 680 ≈ 115 700 Pa. Atmosphere pushes on the surface too, and pressure adds."},
{q:"Explain why a sharp knife cuts more easily than a blunt one, using the pressure equation.",
a:"Smaller contact area → larger pressure for the same force",
sol:"p = F/A. The sharp edge has a tiny area A, so even a modest force F produces a very large pressure, enough to break through the material's surface."}
]},

// ---------------------------------------------------------------- 6 THERMAL
{
title:"Thermal Physics",
syl:"0625 §2 — Thermal physics (kinetic model, properties, transfer)",
yt:["kinetic particle model IGCSE physics","specific heat capacity experiment IGCSE","conduction convection radiation IGCSE","evaporation vs boiling physics"],
body:`
<h2>1. Kinetic particle model</h2>
<table><tr><th>State</th><th>Arrangement</th><th>Motion</th></tr>
<tr><td>Solid</td><td>regular, tightly packed</td><td>vibrate about fixed positions</td></tr>
<tr><td>Liquid</td><td>close, irregular</td><td>slide past each other</td></tr>
<tr><td>Gas</td><td>far apart, random</td><td>fast, random motion</td></tr></table>
<p><b>Temperature</b> measures the average kinetic energy of particles. <b>Absolute zero</b> (−273 °C = 0 K) is where particle kinetic energy is minimum. T(K) = T(°C) + 273.</p>
<p><b>Gas pressure</b> comes from particles colliding with the walls. Heat a sealed gas → particles move faster → harder, more frequent collisions → pressure rises. Brownian motion (jittering of smoke particles) is evidence of fast random molecular motion.</p>
<div class="formula">For fixed mass of gas at constant temperature: pV = constant (p₁V₁ = p₂V₂)</div>
<h2>2. Thermal expansion & properties</h2>
<p>Most substances expand when heated (particles vibrate more and take more room — the particles themselves do NOT get bigger). Applications: expansion gaps in bridges/railways; bimetallic strips in thermostats. Order of expansion: gases ≫ liquids &gt; solids.</p>
<h2>3. Specific heat capacity</h2>
<div class="formula">Energy to change temperature: E = mcΔθ<br>c = energy per kg per °C (water: c = 4200 J/(kg·°C) — unusually high)</div>
<div class="example"><div class="exhead">Worked example</div>
<p>Energy to heat 2 kg of water from 20 °C to 100 °C?</p>
<p>E = 2 × 4200 × 80 = <b>672 000 J</b>.</p></div>
<h2>4. Changes of state</h2>
<p>Melting and boiling happen at constant temperature — the input energy breaks bonds instead of raising temperature. <b>Evaporation</b> happens at any temperature, only at the surface, and cools the liquid (the fastest particles escape, lowering the average KE of what remains). Evaporation increases with temperature, surface area, and air flow.</p>
<h2>5. Heat transfer</h2>
<ul>
<li><b>Conduction</b> — through solids; vibrations passed between particles (plus free electrons in metals, which is why metals conduct best).</li>
<li><b>Convection</b> — in fluids; heated fluid expands, becomes less dense, rises; cooler denser fluid sinks → convection current.</li>
<li><b>Radiation</b> — infrared waves; needs no medium (how the Sun heats Earth). Matt black surfaces are the best emitters AND absorbers; shiny white/silver the worst.</li>
</ul>
`,
quiz:[
{q:"Use the particle model to explain why gas pressure increases when a sealed gas is heated at constant volume.",
a:"Faster particles hit walls harder and more often → more force per area",
sol:"Heating raises the average kinetic energy, so particles move faster. Collisions with the container walls become more frequent and each impact exerts more force. Pressure = force/area, so pressure rises."},
{q:"A 0.5 kg aluminium block (c = 900 J/kg°C) is heated with 13 500 J. Find the temperature rise.",
a:"30 °C",
sol:"E = mcΔθ → Δθ = E/(mc) = 13 500/(0.5 × 900) = 30 °C."},
{q:"A gas has volume 300 cm³ at 100 kPa. It is compressed to 120 cm³ at constant temperature. New pressure?",
a:"250 kPa",
sol:"p₁V₁ = p₂V₂ → 100 × 300 = p₂ × 120 → p₂ = 250 kPa. Smaller volume → particles hit walls more often → higher pressure."},
{q:"Explain why sweating cools you down.",
a:"Evaporation removes the most energetic particles, lowering average KE (temperature) of what remains",
sol:"Sweat evaporates from the skin: the fastest (highest-energy) water molecules escape from the surface. The average kinetic energy of the remaining liquid falls, so its temperature drops, drawing heat from the skin."},
{q:"Why are the heating elements of a kettle at the bottom, and the freezer compartment of a fridge at the top?",
a:"Convection: hot fluid rises, cold fluid sinks",
sol:"Kettle: heated water at the bottom expands, becomes less dense, rises; cool water sinks to be heated — the whole volume circulates. Fridge: cold air at the top is denser and sinks, cooling everything below, while warmer air rises to be cooled. Both exploit convection currents."}
]},

// ---------------------------------------------------------------- 7 WAVES & SOUND
{
title:"Waves & Sound",
syl:"0625 §3.1, §3.4 — General properties of waves; sound",
yt:["transverse longitudinal waves IGCSE","wave equation v=fλ problems","echo speed of sound experiment IGCSE","ultrasound uses physics"],
body:`
<h2>1. What is a wave?</h2>
<p>A wave transfers <b>energy without transferring matter</b>. Two types:</p>
<ul>
<li><b>Transverse</b>: vibration ⟂ direction of travel (light, all EM waves, water surface waves).</li>
<li><b>Longitudinal</b>: vibration ∥ direction of travel, with compressions and rarefactions (sound).</li>
</ul>
<div class="fig">
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="85" x2="440" y2="85" stroke="#aaa" stroke-dasharray="4 4"/>
<path d="M 30 85 C 55 15, 85 15, 110 85 S 165 155, 190 85 S 245 15, 270 85 S 325 155, 350 85 S 405 15, 430 85" fill="none" stroke="#C2571B" stroke-width="3"/>
<line x1="70" y1="85" x2="70" y2="32" stroke="#5246D9" stroke-width="2"/>
<text x="76" y="55" font-size="12" fill="#5246D9">amplitude</text>
<line x1="70" y1="20" x2="230" y2="20" stroke="#1D7A4F" stroke-width="2"/>
<text x="115" y="14" font-size="12" fill="#1D7A4F">wavelength λ</text>
</svg>
<div class="figcap">Amplitude = max displacement from rest. Wavelength λ = one full cycle. Frequency f = cycles per second (Hz).</div></div>
<div class="formula">Wave equation: v = f λ &nbsp;&nbsp;|&nbsp;&nbsp; f = 1/T (T = period)</div>
<h2>2. Wave behaviour</h2>
<ul>
<li><b>Reflection</b>: angle of incidence = angle of reflection (measured from the normal).</li>
<li><b>Refraction</b>: change of direction when speed changes entering a new medium (frequency stays the same; wavelength changes).</li>
<li><b>Diffraction</b>: spreading through gaps — strongest when gap size ≈ wavelength.</li>
</ul>
<h2>3. Sound</h2>
<ul>
<li>Longitudinal wave produced by vibrating sources; needs a medium (no sound in vacuum).</li>
<li>Human hearing range: <b>20 Hz – 20 000 Hz</b>. Above 20 kHz = ultrasound (sonar, medical scans, cleaning).</li>
<li>Speed in air ≈ 330–350 m/s; faster in liquids, fastest in solids.</li>
<li>Louder = bigger amplitude; higher pitch = higher frequency.</li>
<li><b>Echo</b>: reflected sound. Distance = (speed × time)/2 — divide by 2 for the round trip!</li>
</ul>
<div class="example"><div class="exhead">Worked example — echo</div>
<p>A ship's sonar pulse returns from the seabed after 0.8 s (speed of sound in water 1500 m/s). Depth?</p>
<p>Total path = 1500 × 0.8 = 1200 m → depth = <b>600 m</b>.</p></div>
`,
quiz:[
{q:"A wave has frequency 50 Hz and wavelength 6.6 m. Find its speed.",
a:"330 m/s",
sol:"v = fλ = 50 × 6.6 = 330 m/s (this is a sound wave in air)."},
{q:"State two differences between transverse and longitudinal waves, giving one example of each.",
a:"Transverse: vibration perpendicular to travel (light). Longitudinal: parallel, with compressions/rarefactions (sound)",
sol:"In transverse waves particles oscillate at right angles to the energy direction (e.g. light, water ripples); in longitudinal waves they oscillate along it, forming compressions and rarefactions (e.g. sound). Also: all EM waves are transverse and travel in vacuum; sound cannot."},
{q:"A student claps 100 m from a wall and hears the echo 0.6 s later. Find the speed of sound.",
a:"333 m/s",
sol:"Round trip = 200 m. v = 200/0.6 ≈ 333 m/s. Forgetting the factor of 2 is the classic error."},
{q:"When light passes from air into glass, what happens to its speed, wavelength, and frequency?",
a:"Speed decreases, wavelength decreases, frequency unchanged",
sol:"The frequency is set by the source and cannot change. In glass the wave travels slower, and since v = fλ with f fixed, λ must shrink in proportion. This speed change is what causes refraction (bending toward the normal)."},
{q:"A sound wave has period 0.002 s. Find its frequency, and state whether a human can hear it.",
a:"500 Hz; yes",
sol:"f = 1/T = 1/0.002 = 500 Hz, comfortably inside the human range 20 Hz – 20 kHz."}
]},

// ---------------------------------------------------------------- 8 LIGHT & EM
{
title:"Light & the Electromagnetic Spectrum",
syl:"0625 §3.2, §3.3 — Light; electromagnetic spectrum",
yt:["refraction Snell's law IGCSE physics","total internal reflection critical angle","converging lens ray diagram IGCSE","electromagnetic spectrum uses dangers"],
body:`
<h2>1. Reflection in a plane mirror</h2>
<p>Image: same size, same distance behind the mirror as object in front, laterally inverted, and <b>virtual</b> (light doesn't actually pass through it — rays only appear to come from it).</p>
<h2>2. Refraction and Snell's law</h2>
<div class="formula">n = sin i / sin r &nbsp;&nbsp;|&nbsp;&nbsp; n = speed in vacuum / speed in medium</div>
<p>Light entering a denser medium (air → glass) slows and bends TOWARD the normal; leaving, it bends away.</p>
<h2>3. Total internal reflection (TIR)</h2>
<div class="formula">sin c = 1/n &nbsp;(c = critical angle)</div>
<p>Going from dense → less dense: if the angle of incidence exceeds c, ALL light reflects internally. Uses: optical fibres (internet, endoscopes), bicycle reflectors, prism binoculars. Glass: n ≈ 1.5 → c ≈ 42°.</p>
<h2>4. Thin converging lens</h2>
<p>Parallel rays converge to the <b>principal focus F</b>; the distance from lens to F is the <b>focal length f</b>. Ray diagram rules: (1) ray through centre → straight on; (2) ray parallel to axis → refracts through F; (3) ray through F → emerges parallel.</p>
<table><tr><th>Object position</th><th>Image</th><th>Use</th></tr>
<tr><td>Beyond 2F</td><td>real, inverted, smaller</td><td>camera, eye</td></tr>
<tr><td>Between F and 2F</td><td>real, inverted, larger</td><td>projector</td></tr>
<tr><td>Closer than F</td><td>virtual, upright, larger</td><td>magnifying glass</td></tr></table>
<h2>5. Dispersion</h2>
<p>White light through a prism splits into the spectrum (ROYGBIV) because each colour travels at a slightly different speed in glass — violet refracts most, red least. Light of a single frequency is <b>monochromatic</b>.</p>
<h2>6. The electromagnetic spectrum</h2>
<p>All EM waves are transverse and travel at <b>3 × 10⁸ m/s in a vacuum</b>. In order of increasing frequency (decreasing wavelength):</p>
<table><tr><th>Wave</th><th>Uses</th><th>Danger</th></tr>
<tr><td>Radio</td><td>broadcasting, astronomy</td><td>—</td></tr>
<tr><td>Microwave</td><td>satellite TV, phones, cooking</td><td>internal heating of tissue</td></tr>
<tr><td>Infrared</td><td>remote controls, thermal imaging, heaters</td><td>skin burns</td></tr>
<tr><td>Visible</td><td>sight, fibre optics</td><td>—</td></tr>
<tr><td>Ultraviolet</td><td>sterilising, detecting fake banknotes</td><td>skin cancer, eye damage</td></tr>
<tr><td>X-rays</td><td>medical imaging, security</td><td rowspan="2">mutation/cancer (ionising)</td></tr>
<tr><td>Gamma</td><td>cancer treatment, sterilising equipment</td></tr></table>
<p>Mnemonic: <b>R</b>aging <b>M</b>artians <b>I</b>nvaded <b>V</b>enus <b>U</b>sing <b>X</b>-ray <b>G</b>uns.</p>
`,
quiz:[
{q:"Light hits a glass block at 45° and refracts at 28°. Find the refractive index.",
a:"n ≈ 1.51",
sol:"n = sin 45°/sin 28° = 0.707/0.469 ≈ 1.51. Angles are always measured from the NORMAL, not the surface."},
{q:"The refractive index of water is 1.33. Find the critical angle.",
a:"c ≈ 48.8°",
sol:"sin c = 1/n = 1/1.33 = 0.752 → c = sin⁻¹(0.752) ≈ 48.8°. Above this angle, light inside water totally internally reflects at the surface."},
{q:"Explain how an optical fibre carries light around bends.",
a:"Repeated total internal reflection",
sol:"Light enters the fibre and strikes the internal wall at angles greater than the critical angle. It therefore reflects totally (no energy escapes) and zig-zags down the fibre, even around curves — carrying data as light pulses."},
{q:"An object is placed 5 cm from a converging lens of focal length 10 cm. Describe the image.",
a:"Virtual, upright, magnified (magnifying glass arrangement)",
sol:"The object is inside the focal length (closer than F). Rays diverge after the lens and appear to come from a larger, upright, virtual image on the same side as the object."},
{q:"Name the EM wave used for (a) mobile phone signals, (b) sterilising surgical instruments, (c) TV remote controls, and state one danger of ultraviolet.",
a:"(a) microwaves (b) gamma rays (c) infrared; UV causes skin cancer/eye damage",
sol:"Microwaves penetrate the atmosphere and carry phone/satellite signals; gamma rays kill microorganisms; IR carries short-range remote codes. UV is high-frequency enough to damage cells → sunburn, skin cancer, cataracts."}
]},

// ---------------------------------------------------------------- 9 ELECTRICITY
{
title:"Electricity",
syl:"0625 §4.1–4.4 — Static, current, circuits, safety",
yt:["current voltage resistance IGCSE physics","series parallel circuits rules IGCSE","V=IR ohm's law experiment","electrical power energy kWh IGCSE","fuse earth wire safety physics"],
body:`
<h2>1. Static electricity</h2>
<p>Rubbing insulators transfers <b>electrons only</b> (never protons). Gaining electrons → negative; losing → positive. Like charges repel, unlike attract. Charge is measured in coulombs (C).</p>
<h2>2. Current, voltage, resistance</h2>
<div class="formula">
Current I = Q/t (charge per second; amps) — conventional current flows + → −, electrons flow the other way<br>
e.m.f. / p.d. V = energy per unit charge (volts, J/C)<br>
Resistance R = V/I (ohms) &nbsp;|&nbsp; V = IR
</div>
<p>For a metal wire: R ∝ length, R ∝ 1/area (longer wire → more resistance; thicker wire → less).</p>
<h2>3. Series vs parallel — the rules table</h2>
<table>
<tr><th></th><th>Series</th><th>Parallel</th></tr>
<tr><td>Current</td><td>same everywhere</td><td>splits between branches (adds at junctions)</td></tr>
<tr><td>Voltage</td><td>shared between components</td><td>same across each branch</td></tr>
<tr><td>Resistance</td><td>R = R₁ + R₂</td><td>1/R = 1/R₁ + 1/R₂ (total &lt; smallest branch)</td></tr>
</table>
<div class="example"><div class="exhead">Worked example</div>
<p>A 12 V battery drives a series circuit of 2 Ω and 4 Ω resistors. Find the current and the p.d. across each resistor.</p>
<p>R = 6 Ω → I = 12/6 = <b>2 A</b> (same through both). V₂ = 2 × 2 = 4 V; V₄ = 2 × 4 = 8 V (adds to 12 ✓ — bigger resistor takes bigger share).</p></div>
<h2>4. Circuit components</h2>
<ul>
<li><b>Thermistor</b>: resistance falls as temperature rises (thermostats).</li>
<li><b>LDR</b>: resistance falls as light rises (automatic street lights).</li>
<li><b>Diode/LED</b>: allows current one way only.</li>
<li><b>Variable resistor</b>: dims lights, controls motor speed.</li>
<li>Ammeter: in series, very low resistance. Voltmeter: in parallel, very high resistance.</li>
</ul>
<h2>5. Electrical power and energy</h2>
<div class="formula">P = IV = I²R = V²/R &nbsp;&nbsp;|&nbsp;&nbsp; E = Pt = IVt<br>
Domestic energy: kilowatt-hours — E(kWh) = P(kW) × t(h)</div>
<h2>6. Safety</h2>
<ul>
<li><b>Fuse</b>: thin wire in the LIVE wire that melts if current exceeds its rating, breaking the circuit. Choose a rating just above the appliance's normal current.</li>
<li><b>Earth wire</b>: connects metal casing to ground. If the live wire touches the casing, a huge current flows to earth and blows the fuse — preventing electrocution.</li>
<li>Hazards: damaged insulation, overloaded sockets, damp conditions, cables under carpets.</li>
</ul>
`,
quiz:[
{q:"A charge of 240 C flows through a lamp in 2 minutes. Find the current.",
a:"2 A",
sol:"I = Q/t = 240/120 = 2 A. Convert minutes to seconds first."},
{q:"Two resistors, 3 Ω and 6 Ω, are connected in parallel to a 6 V supply. Find the total resistance and total current from the supply.",
a:"2 Ω; 3 A",
sol:"1/R = 1/3 + 1/6 = 1/2 → R = 2 Ω (less than the smallest branch, as always in parallel). I = V/R = 6/2 = 3 A. Check: branch currents 2 A + 1 A = 3 A ✓."},
{q:"A 2.5 kW kettle runs on 230 V. Find the current and choose a suitable fuse (3 A, 5 A, or 13 A).",
a:"I ≈ 10.9 A → 13 A fuse",
sol:"I = P/V = 2500/230 ≈ 10.9 A. The fuse must be rated just ABOVE the working current: 13 A. A 5 A fuse would blow immediately; a much larger one wouldn't protect the cable."},
{q:"Explain how the earth wire and fuse together protect a user if the live wire touches the metal casing of a washing machine.",
a:"Earth wire gives a low-resistance path → large current → fuse melts → circuit disconnected",
sol:"The casing is earthed. A live-to-casing fault sends a very large current through the low-resistance earth wire instead of through a person. This surge exceeds the fuse rating, the fuse melts, and the appliance is disconnected from the live supply."},
{q:"An electric heater rated 2 kW runs for 3 hours daily. If electricity costs RM0.50 per kWh, find the weekly cost.",
a:"RM21",
sol:"Daily energy = 2 × 3 = 6 kWh; weekly = 42 kWh. Cost = 42 × 0.50 = RM21."}
]},

// ---------------------------------------------------------------- 10 MAGNETISM
{
title:"Magnetism & Electromagnetism",
syl:"0625 §4.5 (magnetism is §4.1 simple magnetism + electromagnetic effects)",
yt:["magnetic fields IGCSE physics","electromagnet solenoid factors","motor effect Fleming left hand rule","electromagnetic induction generator IGCSE","transformer equation IGCSE physics"],
body:`
<h2>1. Simple magnetism</h2>
<ul>
<li>Like poles repel, unlike attract. <b>Repulsion is the only test for a magnet</b> (attraction happens with any magnetic material too).</li>
<li>Magnetic materials: iron, steel, nickel, cobalt. <b>Iron</b> = soft magnetic material (magnetises/demagnetises easily → electromagnet cores). <b>Steel</b> = hard (keeps magnetism → permanent magnets).</li>
<li>Field lines run N → S outside the magnet; closer lines = stronger field. Plot with a compass or iron filings.</li>
</ul>
<h2>2. Electromagnetism</h2>
<p>A current produces a magnetic field: circular field lines around a straight wire (right-hand grip rule), and a bar-magnet-like field around a solenoid. Strengthen an electromagnet by: more current, more turns, adding a soft-iron core.</p>
<h2>3. The motor effect</h2>
<p>A current-carrying wire in a magnetic field feels a force — <b>Fleming's left-hand rule</b>: First finger = Field (N→S), seCond = Current, thuMb = Motion. Reverse the current OR the field → force reverses.</p>
<p>A DC motor: a current loop in a field feels opposite forces on its two sides → turning effect. The <b>split-ring commutator</b> reverses the current every half turn so the coil keeps spinning the same way. Faster/stronger: more current, more turns, stronger field.</p>
<h2>4. Electromagnetic induction</h2>
<p>Moving a wire through a field (or changing the field through a coil) induces an e.m.f. — if the circuit is complete, a current flows. Bigger e.m.f.: move faster, more turns, stronger magnet. Reverse motion or poles → induced current reverses. This is how <b>generators</b> work (rotating coil + slip rings → a.c. output).</p>
<h2>5. Transformers</h2>
<div class="formula">Vₛ/Vₚ = Nₛ/Nₚ &nbsp;&nbsp;|&nbsp;&nbsp; Ideal (100% efficient): VₚIₚ = VₛIₛ</div>
<p>Two coils on an iron core; works on <b>a.c. only</b> (needs a changing field). Step-up: more secondary turns → higher voltage. Power is transmitted at very high voltage because for the same power, higher V → lower I → less energy wasted as heat in cables (loss = I²R).</p>
<div class="example"><div class="exhead">Worked example</div>
<p>A transformer steps 240 V down to 12 V. The primary has 4000 turns; the lamp draws 2 A. Find Nₛ and the primary current (assume ideal).</p>
<p>Nₛ = 4000 × 12/240 = <b>200 turns</b>. VₚIₚ = VₛIₛ → Iₚ = (12 × 2)/240 = <b>0.1 A</b>.</p></div>
`,
quiz:[
{q:"How can you prove a metal bar is a magnet and not just a magnetic material?",
a:"Show it can REPEL a known magnet",
sol:"Bring each end near a known magnet's pole. Attraction is inconclusive (any iron bar attracts), but repulsion only occurs between two like poles — so repulsion proves the bar is itself magnetised."},
{q:"State three ways to increase the strength of an electromagnet.",
a:"More turns, larger current, soft-iron core",
sol:"Field strength grows with current and turn count; a soft-iron core concentrates the field lines and magnifies the field greatly. (Soft iron, not steel — it must switch off with the current.)"},
{q:"In a DC motor, what is the purpose of the split-ring commutator?",
a:"Reverses the coil current every half revolution so the turning force stays in one direction",
sol:"Without it, the force on each side of the coil would reverse the rotation every half turn. The commutator swaps the connections each half revolution, keeping the couple acting in the same rotational direction — continuous spinning."},
{q:"A transformer has 500 primary turns and 2500 secondary turns, with a 230 V a.c. input. Find the output voltage. Why won't it work with d.c.?",
a:"1150 V; d.c. gives a constant field → no induction",
sol:"Vₛ = 230 × 2500/500 = 1150 V (step-up). Induction requires a CHANGING magnetic field. Steady d.c. produces a constant field in the core, so no e.m.f. is induced in the secondary."},
{q:"Explain why electrical power is transmitted through the national grid at very high voltage.",
a:"Same power at higher V means lower I; cable heat loss = I²R is greatly reduced",
sol:"P = VI, so raising V lets the same power flow with a much smaller current. Heat wasted in the cables is I²R — halving the current quarters the loss. Transformers step voltage up for transmission and back down for safe domestic use."}
]},

// ---------------------------------------------------------------- 11 NUCLEAR
{
title:"Nuclear Physics",
syl:"0625 §5 — The nuclear atom; radioactivity",
yt:["alpha beta gamma properties IGCSE","half life calculation IGCSE physics","Rutherford alpha scattering experiment","nuclear fission fusion IGCSE"],
body:`
<h2>1. The nuclear atom</h2>
<p>Rutherford's alpha-scattering: most α particles passed straight through gold foil (atom is mostly empty space); a few deflected sharply (tiny, dense, positive nucleus). Structure: protons (+1) and neutrons (0) in the nucleus; electrons (−1) around it.</p>
<div class="formula">Nuclide notation: ᴬ_Z X &nbsp;— A = nucleon (mass) number, Z = proton number, neutrons = A − Z<br>
Isotopes: same Z (same element), different A (different neutrons)</div>
<h2>2. The three radiations</h2>
<table>
<tr><th></th><th>Alpha α</th><th>Beta β⁻</th><th>Gamma γ</th></tr>
<tr><td>Nature</td><td>helium nucleus (2p + 2n)</td><td>fast electron (from a neutron → proton)</td><td>EM wave</td></tr>
<tr><td>Charge</td><td>+2</td><td>−1</td><td>0</td></tr>
<tr><td>Ionising power</td><td>very strong</td><td>medium</td><td>weak</td></tr>
<tr><td>Penetration</td><td>stopped by paper/skin</td><td>stopped by few mm aluminium</td><td>reduced by thick lead/concrete</td></tr>
<tr><td>Deflection in fields</td><td>slight (heavy, +)</td><td>large, opposite to α</td><td>none</td></tr>
</table>
<h2>3. Decay equations</h2>
<div class="formula">α decay: A drops by 4, Z drops by 2 &nbsp;|&nbsp; β⁻ decay: A unchanged, Z rises by 1 &nbsp;|&nbsp; γ: no change in A or Z (energy release only)</div>
<p>Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He (alpha). Both mass and proton numbers must balance across the arrow.</p>
<h2>4. Half-life</h2>
<p>Radioactive decay is <b>random and spontaneous</b> — unaffected by temperature or chemistry. The <b>half-life</b> is the time for half the unstable nuclei (or for the activity) to halve.</p>
<div class="example"><div class="exhead">Worked example</div>
<p>A sample has activity 800 Bq and half-life 3 days. Activity after 12 days?</p>
<p>12 days = 4 half-lives: 800 → 400 → 200 → 100 → <b>50 Bq</b>.</p>
<p>Remember to subtract <b>background radiation</b> from measured counts before doing half-life work.</p></div>
<h2>5. Uses and dangers</h2>
<ul>
<li>Medical tracers (γ, short half-life), cancer radiotherapy (γ), sterilising instruments (γ).</li>
<li>Thickness control in factories (β), smoke detectors (α).</li>
<li>Carbon-14 dating of once-living material.</li>
<li>Dangers: ionisation damages DNA → mutation, cancer. Protection: shielding, distance, minimise exposure time; store sources in lead containers.</li>
</ul>
<h2>6. Fission vs fusion</h2>
<p><b>Fission</b>: a heavy nucleus (U-235) absorbs a neutron and splits, releasing energy + more neutrons → chain reaction (power stations). <b>Fusion</b>: light nuclei (hydrogen) join at extreme temperature/pressure, releasing energy — the Sun's power source.</p>
`,
quiz:[
{q:"An isotope is written ²¹⁰₈₄Po. State its number of protons, neutrons and electrons (neutral atom).",
a:"84 p, 126 n, 84 e",
sol:"Z = 84 protons; neutrons = A − Z = 210 − 84 = 126; a neutral atom has equal electrons and protons: 84."},
{q:"²¹⁴₈₂Pb decays by β⁻ emission. Write the daughter nuclide.",
a:"²¹⁴₈₃Bi",
sol:"β⁻: a neutron becomes a proton + electron. A stays 214, Z rises 82 → 83 (bismuth). The equation must balance: ²¹⁴₈₂Pb → ²¹⁴₈₃Bi + ⁰₋₁e."},
{q:"A radioactive source's corrected count rate falls from 480 to 60 counts/min in 24 hours. Find the half-life.",
a:"8 hours",
sol:"480 → 240 → 120 → 60 is 3 halvings in 24 h → half-life = 24/3 = 8 hours."},
{q:"Which radiation is used in a paper-thickness gauge, and why?",
a:"Beta — alpha would be fully blocked, gamma barely affected",
sol:"The detector measures how much radiation penetrates the paper. Alpha is stopped completely by paper (no reading changes) and gamma passes almost unchanged (insensitive). Beta is partially absorbed, so its count varies measurably with thickness."},
{q:"State two differences between nuclear fission and fusion, and identify which powers the Sun.",
a:"Fission splits heavy nuclei (reactors); fusion joins light nuclei at extreme temperatures — fusion powers the Sun",
sol:"Fission: heavy nucleus (e.g. U-235) splits after neutron capture; used in power stations; produces radioactive waste. Fusion: light nuclei (hydrogen) combine into helium; requires enormous temperature/pressure; powers stars; little long-lived waste."}
]},

// ---------------------------------------------------------------- 12 SPACE
{
title:"Space Physics",
syl:"0625 §6 — Earth & Solar System; stars & the Universe",
yt:["space physics IGCSE 0625","life cycle of a star IGCSE","redshift big bang evidence IGCSE","orbital speed equation physics"],
body:`
<h2>1. The Earth and the Solar System</h2>
<ul>
<li>Earth rotates on its axis every ~24 h (day/night) and orbits the Sun in ~365 days. The tilted axis (23.5°) causes seasons.</li>
<li>The Moon orbits Earth in ~one month; its phases come from how much of the sunlit half we see.</li>
<li>Solar System: Sun + 4 rocky inner planets (Mercury, Venus, Earth, Mars) + asteroid belt + 4 gas/ice giants (Jupiter, Saturn, Uranus, Neptune) + dwarf planets and comets. It formed from a collapsing cloud of gas and dust (a nebula) pulled together by gravity.</li>
<li>The further a planet is from the Sun, the weaker the Sun's gravitational pull and the slower its orbital speed; comets have highly elliptical orbits, fastest when nearest the Sun.</li>
</ul>
<div class="formula">Orbital speed: v = 2πr / T &nbsp;(r = orbital radius, T = period)</div>
<div class="example"><div class="exhead">Worked example</div>
<p>Earth's orbital radius ≈ 1.5 × 10¹¹ m, period 365 days. Orbital speed?</p>
<p>T = 365 × 24 × 3600 ≈ 3.15 × 10⁷ s. v = 2π × 1.5 × 10¹¹ / 3.15 × 10⁷ ≈ <b>3.0 × 10⁴ m/s</b> — 30 km every second!</p></div>
<h2>2. Stars</h2>
<ul>
<li>The Sun is a medium star of mostly hydrogen and helium, radiating energy from <b>fusion of hydrogen into helium</b> in its core.</li>
<li>Stable stars balance two effects: gravity pulling inward vs outward pressure from the hot fusing core.</li>
</ul>
<p><b>Life cycle:</b> nebula → protostar → main-sequence star → then:</p>
<ul>
<li><b>Sun-like star:</b> red giant → planetary nebula → white dwarf.</li>
<li><b>Massive star:</b> red supergiant → supernova → neutron star or (most massive) black hole. Supernovae forge and scatter the heavy elements — the material of planets and of us.</li>
</ul>
<h2>3. The Universe</h2>
<ul>
<li>The Milky Way is one of billions of galaxies, each with billions of stars. Distances are measured in <b>light-years</b> (distance light travels in one year ≈ 9.5 × 10¹⁵ m).</li>
<li><b>Redshift:</b> light from distant galaxies is shifted to longer wavelengths — they are moving away from us; the further the galaxy, the faster it recedes (Hubble's law).</li>
<li>This, plus the <b>cosmic microwave background radiation (CMBR)</b> — leftover radiation from the hot early universe, now stretched to microwaves — is the key evidence for the <b>Big Bang</b>: the Universe began from a single hot dense point ~13.8 billion years ago and has expanded ever since.</li>
</ul>
<div class="formula">Hubble: v = H₀d &nbsp;— recession speed ∝ distance; the Universe's age ≈ 1/H₀</div>
`,
quiz:[
{q:"Explain why we have seasons.",
a:"Earth's axis is tilted 23.5°, so each hemisphere leans toward the Sun for part of the orbit",
sol:"When a hemisphere tilts toward the Sun, sunlight strikes it more directly and days are longer → summer. Half an orbit later it tilts away → winter. It is NOT because Earth is closer to the Sun."},
{q:"A satellite orbits at radius 4.2 × 10⁷ m with a period of 24 hours. Find its orbital speed.",
a:"≈ 3050 m/s",
sol:"v = 2πr/T = 2π × 4.2 × 10⁷ / 86 400 ≈ 3.05 × 10³ m/s. (A 24 h period means it hovers over one spot — geostationary, used for satellite TV.)"},
{q:"Describe the remaining life cycle of the Sun from now.",
a:"Main sequence → red giant → planetary nebula → white dwarf",
sol:"The Sun will fuse hydrogen for billions more years (main sequence). When core hydrogen runs low it swells into a red giant, then sheds its outer layers as a planetary nebula, leaving a hot dense white dwarf that slowly cools."},
{q:"What is redshift, and what does it tell us about the Universe?",
a:"Wavelengths of light from distant galaxies are stretched toward the red end → galaxies recede → Universe is expanding",
sol:"Light from almost all galaxies shows spectral lines shifted to longer wavelengths. The further the galaxy, the bigger the shift, meaning recession speed grows with distance — exactly what an expanding Universe predicts, supporting the Big Bang."},
{q:"State two pieces of evidence for the Big Bang theory.",
a:"Redshift of distant galaxies; cosmic microwave background radiation",
sol:"1) Galactic redshift shows everything is moving apart — run time backwards and the Universe converges to a point. 2) The CMBR is uniform microwave radiation from every direction: the cooled, stretched afterglow of the hot early Universe."}
]}
];
