const nav=document.querySelector('.nav'); addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30));
// Keep the mobile navigation consistent across every page, not only the home page.
if(nav && !nav.querySelector('.menu-btn')){
  nav.insertAdjacentHTML('beforeend','<button class="menu-btn" aria-label="Open menu"><span></span><span></span><span></span></button><div class="mobile-menu"><a href="riemann-1.0.html">Riemann-1.0</a><a href="company.html">Company</a><a href="news.html">News</a><a href="careers.html">Careers</a></div>');
}
const menuButton=document.querySelector('.menu-btn'); if(menuButton)menuButton.addEventListener('click',()=>document.querySelector('.mobile-menu').classList.toggle('open'));
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.mobile-menu').classList.remove('open')));
document.querySelectorAll('.media-hero video').forEach(v=>{const play=()=>v.play().catch(()=>{}),stop=()=>{v.pause();v.currentTime=0};v.addEventListener('mouseenter',play);v.addEventListener('mouseleave',stop);const io=new IntersectionObserver(e=>e[0].isIntersecting?play():v.pause(),{threshold:.35});io.observe(v)});
// Hero videos are visual backgrounds: never expose transport controls.
document.querySelectorAll('.rm-hero video,.home-hero video,.company-hero video,.news-hero video,.careers-hero video').forEach(v=>{
  v.controls=false;
  v.removeAttribute('controls');
  v.setAttribute('playsinline','');
});
// Content videos remain directly usable on mobile with native playback controls.
if(matchMedia('(max-width:760px)').matches) document.querySelectorAll('video').forEach(v=>{
  if(v.closest('.rm-hero,.home-hero,.company-hero,.news-hero,.careers-hero')) return;
  v.controls=true;
  v.setAttribute('playsinline','');
});
document.querySelectorAll('.desktop-nav a').forEach(a=>{const m={'Riemann-1.0':'riemann-1.0.html','Company':'company.html','News':'news.html','Careers':'careers.html'};if(m[a.textContent.trim()])a.href=m[a.textContent.trim()]});
const currentPage=(location.pathname.split('/').pop()||'index.html').toLowerCase();
document.querySelectorAll('.desktop-nav a').forEach(a=>{const href=(a.getAttribute('href')||'').split('#')[0].toLowerCase();const active=(currentPage==='news-blogs.html'?href==='news.html':href===currentPage);a.classList.toggle('active',active)});
document.querySelectorAll('.mobile-menu a').forEach(a=>{const m={'Riemann-1.0':'riemann-1.0.html','Company':'company.html','News':'news.html','Careers':'careers.html'};if(m[a.textContent.trim()])a.href=m[a.textContent.trim()]});
document.querySelectorAll('.mobile-menu a').forEach(a=>{const href=(a.getAttribute('href')||'').split('#')[0].toLowerCase();const active=(currentPage==='news-blogs.html'?href==='news.html':href===currentPage);a.classList.toggle('active',active)});
const footerMarkup='<div class="footer-brand"><img src="public/assets/公司logo/Group 2-2.png" alt="Riemann Dynamics"><h3>Keep up with us</h3><p>Get news, photos, events, and business updates.</p><div class="social"><img src="public/assets/home/微信logo.png" alt="WeChat"><img src="public/assets/home/小红书logo.png" alt="Xiaohongshu"><img src="public/assets/home/inslogo.png" alt="Instagram"><img src="public/assets/home/Xlogo.png" alt="X"></div></div><div class="footer-links"><div><b>Technology</b><a href="riemann-1.0.html">Riemann-1.0</a><a href="#">Matrix-game 3.5</a></div><div><b>Company</b><a href="company.html">Company</a><a href="news.html">News</a><a href="careers.html">Careers</a></div><div><b>Resources</b><a href="https://github.com">GitHub</a></div><div><b>Contact</b><a href="mailto:research@riemanndynamics.ai">Research Inquiries<br>research@riemanndynamics.ai</a><a href="mailto:hr@riemanndynamics.ai">Careers &amp; HR<br>hr@riemanndynamics.ai</a><a href="mailto:support@riemanndynamics.ai">Support<br>support@riemanndynamics.ai</a></div></div><small>© Beijing Riemann Dynamics Robotics Technology Co., Ltd.</small>';
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
  const overview=document.querySelector('.rm-overview'); if(overview){overview.id='overview'; const e=overview.querySelector('.eyebrow'); if(e){e.textContent='From embodied experience to executable robot control.';e.classList.add('rm-overview-eyebrow')} const cards=overview.querySelectorAll('.rm-fold-cards article'); const texts=[['Fully causal autoregressive WAM','Jointly model embodiment-specific actions, multi-view observations, and robot states in the order used by real robot control.'],['Progressive embodied pretraining','Progressively acquire embodied knowledge through three stages: unlabeled egocentric video learning, mixed action–trajectory supervision, and robot-specific policy enhancement.'],['Unified Robot Policy and World Simulator','Use one causal action-video model for both executable action prediction and action-conditioned future video generation.']]; cards.forEach((a,i)=>{if(texts[i]){a.querySelector('h3').textContent=texts[i][0];a.querySelector('p').textContent=texts[i][1]}});}
  const about=document.querySelector('.rm-about'); if(about){const h=about.querySelector('h2');if(h)h.textContent='About Riemann Dynamics';addDemoTabs(about,'about');}
  const dataEy=document.querySelector('.rm-data .eyebrow');if(dataEy)dataEy.textContent='Data Infra';
  const archEy=document.querySelector('.rm-architecture .eyebrow');if(archEy)archEy.textContent='Causal video-action architecture';
  const infEy=document.querySelector('.rm-inference .eyebrow');if(infEy)infEy.textContent='Inference';
  const stageTexts=[['Stage 1 · LAM-Action Bootstrap','Frozen LAM pseudo actions supervise unlabeled egocentric video while visual dynamics dominate the objective with λ=0.1.'],['Stage 2 · Trajectory-Grounded Alignment','3D-hand human data, UMI demonstrations, and robot trajectories align real action spaces under balanced learning with λ=0.5.'],['Stage 3 · Robot-Policy Enhancement','High-quality robot-only trajectories sharpen state-conditioned executable control with policy-focused supervision at λ=0.9.']];document.querySelectorAll('.rm-stage-cards article').forEach((a,i)=>{if(stageTexts[i]){a.querySelector('h3').textContent=stageTexts[i][0];a.querySelector('p').textContent=stageTexts[i][1]}});
  const policy=document.querySelector('.rm-policy');if(policy){const ey=policy.querySelector('.eyebrow');if(ey){const title=document.createElement('h1');title.textContent='Unified Robot Simulator';title.className='policy-title';ey.replaceWith(title)}const intro=policy.querySelector('.policy-intro');if(intro)intro.className='policy-intro';}
  const bench=document.querySelector('.rm-benchmarks');if(bench)bench.id='benchmarks';
}
function addDemoTabs(section,name){let wrap=section.querySelector('.rm-demo-tabs');if(!wrap){wrap=document.createElement('div');wrap.className='rm-demo-tabs';wrap.innerHTML='<div class="rm-tab-list"><button class="active" type="button" data-video="desk_1080p_2x.mp4">Desk</button><button type="button" data-video="clothes_1080p_2x.mp4">Clothes</button><button type="button" data-video="cube-stacking_1080p_2x.mp4">Cube stacking</button><button type="button" data-video="kitchen_1080p_2x.mp4">Kitchen</button></div><video class="rm-demo-video" controls playsinline><source src="public/assets/riemann-1.0/横版视频demo/desk_1080p_2x.mp4" type="video/mp4"></video>';section.appendChild(wrap)}if(wrap.dataset.bound)return;wrap.dataset.bound='1';wrap.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{wrap.querySelectorAll('button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const v=wrap.querySelector('video');v.src='public/assets/riemann-1.0/横版视频demo/'+btn.dataset.video;v.load();v.play().catch(()=>{})}))}
