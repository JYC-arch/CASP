/* CASP RCT Checklist (2024), CC BY-NC-SA 4.0.
 * Chinese questions and appraisal imported from the supplied Markdown assessment. */
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
        "4(a) 受試者是否對其接受的介入措施盲化？",
        "無法判斷"
      ],
      [
        "4(b) 研究者（給予介入者）是否對其給予受試者的介入措施盲化？",
        "否"
      ],
      [
        "4(c) 評估／分析結果的人員是否盲化？",
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
    "title": "這項研究是否提出一個建構清楚的研究問題？",
    "english": "Did the study address a clearly formulated research question?",
    "plain": "先說清楚：研究哪些人、給什麼介入、與什麼比較，以及測量什麼結果。",
    "prompt": "不只看題目：你能從文獻找齊 P、I、C、O 嗎？",
    "consider": [
      [
        "此研究是否設計來評估一種介入的結果？",
        "Was the study designed to assess the outcomes of an intervention?"
      ],
      [
        "研究問題是否依下列要素「建構」：研究族群、介入措施、對照組的選擇、結果測量？",
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
      "研究目的為「測試混合式衛教對膝關節置換術老年病人術後疼痛及膝關節角度之成效」，屬評估介入結果之設計。",
      "P：北部某區域教學醫院骨科病房，≥65 歲、診斷退化性膝關節炎接受單側 TKR 之病人，N = 52（每組 26 人）。",
      "I：混合式衛教，含衛教手冊（內容效度指標 .91）、YouTube 復健運動視頻、一對一衛教與回覆示教、出院後每月 1 次電話諮詢共 4 次；居家運動每日 2 次、每次 15 分鐘，共 16 週。",
      "C：常規出院衛教。O：VAS 0–10「現在的疼痛」「過去 1 週最嚴重疼痛」「過去 1 週平均疼痛」；電子量角器測伸膝、屈膝角度；測量時間為術前 T0 及術後第 1、6、12、16 週。",
      "不足：常規衛教內容未描述；未指定單一主要結果，共 5 個結果變項。"
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
    "writing": "是。不足：常規衛教內容未描述；未指定單一主要結果，共 5 個結果變項。 文獻對應位置：摘要「目的」「方法」；前言末段（p.46）；方法一至四（p.46–47）；圖一（p.47）。",
    "transfer": "不要只抄研究題目。用四行寫出 P、I、C、O，缺少的要素再回到研究方法找。",
    "sourceSections": [
      {
        "id": "1",
        "title": "這項研究是否提出一個建構清楚的研究問題？",
        "english": "Did the study address a clearly formulated research question?",
        "answer": "是",
        "reasons": [
          "研究目的為「測試混合式衛教對膝關節置換術老年病人術後疼痛及膝關節角度之成效」，屬評估介入結果之設計。",
          "P：北部某區域教學醫院骨科病房，≥65 歲、診斷退化性膝關節炎接受單側 TKR 之病人，N = 52（每組 26 人）。",
          "I：混合式衛教，含衛教手冊（內容效度指標 .91）、YouTube 復健運動視頻、一對一衛教與回覆示教、出院後每月 1 次電話諮詢共 4 次；居家運動每日 2 次、每次 15 分鐘，共 16 週。",
          "C：常規出院衛教。O：VAS 0–10「現在的疼痛」「過去 1 週最嚴重疼痛」「過去 1 週平均疼痛」；電子量角器測伸膝、屈膝角度；測量時間為術前 T0 及術後第 1、6、12、16 週。",
          "不足：常規衛教內容未描述；未指定單一主要結果，共 5 個結果變項。"
        ],
        "location": "摘要「目的」「方法」；前言末段（p.46）；方法一至四（p.46–47）；圖一（p.47）。",
        "considers": [
          "此研究是否設計來評估一種介入的結果？",
          "研究問題是否依下列要素「建構」：研究族群、介入措施、對照組的選擇、結果測量？"
        ]
      }
    ],
    "sourceLocation": "1：摘要「目的」「方法」；前言末段（p.46）；方法一至四（p.46–47）；圖一（p.47）。"
  },
  {
    "id": 2,
    "section": "A",
    "short": "隨機分派",
    "topic": "隨機序列 · 分派隱蔽",
    "title": "受試者是否被隨機分派到不同組別？",
    "english": "Was the assignment of participants to interventions randomised?",
    "plain": "分開檢查「分組順序怎麼產生」與「分組前能否預知下一組」。兩者都會影響分派偏差。",
    "prompt": "電腦亂數表與密閉信封，分別在解決什麼問題？",
    "consider": [
      [
        "隨機分配方式為何？該方法是否合適？",
        "How was randomisation carried out? Was the method appropriate?"
      ],
      [
        "隨機分配方式是否足以消除系統性偏差？",
        "Was randomisation sufficient to eliminate systematic bias?"
      ],
      [
        "分配序號是否對研究者與受試者隱藏？",
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
      "以電腦亂數表產生序號組別，放入密閉信封，再依入院順序分派，方法適當。",
      "分配隱藏無法判斷：未說明信封是否不透光、是否連續編號、由誰產生與拆封；且收案、介入、測量皆為同一研究者。",
      "「方便取樣」指收案來源，不影響分派的隨機性，但會限制外推性。"
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
    "writing": "是。整體判定「是」：受試者確有隨機分派；隱藏細節不足列入「未知」。 文獻對應位置：方法「一、研究設計」（p.46）；圖一「隨機」（p.47）。",
    "transfer": "把「序列產生」和「分派隱蔽」各畫一條底線；若只有隨機二字，記錄缺少哪些程序。",
    "sourceSections": [
      {
        "id": "2",
        "title": "受試者是否被隨機分派到不同組別？",
        "english": "Was the assignment of participants to interventions randomised?",
        "answer": "是",
        "reasons": [
          "以電腦亂數表產生序號組別，放入密閉信封，再依入院順序分派，方法適當。",
          "分配隱藏無法判斷：未說明信封是否不透光、是否連續編號、由誰產生與拆封；且收案、介入、測量皆為同一研究者。",
          "「方便取樣」指收案來源，不影響分派的隨機性，但會限制外推性。",
          "整體判定「是」：受試者確有隨機分派；隱藏細節不足列入「未知」。"
        ],
        "location": "方法「一、研究設計」（p.46）；圖一「隨機」（p.47）。",
        "considers": [
          "隨機分配方式為何？該方法是否合適？",
          "隨機分配方式是否足以消除系統性偏差？",
          "分配序號是否對研究者與受試者隱藏？"
        ]
      }
    ],
    "sourceLocation": "2：方法「一、研究設計」（p.46）；圖一「隨機」（p.47）。"
  },
  {
    "id": 3,
    "section": "A",
    "short": "追蹤與 ITT",
    "topic": "流程圖 · 退出 · 分析人數",
    "title": "是否所有進入試驗的受試者在研究結論當中均被適當的考量過？",
    "english": "Were all participants who entered the study accounted for at its conclusion?",
    "plain": "先核對分派、追蹤、排除與分析人數，再看是否依原分派組別進行意向治療分析。",
    "prompt": "26 人變成 22 人：知道原因，就代表分析沒有問題嗎？",
    "consider": [
      [
        "隨機分配後失去追蹤與被排除的受試者是否都有交代？",
        "Were losses to follow-up and exclusions after randomisation accounted for?"
      ],
      [
        "受試者是否按照他們被隨機分配的組別進行分析（治療意向分析法）？",
        "Were participants analysed in the study groups to which they were randomised (intention-to-treat analysis)?"
      ],
      [
        "試驗是否提早終止？若有，原因為何？",
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
      "隨機 52 人，分析 48 人（22 vs 26）。實驗組 1 人因胃穿孔住院退出、3 人復健執行率 < 72% 被排除；控制組無流失；文中流失率 7.7%。",
      "未採治療意向分析：研究者預設「個人執行率達 72% 才列入統計分析」，屬符合計畫分析，容易高估效果。",
      "差異性流失：4 人全部來自實驗組（4/26 vs 0/26）。",
      "退出時間點前後不一：文字為術後第 12 週，圖一標示於 T2（第 6 週）。試驗未提早終止。"
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
    "writing": "否。退出時間點前後不一：文字為術後第 12 週，圖一標示於 T2（第 6 週）。試驗未提早終止。 文獻對應位置：方法三末段（p.47）；結果第 1 段（p.48）；圖一（p.47）；表二 N = 48（p.51）。",
    "transfer": "把流程圖的人數一路加減核對，再讀統計分析及結果段，確認「最後誰真的進入分析」。",
    "sourceSections": [
      {
        "id": "3",
        "title": "是否所有進入試驗的受試者在研究結論當中均被適當的考量過？",
        "english": "Were all participants who entered the study accounted for at its conclusion?",
        "answer": "否",
        "reasons": [
          "隨機 52 人，分析 48 人（22 vs 26）。實驗組 1 人因胃穿孔住院退出、3 人復健執行率 < 72% 被排除；控制組無流失；文中流失率 7.7%。",
          "未採治療意向分析：研究者預設「個人執行率達 72% 才列入統計分析」，屬符合計畫分析，容易高估效果。",
          "差異性流失：4 人全部來自實驗組（4/26 vs 0/26）。",
          "退出時間點前後不一：文字為術後第 12 週，圖一標示於 T2（第 6 週）。試驗未提早終止。"
        ],
        "location": "方法三末段（p.47）；結果第 1 段（p.48）；圖一（p.47）；表二 N = 48（p.51）。",
        "considers": [
          "隨機分配後失去追蹤與被排除的受試者是否都有交代？",
          "受試者是否按照他們被隨機分配的組別進行分析（治療意向分析法）？",
          "試驗是否提早終止？若有，原因為何？"
        ]
      }
    ],
    "sourceLocation": "3：方法三末段（p.47）；結果第 1 段（p.48）；圖一（p.47）；表二 N = 48（p.51）。"
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
        "受試者是否對其接受的介入措施盲化？",
        "Were the participants ‘blind’ to intervention they were given?"
      ],
      [
        "研究者（給予介入者）是否對其給予受試者的介入措施盲化？",
        "Were the investigators ‘blind’ to the intervention they were giving to participants?"
      ],
      [
        "評估／分析結果的人員是否盲化？",
        "Were the people assessing/analysing outcome/s ‘blinded’?"
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
      "4(a) 文中自稱「單盲」，但未說明盲化的對象是誰。",
      "4(a) 實驗組另有視頻、手冊、電話與運動檢核表，受試者可能察覺自己接受額外處置，但文中未明寫；依 2024 年版原則不做假設。",
      "4(a) 疼痛為自評指標，易受受試者期待影響。",
      "4(b) 第一作者（具 22 年經驗的骨科專科護理師）於術後第 3 天一對一提供衛教，並負責所有電話諮詢，必然知道受試者組別。",
      "4(b) 衛教類介入本質上無法對給予者盲化。",
      "4(c) 評估者：資料收集與量角器測量皆由同一研究者執行，作者自述「不排除霍桑效應及研究者主觀偏倚」。",
      "4(c) 分析者：由黃曉令負責資料分析，是否盲化未說明（此部分無法判斷）。"
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
    "writing": "4(a) 無法判斷；4(b) 否；4(c) 否。因結果評估者確定未盲化，本題判定「否」。",
    "transfer": "在文獻旁分別寫「受試者／介入者／評估者／分析者」，每個角色各找一句依據。",
    "sourceSections": [
      {
        "id": "4(a)",
        "title": "受試者是否對其接受的介入措施盲化？",
        "english": "Were the participants ‘blind’ to intervention they were given?",
        "answer": "無法判斷",
        "reasons": [
          "文中自稱「單盲」，但未說明盲化的對象是誰。",
          "實驗組另有視頻、手冊、電話與運動檢核表，受試者可能察覺自己接受額外處置，但文中未明寫；依 2024 年版原則不做假設。",
          "疼痛為自評指標，易受受試者期待影響。"
        ],
        "location": "摘要「方法」；方法一（p.46）；方法五「倫理考量」（p.48）。",
        "considers": []
      },
      {
        "id": "4(b)",
        "title": "研究者（給予介入者）是否對其給予受試者的介入措施盲化？",
        "english": "Were the investigators ‘blind’ to the intervention they were giving to participants?",
        "answer": "否",
        "reasons": [
          "第一作者（具 22 年經驗的骨科專科護理師）於術後第 3 天一對一提供衛教，並負責所有電話諮詢，必然知道受試者組別。",
          "衛教類介入本質上無法對給予者盲化。"
        ],
        "location": "方法三第 2 段（p.46–47）；作者貢獻度（p.52）。",
        "considers": []
      },
      {
        "id": "4(c)",
        "title": "評估／分析結果的人員是否盲化？",
        "english": "Were the people assessing/analysing outcome/s ‘blinded’?",
        "answer": "否",
        "reasons": [
          "評估者：資料收集與量角器測量皆由同一研究者執行，作者自述「不排除霍桑效應及研究者主觀偏倚」。",
          "分析者：由黃曉令負責資料分析，是否盲化未說明（此部分無法判斷）。",
          "因結果評估者確定未盲化，本題判定「否」。"
        ],
        "location": "方法「六、資料收集過程」（p.48）；研究限制第三點（p.52）；作者貢獻度（p.52）。",
        "considers": []
      }
    ],
    "sourceLocation": "4(a)：摘要「方法」；方法一（p.46）；方法五「倫理考量」（p.48）。；4(b)：方法三第 2 段（p.46–47）；作者貢獻度（p.52）。；4(c)：方法「六、資料收集過程」（p.48）；研究限制第三點（p.52）；作者貢獻度（p.52）。"
  },
  {
    "id": 5,
    "section": "B",
    "short": "起始特性是否相似",
    "topic": "基線表 · 臨床差異",
    "title": "各組研究對象在一開始進入試驗時的基本特性是否相似？",
    "english": "Were the study groups similar at the start of the randomised controlled trial?",
    "plain": "讀表一的實際數值，檢查可能影響結果的起始特性。不能把 p > .05 當成兩組完全相同。",
    "prompt": "看到每個 p 值都大於 .05，就能停止比較嗎？",
    "consider": [
      [
        "文章中是否清楚呈現各組的基本特徵（如：年齡、性別、社經地位）？",
        "Were the baseline characteristics of each study group (e.g. age, sex, socio-economic group) clearly set out?"
      ],
      [
        "組間是否存在可能影響結果的差別？",
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
      "表一比較 11 項基準特性（年齡、性別、BMI、慢性病、高血壓、糖尿病、TKR 經驗、手術部位、3 項疼痛、伸膝與屈膝角度），所有 p > .05。",
      "保留：女性比例 76.9% vs 61.5%（小樣本下未達顯著）；未提供社經、教育程度、照顧者或數位能力資料；基準以 52 人比較、分析卻為 48 人，排除後兩組是否仍相似未呈現。",
      "表一「TKR 經驗」實驗組數據疑似對調（無 4、有 22，與總數 41／11 不符）。"
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
    "writing": "是。表一「TKR 經驗」實驗組數據疑似對調（無 4、有 22，與總數 41／11 不符）。 文獻對應位置：表一（p.49）；結果第 2 段（p.48）。",
    "transfer": "至少選兩個可能影響結果的基線變項看實際數字，並核對各組人數與加總。",
    "sourceSections": [
      {
        "id": "5",
        "title": "各組研究對象在一開始進入試驗時的基本特性是否相似？",
        "english": "Were the study groups similar at the start of the randomised controlled trial?",
        "answer": "是",
        "reasons": [
          "表一比較 11 項基準特性（年齡、性別、BMI、慢性病、高血壓、糖尿病、TKR 經驗、手術部位、3 項疼痛、伸膝與屈膝角度），所有 p > .05。",
          "保留：女性比例 76.9% vs 61.5%（小樣本下未達顯著）；未提供社經、教育程度、照顧者或數位能力資料；基準以 52 人比較、分析卻為 48 人，排除後兩組是否仍相似未呈現。",
          "表一「TKR 經驗」實驗組數據疑似對調（無 4、有 22，與總數 41／11 不符）。"
        ],
        "location": "表一（p.49）；結果第 2 段（p.48）。",
        "considers": [
          "文章中是否清楚呈現各組的基本特徵（如：年齡、性別、社經地位）？",
          "組間是否存在可能影響結果的差別？"
        ]
      }
    ],
    "sourceLocation": "5：表一（p.49）；結果第 2 段（p.48）。"
  },
  {
    "id": 6,
    "section": "B",
    "short": "其他照護是否一致",
    "topic": "共同照護 · 共同追蹤",
    "title": "除了實驗的介入措施之外，各組是否接受相同程度的照護（亦即是否受到同等對待）？",
    "english": "Apart from the experimental intervention, did each study group receive the same level of care (that is, were they treated equally)?",
    "plain": "把預定比較的介入組合先圈出，再檢查其他治療、照護、測量與追蹤是否一致。",
    "prompt": "電話諮詢本來就是介入的一部分，能把它直接當作不公平照護嗎？",
    "consider": [
      [
        "試驗計畫是否清楚定義？",
        "Was there a clearly defined study protocol?"
      ],
      [
        "若有給予額外介入（如：檢查或治療），各組給予的介入是否相似？",
        "If any additional interventions were given (e.g. tests or treatments), were they similar between the study groups?"
      ],
      [
        "各組的追蹤間隔是否相同？",
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
      "文中可確認相同者：術前與住院期間皆接受常規治療及護理；常規止痛醫囑相同（acemetacin 90 mg bid、celecoxib 200 mg qd）；兩組皆於常規回診的第 1、6、12、16 週追蹤。",
      "未報告者：已註冊或公開的研究計畫書；「常規出院衛教」的內容（是否含復健運動指導）；出院後是否另接受門診物理治療等共同介入。",
      "實驗組接觸時間較多（一對一衛教＋4 次電話），可能有注意力效應。",
      "出院後兩組照護是否相同，無法由文獻確認。"
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
    "writing": "無法判斷。出院後兩組照護是否相同，無法由文獻確認。 文獻對應位置：方法一、六（p.46、48）；結果第 3 段止痛藥使用（p.48）。",
    "transfer": "先列出「設計上刻意不同」的介入內容，再查找本來應該一致的背景照護。",
    "sourceSections": [
      {
        "id": "6",
        "title": "除了實驗的介入措施之外，各組是否接受相同程度的照護（亦即是否受到同等對待）？",
        "english": "Apart from the experimental intervention, did each study group receive the same level of care (that is, were they treated equally)?",
        "answer": "無法判斷",
        "reasons": [
          "文中可確認相同者：術前與住院期間皆接受常規治療及護理；常規止痛醫囑相同（acemetacin 90 mg bid、celecoxib 200 mg qd）；兩組皆於常規回診的第 1、6、12、16 週追蹤。",
          "未報告者：已註冊或公開的研究計畫書；「常規出院衛教」的內容（是否含復健運動指導）；出院後是否另接受門診物理治療等共同介入。",
          "實驗組接觸時間較多（一對一衛教＋4 次電話），可能有注意力效應。",
          "出院後兩組照護是否相同，無法由文獻確認。"
        ],
        "location": "方法一、六（p.46、48）；結果第 3 段止痛藥使用（p.48）。",
        "considers": [
          "試驗計畫是否清楚定義？",
          "若有給予額外介入（如：檢查或治療），各組給予的介入是否相似？",
          "各組的追蹤間隔是否相同？"
        ]
      }
    ],
    "sourceLocation": "6：方法一、六（p.46、48）；結果第 3 段止痛藥使用（p.48）。"
  },
  {
    "id": 7,
    "section": "C",
    "short": "效果是否完整報告",
    "topic": "樣本數 · 多項結果 · 效果估計",
    "title": "介入措施的效果是否有被完整報告？",
    "english": "Were the effects of intervention reported comprehensively?",
    "plain": "看有沒有交代樣本數規劃、各組各時間點結果、資料缺失及統計方法，也要注意未顯著的結果。",
    "prompt": "摘要寫有成效，是否代表疼痛與所有關節角度都改善？",
    "consider": [
      [
        "檢定力計算、結果定義、結果表達方式、各組各次追蹤各項結果、遺漏資料、組間退出率差異、偏差來源、統計方法、p 值。",
        "Was a power calculation undertaken? What outcomes were measured, and were they clearly specified? How were the results expressed? For binary outcomes, were relative and absolute effects reported? Were the results reported for each outcome in each study group at each follow-up interval? Was there any missing or incomplete data? Was there differential drop-out between the study groups that could affect the results? Were potential sources of bias identified? Which statistical tests were used? Were p values reported?"
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
      "有檢定力計算：G*Power 3.1，effect size .33、α .05、power .80、2 組重複測量 5 次，估 46 人，加 10% 流失收 52 人。但效果量取自 KOOS 功能研究，而非疼痛或關節角度。",
      "結果指標定義清楚：VAS（再測信度 ICC .79）；電子量角器（誤差 < 1°），並描述測量程序。",
      "各組各次追蹤各項結果皆有報告（圖二、圖三為各時間點平均值與 Mann-Whitney Z、p；表二為 GEE 的 β、SE、p）。統計方法：卡方、t 檢定、Mann-Whitney U、GEE；有列 p 值。",
      "限制：圖中未列各時間點標準差；資料非常態卻只報平均值；差異性流失且未處理遺漏資料；GEE 以第 1 週而非術前為參考點；以隨機後變項（止痛藥天數）為共變項；5 個結果 × 4 時間點未做多重比較校正；表二部分 p 值與 β/SE 不符。",
      "偏差來源僅部分列出（單一機構、霍桑效應、研究者主觀偏倚）；實際運動執行率、控制組運動量、量角器在本研究的信度皆未報告。"
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
    "writing": "否。判定「否」：各時間點結果只有平均值、沒有標準差或中位數，遺漏資料與差異性流失也未處理；雖然多數項目有出現，但報告並不完整。 文獻對應位置：方法二樣本數計算（p.46）、四研究工具（p.47）、七資料分析（p.48）；圖二（p.50）；圖三、表二（p.51）；研究限制（p.52）。",
    "transfer": "先認清量尺與比較方式，再記錄「哪個結果、哪個時間、差多少」。也要找未顯著結果。",
    "sourceSections": [
      {
        "id": "7",
        "title": "介入措施的效果是否有被完整報告？",
        "english": "Were the effects of intervention reported comprehensively?",
        "answer": "否",
        "reasons": [
          "有檢定力計算：G*Power 3.1，effect size .33、α .05、power .80、2 組重複測量 5 次，估 46 人，加 10% 流失收 52 人。但效果量取自 KOOS 功能研究，而非疼痛或關節角度。",
          "結果指標定義清楚：VAS（再測信度 ICC .79）；電子量角器（誤差 < 1°），並描述測量程序。",
          "各組各次追蹤各項結果皆有報告（圖二、圖三為各時間點平均值與 Mann-Whitney Z、p；表二為 GEE 的 β、SE、p）。統計方法：卡方、t 檢定、Mann-Whitney U、GEE；有列 p 值。",
          "限制：圖中未列各時間點標準差；資料非常態卻只報平均值；差異性流失且未處理遺漏資料；GEE 以第 1 週而非術前為參考點；以隨機後變項（止痛藥天數）為共變項；5 個結果 × 4 時間點未做多重比較校正；表二部分 p 值與 β/SE 不符。",
          "偏差來源僅部分列出（單一機構、霍桑效應、研究者主觀偏倚）；實際運動執行率、控制組運動量、量角器在本研究的信度皆未報告。",
          "判定「否」：各時間點結果只有平均值、沒有標準差或中位數，遺漏資料與差異性流失也未處理；雖然多數項目有出現，但報告並不完整。"
        ],
        "location": "方法二樣本數計算（p.46）、四研究工具（p.47）、七資料分析（p.48）；圖二（p.50）；圖三、表二（p.51）；研究限制（p.52）。",
        "considers": [
          "檢定力計算、結果定義、結果表達方式、各組各次追蹤各項結果、遺漏資料、組間退出率差異、偏差來源、統計方法、p 值。"
        ]
      }
    ],
    "sourceLocation": "7：方法二樣本數計算（p.46）、四研究工具（p.47）、七資料分析（p.48）；圖二（p.50）；圖三、表二（p.51）；研究限制（p.52）。"
  },
  {
    "id": 8,
    "section": "C",
    "short": "效果估計的精確度",
    "topic": "信賴區間 · SE 與 p 值",
    "title": "是否有列出介入／治療效果估計值的精確度？",
    "english": "Was the precision of the estimate of the intervention or treatment effect reported?",
    "plain": "效果不只有一個估計值，還有不確定範圍。CASP 特別提示檢查信賴區間。",
    "prompt": "表二有 β、SE 和 p 值，哪一個是 95% 信賴區間？",
    "consider": [
      [
        "是否列出信賴區間（CIs）？",
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
      "全文未報告信賴區間，表二僅列 β、SE、p。",
      "評讀者以 β ± 1.96 × SE 推算第 16 週交互作用：現在的疼痛 −1.52（−2.74 至 −0.30）、最嚴重疼痛 −1.55（−2.90 至 −0.20）、平均疼痛 −1.24（−2.40 至 −0.08）、伸膝角度 −5.52°（−10.58 至 −0.46）。",
      "區間寬且上限接近 0，估計不精確；以上數值為評讀者推算，非文獻報告。"
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
    "writing": "否。區間寬且上限接近 0，估計不精確；以上數值為評讀者推算，非文獻報告。 文獻對應位置：表二（p.51）。",
    "transfer": "看表頭找 CI 的上下界；找不到時寫清楚是否有 SE，以及缺少什麼，不自行補成原文數據。",
    "sourceSections": [
      {
        "id": "8",
        "title": "是否有列出介入／治療效果估計值的精確度？",
        "english": "Was the precision of the estimate of the intervention or treatment effect reported?",
        "answer": "否",
        "reasons": [
          "全文未報告信賴區間，表二僅列 β、SE、p。",
          "評讀者以 β ± 1.96 × SE 推算第 16 週交互作用：現在的疼痛 −1.52（−2.74 至 −0.30）、最嚴重疼痛 −1.55（−2.90 至 −0.20）、平均疼痛 −1.24（−2.40 至 −0.08）、伸膝角度 −5.52°（−10.58 至 −0.46）。",
          "區間寬且上限接近 0，估計不精確；以上數值為評讀者推算，非文獻報告。"
        ],
        "location": "表二（p.51）。",
        "considers": [
          "是否列出信賴區間（CIs）？"
        ]
      }
    ],
    "sourceLocation": "8：表二（p.51）。"
  },
  {
    "id": 9,
    "section": "C",
    "short": "效益、傷害與成本",
    "topic": "統計意義 · 臨床價值",
    "title": "介入措施所帶來的效益是否值得付出傷害及成本的代價？",
    "english": "Do the benefits of the experimental intervention outweigh the harms and costs?",
    "plain": "效果達顯著只是起點，還要看改善是否值得、是否有不良事件，以及執行需要付出什麼。",
    "prompt": "作者說安全且易於實施，文中有足夠的安全與成本資料支持嗎？",
    "consider": [
      [
        "效果大小、各組傷害或非預期效應、成本效益分析。",
        "What was the size of the intervention or treatment effect? Were harms or unintended effects reported for each study group? Was a cost-effectiveness analysis undertaken? (Cost-effectiveness analysis allows a comparison to be made between different interventions used in the care of the same condition or problem.)"
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
      "第 16 週效果大小：現在的疼痛 1.5 vs 2.8（VAS 約差 1.3 分）；伸膝角度 16.5° vs 21.0°（差 4.5°）；屈膝角度無顯著差異；止痛藥使用 13.4 vs 21.8 天。",
      "傷害未系統性收集或報告（跌倒、傷口問題、運動傷害）；實驗組 1 例胃穿孔未討論，而兩組皆併用兩種 NSAIDs。",
      "未做成本或成本效益分析；作者稱介入「安全」缺乏資料支持。",
      "介入看似低成本、低風險，但屬評讀者推論；缺乏傷害與成本資料，無法判斷利弊。"
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
    "writing": "無法判斷。介入看似低成本、低風險，但屬評讀者推論；缺乏傷害與成本資料，無法判斷利弊。 文獻對應位置：結果第 3 段（p.48）；圖二、圖三（p.50–51）；討論（p.49–52）；結論（p.52）。",
    "transfer": "把效益、傷害與成本分成三欄。哪一欄資料不足，就明確寫出，不以作者結論代替查核。",
    "sourceSections": [
      {
        "id": "9",
        "title": "介入措施所帶來的效益是否值得付出傷害及成本的代價？",
        "english": "Do the benefits of the experimental intervention outweigh the harms and costs?",
        "answer": "無法判斷",
        "reasons": [
          "第 16 週效果大小：現在的疼痛 1.5 vs 2.8（VAS 約差 1.3 分）；伸膝角度 16.5° vs 21.0°（差 4.5°）；屈膝角度無顯著差異；止痛藥使用 13.4 vs 21.8 天。",
          "傷害未系統性收集或報告（跌倒、傷口問題、運動傷害）；實驗組 1 例胃穿孔未討論，而兩組皆併用兩種 NSAIDs。",
          "未做成本或成本效益分析；作者稱介入「安全」缺乏資料支持。",
          "介入看似低成本、低風險，但屬評讀者推論；缺乏傷害與成本資料，無法判斷利弊。"
        ],
        "location": "結果第 3 段（p.48）；圖二、圖三（p.50–51）；討論（p.49–52）；結論（p.52）。",
        "considers": [
          "效果大小、各組傷害或非預期效應、成本效益分析。"
        ]
      }
    ],
    "sourceLocation": "9：結果第 3 段（p.48）；圖二、圖三（p.50–51）；討論（p.49–52）；結論（p.52）。"
  },
  {
    "id": 10,
    "section": "D",
    "short": "能否用在我的病人",
    "topic": "外部適用性 · 病人情境",
    "title": "研究結果是否可以應用在你的當地族群或情境當中？",
    "english": "Can the results be applied to your local population/in your context?",
    "plain": "先設定一個照護情境，再比較病人、設備、介入能力與重視的結果。這題需要文獻加上情境判斷。",
    "prompt": "若病人家中不能觀看影片，還能直接套用這個方案嗎？",
    "consider": [
      [
        "受試者是否相似？差異是否改變結果？結果是否重要？是否缺少想要的結果？研究限制是否影響決策？",
        "Are the study participants similar to the people in your care? Would any differences between your population and the study participants alter the outcomes reported in the study? Are the outcomes important to your population? Are there any outcomes you would have wanted information on that have not been studied or reported? Are there any limitations of the study that would affect your decision?"
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
      "受試者為台灣區域教學醫院的老年 TKR 病人，止痛醫囑與回診模式與國內臨床高度相近。",
      "需考量的差異：排除家中無法觀看 YouTube 者、雙側或再置換者；單一機構；僅追蹤 16 週。",
      "疼痛與關節活動度為 TKR 復原核心指標；缺少身體功能（如 KOOS／WOMAC）、生活品質、跌倒、再入院、滿意度、實際運動執行率與長期效果。"
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
    "writing": "是。疼痛與關節活動度為 TKR 復原核心指標；缺少身體功能（如 KOOS／WOMAC）、生活品質、跌倒、再入院、滿意度、實際運動執行率與長期效果。 文獻對應位置：方法二收案與排除條件（p.46）；研究限制與建議（p.52）。",
    "transfer": "先寫一個具體病人情境，再用「相似／不同／缺少資訊」三項比較，不只寫適用或不適用。",
    "sourceSections": [
      {
        "id": "10",
        "title": "研究結果是否可以應用在你的當地族群或情境當中？",
        "english": "Can the results be applied to your local population/in your context?",
        "answer": "是",
        "reasons": [
          "受試者為台灣區域教學醫院的老年 TKR 病人，止痛醫囑與回診模式與國內臨床高度相近。",
          "需考量的差異：排除家中無法觀看 YouTube 者、雙側或再置換者；單一機構；僅追蹤 16 週。",
          "疼痛與關節活動度為 TKR 復原核心指標；缺少身體功能（如 KOOS／WOMAC）、生活品質、跌倒、再入院、滿意度、實際運動執行率與長期效果。"
        ],
        "location": "方法二收案與排除條件（p.46）；研究限制與建議（p.52）。",
        "considers": [
          "受試者是否相似？差異是否改變結果？結果是否重要？是否缺少想要的結果？研究限制是否影響決策？"
        ]
      }
    ],
    "sourceLocation": "10：方法二收案與排除條件（p.46）；研究限制與建議（p.52）。"
  },
  {
    "id": 11,
    "section": "D",
    "short": "是否比現行照護有價值",
    "topic": "資源 · 可行性 · 決策",
    "title": "研究中的介入方法對您照顧的對象，是否比起任何現存介入方式更有價值？",
    "english": "Would the experimental intervention provide greater value to the people in your care than any of the existing interventions?",
    "plain": "把研究效果放回現場：誰執行、需要多久、要哪些設備與訓練，以及能否調整現行照護。",
    "prompt": "有手冊和影片就夠了嗎？電話追蹤與人員訓練由誰負責？",
    "consider": [
      [
        "所需資源（時間、費用、技能與訓練）；能否從現有介入移出資源重新投入。",
        "What resources are needed to introduce this intervention taking into account time, finances, and skills development or training needs? Are you able to disinvest resources in one or more existing interventions in order to be able to re-invest in the new intervention?"
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
      "所需資源不多：印製手冊、既有 YouTube 視頻、術後第 3 天一對一衛教、出院後 4 次 5–10 分鐘電話。",
      "可納入或取代現行常規出院衛教，不需大量新增投資；研究中由資深專科護理師執行，推廣時需培訓病房護理師。",
      "僅與常規衛教比較，未與物理治療師主導或其他遠距復健模式比較；且效果可能因未採 ITT、評估者未盲化、差異性流失而被高估。"
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
    "writing": "無法判斷。判定「無法判斷」：資源需求低代表可行，不等於更有價值；第 9 題利弊與成本已無法判斷，因此無法確認比現行照護更有價值。 文獻對應位置：方法三（p.46–47）；臨床應用（p.52）。",
    "transfer": "把「值得採用」改寫為具體條件：適合誰、誰執行、需多少資源、如何追蹤成效與安全。",
    "sourceSections": [
      {
        "id": "11",
        "title": "研究中的介入方法對您照顧的對象，是否比起任何現存介入方式更有價值？",
        "english": "Would the experimental intervention provide greater value to the people in your care than any of the existing interventions?",
        "answer": "無法判斷",
        "reasons": [
          "所需資源不多：印製手冊、既有 YouTube 視頻、術後第 3 天一對一衛教、出院後 4 次 5–10 分鐘電話。",
          "可納入或取代現行常規出院衛教，不需大量新增投資；研究中由資深專科護理師執行，推廣時需培訓病房護理師。",
          "僅與常規衛教比較，未與物理治療師主導或其他遠距復健模式比較；且效果可能因未採 ITT、評估者未盲化、差異性流失而被高估。",
          "判定「無法判斷」：資源需求低代表可行，不等於更有價值；第 9 題利弊與成本已無法判斷，因此無法確認比現行照護更有價值。"
        ],
        "location": "方法三（p.46–47）；臨床應用（p.52）。",
        "considers": [
          "所需資源（時間、費用、技能與訓練）；能否從現有介入移出資源重新投入。"
        ]
      }
    ],
    "sourceLocation": "11：方法三（p.46–47）；臨床應用（p.52）。"
  }
];
window.CASP_APPRAISAL_SUMMARY = {
  "positive": [
    "PICO 明確；本土化介入設計具體（手冊 CVI .91、視頻、電話）",
    "電腦亂數隨機分派",
    "基準特性完整呈現且相似",
    "有樣本數計算；工具有信效度或精確度說明",
    "重複測量以 GEE 分析並控制年齡、性別",
    "經 IRB 審查、有知情同意",
    "作者自述主要研究限制"
  ],
  "negative": [
    "符合計畫分析：排除執行率 < 72% 者，未採 ITT",
    "流失全部在實驗組（4/26 vs 0/26）",
    "給予介入者與結果評估者為同一位未盲化研究者",
    "未報告信賴區間；未做多重比較校正",
    "GEE 未納入術前基準，且控制了隨機後變項",
    "表一、表二、圖一數據前後不一致",
    "屈膝角度無效果；「安全」結論缺乏資料"
  ],
  "unknown": [
    "分配隱藏細節（信封是否不透光、編號、保管者）",
    "「單盲」盲化的對象是誰",
    "控制組常規衛教內容與出院後共同介入",
    "傷害與成本",
    "資料分析者是否盲化",
    "16 週後的長期效果",
    "實際運動執行率的分布"
  ],
  "conclusion": "共 5 個「否」與 4 個「無法判斷」，研究結果應審慎解讀。本研究支持以視頻與電話追蹤強化出院衛教，可作為低風險的品質改善措施；但僅憑此研究，不足以改變常規實務。",
  "source": "判讀依據：CASP RCT 2024 中文版評讀（Markdown），評讀日期 2026 年 11 月 19 日。",
  "overallJudgment": "本研究為真正的隨機對照試驗，研究問題清楚、以電腦亂數分派、兩組基準特性相似。但採符合計畫分析而非治療意向分析、給予介入者與結果評估者為同一位未盲化的研究者、流失全部集中於實驗組、且未報告信賴區間，偏差風險屬中至高度。效果方向可信，但效果大小可能被高估。判定統計：是 4 項、否 5 項、無法判斷 4 項。"
};
