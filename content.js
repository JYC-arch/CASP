/* English question stems: CASP RCT Checklist (2024), CC BY-NC-SA 4.0.
 * Chinese: teaching translation, with reference to the supplied 2020 translation.
 * Appraisal commentary is an educational interpretation of the supplied study. */
window.CASP_SECTIONS = [
  {id:'A', title:'基本研究設計', full:'隨機對照試驗的基本研究設計是否有效？'},
  {id:'B', title:'研究方法', full:'研究方法是否嚴謹？'},
  {id:'C', title:'研究結果', full:'結果是什麼？'},
  {id:'D', title:'臨床應用', full:'結果對於當地是否有幫助？'}
];
window.CASP_PALETTE = [
 {color:'#23756c',soft:'#e9f4f1',mark:'rgba(46,153,129,.22)'},
 {color:'#3869a0',soft:'#eaf1fa',mark:'rgba(78,139,210,.23)'},
 {color:'#936819',soft:'#fbf2dc',mark:'rgba(223,173,43,.26)'},
 {color:'#80549b',soft:'#f2ebf8',mark:'rgba(163,113,200,.23)'},
 {color:'#ab543e',soft:'#fbede7',mark:'rgba(215,123,91,.23)'},
 {color:'#3f794b',soft:'#ebf4e9',mark:'rgba(111,169,88,.24)'},
 {color:'#a34670',soft:'#faeaf1',mark:'rgba(210,103,155,.23)'},
 {color:'#5264a5',soft:'#edf0fb',mark:'rgba(117,132,218,.25)'},
 {color:'#9a602d',soft:'#fcf0e2',mark:'rgba(225,153,67,.25)'},
 {color:'#397b86',soft:'#e8f4f6',mark:'rgba(76,173,190,.23)'},
 {color:'#76703c',soft:'#f4f3e5',mark:'rgba(174,171,78,.25)'}
];
window.CASP_QUESTIONS = [
{
 id:1, section:'A', short:'清楚的研究問題', topic:'PICO · 從研究目的開始',
 title:'研究是否提出清楚建構的研究問題？',
 english:'Did the study address a clearly formulated research question?',
 plain:'先說清楚：研究哪些人、給什麼介入、與什麼比較，以及測量什麼結果。',
 prompt:'不只看題目：你能從文獻找齊 P、I、C、O 嗎？',
 consider:[['研究是否設計來評估介入措施的結果？','Was the study designed to assess the outcomes of an intervention?'],['研究問題是否以族群、介入、比較及結果清楚建構？','Is the research question ‘formulated’ in terms of: Population studied; Intervention given; Comparator chosen; Outcomes measured?']],
 evidence:[{key:'pico_abstract',page:1,label:'p.45 摘要',quote:'摘要交代研究目的、兩組介入、測量指標與追蹤時間。先找四個要素，再到方法確認。',find:['目　的','混合式衛教對全膝關節置換術病人疼痛及膝關節角度之成效探討。','每組各26人']},{key:'pico_methods',page:2,label:'p.46 方法',quote:'研究對象與納入條件補足 P；研究設計交代 I、C 及介入期間。',find:['二、研究對象','年齡65','控制組則接受常規出院']}],
 verdict:'是',tone:'yes', coreTitle:'PICO 清楚，但要到方法補齊細節。',
 core:['P：65 歲以上、因退化性膝關節炎接受單側全膝關節置換術的病人。','I：混合式衛教，包括手冊、復健運動影片與電話諮詢，居家運動共 16 週。','C：常規出院衛教。O：疼痛與伸膝、屈膝角度，於多個時間點測量。'],
 deep:[['Ask 與 Appraise 用同一個 PICO，目的不同','Ask 用 PICO 建構我們的臨床問題；Appraise 第 1 題則用 PICO 檢查這篇研究的問題是否清楚。'],['研究問題清楚，不等於研究方法沒有偏差','第 1 題只建立閱讀方向。隨機分派、盲法、流失與分析是否適當，要繼續看後面的題目。'],['與 2020 中文紙本怎麼對照？','紙本第 1 題是「這項研究是否聚焦於一個清楚的問題？」。2024 使用 formulated；兩者的考量點都以 PICO 為核心。']],
 writing:'是。依 p.45 摘要及 p.46 研究設計、研究對象，本研究比較老年單側全膝關節置換術病人接受混合式衛教與常規衛教後的疼痛及膝關節角度，PICO 要素可辨識。',
 transfer:'不要只抄研究題目。用四行寫出 P、I、C、O，缺少的要素再回到研究方法找。'
},
{
 id:2,section:'A',short:'隨機分派',topic:'隨機序列 · 分派隱蔽',
 title:'受試者是否被隨機分派至不同介入組別？',english:'Was the assignment of participants to interventions randomised?',
 plain:'分開檢查「分組順序怎麼產生」與「分組前能否預知下一組」。兩者都會影響分派偏差。',prompt:'電腦亂數表與密閉信封，分別在解決什麼問題？',
 consider:[['如何進行隨機分派？方法是否適當？','How was randomisation carried out? Was the method appropriate?'],['隨機化是否足以消除系統性偏差？','Was randomisation sufficient to eliminate systematic bias?'],['分派序列是否對研究者及受試者隱蔽？','Was the allocation sequence concealed from investigators and participants?']],
 evidence:[{key:'random',page:2,label:'p.46 研究設計',quote:'原文記載先以電腦亂數表產生序號組別、放入密閉信封，再依入院順序分派。',find:['先以電腦亂數表產生序號組別','控制組，放入密閉信封','再依入院順序']}],
 verdict:'是；隱蔽細節不明',tone:'uncertain',coreTitle:'有隨機序列的依據，信封程序仍需保留判斷。',
 core:['電腦亂數表支持隨機序列的產生；依入院順序使用預先隨機的序列，不等於用入院順序交替分組。','密閉信封顯示有嘗試隱蔽分派，但未清楚交代是否不透明、連續編號，以及由誰保管和開封。','因此隨機分派可判「是」，但不能進一步宣稱分派隱蔽已充分確保。'],
 deep:[['方便取樣不等於沒有隨機分派','方便取樣是「哪些人進入研究」；隨機分派是「進入研究的人分到哪一組」。本文兩者並存。'],['分派隱蔽與盲法不同','分派隱蔽發生在分組前，避免事先知道下一位會進哪一組；盲法則處理分組後，誰知道已接受哪個介入。'],['不要用一句「隨機」取代程序核對','文章若只宣稱隨機，沒有交代產生方式，證據就不足。本文有寫電腦亂數，但信封操作資訊不完整。']],
 writing:'是。p.46 記載以電腦亂數表產生組別，支持隨機分派；另使用密閉信封，但未交代不透明、連續編號及開封人員等細節，分派隱蔽是否充分仍無法完全判斷。',
 transfer:'把「序列產生」和「分派隱蔽」各畫一條底線；若只有隨機二字，記錄缺少哪些程序。'
},
{
 id:3,section:'A',short:'追蹤與 ITT',topic:'流程圖 · 退出 · 分析人數',
 title:'所有進入試驗的受試者，是否在結束時被適當交代？',english:'Were all participants who entered the study accounted for at its conclusion?',
 plain:'先核對分派、追蹤、排除與分析人數，再看是否依原分派組別進行意向治療分析。',prompt:'26 人變成 22 人：知道原因，就代表分析沒有問題嗎？',
 consider:[['是否交代失去追蹤及隨機分派後的排除？','Were losses to follow-up and exclusions after randomisation accounted for?'],['是否依原隨機分派組別分析（ITT）？','Were participants analysed in the study groups to which they were randomised (intention-to-treat analysis)?'],['研究是否提早終止？若有，原因為何？','Was the study stopped early? If so, what was the reason?']],
 evidence:[{key:'flow',page:3,label:'p.47 流程圖',quote:'兩組各 26 人；實驗組因住院與執行率不足，最後為 22 人。對照組維持 26 人。',region:[.08,.108,.94,.54]},{key:'adherence',page:3,label:'p.47 分析門檻',quote:'原文規定個人執行率達 72% 才列入統計分析。這是辨識分派後排除的關鍵。',find:['訂定個人執行率達72%才列入統計分析']},{key:'sample_analysis',page:4,label:'p.48 分析人數',quote:'結果段明列最後 48 人納入統計分析：實驗組 22 人、控制組 26 人，總流失率 7.7%。',find:['最後完成本研究共48人','實驗組22人及控制組26人','流失率為7.7%']}],
 verdict:'部分符合',tone:'uncertain',coreTitle:'人數有交代，ITT 原則卻未充分符合。',
 core:['分派後未納入分析者共 4 人：胃穿孔住院 1 人、復健執行率未達 72% 者 3 人；原因有交代。','但以執行率作為分析門檻，未保留全部隨機分派者，不能認定採完整 ITT。','第 3 題含多個考量點。建議分別記錄「人數流向：有交代」「ITT：不符合完整原則」「提前終止：全文未明確說明」，再寫整體理由。'],
 deep:[['ITT 是什麼？','原則上依最初隨機分派組別分析所有被分派者；實務上也需交代缺失資料處理。不能因未充分配合介入就直接排除。'],['總流失率可能掩蓋組間差異','總體為 4/52＝7.7%；實驗組未納入分析為 4/26＝15.4%，控制組為 0/26。這包含不同原因，不應全部稱為失去追蹤。'],['為什麼可能影響效果估計？','留下較能配合運動的人，可能使結果偏向能執行介入者；效果可能被高估，但影響方向與程度不能單憑本文確定。GEE 本身也不等於 ITT。']],
 writing:'人數及排除原因已有交代（p.47 圖一、p.48 結果），但實驗組原分派 26 人，最後僅 22 人分析，其中 3 人因執行率不足被排除，未符合保留所有隨機分派者的完整 ITT 原則。若評讀表僅能單選，須在理由中註明兩個面向的不同判斷。',
 transfer:'把流程圖的人數一路加減核對，再讀統計分析及結果段，確認「最後誰真的進入分析」。'
},
{
 id:4,section:'B',short:'三個角色的盲法',topic:'受試者 · 介入者 · 評估者',
 title:'受試者、介入執行者及結果評估／分析者是否盲化？',english:'(a) Were the participants ‘blind’ to intervention they were given? (b) Were the investigators ‘blind’ to the intervention they were giving to participants? (c) Were the people assessing/analysing outcome/s ‘blinded’?',
 plain:'2024 將第 4 題標為 (a)、(b)、(c)。要分別辨識角色，不能只用「單盲」兩字回答全部。',prompt:'作者寫「單盲」，到底是誰不知道分組？',
 consider:[['分別核對受試者、介入執行者、結果評估／分析者是否知道分組。','Assess participants, investigators delivering the intervention, and people assessing/analysing outcomes separately.（教學整理，非額外官方題目）']],
 evidence:[{key:'blind_label',page:2,label:'p.46 設計與衛教',quote:'研究自稱單盲；實驗組由研究者提供手冊、影片操作與運動回覆示教。',find:['本研究為單盲隨機控制組試驗','實驗組由研究者在術後第3天一對一方式提供']},{key:'blind_limit',page:8,label:'p.52 研究限制',quote:'作者明述介入措施及資料收集者為同一研究者，並承認可能有研究者主觀偏倚。',find:['介入措施及資料收集者為同一研究者','研究者主觀偏倚']}],
 verdict:'需分角色判讀',tone:'uncertain',coreTitle:'「單盲」是標籤，執行程序才是判讀依據。',
 core:['受試者：未明確交代如何維持盲法；兩組收到的衛教內容不同，不能直接判定成功盲化。','介入執行者：研究者親自執行特定衛教，依程序判讀，難以對介入組別盲化。','結果評估／分析者：資料收集者與介入者相同，無法認定評估者盲化；資料分析者是否盲化則未交代。'],
 deep:[['不同角色會帶來不同偏差','知道分組可能影響受試者的回報、介入者的對待，或評估者的測量與判讀。這些是可能的影響，不能直接斷言結果一定失真。'],['護理衛教不容易盲化，還可以怎麼做？','即使介入者無法盲化，仍可考慮使用獨立且不知分組的評估者、標準化測量程序；這是評估可行改善方式，不是要求所有介入都能雙盲。'],['儀器測量不等於沒有評估偏差','膝關節角度雖使用電子量角器，操作、引導和姿勢仍可能受評估程序影響。應檢查標準化與獨立性。']],
 writing:'p.52 指出介入及資料收集為同一研究者，故無法認定結果評估者盲化；介入執行者依程序知悉介入，受試者及資料分析者的盲法則未充分交代。不能僅依「單盲」標示判定所有角色均盲化。',
 transfer:'在文獻旁分別寫「受試者／介入者／評估者／分析者」，每個角色各找一句依據。'
},
{
 id:5,section:'B',short:'起始特性是否相似',topic:'基線表 · 臨床差異',
 title:'隨機對照試驗開始時，各組是否相似？',english:'Were the study groups similar at the start of the randomised controlled trial?',
 plain:'讀表一的實際數值，檢查可能影響結果的起始特性。不能把 p > .05 當成兩組完全相同。',prompt:'看到每個 p 值都大於 .05，就能停止比較嗎？',
 consider:[['是否清楚列出各組基線特性，例如年齡、性別及社經狀況？','Were the baseline characteristics of each study group (e.g. age, sex, socio-economic group) clearly set out?'],['是否存在可能影響結果的組間差異？','Were there any differences between the study groups that could affect the outcome/s?']],
 evidence:[{key:'baseline',page:5,label:'p.49 表一',quote:'先比較年齡、性別、疾病與術前疼痛／角度，再看數字是否一致。表一的 TKR 經驗列也值得核對。',region:[.07,.09,.94,.75]},{key:'baseline_text',page:4,label:'p.48 結果敘述',quote:'作者敘述二組人口及疾病特質無統計顯著差異；這是統計結果，仍需與表格數值交叉檢查。',find:['比較二組人口特質及疾病特質無統計顯著差異']}],
 verdict:'大致相似；有疑點',tone:'uncertain',coreTitle:'多項基線接近，表格仍有待核對之處。',
 core:['表一列出年齡、性別、BMI、慢性病、疼痛及膝關節角度，多項數值接近。','不顯著不代表等同；例如性別比例仍有可觀差距，需思考臨床影響。','TKR 經驗列存在內部不一致：整體「無」41 人，但兩組所列「無」為 4 與 19 人，相加為 23。此處需作者釐清，不能自行改數字。'],
 deep:[['基線 p 值的限制','小樣本即使存在差異，也可能沒有達統計顯著。評讀時看差異大小、預後相關性及是否有重要變項未列出。'],['表格查核也是評讀的一部分','先檢查每組總數、百分比、加總與文字敘述。疑似排版或誤植時，寫出矛盾並保留判斷，不代替作者更正。']],
 writing:'表一（p.49）呈現多項基線特性，多數數值接近；但不能僅依 p > .05 認定完全相同。另 TKR 經驗的整體與組別人數不一致，該項基線比較需進一步釐清。',
 transfer:'至少選兩個可能影響結果的基線變項看實際數字，並核對各組人數與加總。'
},
{
 id:6,section:'B',short:'其他照護是否一致',topic:'共同照護 · 共同追蹤',
 title:'除實驗介入外，各組是否接受相同程度的照護？',english:'Apart from the experimental intervention, did each study group receive the same level of care (that is, were they treated equally)?',
 plain:'把預定比較的介入組合先圈出，再檢查其他治療、照護、測量與追蹤是否一致。',prompt:'電話諮詢本來就是介入的一部分，能把它直接當作不公平照護嗎？',
 consider:[['是否有清楚定義的研究計畫？','Was there a clearly defined study protocol?'],['若有額外檢查或治療，各組是否相似？','If any additional interventions were given (e.g. tests or treatments), were they similar between the study groups?'],['各組追蹤間隔是否相同？','Were the follow-up intervals the same for each study group?']],
 evidence:[{key:'care',page:2,label:'p.46 共同照護',quote:'方法交代兩組於術前及住院期間皆接受常規治療及護理；出院衛教是預定比較的差異。',find:['二組病人於手術前及住院期間皆接受常規治療','及護理']},{key:'followup',page:4,label:'p.48 追蹤與用藥',quote:'兩組在相同術後時間點追蹤；結果另報告止痛藥使用天數不同，需連同照護程序與分析一起理解。',find:['分別為術後第1週','術後第6週','術後第12週','術後第16週','常規醫囑止痛藥為']}],
 verdict:'大致一致；資訊有限',tone:'uncertain',coreTitle:'共同照護與追蹤有描述，但不能宣稱所有照護均相同。',
 core:['住院期間均接受常規治療及護理，兩組追蹤時間點相同。','手冊、影片與電話諮詢屬於預先設計的混合式衛教組合，不宜單因其不同就判定本題不符合。','出院後其他復健或共同介入的完整控制資訊有限；止痛藥天數也有差異，需考慮其與疼痛結果的關係。'],
 deep:[['研究比較的是整個介入組合','本研究不能單獨證明影片、手冊或電話哪一項造成效果。這些成分一起構成實驗介入。'],['止痛藥天數不同，要怎麼讀？','它可能是疼痛改善後的結果，也可能與照護及結果互相影響。本文 GEE 納入止痛藥天數調整，但調整不等於所有差異都已消除。']],
 writing:'p.46 記載兩組術前與住院期間接受常規治療及護理，p.48 顯示相同追蹤時間，支持部分共同照護一致；但出院後其他復健及共同介入的控制未完整交代，仍需保留。',
 transfer:'先列出「設計上刻意不同」的介入內容，再查找本來應該一致的背景照護。'
},
{
 id:7,section:'C',short:'效果是否完整報告',topic:'樣本數 · 多項結果 · 效果估計',
 title:'介入措施的效果是否被完整報告？',english:'Were the effects of intervention reported comprehensively?',
 plain:'看有沒有交代樣本數規劃、各組各時間點結果、資料缺失及統計方法，也要注意未顯著的結果。',prompt:'摘要寫有成效，是否代表疼痛與所有關節角度都改善？',
 consider:[['是否進行檢定力／樣本數計算？','Was a power calculation undertaken?'],['測量哪些結果？是否清楚定義？','What outcomes were measured, and were they clearly specified?'],['結果如何表達？二元結果是否報告相對及絕對效果？','How were the results expressed? For binary outcomes, were relative and absolute effects reported?'],['是否報告各組、各結果、各追蹤時間點的資料？','Were the results reported for each outcome in each study group at each follow-up interval?'],['是否有缺失或不完整資料？','Was there any missing or incomplete data?'],['組間退出情形的不同是否可能影響結果？','Was there differential drop-out between the study groups that could affect the results?'],['是否指出潛在偏差？','Were potential sources of bias identified?'],['使用哪些統計檢定？','Which statistical tests were used?'],['是否報告 p 值？','Were p values reported?']],
 evidence:[{key:'power',page:2,label:'p.46 樣本數',quote:'G*Power 規劃 effect size .33、α .05、power .80、兩組五次測量，考量流失後收案 52 人。',find:['樣本數計算方面','設定effect size .33','估算樣本數共46人']},{key:'results_table',page:7,label:'p.51 表二',quote:'表二列 β、SE 與 p 值。第 16 週現在疼痛交互作用 β = −1.52；屈膝角度交互作用未達 .05。',region:[.07,.635,.95,.89]},{key:'results_graph',page:6,label:'p.50 圖二',quote:'圖二呈現各時間點各組的疼痛值；圖上的兩組比較與表二的組別×時間交互作用不是同一個比較。',region:[.07,.09,.95,.70]}],
 verdict:'部分符合',tone:'uncertain',coreTitle:'報告多項結果，但要把「有成效」拆開閱讀。',
 core:['有樣本數規劃、各時點圖表，以及 GEE 的 β、SE、p 值。','第 16 週疼痛及伸膝角度的交互作用達統計顯著；屈膝角度未達顯著，不能概括說所有指標都有效。','仍有分派後排除、未直接報告信賴區間等限制。文中也未充分交代缺失資料處理及預先指定的主要結果／分析計畫。'],
 deep:[['用一個數字示範讀表二','第 16 週「現在的疼痛」組別×時間 β = −1.52，是相對於參考組與參考時間的變化差；不是第 16 週兩組疼痛平均值直接相減，也不是每位病人都減少 1.52 分。'],['圖二與表二為何 p 值不同？','圖二是該時間點的組間比較；表二是含參考時間的模型交互作用，且作者另納入變項調整。比較問題不同，數字不能互換。'],['連續結果不必硬套 RR 或 NNT','本研究主要結果為疼痛分數及角度，應讀其量尺、平均值與模型效果。CASP 對二元結果的提示，不代表每篇都必須計算相對風險。']],
 writing:'p.46 有樣本數規劃，圖二、圖三及表二呈現各時間點與模型結果；疼痛及伸膝角度部分比較達顯著，屈膝角度未達顯著。但分派後排除、缺失資料處理及未報告信賴區間等限制，使效果報告仍不完整。',
 transfer:'先認清量尺與比較方式，再記錄「哪個結果、哪個時間、差多少」。也要找未顯著結果。'
},
{
 id:8,section:'C',short:'效果估計的精確度',topic:'信賴區間 · SE 與 p 值',
 title:'是否報告介入或治療效果估計的精確度？',english:'Was the precision of the estimate of the intervention or treatment effect reported?',
 plain:'效果不只有一個估計值，還有不確定範圍。CASP 特別提示檢查信賴區間。',prompt:'表二有 β、SE 和 p 值，哪一個是 95% 信賴區間？',
 consider:[['是否報告信賴區間（CI）？','Were confidence intervals (CIs) reported?']],
 evidence:[{key:'precision_table',page:7,label:'p.51 表二',quote:'表二欄位為 β、SE、p 值，未直接列出 95% CI。檢查表頭與全文，不把 SE 或 p 值當成 CI。',region:[.07,.635,.95,.89]}],
 verdict:'未直接報告 CI',tone:'no',coreTitle:'有標準誤資訊，但缺少直接呈現的信賴區間。',
 core:['本文表二提供 β 與 SE，可提供效果估計不確定性的部分資訊；但未直接報告 CI。','若依 CASP 的 CI 提示作答，可寫「否：未直接列出 CI；有提供 SE」。這比單寫完全沒有精確度資訊更準確。','統計顯著不代表估計非常精確，也不能僅用 p 值回答效果大小與不確定範圍。'],
 deep:[['β、SE、CI 分別是什麼？','β 是模型效果估計；SE 是該估計的標準誤；CI 用一段區間呈現估計的不確定性。SD 則描述個體資料的離散程度，不能直接互換。'],['教師可另行估算嗎？','在適當的大樣本常態近似下，可用 β ± 1.96×SE 示範近似區間。但必須標示為另行計算，並確認模型及標準誤條件；不能說是作者原文已報告。'],['精確不等於沒有偏差','即使區間很窄，也可能因分派、測量或排除方式產生偏差。精確度與研究可信度是不同面向。']],
 writing:'否（就 CI 呈現而言）。表二（p.51）列出 β、SE 及 p 值，但未直接提供效果估計的信賴區間；雖有 SE 資訊，仍不宜把 p 值視為精確度的完整呈現。',
 transfer:'看表頭找 CI 的上下界；找不到時寫清楚是否有 SE，以及缺少什麼，不自行補成原文數據。'
},
{
 id:9,section:'C',short:'效益、傷害與成本',topic:'統計意義 · 臨床價值',
 title:'實驗介入的效益是否大於傷害與成本？',english:'Do the benefits of the experimental intervention outweigh the harms and costs?',
 plain:'效果達顯著只是起點，還要看改善是否值得、是否有不良事件，以及執行需要付出什麼。',prompt:'作者說安全且易於實施，文中有足夠的安全與成本資料支持嗎？',
 consider:[['介入或治療的效果有多大？','What was the size of the intervention or treatment effect?'],['是否報告各組傷害或非預期效果？','Were harms or unintended effects reported for each study group?'],['是否進行成本效果分析，以比較同一健康問題的不同介入？','Was a cost-effectiveness analysis undertaken? (Cost-effectiveness analysis allows a comparison to be made between different interventions used in the care of the same condition or problem.)']],
 evidence:[{key:'benefit',page:7,label:'p.51 效果表',quote:'可找出疼痛及伸膝角度的效果估計，但臨床重要程度仍須進一步評估。',region:[.07,.635,.95,.89]},{key:'cost',page:3,label:'p.47 電話與運動',quote:'電話諮詢共 4 次，每次約 5–10 分鐘；居家運動另外需要病人投入時間。這是資源線索，不是成本效果分析。',find:['電話諮詢，共4次','每次約5–10分鐘']},{key:'safety',page:8,label:'p.52 結論',quote:'作者稱介入安全且易於實施，但全文未見兩組系統性不良事件彙整或正式成本效果分析。',find:['安全且易於實','施的護理措施']}],
 verdict:'無法判斷',tone:'uncertain',coreTitle:'有部分效益訊號，尚不足以完成效益—傷害—成本權衡。',
 core:['疼痛及伸膝角度部分結果有統計差異，臨床重要程度仍需連同量尺與病人需求評估。','未見各組系統性不良事件報告，不能把「沒有報告傷害」當成「沒有傷害」。','未見正式成本效果分析。知道電話與運動時間，可以討論資源，但不足以證明整體效益大於成本。'],
 deep:[['胃穿孔可以直接歸因於介入嗎？','流程圖記載 1 人因胃穿孔住院，但本文未確立與衛教／運動的因果關係。可以記錄事件，不能自行判定為介入造成。'],['統計顯著與臨床重要不同','差異是否讓病人更能行走、睡眠或生活，需要臨床重要差異、功能資料與病人偏好支持；p < .05 本身不能回答。']],
 writing:'無法判斷。雖然部分疼痛及伸膝角度結果支持效益（p.51），但缺乏各組完整傷害資料與正式成本效果分析，尚不足以確定效益是否大於傷害和成本。',
 transfer:'把效益、傷害與成本分成三欄。哪一欄資料不足，就明確寫出，不以作者結論代替查核。'
},
{
 id:10,section:'D',short:'能否用在我的病人',topic:'外部適用性 · 病人情境',
 title:'研究結果能否應用於你的當地族群與照護情境？',english:'Can the results be applied to your local population/in your context?',
 plain:'先設定一個照護情境，再比較病人、設備、介入能力與重視的結果。這題需要文獻加上情境判斷。',prompt:'若病人家中不能觀看影片，還能直接套用這個方案嗎？',
 consider:[['研究參與者是否與你照顧的人相似？','Are the study participants similar to the people in your care?'],['族群差異是否可能改變研究結果？','Would any differences between your population and the study participants alter the outcomes reported in the study?'],['這些結果對你的族群是否重要？','Are the outcomes important to your population?'],['是否有你需要但未被研究或報告的結果？','Are there any outcomes you would have wanted information on that have not been studied or reported?'],['研究限制是否影響你的決策？','Are there any limitations of the study that would affect your decision?']],
 evidence:[{key:'population',page:2,label:'p.46 納入／排除',quote:'納入 65 歲以上單側 TKR 病人；排除無法運動及家中無觀看 YouTube 設施者。',find:['年齡65','家中無觀看YouTube衛教影片之設施']},{key:'limits',page:8,label:'p.52 研究限制',quote:'單一機構、僅追蹤術後 16 週，作者指出推論及長期效益的限制。',find:['收案地點僅單一','研究追蹤術後16週','長期效益未知']}],
 verdict:'依情境而定',tone:'uncertain',coreTitle:'適用性需要比較，不能只因研究在台灣就判「是」。',
 core:['教學情境：某骨科病房有 70 歲單側 TKR 病人，能溝通、能運動，有影片設備及照顧者支持。此為教師假設案例，不是文獻新增個案。','此情境與研究部分條件接近，可考慮作為衛教參考；仍需醫療團隊評估、病人偏好與執行支持。','若病人無設備、無法運動或需要長期結果，本文的直接適用性就較有限。'],
 deep:[['不要替沒有設定的情境回答','如果沒有提供當地病人與照護條件，就寫尚需哪些資訊。這題不是只在原文找一句「可供臨床應用」。'],['缺少哪些病人重視的結果？','本文重點為疼痛與角度；若決策還需要日常功能、生活品質或長期安全資料，應列為資訊缺口，不假設已有證明。']],
 writing:'若照護對象為能溝通、能運動且可觀看影片的老年單側 TKR 病人，與 p.46 研究條件部分相近，可考慮作為衛教參考；但單一機構、16 週追蹤與研究偏差限制，仍影響直接推廣的把握。',
 transfer:'先寫一個具體病人情境，再用「相似／不同／缺少資訊」三項比較，不只寫適用或不適用。'
},
{
 id:11,section:'D',short:'是否比現行照護有價值',topic:'資源 · 可行性 · 決策',
 title:'相較現行介入，這項介入能為照護對象帶來更大價值嗎？',english:'Would the experimental intervention provide greater value to the people in your care than any of the existing interventions?',
 plain:'把研究效果放回現場：誰執行、需要多久、要哪些設備與訓練，以及能否調整現行照護。',prompt:'有手冊和影片就夠了嗎？電話追蹤與人員訓練由誰負責？',
 consider:[['導入介入需要哪些時間、經費、技能發展或訓練資源？','What resources are needed to introduce this intervention taking into account time, finances, and skills development or training needs?'],['能否調整現有介入的資源，以投入新介入？','Are you able to disinvest resources in one or more existing interventions in order to be able to re-invest in the new intervention?']],
 evidence:[{key:'resources',page:2,label:'p.46 衛教方案',quote:'包括教材製作、影片操作、一對一衛教與回覆示教；執行者具長期骨科專科護理經驗。',find:['研究者是經過受訓合格之骨科專科護理','22年骨科專科護理經歷','回覆示教']},{key:'phone',page:3,label:'p.47 追蹤安排',quote:'病人每日紀錄運動、返診帶回檢核表；返家後共有 4 次電話諮詢，每次約 5–10 分鐘。',find:['自我運動執行檢核表','電話諮詢，共4次','每次約5–10分鐘']}],
 verdict:'尚需在地資料',tone:'uncertain',coreTitle:'可列出導入條件，尚不能直接證明比現行照護更有價值。',
 core:['需要衛教與運動指導能力、教材與設備、電話追蹤及紀錄管理，也需病人與照顧者的時間。','研究中的執行者具 22 年骨科專科護理經驗，其他場域能否複製相同品質，需要評估與訓練。','文章未提供在地人力配置、完整成本與替代方案比較，適合先提出有條件試行與評估，而非直接全面取代現行照護。'],
 deep:[['第 9 題與第 11 題差在哪？','第 9 題偏向檢查研究提供的效益、傷害與成本證據；第 11 題將證據放進自己的服務，評估相較現行照護的價值與資源安排。'],['可怎麼提出具體建議？','例如先評估現行出院衛教缺口、安排小規模試行，追蹤疼痛、功能、執行率、不良事件與工時。這是教師提出的實施建議，並非本研究已完成的結果。']],
 writing:'尚需在地評估。p.46–47 顯示方案涉及一對一指導、回覆示教、教材及 4 次電話追蹤，須確認人力、訓練及設備。本文缺乏與本單位現行照護的完整資源及成本比較，不能直接判定更有價值。',
 transfer:'把「值得採用」改寫為具體條件：適合誰、誰執行、需多少資源、如何追蹤成效與安全。'
}
];
