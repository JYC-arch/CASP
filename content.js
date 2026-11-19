/* CASP RCT Checklist (2024), CC BY-NC-SA 4.0.
 * Chinese teaching translation; appraisal updated from the supplied 2026-11-19 assessment. */
window.CASP_SECTIONS = [
  {
    "id": "A",
    "title": "基本研究設計",
    "full": "隨機對照試驗的基本研究設計是否有效？"
  },
  {
    "id": "B",
    "title": "研究方法",
    "full": "研究方法是否嚴謹？"
  },
  {
    "id": "C",
    "title": "研究結果",
    "full": "結果是什麼？"
  },
  {
    "id": "D",
    "title": "臨床應用",
    "full": "結果對於當地是否有幫助？"
  }
];
window.CASP_PALETTE = [
  {
    "color": "#23756c",
    "soft": "#e9f4f1",
    "mark": "rgba(46,153,129,.22)"
  },
  {
    "color": "#3869a0",
    "soft": "#eaf1fa",
    "mark": "rgba(78,139,210,.23)"
  },
  {
    "color": "#936819",
    "soft": "#fbf2dc",
    "mark": "rgba(223,173,43,.26)"
  },
  {
    "color": "#80549b",
    "soft": "#f2ebf8",
    "mark": "rgba(163,113,200,.23)"
  },
  {
    "color": "#ab543e",
    "soft": "#fbede7",
    "mark": "rgba(215,123,91,.23)"
  },
  {
    "color": "#3f794b",
    "soft": "#ebf4e9",
    "mark": "rgba(111,169,88,.24)"
  },
  {
    "color": "#a34670",
    "soft": "#faeaf1",
    "mark": "rgba(210,103,155,.23)"
  },
  {
    "color": "#5264a5",
    "soft": "#edf0fb",
    "mark": "rgba(117,132,218,.25)"
  },
  {
    "color": "#9a602d",
    "soft": "#fcf0e2",
    "mark": "rgba(225,153,67,.25)"
  },
  {
    "color": "#397b86",
    "soft": "#e8f4f6",
    "mark": "rgba(76,173,190,.23)"
  },
  {
    "color": "#76703c",
    "soft": "#f4f3e5",
    "mark": "rgba(174,171,78,.25)"
  }
];
window.CASP_ANSWERS = [
  {
    "answer": "是",
    "reason": "研究目的與 PICO 清楚，屬於評估介入效果的隨機對照試驗。"
  },
  {
    "answer": "是",
    "reason": "有電腦亂數序列及信封分派的描述；分派隱蔽的操作細節則不足。",
    "parts": [
      [
        "隨機分派",
        "是"
      ],
      [
        "分派隱蔽是否充分",
        "無法判斷"
      ]
    ]
  },
  {
    "answer": "否",
    "reason": "分析排除執行率不足者，未採 ITT；全部 4 人流失或排除均集中於實驗組。",
    "parts": [
      [
        "流失與排除人數有交代",
        "是"
      ],
      [
        "採治療意向分析（ITT）",
        "否"
      ],
      [
        "試驗是否提早終止",
        "否"
      ]
    ]
  },
  {
    "answer": "否",
    "reason": "4(a) 無法判斷；4(b)、4(c) 為否。結果評估者與介入者為同一研究者，資料分析者的盲法則未交代。",
    "parts": [
      [
        "4(a) 受試者",
        "無法判斷"
      ],
      [
        "4(b) 給予介入者",
        "否"
      ],
      [
        "4(c) 評估／分析結果人員",
        "否"
      ]
    ]
  },
  {
    "answer": "是",
    "reason": "依新評讀文件，多項基準特性整體相似；保留 TKR 經驗列疑似對調及排除後基線未重列的限制。"
  },
  {
    "answer": "無法判斷",
    "reason": "住院照護、常規止痛醫囑及追蹤間隔相同；出院後的共同介入與常規衛教內容未完整交代。"
  },
  {
    "answer": "否",
    "reason": "有多項結果與檢定，但各時點變異程度、缺失資料及差異性流失等資訊與處理不足。"
  },
  {
    "answer": "否",
    "reason": "原文未報告 CI。評讀文件另以 β ± 1.96×SE 推算近似區間，並明確區分其與作者報告。"
  },
  {
    "answer": "無法判斷",
    "reason": "有部分效果大小資料，但缺乏系統性傷害與成本資料，不能確認效益大於代價。"
  },
  {
    "answer": "是",
    "reason": "依評讀文件設定的國內臨床情境，台灣老年 TKR 病人、回診及止痛模式相近；仍須注意納排條件及追蹤限制。"
  },
  {
    "answer": "無法判斷",
    "reason": "資源需求較低僅支持可行性；缺少利弊、成本與其他現行方案的充分比較，不能確認更有價值。"
  }
];
window.CASP_QUESTIONS = [
  {
    "id": 1,
    "section": "A",
    "short": "清楚的研究問題",
    "topic": "PICO · 從研究目的開始",
    "title": "研究是否提出清楚建構的研究問題？",
    "english": "Did the study address a clearly formulated research question?",
    "plain": "先說清楚：研究哪些人、給什麼介入、與什麼比較，以及測量什麼結果。",
    "prompt": "不只看題目：你能從文獻找齊 P、I、C、O 嗎？",
    "consider": [
      [
        "研究是否設計來評估介入措施的結果？",
        "Was the study designed to assess the outcomes of an intervention?"
      ],
      [
        "研究問題是否以族群、介入、比較及結果清楚建構？",
        "Is the research question ‘formulated’ in terms of: Population studied; Intervention given; Comparator chosen; Outcomes measured?"
      ]
    ],
    "evidence": [
      {
        "key": "pico_abstract",
        "page": 1,
        "label": "p.45 摘要",
        "quote": "摘要交代研究目的、兩組介入、測量指標與追蹤時間。先找四個要素，再到方法確認。",
        "find": [
          "目　的",
          "混合式衛教對全膝關節置換術病人疼痛及膝關節角度之成效探討。",
          "每組各26人"
        ]
      },
      {
        "key": "pico_methods",
        "page": 2,
        "label": "p.46 方法",
        "quote": "研究對象與納入條件補足 P；研究設計交代 I、C 及介入期間。",
        "find": [
          "二、研究對象",
          "年齡65",
          "控制組則接受常規出院"
        ]
      },
      {
        "key": "flow",
        "page": 3,
        "label": "p.47 收案流程",
        "quote": "圖一補充收案及隨機分派的人數與測量時點。",
        "region": [
          0.08,
          0.108,
          0.94,
          0.54
        ]
      }
    ],
    "verdict": "是",
    "tone": "yes",
    "coreTitle": "PICO 清楚，但要到方法補齊細節。",
    "core": [
      "研究目的為測試混合式衛教對老年 TKR 病人術後疼痛及膝關節角度的成效。P 為台灣北部區域教學醫院、65 歲以上、單側 TKR 病人，共 52 人，每組 26 人。",
      "I 包含衛教手冊（CVI .91）、YouTube 復健視頻、一對一衛教與回覆示教，以及每月 1 次、共 4 次電話諮詢；居家運動每日 2 次、每次 15 分鐘，共 16 週。C 為常規出院衛教。",
      "O 為 VAS 0–10 的現在、過去 1 週最嚴重及平均疼痛，以及電子量角器測量的伸膝、屈膝角度；測量時間為術前及術後第 1、6、12、16 週。",
      "仍未清楚描述常規衛教內容，也未指定單一主要結果，共有 5 個結果變項。"
    ],
    "deep": [
      [
        "Ask 與 Appraise 用同一個 PICO，目的不同",
        "Ask 用 PICO 建構我們的臨床問題；Appraise 第 1 題則用 PICO 檢查這篇研究的問題是否清楚。"
      ],
      [
        "研究問題清楚，不等於研究方法沒有偏差",
        "第 1 題只建立閱讀方向。隨機分派、盲法、流失與分析是否適當，要繼續看後面的題目。"
      ],
      [
        "與 2020 中文紙本怎麼對照？",
        "紙本第 1 題是「這項研究是否聚焦於一個清楚的問題？」。2024 使用 formulated；兩者的考量點都以 PICO 為核心。"
      ]
    ],
    "writing": "是。研究目的及 PICO 清楚（p.45 摘要、p.46–47 方法），可辨識研究族群、混合式衛教、常規衛教及疼痛與關節角度結果；但未指定單一主要結果。",
    "transfer": "不要只抄研究題目。用四行寫出 P、I、C、O，缺少的要素再回到研究方法找。"
  },
  {
    "id": 2,
    "section": "A",
    "short": "隨機分派",
    "topic": "隨機序列 · 分派隱蔽",
    "title": "受試者是否被隨機分派至不同介入組別？",
    "english": "Was the assignment of participants to interventions randomised?",
    "plain": "分開檢查「分組順序怎麼產生」與「分組前能否預知下一組」。兩者都會影響分派偏差。",
    "prompt": "電腦亂數表與密閉信封，分別在解決什麼問題？",
    "consider": [
      [
        "如何進行隨機分派？方法是否適當？",
        "How was randomisation carried out? Was the method appropriate?"
      ],
      [
        "隨機化是否足以消除系統性偏差？",
        "Was randomisation sufficient to eliminate systematic bias?"
      ],
      [
        "分派序列是否對研究者及受試者隱蔽？",
        "Was the allocation sequence concealed from investigators and participants?"
      ]
    ],
    "evidence": [
      {
        "key": "random",
        "page": 2,
        "label": "p.46 研究設計",
        "quote": "原文記載先以電腦亂數表產生序號組別、放入密閉信封，再依入院順序分派。",
        "find": [
          "先以電腦亂數表產生序號組別",
          "控制組，放入密閉信封",
          "再依入院順序"
        ]
      },
      {
        "key": "flow",
        "page": 3,
        "label": "p.47 隨機流程",
        "quote": "圖一呈現隨機分派後兩組的研究流程。",
        "region": [
          0.08,
          0.108,
          0.94,
          0.54
        ]
      }
    ],
    "verdict": "是",
    "tone": "yes",
    "coreTitle": "有隨機序列的依據，信封程序仍需保留判斷。",
    "core": [
      "方法一記載以電腦亂數表產生序號組別，放入密閉信封，再依入院順序分派。這支持實際採用隨機分派。",
      "未說明信封是否不透光、是否連續編號，以及由誰產生序列、保管或拆封；收案、介入與測量由同一研究者負責，分派隱蔽需列為未知。",
      "方便取樣指收案來源，不等於未隨機分派；其主要限制在研究結果的外推性。"
    ],
    "deep": [
      [
        "方便取樣不等於沒有隨機分派",
        "方便取樣是「哪些人進入研究」；隨機分派是「進入研究的人分到哪一組」。本文兩者並存。"
      ],
      [
        "分派隱蔽與盲法不同",
        "分派隱蔽發生在分組前，避免事先知道下一位會進哪一組；盲法則處理分組後，誰知道已接受哪個介入。"
      ],
      [
        "不要用一句「隨機」取代程序核對",
        "文章若只宣稱隨機，沒有交代產生方式，證據就不足。本文有寫電腦亂數，但信封操作資訊不完整。"
      ]
    ],
    "writing": "是。p.46 研究設計記載以電腦亂數表產生組別並使用密閉信封分派；但信封不透光、編號及操作人員等細節未交代，分派隱蔽是否充分無法判斷。",
    "transfer": "把「序列產生」和「分派隱蔽」各畫一條底線；若只有隨機二字，記錄缺少哪些程序。"
  },
  {
    "id": 3,
    "section": "A",
    "short": "追蹤與 ITT",
    "topic": "流程圖 · 退出 · 分析人數",
    "title": "所有進入試驗的受試者，是否在結束時被適當交代？",
    "english": "Were all participants who entered the study accounted for at its conclusion?",
    "plain": "先核對分派、追蹤、排除與分析人數，再看是否依原分派組別進行意向治療分析。",
    "prompt": "26 人變成 22 人：知道原因，就代表分析沒有問題嗎？",
    "consider": [
      [
        "是否交代失去追蹤及隨機分派後的排除？",
        "Were losses to follow-up and exclusions after randomisation accounted for?"
      ],
      [
        "是否依原隨機分派組別分析（ITT）？",
        "Were participants analysed in the study groups to which they were randomised (intention-to-treat analysis)?"
      ],
      [
        "研究是否提早終止？若有，原因為何？",
        "Was the study stopped early? If so, what was the reason?"
      ]
    ],
    "evidence": [
      {
        "key": "flow",
        "page": 3,
        "label": "p.47 流程圖",
        "quote": "兩組各 26 人；實驗組因住院與執行率不足，最後為 22 人。對照組維持 26 人。",
        "region": [
          0.08,
          0.108,
          0.94,
          0.54
        ]
      },
      {
        "key": "adherence",
        "page": 3,
        "label": "p.47 分析門檻",
        "quote": "原文規定個人執行率達 72% 才列入統計分析。這是辨識分派後排除的關鍵。",
        "find": [
          "訂定個人執行率達72%才列入統計分析"
        ]
      },
      {
        "key": "sample_analysis",
        "page": 4,
        "label": "p.48 分析人數",
        "quote": "結果段明列最後 48 人納入統計分析：實驗組 22 人、控制組 26 人，總流失率 7.7%。",
        "find": [
          "最後完成本研究共48人",
          "實驗組22人及控制組26人",
          "流失率為7.7%"
        ]
      },
      {
        "key": "results_table",
        "page": 7,
        "label": "p.51 分析樣本",
        "quote": "表二以 N = 48 呈現分析結果，須與原分派 52 人相互核對。",
        "region": [
          0.07,
          0.635,
          0.95,
          0.89
        ]
      }
    ],
    "verdict": "否",
    "tone": "no",
    "coreTitle": "人數有交代，ITT 原則卻未充分符合。",
    "core": [
      "隨機分派 52 人，最後分析 48 人（22 vs 26）。實驗組 1 人因胃穿孔住院退出、3 人因復健執行率低於 72% 而被排除；控制組無流失。文中報告整體流失率 7.7%。",
      "預設執行率達 72% 才納入分析，屬符合計畫分析，未保留所有隨機分派者，可能高估效果。",
      "4 人全部來自實驗組（4/26 vs 0/26），有差異性流失問題。",
      "退出時間記載不一致：p.48 文字為術後第 12 週，p.47 圖一標於 T2（第 6 週）。評讀文件記錄試驗未提早終止。"
    ],
    "deep": [
      [
        "ITT 是什麼？",
        "原則上依最初隨機分派組別分析所有被分派者；實務上也需交代缺失資料處理。不能因未充分配合介入就直接排除。"
      ],
      [
        "總流失率可能掩蓋組間差異",
        "總體為 4/52＝7.7%；實驗組未納入分析為 4/26＝15.4%，控制組為 0/26。這包含不同原因，不應全部稱為失去追蹤。"
      ],
      [
        "為什麼可能影響效果估計？",
        "留下較能配合運動的人，可能使結果偏向能執行介入者；效果可能被高估，但影響方向與程度不能單憑本文確定。GEE 本身也不等於 ITT。"
      ]
    ],
    "writing": "否。人數與排除原因有交代，但依執行率排除 3 人，未採 ITT；4 人全部來自實驗組（p.47–48、p.51 表二）。另住院退出時間在文字與圖一前後不一致。",
    "transfer": "把流程圖的人數一路加減核對，再讀統計分析及結果段，確認「最後誰真的進入分析」。"
  },
  {
    "id": 4,
    "section": "B",
    "short": "三個角色的盲法",
    "topic": "受試者 · 介入者 · 評估者",
    "title": "受試者、介入執行者及結果評估／分析者是否盲化？",
    "english": "(a) Were the participants ‘blind’ to intervention they were given? (b) Were the investigators ‘blind’ to the intervention they were giving to participants? (c) Were the people assessing/analysing outcome/s ‘blinded’?",
    "plain": "2024 將第 4 題標為 (a)、(b)、(c)。要分別辨識角色，不能只用「單盲」兩字回答全部。",
    "prompt": "作者寫「單盲」，到底是誰不知道分組？",
    "consider": [
      [
        "分別核對受試者、介入執行者、結果評估／分析者是否知道分組。",
        "Assess participants, investigators delivering the intervention, and people assessing/analysing outcomes separately.（教學整理，非額外官方題目）"
      ]
    ],
    "evidence": [
      {
        "key": "blind_label",
        "page": 2,
        "label": "p.46 設計與衛教",
        "quote": "研究自稱單盲；實驗組由研究者提供手冊、影片操作與運動回覆示教。",
        "find": [
          "本研究為單盲隨機控制組試驗",
          "實驗組由研究者在術後第3天一對一方式提供"
        ]
      },
      {
        "key": "blind_limit",
        "page": 8,
        "label": "p.52 研究限制",
        "quote": "作者明述介入措施及資料收集者為同一研究者，並承認可能有研究者主觀偏倚。",
        "find": [
          "介入措施及資料收集者為同一研究者",
          "研究者主觀偏倚"
        ]
      },
      {
        "key": "blind_collect",
        "page": 4,
        "label": "p.48 資料收集",
        "quote": "資料收集過程可用來核對研究者的介入及測量角色。",
        "find": [
          "六、資料收集過程",
          "於單獨診療間進行資料收集及測量"
        ]
      }
    ],
    "verdict": "分項判讀",
    "tone": "no",
    "coreTitle": "「單盲」是標籤，執行程序才是判讀依據。",
    "core": [
      "4(a)：文中自稱單盲，但未說明盲化對象。實驗組有視頻、手冊、電話與運動檢核表，可能察覺額外處置，但原文未明寫，不據此自行假設。疼痛為自評結果，可能受期待影響。",
      "4(b)：第一作者為具 22 年骨科經驗的專科護理師，於術後第 3 天提供一對一衛教，並負責電話諮詢，執行時知悉介入組別。",
      "4(c)：資料收集與量角器測量由同一研究者執行；作者在研究限制承認霍桑效應及主觀偏倚的可能。資料分析由黃曉令負責，是否盲化未說明。",
      "第 4 題應分項記錄，不能用單一「單盲」標籤替代各角色的判讀。"
    ],
    "deep": [
      [
        "不同角色會帶來不同偏差",
        "知道分組可能影響受試者的回報、介入者的對待，或評估者的測量與判讀。這些是可能的影響，不能直接斷言結果一定失真。"
      ],
      [
        "護理衛教不容易盲化，還可以怎麼做？",
        "即使介入者無法盲化，仍可考慮使用獨立且不知分組的評估者、標準化測量程序；這是評估可行改善方式，不是要求所有介入都能雙盲。"
      ],
      [
        "儀器測量不等於沒有評估偏差",
        "膝關節角度雖使用電子量角器，操作、引導和姿勢仍可能受評估程序影響。應檢查標準化與獨立性。"
      ]
    ],
    "writing": "4(a) 無法判斷：未說明單盲的對象。4(b) 否：研究者執行介入時知悉組別。4(c) 否：結果評估者與介入者相同；分析者是否盲化則無法判斷（p.46–48、p.52）。",
    "transfer": "在文獻旁分別寫「受試者／介入者／評估者／分析者」，每個角色各找一句依據。"
  },
  {
    "id": 5,
    "section": "B",
    "short": "起始特性是否相似",
    "topic": "基線表 · 臨床差異",
    "title": "隨機對照試驗開始時，各組是否相似？",
    "english": "Were the study groups similar at the start of the randomised controlled trial?",
    "plain": "讀表一的實際數值，檢查可能影響結果的起始特性。不能把 p > .05 當成兩組完全相同。",
    "prompt": "看到每個 p 值都大於 .05，就能停止比較嗎？",
    "consider": [
      [
        "是否清楚列出各組基線特性，例如年齡、性別及社經狀況？",
        "Were the baseline characteristics of each study group (e.g. age, sex, socio-economic group) clearly set out?"
      ],
      [
        "是否存在可能影響結果的組間差異？",
        "Were there any differences between the study groups that could affect the outcome/s?"
      ]
    ],
    "evidence": [
      {
        "key": "baseline",
        "page": 5,
        "label": "p.49 表一",
        "quote": "先比較年齡、性別、疾病與術前疼痛／角度，再看數字是否一致。表一的 TKR 經驗列也值得核對。",
        "region": [
          0.07,
          0.09,
          0.94,
          0.75
        ]
      },
      {
        "key": "baseline_text",
        "page": 4,
        "label": "p.48 結果敘述",
        "quote": "作者敘述二組人口及疾病特質無統計顯著差異；這是統計結果，仍需與表格數值交叉檢查。",
        "find": [
          "比較二組人口特質及疾病特質無統計顯著差異"
        ]
      }
    ],
    "verdict": "是",
    "tone": "yes",
    "coreTitle": "多項基線接近，表格仍有待核對之處。",
    "core": [
      "表一列出年齡、性別、BMI、慢性病、高血壓、糖尿病、TKR 經驗、手術部位、疼痛及關節角度等基準特性；各比較的 p 值均大於 .05。評讀文件整體判為基準相似。",
      "女性比例為 76.9% vs 61.5%，小樣本下未達顯著；p > .05 仍不代表完全相同。未提供社經、教育程度、照顧者及數位能力資料。",
      "基準比較使用 52 人，最終分析為 48 人；排除後兩組是否仍相似，未另呈現。",
      "表一 TKR 經驗的實驗組「無 4、有 22」與整體 41／11 不一致，疑似對調，應保留疑點而不自行修改原表。"
    ],
    "deep": [
      [
        "基線 p 值的限制",
        "小樣本即使存在差異，也可能沒有達統計顯著。評讀時看差異大小、預後相關性及是否有重要變項未列出。"
      ],
      [
        "表格查核也是評讀的一部分",
        "先檢查每組總數、百分比、加總與文字敘述。疑似排版或誤植時，寫出矛盾並保留判斷，不代替作者更正。"
      ]
    ],
    "writing": "是（整體基準特性相似）。表一及 p.48 結果提供多項基準比較，但須保留性別比例差異、TKR 經驗列疑似對調，以及排除 4 人後未重新呈現基準比較等限制。",
    "transfer": "至少選兩個可能影響結果的基線變項看實際數字，並核對各組人數與加總。"
  },
  {
    "id": 6,
    "section": "B",
    "short": "其他照護是否一致",
    "topic": "共同照護 · 共同追蹤",
    "title": "除實驗介入外，各組是否接受相同程度的照護？",
    "english": "Apart from the experimental intervention, did each study group receive the same level of care (that is, were they treated equally)?",
    "plain": "把預定比較的介入組合先圈出，再檢查其他治療、照護、測量與追蹤是否一致。",
    "prompt": "電話諮詢本來就是介入的一部分，能把它直接當作不公平照護嗎？",
    "consider": [
      [
        "是否有清楚定義的研究計畫？",
        "Was there a clearly defined study protocol?"
      ],
      [
        "若有額外檢查或治療，各組是否相似？",
        "If any additional interventions were given (e.g. tests or treatments), were they similar between the study groups?"
      ],
      [
        "各組追蹤間隔是否相同？",
        "Were the follow-up intervals the same for each study group?"
      ]
    ],
    "evidence": [
      {
        "key": "care",
        "page": 2,
        "label": "p.46 共同照護",
        "quote": "方法交代兩組於術前及住院期間皆接受常規治療及護理；出院衛教是預定比較的差異。",
        "find": [
          "二組病人於手術前及住院期間皆接受常規治療",
          "及護理"
        ]
      },
      {
        "key": "followup",
        "page": 4,
        "label": "p.48 追蹤與用藥",
        "quote": "兩組在相同術後時間點追蹤；結果另報告止痛藥使用天數不同，需連同照護程序與分析一起理解。",
        "find": [
          "分別為術後第1週",
          "術後第6週",
          "術後第12週",
          "術後第16週",
          "常規醫囑止痛藥為"
        ]
      }
    ],
    "verdict": "無法判斷",
    "tone": "uncertain",
    "coreTitle": "共同照護與追蹤有描述，但不能宣稱所有照護均相同。",
    "core": [
      "可確認兩組術前及住院期間接受常規治療與護理；常規止痛醫囑相同，且皆於術後第 1、6、12、16 週常規回診追蹤。",
      "未報告公開或註冊的研究計畫書；未描述常規出院衛教是否包含復健運動指導，也未交代出院後是否另接受門診物理治療等共同介入。",
      "實驗組接受一對一衛教及 4 次電話，接觸時間較多，可能有注意力效應。此為解釋整體介入效果時的限制，不能據此單獨否定預設介入組合的比較。",
      "因此無法由全文充分確認出院後兩組其他照護相同。"
    ],
    "deep": [
      [
        "研究比較的是整個介入組合",
        "本研究不能單獨證明影片、手冊或電話哪一項造成效果。這些成分一起構成實驗介入。"
      ],
      [
        "止痛藥天數不同，要怎麼讀？",
        "它可能是疼痛改善後的結果，也可能與照護及結果互相影響。本文 GEE 納入止痛藥天數調整，但調整不等於所有差異都已消除。"
      ]
    ],
    "writing": "無法判斷。方法一、六及 p.48 用藥段落支持住院照護、醫囑及追蹤間隔一致；但常規出院衛教與其他復健共同介入未完整交代，無法確認出院後受到同等照護。",
    "transfer": "先列出「設計上刻意不同」的介入內容，再查找本來應該一致的背景照護。"
  },
  {
    "id": 7,
    "section": "C",
    "short": "效果是否完整報告",
    "topic": "樣本數 · 多項結果 · 效果估計",
    "title": "介入措施的效果是否被完整報告？",
    "english": "Were the effects of intervention reported comprehensively?",
    "plain": "看有沒有交代樣本數規劃、各組各時間點結果、資料缺失及統計方法，也要注意未顯著的結果。",
    "prompt": "摘要寫有成效，是否代表疼痛與所有關節角度都改善？",
    "consider": [
      [
        "是否進行檢定力／樣本數計算？",
        "Was a power calculation undertaken?"
      ],
      [
        "測量哪些結果？是否清楚定義？",
        "What outcomes were measured, and were they clearly specified?"
      ],
      [
        "結果如何表達？二元結果是否報告相對及絕對效果？",
        "How were the results expressed? For binary outcomes, were relative and absolute effects reported?"
      ],
      [
        "是否報告各組、各結果、各追蹤時間點的資料？",
        "Were the results reported for each outcome in each study group at each follow-up interval?"
      ],
      [
        "是否有缺失或不完整資料？",
        "Was there any missing or incomplete data?"
      ],
      [
        "組間退出情形的不同是否可能影響結果？",
        "Was there differential drop-out between the study groups that could affect the results?"
      ],
      [
        "是否指出潛在偏差？",
        "Were potential sources of bias identified?"
      ],
      [
        "使用哪些統計檢定？",
        "Which statistical tests were used?"
      ],
      [
        "是否報告 p 值？",
        "Were p values reported?"
      ]
    ],
    "evidence": [
      {
        "key": "power",
        "page": 2,
        "label": "p.46 樣本數",
        "quote": "G*Power 規劃 effect size .33、α .05、power .80、兩組五次測量，考量流失後收案 52 人。",
        "find": [
          "樣本數計算方面",
          "設定effect size .33",
          "估算樣本數共46人"
        ]
      },
      {
        "key": "results_table",
        "page": 7,
        "label": "p.51 表二",
        "quote": "表二列 β、SE 與 p 值。第 16 週現在疼痛交互作用 β = −1.52；屈膝角度交互作用未達 .05。",
        "region": [
          0.07,
          0.635,
          0.95,
          0.89
        ]
      },
      {
        "key": "results_graph",
        "page": 6,
        "label": "p.50 圖二",
        "quote": "圖二呈現各時間點各組的疼痛值；圖上的兩組比較與表二的組別×時間交互作用不是同一個比較。",
        "region": [
          0.07,
          0.09,
          0.95,
          0.7
        ]
      },
      {
        "key": "study_tools",
        "page": 3,
        "label": "p.47 研究工具",
        "quote": "研究工具段落交代 VAS 量尺、再測信度及電子量角器資訊。",
        "find": [
          "四、研究工具",
          "視覺類比量表",
          "膝關節角度"
        ]
      },
      {
        "key": "analysis_methods",
        "page": 4,
        "label": "p.48 統計方法",
        "quote": "核對常態性、組間比較與 GEE 分析方式，以及遺漏資料處理的交代程度。",
        "find": [
          "七、資料處理與分析",
          "重複測",
          "廣義估計方程式"
        ]
      },
      {
        "key": "blind_limit",
        "page": 8,
        "label": "p.52 研究限制",
        "quote": "限制段落呈現作者已討論的偏差來源，另與評讀文件指出的限制相互核對。",
        "find": [
          "介入措施及資料收集者為同一研究者",
          "研究者主觀偏倚"
        ]
      }
    ],
    "verdict": "否",
    "tone": "no",
    "coreTitle": "報告多項結果，但要把「有成效」拆開閱讀。",
    "core": [
      "有 G*Power 3.1 計算：effect size .33、α .05、power .80、兩組重複測量 5 次，估計 46 人，加流失考量收 52 人；效果量取自 KOOS 功能研究，並非相同的疼痛或角度結果。",
      "VAS 再測信度 ICC .79；電子量角器誤差小於 1°，有描述測量程序。圖二、圖三呈現各時點平均值及 Mann-Whitney Z、p；表二呈現 GEE 的 β、SE、p。",
      "圖中未逐一列出各時點標準差，資料非常態卻以平均值呈現；未充分處理遺漏資料與差異性流失。",
      "GEE 使用術後第 1 週作參考，而非術前；將隨機分派後的止痛藥天數作共變項。評讀文件另指出多項結果與時間點未作多重比較校正、表二部分 p 值與 β/SE 不一致。",
      "偏差來源僅部分討論，實際運動執行率、控制組運動量及量角器在本研究中的信度未報告。"
    ],
    "deep": [
      [
        "用一個數字示範讀表二",
        "第 16 週「現在的疼痛」組別×時間 β = −1.52，是相對於參考組與參考時間的變化差；不是第 16 週兩組疼痛平均值直接相減，也不是每位病人都減少 1.52 分。"
      ],
      [
        "圖二與表二為何 p 值不同？",
        "圖二是該時間點的組間比較；表二是含參考時間的模型交互作用，且作者另納入變項調整。比較問題不同，數字不能互換。"
      ],
      [
        "連續結果不必硬套 RR 或 NNT",
        "本研究主要結果為疼痛分數及角度，應讀其量尺、平均值與模型效果。CASP 對二元結果的提示，不代表每篇都必須計算相對風險。"
      ]
    ],
    "writing": "否。雖有檢定力、測量程序及各時點圖表，結果報告仍缺變異程度、遺漏資料處理等資訊；差異性流失、GEE 參考點與共變項、多重比較及表格數值一致性亦需審慎檢查（p.46–48、50–52）。",
    "transfer": "先認清量尺與比較方式，再記錄「哪個結果、哪個時間、差多少」。也要找未顯著結果。"
  },
  {
    "id": 8,
    "section": "C",
    "short": "效果估計的精確度",
    "topic": "信賴區間 · SE 與 p 值",
    "title": "是否報告介入或治療效果估計的精確度？",
    "english": "Was the precision of the estimate of the intervention or treatment effect reported?",
    "plain": "效果不只有一個估計值，還有不確定範圍。CASP 特別提示檢查信賴區間。",
    "prompt": "表二有 β、SE 和 p 值，哪一個是 95% 信賴區間？",
    "consider": [
      [
        "是否報告信賴區間（CI）？",
        "Were confidence intervals (CIs) reported?"
      ]
    ],
    "evidence": [
      {
        "key": "precision_table",
        "page": 7,
        "label": "p.51 表二",
        "quote": "表二欄位為 β、SE、p 值，未直接列出 95% CI。檢查表頭與全文，不把 SE 或 p 值當成 CI。",
        "region": [
          0.07,
          0.635,
          0.95,
          0.89
        ]
      }
    ],
    "verdict": "否",
    "tone": "no",
    "coreTitle": "有標準誤資訊，但缺少直接呈現的信賴區間。",
    "core": [
      "全文未直接報告信賴區間，表二僅提供 β、SE 與 p 值。",
      "評讀者以 β ± 1.96×SE 推算第 16 週交互作用的近似區間：現在疼痛 -1.52（-2.74 至 -0.30）；最嚴重疼痛 -1.55（-2.90 至 -0.20）；平均疼痛 -1.24（-2.40 至 -0.08）；伸膝角度 -5.52°（-10.58 至 -0.46）。",
      "以上為評讀者推算，非原文已報告數值；需留意近似計算的模型與標準誤條件。區間較寬且上限接近 0，反映效果大小仍有不確定性。"
    ],
    "deep": [
      [
        "β、SE、CI 分別是什麼？",
        "β 是模型效果估計；SE 是該估計的標準誤；CI 用一段區間呈現估計的不確定性。SD 則描述個體資料的離散程度，不能直接互換。"
      ],
      [
        "教師可另行估算嗎？",
        "在適當的大樣本常態近似下，可用 β ± 1.96×SE 示範近似區間。但必須標示為另行計算，並確認模型及標準誤條件；不能說是作者原文已報告。"
      ],
      [
        "精確不等於沒有偏差",
        "即使區間很窄，也可能因分派、測量或排除方式產生偏差。精確度與研究可信度是不同面向。"
      ]
    ],
    "writing": "否。表二（p.51）未報告效果估計的 CI；雖可由 β、SE 另作近似推算，仍不能將評讀者計算視為原文已完整報告精確度。",
    "transfer": "看表頭找 CI 的上下界；找不到時寫清楚是否有 SE，以及缺少什麼，不自行補成原文數據。"
  },
  {
    "id": 9,
    "section": "C",
    "short": "效益、傷害與成本",
    "topic": "統計意義 · 臨床價值",
    "title": "實驗介入的效益是否大於傷害與成本？",
    "english": "Do the benefits of the experimental intervention outweigh the harms and costs?",
    "plain": "效果達顯著只是起點，還要看改善是否值得、是否有不良事件，以及執行需要付出什麼。",
    "prompt": "作者說安全且易於實施，文中有足夠的安全與成本資料支持嗎？",
    "consider": [
      [
        "介入或治療的效果有多大？",
        "What was the size of the intervention or treatment effect?"
      ],
      [
        "是否報告各組傷害或非預期效果？",
        "Were harms or unintended effects reported for each study group?"
      ],
      [
        "是否進行成本效果分析，以比較同一健康問題的不同介入？",
        "Was a cost-effectiveness analysis undertaken? (Cost-effectiveness analysis allows a comparison to be made between different interventions used in the care of the same condition or problem.)"
      ]
    ],
    "evidence": [
      {
        "key": "benefit",
        "page": 7,
        "label": "p.51 效果表",
        "quote": "可找出疼痛及伸膝角度的效果估計，但臨床重要程度仍須進一步評估。",
        "region": [
          0.07,
          0.635,
          0.95,
          0.89
        ]
      },
      {
        "key": "cost",
        "page": 3,
        "label": "p.47 電話與運動",
        "quote": "電話諮詢共 4 次，每次約 5–10 分鐘；居家運動另外需要病人投入時間。這是資源線索，不是成本效果分析。",
        "find": [
          "電話諮詢，共4次",
          "每次約5–10分鐘"
        ]
      },
      {
        "key": "safety",
        "page": 8,
        "label": "p.52 結論",
        "quote": "作者稱介入安全且易於實施，但全文未見兩組系統性不良事件彙整或正式成本效果分析。",
        "find": [
          "安全且易於實",
          "施的護理措施"
        ]
      },
      {
        "key": "results_graph",
        "page": 6,
        "label": "p.50 疼痛結果",
        "quote": "圖二提供第 16 週兩組疼痛平均值；不要與模型交互作用係數混為一談。",
        "region": [
          0.07,
          0.09,
          0.95,
          0.7
        ]
      }
    ],
    "verdict": "無法判斷",
    "tone": "uncertain",
    "coreTitle": "有部分效益訊號，尚不足以完成效益—傷害—成本權衡。",
    "core": [
      "第 16 週現在疼痛為 1.5 vs 2.8，VAS 約差 1.3 分；伸膝角度 16.5° vs 21.0°，差 4.5°；屈膝角度未達顯著。止痛藥天數為 13.4 vs 21.8 天。",
      "未系統性報告跌倒、傷口問題或運動傷害等不良事件。實驗組有 1 例胃穿孔，原文未討論其與介入或用藥的關係，不可自行建立因果。",
      "評讀文件亦注意到常規醫囑列有兩種 NSAIDs，但本研究未提供足以判定傷害歸因的安全資料。",
      "未做成本或成本效果分析，作者稱介入安全缺乏完整安全資料支持。看似低成本、低風險仍屬推論。"
    ],
    "deep": [
      [
        "胃穿孔可以直接歸因於介入嗎？",
        "流程圖記載 1 人因胃穿孔住院，但本文未確立與衛教／運動的因果關係。可以記錄事件，不能自行判定為介入造成。"
      ],
      [
        "統計顯著與臨床重要不同",
        "差異是否讓病人更能行走、睡眠或生活，需要臨床重要差異、功能資料與病人偏好支持；p < .05 本身不能回答。"
      ]
    ],
    "writing": "無法判斷。雖有疼痛及伸膝角度改善資料，仍缺乏完整不良事件與成本分析；原文不足以確認效益大於傷害及成本（p.48、50–52）。",
    "transfer": "把效益、傷害與成本分成三欄。哪一欄資料不足，就明確寫出，不以作者結論代替查核。"
  },
  {
    "id": 10,
    "section": "D",
    "short": "能否用在我的病人",
    "topic": "外部適用性 · 病人情境",
    "title": "研究結果能否應用於你的當地族群與照護情境？",
    "english": "Can the results be applied to your local population/in your context?",
    "plain": "先設定一個照護情境，再比較病人、設備、介入能力與重視的結果。這題需要文獻加上情境判斷。",
    "prompt": "若病人家中不能觀看影片，還能直接套用這個方案嗎？",
    "consider": [
      [
        "研究參與者是否與你照顧的人相似？",
        "Are the study participants similar to the people in your care?"
      ],
      [
        "族群差異是否可能改變研究結果？",
        "Would any differences between your population and the study participants alter the outcomes reported in the study?"
      ],
      [
        "這些結果對你的族群是否重要？",
        "Are the outcomes important to your population?"
      ],
      [
        "是否有你需要但未被研究或報告的結果？",
        "Are there any outcomes you would have wanted information on that have not been studied or reported?"
      ],
      [
        "研究限制是否影響你的決策？",
        "Are there any limitations of the study that would affect your decision?"
      ]
    ],
    "evidence": [
      {
        "key": "population",
        "page": 2,
        "label": "p.46 納入／排除",
        "quote": "納入 65 歲以上單側 TKR 病人；排除無法運動及家中無觀看 YouTube 設施者。",
        "find": [
          "年齡65",
          "家中無觀看YouTube衛教影片之設施"
        ]
      },
      {
        "key": "limits",
        "page": 8,
        "label": "p.52 研究限制",
        "quote": "單一機構、僅追蹤術後 16 週，作者指出推論及長期效益的限制。",
        "find": [
          "收案地點僅單一",
          "研究追蹤術後16週",
          "長期效益未知"
        ]
      }
    ],
    "verdict": "是",
    "tone": "yes",
    "coreTitle": "適用性需要比較，不能只因研究在台灣就判「是」。",
    "core": [
      "依評讀文件採用的在地情境，研究對象為台灣區域教學醫院的老年 TKR 病人，止痛醫囑及回診模式與國內臨床相近，具有應用參考性。",
      "排除家中無法觀看 YouTube、雙側或再置換者；單一機構且僅追蹤 16 週，適用範圍應保留。",
      "疼痛與關節活動度為復原重要指標；尚缺 KOOS／WOMAC 等身體功能、生活品質、跌倒、再入院、滿意度、實際運動執行率及長期效果。",
      "本題的適用性判讀不等於已證明更有價值或足以直接改變常規實務，須與第 9、11 題合併考量。"
    ],
    "deep": [
      [
        "不要替沒有設定的情境回答",
        "如果沒有提供當地病人與照護條件，就寫尚需哪些資訊。這題不是只在原文找一句「可供臨床應用」。"
      ],
      [
        "缺少哪些病人重視的結果？",
        "本文重點為疼痛與角度；若決策還需要日常功能、生活品質或長期安全資料，應列為資訊缺口，不假設已有證明。"
      ]
    ],
    "writing": "是（就相近的國內老年 TKR 照護情境而言）。研究族群及回診模式有應用參考性；但須注意影片設備、運動能力、單一機構、16 週追蹤與未測量的重要結果等限制（p.46、52）。",
    "transfer": "先寫一個具體病人情境，再用「相似／不同／缺少資訊」三項比較，不只寫適用或不適用。"
  },
  {
    "id": 11,
    "section": "D",
    "short": "是否比現行照護有價值",
    "topic": "資源 · 可行性 · 決策",
    "title": "相較現行介入，這項介入能為照護對象帶來更大價值嗎？",
    "english": "Would the experimental intervention provide greater value to the people in your care than any of the existing interventions?",
    "plain": "把研究效果放回現場：誰執行、需要多久、要哪些設備與訓練，以及能否調整現行照護。",
    "prompt": "有手冊和影片就夠了嗎？電話追蹤與人員訓練由誰負責？",
    "consider": [
      [
        "導入介入需要哪些時間、經費、技能發展或訓練資源？",
        "What resources are needed to introduce this intervention taking into account time, finances, and skills development or training needs?"
      ],
      [
        "能否調整現有介入的資源，以投入新介入？",
        "Are you able to disinvest resources in one or more existing interventions in order to be able to re-invest in the new intervention?"
      ]
    ],
    "evidence": [
      {
        "key": "resources",
        "page": 2,
        "label": "p.46 衛教方案",
        "quote": "包括教材製作、影片操作、一對一衛教與回覆示教；執行者具長期骨科專科護理經驗。",
        "find": [
          "研究者是經過受訓合格之骨科專科護理",
          "22年骨科專科護理經歷",
          "回覆示教"
        ]
      },
      {
        "key": "phone",
        "page": 3,
        "label": "p.47 追蹤安排",
        "quote": "病人每日紀錄運動、返診帶回檢核表；返家後共有 4 次電話諮詢，每次約 5–10 分鐘。",
        "find": [
          "自我運動執行檢核表",
          "電話諮詢，共4次",
          "每次約5–10分鐘"
        ]
      },
      {
        "key": "clinical_application",
        "page": 8,
        "label": "p.52 臨床應用",
        "quote": "臨床應用段落提出將復健衛教納入出院計畫的建議；仍須另評估資源與其他方案。",
        "find": [
          "臨床應用",
          "應納入出院護",
          "理計畫"
        ]
      }
    ],
    "verdict": "無法判斷",
    "tone": "uncertain",
    "coreTitle": "可列出導入條件，尚不能直接證明比現行照護更有價值。",
    "core": [
      "所需資源包括印製手冊、既有影片、術後第 3 天一對一衛教，以及出院後 4 次、每次 5–10 分鐘電話。",
      "可考慮整合現行出院衛教；研究由資深專科護理師執行，推廣需評估護理人員的培訓與品質。低投資的可行性仍須在地確認。",
      "僅與常規衛教比較，未與物理治療師主導或其他遠距復健模式比較。未採 ITT、評估者未盲化及差異性流失，也可能影響效果大小。",
      "第 9 題的效益、傷害與成本尚無法充分權衡，不能僅以資源需求少就認定比現行照護更有價值。"
    ],
    "deep": [
      [
        "第 9 題與第 11 題差在哪？",
        "第 9 題偏向檢查研究提供的效益、傷害與成本證據；第 11 題將證據放進自己的服務，評估相較現行照護的價值與資源安排。"
      ],
      [
        "可怎麼提出具體建議？",
        "例如先評估現行出院衛教缺口、安排小規模試行，追蹤疼痛、功能、執行率、不良事件與工時。這是教師提出的實施建議，並非本研究已完成的結果。"
      ]
    ],
    "writing": "無法判斷。介入可能整合現行衛教，但仍缺與其他照護方案的完整效益、傷害及成本比較，無法確定更有價值（p.46–47、52）。",
    "transfer": "把「值得採用」改寫為具體條件：適合誰、誰執行、需多少資源、如何追蹤成效與安全。"
  }
];
window.CASP_APPRAISAL_SUMMARY = {
  "positive": [
    "PICO 明確；本土化介入具體（手冊 CVI .91、視頻、電話）",
    "電腦亂數隨機分派",
    "基準特性整體相似，另保留表格疑點",
    "有樣本數計算；工具有信效度或精確度說明",
    "重複測量以 GEE 分析並控制年齡、性別",
    "經 IRB 審查、有知情同意",
    "作者自述主要研究限制"
  ],
  "negative": [
    "符合計畫分析：排除執行率低於 72% 者，未採 ITT",
    "流失集中於實驗組（4/26 vs 0/26）",
    "給予介入者與結果評估者為同一位未盲化研究者",
    "未報告 CI；未做多重比較校正",
    "GEE 未以術前為參考，且控制隨機後變項",
    "表一、表二、圖一有前後不一致之處",
    "屈膝角度未達顯著；安全結論缺乏完整資料"
  ],
  "unknown": [
    "分派隱蔽的信封操作細節",
    "單盲的對象與資料分析者是否盲化",
    "常規衛教內容及出院後共同介入",
    "傷害與成本資料",
    "16 週後的長期效果",
    "實際運動執行率分布"
  ],
  "conclusion": "依本次評讀，研究支持以視頻及電話追蹤強化出院衛教的應用參考，但未採 ITT、評估者未盲化及差異性流失可能影響效果估計；僅憑此研究，尚不足以改變常規實務。",
  "source": "判讀依據：2024 中文版評讀結果，2026 年 11 月 19 日。"
};
