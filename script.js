// ══════════════════════════════════════════════
// ROLE DEFINITIONS — Ultimate Werewolf Deluxe
// ══════════════════════════════════════════════
const ROLES = {
  // ── WOLF TEAM ──
  "Werewolf":     {team:"wolf",   icon:"🐺", desc:"Each night choose a villager to eliminate. Seer sees you as a wolf."},
  "Wolf Cub":     {team:"wolf",   icon:"🐾", desc:"Werewolf. If you die, wolves get TWO kills next night."},
  "Dream Wolf":   {team:"wolf",   icon:"💤", desc:"Does not wake with pack until another wolf dies. Seer sees as wolf."},
  "Lone Wolf":    {team:"wolf",   icon:"🌑", desc:"Werewolf. Wins only if you are the LAST wolf alive."},
  "Fruit Brute":  {team:"wolf",   icon:"🍎", desc:"If last wolf alive, you lose your appetite (no kill) but try to outlast all villagers."},
  "Big Bad Wolf": {team:"wolf",   icon:"😈", desc:"Wolf. If the target is adjacent to you, you may also kill an adjacent player."},
  "Dire Wolf":    {team:"wolf",   icon:"🩸", desc:"Night 1: secretly choose a companion. You die if they die; they don't die if you die."},
  "Minion":       {team:"wolf",   icon:"🕵️", desc:"Not a wolf, but on wolf team. Knows the wolves. Wolves don't know you. Seer sees you as villager."},
  "Sorcerer":     {team:"wolf",   icon:"🔯", desc:"Wolf-team seer. Each night learn if a player is a Seer/Apprentice, or something else (not wolf type)."},
  "Cursed":       {team:"village",icon:"☠️", desc:"Villager — until attacked by wolves at night; then secretly become a Werewolf."},
  "Sasquatch":    {team:"village",icon:"🦶", desc:"Villager — until a day ends with NO lynch; then you become a Werewolf."},
  "Wild Child":   {team:"village",icon:"🧒", desc:"Night 1: secretly pick a role model. Villager unless that role model dies, then you become a Werewolf."},
  "Doppelgänger": {team:"village",icon:"👥", desc:"Night 1: secretly choose a player. If they die, you secretly take their full role."},
  // ── VILLAGE TEAM ──
  "Villager":     {team:"village",icon:"👤", desc:"No special power. Vote wisely during the day."},
  "Seer":         {team:"village",icon:"👁", desc:"Each night: learn the exact team/role of one player."},
  "Apprentice Seer":{team:"village",icon:"🔮",desc:"Becomes the Seer if the Seer is eliminated."},
  "Aura Seer":    {team:"village",icon:"✨", desc:"Each night: learn if a player is NOT a plain villager or wolf (has a special role)."},
  "Beholder":     {team:"village",icon:"👀", desc:"Night 1 only: learns who the Seer is."},
  "Bodyguard":    {team:"village",icon:"🛡", desc:"Each night: protect one player. Cannot protect same player twice in a row."},
  "Hunter":       {team:"village",icon:"🏹", desc:"When killed (any cause): immediately shoot one other player dead."},
  "Witch":        {team:"village",icon:"🧪", desc:"Has one Heal potion (save night victim) and one Poison potion (kill anyone) — each once per game."},
  "Cupid":        {team:"village",icon:"💘", desc:"Night 1: link two players as lovers. If one dies, the other dies of heartbreak."},
  "Diseased":     {team:"village",icon:"🦠", desc:"If killed by wolves, the wolves cannot kill anyone the following night."},
  "Elder":        {team:"village",icon:"🧓", desc:"Survives the first wolf attack (weakened). Dies on the second wolf attack."},
  "Mason":        {team:"village",icon:"🔨", desc:"Knows who the other Masons are. Multiple Masons may be in a game."},
  "Mayor":        {team:"village",icon:"🎖", desc:"May reveal themselves: your lynch vote counts TWICE for the rest of the game."},
  "Prince":       {team:"village",icon:"👑", desc:"Cannot be lynched by village vote. If voted out, moderator reveals immunity."},
  "Priest":       {team:"village",icon:"✝️", desc:"Night 1: protect one player permanently (that player survives their next would-be night-kill)."},
  "Spellcaster":  {team:"village",icon:"🔮", desc:"Each night: choose one player who must not speak during the following day."},
  "Tough Guy":    {team:"village",icon:"💪", desc:"If attacked by wolves, you survive until the NEXT nightfall before dying."},
  "Troublemaker": {team:"village",icon:"🎲", desc:"Once per game: force a double-lynch day (two players voted out). Use button during day."},
  "Martyr":       {team:"village",icon:"😇", desc:"Once per game: if someone is killed and their role hasn't been revealed, you can take their place."},
  "Old Hag":      {team:"village",icon:"🧙", desc:"Each night: choose one player who must leave the village next day (cannot vote or be voted)."},
  "Insomniac":    {team:"village",icon:"😴", desc:"Each night: learn if either of your neighbors woke up (used their night action)."},
  "The Count":    {team:"village",icon:"🔢", desc:"Night 1: learn exactly how many werewolves are in each half of the village."},
  "P.I.":         {team:"village",icon:"🕵", desc:"Each night: inspect 3 adjacent-seated players and learn if at least one is malicious (wolf team)."},
  "Chupacabra":   {team:"village",icon:"🦎", desc:"Each night: target a player. If they're a wolf they die. If not, nothing happens. If all wolves dead, kill anyone."},
  "Leprechaun":   {team:"village",icon:"🍀", desc:"May redirect a wolf attack to a player adjacent to the original target."},
  "Nostradamus":  {team:"village",icon:"🌟", desc:"Night 1: predict the winning team. If correct AND alive at end, you get a bonus solo win."},
  "Bloody Mary":  {team:"village",icon:"🩸", desc:"If killed, each subsequent night you kill one player from the team that killed you."},
  "Pacifist":     {team:"village",icon:"☮️", desc:"Cannot vote during lynch phase. Wins with village."},
  "Ghost":        {team:"village",icon:"👻", desc:"Dies night 1. Each day: leave a one-letter clue (no names/initials) to help village."},
  "Drunk":        {team:"village",icon:"🍺", desc:"You don't know your real role until Night 3, when you finally remember."},
  // ── NEUTRAL ──
  "Tanner":       {team:"neutral",icon:"🃏", desc:"Solo win: you ONLY win if the village votes you out during a lynch. Otherwise you lose."},
  "Hoodlum":      {team:"neutral",icon:"🎭", desc:"Night 1: secretly mark two players. Win if BOTH marked players die and you are still alive."},
  "Cult Leader":  {team:"neutral",icon:"🌀", desc:"Each night: add one player to your cult. Win if all remaining alive players are in your cult."},
  "Lone Wolf":    {team:"neutral",icon:"🌑", desc:"Werewolf who wins only if they are the last wolf-team player alive."},
  "Vampire":      {team:"neutral",icon:"🧛", desc:"Each night: mark a player with an accusation. On 2nd accusation they're eliminated. Must kill all non-vampires."},
  "Bogeyman":     {team:"neutral",icon:"👹", desc:"If wolves can't decide who to kill, you do it. Win when all night-active roles are dead."},
};

// Which roles appear as wolf to Seer:
const WOLF_VISIBLE = ["Werewolf","Wolf Cub","Dream Wolf","Lone Wolf","Fruit Brute","Big Bad Wolf","Dire Wolf"];
// Which roles are on wolf team for win-check:
const WOLF_TEAM = ["Werewolf","Wolf Cub","Dream Wolf","Lone Wolf","Fruit Brute","Big Bad Wolf","Dire Wolf","Minion","Sorcerer"];
// Neutral roles:
const NEUTRAL = ["Tanner","Hoodlum","Cult Leader","Vampire","Bogeyman"];
// Roles that can appear multiple times:
const MULTI = ["Villager","Werewolf","Mason","Vampire"];

const ALL_ROLES = Object.keys(ROLES);

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
let players=[], isNight=true, round=1, logs=[];

// night tracking
let killTarget=null;      // wolf main target index
let wolfExtraKill=false;  // Big Bad Wolf second kill pending
let wolfDoubleKill=false; // Wolf Cub died → double kill next night
let wolfDoubleUsed=false; // second of double kill done
let wolfSkipNight=false;  // Diseased → wolves can't kill
let wolfStunPending=false;
let dreamWolfActive=false;// dream wolf wakes after first wolf death

// per-role states
let seerUsed=false, auraSeerUsed=false, piUsed=false;
let sorcUsed=false, insomUsed=false;
let voteUsed=false, voteCount=0, troublemakerActive=false, troubleUsed=false;
let witchHeal=false,witchPoison=false,witchPoisonTarget=null,witchDone=false;
let cupidDone=false,cupidTargets=[];
let priestDone=false,priestTarget=null; // which player is priest-protected
let beholderDone=false;
let countDone=false;
let spellTarget=null; // silenced player index
let hagTarget=null;   // old hag banished player index
let hunterActive=false,hunterIdx=null;
let martyrActive=false,martyrPending=null; // martyrPending = {idx,reason}
let ghostClue='';
let cultMembers=new Set();
let hoodlumTargets=[];
let nostraTeam=null; // "village" or "wolf" or "neutral"
let bloodyMaryActive=false,bloodyMaryTeam=null,bloodyMaryIdx=null;
let loneWolfDirty=false; // lone wolf triggered
let wildChildModel={}; // wildChildModel[playerIdx] = modelIdx
let doppTarget={}; // doppTarget[playerIdx] = targetIdx
let direBond={};  // direBond[playerIdx] = companionIdx
let elderHits={};
let mayorRevealed={};
let piGroup=[];   // PI selected group
let leprechaunTarget=null; // redirect to adjacent
let chupaNightTarget=null;
let martyr=null; // index of martyr player
let vampAccuse={}; // vampAccuse[targetIdx] = count

// ══════════════════════════════════════════════
// SETUP
// ══════════════════════════════════════════════
window.onload=()=>{
  const s=localStorage.getItem('uwde');
  if(s){players=JSON.parse(s);}
  renderSetup(); buildLegend();
};
function save(){localStorage.setItem('uwde',JSON.stringify(players));}

function addP(){
  const inp=document.getElementById('pname');
  const n=inp.value.trim();
  if(!n)return;
  players.push({name:n,role:'Villager',alive:true,lover:false,loverIdx:-1,
    protected:false,lastProtected:false,hunterFired:false,elderHit:0,
    silenced:false,banished:false,cultMember:false,cursedToWolf:false,
    toughGuyDying:false,drunkRevealed:false,priestProt:false,
    apparentRole:'',// for Drunk/Doppelganger display
    wildModelIdx:-1,doppTargetIdx:-1,direBondIdx:-1,
    hoodlumT1:-1,hoodlumT2:-1,nostraPrediction:''});
  inp.value=''; save(); renderSetup();
}
function resetRoles(){
  if(!confirm('Reset all roles?'))return;
  players.forEach(p=>{p.role='Villager';p.lover=false;p.loverIdx=-1;
    p.alive=true;p.protected=false;p.lastProtected=false;p.hunterFired=false;
    p.elderHit=0;p.silenced=false;p.banished=false;p.cursedToWolf=false;
    p.toughGuyDying=false;p.priestProt=false;});
  save(); renderSetup();
}
function clearAll(){
  if(!confirm('Delete everything?'))return;
  localStorage.removeItem('uwde');players=[];save();renderSetup();
}
function switchTab(t){
  document.querySelectorAll('.tab').forEach((b,i)=>b.classList.toggle('active',['list','roles'][i]===t));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  document.getElementById('tab-'+t).classList.add('active');
}

function renderSetup(){
  const list=document.getElementById('setupList');
  const usedUnique=players.map(p=>p.role).filter(r=>!MULTI.includes(r));
  const hasCupid=players.some(p=>p.role==='Cupid');
  list.innerHTML='';
  players.forEach((p,i)=>{
    const opts=ALL_ROLES.map(r=>{
      const team=ROLES[r].team;
      const col=team==='wolf'?'#c06060':team==='neutral'?'#c080e0':'#60a060';
      const taken=!MULTI.includes(r)&&usedUnique.includes(r)&&p.role!==r;
      return `<option value="${r}" ${p.role===r?'selected':''} ${taken?'disabled':''}
        style="color:${col}">${taken?'🚫 ':''}${ROLES[r].icon} ${r}</option>`;
    }).join('');
    const loverBtnTitle=hasCupid?'':" title='Add Cupid to the roster to use lovers'";
    list.innerHTML+=`
    <div class="si">
      <div class="sn">${p.name}</div>
      <select onchange="updRole(${i},this.value)">${opts}</select>
      <button class="bl ${p.lover?'on':'off'}" onclick="togLover(${i})" ${hasCupid?'':'disabled style="opacity:.25;cursor:not-allowed"'}${loverBtnTitle}>${p.lover?'❤️':'♡'}</button>
      <button class="bx" onclick="remP(${i})">✕</button>
    </div>`;
  });
  const lovers=players.filter(p=>p.lover).length;
  // With Cupid: game is valid regardless of pre-set lovers (Cupid picks at Night 1)
  // Without Cupid: game is valid as long as no lovers are accidentally set
  const ok=players.length>=4&&(hasCupid||(lovers===0));
  document.getElementById('startBtn').disabled=!ok;
  document.getElementById('startBtn').textContent=
    hasCupid&&lovers===2?`▶ Begin Game (lovers pre-linked)`:
    hasCupid?'▶ Begin Game (Cupid links lovers Night 1)':
    lovers>0?`▶ Remove lovers or add Cupid to start`:
    '▶ Begin Game';
}
function updRole(i,v){players[i].role=v;save();renderSetup();}
function remP(i){players.splice(i,1);save();renderSetup();}
function togLover(i){
  if(!players.some(p=>p.role==='Cupid'))return; // lovers only allowed with Cupid
  const cnt=players.filter(p=>p.lover).length;
  if(!players[i].lover&&cnt>=2)return;
  players[i].lover=!players[i].lover;
  save();renderSetup();
}

function buildLegend(){
  const el=document.getElementById('roleLegend');
  el.innerHTML=ALL_ROLES.map(r=>{
    const d=ROLES[r];
    const tc=d.team==='wolf'?'#c06060':d.team==='neutral'?'#c080e0':'#60a060';
    return `<div class="rl-item">
      <div class="rl-name">${d.icon} ${r}</div>
      <span class="rl-team" style="background:${tc}22;color:${tc}">${d.team}</span>
      <div class="rl-desc">${d.desc}</div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════
// GAME START
// ══════════════════════════════════════════════
function startGame(){
  // link lovers
  const lv=players.map((p,i)=>({i,l:p.lover})).filter(x=>x.l);
  if(lv.length===2){players[lv[0].i].loverIdx=lv[1].i;players[lv[1].i].loverIdx=lv[0].i;}

  // init elder hits
  players.forEach((p,i)=>{if(p.role==='Elder')elderHits[i]=0;});

  // reset state
  isNight=true;round=1;logs=[];
  killTarget=null;wolfExtraKill=false;wolfDoubleKill=false;wolfDoubleUsed=false;
  wolfSkipNight=false;wolfStunPending=false;dreamWolfActive=false;
  seerUsed=false;auraSeerUsed=false;piUsed=false;sorcUsed=false;insomUsed=false;
  voteUsed=false;voteCount=0;troublemakerActive=false;troubleUsed=false;
  witchHeal=false;witchPoison=false;witchPoisonTarget=null;witchDone=false;
  cupidDone=players.some(p=>p.role!=='Cupid');// done if no cupid
  if(players.some(p=>p.role==='Cupid'))cupidDone=false;
  priestDone=false;priestTarget=null;beholderDone=false;countDone=false;
  spellTarget=null;hagTarget=null;
  hunterActive=false;hunterIdx=null;
  martyrActive=false;martyrPending=null;
  ghostClue='';cultMembers=new Set();hoodlumTargets=[];
  nostraTeam=null;bloodyMaryActive=false;bloodyMaryTeam=null;bloodyMaryIdx=null;
  loneWolfDirty=false;wildChildModel={};doppTarget={};direBond={};
  elderHits={};mayorRevealed={};piGroup=[];leprechaunTarget=null;
  chupaNightTarget=null;martyr=null;vampAccuse={};

  // Find ghost — dies night 1 immediately
  players.forEach((p,i)=>{if(p.role==='Ghost'){p.alive=false;p.ghostDead=true;}});

  document.getElementById('setupSec').classList.add('hidden');
  document.getElementById('gameSec').classList.remove('hidden');
  addLog('⚔ The game begins. Night falls…');
  if(players.some(p=>p.role==='Ghost'))addLog('👻 The Ghost dies as night begins, their clues will guide the village.');
  if(!cupidDone)addLog('💘 Cupid must link two lovers tonight!');
  renderGame();score();
}

// ══════════════════════════════════════════════
// LOGGING
// ══════════════════════════════════════════════
function addLog(m){
  logs.push(m);if(logs.length>14)logs.shift();
  const el=document.getElementById('log');
  el.innerHTML=logs.map((l,i)=>`<div class="le" style="opacity:${.35+.65*(i/logs.length)}">${l}</div>`).join('');
  el.scrollTop=el.scrollHeight;
}

// ══════════════════════════════════════════════
// SCORE
// ══════════════════════════════════════════════
function score(){
  const alive=players.filter(p=>p.alive&&!p.ghostDead);
  const effectiveRole=p=>p.cursedToWolf?'Werewolf':(p.role==='Drunk'&&!p.drunkRevealed?'Villager':p.role);
  const w=alive.filter(p=>WOLF_TEAM.includes(effectiveRole(p))).length;
  const n=alive.filter(p=>NEUTRAL.includes(effectiveRole(p))).length;
  const v=alive.length-w-n;
  document.getElementById('sv').textContent=v;
  document.getElementById('sw').textContent=w;
  document.getElementById('sn').textContent=n;
  document.getElementById('sr').textContent=round;
}

// ══════════════════════════════════════════════
// RENDER GAME
// ══════════════════════════════════════════════
function renderGame(){
  const list=document.getElementById('activeList');
  list.innerHTML='';

  const seerAlive=players.some(p=>p.role==='Seer'&&p.alive);
  const appSeerAlive=players.some(p=>p.role==='Apprentice Seer'&&p.alive&&!seerAlive);
  const aurAlive=players.some(p=>p.role==='Aura Seer'&&p.alive);
  const bgAlive=players.some(p=>p.role==='Bodyguard'&&p.alive);
  const witchAlive=players.some(p=>p.role==='Witch'&&p.alive);
  const sorcAlive=players.some(p=>p.role==='Sorcerer'&&p.alive);
  const piAlive=players.some(p=>p.role==='P.I.'&&p.alive);
  const spellAlive=players.some(p=>p.role==='Spellcaster'&&p.alive);
  const hagAlive=players.some(p=>p.role==='Old Hag'&&p.alive);
  const chupAlive=players.some(p=>p.role==='Chupacabra'&&p.alive);
  const insomAlive=players.some(p=>p.role==='Insomniac'&&p.alive);
  const leprAlive=players.some(p=>p.role==='Leprechaun'&&p.alive);
  const cultAlive=players.some(p=>p.role==='Cult Leader'&&p.alive);
  const ghostAlive=players.some(p=>p.role==='Ghost');
  const martyrAlive=players.some((p,i)=>{martyr=p.role==='Martyr'&&p.alive?i:martyr;return p.role==='Martyr'&&p.alive;});
  const mayorAlive=players.some(p=>p.role==='Mayor'&&p.alive);
  const troubleAlive=players.some(p=>p.role==='Troublemaker'&&p.alive);

  // Ghost clue input
  if(ghostAlive&&isNight===false){
    const gd=document.createElement('div');
    gd.style='margin-bottom:10px;padding:10px;background:#0a0b18;border:1px solid #202038;border-radius:8px;font-size:.8rem;color:#8090b0;';
    gd.innerHTML=`👻 Ghost clue (1 letter, no names): 
      <input class="ghost-input" id="ghostInput" maxlength="1" placeholder="?" value="${ghostClue}">
      <button class="ab ab-done" style="margin-left:6px" onclick="setGhostClue()">Post</button>`;
    list.appendChild(gd);
  }

  // Witch info bar
  if(witchAlive&&isNight&&!witchDone){
    const wd=document.createElement('div');
    wd.className='witch-info';
    wd.innerHTML=`🧪 Witch — Heal: ${witchHeal?'✘ used':'✔ available'} | Poison: ${witchPoison?'✘ used':'✔ available'}`;
    list.appendChild(wd);
  }

  // Cupid confirm
  if(!cupidDone&&cupidTargets.length===2&&players.some(p=>p.role==='Cupid'&&p.alive)&&round===1&&isNight){
    const cd=document.createElement('div');
    cd.style='margin-bottom:10px';
    cd.innerHTML=`<button class="ab acupid" style="width:100%" onclick="cupidConfirm()">
      💘 Confirm: ${players[cupidTargets[0]].name} ❤ ${players[cupidTargets[1]].name}</button>`;
    list.appendChild(cd);
  }

  // Troublemaker day button
  if(!isNight&&troubleAlive&&!troubleUsed&&!voteUsed){
    const td=document.createElement('div');
    td.style='margin-bottom:10px';
    td.innerHTML=`<button class="ab atrouble" style="width:100%" onclick="activateTrouble()">🎲 Troublemaker: Force Double-Lynch Day</button>`;
    list.appendChild(td);
  }

  // Mayor reveal button
  if(!isNight&&mayorAlive){
    const me=players.find(p=>p.role==='Mayor'&&p.alive);
    const mi=players.indexOf(me);
    if(!mayorRevealed[mi]){
      const md=document.createElement('div');
      md.style='margin-bottom:10px';
      md.innerHTML=`<button class="ab amayor" style="width:100%" onclick="mayorReveal(${mi})">🎖 Mayor: Reveal yourself (vote counts ×2)</button>`;
      list.appendChild(md);
    }
  }

  players.forEach((p,i)=>{
    const effWolf=p.cursedToWolf||WOLF_TEAM.includes(p.role);
    const effNeutral=NEUTRAL.includes(p.role);
    const card=document.createElement('div');
    let teamCls=p.alive?(effWolf?'w':effNeutral?'n':'v'):'';
    card.className=`pc ${teamCls} ${p.alive?'':'dead'} ${killTarget===i?'targeted':''} ${p.protected?'protected':''}`;

    // Badges
    let bdg='';
    if(p.lover) bdg+=`<span class="badge b-lover">❤ Lover</span>`;
    if(killTarget===i) bdg+=`<span class="badge b-target">🎯 Target</span>`;
    if(p.protected) bdg+=`<span class="badge b-prot">🛡 Protected</span>`;
    if(p.cursedToWolf) bdg+=`<span class="badge b-curse">☠ Turned Wolf</span>`;
    if(p.role==='Drunk'&&!p.drunkRevealed) bdg+=`<span class="badge b-drunk">🍺 Drunk</span>`;
    if(p.cultMember) bdg+=`<span class="badge b-cult">🌀 Cultist</span>`;
    if(p.toughGuyDying) bdg+=`<span class="badge b-tough">💪 Wounded</span>`;
    if(p.role==='Elder'&&p.elderHit>0) bdg+=`<span class="badge b-elder">⚡ Weakened</span>`;
    if(p.silenced) bdg+=`<span class="badge b-sil">🔇 Silenced</span>`;
    if(p.role==='Mason') bdg+=`<span class="badge b-mason">🔨 Mason</span>`;
    if(p.ghostDead) bdg+=`<span class="badge b-ghost">👻 Ghost</span>`;
    if(p.priestProt) bdg+=`<span class="badge b-prot">✝️ Blessed</span>`;
    if(mayorRevealed[i]) bdg+=`<span class="badge b-elder">🎖 Mayor</span>`;
    if(witchPoisonTarget===i) bdg+=`<span class="badge b-target">☠ Poisoned</span>`;
    if(p.banished) bdg+=`<span class="badge b-sil">🚷 Banished</span>`;

    const roleDisplay=p.role==='Drunk'&&!p.drunkRevealed?'??? (Drunk)':p.role;

    // Build actions
    let acts='';
    if(!p.alive&&!p.ghostDead){
      acts='<span style="color:#333;font-size:.75rem;font-style:italic">☠ Eliminated</span>';
    } else if(hunterActive&&hunterIdx!==null){
      if(i!==hunterIdx&&p.alive&&!p.ghostDead)
        acts+=`<button class="ab ahunter" onclick="hunterShoot(${i})">🏹 SHOOT</button>`;
    } else if(martyrActive&&martyrPending!==null){
      if(p.role==='Martyr'&&p.alive)
        acts+=`<button class="ab amarty" onclick="martyrTake()">😇 TAKE THEIR PLACE</button>
               <button class="ab ab-done" onclick="martyrSkip()">Skip</button>`;
    } else if(p.ghostDead){
      // ghost is dead but can post clues (handled above)
      acts='';
    } else {
      if(isNight){
        // ── NIGHT ACTIONS ──
        // Wolf kill button (non-wolf targets only; wolves vote via this button)
        if(!effWolf&&!wolfSkipNight){
          const dreamOk=p.role!=='Dream Wolf'||dreamWolfActive;
          acts+=`<button class="ab aw" onclick="setKill(${i})" ${wolfSkipNight?'disabled':''}>🐺 Target</button>`;
        }
        // Seer
        if((seerAlive&&p.role!=='Seer')||appSeerAlive)
          if(!seerUsed) acts+=`<button class="ab aseer" onclick="doSeer(${i})">👁 Reveal</button>`;
        // Aura Seer
        if(aurAlive&&!auraSeerUsed&&p.role!=='Aura Seer')
          acts+=`<button class="ab aseer" style="background:#4a6090" onclick="doAuraSeer(${i})">✨ Aura</button>`;
        // Bodyguard
        if(bgAlive)
          acts+=`<button class="ab as" onclick="doSave(${i})" ${p.lastProtected?'disabled':''}>🛡 Save</button>`;
        // Witch
        if(witchAlive&&!witchDone){
          if(!witchHeal&&killTarget===i)
            acts+=`<button class="ab awitch-h" onclick="doWitchHeal()">💚 Heal</button>`;
          if(!witchPoison&&killTarget!==i)
            acts+=`<button class="ab awitch-p" onclick="doWitchPoison(${i})">☠ Poison</button>`;
        }
        // Cupid (night 1 only)
        if(!cupidDone&&round===1&&players.some(p=>p.role==='Cupid'&&p.alive)&&i!==players.findIndex(p=>p.role==='Cupid'))
          acts+=`<button class="ab acupid" onclick="cupidPick(${i})" style="${cupidTargets.includes(i)?'outline:2px solid #e06090':''}">${cupidTargets.includes(i)?'💗 Chosen':'💘 Link'}</button>`;
        // Spellcaster
        if(spellAlive&&p.role!=='Spellcaster')
          acts+=`<button class="ab" style="background:#202848;color:#8090c0" onclick="doSpell(${i})">🔮 Silence</button>`;
        // Old Hag
        if(hagAlive&&p.role!=='Old Hag')
          acts+=`<button class="ab ahag" onclick="doHag(${i})">🧙 Banish</button>`;
        // Sorcerer
        if(sorcAlive&&!sorcUsed&&p.role!=='Sorcerer')
          acts+=`<button class="ab asorcs" onclick="doSorc(${i})">🔯 Inspect</button>`;
        // P.I.
        if(piAlive&&!piUsed&&p.role!=='P.I.')
          acts+=`<button class="ab" style="background:#203050;color:#80a0d0" onclick="doPi(${i})" style="${piGroup.includes(i)?'outline:2px solid #60a0d0':''}">🕵 Inspect</button>`;
        // Chupacabra
        if(chupAlive)
          acts+=`<button class="ab achupa" onclick="doChupa(${i})">🦎 Hunt</button>`;
        // Cult Leader
        if(cultAlive&&!cultMembers.has(i)&&p.role!=='Cult Leader')
          acts+=`<button class="ab acult" onclick="doCult(${i})">🌀 Convert</button>`;
        // Wild Child (night 1)
        if(round===1&&players.some(p=>p.role==='Wild Child'&&p.alive)){
          const wci=players.findIndex(p=>p.role==='Wild Child');
          if(i!==wci&&!wildChildModel[wci])
            acts+=`<button class="ab awild" onclick="doWild(${wci},${i})">🧒 Choose Model</button>`;
        }
        // Dire Wolf (night 1)
        if(round===1&&players.some(p=>p.role==='Dire Wolf'&&p.alive)){
          const dwi=players.findIndex(p=>p.role==='Dire Wolf');
          if(i!==dwi&&!direBond[dwi])
            acts+=`<button class="ab adire" onclick="doDire(${dwi},${i})">🩸 Bond</button>`;
        }
        // Doppelganger (night 1)
        if(round===1&&players.some(p=>p.role==='Doppelgänger'&&p.alive)){
          const di=players.findIndex(p=>p.role==='Doppelgänger');
          if(i!==di&&!doppTarget[di])
            acts+=`<button class="ab adopp" onclick="doDopp(${di},${i})">👥 Copy</button>`;
        }
        // Leprechaun
        if(leprAlive&&killTarget!==null&&i!==killTarget)
          acts+=`<button class="ab alepr" onclick="doLepr(${i})">🍀 Redirect</button>`;
        // Bloody Mary
        if(bloodyMaryActive&&bloodyMaryIdx===null)
          acts+=`<button class="ab abloodm" onclick="bloodyMaryKill(${i})">🩸 Haunt</button>`;
        // Priest (night 1)
        if(!priestDone&&round===1&&players.some(p=>p.role==='Priest'&&p.alive)&&p.role!=='Priest')
          acts+=`<button class="ab as" style="background:#405020" onclick="doPriest(${i})">✝️ Bless</button>`;
      } else {
        // ── DAY ACTIONS ──
        const canVote=!p.role==='Pacifist';
        if(!voteUsed||(troublemakerActive&&voteCount<2))
          acts+=`<button class="ab av" onclick="doVote(${i})" ${p.banished||p.silenced?'disabled':''}>⚖ Vote Out</button>`;
        // Vampire accuse
        if(players.some(pp=>pp.role==='Vampire'&&pp.alive))
          acts+=`<button class="ab" style="background:#400830;color:#ff80b0" onclick="doVampAccuse(${i})">🧛 Accuse</button>`;
        // Chupacabra day (if all wolves dead)
        if(chupAlive&&players.filter(p=>WOLF_TEAM.includes(p.role)&&p.alive).length===0)
          acts+=`<button class="ab achupa" onclick="doChupa(${i})">🦎 Kill</button>`;
      }
    }

    card.innerHTML=`
      <div class="ph">
        <div>
          <div class="pname">${ROLES[p.role]?.icon||'?'} ${p.name}</div>
          <div class="prole">${roleDisplay} · ${ROLES[p.role]?.team||'?'}</div>
        </div>
        <div class="pbadges">${bdg}</div>
      </div>
      <div class="acts">${acts}</div>`;
    list.appendChild(card);
  });

  // Witch "Pass" button
  if(isNight&&players.some(p=>p.role==='Witch'&&p.alive)&&!witchDone){
    const wb=document.createElement('div');wb.style='margin:6px 0 10px';
    wb.innerHTML=`<button class="ab ab-done" style="width:100%" onclick="skipWitch()">🧪 Witch passes tonight</button>`;
    list.appendChild(wb);
  }

  updateBanner();score();checkWin();
}

// ══════════════════════════════════════════════
// NIGHT ACTIONS
// ══════════════════════════════════════════════
function setKill(i){killTarget=i;addLog(`🐺 Wolves mark ${players[i].name} as tonight's victim`);renderGame();}
function doSave(i){players.forEach(p=>{p.lastProtected=p.protected;p.protected=false;});players[i].protected=true;addLog(`🛡 Bodyguard shields ${players[i].name}`);renderGame();}
function doSeer(i){
  seerUsed=true;
  const p=players[i];
  const eff=p.cursedToWolf?'Werewolf':p.role;
  let res;
  if(eff==='Lycan') res='🐺 Werewolf (Lycan)'; // lycan not in our set but handle
  else if(WOLF_VISIBLE.includes(eff)) res=`🐺 WEREWOLF (${eff})`;
  else res=`👤 Not a wolf — ${eff}`;
  addLog(`👁 Seer sees ${p.name}: ${res}`);renderGame();
}
function doAuraSeer(i){
  auraSeerUsed=true;
  const p=players[i];
  const plain=p.role==='Villager'||WOLF_VISIBLE.includes(p.role);
  addLog(`✨ Aura Seer: ${p.name} has a ${plain?'ordinary':'SPECIAL'} role`);renderGame();
}
function doWitchHeal(){if(killTarget===null)return;witchHeal=true;const n=players[killTarget].name;killTarget=null;addLog(`💚 Witch heals — ${n} is saved!`);renderGame();}
function doWitchPoison(i){witchPoison=true;witchPoisonTarget=i;addLog(`☠ Witch poisons ${players[i].name} — dies at dawn`);renderGame();}
function skipWitch(){witchDone=true;addLog('🧪 Witch passes');renderGame();}
function cupidPick(i){
  if(cupidTargets.includes(i)){cupidTargets=cupidTargets.filter(x=>x!==i);}
  else if(cupidTargets.length<2){cupidTargets.push(i);}
  renderGame();
}
function cupidConfirm(){
  const [a,b]=cupidTargets;
  players[a].lover=true;players[a].loverIdx=b;
  players[b].lover=true;players[b].loverIdx=a;
  cupidDone=true;cupidTargets=[];
  addLog(`💘 Cupid binds ${players[a].name} ❤ ${players[b].name}`);renderGame();
}
function doSpell(i){spellTarget=i;players[i].silenced=true;addLog(`🔮 Spellcaster silences ${players[i].name}`);renderGame();}
function doHag(i){hagTarget=i;players[i].banished=true;addLog(`🧙 Old Hag banishes ${players[i].name} tomorrow`);renderGame();}
function doSorc(i){
  sorcUsed=true;
  const p=players[i];
  const isSeerType=p.role==='Seer'||p.role==='Apprentice Seer'||p.role==='Aura Seer';
  addLog(`🔯 Sorcerer inspects ${p.name}: ${isSeerType?'🔮 SEER TYPE detected!':'Nothing special found'}`);renderGame();
}
function doPi(i){
  piGroup.push(i);addLog(`🕵 P.I. adds ${players[i].name} to group (${piGroup.length}/3)`);
  if(piGroup.length===3){
    piUsed=true;
    const anyMal=piGroup.some(idx=>WOLF_TEAM.includes(players[idx].role)||players[idx].cursedToWolf);
    addLog(`🕵 P.I. result: group ${piGroup.map(x=>players[x].name).join(', ')} — ${anyMal?'⚠ AT LEAST ONE is malicious!':'✅ All clear'}`);
    piGroup=[];
  }
  renderGame();
}
function doChupa(i){
  const p=players[i];const eff=p.cursedToWolf?'Werewolf':p.role;
  if(WOLF_TEAM.includes(eff)){addLog(`🦎 Chupacabra: ${p.name} is a WOLF — eliminated!`);processDeath(i,'Chupacabra');}
  else{addLog(`🦎 Chupacabra: ${p.name} is safe — nothing happens`);}
  renderGame();
}
function doCult(i){
  cultMembers.add(i);players[i].cultMember=true;
  addLog(`🌀 Cult Leader converts ${players[i].name}`);renderGame();
}
function doWild(wci,mi){
  wildChildModel[wci]=mi;
  addLog(`🧒 Wild Child secretly picks ${players[mi].name} as role model`);renderGame();
}
function doDire(dwi,ci){
  direBond[dwi]=ci;players[dwi].direBondIdx=ci;players[ci].direBondedBy=dwi;
  addLog(`🩸 Dire Wolf secretly bonds with ${players[ci].name}`);renderGame();
}
function doDopp(di,ti){
  doppTarget[di]=ti;players[di].doppTargetIdx=ti;
  addLog(`👥 Doppelgänger secretly mirrors ${players[ti].name}`);renderGame();
}
function doLepr(i){leprechaunTarget=i;addLog(`🍀 Leprechaun will redirect wolf attack to ${players[i].name}`);renderGame();}
function doPriest(i){priestDone=true;priestTarget=i;players[i].priestProt=true;addLog(`✝️ Priest blesses ${players[i].name}`);renderGame();}
function mayorReveal(i){mayorRevealed[i]=true;addLog(`🎖 ${players[i].name} reveals as Mayor — votes count double!`);renderGame();}
function activateTrouble(){troublemakerActive=true;voteCount=0;addLog('🎲 Troublemaker activates: Two players will be voted out today!');renderGame();}
function setGhostClue(){ghostClue=document.getElementById('ghostInput')?.value||'';addLog(`👻 Ghost leaves a clue: "${ghostClue}"`);renderGame();}
function bloodyMaryKill(i){bloodyMaryIdx=i;addLog(`🩸 Bloody Mary haunts ${players[i].name}!`);processDeath(i,'Bloody Mary haunting');bloodyMaryIdx=null;}

// ══════════════════════════════════════════════
// VOTE
// ══════════════════════════════════════════════
function doVote(i){
  const p=players[i];
  // Pacifist cannot vote — just reminder
  // Prince cannot be lynched
  if(p.role==='Prince'){addLog(`👑 ${p.name} is the Prince — cannot be lynched! Vote wasted.`);voteCount++;if(!troublemakerActive||voteCount>=2)voteUsed=true;renderGame();return;}
  // Tanner wins solo!
  if((p.role==='Tanner'||p.cursedToWolf&&p.role==='Tanner')){
    addLog(`🃏 ${p.name} is the Tanner — lynched by village! Tanner wins!`);
    p.alive=false;
    setTimeout(()=>showWin('🃏 Tanner Wins!',`${p.name} tricked the village into lynching them.<br>The Tanner wins alone!`),400);
    renderGame();return;
  }
  // Mayor double vote — just a modifier, still process death
  voteCount++;
  if(!troublemakerActive||voteCount>=2) voteUsed=true;
  addLog(`⚖ Village votes out ${p.name}!`);
  processDeath(i,'Village lynch');
}
function doVampAccuse(i){
  vampAccuse[i]=(vampAccuse[i]||0)+1;
  addLog(`🧛 Vampire accuses ${players[i].name} (${vampAccuse[i]}/2)`);
  if(vampAccuse[i]>=2){addLog(`🧛 ${players[i].name} gets 2nd accusation — eliminated by Vampire!`);processDeath(i,'Vampire elimination');}
  renderGame();
}

// ══════════════════════════════════════════════
// HUNTER
// ══════════════════════════════════════════════
function triggerHunter(idx){hunterActive=true;hunterIdx=idx;addLog(`🏹 ${players[idx].name} (Hunter) is dying — pick revenge target!`);renderGame();}
function hunterShoot(ti){hunterActive=false;const si=hunterIdx;hunterIdx=null;addLog(`🏹 Hunter's arrow strikes ${players[ti].name}!`);processDeath(ti,"Hunter's arrow");}

// ══════════════════════════════════════════════
// MARTYR
// ══════════════════════════════════════════════
function triggerMartyr(pendingIdx,reason){martyrActive=true;martyrPending={idx:pendingIdx,reason};addLog(`😇 Martyr may take the place of ${players[pendingIdx].name}!`);renderGame();}
function martyrTake(){
  const {idx,reason}=martyrPending;
  martyrActive=false;martyrPending=null;
  const mi=players.findIndex(p=>p.role==='Martyr'&&p.alive);
  players[mi].alive=false;
  addLog(`😇 Martyr ${players[mi].name} takes ${players[idx].name}'s place and dies!`);
  if(players[mi].role==='Hunter'&&!players[mi].hunterFired){players[mi].hunterFired=true;triggerHunter(mi);return;}
  renderGame();score();checkWin();
}
function martyrSkip(){martyrActive=false;const{idx,reason}=martyrPending;martyrPending=null;processDeath(idx,reason);}

// ══════════════════════════════════════════════
// DEATH ENGINE
// ══════════════════════════════════════════════
function processDeath(i,reason){
  if(!players[i].alive)return;

  // Priest protection
  if(players[i].priestProt&&reason!=='Village lynch'){
    players[i].priestProt=false;
    addLog(`✝️ ${players[i].name} is blessed — survives this attack!`);renderGame();return;
  }
  // Tough Guy buffer
  if(players[i].role==='Tough Guy'&&!players[i].toughGuyDying&&reason.includes('Wolf')){
    players[i].toughGuyDying=true;
    addLog(`💪 ${players[i].name} (Tough Guy) is gravely wounded — dies at dusk!`);renderGame();return;
  }
  // Elder double-hit
  if((players[i].role==='Elder'||(elderHits[i]!==undefined))&&reason.includes('Wolf')){
    if(!elderHits[i]){elderHits[i]=0;}
    if(elderHits[i]===0){elderHits[i]=1;players[i].elderHit=1;
      addLog(`🧓 ${players[i].name} (Elder) survives the first wolf attack! Weakened.`);renderGame();return;}
  }

  // Martyr check (not for lynch, not for martyr itself)
  if(players[i].role!=='Martyr'&&reason!=='Village lynch'&&martyr!==null&&players[martyr]?.alive&&!martyrPending){
    triggerMartyr(i,reason);return;
  }

  players[i].alive=false;
  addLog(`💀 ${players[i].name} (${players[i].role}) — ${reason}`);

  // Wild Child trigger
  Object.entries(wildChildModel).forEach(([wci,mi])=>{if(mi===i&&players[wci]&&players[wci].alive){players[wci].cursedToWolf=true;addLog(`🧒 ${players[wci].name} (Wild Child) — role model died! Becomes Werewolf!`);}});

  // Doppelganger trigger
  Object.entries(doppTarget).forEach(([di,ti])=>{if(ti===i&&players[di]&&players[di].alive){const r=players[ti].role;players[di].role=r;addLog(`👥 ${players[di].name} (Doppelgänger) takes ${r} role!`);}});

  // Dire Wolf trigger (companion dies → dire wolf dies too)
  if(players[i].direBondedBy!==undefined){const dwi=players[i].direBondedBy;if(players[dwi]&&players[dwi].alive){addLog(`🩸 ${players[dwi].name} (Dire Wolf) dies — companion bond broken!`);processDeath(dwi,'Dire Wolf bond');}}

  // Wolf Cub → double kill
  if(players[i].role==='Wolf Cub'&&reason.includes('Wolf')||reason==='Village lynch'){wolfDoubleKill=true;addLog('🐾 Wolf Cub died — wolves get DOUBLE KILL next night!');}

  // Diseased
  if(players[i].role==='Diseased'&&reason.includes('Wolf')){wolfStunPending=true;addLog('🦠 Diseased killed — wolves cannot kill next night!');}

  // Bloody Mary
  if(players[i].role==='Bloody Mary'){bloodyMaryActive=true;bloodyMaryTeam=reason.includes('Wolf')?'wolf':'village';addLog(`🩸 Bloody Mary rises! Will haunt one ${bloodyMaryTeam} player each night!`);}

  // Lover chain
  const li=players[i].loverIdx;
  if(li>=0&&players[li]&&players[li].alive){
    addLog(`💔 ${players[li].name} dies of heartbreak (lover)`);
    if(players[li].role==='Hunter'&&!players[li].hunterFired){players[li].hunterFired=true;players[li].alive=false;triggerHunter(li);return;}
    processDeath(li,'Heartbreak (lover bond)');
    return;
  }

  // Hunter revenge
  if(players[i].role==='Hunter'&&!players[i].hunterFired){players[i].hunterFired=true;setTimeout(()=>triggerHunter(i),100);return;}

  renderGame();score();checkWin();
}

// ══════════════════════════════════════════════
// PHASE ADVANCE
// ══════════════════════════════════════════════
function advance(){
  if(hunterActive){addLog('⚠ Hunter must shoot first!');return;}
  if(martyrActive){addLog('⚠ Martyr must decide first!');return;}

  if(isNight){
    // ══ DAWN ══
    let killed=false;

    // Leprechaun redirect
    const actualTarget=(leprechaunTarget!==null&&killTarget!==null)?leprechaunTarget:killTarget;
    leprechaunTarget=null;

    // Wolf kill
    if(actualTarget!==null&&!wolfSkipNight){
      const tgt=players[actualTarget];
      if(tgt.protected){addLog(`☀ Dawn: Bodyguard saved ${tgt.name}!`);}
      else{
        if(tgt.role==='Elder'){
          if(!elderHits[actualTarget])elderHits[actualTarget]=0;
          if(elderHits[actualTarget]===0){elderHits[actualTarget]=1;tgt.elderHit=1;addLog(`☀ Dawn: ${tgt.name} (Elder) survives first wolf attack — weakened!`);}
          else{addLog(`☀ Dawn: ${tgt.name} (Elder) dies from wolves!`);processDeath(actualTarget,'Wolf attack');killed=true;}
        } else {
          if(tgt.priestProt){tgt.priestProt=false;addLog(`☀ Dawn: ${tgt.name} blessed by Priest — survives!`);}
          else if(tgt.role==='Diseased'){wolfStunPending=true;processDeath(actualTarget,'Wolf attack');killed=true;}
          else{processDeath(actualTarget,'Wolf attack');killed=true;}
        }
      }
    } else if(wolfSkipNight){addLog('☀ Dawn: Wolves were stunned and could not kill!');}
    else{addLog('☀ Dawn: Nobody was killed by wolves.');}

    // Witch poison
    if(witchPoisonTarget!==null){addLog(`☠ ${players[witchPoisonTarget].name} dies from Witch's poison!`);processDeath(witchPoisonTarget,"Witch's poison");witchPoisonTarget=null;killed=true;}

    // Wolf Cub double kill phase 2
    if(wolfDoubleKill&&wolfDoubleUsed===false){wolfDoubleKill=false;}

    // Tough Guy death at dawn
    players.forEach((p,i)=>{if(p.toughGuyDying&&p.alive){p.toughGuyDying=false;addLog(`💪 ${p.name} (Tough Guy) succumbs to wounds at dawn!`);processDeath(i,'Tough Guy delayed death');killed=true;}});

    // Bloody Mary night haunting
    if(bloodyMaryActive&&bloodyMaryTeam){
      addLog('🩸 Bloody Mary haunts tonight — click the target you wish to haunt!');
      // handled by button in render
    }

    // Reset night state
    killTarget=null;seerUsed=false;auraSeerUsed=false;sorcUsed=false;
    witchDone=false;wolfSkipNight=wolfStunPending;wolfStunPending=false;
    isNight=false;voteUsed=false;voteCount=0;troublemakerActive=false;
    players.forEach(p=>{p.lastProtected=p.protected;p.protected=false;});
    // Banished players return next day
    players.forEach(p=>{p.banished=false;});
    // Silenced clears
    players.forEach(p=>{p.silenced=false;});

    if(!killed) addLog(`☀ Day ${round} — The village wakes and discusses`);

  } else {
    // ══ DUSK ══
    isNight=true;round++;
    // Drunk reveals on night 3
    players.forEach(p=>{if(p.role==='Drunk'&&round===3&&!p.drunkRevealed){p.drunkRevealed=true;addLog(`🍺 ${p.name} (Drunk) finally remembers their true role: ${p.role}`);}});
    // Dream wolf activates if any wolf died
    if(!dreamWolfActive&&players.some((p,i)=>!p.alive&&WOLF_VISIBLE.includes(p.role))){dreamWolfActive=true;addLog('💤 Dream Wolf awakens — a wolf has died!');}
    addLog(`🌙 Night ${round} — The village sleeps…`);
  }

  renderGame();score();checkWin();
  updateBanner();
}

// ══════════════════════════════════════════════
// WIN CONDITION
// ══════════════════════════════════════════════
function checkWin(){
  const alive=players.filter(p=>p.alive&&!p.ghostDead);
  const eff=p=>p.cursedToWolf?'Werewolf':p.role;
  const wolves=alive.filter(p=>WOLF_TEAM.includes(eff(p)));
  const village=alive.filter(p=>!WOLF_TEAM.includes(eff(p))&&!NEUTRAL.includes(eff(p)));
  const neutral=alive.filter(p=>NEUTRAL.includes(eff(p)));

  // Cult win
  if(alive.length>0&&alive.every(p=>cultMembers.has(players.indexOf(p))||p.role==='Cult Leader')){
    const cl=players.find(p=>p.role==='Cult Leader');
    setTimeout(()=>showWin('🌀 Cult Leader Wins!',`${cl?.name} has converted the entire village to the cult!`),500);return;
  }
  // Vampire win
  if(players.some(p=>p.role==='Vampire'&&p.alive)&&wolves.length===0&&village.length===0){
    setTimeout(()=>showWin('🧛 Vampires Win!',`The vampires have eliminated all opposition!`),500);return;
  }
  // Lone Wolf solo win
  const lw=players.find(p=>p.role==='Lone Wolf'&&p.alive);
  if(lw&&wolves.length===1&&wolves[0]===lw){
    setTimeout(()=>showWin('🌑 Lone Wolf Wins!',`${lw.name} is the last wolf standing — solo victory!`),500);return;
  }
  // No wolves → Village wins
  if(wolves.length===0&&!players.some(p=>p.role==='Vampire'&&p.alive)){
    setTimeout(()=>showWin('🌻 Village Wins!',`All werewolves eliminated!<br>Survivors: ${alive.map(p=>p.name).join(', ')}`),500);return;
  }
  // Wolves ≥ villagers → Wolf win
  if(wolves.length>=village.length+neutral.length&&alive.length>1){
    setTimeout(()=>showWin('🐺 Werewolves Win!',`The wolves now control the village!<br>Wolf pack: ${wolves.map(p=>p.name).join(', ')}`),500);return;
  }
}

function showWin(t,m){
  document.getElementById('wt').textContent=t;
  document.getElementById('wm').innerHTML=m;
  document.getElementById('win').classList.add('show');
}
function endWin(){document.getElementById('win').classList.remove('show');backSetup();}

// ══════════════════════════════════════════════
// BANNER
// ══════════════════════════════════════════════
function updateBanner(){
  const b=document.getElementById('banner');
  b.className=isNight?'night':'day';
  document.getElementById('phaseTitle').textContent=isNight?`🌙 Night ${round}`:`☀ Day ${round}`;
  document.getElementById('phaseBtn').textContent=isNight?'Dawn ›':'Dusk ›';
  let info=[];
  if(hunterActive){info=['🏹 Hunter — choose your shot!'];}
  else if(martyrActive){info=['😇 Martyr — take their place?'];}
  else if(isNight){
    if(wolfSkipNight)info.push('Wolves stunned (Diseased)');
    else info.push(wolfDoubleKill?'Wolves get 2 kills!':'Wolves choose victim');
    if(!seerUsed)info.push('Seer may act');
    if(players.some(p=>p.role==='Bodyguard'&&p.alive))info.push('Bodyguard protects');
    if(!witchDone&&players.some(p=>p.role==='Witch'&&p.alive))info.push('Witch may act');
  } else {
    info.push(voteUsed?'Lynch done':'Village votes to lynch');
    if(troublemakerActive)info.push(`Double lynch (${voteCount}/2)`);
  }
  document.getElementById('phaseInfo').textContent=info.join(' · ');
}

// ══════════════════════════════════════════════
// BACK TO SETUP
// ══════════════════════════════════════════════
function backSetup(){
  if(!confirm&&players.some(p=>!p.alive)){if(!confirm('Return to setup?'))return;}
  players.forEach(p=>{p.alive=true;p.protected=false;p.lastProtected=false;p.hunterFired=false;
    p.elderHit=0;p.silenced=false;p.banished=false;p.cursedToWolf=false;
    p.toughGuyDying=false;p.ghostDead=false;p.priestProt=false;p.loverIdx=-1;p.lover=false;p.cultMember=false;});
  isNight=true;round=1;logs=[];
  killTarget=null;wolfSkipNight=false;wolfStunPending=false;
  wolfDoubleKill=false;wolfDoubleUsed=false;wolfExtraKill=false;
  seerUsed=false;auraSeerUsed=false;voteUsed=false;voteCount=0;
  witchHeal=false;witchPoison=false;witchPoisonTarget=null;witchDone=false;
  cupidDone=false;cupidTargets=[];priestDone=false;priestTarget=null;
  beholderDone=false;countDone=false;spellTarget=null;hagTarget=null;
  hunterActive=false;hunterIdx=null;martyrActive=false;martyrPending=null;
  ghostClue='';cultMembers=new Set();hoodlumTargets=[];
  nostraTeam=null;bloodyMaryActive=false;bloodyMaryTeam=null;bloodyMaryIdx=null;
  elderHits={};mayorRevealed={};piGroup=[];leprechaunTarget=null;
  wildChildModel={};doppTarget={};direBond={};martyr=null;vampAccuse={};
  dreamWolfActive=false;piUsed=false;sorcUsed=false;insomUsed=false;
  troubleUsed=false;troublemakerActive=false;

  document.getElementById('setupSec').classList.remove('hidden');
  document.getElementById('gameSec').classList.add('hidden');
  renderSetup();
}