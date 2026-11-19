/* Buildless classroom viewer: works from file:// as well as GitHub Pages. */
(() => {
 'use strict';
 const $ = id => document.getElementById(id);
 const questions = window.CASP_QUESTIONS;
 const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let current = 0, evidenceIndex = 0, mode = 'guide', highlights = false, zoom = 100;
 const q = () => questions[current];
 const ev = () => q().evidence[evidenceIndex];
 const asset = () => window.CASP_EVIDENCE[ev().key];
 function nav() {
  $('questionNav').innerHTML = window.CASP_SECTIONS.map(section => `<div class="nav-group"><div class="nav-label">${section.id} · ${section.title}</div>${questions.filter(x=>x.section===section.id).map(x=>`<button class="nav-item" data-question="${x.id}" aria-current="${x.id===q().id?'step':'false'}" title="第 ${x.id} 題：${escape(x.short)}"><span class="num">${String(x.id).padStart(2,'0')}</span><span>${escape(x.short)}</span></button>`).join('')}</div>`).join('');
 }
 function renderQuestion() {
  const question = q();
  const section = window.CASP_SECTIONS.find(s=>s.id===question.section);
  nav();
  $('sectionLabel').textContent = `${section.id} · ${section.full}`;
  $('questionNumber').textContent = String(question.id).padStart(2,'0');
  $('topicLabel').textContent = question.topic;
  $('questionTitle').textContent = question.title;
  $('questionEnglish').textContent = question.english;
  $('prompt').textContent = question.prompt;
  $('plain').textContent = question.plain;
  $('considerContent').innerHTML = question.consider.map(item=>`<div class="consider-item"><p>${escape(item[0])}</p><p class="en" lang="en">${escape(item[1])}</p></div>`).join('');
  $('verdict').textContent = question.verdict;
  $('verdict').className = 'verdict ' + question.tone;
  $('coreTitle').textContent = question.coreTitle;
  $('coreContent').innerHTML = `<ul>${question.core.map(s=>`<li>${escape(s)}</li>`).join('')}</ul>`;
  $('deepContent').innerHTML = question.deep.map(item=>`<div class="deep-item"><h4>${escape(item[0])}</h4><p>${escape(item[1])}</p></div>`).join('');
  $('writingContent').textContent = question.writing;
  $('transferContent').textContent = question.transfer;
  document.querySelectorAll('.teaching-pane details').forEach(d=>d.open=false);
  $('previousButton').disabled = current===0;
  $('nextButton').textContent = current===questions.length-1?'查看評讀總結':'下一題';
  $('lessonProgress').textContent = `第 ${question.id} 題，共 11 題`;
  document.title = `第 ${question.id} 題 · ${question.short}｜CASP 教學示範`;
  renderMode();renderEvidence();
  $('announcement').textContent = `第 ${question.id} 題：${question.title}，${mode==='guide'?'引導觀察':'示範解析'}模式`;
 }
 function renderMode() {
  const isAnalysis = mode==='analysis';
  $('guideMode').setAttribute('aria-pressed',String(!isAnalysis));
  $('analysisMode').setAttribute('aria-pressed',String(isAnalysis));
  $('guideCard').hidden = isAnalysis;
  $('analysisContent').hidden = !isAnalysis;
 }
 function highlightMarkup(rectangles) {
  return rectangles.map(r=>`<span class="highlight" style="left:${r[0]}%;top:${r[1]}%;width:${r[2]}%;height:${r[3]}%"></span>`).join('');
 }
 function renderMarks() {
  $('highlightLayer').innerHTML = highlights?highlightMarkup(asset().rects):'';
  $('highlightButton').setAttribute('aria-pressed',String(highlights));
  $('highlightButton').textContent = highlights?'隱藏原文標示':'顯示原文標示';
 }
 function focusViewport() {
  const first = asset().rects[0];
  const port = $('pageViewport');
  if(!first){port.scrollTop=0;port.scrollLeft=0;return;}
  port.scrollTop=Math.max(0,first[1]/100*$('pageImage').clientHeight-50);
  port.scrollLeft=Math.max(0,first[0]/100*$('pageImage').clientWidth-20);
 }
 function renderEvidence() {
  const evidence = ev();
  $('evidenceTabs').innerHTML = q().evidence.map((item,i)=>`<button data-evidence="${i}" aria-pressed="${i===evidenceIndex}">${escape(item.label)}</button>`).join('');
  $('readingLocation').textContent = '張雪玲等（2023）· 護理雜誌';
  $('pageLabel').textContent = `期刊 p.${evidence.page+44} ／ PDF 第 ${evidence.page} 頁`;
  $('evidenceCaption').textContent = highlights?evidence.quote:'先閱讀原頁，找出能支持判斷的資訊。需要時可顯示標示，或切換其他證據位置。';
  $('pageImage').alt = `示範文獻原頁：期刊第 ${evidence.page+44} 頁。${highlights?evidence.quote:'請觀察與本題相關的段落或表圖。'}`;
  $('pageImage').onload = focusViewport;
  $('pageImage').src = window.CASP_PAGES[evidence.page].src;
  $('paper').style.width=zoom+'%';
  $('zoomLabel').textContent=zoom+'%';
  $('zoomOut').disabled=zoom<=100;
  $('zoomIn').disabled=zoom>=250;
  renderMarks();
  if($('pageImage').complete) requestAnimationFrame(focusViewport);
 }
 function setMode(next) {mode=next;highlights=next==='analysis';renderMode();renderEvidence();}
 function selectQuestion(id) {
  const index=questions.findIndex(x=>x.id===Number(id));
  if(index<0)return;
  current=index;evidenceIndex=0;zoom=100;highlights=mode==='analysis';renderQuestion();
  if(location.hash!==`#q${q().id}`)history.replaceState(null,'',`#q${q().id}`);
  if(window.innerWidth<850)$('lesson').scrollIntoView({behavior:'smooth'});
 }
 function showInfo(eyebrow,html) {$('dialogEyebrow').textContent=eyebrow;$('dialogContent').innerHTML=html;$('infoDialog').showModal();$('infoDialog').scrollTop=0;}
 function showCourse() {
  showInfo('45 分鐘 · 課堂導覽',`<h2>從熟悉的 PICO，走到有依據的判斷。</h2><p>第一節：全班用同一篇中文 RCT 練習閱讀路徑。第二節：四組各讀不同文獻，以紙本圈畫與手寫完成評讀。</p><div class="info-note"><strong>先回憶 1A Ask、2A Acquire</strong><br>臨床問題如何形成？檢索時用了哪些 PICO 關鍵概念？<br><small>此處暫以 1A／2A 指 Ask／Acquire，教師可依原課程調整。</small></div><table><thead><tr><th>時間</th><th>教學內容</th><th>操作建議</th></tr></thead><tbody><tr><td>0–5 分</td><td>回憶 Ask、Acquire</td><td>口頭提問，不展開完整複習</td></tr><tr><td>5–9 分</td><td>PICO 與 CASP 四部分</td><td>第 1 題，找出 P、I、C、O</td></tr><tr><td>9–25 分</td><td>第 2–6 題</td><td>深入隨機分派、ITT 與盲法</td></tr><tr><td>25–34 分</td><td>第 7–9 題</td><td>只挑一個效果示範，區分 β、SE、CI、p</td></tr><tr><td>34–40 分</td><td>第 10–11 題</td><td>以具體照護情境討論適用性與資源</td></tr><tr><td>40–45 分</td><td>總結與紙本任務</td><td>示範「判斷＋依據＋理由」</td></tr></tbody></table><h3>同一題的兩種教學節奏</h3><p><strong>引導觀察：</strong>隱藏標示與解析，先問學生證據在哪裡。<br><strong>示範解析：</strong>顯示證據及核心理由，依需要展開「深入說明」與「評讀表怎麼寫」。</p><p class="source-note">完整細節為教師備課保留；45 分鐘內不需逐段念完所有深入說明。</p>`);
 }
 function showSources() {
  showInfo('教材來源 · 版本說明',`<h2>原題有依據，解說有區分。</h2><h3>評讀工具</h3><p>英文原題依 <a href="assets/casp-rct-2024.pdf" target="_blank" rel="noopener">CASP RCT Checklist（2024）</a>。中文為教學翻譯，參照你提供的 <a href="assets/casp-rct-2020-zh.pdf" target="_blank" rel="noopener">2020 中文譯本</a>（翻譯：黃廷宇 MD；編輯：韓彥辰 MD）。非 CASP 官方中文版。</p><p>CASP 原工具採 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>。本教材對翻譯、版面及教學解析作了改編；改編文字以相同條款分享，不代表 CASP 認可本教材。</p><h3>示範研究</h3><p>張雪玲、黃曉令、鍾玉珠（2023）。混合式衛教對全膝關節置換術老年病人疼痛及關節角度之成效。<em>護理雜誌，70</em>（2），45–55。<a href="https://doi.org/10.6224/JN.202304_70(2).07" target="_blank" rel="noopener">DOI 與出版來源</a>。</p><p><a href="assets/study.pdf" target="_blank" rel="noopener">開啟完整研究 PDF</a>。網頁保留原始頁面；框選與閱讀線索為教學新增標示，未修改原文。</p><h3>判讀說明</h3><p>「是／否／無法判斷」需連同理由閱讀。「部分符合」「依情境而定」是教師摘要標籤，並非 CASP 新增選項。紙本單選時，請依整體考量並註明各子項限制；不將各題加總成研究品質分數。</p><p class="source-note">文獻及圖表權利屬原權利人；CASP 的授權不涵蓋研究全文。公開發布文獻檔案前須確認相應重用授權。</p>`);
 }
 function showSummary() {
  showInfo('評讀總結 · 第二節紙本實作',`<h2>從「我覺得」，走到「我的依據是」。</h2><table><thead><tr><th>優點</th><th>疑慮</th><th>未知／待釐清</th></tr></thead><tbody><tr><td>PICO 可辨識<br>電腦亂數產生組別<br>有樣本數規劃<br>多個時間點追蹤</td><td>依執行率排除分析<br>介入與資料收集者相同<br>表一部分數字不一致<br>未直接報告 CI</td><td>分派隱蔽操作細節<br>部分角色的盲法<br>完整安全與成本資料<br>長期與在地成效</td></tr></tbody></table><div class="info-note"><strong>教學結論</strong><br>本研究提供部分疼痛與伸膝角度改善的訊號，但仍須考慮分析排除、盲法及報告限制；不能僅憑顯著 p 值直接全面推廣。</div><h3>第二節：四組、四篇不同文獻</h3><p>各組閱讀自己分配到的文章，使用紙本 CASP 表。每組約 18–20 人，可再以 4–5 人為小隊找證據，再回大組核對。</p><ol><li>每人先讀、圈畫證據，再參與討論。</li><li>每題記錄：<strong>判斷＋頁碼／段落／表圖＋理由</strong>。</li><li>沒有交代時，指出缺少的資訊；不用猜測補齊。</li><li>每人以自己的文字手寫，並保留文獻圈畫；不以 AI 代作評讀。</li></ol><h3>書寫格式</h3><p>我的判斷：是／否／無法判斷。<br>我的依據：第＿＿頁，＿＿段／表＿＿／圖＿＿。<br>我的理由：原文顯示＿＿；仍缺少＿＿，因此＿＿。</p><p class="source-note">不同文章的報告完整程度不同。評量以證據定位與理由是否成立為主，不以「是」的數量比較組別。</p>`);
 }
 $('questionNav').addEventListener('click',e=>{const b=e.target.closest('[data-question]');if(b)selectQuestion(b.dataset.question);});
 $('evidenceTabs').addEventListener('click',e=>{const b=e.target.closest('[data-evidence]');if(b){evidenceIndex=Number(b.dataset.evidence);renderEvidence();}});
 $('guideMode').onclick=()=>setMode('guide');$('analysisMode').onclick=()=>setMode('analysis');$('revealButton').onclick=()=>setMode('analysis');
 $('highlightButton').onclick=()=>{highlights=!highlights;renderEvidence();};
 $('zoomIn').onclick=()=>{zoom=Math.min(250,zoom+25);renderEvidence();};$('zoomOut').onclick=()=>{zoom=Math.max(100,zoom-25);renderEvidence();};
 $('previousButton').onclick=()=>selectQuestion(q().id-1);$('nextButton').onclick=()=>current===questions.length-1?showSummary():selectQuestion(q().id+1);
 $('originalButton').onclick=()=>window.open(`assets/study.pdf#page=${ev().page}`,'_blank','noopener');
 $('courseButton').onclick=showCourse;$('sourcesButton').onclick=showSources;$('summaryButton').onclick=showSummary;
 $('closeDialog').onclick=()=>$('infoDialog').close();$('closeFocus').onclick=()=>$('focusDialog').close();
 $('projectButton').onclick=()=>{const active=document.documentElement.classList.toggle('projector');$('projectButton').setAttribute('aria-pressed',String(active));$('projectButton').textContent=active?'標準字級':'投影字級';};
 $('focusButton').onclick=()=>{
  const page=window.CASP_PAGES[ev().page];
  const rects=asset().rects;
  const box=rects.length?[Math.max(0,Math.min(...rects.map(r=>r[0]))-3),Math.max(0,Math.min(...rects.map(r=>r[1]))-3),Math.min(100,Math.max(...rects.map(r=>r[0]+r[2]))+3),Math.min(100,Math.max(...rects.map(r=>r[1]+r[3]))+3)]:[0,0,100,100];
  const width=box[2]-box[0],height=box[3]-box[1];
  $('focusTitle').textContent=`${ev().label} · ${highlights?'已顯示標示':'僅放大原文'}`;
  // Use a fixed-aspect crop of the same original page; no PDF text is recreated.
  const ratio=(height*page.height)/(width*page.width);
  const adjusted=rects.map(r=>[(r[0]-box[0])/width*100,(r[1]-box[1])/height*100,r[2]/width*100,r[3]/height*100]);
  $('focusContent').innerHTML=`<div class="focus-image-wrap" style="overflow:hidden;aspect-ratio:${1/ratio}"><img alt="${escape(ev().label)} 原文局部放大" src="${page.src}" style="position:absolute;width:${10000/width}%;max-width:none;left:${-box[0]/width*100}%;top:${-box[1]/height*100}%"><div class="highlight-layer">${highlights?highlightMarkup(adjusted):''}</div></div><p class="source-note">局部放大原始頁面；可回閱讀區查看上下文。</p>`;
  $('focusDialog').showModal();$('focusDialog').scrollTop=0;
 };
 for(const id of ['infoDialog','focusDialog'])$(id).addEventListener('click',e=>{if(e.target===$(id)){const r=$(id).getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$(id).close();}});
 document.addEventListener('keydown',e=>{if(e.altKey&&e.key==='ArrowRight'){e.preventDefault();if(current<10)selectQuestion(q().id+1);}if(e.altKey&&e.key==='ArrowLeft'){e.preventDefault();if(current>0)selectQuestion(q().id-1);}});
 window.addEventListener('hashchange',()=>{const match=location.hash.match(/^#q(\d+)$/);if(match)selectQuestion(match[1]);});
 const start=location.hash.match(/^#q(\d+)$/);selectQuestion(start?start[1]:1);
})();
