// @ts-nocheck
"use client";

import { useEffect } from "react";
import "./build-my-audience.css";
import { submitAudienceBrief, briefAsText } from "./submit";

/**
 * Build My Audience — Stillwater Media
 * Five-step criteria picker with a live brief panel, then a printable audience brief.
 * Submission goes through submitAudienceBrief() in ./submit.ts — wire that to the
 * site's existing contact-form handler. Nothing else in this file touches the network.
 */
export default function BuildMyAudience() {
  useEffect(() => {
    /* eslint-disable */
    const NS='http://www.w3.org/2000/svg';
    const root=document.querySelector('.bma');const $=s=>root.querySelector(s),$$=s=>[...root.querySelectorAll(s)];
        const ac=new AbortController();const signal=ac.signal;
        $('#pd').innerHTML='';
    // 146 dots = 14.6M households (100K each). Tier bands are sourced: 125.5 / 18 / 2.5 dots.
    const TIERS={'$1M–$5M liquid':12.55,'$5M–$25M liquid':1.8,'$25M+ liquid':0.252};
    const pd=$('#pd');const dots=[];for(let i=0;i<146;i++){const c=i%15,r=Math.floor(i/15);const d=document.createElementNS(NS,'circle');d.setAttribute('cx',c*20+10);d.setAttribute('cy',r*20+10);d.setAttribute('r',5);d.setAttribute('class','dot');d.dataset.tier=i<126?'$1M–$5M liquid':i<144?'$5M–$25M liquid':'$25M+ liquid';pd.appendChild(d);dots.push(d)}
    const est=$('#est');let cur=14.6;
    const ease=t=>1-Math.pow(1-t,3);
    const fmt=v=>v>=1?v.toFixed(2).replace(/\.?0+$/,'')+'M':Math.round(v*1000)+'K';
    function countTo(to){const from=cur,t0=performance.now();(function f(n){const p=Math.min(1,(n-t0)/600);est.textContent=fmt(from+(to-from)*ease(p));if(p<1)requestAnimationFrame(f)})(t0);cur=to}
    const txt=c=>c.childNodes[0].textContent.trim();
    function state(){const s={};
      s.tier=$$('[data-g=tier].on').map(txt);s.sex=$$('[data-g=sex].on').map(txt);s.age=$$('[data-g=age].on').map(txt);s.occ=$$('[data-g=occ].on').map(txt);s.hh=$$('[data-g=hh].on').map(txt);s.demoOther=$('#demoOther').value.trim();
      s.geo=$$('[data-layer=geo] .chip.on').map(c=>c.dataset.d);s.geoOther=$('#geoOther').value.trim();
      s.buy=$$('[data-layer=buy] .chip.on').map(c=>c.dataset.b);s.buyOther=$('#buyOther').value.trim();
      s.intent=$$('[data-layer=intent] .chip.on').map(c=>c.dataset.i);s.intentOther=$('#intentOther').value.trim();
      s.firstName=$('#firstName').value.trim();s.lastName=$('#lastName').value.trim();s.name=(s.firstName+' '+s.lastName).trim();s.email=$('#email').value.trim();s.company=$('#company').value.trim();s.budget=$('#budget').value.trim();s.notes=$('#notes').value.trim();return s}
    const join=(a,o)=>{const l=[...a];if(o)l.push(o);return l.length?l.join(', '):null};
    function layers(s){return[join([...s.tier,...s.sex,...s.age,...s.occ,...s.hh],s.demoOther),join(s.geo,s.geoOther),join(s.buy,s.buyOther),join(s.intent,s.intentOther)]}
    function update(){
      const s=state();const sel=s.tier.length?s.tier:Object.keys(TIERS);
      countTo(sel.reduce((a,t)=>a+TIERS[t],0));
      dots.forEach(d=>d.classList.toggle('off',!sel.includes(d.dataset.tier)));
      const L=layers(s);
      $('#briefLive').innerHTML='<b>Demographic</b>'+(L[0]||'<i>Everyone in the tier</i>')+'<b>Geographic</b>'+(L[1]||'<i>Not set — defaults to nationwide</i>')+'<b>Purchase signals</b>'+(L[2]||'<i>Any</i>')+'<b>Intent</b>'+(L[3]||'<i>Any</i>');
      $('#pstep').textContent=L.filter(Boolean).length+' / 4 layers';
    }
    $$('.chip').forEach(c=>c.addEventListener('click',()=>{
      if(c.dataset.d==='Nationwide'&&!c.classList.contains('on'))$$('[data-layer=geo] .chip.on').forEach(x=>x.classList.remove('on'));
      else if(c.closest('[data-layer=geo]'))$('[data-d=Nationwide]').classList.remove('on');
      c.classList.toggle('on');update()},{signal}));
    $$('input,textarea').forEach(i=>i.addEventListener('input',update,{signal}));
    update();
    $('#submit').addEventListener('click',()=>{
      const s=state();let ok=true;
      $('#fName').classList.toggle('bad',!s.firstName);if(!s.firstName)ok=false;
      const em=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email);$('#fEmail').classList.toggle('bad',!em);if(!em)ok=false;
      if(!ok){($('#fName.bad input')||$('#fEmail.bad input')).focus();return}
      const L=layers(s);const sel=s.tier.length?s.tier:Object.keys(TIERS);
      $('#sentTo').textContent=s.email;$('#docCo').textContent=s.company||s.name;
      $('#docDate').textContent=new Date().toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'});
      $('#docRef').textContent='SWM-'+Math.random().toString(36).slice(2,8).toUpperCase();
      $('#docEst').firstChild.textContent=fmt(sel.reduce((a,t)=>a+TIERS[t],0));
      $('#docLayers').firstChild.textContent=L.filter(Boolean).length+' / 4';
      $('#docWho').textContent=[s.name,s.company,s.email,s.budget?('Budget: '+s.budget):null].filter(Boolean).join(' · ');
      const put=(id,val,empty)=>$(id).innerHTML=val?val:'<i>'+empty+'</i>';
      put('#docDemo',L[0],'All liquid-millionaire households');put('#docGeo',L[1],'Nationwide');put('#docBuy',L[2],'No purchase filter');put('#docIntent',L[3],'No intent filter');put('#docNotes',s.notes,'—');
      // Hand off to the site's existing form handler (see submit.ts). Fire-and-forget; the brief renders regardless.
      submitAudienceBrief({
        firstName:s.firstName,lastName:s.lastName,email:s.email,company:s.company,
        inquiryType:'Audience Brief',
        message:briefAsText(s,L,$('#docRef').textContent,fmt(sel.reduce((a,t)=>a+TIERS[t],0))),
        brief:{ref:$('#docRef').textContent,budget:s.budget,notes:s.notes,demographic:L[0],geographic:L[1],purchaseSignals:L[2],intent:L[3],startingUniverse:fmt(sel.reduce((a,t)=>a+TIERS[t],0)),raw:s}
      }).catch(e=>console.error('audience brief submit failed',e));
      $('#form').classList.add('hide');$('#panel').style.display='none';$('#done').classList.add('show');$('.lead').style.display='none';
      scrollTo({top:0,behavior:'smooth'});
    },{signal});
    $('#print').addEventListener('click',()=>print(),{signal});
    $('#again').addEventListener('click',()=>{$('#form').classList.remove('hide');$('#panel').style.display='';$('#done').classList.remove('show');$('.lead').style.display='';scrollTo({top:0,behavior:'smooth'})},{signal});

        return()=>ac.abort();
    /* eslint-enable */
  }, []);

  return (
    <div className="bma">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap"
      />
      <div className="top"><span><b>Stillwater</b> Media</span><span>Audience Builder</span><a href="/the-data">← Back to The Data</a></div>

      <div className="wrap">
        <div className="lead">
          <p className="eyebrow">Build my audience</p>
          <h1>Tell us who you sell to. We'll size <em>it.</em></h1>
          <p>Pick your criteria across the four layers and add your details. You'll get a written audience brief immediately, and a strategist will come back within one business day with the real count from our data partners.</p>
        </div>

        <div className="layout">
          <div className="form" id="form">

            <div className="step">
              <div className="n">01 / 05</div>
              <div>
                <h2>Who they <em>are.</em></h2>
                <p className="hint">Select as many as apply. Leave a group empty to include everyone in it.</p>
                <div className="grp">Liquid wealth tier <i>(source: Spectrem Group, $1M+ net worth excl. primary residence)</i></div>
                <div className="chips" data-layer="demo"><button className="chip" data-g="tier" data-t="$1M–$5M liquid" data-n="12.55M households">$1M–$5M liquid <i>12.55M households</i></button><button className="chip" data-g="tier" data-t="$5M–$25M liquid" data-n="1.8M households">$5M–$25M liquid <i>1.8M households</i></button><button className="chip" data-g="tier" data-t="$25M+ liquid" data-n="252K households">$25M+ liquid <i>252K households</i></button></div>
                <div className="grp">Gender</div>
                <div className="chips" data-layer="demo"><button className="chip" data-g="sex">Male</button><button className="chip" data-g="sex">Female</button></div>
                <div className="grp">Age</div>
                <div className="chips" data-layer="demo"><button className="chip" data-g="age">25–34</button><button className="chip" data-g="age">35–44</button><button className="chip" data-g="age">45–54</button><button className="chip" data-g="age">55–64</button><button className="chip" data-g="age">65–74</button><button className="chip" data-g="age">75+</button></div>
                <div className="grp">Occupation</div>
                <div className="chips" data-layer="demo"><button className="chip" data-g="occ">Business owner</button><button className="chip" data-g="occ">Founder / CEO</button><button className="chip" data-g="occ">C-suite executive</button><button className="chip" data-g="occ">Partner (law, accounting, consulting)</button><button className="chip" data-g="occ">Physician / surgeon</button><button className="chip" data-g="occ">Dentist / orthodontist</button><button className="chip" data-g="occ">Attorney</button><button className="chip" data-g="occ">Financial advisor / wealth manager</button><button className="chip" data-g="occ">Private equity / hedge fund</button><button className="chip" data-g="occ">Tech executive</button><button className="chip" data-g="occ">Real estate developer / investor</button><button className="chip" data-g="occ">Commercial pilot</button><button className="chip" data-g="occ">Professional athlete / entertainer</button><button className="chip" data-g="occ">Retired</button></div>
                <div className="grp">Household</div>
                <div className="chips" data-layer="demo"><button className="chip" data-g="hh">Married</button><button className="chip" data-g="hh">Children at home</button><button className="chip" data-g="hh">Empty nesters</button><button className="chip" data-g="hh">Multi-property owner</button><button className="chip" data-g="hh">Recently relocated</button><button className="chip" data-g="hh">Recently retired</button></div>
                <div className="field"><label htmlFor="demoOther">Other demographic criteria</label><input id="demoOther" placeholder="e.g. women 50+ who own a business; physicians within 5 years of retirement" /></div>
              </div>
            </div>
            <div className="step">
              <div className="n">02 / 05</div>
              <div>
                <h2>Where they <em>are.</em></h2>
                <p className="hint">Nationwide, or pick markets. Any DMA, state, ZIP cluster, or radius in the country is available — these are the ones our clients ask for most.</p>
                <div className="chips" data-layer="geo"><button className="chip" data-d="Nationwide">Nationwide</button><button className="chip" data-d="New York">New York</button><button className="chip" data-d="Los Angeles">Los Angeles</button><button className="chip" data-d="San Francisco Bay Area">San Francisco Bay Area</button><button className="chip" data-d="Chicago">Chicago</button><button className="chip" data-d="Dallas–Fort Worth">Dallas–Fort Worth</button><button className="chip" data-d="Houston">Houston</button><button className="chip" data-d="Washington DC">Washington DC</button><button className="chip" data-d="Miami–Fort Lauderdale">Miami–Fort Lauderdale</button><button className="chip" data-d="Palm Beach">Palm Beach</button><button className="chip" data-d="Naples–Fort Myers">Naples–Fort Myers</button><button className="chip" data-d="Tampa–Sarasota">Tampa–Sarasota</button><button className="chip" data-d="Boston">Boston</button><button className="chip" data-d="Philadelphia">Philadelphia</button><button className="chip" data-d="Atlanta">Atlanta</button><button className="chip" data-d="Phoenix–Scottsdale">Phoenix–Scottsdale</button><button className="chip" data-d="Denver">Denver</button><button className="chip" data-d="Seattle">Seattle</button><button className="chip" data-d="San Diego">San Diego</button><button className="chip" data-d="Orange County">Orange County</button><button className="chip" data-d="Charlotte">Charlotte</button><button className="chip" data-d="Nashville">Nashville</button><button className="chip" data-d="Austin">Austin</button><button className="chip" data-d="Las Vegas">Las Vegas</button><button className="chip" data-d="Minneapolis">Minneapolis</button><button className="chip" data-d="Greenwich / Fairfield County">Greenwich / Fairfield County</button><button className="chip" data-d="The Hamptons">The Hamptons</button><button className="chip" data-d="Aspen / Vail">Aspen / Vail</button><button className="chip" data-d="Jackson Hole">Jackson Hole</button><button className="chip" data-d="Hawaii">Hawaii</button></div>
                <div className="field"><label htmlFor="geoOther">Other markets, states, or radius targets</label><input id="geoOther" placeholder="e.g. 30 miles around Teterboro; all of Florida; 20 miles around each of our 12 showrooms" /></div>
              </div>
            </div>
            <div className="step">
              <div className="n">03 / 05</div>
              <div>
                <h2>What they <em>buy.</em></h2>
                <p className="hint">Transaction, ownership and membership signals from our data partners. Select what describes your buyer.</p>
                <div className="grp">Golf</div><div className="chips" data-layer="buy"><button className="chip" data-b="Private golf club membership">Private golf club membership</button><button className="chip" data-b="Golf equipment purchases">Golf equipment purchases</button><button className="chip" data-b="Golf travel & resort stays">Golf travel & resort stays</button></div><div className="grp">Aviation</div><div className="chips" data-layer="buy"><button className="chip" data-b="FBO departures">FBO departures</button><button className="chip" data-b="Charter flights">Charter flights</button><button className="chip" data-b="Jet card / fractional ownership">Jet card / fractional ownership</button><button className="chip" data-b="Aircraft ownership">Aircraft ownership</button></div><div className="grp">Automotive</div><div className="chips" data-layer="buy"><button className="chip" data-b="Luxury vehicle registrations">Luxury vehicle registrations</button><button className="chip" data-b="Exotic / collector cars">Exotic / collector cars</button><button className="chip" data-b="Multiple vehicles registered">Multiple vehicles registered</button><button className="chip" data-b="Recent luxury auto purchase">Recent luxury auto purchase</button></div><div className="grp">Marine</div><div className="chips" data-layer="buy"><button className="chip" data-b="Boat ownership">Boat ownership</button><button className="chip" data-b="Yacht charter">Yacht charter</button><button className="chip" data-b="Marina / yacht club membership">Marina / yacht club membership</button></div><div className="grp">Real estate</div><div className="chips" data-layer="buy"><button className="chip" data-b="Second / vacation home">Second / vacation home</button><button className="chip" data-b="Recent home purchase $2M+">Recent home purchase $2M+</button><button className="chip" data-b="Investment property owner">Investment property owner</button><button className="chip" data-b="Recent listing or sale">Recent listing or sale</button></div><div className="grp">Travel</div><div className="chips" data-layer="buy"><button className="chip" data-b="Luxury hotel & resort stays">Luxury hotel & resort stays</button><button className="chip" data-b="First / business class flyers">First / business class flyers</button><button className="chip" data-b="Luxury cruise">Luxury cruise</button><button className="chip" data-b="Private villa rentals">Private villa rentals</button></div><div className="grp">Retail</div><div className="chips" data-layer="buy"><button className="chip" data-b="Luxury fashion">Luxury fashion</button><button className="chip" data-b="Fine jewelry & watches">Fine jewelry & watches</button><button className="chip" data-b="Fine art & auction buyers">Fine art & auction buyers</button><button className="chip" data-b="Wine & spirits collectors">Wine & spirits collectors</button><button className="chip" data-b="High-end home furnishings">High-end home furnishings</button></div><div className="grp">Financial</div><div className="chips" data-layer="buy"><button className="chip" data-b="Private banking clients">Private banking clients</button><button className="chip" data-b="Active brokerage / investors">Active brokerage / investors</button><button className="chip" data-b="Annuity / life insurance buyers">Annuity / life insurance buyers</button><button className="chip" data-b="Business credit card holders">Business credit card holders</button><button className="chip" data-b="Trust & estate activity">Trust & estate activity</button></div><div className="grp">Lifestyle</div><div className="chips" data-layer="buy"><button className="chip" data-b="Private social / dining clubs">Private social / dining clubs</button><button className="chip" data-b="Equestrian">Equestrian</button><button className="chip" data-b="Ski & mountain clubs">Ski & mountain clubs</button><button className="chip" data-b="Luxury fitness & wellness">Luxury fitness & wellness</button><button className="chip" data-b="Concierge medicine">Concierge medicine</button><button className="chip" data-b="Private school tuition">Private school tuition</button><button className="chip" data-b="Philanthropy & board affiliations">Philanthropy & board affiliations</button><button className="chip" data-b="Season tickets / suite holders">Season tickets / suite holders</button></div>
                <div className="field"><label htmlFor="buyOther">Other purchase signals that matter to you</label><input id="buyOther" placeholder="e.g. wine auction buyers; recent divorce filings; new business formations" /></div>
              </div>
            </div>
            <div className="step">
              <div className="n">04 / 05</div>
              <div>
                <h2>What they want <em>next.</em></h2>
                <p className="hint">In-market intent signals, anonymized and hashed. Pick the categories closest to what you sell — and anything adjacent your buyer is also shopping for.</p>
                <div className="grp">Finance</div><div className="chips" data-layer="intent"><button className="chip" data-i="Wealth management">Wealth management</button><button className="chip" data-i="Financial advisor search">Financial advisor search</button><button className="chip" data-i="Retirement planning / annuities">Retirement planning / annuities</button><button className="chip" data-i="Tax & estate planning">Tax & estate planning</button><button className="chip" data-i="Private banking">Private banking</button><button className="chip" data-i="Business lending">Business lending</button><button className="chip" data-i="Insurance (life, umbrella, specialty)">Insurance (life, umbrella, specialty)</button></div><div className="grp">Aviation & marine</div><div className="chips" data-layer="intent"><button className="chip" data-i="Private aviation">Private aviation</button><button className="chip" data-i="Jet card / fractional">Jet card / fractional</button><button className="chip" data-i="Aircraft purchase">Aircraft purchase</button><button className="chip" data-i="Yacht purchase / charter">Yacht purchase / charter</button></div><div className="grp">Property</div><div className="chips" data-layer="intent"><button className="chip" data-i="Luxury real estate">Luxury real estate</button><button className="chip" data-i="Second home / vacation property">Second home / vacation property</button><button className="chip" data-i="Home renovation & design">Home renovation & design</button><button className="chip" data-i="Luxury rentals">Luxury rentals</button><button className="chip" data-i="Senior living / CCRC">Senior living / CCRC</button></div><div className="grp">Automotive</div><div className="chips" data-layer="intent"><button className="chip" data-i="Luxury auto">Luxury auto</button><button className="chip" data-i="Exotic / collector auto">Exotic / collector auto</button><button className="chip" data-i="EV luxury">EV luxury</button><button className="chip" data-i="Auto financing / leasing">Auto financing / leasing</button></div><div className="grp">Travel & leisure</div><div className="chips" data-layer="intent"><button className="chip" data-i="Luxury travel">Luxury travel</button><button className="chip" data-i="Golf travel">Golf travel</button><button className="chip" data-i="Cruise">Cruise</button><button className="chip" data-i="Safari / adventure travel">Safari / adventure travel</button><button className="chip" data-i="Ski & mountain">Ski & mountain</button></div><div className="grp">Retail & collecting</div><div className="chips" data-layer="intent"><button className="chip" data-i="Fine jewelry & watches">Fine jewelry & watches</button><button className="chip" data-i="Luxury fashion">Luxury fashion</button><button className="chip" data-i="Fine art">Fine art</button><button className="chip" data-i="Wine & spirits">Wine & spirits</button><button className="chip" data-i="Collectibles & auctions">Collectibles & auctions</button><button className="chip" data-i="Home furnishings">Home furnishings</button></div><div className="grp">Health & personal</div><div className="chips" data-layer="intent"><button className="chip" data-i="Health & longevity">Health & longevity</button><button className="chip" data-i="Concierge medicine">Concierge medicine</button><button className="chip" data-i="Cosmetic / aesthetic procedures">Cosmetic / aesthetic procedures</button><button className="chip" data-i="Fitness & wellness retreats">Fitness & wellness retreats</button><button className="chip" data-i="Mental health & coaching">Mental health & coaching</button></div><div className="grp">Family & giving</div><div className="chips" data-layer="intent"><button className="chip" data-i="Private schools & tutoring">Private schools & tutoring</button><button className="chip" data-i="College planning">College planning</button><button className="chip" data-i="Philanthropy">Philanthropy</button><button className="chip" data-i="Family office services">Family office services</button></div><div className="grp">Business</div><div className="chips" data-layer="intent"><button className="chip" data-i="Business services & consulting">Business services & consulting</button><button className="chip" data-i="Commercial real estate">Commercial real estate</button><button className="chip" data-i="M&A / exit planning">M&A / exit planning</button><button className="chip" data-i="Executive education">Executive education</button></div>
                <div className="field"><label htmlFor="intentOther">Your vertical, if it isn't listed</label><input id="intentOther" placeholder="e.g. equestrian; concierge medicine; custom home builders" /></div>
              </div>
            </div>
            <div className="step">
              <div className="n">05 / 05</div>
              <div>
                <h2>Where to send the <em>brief.</em></h2>
                <p className="hint">We'll email you the written brief. A strategist follows up with the actual household, individual, and device counts.</p>
                <div className="two">
                  <div className="field" id="fName"><label htmlFor="firstName">First name</label><input id="firstName" autocomplete="given-name" /><div className="err">Enter your first name</div></div>
                  <div className="field"><label htmlFor="lastName">Last name</label><input id="lastName" autocomplete="family-name" /></div>
                  <div className="field" id="fEmail"><label htmlFor="email">Work email</label><input id="email" type="email" autocomplete="email" /><div className="err">Enter a valid email</div></div>
                  <div className="field"><label htmlFor="company">Company</label><input id="company" autocomplete="organization" /></div>
                  <div className="field"><label htmlFor="budget">Monthly media budget (optional)</label><input id="budget" placeholder="e.g. $25,000" /></div>
                </div>
                <div className="field"><label htmlFor="notes">Anything else about your buyer</label><textarea id="notes" placeholder="What you sell, average order value, current channels, what has worked and what has not." /></div>
                <div className="actions">
                  <button className="btn solid" id="submit">Send my brief</button>
                  <span className="note">You'll get a downloadable copy immediately. No spam, no list. One strategist, one reply.</span>
                </div>
              </div>
            </div>
          </div>

          <aside className="panel" id="panel">
            <div className="pl"><span>Your brief</span><span id="pstep">0 / 4 layers</span></div>
            <svg id="pd" viewBox="0 0 300 200" aria-label="146 dots, each representing 100,000 liquid-millionaire households; wealth tiers not selected are dimmed"></svg>
            <div className="big"><span id="est">14.6M</span><small>Starting universe — households <i>(Spectrem Group)</i></small></div>
            <div className="brief" id="briefLive"></div>
            <p className="note" style={{marginTop:14}}>The final count is pulled from our data partners after a strategist reviews your criteria. We don't show a modeled estimate on-page because we'd rather give you a real number.</p>
          </aside>
        </div>

        <div className="done" id="done">
          <div className="sent">Brief sent to <span id="sentTo"></span></div>
          <div className="doc" id="doc">
            <div className="h"><div><b>Stillwater Media</b>Audience brief</div><div style={{textAlign:"right"}}><b id="docDate"></b>Ref <span id="docRef"></span></div></div>
            <h3>Audience brief for <em id="docCo"></em></h3>
            <div className="est"><div id="docEst">—<small>Starting universe (households)</small></div><div id="docLayers">—<small>Layers applied</small></div><div>Pending<small>Final count — strategist review</small></div></div>
            <div className="sec"><div className="k">Prepared for</div><div className="v" id="docWho"></div></div>
            <div className="sec"><div className="k">Layer 1 — Demographic</div><div className="v" id="docDemo"></div></div>
            <div className="sec"><div className="k">Layer 2 — Geographic</div><div className="v" id="docGeo"></div></div>
            <div className="sec"><div className="k">Layer 3 — Purchase signals</div><div className="v" id="docBuy"></div></div>
            <div className="sec"><div className="k">Layer 4 — Intent</div><div className="v" id="docIntent"></div></div>
            <div className="sec"><div className="k">Notes</div><div className="v" id="docNotes"></div></div>
            <div className="sec"><div className="k">Next step</div><div className="v">A Stillwater strategist will run this audience against live partner data and reply within one business day with the actual household, individual, and device counts, recommended channels (CTV, streaming audio, display, native), and a frequency plan.</div></div>
            <p className="foot">Starting universe: US households with $1M+ net worth excluding primary residence, by tier — $1M–$5M: 12.55M; $5M–$25M: 1.8M; $25M+: 252K (Spectrem Group Market Insights 2022). Total US millionaires incl. primary residence: 23.6M (UBS Global Wealth Report 2026). Final audience counts come from Stillwater Media data partners. All browsing signals are anonymized and hashed.</p>
          </div>
          <div className="actions noprint">
            <button className="btn" id="print">Download PDF</button>
            <button className="btn" id="again">Build another</button>
          </div>
        </div>
      </div>
    </div>
  );
}
