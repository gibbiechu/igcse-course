// Extra leveled questions — appended to each chapter (1 basic warm-up + 1 advanced challenge)
// lvl: 'basic' | 'inter' | 'adv'

const EXTRA = {
math: [
// 1 Functions
[{lvl:'basic',q:"f(x) = 4x + 1. Find f(3) and f(−2).",a:"13 and −7",sol:"Substitute directly: f(3) = 12 + 1 = 13; f(−2) = −8 + 1 = −7. A function is just a substitution rule."},
 {lvl:'adv',q:"f(x) = x² − 6x + 11 for x ≥ 3. Find f⁻¹(x), stating its domain.",a:"f⁻¹(x) = 3 + √(x − 2), for x ≥ 2",sol:"Complete the square: f(x) = (x − 3)² + 2. y = (x−3)² + 2 → swap → x − 2 = (y−3)² → y = 3 ± √(x−2). Domain x ≥ 3 means y ≥ 3, so take +: f⁻¹(x) = 3 + √(x−2). Domain of f⁻¹ = range of f = [2, ∞)."}],
// 2 Quadratics
[{lvl:'basic',q:"Solve x² − 7x + 12 = 0 by factorising.",a:"x = 3 or x = 4",sol:"Two numbers multiplying to 12, adding to −7: −3 and −4. (x − 3)(x − 4) = 0."},
 {lvl:'adv',q:"The line y = mx + 2 intersects y = x² − 4x + 6 at two distinct points. Find the range of m.",a:"m < −8 or m > 0",sol:"x² − 4x + 6 = mx + 2 → x² − (4 + m)x + 4 = 0. Two points → D > 0: (4 + m)² − 16 > 0 → m² + 8m > 0 → m(m + 8) > 0 → m < −8 or m > 0."}],
// 3 Polynomials
[{lvl:'basic',q:"Is (x − 1) a factor of x³ + 2x² − 3x?",a:"Yes",sol:"p(1) = 1 + 2 − 3 = 0, so by the factor theorem (x − 1) is a factor. Indeed p(x) = x(x − 1)(x + 3)."},
 {lvl:'adv',q:"p(x) = 2x³ + ax² + bx − 2 has a factor (x − 2) and leaves remainder −12 when divided by (x + 1). Find a and b, then factorise p(x) completely.",a:"a = −5, b = 3; p(x) = (x − 2)(2x² − x + 1)",sol:"p(2) = 0: 16 + 4a + 2b − 2 = 0 → 4a + 2b = −14 → 2a + b = −7. p(−1) = −12: −2 + a − b − 2 = −12 → a − b = −8. Add the two: 3a = −15 → a = −5, b = 3. So p(x) = 2x³ − 5x² + 3x − 2. Divide by (x − 2): p(x) = (x − 2)(2x² − x + 1). The quadratic has D = 1 − 8 < 0, so it does not factorise further — final answer p(x) = (x − 2)(2x² − x + 1), with x = 2 the only real root."}],
// 4 Modulus
[{lvl:'basic',q:"Solve |x − 4| = 6.",a:"x = 10 or x = −2",sol:"x − 4 = 6 → x = 10, or x − 4 = −6 → x = −2. The expression is 6 units from zero either way."},
 {lvl:'adv',q:"Solve |x² − 4x| = 3.",a:"x = 1, 3, 2 ± √7",sol:"Case 1: x² − 4x = 3 → x² − 4x − 3 = 0 → x = (4 ± √28)/2 = 2 ± √7. Case 2: x² − 4x = −3 → x² − 4x + 3 = 0 → (x−1)(x−3) = 0 → x = 1, 3. Four solutions total — a quadratic inside a modulus can double the count."}],
// 5 Simultaneous
[{lvl:'basic',q:"Solve y = x + 2 and y = 3x − 4.",a:"x = 3, y = 5",sol:"x + 2 = 3x − 4 → 6 = 2x → x = 3, y = 5. Two linear equations: equate and solve."},
 {lvl:'adv',q:"The line x + y = k is a tangent to the curve x² + 2y² = 3. Find the possible values of k.",a:"k = ±(3√2)/2",sol:"y = k − x → x² + 2(k − x)² = 3 → 3x² − 4kx + 2k² − 3 = 0. Tangent → D = 0: 16k² − 12(2k² − 3) = 0 → −8k² + 36 = 0 → k² = 4.5 → k = ±3/√2 = ±(3√2)/2."}],
// 6 Logs
[{lvl:'basic',q:"Write 10³ = 1000 and 2⁻³ = 1/8 in log form.",a:"log₁₀1000 = 3; log₂(1/8) = −3",sol:"aˣ = y ⇔ logₐy = x. The log IS the exponent."},
 {lvl:'adv',q:"Solve log₃x − log₉x = 2. (Hint: change of base.)",a:"x = 81",sol:"log₉x = log₃x / log₃9 = (log₃x)/2. Let u = log₃x: u − u/2 = 2 → u/2 = 2 → u = 4 → x = 3⁴ = 81. Change of base collapses mixed-base equations into one variable."}],
// 7 Straight lines
[{lvl:'basic',q:"Find the gradient and y-intercept of 3y = 6x − 9.",a:"m = 2, intercept −3",sol:"Divide by 3: y = 2x − 3. Compare with y = mx + c."},
 {lvl:'adv',q:"ABCD is a rhombus with A(1, 2) and C(7, 10). B lies on the line y = x + 1. Find the coordinates where the diagonal BD crosses AC, and the equation of BD.",a:"Midpoint (4, 6); BD: y = −¾x + 9",sol:"Rhombus diagonals bisect perpendicularly. Midpoint of AC = (4, 6). m(AC) = 8/6 = 4/3 → m(BD) = −3/4. BD: y − 6 = −¾(x − 4) → y = −¾x + 9. (B is then the intersection with y = x + 1: x + 1 = −¾x + 9 → x = 32/7.)"}],
// 8 Circular measure
[{lvl:'basic',q:"Find the arc length of a sector with r = 5 cm and θ = 2 rad.",a:"10 cm",sol:"s = rθ = 5 × 2 = 10 cm. With radians the formula is a one-liner."},
 {lvl:'adv',q:"Two circles of radius 6 cm intersect so that each passes through the other's centre. Find the exact area of the overlapping region.",a:"24π − 18√3 ≈ 44.2 cm²",sol:"Centres are 6 cm apart, radius 6 → the chord subtends angle 2π/3 at each centre (equilateral triangle geometry: half-angle has cos = 3/6). Overlap = 2 segments = 2 × ½r²(θ − sinθ) = 36(2π/3 − sin 2π/3) = 36(2π/3 − √3/2) = 24π − 18√3 ≈ 44.2 cm²."}],
// 9 Trig
[{lvl:'basic',q:"Solve cos x = 0.5 for 0° ≤ x ≤ 360°.",a:"x = 60°, 300°",sol:"Principal value 60°. Cos positive in quadrants 1 and 4: second solution 360° − 60° = 300°."},
 {lvl:'adv',q:"Solve 3sin x = 2cos²x for 0 ≤ x ≤ 2π (answers in radians, 3 s.f. or exact).",a:"x = π/6 and 5π/6",sol:"cos²x = 1 − sin²x: 3sinx = 2 − 2sin²x → 2sin²x + 3sinx − 2 = 0 → (2sinx − 1)(sinx + 2) = 0. sinx = −2 impossible; sinx = ½ → x = π/6, 5π/6. Always discard roots outside [−1, 1]."}],
// 10 P&C
[{lvl:'basic',q:"Evaluate ⁵P₂ and ⁵C₂.",a:"20 and 10",sol:"⁵P₂ = 5 × 4 = 20 (order matters). ⁵C₂ = 20/2! = 10 (order doesn't — each pair was counted twice)."},
 {lvl:'adv',q:"How many arrangements of the letters of DIGITS are there? How many have the two I's separated?",a:"360 total; 240 separated",sol:"6 letters with I repeated twice: 6!/2! = 360. I's together: treat II as a block → 5! = 120 (no ×2 since the I's are identical). Separated = 360 − 120 = 240. Repeated letters divide; identical blocks don't get internally arranged."}],
// 11 Series
[{lvl:'basic',q:"Find the 10th term of the AP 4, 9, 14, ...",a:"49",sol:"a = 4, d = 5. u₁₀ = a + 9d = 4 + 45 = 49."},
 {lvl:'adv',q:"The 1st, 4th and 10th terms of an AP (d ≠ 0) form a GP. Given the AP's first term is 6, find d and the GP's common ratio.",a:"d = 2, r = 2",sol:"Terms: 6, 6 + 3d, 6 + 9d in GP → (6 + 3d)² = 6(6 + 9d) → 36 + 36d + 9d² = 36 + 54d → 9d² = 18d → d = 2 (d ≠ 0). GP: 6, 12, 24 → r = 2. The crossover trick: (middle)² = (first)(last)."}],
// 12 Differentiation
[{lvl:'basic',q:"Differentiate y = 5x³ − 2x + 7.",a:"15x² − 2",sol:"Power rule term by term; constants vanish."},
 {lvl:'adv',q:"A closed cylindrical can has volume 250π cm³. Find the radius that minimises its total surface area, and prove it is a minimum.",a:"r = 5 cm (h = 10 cm)",sol:"V = πr²h = 250π → h = 250/r². S = 2πr² + 2πrh = 2πr² + 500π/r. dS/dr = 4πr − 500π/r² = 0 → r³ = 125 → r = 5. d²S/dr² = 4π + 1000π/r³ > 0 → minimum. Optimisation: express S in ONE variable using the constraint, then differentiate."}],
// 13 Integration
[{lvl:'basic',q:"Find ∫ 4x dx.",a:"2x² + c",sol:"Raise the power: 4x²/2 + c = 2x² + c. Don't forget + c."},
 {lvl:'adv',q:"The curve y = x² and the line y = kx (k > 0) enclose a region of area 36. Find k.",a:"k = 6",sol:"Intersect at x = 0 and x = k. Area = ∫₀ᵏ (kx − x²)dx = [kx²/2 − x³/3]₀ᵏ = k³/2 − k³/3 = k³/6 = 36 → k³ = 216 → k = 6."}],
// 14 Kinematics
[{lvl:'basic',q:"s = 5t². Find the velocity at t = 3.",a:"30 m/s",sol:"v = ds/dt = 10t = 30 at t = 3."},
 {lvl:'adv',q:"A particle's velocity is v = 12e⁻²ᵗ − 4 m/s. Find (a) when it is at rest, (b) its acceleration then, (c) the displacement from t = 0 to that instant.",a:"(a) t = ½ln3 ≈ 0.549 s (b) a = −8 m/s² (c) s = 4 − 2ln3 ≈ 1.80 m",sol:"(a) 12e⁻²ᵗ = 4 → e⁻²ᵗ = 1/3 → t = ½ln3. (b) a = dv/dt = −24e⁻²ᵗ = −24(1/3) = −8. (c) s = ∫(12e⁻²ᵗ − 4)dt = −6e⁻²ᵗ − 4t from 0 to ½ln3 = (−6·⅓ − 2ln3) − (−6) = 4 − 2ln3."}],
// 15 Vectors
[{lvl:'basic',q:"Find the magnitude of 3i + 4j.",a:"5",sol:"|v| = √(9 + 16) = 5 — the classic 3-4-5 triangle."},
 {lvl:'adv',q:"At noon, ship A is at position vector (2i + 3j) km moving with velocity (4i + j) km/h; ship B is at (10i − j) km with velocity (2i + 2j) km/h. Show they collide, and find the time and place.",a:"Collide at 4 pm at (18i + 7j) km",sol:"r_A = (2 + 4t)i + (3 + t)j; r_B = (10 + 2t)i + (−1 + 2t)j. i: 2 + 4t = 10 + 2t → t = 4. j at t = 4: 3 + 4 = 7 and −1 + 8 = 7 ✓ — both components match at the SAME t, so they truly collide at t = 4 h (4 pm), position 18i + 7j."}]
],

phys: [
// 1 Measurement
[{lvl:'basic',q:"Convert 2.5 g/cm³ to kg/m³.",a:"2500 kg/m³",sol:"Multiply by 1000: 1 g/cm³ = 1000 kg/m³."},
 {lvl:'adv',q:"A measuring cylinder reads 48.0 cm³ of liquid of mass 38.4 g. 20 identical ball bearings (total mass 54.0 g) are added and the level rises to 54.0 cm³. Find the density of the liquid AND of the bearing metal.",a:"Liquid 0.80 g/cm³; metal 9.0 g/cm³",sol:"Liquid: 38.4/48.0 = 0.80 g/cm³. Bearings' volume = 54.0 − 48.0 = 6.0 cm³ for 20 balls; density = 54.0 g / 6.0 cm³ = 9.0 g/cm³. Displacement gives volume of ALL bearings at once — more accurate than measuring one tiny ball."}],
// 2 Motion
[{lvl:'basic',q:"A runner covers 100 m in 12.5 s. Average speed?",a:"8 m/s",sol:"v = d/t = 100/12.5 = 8 m/s."},
 {lvl:'adv',q:"A car travels at 30 m/s. The driver's reaction time is 0.6 s, then the brakes decelerate the car at 5 m/s². Find the total stopping distance.",a:"108 m",sol:"Thinking distance = 30 × 0.6 = 18 m (constant speed). Braking: time to stop = 30/5 = 6 s; braking distance = area = ½ × 6 × 30 = 90 m. Total = 108 m. Stopping distance = thinking + braking — and braking distance scales with speed²."}],
// 3 Forces
[{lvl:'basic',q:"Find the weight of a 3 kg bag on Earth (g = 9.8 N/kg).",a:"29.4 N",sol:"W = mg = 3 × 9.8 = 29.4 N."},
 {lvl:'adv',q:"A 0.05 kg bullet travelling at 400 m/s embeds in a 1.95 kg wooden block hanging at rest. Find the block's speed just after impact, and the kinetic energy lost.",a:"10 m/s; 3900 J lost",sol:"Momentum: 0.05 × 400 = 20 kg·m/s = (2.00)v → v = 10 m/s. KE before = ½(0.05)(400²) = 4000 J; after = ½(2)(100) = 100 J. Lost = 3900 J → heat/deformation. Momentum is conserved in ALL collisions; kinetic energy only in elastic ones."}],
// 4 Energy
[{lvl:'basic',q:"How much work is done pushing a box 4 m with a force of 50 N?",a:"200 J",sol:"W = Fd = 50 × 4 = 200 J."},
 {lvl:'adv',q:"A 1200 kg car climbs a hill 60 m high at constant speed in 90 s against a friction force of 400 N acting over the 500 m road. Find the useful output power of the engine.",a:"≈ 10.1 kW",sol:"Work against gravity = mgh = 1200 × 9.8 × 60 = 705 600 J. Work against friction = 400 × 500 = 200 000 J. Total = 905 600 J over 90 s → P = 10 062 W ≈ 10.1 kW. At constant speed no KE change — engine work goes entirely to GPE + friction."}],
// 5 Pressure
[{lvl:'basic',q:"A force of 60 N acts on 0.02 m². Pressure?",a:"3000 Pa",sol:"p = F/A = 60/0.02 = 3000 Pa."},
 {lvl:'adv',q:"A U-tube manometer containing water (ρ = 1000 kg/m³) is connected to a gas supply. The water on the open side stands 15 cm higher. Atmospheric pressure is 1.00 × 10⁵ Pa. Find the gas pressure.",a:"1.015 × 10⁵ Pa",sol:"The gas pushes water down/up by h = 0.15 m: gas pressure = atmospheric + ρgh = 100 000 + 1000 × 9.8 × 0.15 = 101 470 ≈ 1.015 × 10⁵ Pa. Higher liquid on the open side ⇒ gas pressure ABOVE atmospheric."}],
// 6 Thermal
[{lvl:'basic',q:"Convert 27 °C to kelvin.",a:"300 K",sol:"T(K) = T(°C) + 273 = 300 K."},
 {lvl:'adv',q:"A 0.2 kg copper block (c = 390 J/kg°C) at 95 °C is dropped into 0.5 kg of water (c = 4200 J/kg°C) at 20 °C. Ignoring losses, find the final temperature.",a:"≈ 22.7 °C",sol:"Heat lost by copper = heat gained by water: 0.2 × 390 × (95 − T) = 0.5 × 4200 × (T − 20) → 78(95 − T) = 2100(T − 20) → 7410 − 78T = 2100T − 42000 → 49410 = 2178T → T ≈ 22.7 °C. Water's huge c means it barely warms while the copper plunges."}],
// 7 Waves
[{lvl:'basic',q:"A wave completes 5 cycles per second. State its frequency and period.",a:"5 Hz; 0.2 s",sol:"f = 5 Hz by definition; T = 1/f = 0.2 s."},
 {lvl:'adv',q:"A radar pulse (EM wave, 3 × 10⁸ m/s) reflects off an aircraft and returns in 4 × 10⁻⁴ s. Later, sonar (1500 m/s in water) returns from a submarine in the same 4 × 10⁻⁴ s. Find both distances and explain the huge difference.",a:"Aircraft 60 km; submarine 0.3 m",sol:"Distance = vt/2. Radar: 3×10⁸ × 4×10⁻⁴ / 2 = 60 000 m. Sonar: 1500 × 4×10⁻⁴ / 2 = 0.3 m. EM waves travel ~200 000× faster than sound in water, so the same echo time corresponds to vastly different ranges."}],
// 8 Light
[{lvl:'basic',q:"A ray hits a plane mirror at 35° to the normal. What is the angle of reflection?",a:"35°",sol:"Law of reflection: angle of incidence = angle of reflection, both measured from the normal."},
 {lvl:'adv',q:"Light travels at 3.0 × 10⁸ m/s in air and 2.0 × 10⁸ m/s in a plastic. Find the refractive index, the critical angle, and whether a ray hitting the inside surface at 45° escapes.",a:"n = 1.5; c ≈ 41.8°; no — it totally internally reflects",sol:"n = c/v = 3/2 = 1.5. sin c = 1/1.5 → c = 41.8°. The internal ray at 45° > 41.8° exceeds the critical angle → total internal reflection, no light escapes. This is exactly the optical-fibre condition."}],
// 9 Electricity
[{lvl:'basic',q:"A 6 V battery drives 2 A through a lamp. Find the lamp's resistance.",a:"3 Ω",sol:"R = V/I = 6/2 = 3 Ω."},
 {lvl:'adv',q:"A 12 V battery connects to a 2 Ω resistor in series with a parallel pair (3 Ω and 6 Ω). Find the current through EACH resistor.",a:"2 Ω: 3 A; 3 Ω: 2 A; 6 Ω: 1 A",sol:"Parallel pair: 1/R = 1/3 + 1/6 → 2 Ω. Total = 2 + 2 = 4 Ω → supply current I = 12/4 = 3 A (all through the series 2 Ω). P.d. across the pair = 3 × 2 = 6 V, same on both branches: I₃ = 6/3 = 2 A, I₆ = 6/6 = 1 A. Check: 2 + 1 = 3 A ✓."}],
// 10 Magnetism
[{lvl:'basic',q:"Name two hard and two soft magnetic behaviours: which of iron and steel suits (a) an electromagnet core, (b) a permanent magnet?",a:"(a) iron (soft) (b) steel (hard)",sol:"Iron magnetises and demagnetises instantly — perfect for switchable electromagnets. Steel keeps its magnetism — permanent magnets."},
 {lvl:'adv',q:"An ideal transformer steps 11 000 V down to 240 V and delivers 6.0 kW to homes. Find the turns ratio and the current in the primary and secondary coils.",a:"Ratio ≈ 45.8:1; Iₚ ≈ 0.545 A; Iₛ = 25 A",sol:"Np/Ns = 11000/240 ≈ 45.8. Secondary: Iₛ = P/Vₛ = 6000/240 = 25 A. Ideal → same power in primary: Iₚ = 6000/11000 ≈ 0.545 A. High-voltage side carries a tiny current — the whole point of HV transmission."}],
// 11 Nuclear
[{lvl:'basic',q:"Which radiation is stopped by a sheet of paper?",a:"Alpha",sol:"Alpha particles are large and doubly charged — hugely ionising but stopped by paper or a few cm of air. Beta needs aluminium; gamma needs thick lead."},
 {lvl:'adv',q:"A sample of half-life 5730 years (carbon-14) shows an activity 12.5% of that in living material. How old is the specimen? A background of 0 is assumed — state why background matters in real measurements.",a:"≈ 17 190 years",sol:"12.5% = 1/8 = (1/2)³ → 3 half-lives → 3 × 5730 = 17 190 years. In real labs the detector also counts background radiation (cosmic rays, rocks), which must be measured separately and subtracted, or the fraction — and the age — comes out wrong."}],
// 12 Space
[{lvl:'basic',q:"What force keeps the planets in orbit around the Sun?",a:"Gravity (gravitational attraction)",sol:"The Sun's gravitational pull provides the centripetal force for each planet's orbit."},
 {lvl:'adv',q:"Light from a galaxy 9.5 × 10²⁴ m away shows strong redshift. (a) How many light-years away is it? (b) If its recession speed is 2.1 × 10⁴ km/s, estimate the Hubble constant in s⁻¹ and hence the approximate age of the Universe.",a:"(a) 10⁹ light-years (b) H₀ ≈ 2.2 × 10⁻¹⁸ s⁻¹ → age ≈ 4.5 × 10¹⁷ s ≈ 14 billion years",sol:"(a) 1 ly ≈ 9.5 × 10¹⁵ m → 9.5 × 10²⁴ / 9.5 × 10¹⁵ = 10⁹ ly. (b) H₀ = v/d = 2.1 × 10⁷ m/s ÷ 9.5 × 10²⁴ m ≈ 2.2 × 10⁻¹⁸ s⁻¹. Age ≈ 1/H₀ ≈ 4.5 × 10¹⁷ s ≈ 1.4 × 10¹⁰ years — consistent with the accepted 13.8 billion years."}]
]};

// Append to chapters
EXTRA.math.forEach((qs,i)=>{ if(ADDMATH[i]) ADDMATH[i].quiz.push(...qs); });
EXTRA.phys.forEach((qs,i)=>{ if(PHYSICS[i]) PHYSICS[i].quiz.push(...qs); });
