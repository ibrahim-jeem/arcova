/* ARCOVA website script. CONTENT (edit here) block is near the top. */

/* ===== CONTENT (edit here) ===== */
const IC={
	d:"M3 21l18-18M7 17l-2-2M11 13l-2-2M15 9l-2-2",
	e:"M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5",
	c:"M3 20h18M5 20v-8a7 7 0 0114 0v8M12 5v3",
	s:"M8 7a4 4 0 118 0M4 21v-2a5 5 0 015-5h6a5 5 0 015 5v2",
	t:"M12 3v4M5 12H3M21 12h-2M7 7L5.6 5.6M17 7l1.4-1.4M12 21a6 6 0 100-12 6 6 0 000 12z",
	k:"M5 4h14v16H5zM9 8h6M9 12h6M9 16h4"
};

const ic=k=>`<span class="ico"><svg viewBox="0 0 24 24"><path d="${IC[k]||IC.k}"/></svg></span>`;
const cardH=(k,t,d)=>`<div class="card rv">${ic(k)}<h3>${t}</h3><p>${d}</p></div>`;

/* returns a harmless stand-in when an element is not on the current page */
const D=new Proxy(function(){},{get:(t,k)=>k===Symbol.toPrimitive?()=>"":D,set:()=>true,apply:()=>D});
const $=s=>document.querySelector(s)||D;
const WHO=[["d","Design","Architectural planning, 3D visualization, MEP design support and interior design."],["e","Engineering","Structural modeling, simulation and design to BNBC, ACI and ASTM codes."],["c","Construction","Civil construction, materials supply, supervision and quality control."],["s","Support","Project scheduling, BOQ, profile preparation and professional training."]];
const WHY=[["s","Engineer-led","Led by a Consulting Engineer (M.IEB, M.ASCE) with a team of civil, electrical, mechanical engineers and a senior architect."],["k","One-stop","Design, structure, BOQ, scheduling, construction and interior under one roof, which means fewer hand-offs."],["e","Code-based design","Structural work follows BNBC 2006/2018/2021, ACI 2021 and ASTM 2021, analyzed in STAAD Pro."],["t","Proven record","26 documented project records since 2024 across residential, commercial, interior, aviation and government work."]];

/* services: [short title, overview text, tab index] */
const SVC=[["d","Architectural Planning & Design","Concept, 2D layouts, working plans and approval drawings.",0],["e","Structural Modeling, Simulation & Design","Analysis, design and drawings to BNBC, ACI and ASTM.",1],["t","M.E.P Design Support","Electrical, Plumbing, HVAC and Ventilation layouts.",5],["c","Construction Management, Supervision & QC","Site supervision and quality control.",3],["k","Soil Test & Digital Survey","Sub-soil investigation and land mapping.",3],["d","Custom Interior Design & Construction","Residential, office and hospitality interiors.",4],["k","Project Profile Preparation & Project Scheduling","Project and loan profiles for agro and development projects. Work plans, milestones and handover timelines.",2],["c","Civil Construction & Materials Supply","Building works, site development and supply of materials.",3]];
const TABS=[
{n:"Architecture",tag:"Design it right. Build it beautifully.",it:[["A. Concept Development","Concept built from the client’s initial requirements."],["B. 3D Architectural Views","SketchUp Pro with V-Ray and D5 Real-Time rendering."],["C. 2D Layouts & Working Plans","Complete AutoCAD layouts, elevations and working drawings."],["D. Approval Plans","RAJUK and Pouroshova approval plan preparation."]],note:"Typical projects: farmhouses • apartments • mosques • offices • boundary walls • rooftop community spaces",g:["Classic farmhouse","Glass-facade mosque/tower","Modern villa","Green apartment","Mid-rise building","Foundation layout drawing"]},
{n:"Structural",tag:"Analyze it. Verify it. Draw it.",it:[["1. Analysis","STAAD Pro analysis based on BNBC 2006, 2018 and 2021, ACI 2021 and ASTM 2021."],["2. Design","Member design with DSSP (Designers Spreadsheet Programs) to the same codes."],["3. Structural Drawings","Foundation, column, beam and slab drawings prepared in AutoCAD."],["4. Special Structures","Overhead water tanks, septic tanks, LPG station and mosque expansion."]],note:"Typical applications: G+1 to G+8 residential • duplex & triplex • mosques • tanks • petrol/LPG stations",g:["3D model","STAAD model screenshot","Floor plan","Column/footing layout"]},
{n:"Estimation & BOQ",tag:"Know the cost before you break ground.",it:[["1. Cost Analysis & B.O.Q","Bills of quantities and cost estimates (e.g. G+8 residence, 21,600 sft)."],["2. Project Scheduling","Programs, milestones and phasing for construction."],["3. Project Profile Preparation","Loan and project profiles for agro and development projects."],["4. Land & Area Development","Area development plans and a 105-acre housing land map revision."]],note:"Design consultation, BOQ and cost estimation delivered alongside the design package.",g:["Area and site development planning"]},
{n:"Civil & Supply",tag:"Build it right. Supply it reliably.",it:[["1. Civil Construction","Marketplace, boundary and site buildings built to drawings."],["2. Materials Supply","Sand, cement, brick, rebar, CGI sheet, bitumen and scaffolding."],["3. Pile & Foundation Works","Pile construction for a six-storey building."],["4. Soil Test","Sub-soil investigation and digital survey."],["5. Tile & Paint Works","Surface preparation, tiling and multi-coat painting."],["6. Supervision & QC","Construction management and quality control on site."]],note:"Clients include Macro Construction & Engineering, Anirbaan Holdings, Urban Sight Real Estate and Urmi Group.",g:["Piling rig","Boundary wall under construction","Bitumen drums"]},
{n:"Interior",tag:"Spaces made to be lived in.",it:[["1. Concept & 3D Views","SketchUp Pro with V-Ray and D5 Real-Time rendering."],["2. Working Elevations","AutoCAD furniture elevations and working plans."],["3. Custom Joinery","Cabinets, wardrobes, partitions and doors in plywood, PVC and tempered glass."],["4. Finishing","Duco and enamel finish, putty and primer with hardware fitting."]],note:"Applied to: residences • restaurant • offices • bookshop • departmental store • power-plant admin buildings",g:["Garden night view","Restaurant bar","Bedroom","Laser-cut washroom partition","Executive office","Decorative ceiling"]},
{n:"MEP & Systems",tag:"Coordinated services for working facilities.",it:[["MEP Design Support","Electrical and plumbing layout with working plans."],["AC Ventilation Ducts","Construction of AC ventilation duct for an office room."],["Surveillance Supply","Body cameras supplied to the Civil Aviation Authority of Bangladesh (2026), plus CCTV in construction packages."],["Radio Communication","Supply, installation and maintenance of walkie-talkie systems and base station for Cargo RA-3 operations."]],note:"",g:["Electrical layout drawing","CCTV control room","MEP coordination drawing"]}];
const STEPS=[["UNDERSTAND","Requirements, site and client objectives."],["ASSESS","Soil test, digital survey and site constraints."],["DESIGN","Architecture, structure and MEP design."],["ESTIMATE","BOQ, cost estimate and schedule."],["BUILD","Civil works, interior and materials supply."],["SUPERVISE","Supervision and quality control."],["HANDOVER","Completion, documentation and support."]];
const SECT=[["c","Residential","Apartments, duplexes, triplexes, farmhouses and G+1 to G+9 buildings."],["k","Real Estate","Design, estimation and construction for developers."],["s","Commercial","Restaurants, offices, bookshops and retail stores."],["t","Aviation & Government","Civil Aviation Authority of Bangladesh and Bangladesh Air Force."],["e","Industrial & Power","Textile mill supply and Matarbari power-project interiors."],["d","Institutional","Mosques, schools and community buildings."]];

/* projects: [title, detail, category] */
const PROJ=[["Triplex Farmhouse, Kushtia","6,248 sft","Residential"],["G+6 Residential Building, Kolabagan","7,312 sft","Residential"],["Residential Duplex, Comilla","3,332 sft","Residential"],["Residential Interior, Mirpur-7","2025","Interior"],["Runrunty Japanese Restaurant, Banani","1,750 sft","Commercial"],["Single-storey Residence Interior, Kushtia","5,000 sft","Interior"],["Tamizia Zamee Mosque, Feni","43,141 sft","Institutional"],["Parking Project Design, Shah Amanat Int’l Airport","Chattogram","Government"],["Glass Fencing, Bangladesh Air Force, Agargaon","Dhaka","Government"],["Admin Building Washroom, Matarbari Power Project","Cox’s Bazar","Interior"],["Bookshop Interior, BAF Shaheen School, Tejgaon","Dhaka","Government"],["ISDB Twin Tower, Agargaon","1 lac sft","Commercial"]];
const CORP=["Anirbaan Holdings Ltd.","Anirban 360° Private Ltd.","Urbane Studio","Brand Climax Engineering Ltd.","Macro Construction & Engineering Ltd.","Urmi Group","Urban Sight Real Estate Ltd."];
const PUB=["Civil Aviation Authority of Bangladesh","Bangladesh Air Force","BSMRBC","China Railway Construction Group JV"];

const TEAM=[
["Md. Raihanul Hoque Chowdhury","Proprietor & Consulting Engineer (M.IEB, M.ASCE)","BS Civil & Environmental Engineering, North South University; MS Environmental Science & Management, Jahangirnagar University.", ""],
["Mohammad Nahid Hassan","Co-founder Arcova, Consulting Engineer (M.IEB)","BS Civil & Environmental Engineering, NSU; MS Environmental Science & Management, JU.", "D:/Company Profile/Website/img/nahid.jpg"],
["Mohammad Ibrahim","Co-founder Arcova, Electrical Consultant (M.IEEE)","BS Electrical and Electronic Engineering, UAP.", "D:/Company Profile/Website/img/ibrahim.jpg"],
["Engr. Habibur Rahman Patwary","Electrical Consultant (M.IEB)","BS Electrical & Electronics Engineering, CUET.", ""],
["Md. Shonok Rohan","Senior Architect, IAB AR-495 (Associate)","B.Arch, North South University.", ""],
["Sheikh Muhammad Muhtashim Abid","Structural Consultant","BS Civil & Environmental Engineering, NSU.", ""],
["Anik Kumar Bhakta","Senior Engineer (M.IEB)","BS Civil & Environmental Engineering, NSU; MS Environmental Science & Management, JU.", ""],
["Mohammed Rabby","Junior Engineer & Software Specialist","Diploma in Electronics (EEE), National Polytechnic Institute.", ""]
];

const REC=`2026|Aug|Scaffolding supply (hollow box, steel props, plain sheet)|Engr. Gaffary|Bashundhara
2026|Jul|Handheld radio systems & base station, Cargo RA-3 (supply, install, maintain)|CAAB|Chattogram
2026|Apr|Supply of body cameras|CAAB|Chattogram
2026|Mar|Construction work of ISDB Twin Tower|CCECC-CRCG JV|Agargaon, Dhaka
2026|Mar|Engineering consultation, G+1 residential|Unity Design & Consultation|Kapasia, Gazipur
2026|Feb|Bitumen supply|Fakhruddin Textile Mills (Urmi Group)|Mawna, Gazipur
2026|Jan|Project consultation, 6-storey building|Urban Sight Real Estate|Khilgaon, Dhaka
2025|Nov|RAJUK approval plan and pile construction, 6-storey building|Urban Sight Real Estate|Khilgaon, Dhaka
2025|Sep|Sub-soil investigation|Urban Sight Real Estate|Khilgaon, Dhaka
2025|Sep|Project consultation, 4-storey building|Ln. Engr. Md. Abdul Latif Khan|Matlab, Chandpur
2025|Aug|Interior construction & consultation, 400 sft|Ahsan Amin Fahim|Bashundhara R/A
2025|May|Design & construction of residential interior, 1,200 sft|Husne Nahar Begum|Mirpur-7, Dhaka
2025|Mar|Design, consultancy & execution of Japanese restaurant|Runrunty|Banani, Dhaka
2025|–|Parking project design|Shah Amanat Int’l Airport|Chattogram
2025|–|Interior & paint work; materials supply|Macro Construction; BSMRBC (WD2)|Uttara, Dhaka
2024|Nov|Design & consultation of Tamizia Zamee Mosque, 43,141 sft|Mosque Committee|Feni
2024|Oct|Structural consultation, triplex residential|Urbane Studio|Dhanmondi, Dhaka
2024|Jul|Glass fencing design & construction|Bangladesh Air Force|Agargaon, Dhaka
2024|May|Interior design of departmental store|Md. Shisir Sarkar|Chuadanga
2024|Mar|Apartment interior (2nd floor) and tilework & paintjob|Husne Nahar Begum|Mirpur-7, Dhaka
2024|Feb|Bookshop interior; structural consultation G+6 (13,520 sft)|Macro Construction; Urbane Studio|Tejgaon; Savar
2024|Jan|Interior of admin washroom, Matarbari power project; residence interior|Macro Construction; S. Hafizur Rahman|Cox’s Bazar; Kushtia`.split("\n").map(r=>r.split("|"));

/* ===== RENDER ===== */
document.querySelectorAll("[data-h]").forEach(h=>{const w=h.dataset.h.split(" ");h.innerHTML=w[0]+" <span class='a'>"+w.slice(1).join(" ")+"</span>"});
$("#who").innerHTML=WHO.map(x=>cardH(...x)).join("");

$("#whyc").innerHTML=WHY.map(x=>cardH(...x)).join("");

$("#svc").innerHTML=SVC.map(x=>`<a href="#tabs" data-t="${x[3]}" class="card rv" style="text-decoration:none;color:inherit">${ic(x[0])}<h3>${x[1]}</h3><p>${x[2]}</p></a>`).join("");

$("#steps").innerHTML=STEPS.map((s,i)=>`<li class="rv"><span class="n">${i+1}</span><div><h3>${s[0]}</h3><p>${s[1]}</p></div></li>`).join("");

$("#sec").innerHTML=SECT.map(x=>cardH(...x)).join("");

$("#cc").innerHTML=CORP.map(c=>`<span class="chip">${c}</span>`).join("");

$("#pc").innerHTML=PUB.map(c=>`<span class="chip">${c}</span>`).join("");

// $("#tg").innerHTML=TEAM.map(t=>`<div class="card rv"><div class="av" aria-hidden="true">${t[0].replace(/^(Md\.|Engr\.|Mohammad|Mohammed|Sheikh)\s/,"").split(" ").map(w=>w[0]).slice(0,2).join("")}</div><h3>${t[0]}</h3><div class="role">${t[1]}</div><p style="font-size:.92rem">${t[2]}</p></div>`).join("");
// $("#tg").innerHTML=TEAM.map(t=>`<div class="card rv"><img src="${t[3]}" alt="${t[0]}" class="team-img"><h3>${t[0]}</h3><div class="role">${t[1]}</div><p style="font-size:.92rem">${t[2]}</p></div>`).join("");

$("#tg").innerHTML = TEAM.map(t => {
  // Check if a picture path is provided and not empty
  const avatarContent = t[3] 
    ? `<img src="${t[3]}" alt="${t[0]}" class="team-img">` 
    : `<div class="av" aria-hidden="true">${t[0].replace(/^(Md\.|Engr\.|Mohammad|Mohammed|Sheikh)\s/, "").split(" ").map(w => w[0]).slice(0, 2).join("")}</div>`;

  return `<div class="card rv">${avatarContent}<h3>${t[0]}</h3><div class="role">${t[1]}</div><p style="font-size:.92rem">${t[2]}</p></div>`;
}).join("");

$("#s").innerHTML=["Architectural design","Structural design","BOQ & estimation","Civil construction","Interior design","MEP & supply","Soil test & survey","Other"].map(o=>`<option>${o}</option>`).join("");

/* tabs */
function showTab(i){document.querySelectorAll(".tab").forEach((b,j)=>b.setAttribute("aria-selected",i===j));const t=TABS[i];

$("#panel").innerHTML=`<div class="tagline">${t.tag}</div><div class="grid g2">${t.it.map(x=>`<div class="card"><h3 style="margin-top:0">${x[0]}</h3><p>${x[1]}</p></div>`).join("")}</div>${t.note?`<div class="note">${t.note}</div>`:""}<div class="gal">${t.g.map(g=>`<div class="ph">Photo: ${g}</div>`).join("")}</div>`}

$("#tabs").innerHTML=TABS.map((t,i)=>`<button class="tab" role="tab" aria-selected="false">${t.n}</button>`).join("");

document.querySelectorAll(".tab").forEach((b,i)=>b.onclick=()=>showTab(i));showTab(0);

document.querySelectorAll("[data-t]").forEach(a=>a.addEventListener("click",()=>showTab(+a.dataset.t)));

/* projects */
const CATS=["All","Residential","Interior","Institutional","Government","Commercial"];

function drawP(c){$("#pg").innerHTML=PROJ.map((p,i)=>[p,i]).filter(([p])=>c==="All"||p[2]===c).map(([p,i])=>`<button class="card pcard" data-i="${i}"><div class="ph">Photo: ${p[0]}</div><h3>${p[0]}</h3><span>${p[1]} · ${p[2]}</span></button>`).join("");

document.querySelectorAll(".pcard").forEach(b=>b.onclick=()=>{const p=PROJ[b.dataset.i];$("#mi").textContent="Photo: "+p[0];$("#mt").textContent=p[0];$("#md").textContent=p[1]+" · "+p[2];$("#modal").classList.add("show");$("#mx").focus()})}

$("#pf").innerHTML=CATS.map((c,i)=>`<button class="tab" aria-pressed="${!i}" aria-selected="${!i}">${c}</button>`).join("");

document.querySelectorAll("#pf .tab").forEach(b=>b.onclick=()=>{document.querySelectorAll("#pf .tab").forEach(x=>x.setAttribute("aria-selected",x===b));drawP(b.textContent)});drawP("All");

const closeM=()=>$("#modal").classList.remove("show");

$("#mx").onclick=closeM;$("#modal").onclick=e=>{if(e.target.id==="modal")closeM()};addEventListener("keydown",e=>{if(e.key==="Escape")closeM()});

/* record table */
function drawR(){const q=$("#q").value.toLowerCase(),y=$("#yr").value;$("#tb").innerHTML=REC.filter(r=>(!y||r[0]===y)&&(!q||r.join(" ").toLowerCase().includes(q))).map(r=>`<tr><td data-l="Year"><b style="color:var(--primary)">${r[0]}</b></td><td data-l="Date">${r[1]}</td><td data-l="Project">${r[2].replace(/&/g,"&amp;")}</td><td data-l="Client">${r[3].replace(/&/g,"&amp;")}</td><td data-l="Location">${r[4]}</td></tr>`).join("")||`<tr><td colspan="5">No records match. Try a different word or year.</td></tr>`}
$("#q").oninput=drawR;$("#yr").onchange=drawR;drawR();

/* form */
$("#f").onsubmit=e=>{e.preventDefault();$("#thanks").style.display="block";const b=`Name: ${$("#n").value}%0APhone: ${$("#p").value}%0AEmail: ${$("#e").value}%0AService: ${$("#s").value}%0ALocation: ${$("#l").value}%0A%0A${encodeURIComponent($("#m").value)}`;location.href=`mailto:renterprise.fbd@gmail.com?subject=Enquiry%20from%20website&body=${b}`};

/* nav, scroll, counters */
$("#burger").onclick=()=>{const o=$("#menu").classList.toggle("open");$("#burger").setAttribute("aria-expanded",o)};
document.querySelectorAll("#menu a").forEach(a=>a.onclick=()=>$("#menu").classList.remove("open"));
addEventListener("scroll",()=>{$("#top").style.display=scrollY>600?"block":"none"});$("#top").onclick=()=>scrollTo({top:0});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
document.querySelectorAll("[data-c]").forEach(el=>{const n=+el.dataset.c;let v=0;const t=setInterval(()=>{v++;el.textContent=v+(n===26?"+":"");if(v>=n)clearInterval(t)},50)});

$("#ex").innerHTML=[["d","About us","Who we are, how we work and the sectors we serve.","about"],["c","Services","Eight services, from design to construction.","services"],["k","Projects","Featured work and our full project record.","projects"],["e","Clients","Builders, developers and public bodies.","clients"],["s","Team","Meet the engineers and architects.","team"],["t","Contact","Get a free consultation.","contact"]].map(x=>`<a href="${x[3]==="home"?"index":x[3]}.html" class="card rv" style="text-decoration:none;color:inherit">${ic(x[0])}<h3>${x[1]}</h3><p>${x[2]}</p></a>`).join("");

/* ===== FUTURISTIC FX: parallax, tilt, glow, progress ===== */
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
document.body.insertAdjacentHTML("afterbegin",'<div id="bar"></div><div id="glow"></div><div class="orbs" aria-hidden="true"><i></i><i></i><i></i></div>');
const orbs=[...document.querySelectorAll(".orbs i")];
const PX=[...[.09,-.06,.05,-.1].map((s,i)=>[document.querySelectorAll(".collage .ph")[i],s]),...[...document.querySelectorAll(".sec-h")].map(e=>[e,-.05]),...[...document.querySelectorAll(".grid.g3 .ph, .ph.tall")].map((e,i)=>[e,i%2?.04:-.04])];
let tk=0;function frame(){tk=0;const y=scrollY,h=innerHeight;
$("#bar").style.transform=`scaleX(${y/Math.max(1,document.documentElement.scrollHeight-h)})`;
if(RM)return;
orbs.forEach((o,i)=>o.style.transform=`translate3d(${Math.cos(y/900+i)*60}px,${Math.sin(y/700+i*2)*120-y*.05}px,0)`);
PX.forEach(([e,s])=>{if(!e||!e.offsetParent)return;const r=e.parentElement.getBoundingClientRect();if(r.bottom<-300||r.top>h+300)return;e.style.translate=`0 ${((r.top+r.height/2-h/2)*s).toFixed(1)}px`})}
const req=()=>{if(!tk)tk=requestAnimationFrame(frame)};
addEventListener("scroll",req,{passive:true});addEventListener("resize",req);frame();

/* highlight current page in menu + page-in animation */
const cur=location.pathname.split("/").pop()||"index.html";
document.querySelectorAll("#menu a").forEach(a=>a.classList.toggle("act",a.getAttribute("href")===cur));
$("main").classList.add("pg");
document.addEventListener("pointermove",e=>{$("#glow").style.transform=`translate(${e.clientX}px,${e.clientY}px)`;if(RM||e.pointerType==="touch")return;
const c=e.target.closest&&e.target.closest(".card");
if(c){const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%");c.style.transform=`perspective(800px) rotateX(${((.5-y)*6).toFixed(2)}deg) rotateY(${((x-.5)*8).toFixed(2)}deg) translateY(-4px)`}
const col=$(".collage");if(col&&col.offsetParent)col.style.transform=`perspective(1000px) rotateY(${((e.clientX/innerWidth-.5)*12).toFixed(2)}deg) rotateX(${((.5-e.clientY/innerHeight)*9).toFixed(2)}deg)`});
document.addEventListener("pointerout",e=>{const c=e.target.closest&&e.target.closest(".card");if(c&&!c.contains(e.relatedTarget))c.style.transform=""});
