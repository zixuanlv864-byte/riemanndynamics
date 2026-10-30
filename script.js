const nav=document.querySelector('.nav'); addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30));
// Keep the mobile navigation consistent across every page, not only the home page.
if(nav && !nav.querySelector('.menu-btn')){
  nav.insertAdjacentHTML('beforeend','<button class="menu-btn" aria-label="Open menu"><span></span><span></span><span></span></button><div class="mobile-menu"><a href="riemann-1.0.html">Riemann-1.0</a><a href="company.html">Company</a><a href="news.html">News</a><a href="careers.html">Careers</a></div>');
}
const menuButton=document.querySelector('.menu-btn'); if(menuButton)menuButton.addEventListener('click',()=>document.querySelector('.mobile-menu').classList.toggle('open'));
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.mobile-menu').classList.remove('open')));
document.querySelectorAll('.media-hero video').forEach(v=>{const play=()=>v.play().catch(()=>{}),stop=()=>{v.pause();v.currentTime=0};v.addEventListener('mouseenter',play);v.addEventListener('mouseleave',stop);const io=new IntersectionObserver(e=>e[0].isIntersecting?play():v.pause(),{threshold:.35});io.observe(v)});
const backgroundVideoSelector='.rm-hero video,.home-hero video,.company-hero video,.news-hero video,.careers-hero video,.media-hero video';
// Hero videos are visual backgrounds: never expose transport controls.
document.querySelectorAll(backgroundVideoSelector).forEach(v=>{
  v.controls=false;
  v.removeAttribute('controls');
  v.setAttribute('playsinline','');
});
// Content videos are usable on every viewport with native transport controls.
document.querySelectorAll('video').forEach(v=>{
  if(v.matches(backgroundVideoSelector)||v.closest('.rm-hero,.home-hero,.company-hero,.news-hero,.careers-hero,.media-hero')) return;
  v.controls=true;
  v.setAttribute('playsinline','');
  if(matchMedia('(max-width:760px)').matches){
    let pressTimer=null,pressStart=0,fast=false;
    const toast=()=>{
      let t=document.querySelector('.video-toast');
      if(!t){t=document.createElement('div');t.className='video-toast';document.body.appendChild(t)}
      t.textContent='长按加速';t.classList.add('show');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove('show'),1400);
    };
    const start=()=>{pressStart=Date.now();toast();pressTimer=setTimeout(()=>{fast=true;v.playbackRate=2},420)};
    const end=()=>{clearTimeout(pressTimer);if(fast){v.playbackRate=1;fast=false}};
    v.addEventListener('pointerdown',start);v.addEventListener('pointerup',end);v.addEventListener('pointercancel',end);v.addEventListener('pointerleave',end);
    v.addEventListener('contextmenu',e=>e.preventDefault());
  }
});

// Make every image inspectable without changing its original source or layout.
const lightbox=document.createElement('div');
lightbox.className='image-lightbox';
lightbox.innerHTML='<button type="button" class="image-lightbox-close" aria-label="Close image preview">×</button><img alt="">';
document.body.appendChild(lightbox);
const lightboxImage=lightbox.querySelector('img');
const closeLightbox=()=>{lightbox.classList.remove('open');document.body.classList.remove('lightbox-open')};
lightbox.addEventListener('click',e=>{if(e.target===lightbox||e.target===lightbox.querySelector('.image-lightbox-close'))closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
document.querySelectorAll('img').forEach(img=>{
  // Linked images keep their navigation behavior. Standalone editorial and
  // technical images remain available in the image preview.
  if(img.closest('a')) return;
  img.classList.add('image-previewable');
  img.setAttribute('tabindex','0');
  const open=()=>{lightboxImage.src=img.currentSrc||img.src;lightboxImage.alt=img.alt||'Image preview';lightbox.classList.add('open');document.body.classList.add('lightbox-open')};
  img.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();open()});
  img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
});
document.querySelectorAll('.desktop-nav a').forEach(a=>{const m={'Riemann-1.0':'riemann-1.0.html','Company':'company.html','News':'news.html','Careers':'careers.html'};if(m[a.textContent.trim()])a.href=m[a.textContent.trim()]});
const currentPage=(location.pathname.split('/').pop()||'index.html').toLowerCase();
document.querySelectorAll('.desktop-nav a').forEach(a=>{const href=(a.getAttribute('href')||'').split('#')[0].toLowerCase();const active=(currentPage==='news-blogs.html'?href==='news.html':href===currentPage);a.classList.toggle('active',active)});
document.querySelectorAll('.mobile-menu a').forEach(a=>{const m={'Riemann-1.0':'riemann-1.0.html','Company':'company.html','News':'news.html','Careers':'careers.html'};if(m[a.textContent.trim()])a.href=m[a.textContent.trim()]});
document.querySelectorAll('.mobile-menu a').forEach(a=>{const href=(a.getAttribute('href')||'').split('#')[0].toLowerCase();const active=(currentPage==='news-blogs.html'?href==='news.html':href===currentPage);a.classList.toggle('active',active)});
const footerMarkup='<div class="footer-brand"><img src="public/assets/公司logo/Group 2-2.png" alt="Riemann Dynamics"><h3>Keep up with us</h3><p>Get news, photos, events, and business updates.</p><div class="social"><img src="public/assets/home/微信logo.png" alt="WeChat"><img src="public/assets/home/小红书logo.png" alt="Xiaohongshu"><img src="public/assets/home/inslogo.png" alt="Instagram"><img src="public/assets/home/Xlogo.png" alt="X"></div></div><div class="footer-links"><div><b>Technology</b><a href="riemann-1.0.html">Riemann-1.0</a><a href="company.html#milestones">Matrix-game 3.5</a></div><div><b>Company</b><a href="company.html">Company</a><a href="news.html">News</a><a href="careers.html">Careers</a></div><div><b>Resources</b><a href="https://github.com">GitHub</a></div><div><b>Contact</b><a href="mailto:research@riemanndynamics.ai">Research Inquiries<br>research@riemanndynamics.ai</a><a href="mailto:hr@riemanndynamics.ai">Careers &amp; HR<br>hr@riemanndynamics.ai</a><a href="mailto:support@riemanndynamics.ai">Support<br>support@riemanndynamics.ai</a></div></div><small>© Beijing Riemann Dynamics Robotics Technology Co., Ltd.</small>';
document.querySelectorAll('.company-footer,.careers-footer').forEach(f=>f.innerHTML=footerMarkup);
if(currentPage==='news.html'&&!document.querySelector('.news-footer')){const f=document.createElement('footer');f.className='news-footer';f.innerHTML=footerMarkup;document.body.appendChild(f)}
if(document.body.classList.contains('blog-page')){
  const replacements=[
    ['VLM teleoperation demonstrations','UMI teleoperation demonstrations'],
    ['predicts what its embodied experience will change.','predicts how its environment will change. A structured causal attention mechanism keeps the model from looking ahead at "future" information it isn\'t supposed to see yet — which matters once it\'s actually running on a robot in a closed loop.'],
    ['high-quality robot-trajectory data.','high-quality robot-only trajectories.'],
    ['RoboTwin 2.0 (94.3%)','RoboTwin2.0 (94.3%)'],
    ['it averages 85.0% success across household tasks — cube stacking, kitchen organization, desk organization, and clothes folding —','it averages 85.0% success (94.4% progress success rate) across four household tasks — cube stacking, kitchen organization, desk organization, and clothes folding —']
  ];
  document.querySelectorAll('.blog-content p').forEach(p=>{replacements.forEach(([a,b])=>{if(p.textContent.includes(a))p.textContent=p.textContent.replace(a,b)})});
}

if(document.body.classList.contains('rm-page')){
  const compressedHero=document.querySelector('.rm-hero video');
  if(compressedHero){
    const source=compressedHero.querySelector('source');
    if(source){source.src='public/assets/riemann-1.0/rm1-top.mp4';compressedHero.load();}
  }
  const navActive=document.querySelector('.desktop-nav a[href="riemann-1.0.html"]'); if(navActive)navActive.classList.add('active');
  const hero=document.querySelector('.rm-hero-copy'); if(hero&&!hero.querySelector('.rm-hero-actions'))hero.insertAdjacentHTML('beforeend','<div class="rm-hero-actions"><a class="rm-btn rm-btn-primary" href="#overview">Explore the work</a><a class="rm-btn" href="#benchmarks">View results</a></div>');
  const overview=document.querySelector('.rm-overview');if(overview)overview.id='overview';
  const about=document.querySelector('.rm-about');
  if(about){
    about.id='real-world';
    const inner=about.querySelector('.rm-about-inner');
    const h=about.querySelector('h2');
    const intro=about.querySelector('.about-intro');
    if(h){h.innerHTML='Complex tasks.<br><strong>Closed-loop control.</strong>';h.classList.add('rm-hierarchy-title')}
    if(intro)intro.textContent='Four task families evaluate precise manipulation, bimanual coordination, and multi-step execution in everyday environments.';
    if(inner&&!inner.querySelector('.rm-section-number'))inner.insertAdjacentHTML('afterbegin','<p class="eyebrow rm-section-number">02 · REAL-WORLD PERFORMANCE</p>');
  }
  const general=document.querySelector('.rm-general');
  if(general){
    general.id='generalization';
    const h=general.querySelector('h2');
    const copy=general.querySelector('.general-copy');
    if(h)h.innerHTML='Beyond trained tasks.<br><strong>Into unseen situations.</strong>';
    if(copy)copy.innerHTML='Held-out evaluations test <strong>compositional generalization</strong> with new task combinations and <strong>OOD zero-shot transfer</strong> with unseen objects—without additional demonstrations.';
    if(h&&!general.querySelector('.rm-section-number'))h.insertAdjacentHTML('beforebegin','<p class="eyebrow rm-section-number">03 · GENERALIZATION</p>');
  }
  const bench=document.querySelector('.rm-benchmarks');
  if(bench){
    bench.id='benchmarks';
    const h=bench.querySelector('h2');
    const copy=bench.querySelector(':scope>p');
    if(h)h.innerHTML='Dual-SOTA performance,<br><strong>measured across three suites.</strong>';
    if(copy)copy.innerHTML='Riemann-1.0 reaches <strong>99.0%</strong> average success on LIBERO, <strong>94.3%</strong> on RoboTwin2.0, and <strong>62.6%</strong> on RoboCasa365.';
    if(h&&!bench.querySelector('.rm-section-number'))h.insertAdjacentHTML('beforebegin','<p class="eyebrow rm-section-number">04 · SIMULATION BENCHMARKS</p>');
  }
  const data=document.querySelector('.rm-data');
  const dataEy=data?.querySelector('.eyebrow');
  if(data){
    data.id='data-model';
    const copy=data.querySelector('.rm-data-copy>p:last-child');
    if(copy)copy.textContent='Hierarchical segmentation, action annotation, quality filtering, 3D hand reconstruction, and scene-skill balancing convert heterogeneous data into action-level supervision. Human video supplies broad interaction priors; UMI, exoskeleton, and robot trajectories ground them in executable control.';
    if(dataEy){dataEy.textContent='05 · DATA ENGINE';dataEy.insertAdjacentHTML('afterend','<h2><strong>232K+ hours</strong> of embodied experience.</h2>')}
  }
  const arch=document.querySelector('.rm-architecture');
  const archEy=arch?.querySelector('.eyebrow');
  if(arch){
    const copy=arch.querySelector('.architecture-copy');
    if(copy)copy.textContent='A unified autoregressive factorization preserves the order of interaction across visual latents and actions. Structured causal visibility prevents future-observation leakage while retaining teacher-forced training.';
    if(archEy){archEy.textContent='06 · TRAINING';archEy.insertAdjacentHTML('afterend','<h2>Causal by design.<br><strong>Progressive by stage.</strong></h2>')}
  }
  const inf=document.querySelector('.rm-inference');
  const infEy=inf?.querySelector('.eyebrow');
  if(inf){
    inf.id='inference';
    const copy=inf.querySelector('.inference-copy');
    if(copy)copy.textContent='Riemann-1.0 predicts the next action chunk from a growing visual-state cache. Real observations return to context after execution, creating a continuous closed loop.';
    if(infEy){infEy.textContent='07 · INFERENCE';infEy.insertAdjacentHTML('afterend','<h2>Observe. Predict. Act.<br><strong>Repeat.</strong></h2>')}
  }
  const stageTexts=[['Stage 1 · LAM-Action Bootstrap','Frozen LAM pseudo actions supervise unlabeled egocentric video while visual dynamics dominate the objective with λ=0.1.'],['Stage 2 · Trajectory-Grounded Alignment','3D-hand human data, UMI demonstrations, and robot trajectories align real action spaces under balanced learning with λ=0.5.'],['Stage 3 · Robot-Policy Enhancement','High-quality robot-only trajectories sharpen state-conditioned executable control with policy-focused supervision at λ=0.9.']];document.querySelectorAll('.rm-stage-cards article').forEach((a,i)=>{if(stageTexts[i]){a.querySelector('h3').textContent=stageTexts[i][0];a.querySelector('p').textContent=stageTexts[i][1]}});
  const policy=document.querySelector('.rm-policy');
  if(policy){
    const ey=policy.querySelector('.eyebrow');
    if(ey){ey.textContent='08 · TWO MODES';ey.insertAdjacentHTML('afterend','<h2 class="policy-title">One model. Two inference modes.</h2>')}
    const intro=policy.querySelector('.policy-intro');
    if(intro)intro.innerHTML='<strong>Robot Policy</strong> converts observed history into executable actions. <strong>World Simulator</strong> predicts the visual consequences of an action trajectory for rollout inspection and plan comparison.';
  }
}
// Only attach the video and poster for the active language. This prevents the
// Chinese and English demo files from downloading together.
const localizedDemoVideos=document.querySelectorAll('.rm-localized-demo');
const localizedDemoObserver='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  entry.target._loadLocalizedDemo?.();
  localizedDemoObserver.unobserve(entry.target);
}),{rootMargin:'500px 0px',threshold:.01}):null;
localizedDemoVideos.forEach(video=>{
  const language=document.documentElement.dataset.lang==='zh'?'zh':'en';
  const source=video.dataset[`video${language==='zh'?'Zh':'En'}`];
  const poster=video.dataset[`poster${language==='zh'?'Zh':'En'}`];
  if(poster)video.poster=poster;
  const load=()=>{
    if(!source||video.getAttribute('src')===source)return;
    video.src=source;
    video.load();
  };
  video._loadLocalizedDemo=load;
  video.addEventListener('pointerdown',load,{once:true});
  if(localizedDemoObserver)localizedDemoObserver.observe(video);else load();
});
const existingDemoVideos=document.querySelectorAll('.rm-card-demo');
const existingDemoObserver='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  entry.target._loadCardDemo?.();
  existingDemoObserver.unobserve(entry.target);
}),{rootMargin:'500px 0px',threshold:.01}):null;
existingDemoVideos.forEach(video=>{
  const source=video.dataset.video;
  const load=()=>{
    if(!source||video.getAttribute('src')===source)return;
    video.src=source;
    video.load();
  };
  video._loadCardDemo=load;
  video.addEventListener('pointerdown',load,{once:true});
  if(existingDemoObserver)existingDemoObserver.observe(video);else load();
});

// Demo cards open as a focused, enlarged player while the page behind them is
// softened. The modal resolves the active localized source at click time, so a
// Chinese card can never open the English asset (or vice versa).
const demoCards=document.querySelectorAll('.rm-capability-demo-card');
if(demoCards.length){
  const demoModal=document.createElement('div');
  demoModal.className='demo-card-modal';
  demoModal.setAttribute('aria-hidden','true');
  demoModal.innerHTML='<div class="demo-card-modal-dialog" role="dialog" aria-modal="true" aria-label="Demo video"><button class="demo-card-modal-close" type="button" aria-label="Close demo">×</button><video controls playsinline preload="metadata"></video><div class="demo-card-modal-copy"></div></div>';
  document.body.appendChild(demoModal);
  const dialog=demoModal.querySelector('.demo-card-modal-dialog');
  const modalVideo=demoModal.querySelector('video');
  const modalCopy=demoModal.querySelector('.demo-card-modal-copy');
  const closeButton=demoModal.querySelector('.demo-card-modal-close');
  const closeDemo=()=>{
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
    demoModal.classList.remove('open');
    demoModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('demo-modal-open');
  };
  const openDemo=card=>{
    const sourceVideo=card.querySelector('video');
    const language=document.documentElement.dataset.lang==='zh'?'zh':'en';
    const localizedSource=sourceVideo?.dataset[`video${language==='zh'?'Zh':'En'}`];
    const localizedPoster=sourceVideo?.dataset[`poster${language==='zh'?'Zh':'En'}`];
    const source=sourceVideo?.getAttribute('src')||sourceVideo?.dataset.video||localizedSource;
    const poster=sourceVideo?.getAttribute('poster')||localizedPoster;
    const copy=card.querySelector('.rm-capability-demo-copy');
    if(!source||!copy)return;
    modalVideo.src=source;
    if(poster)modalVideo.poster=poster;else modalVideo.removeAttribute('poster');
    modalCopy.innerHTML=copy.innerHTML;
    modalVideo.load();
    demoModal.classList.add('open');
    demoModal.setAttribute('aria-hidden','false');
    document.body.classList.add('demo-modal-open');
    closeButton.focus({preventScroll:true});
  };
  demoCards.forEach(card=>{
    card.tabIndex=0;
    card.setAttribute('role','button');
    card.setAttribute('aria-haspopup','dialog');
    const cardVideo=card.querySelector('video');
    if(cardVideo){cardVideo.controls=true;cardVideo.setAttribute('controls','')}
    card.addEventListener('click',event=>{
      if(event.target.closest('a,button,video'))return;
      event.preventDefault();
      openDemo(card);
    });
    card.addEventListener('keydown',event=>{
      if(event.key!=='Enter'&&event.key!==' ')return;
      event.preventDefault();
      openDemo(card);
    });
  });
  closeButton.addEventListener('click',closeDemo);
  demoModal.addEventListener('click',event=>{if(event.target===demoModal)closeDemo()});
  dialog.addEventListener('click',event=>event.stopPropagation());
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&demoModal.classList.contains('open'))closeDemo()});
}

// Translate after page-specific content and shared footers have been created.
// The language control reloads the current URL, preserving the current page
// and hash while keeping a single maintainable DOM for both languages.
if(window.applyI18n)window.applyI18n();

// Shared, one-time reveal system. Content is visible by default and only enters
// the hidden start state after the observer is ready, so a script failure never
// makes copy or controls inaccessible.
const motionReduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
const revealGroups=[
  ['.hero-overlay>*',40],
  ['.rm-hero-copy>*',40],
  ['.about-cards>.about-card',70],
  ['.company-pillars>article,.company-applications>article',70],
  ['.careers-reasons>article',70],
  ['.rm-fold-cards>article',70],
  ['.rm-task-cards>article',70],
  ['.rm-capability-demo-grid>article',80],
  ['.rm-general-grid>article',50],
  ['.benchmark-grid>article',70],
  ['.roles>.role-group',60]
];
revealGroups.forEach(([selector,step])=>document.querySelectorAll(selector).forEach((element,index)=>{
  element.classList.add('site-reveal');
  element.style.setProperty('--reveal-delay',`${Math.min(index*step,260)}ms`);
}));
document.querySelectorAll('main section>h2,main section>.eyebrow,.company-section-heading>*,.careers-section-heading>*').forEach((element,index)=>{
  element.classList.add('site-reveal');
  element.style.setProperty('--reveal-delay',`${index%2?45:0}ms`);
});

// Give every standalone copy block a quick entrance. Cards already enter as a
// unit, so their internal text is deliberately excluded to avoid double motion.
const textRevealGroups=[
  '.hero-overlay>*,.rm-hero-copy>*',
  '.about-heading>*,.resource-copy>*',
  '.company-origin>.eyebrow,.company-origin>h2,.company-origin>.company-lead,.company-origin>.company-lineage',
  '.company-section-heading>*,.company-capability-copy>*,.company-applications>.eyebrow,.company-applications>h2,.company-delivery,.milestones>.eyebrow,.milestones>.timeline',
  '.careers-mission>*,.careers-section-heading>*',
  '.news>.eyebrow,.news>h2',
  '.rm-section-heading>*,.rm-subsection-heading>*,.rm-overview>.overview-copy',
  '.rm-about-inner>h2,.rm-about-inner>.about-intro',
  '.rm-capability-demos-heading>*',
  '.rm-general>h2,.rm-general>.general-copy,.rm-general>.rm-metrics',
  '.rm-benchmarks>h2,.rm-benchmarks>p',
  '.rm-data-copy>*,.rm-architecture>.eyebrow,.rm-architecture>.architecture-copy,.rm-inference>.eyebrow,.rm-inference>.inference-copy',
  '.rm-policy>.eyebrow,.rm-policy>.policy-intro,.rm-policy>.policy-mode'
];
textRevealGroups.forEach(selector=>document.querySelectorAll(selector).forEach((element,index)=>{
  element.classList.add('site-reveal','text-reveal');
  element.style.setProperty('--reveal-delay',`${Math.min(index*35,105)}ms`);
}));
document.querySelectorAll('.rm-overview-visual,.rm-tech-visual,.company-visual,.news-card,.blog-image').forEach(element=>element.classList.add(element.matches('.rm-overview-visual,.rm-tech-visual')?'image-reveal':'site-reveal'));
if(!motionReduced&&'IntersectionObserver' in window){
  const revealElements=document.querySelectorAll('.site-reveal,.image-reveal');
  try{
    const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      entry.target.classList.add('is-revealed');
      revealObserver.unobserve(entry.target);
    }),{threshold:.08,rootMargin:'0px 0px -2%'});
    revealElements.forEach(element=>revealObserver.observe(element));
    // Only enable hidden start states after every target has an observer. This
    // preserves readable content if observer setup ever fails.
    document.documentElement.classList.add('motion-ready');
  }catch(error){
    revealElements.forEach(element=>element.classList.add('is-revealed'));
  }
}else{
  document.querySelectorAll('.site-reveal,.image-reveal').forEach(element=>element.classList.add('is-revealed'));
}

// The identity group has a short, coordinated entrance: background, wordmark,
// robot, then the five fixed-value cards in reading order.
const identity=document.querySelector('.rm-identity');
if(identity){
  const revealIdentity=()=>identity.classList.add('identity-visible');
  if(motionReduced)revealIdentity();
  else{
    const identityObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){revealIdentity();identityObserver.disconnect()}}),{threshold:.25});
    identityObserver.observe(identity);
  }
}

// Restore the restrained pointer response for the two Company diagrams only.
// Text remains static; touch devices and reduced-motion users keep a fixed view.
const companyDiagramMotion=matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)');
if(companyDiagramMotion.matches){
  document.querySelectorAll('.company-page .company-visual').forEach(visual=>{
    visual.addEventListener('pointermove',event=>{
      const box=visual.getBoundingClientRect();
      const x=(event.clientX-box.left)/box.width;
      const y=(event.clientY-box.top)/box.height;
      visual.style.setProperty('--pointer-x',`${(x*100).toFixed(1)}%`);
      visual.style.setProperty('--pointer-y',`${(y*100).toFixed(1)}%`);
      visual.style.setProperty('--shift-x',`${((x-.5)*8).toFixed(1)}px`);
      visual.style.setProperty('--shift-y',`${((y-.5)*8).toFixed(1)}px`);
    });
    visual.addEventListener('pointerleave',()=>{
      visual.style.setProperty('--pointer-x','50%');
      visual.style.setProperty('--pointer-y','50%');
      visual.style.setProperty('--shift-x','0px');
      visual.style.setProperty('--shift-y','0px');
    });
  });
}

// Keep career disciplines compact on first load, then reveal their roles as a
// second level of the page hierarchy. Individual job descriptions stay closed
// until the visitor chooses a role.
document.querySelectorAll('.role-group-heading[aria-controls]').forEach(toggle=>{
  const list=document.getElementById(toggle.getAttribute('aria-controls'));
  if(!list)return;
  toggle.setAttribute('aria-expanded','false');
  list.hidden=true;
  list.querySelectorAll('details').forEach(role=>role.open=false);
  toggle.addEventListener('click',()=>{
    const expanded=toggle.getAttribute('aria-expanded')==='true';
    toggle.setAttribute('aria-expanded',String(!expanded));
    list.hidden=expanded;
    if(expanded)list.querySelectorAll('details').forEach(role=>role.open=false);
  });
});

// Reveal the three benchmark charts once, in reading order, when the results
// section enters the viewport.
const benchmarkSection=document.querySelector('.rm-benchmarks');
if(benchmarkSection){
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){
    benchmarkSection.classList.add('is-visible');
  }else{
    const benchmarkObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.classList.add('is-visible');
        benchmarkObserver.unobserve(entry.target);
      });
    },{threshold:.28});
    benchmarkObserver.observe(benchmarkSection);
  }
}

// Animate exact pixels from the supplied data-mixture artwork. The source image
// is split into center, inner-source sectors, and outer wedges; their union is
// therefore identical to the original PNG when the sequence completes.
const dataSection=document.querySelector('.rm-data');
if(dataSection){
  const svg=dataSection.querySelector('.rm-data-mixture');
  let humanSweepPath=null;
  let outerSweepPath=null;
  let sectorPath=null;
  if(svg){
    const ns='http://www.w3.org/2000/svg';
    const polar=(radius,angle)=>{const radians=(angle-90)*Math.PI/180;return[320+radius*Math.cos(radians),320+radius*Math.sin(radians)]};
    const sector=(inner,outer,start,end)=>{const [x1,y1]=polar(outer,start),[x2,y2]=polar(outer,end),[x3,y3]=polar(inner,end),[x4,y4]=polar(inner,start);const large=end-start>180?1:0;return`M ${x1} ${y1} A ${outer} ${outer} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${inner} ${inner} 0 ${large} 0 ${x4} ${y4} Z`};
    const make=(name,attrs={})=>{const node=document.createElementNS(ns,name);Object.entries(attrs).forEach(([key,value])=>node.setAttribute(key,value));return node};
    const defs=make('defs');
    defs.appendChild(make('image',{id:'rm-data-source',href:'public/assets/riemann-1.0/image 28.png',x:'0',y:'0',width:'640',height:'640'}));
    svg.appendChild(defs);
    let clipIndex=0;
    const addPiece=(className,shape,delay=0)=>{const id=`rm-data-clip-${clipIndex++}`;const clip=make('clipPath',{id,clipPathUnits:'userSpaceOnUse'});clip.appendChild(shape);defs.appendChild(clip);const piece=make('use',{href:'#rm-data-source',class:`data-image-piece ${className}`,'clip-path':`url(#${id})`});piece.style.setProperty('--delay',`${delay.toFixed(3)}s`);svg.appendChild(piece)};
    const addSweep=(className,inner,outer,start)=>{const id=`rm-data-clip-${clipIndex++}`;const clip=make('clipPath',{id,clipPathUnits:'userSpaceOnUse'});const path=make('path',{d:sector(inner,outer,start,start+.01)});clip.appendChild(path);defs.appendChild(clip);svg.appendChild(make('use',{href:'#rm-data-source',class:`data-image-piece ${className}`,'clip-path':`url(#${id})`}));return path};
    addPiece('data-core-piece',make('circle',{cx:'320',cy:'320',r:'91'}));
    humanSweepPath=addSweep('data-human-sweep',91,181,0);
    addPiece('data-inner-piece',make('path',{d:sector(91,181,309.6,327.6)}),1.14);
    addPiece('data-inner-piece',make('path',{d:sector(91,181,327.6,360)}),1.28);
    outerSweepPath=addSweep('data-outer-sweep',181,321,0);
    sectorPath=sector;
  }
  const runSweep=(path,inner,outer,start,end,duration,delay)=>{if(!path||!sectorPath)return;const begin=performance.now()+delay;const frame=now=>{if(now<begin){requestAnimationFrame(frame);return}const progress=Math.min(1,(now-begin)/duration);const eased=1-Math.pow(1-progress,3);const angle=Math.min(start+(end-start)*eased,start+359.999);path.setAttribute('d',sectorPath(inner,outer,start,angle));if(progress<1)requestAnimationFrame(frame)};requestAnimationFrame(frame)};
  const playDataSequence=()=>{runSweep(humanSweepPath,91,181,0,309.6,620,180);runSweep(outerSweepPath,181,321,0,360,980,760)};
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){
    if(humanSweepPath)humanSweepPath.setAttribute('d',sectorPath(91,181,0,309.6));
    if(outerSweepPath)outerSweepPath.setAttribute('d',sectorPath(181,321,0,359.999));
    dataSection.classList.add('is-visible');
  }else{
    const dataObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.classList.add('is-visible');
        playDataSequence();
        dataObserver.unobserve(entry.target);
      });
    },{threshold:.32});
    dataObserver.observe(dataSection);
  }
}
