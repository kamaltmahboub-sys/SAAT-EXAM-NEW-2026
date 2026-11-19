// Crisp, self-contained SVG diagrams for Chapter 2 Mechanics questions

export const CH2_FIGURES = {
  q2: `<svg viewBox="0 0 360 150" class="w-full max-w-sm h-auto" role="img" aria-label="Two paths from A to B">
    <text x="115" y="22" font-size="11" font-weight="700" fill="#334155">Person 1</text>
    <circle cx="48" cy="40" r="5" fill="#0B2545"/>
    <line x1="48" y1="45" x2="48" y2="57" stroke="#0B2545" stroke-width="2"/>
    <line x1="40" y1="50" x2="56" y2="50" stroke="#0B2545" stroke-width="2"/>
    <line x1="48" y1="57" x2="42" y2="66" stroke="#0B2545" stroke-width="2"/>
    <line x1="48" y1="57" x2="54" y2="66" stroke="#0B2545" stroke-width="2"/>
    <circle cx="80" cy="48" r="4.5" fill="#2563EB"/>
    <text x="76" y="65" font-size="11" font-weight="700" fill="#2563EB">A</text>
    <line x1="85" y1="48" x2="295" y2="48" stroke="#0F172A" stroke-width="2.2"/>
    <polygon points="295,44 303,48 295,52" fill="#0F172A"/>
    <circle cx="308" cy="48" r="4.5" fill="#DC2626"/>
    <text x="304" y="65" font-size="11" font-weight="700" fill="#DC2626">B</text>
    <text x="322" y="51" font-size="11" font-weight="600" fill="#64748B">x</text>

    <circle cx="48" cy="96" r="5" fill="#0B2545"/>
    <line x1="48" y1="101" x2="48" y2="113" stroke="#0B2545" stroke-width="2"/>
    <line x1="40" y1="106" x2="56" y2="106" stroke="#0B2545" stroke-width="2"/>
    <line x1="48" y1="113" x2="42" y2="122" stroke="#0B2545" stroke-width="2"/>
    <line x1="48" y1="113" x2="54" y2="122" stroke="#0B2545" stroke-width="2"/>
    <circle cx="80" cy="105" r="4.5" fill="#2563EB"/>
    <polyline points="85,105 110,105 128,128 152,105 295,105" fill="none" stroke="#0F172A" stroke-width="2.2"/>
    <polygon points="295,101 303,105 295,109" fill="#0F172A"/>
    <circle cx="308" cy="105" r="4.5" fill="#DC2626"/>
    <text x="322" y="108" font-size="11" font-weight="600" fill="#64748B">x</text>
    <text x="115" y="142" font-size="11" font-weight="700" fill="#334155">Person 2</text>
  </svg>`,

  q3: `<svg viewBox="0 0 320 130" class="w-full max-w-xs h-auto" role="img" aria-label="Cat path 9 m and 2 m">
    <text x="68" y="34" font-size="12" font-weight="700" fill="#2563EB">Start</text>
    <circle cx="110" cy="30" r="5" fill="#2563EB"/>
    <line x1="120" y1="30" x2="270" y2="30" stroke="#0F172A" stroke-width="2.4"/>
    <polygon points="122,26 114,30 122,34" fill="#0F172A"/>
    <polygon points="268,26 276,30 268,34" fill="#0F172A"/>
    <text x="188" y="20" font-size="12" font-weight="700" fill="#0F172A">9 m</text>
    <line x1="110" y1="36" x2="110" y2="96" stroke="#0F172A" stroke-width="2.4"/>
    <polygon points="106,94 110,102 114,94" fill="#0F172A"/>
    <text x="120" y="72" font-size="12" font-weight="700" fill="#0F172A">2 m</text>
    <circle cx="110" cy="108" r="5" fill="#DC2626"/>
    <text x="72" y="112" font-size="12" font-weight="700" fill="#DC2626">End</text>
  </svg>`,

  q4: `<svg viewBox="0 0 320 220" class="w-full max-w-xs h-auto" role="img" aria-label="Position vs time graph for two runners">
    <g stroke="#E2E8F0" stroke-width="1">
      <line x1="50" y1="20" x2="290" y2="20"/><line x1="50" y1="43" x2="290" y2="43"/>
      <line x1="50" y1="66" x2="290" y2="66"/><line x1="50" y1="89" x2="290" y2="89"/>
      <line x1="50" y1="112" x2="290" y2="112"/><line x1="50" y1="135" x2="290" y2="135"/>
      <line x1="50" y1="158" x2="290" y2="158"/>
      <line x1="98" y1="20" x2="98" y2="181"/><line x1="146" y1="20" x2="146" y2="181"/>
      <line x1="194" y1="20" x2="194" y2="181"/><line x1="242" y1="20" x2="242" y2="181"/>
      <line x1="290" y1="20" x2="290" y2="181"/>
    </g>
    <line x1="50" y1="15" x2="50" y2="181" stroke="#0F172A" stroke-width="2"/>
    <line x1="50" y1="181" x2="295" y2="181" stroke="#0F172A" stroke-width="2"/>
    <g font-size="10" fill="#334155" text-anchor="end">
      <text x="44" y="23">70</text><text x="44" y="46">60</text>
      <text x="44" y="69">50</text><text x="44" y="92">40</text>
      <text x="44" y="115">30</text><text x="44" y="138">20</text>
      <text x="44" y="161">10</text><text x="44" y="184">0</text>
    </g>
    <g font-size="10" fill="#334155" text-anchor="middle">
      <text x="50" y="196">0</text><text x="98" y="196">1</text>
      <text x="146" y="196">2</text><text x="194" y="196">3</text>
      <text x="242" y="196">4</text><text x="290" y="196">5</text>
    </g>
    <text x="170" y="212" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Time (s)</text>
    <text x="15" y="100" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle" transform="rotate(-90 15 100)">Position (m)</text>
    <line x1="50" y1="181" x2="266" y2="31.5" stroke="#1D4ED8" stroke-width="2.8"/>
    <line x1="50" y1="181" x2="266" y2="80.5" stroke="#DC2626" stroke-width="2.8"/>
  </svg>`,

  q5: `<svg viewBox="0 0 330 230" class="w-full max-w-xs h-auto" role="img" aria-label="Saeed and Ahmad position vs time graph">
    <g stroke="#E2E8F0" stroke-width="1">
      <line x1="50" y1="20" x2="300" y2="20"/><line x1="50" y1="36" x2="300" y2="36"/>
      <line x1="50" y1="52" x2="300" y2="52"/><line x1="50" y1="68" x2="300" y2="68"/>
      <line x1="50" y1="84" x2="300" y2="84"/><line x1="50" y1="100" x2="300" y2="100"/>
      <line x1="50" y1="116" x2="300" y2="116"/><line x1="50" y1="132" x2="300" y2="132"/>
      <line x1="50" y1="148" x2="300" y2="148"/><line x1="50" y1="164" x2="300" y2="164"/>
      <line x1="75" y1="20" x2="75" y2="180"/><line x1="100" y1="20" x2="100" y2="180"/>
      <line x1="125" y1="20" x2="125" y2="180"/><line x1="150" y1="20" x2="150" y2="180"/>
      <line x1="175" y1="20" x2="175" y2="180"/><line x1="200" y1="20" x2="200" y2="180"/>
      <line x1="225" y1="20" x2="225" y2="180"/><line x1="250" y1="20" x2="250" y2="180"/>
      <line x1="275" y1="20" x2="275" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/>
    </g>
    <line x1="50" y1="16" x2="50" y2="180" stroke="#0F172A" stroke-width="2"/>
    <line x1="50" y1="180" x2="306" y2="180" stroke="#0F172A" stroke-width="2"/>
    <g font-size="9" fill="#334155" text-anchor="end">
      <text x="44" y="23">100</text><text x="44" y="39">90</text><text x="44" y="55">80</text>
      <text x="44" y="71">70</text><text x="44" y="87">60</text><text x="44" y="103">50</text>
      <text x="44" y="119">40</text><text x="44" y="135">30</text><text x="44" y="151">20</text>
      <text x="44" y="167">10</text><text x="44" y="183">0</text>
    </g>
    <g font-size="9" fill="#334155" text-anchor="middle">
      <text x="50" y="194">0</text><text x="75" y="194">1</text><text x="100" y="194">2</text>
      <text x="125" y="194">3</text><text x="150" y="194">4</text><text x="175" y="194">5</text>
      <text x="200" y="194">6</text><text x="225" y="194">7</text><text x="250" y="194">8</text>
      <text x="275" y="194">9</text><text x="300" y="194">10</text>
    </g>
    <text x="175" y="212" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Time (s)</text>
    <text x="14" y="100" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle" transform="rotate(-90 14 100)">Position (m)</text>
    <line x1="50" y1="116" x2="200" y2="20" stroke="#1D4ED8" stroke-width="2.6"/>
    <text x="128" y="57" font-size="10" font-weight="700" fill="#1D4ED8" transform="rotate(-32 128 57)">Saeed</text>
    <line x1="50" y1="180" x2="300" y2="116" stroke="#DC2626" stroke-width="2.6"/>
    <text x="205" y="132" font-size="10" font-weight="700" fill="#DC2626" transform="rotate(-14 205 132)">Ahmad</text>
  </svg>`,

  q6: `<svg viewBox="0 0 320 200" class="w-full max-w-xs h-auto" role="img" aria-label="Position vs time graph">
    <g stroke="#E2E8F0" stroke-width="1">
      <line x1="50" y1="25" x2="290" y2="25"/><line x1="50" y1="48" x2="290" y2="48"/>
      <line x1="50" y1="71" x2="290" y2="71"/><line x1="50" y1="94" x2="290" y2="94"/>
      <line x1="50" y1="117" x2="290" y2="117"/><line x1="50" y1="140" x2="290" y2="140"/>
      <line x1="80" y1="20" x2="80" y2="163"/><line x1="110" y1="20" x2="110" y2="163"/>
      <line x1="140" y1="20" x2="140" y2="163"/><line x1="170" y1="20" x2="170" y2="163"/>
      <line x1="200" y1="20" x2="200" y2="163"/><line x1="230" y1="20" x2="230" y2="163"/>
      <line x1="260" y1="20" x2="260" y2="163"/><line x1="290" y1="20" x2="290" y2="163"/>
    </g>
    <line x1="50" y1="16" x2="50" y2="163" stroke="#0F172A" stroke-width="2"/>
    <line x1="50" y1="163" x2="296" y2="163" stroke="#0F172A" stroke-width="2"/>
    <g font-size="10" fill="#334155" text-anchor="end">
      <text x="44" y="29">30</text><text x="44" y="75">20</text>
      <text x="44" y="121">10</text><text x="44" y="166">0</text>
    </g>
    <g font-size="10" fill="#334155" text-anchor="middle">
      <text x="50" y="177">0</text><text x="80" y="177">1</text><text x="110" y="177">2</text>
      <text x="140" y="177">3</text><text x="170" y="177">4</text><text x="200" y="177">5</text>
      <text x="230" y="177">6</text><text x="260" y="177">7</text><text x="290" y="177">8</text>
    </g>
    <text x="170" y="193" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Time (s)</text>
    <text x="15" y="92" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle" transform="rotate(-90 15 92)">Position (m)</text>
    <line x1="50" y1="163" x2="245" y2="18" stroke="#1D4ED8" stroke-width="2.8"/>
  </svg>`,

  q7: `<svg viewBox="0 0 320 205" class="w-full max-w-xs h-auto" role="img" aria-label="Runner position vs time graph">
    <g stroke="#E2E8F0" stroke-width="1">
      <line x1="50" y1="22" x2="290" y2="22"/><line x1="50" y1="50" x2="290" y2="50"/>
      <line x1="50" y1="78" x2="290" y2="78"/><line x1="50" y1="106" x2="290" y2="106"/>
      <line x1="50" y1="134" x2="290" y2="134"/>
      <line x1="94" y1="20" x2="94" y2="162"/><line x1="138" y1="20" x2="138" y2="162"/>
      <line x1="182" y1="20" x2="182" y2="162"/><line x1="226" y1="20" x2="226" y2="162"/>
      <line x1="270" y1="20" x2="270" y2="162"/>
    </g>
    <line x1="50" y1="16" x2="50" y2="162" stroke="#0F172A" stroke-width="2"/>
    <line x1="50" y1="162" x2="296" y2="162" stroke="#0F172A" stroke-width="2"/>
    <g font-size="10" fill="#334155" text-anchor="end">
      <text x="44" y="25">25</text><text x="44" y="53">20</text>
      <text x="44" y="81">15</text><text x="44" y="109">10</text>
      <text x="44" y="137">5</text><text x="44" y="165">0</text>
    </g>
    <g font-size="10" fill="#334155" text-anchor="middle">
      <text x="50" y="177">0</text><text x="94" y="177">1</text><text x="138" y="177">2</text>
      <text x="182" y="177">3</text><text x="226" y="177">4</text><text x="270" y="177">5</text>
    </g>
    <text x="170" y="195" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Time (s)</text>
    <text x="15" y="90" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle" transform="rotate(-90 15 90)">Position (m)</text>
    <line x1="50" y1="162" x2="278" y2="17" stroke="#1D4ED8" stroke-width="2.8"/>
  </svg>`,

  q15: `<svg viewBox="0 0 320 205" class="w-full max-w-xs h-auto" role="img" aria-label="Velocity vs time graph">
    <g stroke="#E2E8F0" stroke-width="1">
      <line x1="50" y1="22" x2="290" y2="22"/><line x1="50" y1="50" x2="290" y2="50"/>
      <line x1="50" y1="78" x2="290" y2="78"/><line x1="50" y1="106" x2="290" y2="106"/>
      <line x1="50" y1="134" x2="290" y2="134"/>
      <line x1="94" y1="20" x2="94" y2="162"/><line x1="138" y1="20" x2="138" y2="162"/>
      <line x1="182" y1="20" x2="182" y2="162"/><line x1="226" y1="20" x2="226" y2="162"/>
      <line x1="270" y1="20" x2="270" y2="162"/>
    </g>
    <line x1="50" y1="16" x2="50" y2="162" stroke="#0F172A" stroke-width="2"/>
    <line x1="50" y1="162" x2="296" y2="162" stroke="#0F172A" stroke-width="2"/>
    <g font-size="10" fill="#334155" text-anchor="end">
      <text x="44" y="25">10</text><text x="44" y="53">8</text>
      <text x="44" y="81">6</text><text x="44" y="109">4</text>
      <text x="44" y="137">2</text><text x="44" y="165">0</text>
    </g>
    <g font-size="10" fill="#334155" text-anchor="middle">
      <text x="50" y="177">0</text><text x="94" y="177">1</text><text x="138" y="177">2</text>
      <text x="182" y="177">3</text><text x="226" y="177">4</text><text x="270" y="177">5</text>
    </g>
    <text x="170" y="195" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Time (s)</text>
    <text x="15" y="90" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle" transform="rotate(-90 15 90)">Velocity (m/s)</text>
    <line x1="50" y1="162" x2="270" y2="22" stroke="#6D28D9" stroke-width="3"/>
  </svg>`,

  q16: `<svg viewBox="0 0 360 44" class="w-full max-w-sm h-auto" role="img" aria-label="Particle motion diagram with increasing spacing">
    <line x1="16" y1="22" x2="340" y2="22" stroke="#0284C7" stroke-width="3"/>
    <polygon points="338,16 350,22 338,28" fill="#0284C7"/>
    <circle cx="24" cy="22" r="5" fill="#9333EA"/>
    <circle cx="38" cy="22" r="5" fill="#9333EA"/>
    <circle cx="62" cy="22" r="5" fill="#9333EA"/>
    <circle cx="100" cy="22" r="5" fill="#9333EA"/>
    <circle cx="154" cy="22" r="5" fill="#9333EA"/>
    <circle cx="226" cy="22" r="5" fill="#9333EA"/>
  </svg>`,

  q17: `<svg viewBox="0 0 320 215" class="w-full max-w-xs h-auto" role="img" aria-label="Four-stage velocity vs time graph">
    <g stroke="#E2E8F0" stroke-width="1">
      <line x1="50" y1="22" x2="290" y2="22"/><line x1="50" y1="47" x2="290" y2="47"/>
      <line x1="50" y1="72" x2="290" y2="72"/><line x1="50" y1="97" x2="290" y2="97"/>
      <line x1="50" y1="122" x2="290" y2="122"/><line x1="50" y1="147" x2="290" y2="147"/>
      <line x1="90" y1="20" x2="90" y2="172"/><line x1="130" y1="20" x2="130" y2="172"/>
      <line x1="170" y1="20" x2="170" y2="172"/><line x1="210" y1="20" x2="210" y2="172"/>
      <line x1="250" y1="20" x2="250" y2="172"/><line x1="290" y1="20" x2="290" y2="172"/>
    </g>
    <line x1="50" y1="15" x2="50" y2="172" stroke="#0F172A" stroke-width="2"/>
    <line x1="50" y1="172" x2="298" y2="172" stroke="#0F172A" stroke-width="2"/>
    <g font-size="9.5" fill="#334155" text-anchor="end">
      <text x="44" y="25">30</text><text x="44" y="50">25</text>
      <text x="44" y="75">20</text><text x="44" y="100">15</text>
      <text x="44" y="125">10</text><text x="44" y="150">5</text>
      <text x="44" y="175">0</text>
    </g>
    <g font-size="9.5" fill="#334155" text-anchor="middle">
      <text x="50" y="186">0</text><text x="90" y="186">5</text><text x="130" y="186">10</text>
      <text x="170" y="186">15</text><text x="210" y="186">20</text><text x="250" y="186">25</text>
      <text x="290" y="186">30</text>
    </g>
    <text x="170" y="204" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Time (s)</text>
    <text x="15" y="95" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle" transform="rotate(-90 15 95)">Velocity (m/s)</text>
    <polyline points="50,172 170,122 210,122 250,62 290,37" fill="none" stroke="#1D4ED8" stroke-width="2.6"/>
    <circle cx="170" cy="122" r="3" fill="#1D4ED8"/><circle cx="210" cy="122" r="3" fill="#1D4ED8"/>
    <circle cx="250" cy="62" r="3" fill="#1D4ED8"/><circle cx="290" cy="37" r="3" fill="#1D4ED8"/>
    <g font-size="10" font-weight="800" fill="#DC2626">
      <text x="115" y="137">1</text><text x="187" y="114">2</text>
      <text x="225" y="88">3</text><text x="264" y="42">4</text>
    </g>
  </svg>`,

  q19: `<svg viewBox="0 0 320 205" class="w-full max-w-xs h-auto" role="img" aria-label="Runner speed intervals A B C D">
    <g stroke="#E2E8F0" stroke-width="1">
      <line x1="50" y1="25" x2="290" y2="25"/><line x1="50" y1="53" x2="290" y2="53"/>
      <line x1="50" y1="81" x2="290" y2="81"/><line x1="50" y1="109" x2="290" y2="109"/>
      <line x1="50" y1="137" x2="290" y2="137"/>
      <line x1="80" y1="20" x2="80" y2="165"/><line x1="110" y1="20" x2="110" y2="165"/>
      <line x1="140" y1="20" x2="140" y2="165"/><line x1="170" y1="20" x2="170" y2="165"/>
      <line x1="200" y1="20" x2="200" y2="165"/><line x1="230" y1="20" x2="230" y2="165"/>
      <line x1="260" y1="20" x2="260" y2="165"/><line x1="290" y1="20" x2="290" y2="165"/>
    </g>
    <line x1="50" y1="16" x2="50" y2="165" stroke="#0F172A" stroke-width="2"/>
    <line x1="50" y1="165" x2="298" y2="165" stroke="#0F172A" stroke-width="2"/>
    <g font-size="10" fill="#334155" text-anchor="end">
      <text x="44" y="29">5</text><text x="44" y="57">4</text>
      <text x="44" y="85">3</text><text x="44" y="113">2</text>
      <text x="44" y="141">1</text><text x="44" y="168">0</text>
    </g>
    <g font-size="10" fill="#334155" text-anchor="middle">
      <text x="50" y="179">0</text><text x="80" y="179">1</text><text x="110" y="179">2</text>
      <text x="140" y="179">3</text><text x="170" y="179">4</text><text x="200" y="179">5</text>
      <text x="230" y="179">6</text><text x="260" y="179">7</text><text x="290" y="179">8</text>
    </g>
    <text x="170" y="196" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Time (s)</text>
    <text x="15" y="92" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle" transform="rotate(-90 15 92)">Velocity (m/s)</text>
    <polyline points="50,165 80,109 170,81 230,81 260,39 290,39" fill="none" stroke="#1D4ED8" stroke-width="2.6"/>
    <g font-size="10.5" font-weight="800" fill="#0F172A">
      <text x="118" y="84">A</text><text x="196" y="73">B</text>
      <text x="235" y="54">C</text><text x="271" y="31">D</text>
    </g>
  </svg>`,

  q20: `<svg viewBox="0 0 280 140" class="w-full max-w-xs h-auto" role="img" aria-label="Velocity vs time curve with points x and y">
    <line x1="36" y1="15" x2="36" y2="128" stroke="#0F172A" stroke-width="2"/>
    <polygon points="32,17 36,9 40,17" fill="#0F172A"/>
    <text x="44" y="20" font-size="12" font-style="italic" font-weight="700" fill="#0F172A">v</text>
    <line x1="24" y1="74" x2="264" y2="74" stroke="#0F172A" stroke-width="2"/>
    <polygon points="262,70 270,74 262,78" fill="#0F172A"/>
    <text x="256" y="66" font-size="12" font-style="italic" font-weight="700" fill="#0F172A">t</text>
    <path d="M 36,74 C 65,18 115,15 145,74 C 175,126 215,128 245,98" fill="none" stroke="#1D4ED8" stroke-width="2.8"/>
    <circle cx="96" cy="30" r="4.5" fill="#DC2626"/>
    <text x="93" y="21" font-size="12" font-weight="800" fill="#DC2626">x</text>
    <circle cx="176" cy="108" r="4.5" fill="#DC2626"/>
    <text x="172" y="123" font-size="12" font-weight="800" fill="#DC2626">y</text>
  </svg>`,

  q24: `<svg viewBox="0 0 320 190" class="w-full max-w-xs h-auto" role="img" aria-label="Constant velocity 2 m/s graph for 6 seconds">
    <rect x="50" y="88" width="180" height="62" fill="#DBEAFE" opacity="0.75"/>
    <g stroke="#E2E8F0" stroke-width="1">
      <line x1="50" y1="26" x2="290" y2="26"/><line x1="50" y1="57" x2="290" y2="57"/>
      <line x1="50" y1="88" x2="290" y2="88"/><line x1="50" y1="119" x2="290" y2="119"/>
      <line x1="80" y1="20" x2="80" y2="150"/><line x1="110" y1="20" x2="110" y2="150"/>
      <line x1="140" y1="20" x2="140" y2="150"/><line x1="170" y1="20" x2="170" y2="150"/>
      <line x1="200" y1="20" x2="200" y2="150"/><line x1="230" y1="20" x2="230" y2="150"/>
      <line x1="260" y1="20" x2="260" y2="150"/><line x1="290" y1="20" x2="290" y2="150"/>
    </g>
    <line x1="50" y1="16" x2="50" y2="150" stroke="#0F172A" stroke-width="2"/>
    <line x1="50" y1="150" x2="296" y2="150" stroke="#0F172A" stroke-width="2"/>
    <g font-size="10" fill="#334155" text-anchor="end">
      <text x="44" y="30">4</text><text x="44" y="61">3</text>
      <text x="44" y="92">2</text><text x="44" y="123">1</text>
      <text x="44" y="153">0</text>
    </g>
    <g font-size="10" fill="#334155" text-anchor="middle">
      <text x="50" y="164">0</text><text x="80" y="164">1</text><text x="110" y="164">2</text>
      <text x="140" y="164">3</text><text x="170" y="164">4</text><text x="200" y="164">5</text>
      <text x="230" y="164">6</text><text x="260" y="164">7</text><text x="290" y="164">8</text>
    </g>
    <text x="170" y="181" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Time (s)</text>
    <text x="15" y="84" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle" transform="rotate(-90 15 84)">Velocity (m/s)</text>
    <line x1="50" y1="88" x2="230" y2="88" stroke="#1D4ED8" stroke-width="3.2"/>
  </svg>`,

  q30: `<svg viewBox="0 0 420 100" class="w-full max-w-md h-auto" role="img" aria-label="Four velocity vs time curves A B C D">
    <g transform="translate(10,10)">
      <text x="45" y="10" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">A</text>
      <line x1="12" y1="15" x2="12" y2="72" stroke="#334155" stroke-width="1.5"/>
      <line x1="12" y1="72" x2="88" y2="72" stroke="#334155" stroke-width="1.5"/>
      <text x="4" y="20" font-size="9" fill="#334155">v</text><text x="86" y="84" font-size="9" fill="#334155">t</text>
      <line x1="12" y1="72" x2="82" y2="20" stroke="#1D4ED8" stroke-width="2.5"/>
    </g>
    <g transform="translate(110,10)">
      <text x="45" y="10" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">B</text>
      <line x1="12" y1="15" x2="12" y2="72" stroke="#334155" stroke-width="1.5"/>
      <line x1="12" y1="72" x2="88" y2="72" stroke="#334155" stroke-width="1.5"/>
      <text x="4" y="20" font-size="9" fill="#334155">v</text><text x="86" y="84" font-size="9" fill="#334155">t</text>
      <line x1="12" y1="42" x2="84" y2="42" stroke="#1D4ED8" stroke-width="2.5"/>
    </g>
    <g transform="translate(210,10)">
      <text x="45" y="10" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">C</text>
      <line x1="12" y1="15" x2="12" y2="72" stroke="#334155" stroke-width="1.5"/>
      <line x1="12" y1="72" x2="88" y2="72" stroke="#334155" stroke-width="1.5"/>
      <text x="4" y="20" font-size="9" fill="#334155">v</text><text x="86" y="84" font-size="9" fill="#334155">t</text>
      <path d="M 16,66 Q 48,5 80,66" fill="none" stroke="#1D4ED8" stroke-width="2.5"/>
    </g>
    <g transform="translate(310,10)">
      <text x="45" y="10" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">D</text>
      <line x1="12" y1="15" x2="12" y2="72" stroke="#334155" stroke-width="1.5"/>
      <line x1="12" y1="72" x2="88" y2="72" stroke="#334155" stroke-width="1.5"/>
      <text x="4" y="20" font-size="9" fill="#334155">v</text><text x="86" y="84" font-size="9" fill="#334155">t</text>
      <path d="M 55,18 Q 10,43 55,68" fill="none" stroke="#1D4ED8" stroke-width="2.5"/>
    </g>
  </svg>`,

  q40: `<svg viewBox="0 0 300 120" class="w-full max-w-xs h-auto" role="img" aria-label="Three adjacent blocks 2 kg, 3 kg, 5 kg with force 10 N">
    <line x1="20" y1="92" x2="260" y2="92" stroke="#475569" stroke-width="2"/>
    <rect x="65" y="64" width="36" height="28" fill="#E2E8F0" stroke="#0F172A" stroke-width="1.5"/>
    <text x="83" y="82" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">1</text>
    <text x="83" y="106" font-size="10" fill="#334155" text-anchor="middle">(2 kg)</text>
    <rect x="101" y="42" width="36" height="50" fill="#E2E8F0" stroke="#0F172A" stroke-width="1.5"/>
    <text x="119" y="70" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">2</text>
    <text x="119" y="106" font-size="10" fill="#334155" text-anchor="middle">(3 kg)</text>
    <rect x="137" y="22" width="38" height="70" fill="#E2E8F0" stroke="#0F172A" stroke-width="1.5"/>
    <text x="156" y="60" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">3</text>
    <text x="156" y="106" font-size="10" fill="#334155" text-anchor="middle">(5 kg)</text>
    <line x1="175" y1="32" x2="220" y2="32" stroke="#1D4ED8" stroke-width="2.5"/>
    <polygon points="218,28 228,32 218,36" fill="#1D4ED8"/>
    <text x="234" y="36" font-size="11" font-weight="700" fill="#1D4ED8">F = 10 N</text>
  </svg>`,

  q45: `<svg viewBox="0 0 260 150" class="w-full max-w-xs h-auto" role="img" aria-label="Object on frictionless inclined surface with force arrows">
    <polygon points="30,130 220,130 220,30" fill="none" stroke="#0F172A" stroke-width="2.2"/>
    <g transform="translate(128,78) rotate(-27.8)">
      <rect x="-18" y="-14" width="36" height="22" fill="#FDE68A" stroke="#0F172A" stroke-width="1.8"/>
    </g>
    <!-- W downward -->
    <line x1="128" y1="78" x2="128" y2="122" stroke="#1D4ED8" stroke-width="2.4"/>
    <polygon points="124,120 128,128 132,120" fill="#1D4ED8"/>
    <text x="134" y="122" font-size="11" font-weight="700" fill="#1D4ED8">W</text>
    <!-- 1 downslope -->
    <line x1="128" y1="78" x2="86" y2="100" stroke="#EA580C" stroke-width="2.4"/>
    <polygon points="88,95 81,103 91,102" fill="#EA580C"/>
    <text x="76" y="96" font-size="11" font-weight="800" fill="#EA580C">1</text>
    <!-- 2 normal perpendicular -->
    <line x1="128" y1="78" x2="106" y2="36" stroke="#EA580C" stroke-width="2.4"/>
    <polygon points="103,39 102,30 110,36" fill="#EA580C"/>
    <text x="95" y="34" font-size="11" font-weight="800" fill="#EA580C">2</text>
    <!-- 3 straight up -->
    <line x1="128" y1="78" x2="128" y2="34" stroke="#EA580C" stroke-width="2.4"/>
    <polygon points="124,36 128,28 132,36" fill="#EA580C"/>
    <text x="135" y="34" font-size="11" font-weight="800" fill="#EA580C">3</text>
    <!-- 4 upslope -->
    <line x1="128" y1="78" x2="170" y2="56" stroke="#EA580C" stroke-width="2.4"/>
    <polygon points="168,53 177,52 171,60" fill="#EA580C"/>
    <text x="176" y="48" font-size="11" font-weight="800" fill="#EA580C">4</text>
  </svg>`,

  q47: `<svg viewBox="0 0 220 110" class="w-full max-w-[220px] h-auto" role="img" aria-label="10 kg block on horizontal surface with normal force F_N">
    <line x1="30" y1="90" x2="190" y2="90" stroke="#0F172A" stroke-width="2.4"/>
    <rect x="75" y="54" width="70" height="36" fill="#FDE047" stroke="#0F172A" stroke-width="1.8"/>
    <text x="110" y="76" font-size="12" font-weight="700" fill="#0F172A" text-anchor="middle">10 kg</text>
    <line x1="110" y1="54" x2="110" y2="18" stroke="#DC2626" stroke-width="2.6"/>
    <polygon points="105,21 110,11 115,21" fill="#DC2626"/>
    <text x="120" y="26" font-size="12" font-weight="800" fill="#DC2626">F_N</text>
  </svg>`,

  q49: `<svg viewBox="0 0 320 80" class="w-full max-w-xs h-auto" role="img" aria-label="Rope of mass 0.5 kg pulled by F left and 20 N right">
    <text x="72" y="20" font-size="12" font-weight="700" fill="#DC2626">F</text>
    <text x="234" y="20" font-size="12" font-weight="700" fill="#1D4ED8">20 N</text>
    <line x1="110" y1="36" x2="36" y2="36" stroke="#DC2626" stroke-width="2.6"/>
    <polygon points="38,31 28,36 38,41" fill="#DC2626"/>
    <line x1="110" y1="36" x2="210" y2="36" stroke="#0F172A" stroke-width="4.5"/>
    <line x1="210" y1="36" x2="284" y2="36" stroke="#1D4ED8" stroke-width="2.6"/>
    <polygon points="282,31 292,36 282,41" fill="#1D4ED8"/>
    <text x="160" y="62" font-size="12" font-weight="700" fill="#0F172A" text-anchor="middle">m = 0.5 kg</text>
  </svg>`,

  q50: `<svg viewBox="0 0 320 96" class="w-full max-w-xs h-auto" role="img" aria-label="10 kg box pulled left by 150 N and right by 100 N">
    <text x="160" y="18" font-size="12" font-weight="700" fill="#0F172A" text-anchor="middle">m = 10 kg</text>
    <rect x="115" y="28" width="90" height="50" fill="#FED7AA" stroke="#B45309" stroke-width="2"/>
    <line x1="115" y1="53" x2="36" y2="53" stroke="#DC2626" stroke-width="2.6"/>
    <polygon points="38,48 28,53 38,58" fill="#DC2626"/>
    <text x="70" y="44" font-size="11.5" font-weight="700" fill="#DC2626" text-anchor="middle">150 N</text>
    <line x1="205" y1="53" x2="284" y2="53" stroke="#1D4ED8" stroke-width="2.6"/>
    <polygon points="282,48 292,53 282,58" fill="#1D4ED8"/>
    <text x="250" y="44" font-size="11.5" font-weight="700" fill="#1D4ED8" text-anchor="middle">100 N</text>
  </svg>`,

  q53: `<svg viewBox="0 0 400 220" class="w-full max-w-md h-auto" role="img" aria-label="Four force configurations A B C D">
    <!-- Option A -->
    <g transform="translate(20,10)">
      <text x="80" y="14" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Option A</text>
      <rect x="68" y="44" width="24" height="16" fill="#15803D" stroke="#0F172A" stroke-width="1.2"/>
      <line x1="68" y1="52" x2="30" y2="52" stroke="#DC2626" stroke-width="2"/>
      <polygon points="32,49 24,52 32,55" fill="#DC2626"/>
      <text x="34" y="45" font-size="10" font-weight="700" fill="#0F172A">3 N</text>
      <line x1="92" y1="52" x2="146" y2="52" stroke="#1D4ED8" stroke-width="2"/>
      <polygon points="144,49 152,52 144,55" fill="#1D4ED8"/>
      <text x="128" y="45" font-size="10" font-weight="700" fill="#0F172A">5 N</text>
      <line x1="80" y1="60" x2="80" y2="88" stroke="#DC2626" stroke-width="2"/>
      <polygon points="77,86 80,93 83,86" fill="#DC2626"/>
      <text x="56" y="84" font-size="10" font-weight="700" fill="#0F172A">2 N</text>
    </g>
    <!-- Option B -->
    <g transform="translate(210,10)">
      <text x="80" y="14" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Option B</text>
      <rect x="68" y="44" width="24" height="16" fill="#15803D" stroke="#0F172A" stroke-width="1.2"/>
      <line x1="80" y1="60" x2="80" y2="92" stroke="#1D4ED8" stroke-width="2"/>
      <polygon points="77,90 80,97 83,90" fill="#1D4ED8"/>
      <text x="88" y="96" font-size="10" font-weight="700" fill="#0F172A">5 N</text>
      <line x1="75" y1="60" x2="64" y2="82" stroke="#DC2626" stroke-width="2"/>
      <polygon points="61,79 62,86 67,82" fill="#DC2626"/>
      <text x="44" y="76" font-size="10" font-weight="700" fill="#0F172A">2 N</text>
      <line x1="85" y1="60" x2="96" y2="82" stroke="#DC2626" stroke-width="2"/>
      <polygon points="93,82 98,86 99,79" fill="#DC2626"/>
      <text x="102" y="76" font-size="10" font-weight="700" fill="#0F172A">3 N</text>
    </g>
    <!-- Option C -->
    <g transform="translate(20,120)">
      <text x="80" y="14" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Option C</text>
      <rect x="68" y="44" width="24" height="16" fill="#15803D" stroke="#0F172A" stroke-width="1.2"/>
      <line x1="68" y1="49" x2="32" y2="49" stroke="#DC2626" stroke-width="2"/>
      <polygon points="34,46 26,49 34,52" fill="#DC2626"/>
      <text x="26" y="42" font-size="10" font-weight="700" fill="#0F172A">3 N</text>
      <line x1="68" y1="56" x2="40" y2="56" stroke="#DC2626" stroke-width="2"/>
      <polygon points="42,53 34,56 42,59" fill="#DC2626"/>
      <text x="34" y="70" font-size="10" font-weight="700" fill="#0F172A">2 N</text>
      <line x1="92" y1="52" x2="146" y2="52" stroke="#1D4ED8" stroke-width="2"/>
      <polygon points="144,49 152,52 144,55" fill="#1D4ED8"/>
      <text x="128" y="45" font-size="10" font-weight="700" fill="#0F172A">5 N</text>
    </g>
    <!-- Option D -->
    <g transform="translate(210,120)">
      <text x="80" y="14" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Option D</text>
      <rect x="68" y="44" width="24" height="16" fill="#15803D" stroke="#0F172A" stroke-width="1.2"/>
      <line x1="68" y1="52" x2="14" y2="52" stroke="#EA580C" stroke-width="2"/>
      <polygon points="16,49 8,52 16,55" fill="#EA580C"/>
      <text x="14" y="45" font-size="10" font-weight="700" fill="#0F172A">5 N</text>
      <line x1="92" y1="52" x2="132" y2="52" stroke="#1D4ED8" stroke-width="2"/>
      <polygon points="130,49 138,52 130,55" fill="#1D4ED8"/>
      <text x="116" y="45" font-size="10" font-weight="700" fill="#0F172A">3 N</text>
      <line x1="80" y1="44" x2="80" y2="20" stroke="#1D4ED8" stroke-width="2"/>
      <polygon points="77,22 80,15 83,22" fill="#1D4ED8"/>
      <text x="90" y="28" font-size="10" font-weight="700" fill="#0F172A">2 N</text>
    </g>
  </svg>`,

  q58: `<svg viewBox="0 0 280 96" class="w-full max-w-xs h-auto" role="img" aria-label="Stationary boxes A and B with same mass and volume">
    <line x1="20" y1="80" x2="260" y2="80" stroke="#0F172A" stroke-width="1.8"/>
    <rect x="44" y="48" width="90" height="32" fill="#D4A373" stroke="#0F172A" stroke-width="1.5"/>
    <text x="89" y="68" font-size="12" font-weight="700" fill="#0F172A" text-anchor="middle">B</text>
    <rect x="176" y="16" width="38" height="64" fill="#D4A373" stroke="#0F172A" stroke-width="1.5"/>
    <text x="195" y="52" font-size="12" font-weight="700" fill="#0F172A" text-anchor="middle">A</text>
  </svg>`,

  q59: `<svg viewBox="0 0 240 120" class="w-full max-w-[240px] h-auto" role="img" aria-label="6 kg mass sliding down 30 degree smooth incline">
    <polygon points="30,30 30,104 205,104" fill="none" stroke="#0F172A" stroke-width="2"/>
    <g transform="translate(115,66) rotate(22.9)">
      <rect x="-20" y="-16" width="40" height="22" fill="#CBD5E1" stroke="#0F172A" stroke-width="1.6"/>
    </g>
    <text x="128" y="34" font-size="10.5" font-weight="700" fill="#0F172A" transform="rotate(23 128 34)">m = 6 kg</text>
    <text x="156" y="99" font-size="10.5" font-weight="700" fill="#0F172A">30°</text>
  </svg>`,

  q60: `<svg viewBox="0 0 260 135" class="w-full max-w-xs h-auto" role="img" aria-label="Parabolic projectile curve with points a, b, and c">
    <line x1="20" y1="115" x2="240" y2="115" stroke="#0F172A" stroke-width="1.8"/>
    <path d="M 35,115 Q 130,-30 225,115" fill="none" stroke="#1D4ED8" stroke-width="2.6"/>
    <line x1="72" y1="62" x2="188" y2="62" stroke="#64748B" stroke-width="1.4" stroke-dasharray="4 3"/>
    <circle cx="72" cy="62" r="4" fill="#DC2626"/>
    <text x="60" y="56" font-size="12" font-weight="800" fill="#DC2626">a</text>
    <circle cx="130" cy="42.5" r="4" fill="#DC2626"/>
    <text x="127" y="31" font-size="12" font-weight="800" fill="#DC2626">b</text>
    <circle cx="188" cy="62" r="4" fill="#DC2626"/>
    <text x="195" y="56" font-size="12" font-weight="800" fill="#DC2626">c</text>
  </svg>`,

  q68: `<svg viewBox="0 0 280 120" class="w-full max-w-xs h-auto" role="img" aria-label="Elliptical orbit around Sun with positions 1 2 3 4">
    <ellipse cx="140" cy="60" rx="102" ry="40" fill="none" stroke="#0F172A" stroke-width="2"/>
    <circle cx="195" cy="60" r="10" fill="#F59E0B"/>
    <text x="176" y="64" font-size="10" font-weight="700" fill="#0F172A" text-anchor="end">Sun</text>
    <circle cx="242" cy="60" r="3.5" fill="#0F172A"/><text x="250" y="64" font-size="11" font-weight="800" fill="#0F172A">1</text>
    <circle cx="140" cy="20" r="3.5" fill="#0F172A"/><text x="137" y="13" font-size="11" font-weight="800" fill="#0F172A">2</text>
    <circle cx="38" cy="60" r="5" fill="#2563EB"/><text x="48" y="64" font-size="11" font-weight="800" fill="#0F172A">3</text>
    <text x="16" y="45" font-size="10" font-weight="700" fill="#2563EB">Planet</text>
    <circle cx="140" cy="100" r="3.5" fill="#0F172A"/><text x="137" y="115" font-size="11" font-weight="800" fill="#0F172A">4</text>
  </svg>`,

  q85: `<svg viewBox="0 0 400 180" class="w-full max-w-md h-auto" role="img" aria-label="Four force and lever arm options A B C D">
    <!-- Option A -->
    <g transform="translate(20,8)">
      <text x="80" y="12" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Option A</text>
      <text x="20" y="54" font-size="10" fill="#334155">Axis</text>
      <circle cx="32" cy="66" r="4.5" fill="#B45309"/>
      <line x1="36" y1="66" x2="128" y2="66" stroke="#0284C7" stroke-width="2.6"/>
      <text x="82" y="80" font-size="9.5" font-weight="700" fill="#0284C7" text-anchor="middle">Lever Arm</text>
      <line x1="128" y1="66" x2="146" y2="26" stroke="#EA580C" stroke-width="2.4"/>
      <polygon points="142,27 149,20 148,30" fill="#EA580C"/>
      <text x="153" y="26" font-size="10" font-style="italic" font-weight="700" fill="#EA580C">F</text>
    </g>
    <!-- Option B -->
    <g transform="translate(210,8)">
      <text x="80" y="12" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Option B</text>
      <text x="20" y="54" font-size="10" fill="#334155">Axis</text>
      <circle cx="32" cy="66" r="4.5" fill="#B45309"/>
      <line x1="36" y1="66" x2="128" y2="66" stroke="#0284C7" stroke-width="2.6"/>
      <text x="82" y="80" font-size="9.5" font-weight="700" fill="#0284C7" text-anchor="middle">Lever Arm</text>
      <line x1="128" y1="66" x2="162" y2="32" stroke="#EA580C" stroke-width="2.4"/>
      <polygon points="158,31 167,27 163,36" fill="#EA580C"/>
      <text x="170" y="30" font-size="10" font-style="italic" font-weight="700" fill="#EA580C">F</text>
    </g>
    <!-- Option C -->
    <g transform="translate(20,98)">
      <text x="80" y="12" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Option C</text>
      <text x="20" y="54" font-size="10" fill="#334155">Axis</text>
      <circle cx="32" cy="66" r="4.5" fill="#B45309"/>
      <line x1="36" y1="66" x2="128" y2="66" stroke="#0284C7" stroke-width="2.6"/>
      <text x="82" y="80" font-size="9.5" font-weight="700" fill="#0284C7" text-anchor="middle">Lever Arm</text>
      <line x1="128" y1="66" x2="96" y2="30" stroke="#EA580C" stroke-width="2.4"/>
      <polygon points="94,34 91,25 100,29" fill="#EA580C"/>
      <text x="89" y="24" font-size="10" font-style="italic" font-weight="700" fill="#EA580C">F</text>
    </g>
    <!-- Option D -->
    <g transform="translate(210,98)">
      <text x="80" y="12" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Option D</text>
      <text x="20" y="54" font-size="10" fill="#334155">Axis</text>
      <circle cx="32" cy="66" r="4.5" fill="#B45309"/>
      <line x1="36" y1="66" x2="128" y2="66" stroke="#0284C7" stroke-width="2.6"/>
      <text x="82" y="80" font-size="9.5" font-weight="700" fill="#0284C7" text-anchor="middle">Lever Arm</text>
      <line x1="128" y1="66" x2="174" y2="66" stroke="#EA580C" stroke-width="2.4"/>
      <polygon points="172,62 180,66 172,70" fill="#EA580C"/>
      <text x="184" y="69" font-size="10" font-style="italic" font-weight="700" fill="#EA580C">F</text>
    </g>
  </svg>`,

  q86: `<svg viewBox="0 0 220 130" class="w-full max-w-[220px] h-auto" role="img" aria-label="Door with hinge on left and four rings A B C D">
    <rect x="44" y="12" width="130" height="106" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
    <rect x="40" y="24" width="6" height="18" fill="#475569"/>
    <rect x="40" y="88" width="6" height="18" fill="#475569"/>
    <text x="33" y="68" font-size="10" fill="#475569" text-anchor="middle" transform="rotate(-90 33 68)">Hinge</text>
    <circle cx="68" cy="52" r="4.5" fill="none" stroke="#0284C7" stroke-width="2"/><text x="68" y="69" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">A</text>
    <circle cx="96" cy="52" r="4.5" fill="none" stroke="#0284C7" stroke-width="2"/><text x="96" y="69" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">B</text>
    <circle cx="124" cy="52" r="4.5" fill="none" stroke="#0284C7" stroke-width="2"/><text x="124" y="69" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">C</text>
    <circle cx="152" cy="52" r="4.5" fill="none" stroke="#0284C7" stroke-width="2"/><text x="152" y="69" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">D</text>
  </svg>`,

  q87: `<svg viewBox="0 0 340 165" class="w-full max-w-sm h-auto" role="img" aria-label="Tilting a water barrel in four positions A B C D">
    <!-- Option A -->
    <g transform="translate(15,8)">
      <text x="65" y="10" font-size="10.5" font-weight="700" fill="#0F172A" text-anchor="middle">Option A</text>
      <rect x="46" y="20" width="38" height="44" fill="#D4A373" stroke="#0F172A" stroke-width="1.3"/>
      <line x1="46" y1="35" x2="84" y2="35" stroke="#0F172A"/><line x1="46" y1="50" x2="84" y2="50"/>
      <line x1="25" y1="64" x2="105" y2="64" stroke="#0F172A" stroke-width="1.5"/>
      <line x1="18" y1="45" x2="40" y2="45" stroke="#B45309" stroke-width="2"/>
      <polygon points="39,42 45,45 39,48" fill="#B45309"/>
      <text x="10" y="48" font-size="9.5" font-weight="700" fill="#B45309">F</text>
    </g>
    <!-- Option B -->
    <g transform="translate(180,8)">
      <text x="65" y="10" font-size="10.5" font-weight="700" fill="#0F172A" text-anchor="middle">Option B</text>
      <rect x="46" y="20" width="38" height="44" fill="#D4A373" stroke="#0F172A" stroke-width="1.3"/>
      <line x1="46" y1="35" x2="84" y2="35" stroke="#0F172A"/><line x1="46" y1="50" x2="84" y2="50"/>
      <line x1="25" y1="64" x2="105" y2="64" stroke="#0F172A" stroke-width="1.5"/>
      <line x1="18" y1="32" x2="40" y2="32" stroke="#B45309" stroke-width="2"/>
      <polygon points="39,29 45,32 39,35" fill="#B45309"/>
      <text x="10" y="35" font-size="9.5" font-weight="700" fill="#B45309">F</text>
    </g>
    <!-- Option C -->
    <g transform="translate(15,88)">
      <text x="65" y="10" font-size="10.5" font-weight="700" fill="#0F172A" text-anchor="middle">Option C</text>
      <rect x="46" y="20" width="38" height="44" fill="#D4A373" stroke="#0F172A" stroke-width="1.3"/>
      <line x1="46" y1="35" x2="84" y2="35" stroke="#0F172A"/><line x1="46" y1="50" x2="84" y2="50"/>
      <line x1="25" y1="64" x2="105" y2="64" stroke="#0F172A" stroke-width="1.5"/>
      <line x1="18" y1="59" x2="40" y2="59" stroke="#B45309" stroke-width="2"/>
      <polygon points="39,56 45,59 39,62" fill="#B45309"/>
      <text x="10" y="62" font-size="9.5" font-weight="700" fill="#B45309">F</text>
    </g>
    <!-- Option D -->
    <g transform="translate(180,88)">
      <text x="65" y="10" font-size="10.5" font-weight="700" fill="#0F172A" text-anchor="middle">Option D</text>
      <rect x="46" y="20" width="38" height="44" fill="#D4A373" stroke="#0F172A" stroke-width="1.3"/>
      <line x1="46" y1="35" x2="84" y2="35" stroke="#0F172A"/><line x1="46" y1="50" x2="84" y2="50"/>
      <line x1="25" y1="64" x2="105" y2="64" stroke="#0F172A" stroke-width="1.5"/>
      <line x1="18" y1="22" x2="40" y2="22" stroke="#B45309" stroke-width="2"/>
      <polygon points="39,19 45,22 39,25" fill="#B45309"/>
      <text x="10" y="25" font-size="9.5" font-weight="700" fill="#B45309">F</text>
    </g>
  </svg>`,

  q88: `<svg viewBox="0 0 280 78" class="w-full max-w-xs h-auto" role="img" aria-label="Balanced lever with masses B and A and fulcrum X">
    <text x="98" y="20" font-size="12" font-weight="700" fill="#0F172A" text-anchor="middle">X</text>
    <polygon points="98,42 86,66 110,66" fill="#DC2626" stroke="#0F172A" stroke-width="1.4"/>
    <line x1="30" y1="38" x2="250" y2="38" stroke="#0F172A" stroke-width="3"/>
    <rect x="20" y="29" width="24" height="18" fill="#FDE047" stroke="#0F172A" stroke-width="1.3"/>
    <text x="32" y="42" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">B</text>
    <rect x="236" y="29" width="24" height="18" fill="#FDE047" stroke="#0F172A" stroke-width="1.3"/>
    <text x="248" y="42" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">A</text>
  </svg>`,

  q92: `<svg viewBox="0 0 380 120" class="w-full max-w-md h-auto" role="img" aria-label="Four cylindrical shapes A B C D">
    <text x="45" y="14" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Shape A</text>
    <rect x="12" y="64" width="66" height="40" fill="#CBD5E1" stroke="#0F172A" stroke-width="1.5"/>

    <text x="145" y="14" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Shape B</text>
    <rect x="126" y="34" width="38" height="70" fill="#CBD5E1" stroke="#0F172A" stroke-width="1.5"/>

    <text x="240" y="14" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Shape C</text>
    <rect x="226" y="68" width="28" height="36" fill="#CBD5E1" stroke="#0F172A" stroke-width="1.5"/>

    <text x="330" y="14" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">Shape D</text>
    <rect x="320" y="24" width="20" height="80" fill="#CBD5E1" stroke="#0F172A" stroke-width="1.5"/>
  </svg>`,
} as const;
