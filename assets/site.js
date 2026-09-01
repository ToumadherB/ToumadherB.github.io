const fullPublications = [

  {
    title: "Designing a Super-Fast Prius: Systematic Design of Multi-Speed eCVT via Virtual Design Space",
    authors: "T. Barhoumi and D. Kum",
    venue: "IEEE Transactions on Transportation Electrification",
    year: "2024",
    citations: "",
    note: "doi:10.1109/TTE.2023.3255901"
  },

  {
    title: "Comprehensive Design Methodology of Compound-Split Hybrid Electric Vehicles: Introduction of the Compound Lever as a Design Tool",
    authors: "H. Kim, T. Barhoumi (co-first author), and D. Kum",
    venue: "IEEE Access",
    year: "2019",
    citations: "",
    note: "doi:10.1109/ACCESS.2019.2925146"
  },

  {
    title: "Automatic Generation of Design Space Conversion Maps and Its Application for the Design of Compound-Split Hybrid Powertrains",
    authors: "T. Barhoumi, H. Kim, and D. Kum",
    venue: "Journal of Mechanical Design",
    year: "2018",
    citations: "",
    note: "doi:10.1115/1.4039451"
  },

  {
    title: "Automatic Enumeration of Feasible Kinematic Diagrams for Split Hybrid Configurations with a Single Planetary Gear",
    authors: "T. Barhoumi and D. Kum",
    venue: "Journal of Mechanical Design",
    year: "2017",
    citations: "",
    note: "doi:10.1115/1.4036583"
  },

  {
    title: "Design and Analysis of a Novel Multi-Speed Output-Split Hybrid Electric Vehicle Powertrain",
    authors: "T. Barhoumi and D. Kum",
    venue: "IEEE ITEC+EATS",
    year: "2026",
    citations: "",
    note: "doi:10.1109/ITECEATS66641.2026.11592898"
  },

  {
    title: "Systematic Design of Fixed-Gear Modes for Novel Multi-Mode Architectures: A Prius Case Study",
    authors: "T. Barhoumi and D. Kum",
    venue: "European Control Conference",
    year: "2022",
    citations: "",
    note: "doi:10.23919/ECC55457.2022.9838163"
  },

  {
    title: "Complete Design Space Exploration of the Generic Voltec Second-Generation Powertrain via Virtual Levers",
    authors: "C. Song, J. Hwang, T. Barhoumi, and D. Kum",
    venue: "AVEC",
    year: "2018",
    citations: "",
    note: ""
  },

  {
    title: "Compound-Lever-Based Optimal Configuration Selection of Compound-Split Hybrid Vehicles",
    authors: "T. Barhoumi, H. Kim, and D. Kum",
    venue: "SAE Technical Paper 2017-01-1148",
    year: "2017",
    citations: "",
    note: "doi:10.4271/2017-01-1148"
  },

  {
    title: "Automated Schematic Design of Power-Split Hybrid Vehicles with a Single Planetary Gear",
    authors: "T. Barhoumi and D. Kum",
    venue: "ASME Dynamic Systems and Control Conference",
    year: "2014",
    citations: "",
    note: "doi:10.1115/DSCC2014-6086"
  },

  {
    title: "Bridging the Gap between Power-Split and Parallel Systems for a Superior Performance: Prius Case Study",
    authors: "T. Barhoumi and D. Kum",
    venue: "KSAE Annual Conference",
    year: "2024",
    citations: "",
    note: ""
  },

  {
    title: "Mode Shift Control of Multi-Mode Power-Split Transmission Using Dog Clutches",
    authors: "T. Barhoumi and D. Kum",
    venue: "KSAE Annual Conference",
    year: "2024",
    citations: "",
    note: ""
  },

  {
    title: "Analysis of a Toyota Prius 4th Generation-Based Multi-Mode System Using Dog Clutches",
    authors: "T. Barhoumi and D. Kum",
    venue: "KSAE Annual Conference",
    year: "2021",
    citations: "",
    note: ""
  },

  {
    title: "Evaluation of the Full Potential of the Generic Voltec Second Generation Powertrain through Exhaustive Virtual Design Space Search",
    authors: "T. Barhoumi et al.",
    venue: "KSAE Annual Conference",
    year: "2018",
    citations: "",
    note: ""
  },

  {
    title: "Optimal Configuration Selection of Two Planetary Gear Compound-Split Hybrid Electric Vehicles",
    authors: "H. Kim, T. Barhoumi, and D. Kum",
    venue: "KSAE Annual Conference",
    year: "2017",
    citations: "",
    note: ""
  }

];

const preprints = [
  {
    title: "Blending Power-Split and Parallel Systems for Superior Performance: An Exhaustive Search via Virtual Design Space",
    authors: "T. Barhoumi and D. Kum",
    venue: "Submitted",
    year: "Submitted",
    citations: "",
    note: ""
  },

  {
    title: "Beyond Power Transmission: eCVT as a Transitional Mode for a Hybrid System Using Dog Clutches",
    authors: "T. Barhoumi and D. Kum",
    venue: "In preparation",
    year: "In preparation",
    citations: "",
    note: ""
  }
];


const patents = [
  {
    title: "Driving Apparatus for Hybrid Vehicle with Multiple Operating Modes",
    status: "Korean Patent Application No. 10-2025-0061716 · 2025",
    description: "D. Kum and T. Barhoumi"
  },

  {
    title: "Multi-Mode Hybrid Vehicle Powertrain Apparatus",
    status: "U.S. Patent No. 10,131,220 · 2018",
    description: "D. Kum et al."
  },

  {
    title: "Hybrid Vehicle Powertrain Apparatus with Multiple Modes",
    status: "Korean Patent Registration No. 10-1865862 · 2018",
    description: "D. Kum et al."
  },

  {
    title: "Driving Apparatus for Hybrid Vehicle Having Multiple Modes",
    status: "PCT/KR2016/015492 · 2017",
    description: "D. Kum et al."
  },

  {
    title: "Hybrid Powertrain Apparatus",
    status: "Korean Patent Registration No. 10-1879127 · 2017",
    description: "D. Kum et al."
  },

  {
    title: "Hybrid Vehicle Powertrain Apparatus with Multiple Modes",
    status: "Korean Patent Registration No. 10-1688334 · 2016",
    description: "D. Kum et al."
  }

];

const makeEl = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined && text !== null) el.textContent = text;
  return el;
};

function renderPublications(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach((item) => {
    const article = makeEl("article", "publication-card");
    article.dataset.search = [item.title, item.authors, item.venue, item.year, item.note].join(" ").toLowerCase();

    const body = makeEl("div", "publication-body");
    body.appendChild(makeEl("h3", "publication-title", item.title));
    body.appendChild(makeEl("p", "publication-authors", item.authors));
    body.appendChild(makeEl("p", "publication-meta", `${item.venue} · ${item.year}`));
    if (item.note) body.appendChild(makeEl("p", "publication-note", item.note));

    const badges = makeEl("div", "publication-badges");
    badges.appendChild(makeEl("span", "badge", item.year));
    if (item.citations) badges.appendChild(makeEl("span", "badge violet", `${item.citations} cites`));

    article.appendChild(body);
    article.appendChild(badges);
    container.appendChild(article);
  });
}

function renderStack(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach((item) => {
    const article = makeEl("article", "stack-card");
    article.appendChild(makeEl("span", "status", item.status));
    article.appendChild(makeEl("h3", "", item.title));
    article.appendChild(makeEl("p", "", item.description));
    container.appendChild(article);
  });
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === target));
      filterPublications();
    });
  });
}

function filterPublications() {
  const query = document.getElementById("publication-search").value.trim().toLowerCase();
  const activePanel = document.querySelector(".tab-panel.active");
  if (!activePanel) return;
  let visible = 0;
  activePanel.querySelectorAll(".publication-card").forEach((card) => {
    const match = card.dataset.search.includes(query);
    card.style.display = match ? "grid" : "none";
    if (match) visible += 1;
  });

  let empty = activePanel.querySelector(".empty-message");
  if (!visible) {
    if (!empty) {
      empty = makeEl("div", "empty-message", "No matching publications found.");
      activePanel.appendChild(empty);
    }
  } else if (empty) {
    empty.remove();
  }
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupCanvas() {
  const canvas = document.getElementById("neural-canvas");
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  let particles = [];
  const count = Math.min(95, Math.floor(window.innerWidth / 15));

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }

  function init() {
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.24,
      vy: (Math.random() - 0.5) * 0.24,
      r: Math.random() * 1.8 + 0.6
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = window.innerWidth + 20;
      if (p.x > window.innerWidth + 20) p.x = -20;
      if (p.y < -20) p.y = window.innerHeight + 20;
      if (p.y > window.innerHeight + 20) p.y = -20;
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 145) {
          ctx.globalAlpha = (1 - dist / 145) * 0.38;
          ctx.strokeStyle = "#69e6ff";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 0.88;
    particles.forEach((p) => {
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
      grd.addColorStop(0, "rgba(105, 230, 255, 0.8)");
      grd.addColorStop(1, "rgba(105, 230, 255, 0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    requestAnimationFrame(tick);
  }

  resize();
  init();
  tick();
  window.addEventListener("resize", () => {
    resize();
    init();
  });
}

renderPublications(fullPublications, "full-publications");
renderPublications(preprints, "preprint-publications");
renderStack(patents, "patent-list");
renderStack(books, "book-list");
setupTabs();
setupNavigation();
setupCanvas();
document.getElementById("publication-search").addEventListener("input", filterPublications);
document.getElementById("year").textContent = new Date().getFullYear();
