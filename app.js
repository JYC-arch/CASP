/* Buildless classroom viewer: works from file:// as well as GitHub Pages. */
(() => {
 'use strict';
 const $ = id => document.getElementById(id);
 const questions = window.CASP_QUESTIONS;
 const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let current = 0, evidenceIndex = 0, mode = 'guide', highlights = false, zoom = 100, answerShown = false, introActive = false, summaryActive = false;
 const q = () => questions[current];
 const palette = id => window.CASP_PALETTE[id-1];
 const ev = () => q().evidence[evidenceIndex];
 const asset = () => window.CASP_EVIDENCE[ev().key];
 function nav() {
  $('questionNav').innerHTML = window.CASP_SECTIONS.map(section => `<div class="nav-group"><div class="nav-label">${section.id} · ${section.title}</div>${questions.filter(x=>x.section===section.id).map(x=>`<button class="nav-item" data-question="${x.id}" style="--item-color:${palette(x.id).color}" aria-current="${!introActive&&!summaryActive&&x.id===q().id?'step':'false'}" title="第 ${x.id} 題：${escape(x.short)}"><span class="num">${String(x.id).padStart(2,'0')}</span><span>${escape(x.short)}</span></button>`).join('')}</div>`).join('');
 }
 function renderQuestion() {
  answerShown = false;
  const question = q();
  const color = palette(question.id);
  document.documentElement.style.setProperty('--question-accent',color.color);
  document.documentElement.style.setProperty('--question-soft',color.soft);
  document.documentElement.style.setProperty('--mark-fill',color.mark);
  const section = window.CASP_SECTIONS.find(s=>s.id===question.section);
  nav();
  $('sectionLabel').textContent = `${section.id} · ${section.full}`;
  $('questionNumber').textContent = String(question.id).padStart(2,'0');
  $('topicLabel').textContent = question.topic;
  $('questionTitle').textContent = question.title;
  $('questionEnglish').textContent = question.english;
  $('considerLabel').textContent=question.id===4?'CASP 分項原題':'CASP 考量點';
  const sourcePages=question.considerPages.join('–');
  $('considerContent').innerHTML = question.consider.map((item,i)=>`<div class="consider-item"><h4>${question.id===4?'分項':'考量點'} ${i+1}</h4><p>${escape(item[0])}</p><p class="en" lang="en">${escape(item[1])}</p></div>`).join('')+`<p class="consider-source"><a href="assets/casp-rct-2024.pdf#page=${question.considerPages[0]}" target="_blank" rel="noopener">CASP 2024 英文原表，第 ${sourcePages} 頁</a></p>`;
  const answer = window.CASP_ANSWERS[question.id-1];
  $('resultQuestion').textContent = `第 ${question.id} 題｜${question.title}`;
  $('verdict').textContent = question.id===4?`整體判讀：${answer.answer}`:answer.answer;
  $('verdict').className = 'verdict ' + (answer.answer==='是'?'yes':answer.answer==='否'?'no':'uncertain');
  $('answerOptions').hidden = question.id===4;
  $('answerOptions').innerHTML = ['是','否','無法判斷'].map(option=>`<span class="answer-option ${option===answer.answer?'selected':''}"${option===answer.answer?' aria-current="true"':''}>${option===answer.answer?'☑':'☐'} ${option}</span>`).join('');
  $('subAnswers').innerHTML = question.id===4?`<p class="sub-answer-title">分項判讀</p>${question.sourceSections.map(item=>`<div><span>${escape(item.id)}｜${escape(item.title)}</span><strong>${escape(item.answer)}</strong></div>`).join('')}`:'';
  $('glossaryBlock').hidden = !question.glossary.length;
  const terms=question.glossary.map(item=>`<div class="deep-item"><h4>${escape(item[0])}</h4>${item[1].split('\n\n').map(paragraph=>`<p>${escape(paragraph)}</p>`).join('')}</div>`).join('');
  const comparison=question.glossaryComparison;
  const comparisonTable=comparison?`<div class="term-comparison"><h4>${escape(comparison.title)}</h4><table><thead><tr>${comparison.columns.map(label=>`<th scope="col">${escape(label)}</th>`).join('')}</tr></thead><tbody>${comparison.rows.map(row=>`<tr>${row.map((value,i)=>i===0?`<th scope="row">${escape(value)}</th>`:`<td>${escape(value)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'';
  $('deepContent').innerHTML = terms+comparisonTable+(question.glossarySources?`<p class="glossary-source">${escape(question.glossarySources)}</p>`:'');
  $('sourceAppraisal').innerHTML=question.sourceSections.map(item=>`<section>${question.id===4?`<h4>${escape(item.id)}｜${escape(item.title)}</h4>`:''}${item.responses.map(response=>`<div class="consider-response" data-consider-index="${response.considerIndex}">${question.id===4?'':`<div class="response-heading"><span>考量點 ${response.considerIndex+1}</span><h4>${escape(question.consider[response.considerIndex][0])}</h4></div>`}<ul class="appraisal-list">${response.points.map(point=>`<li><p class="appraisal-reason">${escape(point.text)}</p><div class="reason-links" aria-label="本點文獻位置">${point.refs.map(key=>{const evidence=question.evidence.find(e=>e.key===key);return `<button class="evidence-link" data-evidence-key="${escape(key)}">${escape(evidence.label)}${point.kind==='check'?'（查核範圍）':''}</button>`;}).join('')}</div></li>`).join('')}</ul></div>`).join('')}</section>`).join('');
  document.querySelectorAll('.teaching-pane details').forEach(d=>d.open=false);
  $('previousButton').disabled = false;
  $('previousButton').textContent = current===0?'評讀方式':'上一題';
  $('nextButton').textContent = current===questions.length-1?'評讀總結與證據等級':'下一題';
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
  renderResult();
 }
 function renderResult() {
  $('resultPanel').hidden = !answerShown;
  $('showResultButton').setAttribute('aria-expanded',String(answerShown));
  $('showResultButton').textContent=answerShown?'隱藏判讀結果':'顯示判讀結果';
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
  $('readingLocation').textContent = q().lookupPath;
  $('locationNote').textContent = q().lookupNote;
  $('locationNote').hidden = !q().lookupNote;
  $('pageLabel').textContent = `期刊 p.${evidence.page+44} ／ PDF 第 ${evidence.page} 頁`;
  $('evidenceCaption').textContent = evidence.label;
  $('pageImage').alt = `示範文獻原頁：${evidence.label}`;
  $('pageImage').onload = focusViewport;
  $('pageImage').src = window.CASP_PAGES[evidence.page].src;
  $('paper').style.width=zoom+'%';
  $('zoomLabel').textContent=zoom+'%';
  $('zoomOut').disabled=zoom<=100;
  $('zoomIn').disabled=zoom>=250;
  renderMarks();
  if($('pageImage').complete) requestAnimationFrame(focusViewport);
 }
 function setMode(next) {mode=next;highlights=next==='analysis';if(next==='guide')answerShown=false;renderMode();renderEvidence();$('announcement').textContent=`第 ${q().id} 題，${mode==='guide'?'引導觀察':'示範解析'}模式`;}
 function selectQuestion(id) {
  const index=questions.findIndex(x=>x.id===Number(id));
  if(index<0)return;
  introActive=false;summaryActive=false;$('summaryPage').hidden=true;$('summaryButton').setAttribute('aria-current','false');$('introPage').hidden=true;$('appraisalPage').hidden=false;$('mobileReference').hidden=false;$('introButton').setAttribute('aria-current','false');
  current=index;evidenceIndex=0;zoom=100;highlights=mode==='analysis';renderQuestion();
  if(location.hash!==`#q${q().id}`)history.replaceState(null,'',`#q${q().id}`);
  if(window.innerWidth<850)$('lesson').scrollIntoView({behavior:'smooth'});
  else window.scrollTo({top:0,behavior:'auto'});
 }
 function showIntroduction() {
  introActive=true;summaryActive=false;$('summaryPage').hidden=true;$('summaryButton').setAttribute('aria-current','false');answerShown=false;mode='guide';highlights=false;renderMode();
  $('introPage').hidden=false;$('appraisalPage').hidden=true;$('mobileReference').hidden=true;
  $('introButton').setAttribute('aria-current','page');nav();
  document.title='CASP 2024｜RCT 評讀方式';
  if(location.hash!=='#intro')history.replaceState(null,'','#intro');
  window.scrollTo({top:0,behavior:'auto'});
  $('announcement').textContent='CASP 2024 評讀方式與三項答案定義';
 }
 function showInfo(eyebrow,html) {$('dialogEyebrow').textContent=eyebrow;$('dialogContent').innerHTML=html;$('infoDialog').showModal();$('infoDialog').scrollTop=0;}
 function showSources() {
  showInfo('教材來源 · 版本說明',`<h2>工具版本與文獻來源</h2><h3>評讀工具</h3><p>英文原題依 <a href="assets/casp-rct-2024.pdf" target="_blank" rel="noopener">CASP RCT Checklist（2024）</a>。中文題目與評讀理由以《CASP RCT 2024 中文版評讀・混合式衛教 TKR》（Markdown，評讀日期 2026 年 11 月 19 日）為主，依教師確認的刪除原則與第 1 題精簡 PICO 調整；非 CASP 官方中文譯本。考量點依 CASP 2024 英文原表逐項呈現，中文為教學翻譯；第 4 題呈現原始三個分項題目。</p><p>CASP 原工具採 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>。本教材對翻譯、版面及教學解析作了改編；改編文字以相同條款分享，不代表 CASP 認可本教材。</p><h3>示範研究</h3><p>張雪玲、黃曉令、鍾玉珠（2023）。混合式衛教對全膝關節置換術老年病人疼痛及關節角度之成效。<em>護理雜誌，70</em>（2），45–55。<a href="https://doi.org/10.6224/JN.202304_70(2).07" target="_blank" rel="noopener">DOI 與出版來源</a>。</p><p><a href="assets/study.pdf" target="_blank" rel="noopener">開啟完整研究 PDF</a>。網頁保留原始頁面；各題另提供完整研究的標註 PDF，依本題顏色標示相關段落與表圖。</p><h3>文獻定位</h3><p>查找位置參照課堂資料《casp-華蘋》的「去原文哪裡找」欄，依本研究實際章節及頁碼標註；題目仍採 CASP 2024 架構。</p><h3>證據等級</h3><p>採用使用者提供的 Oxford CEBM 2011 中文版（台灣護理學會卓越中心知識轉譯組譯）。本次教學評讀的品質降級為評讀者判斷，並非依 CASP 題數換算。</p><h3>判讀說明</h3><p>各題結果依中文版評讀 Markdown；第 4 題整體判讀為「否」，並保留 4(a)、4(b)、4(c) 分項結果。「是／否／無法判斷」應連同理由與原文閱讀，不將各題加總成研究品質分數。</p><p class="source-note">文獻及圖表權利屬原權利人；CASP 的授權不涵蓋研究全文。公開發布文獻檔案前須確認相應重用授權。</p>`);
 }
 function showSummary() {
  const rows=questions.map((item,i)=>{
   const answer=window.CASP_ANSWERS[i];
   const overall=`<tr><td>第 ${item.id} 題｜${escape(item.title)}</td><td>${item.id===4?'整體：':''}${escape(answer.answer)}</td></tr>`;
   return overall+(item.id===4?item.sourceSections.map(part=>`<tr><td class="summary-subquestion">${escape(part.id)}｜${escape(part.title)}</td><td>${escape(part.answer)}</td></tr>`).join(''):'');
  }).join('');
  const level=window.CASP_EVIDENCE_LEVEL;
  const reasons=level.qualityReasons.map(item=>`<li>${escape(item.text)} <a href="${questions[item.question-1].annotatedPdf}#page=${item.page}" target="_blank" rel="noopener">${escape(item.label)}</a></li>`).join('');
  $('summaryContent').innerHTML=`<span class="eyebrow">CASP 2024 · OXFORD CEBM 2011</span><h2>評讀總結與證據等級</h2><section class="evidence-grade"><h3>證據等級判定</h3><dl class="grade-facts"><div><dt>問題類型</dt><dd>${escape(level.questionType)}</dd></div><div><dt>研究設計</dt><dd>${escape(level.design)}</dd></div><div><dt>依研究設計對照</dt><dd>證據等級 ${escape(level.designLevel)}</dd></div><div class="final-grade"><dt>${escape(level.judgmentLabel)}</dt><dd>證據等級 ${escape(level.appraisedLevel)}<small>依研究品質降一級</small></dd></div></dl><h4>品質調整的依據</h4><ul>${reasons}</ul><p>${escape(level.adjustment)}</p><p>${escape(level.precision)}</p><p class="grade-note">${escape(level.scoring)}</p><p class="source-note">來源：${escape(level.sourceLabel)} <a href="${level.sourcePdf}#page=1" target="_blank" rel="noopener">中文版分級表</a> · <a href="${level.sourcePdf}#page=2" target="_blank" rel="noopener">升降級註解</a></p></section><h3>各題參考判讀結果</h3><table class="appraisal-results"><thead><tr><th>評讀題目</th><th>判讀結果</th></tr></thead><tbody>${rows}</tbody></table>`;
  introActive=false;summaryActive=true;answerShown=false;renderResult();
  $('introPage').hidden=true;$('appraisalPage').hidden=true;$('summaryPage').hidden=false;$('mobileReference').hidden=true;
  $('introButton').setAttribute('aria-current','false');$('summaryButton').setAttribute('aria-current','page');nav();
  if(location.hash!=='#summary')history.replaceState(null,'','#summary');
  document.title='評讀總結與證據等級｜CASP 2024';window.scrollTo({top:0,behavior:'auto'});
  $('announcement').textContent='評讀總結。Oxford CEBM 2011：依研究設計等級 2，本次教學評讀建議等級 3。';
 }
 $('questionNav').addEventListener('click',e=>{const b=e.target.closest('[data-question]');if(b)selectQuestion(b.dataset.question);});
  $('sourceAppraisal').addEventListener('click',e=>{const b=e.target.closest('[data-evidence-key]');if(!b)return;const index=q().evidence.findIndex(item=>item.key===b.dataset.evidenceKey);if(index<0)return;evidenceIndex=index;highlights=true;renderEvidence();$('announcement').textContent=`已定位：${ev().label}`;if(window.innerWidth<850)$('focusButton').click();});
 $('evidenceTabs').addEventListener('click',e=>{const b=e.target.closest('[data-evidence]');if(b){evidenceIndex=Number(b.dataset.evidence);renderEvidence();}});
 $('guideMode').onclick=()=>setMode('guide');$('analysisMode').onclick=()=>setMode('analysis');$('revealButton').onclick=()=>setMode('analysis');
 $('showResultButton').onclick=()=>{answerShown=!answerShown;renderResult();const a=window.CASP_ANSWERS[q().id-1];$('announcement').textContent=answerShown?`第 ${q().id} 題，參考判讀結果：${q().id===4?'整體：'+a.answer+'；'+a.parts.map(p=>p.join('：')).join('；'):a.answer}`:`第 ${q().id} 題，已隱藏判讀結果`;};
 $('highlightButton').onclick=()=>{highlights=!highlights;renderEvidence();};
 $('zoomIn').onclick=()=>{zoom=Math.min(250,zoom+25);renderEvidence();};$('zoomOut').onclick=()=>{zoom=Math.max(100,zoom-25);renderEvidence();};
 $('previousButton').onclick=()=>current===0?showIntroduction():selectQuestion(q().id-1);$('nextButton').onclick=()=>current===questions.length-1?showSummary():selectQuestion(q().id+1);
 $('originalButton').onclick=()=>window.open(`${q().annotatedPdf}#page=${ev().page}`,'_blank','noopener');
 $('introButton').onclick=showIntroduction;$('startAppraisal').onclick=()=>selectQuestion(1);
 $('summaryBack').onclick=()=>selectQuestion(11);$('summaryHome').onclick=showIntroduction;
 $('sourcesButton').onclick=showSources;$('summaryButton').onclick=showSummary;
 $('closeDialog').onclick=()=>$('infoDialog').close();$('closeFocus').onclick=()=>$('focusDialog').close();
 $('mobileReference').onclick=()=>$('focusButton').click();
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
  $('focusContent').innerHTML=`<div class="focus-image-wrap" style="overflow:hidden;aspect-ratio:${1/ratio}"><img alt="${escape(ev().label)} 原文局部放大" src="${page.src}" style="position:absolute;width:${10000/width}%;max-width:none;left:${-box[0]/width*100}%;top:${-box[1]/height*100}%"><div class="highlight-layer">${highlights?highlightMarkup(adjusted):''}</div></div>`;
  $('focusDialog').showModal();$('focusDialog').scrollTop=0;
 };
 for(const id of ['infoDialog','focusDialog'])$(id).addEventListener('click',e=>{if(e.target===$(id)){const r=$(id).getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$(id).close();}});
 document.addEventListener('keydown',e=>{if(e.altKey&&e.key==='ArrowRight'){e.preventDefault();if(introActive)selectQuestion(1);else if(!summaryActive&&current<10)selectQuestion(q().id+1);else if(!summaryActive)showSummary();}if(e.altKey&&e.key==='ArrowLeft'){e.preventDefault();if(summaryActive)selectQuestion(11);else if(!introActive){if(current>0)selectQuestion(q().id-1);else showIntroduction();}}});
 window.addEventListener('hashchange',()=>{const match=location.hash.match(/^#q(\d+)$/);if(match)selectQuestion(match[1]);else if(location.hash==='#intro')showIntroduction();else if(location.hash==='#summary')showSummary();});
 const initialHash=location.hash,start=initialHash.match(/^#q(\d+)$/),valid=start&&questions.some(item=>item.id===Number(start[1]));selectQuestion(valid?start[1]:1);if(initialHash==='#summary')showSummary();else if(!valid)showIntroduction();
})();
