/* CASP RCT 2024. Teaching adaptation of the supplied Word V1, revised with the instructor on 2026-11-21. */
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
    "answer": "是"
  },
  {
    "answer": "是",
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
    "answer": "是"
  },
  {
    "answer": "無法判斷"
  },
  {
    "answer": "否"
  },
  {
    "answer": "否"
  },
  {
    "answer": "無法判斷"
  },
  {
    "answer": "是"
  },
  {
    "answer": "無法判斷"
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
        "key": "q01_abstract",
        "page": 1,
        "label": "p.45 摘要目的與方法",
        "blockIds": [
          8,
          9,
          10
        ]
      },
      {
        "page": 2,
        "label": "p.46 P：研究對象",
        "lineSlices": [
          [
            10,
            0,
            3
          ]
        ],
        "key": "q01_picoSample"
      },
      {
        "page": 2,
        "label": "p.46 I：混合式衛教",
        "lineSlices": [
          [
            14,
            0,
            3
          ],
          [
            15,
            0,
            2
          ],
          [
            15,
            3,
            7
          ]
        ],
        "key": "q01_picoEducation"
      },
      {
        "page": 3,
        "label": "p.47 I：電話諮詢",
        "lineSlices": [
          [
            2,
            5,
            7
          ]
        ],
        "key": "q01_picoPhone"
      }
    ],
    "sourceSections": [
      {
        "id": "1",
        "title": "這項研究是否提出一個建構清楚的研究問題？",
        "english": "Did the study address a clearly formulated research question?",
        "answer": "是",
        "reasons": [
          "從摘要及研究方法可找到 PICO：P 為 65 歲以上、接受單側全膝關節置換術的病人，共 52 人；I 為混合式衛教，包括衛教手冊、復健運動影片、一對一衛教及電話諮詢；C 為常規出院衛教；O 為疼痛及膝關節角度。研究採單盲隨機控制組試驗。"
        ],
        "considers": [
          "此研究是否設計來評估一種介入的結果？",
          "研究問題是否依下列要素「建構」：研究族群、介入措施、對照組的選擇、結果測量？"
        ]
      }
    ],
    "annotatedPdf": "assets/study-q01-annotated.pdf",
    "glossary": [
      [
        "PICO",
        "P：研究對象；I：介入措施；C：比較措施；O：結果指標。"
      ],
      [
        "TKR｜全膝關節置換術",
        "以人工關節置換膝關節的手術。"
      ]
    ]
  },
  {
    "id": 2,
    "section": "A",
    "short": "隨機分派",
    "topic": "隨機序列 · 分派隱蔽",
    "title": "受試者是否被隨機分派到不同組別？",
    "english": "Was the assignment of participants to interventions randomised?",
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
        "key": "q02_design",
        "page": 2,
        "label": "p.46 研究設計",
        "blockIds": [
          7,
          8
        ]
      },
      {
        "key": "q02_flow",
        "page": 3,
        "label": "p.47 圖一收案流程",
        "boxPoints": [
          50,
          86,
          545,
          427
        ]
      },
      {
        "key": "q02_collect",
        "page": 4,
        "label": "p.48 資料收集過程",
        "blockIds": [
          5,
          6,
          7
        ]
      }
    ],
    "sourceSections": [
      {
        "id": "2",
        "title": "受試者是否被隨機分派到不同組別？",
        "english": "Was the assignment of participants to interventions randomised?",
        "answer": "是",
        "reasons": [
          "研究設計（p.46）說明，以電腦亂數表產生序號組別，分成實驗組與控制組，放入密閉信封，再依入院順序隨機分派；圖一（p.47）顯示兩組各 26 人。",
          "文中未說明信封是否不透光、是否連續編號，以及由誰保管及拆封。資料收集過程（p.48）說明，收案、介入與資料收集由同一研究者執行。"
        ],
        "considers": [
          "隨機分配方式為何？該方法是否合適？",
          "隨機分配方式是否足以消除系統性偏差？",
          "分配序號是否對研究者與受試者隱藏？"
        ]
      }
    ],
    "annotatedPdf": "assets/study-q02-annotated.pdf",
    "glossary": [
      [
        "隨機分派",
        "以隨機方式決定受試者接受哪一組介入。"
      ]
    ]
  },
  {
    "id": 3,
    "section": "A",
    "short": "追蹤與 ITT",
    "topic": "流程圖 · 退出 · 分析人數",
    "title": "是否所有進入試驗的受試者在研究結論當中均被適當的考量過？",
    "english": "Were all participants who entered the study accounted for at its conclusion?",
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
        "key": "q03_flow",
        "page": 3,
        "label": "p.47 圖一收案流程",
        "boxPoints": [
          50,
          86,
          545,
          427
        ]
      },
      {
        "key": "q03_education47",
        "page": 3,
        "label": "p.47 電話、紀錄與執行率",
        "blockIds": [
          2
        ],
        "lineSlices": [
          [
            2,
            8,
            10
          ]
        ]
      },
      {
        "key": "q03_attrition",
        "page": 4,
        "label": "p.48 流失與分析人數",
        "blockIds": [
          10,
          11,
          12
        ]
      }
    ],
    "sourceSections": [
      {
        "id": "3",
        "title": "是否所有進入試驗的受試者在研究結論當中均被適當的考量過？",
        "english": "Were all participants who entered the study accounted for at its conclusion?",
        "answer": "否",
        "reasons": [
          "研究原先分派實驗組與控制組各 26 人。實驗組 1 人因胃穿孔住院流失，3 人因復健執行率低於 72% 被排除；控制組 26 人全數完成。最後分析 48 人：實驗組 22 人、控制組 26 人（圖一，p.47；研究結果，p.48）。",
          "方法段載明「個人執行率達 72% 才列入統計分析」（p.47），因此原先分派的受試者未全數納入分析。胃穿孔個案的流失時間，結果文字寫術後第 12 週（p.48），圖一則標於術後第 6 週（p.47），兩處不一致。"
        ],
        "considers": [
          "隨機分配後失去追蹤與被排除的受試者是否都有交代？",
          "受試者是否按照他們被隨機分配的組別進行分析（治療意向分析法）？",
          "試驗是否提早終止？若有，原因為何？"
        ]
      }
    ],
    "annotatedPdf": "assets/study-q03-annotated.pdf",
    "glossary": [
      [
        "治療意向分析（ITT）",
        "依受試者最初被隨機分派的組別進行分析。"
      ]
    ]
  },
  {
    "id": 4,
    "section": "B",
    "short": "三個角色的盲法",
    "topic": "受試者 · 介入者 · 評估者",
    "title": "受試者、介入執行者及結果評估／分析者是否盲化？",
    "english": "(a) Were the participants ‘blind’ to intervention they were given? (b) Were the investigators ‘blind’ to the intervention they were giving to participants? (c) Were the people assessing/analysing outcome/s ‘blinded’?",
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
        "key": "q04_abstract",
        "page": 1,
        "label": "p.45 摘要目的與方法",
        "blockIds": [
          8,
          9,
          10
        ],
        "lineSlices": [
          [
            9,
            0,
            1
          ]
        ]
      },
      {
        "key": "q04_design",
        "page": 2,
        "label": "p.46 研究設計",
        "blockIds": [
          7,
          8
        ],
        "lineSlices": [
          [
            8,
            0,
            1
          ]
        ]
      },
      {
        "key": "q04_education46",
        "page": 2,
        "label": "p.46 混合式衛教方案",
        "blockIds": [
          13,
          14,
          15
        ],
        "lineSlices": [
          [
            15,
            0,
            7
          ]
        ]
      },
      {
        "key": "q04_education47",
        "page": 3,
        "label": "p.47 電話、紀錄與執行率",
        "blockIds": [
          2
        ],
        "lineSlices": [
          [
            2,
            5,
            7
          ]
        ]
      },
      {
        "key": "q04_collect",
        "page": 4,
        "label": "p.48 資料收集過程",
        "blockIds": [
          5,
          6,
          7
        ]
      },
      {
        "key": "q04_limitations",
        "page": 8,
        "label": "p.52 研究限制與建議",
        "blockIds": [
          5,
          6
        ],
        "lineSlices": [
          [
            6,
            4,
            8
          ]
        ]
      },
      {
        "key": "q04_authors",
        "page": 8,
        "label": "p.52 作者貢獻度",
        "blockIds": [
          12,
          13
        ],
        "lineSlices": [
          [
            13,
            2,
            3
          ]
        ]
      }
    ],
    "sourceSections": [
      {
        "id": "4(a)",
        "title": "受試者是否對其接受的介入措施盲化？",
        "english": "Were the participants ‘blind’ to intervention they were given?",
        "answer": "無法判斷",
        "reasons": [
          "摘要及研究設計稱本研究為「單盲隨機控制組試驗」（p.45–46），但未說明盲化的對象是否為受試者。"
        ],
        "considers": []
      },
      {
        "id": "4(b)",
        "title": "研究者（給予介入者）是否對其給予受試者的介入措施盲化？",
        "english": "Were the investigators ‘blind’ to the intervention they were giving to participants?",
        "answer": "否",
        "reasons": [
          "實驗組由研究者在術後第 3 天提供一對一衛教、影片操作教導及回覆示教，並於返家後執行電話諮詢（p.46–47）；給予介入者知道自己提供的介入內容。"
        ],
        "considers": []
      },
      {
        "id": "4(c)",
        "title": "評估／分析結果的人員是否盲化？",
        "english": "Were the people assessing/analysing outcome/s ‘blinded’?",
        "answer": "否",
        "reasons": [
          "資料收集過程說明，術前及術後的疼痛與膝關節角度由研究者收集及測量（p.48）。研究限制亦寫明「介入措施及資料收集者為同一研究者」（p.52）。",
          "作者貢獻度列出資料分析由黃曉令負責（p.52），但未說明資料分析者是否知道分組。"
        ],
        "considers": []
      }
    ],
    "annotatedPdf": "assets/study-q04-annotated.pdf",
    "glossary": [
      [
        "盲法／盲化",
        "使受試者或執行、評估、分析研究的人員不知道受試者的分組。"
      ]
    ]
  },
  {
    "id": 5,
    "section": "B",
    "short": "起始特性是否相似",
    "topic": "基線表 · 臨床差異",
    "title": "各組研究對象在一開始進入試驗時的基本特性是否相似？",
    "english": "Were the study groups similar at the start of the randomised controlled trial?",
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
        "key": "q05_table1",
        "page": 5,
        "label": "p.49 表一基準特性",
        "boxPoints": [
          50,
          86,
          545,
          500
        ]
      },
      {
        "key": "q05_baseline48",
        "page": 4,
        "label": "p.48 基準特性敘述",
        "blockIds": [
          13
        ]
      },
      {
        "key": "q05_attrition",
        "page": 4,
        "label": "p.48 流失與分析人數",
        "blockIds": [
          10,
          11,
          12
        ]
      }
    ],
    "sourceSections": [
      {
        "id": "5",
        "title": "各組研究對象在一開始進入試驗時的基本特性是否相似？",
        "english": "Were the study groups similar at the start of the randomised controlled trial?",
        "answer": "是",
        "reasons": [
          "研究結果（p.48）及表一（p.49）列出年齡、性別、身體質量指數、慢性病、手術經驗、手術部位、術前疼痛及膝關節角度。兩組比較均未達統計顯著差異（p > .05）。",
          "表一使用兩組各 26 人的資料，最後分析則為實驗組 22 人、控制組 26 人；未另列排除後兩組的基本特性。表一「TKR 手術經驗」中，實驗組列「無 4 人、有 22 人」，與全體「無 41 人、有 11 人」的加總不一致。"
        ],
        "considers": [
          "文章中是否清楚呈現各組的基本特徵（如：年齡、性別、社經地位）？",
          "組間是否存在可能影響結果的差別？"
        ]
      }
    ],
    "annotatedPdf": "assets/study-q05-annotated.pdf",
    "glossary": [
      [
        "BMI｜身體質量指數",
        "體重（公斤）除以身高（公尺）的平方。"
      ],
      [
        "p 值",
        "在假設兩組沒有差異等條件下，出現目前或更極端資料的機率。"
      ]
    ]
  },
  {
    "id": 6,
    "section": "B",
    "short": "其他照護是否一致",
    "topic": "共同照護 · 共同追蹤",
    "title": "除了實驗的介入措施之外，各組是否接受相同程度的照護（亦即是否受到同等對待）？",
    "english": "Apart from the experimental intervention, did each study group receive the same level of care (that is, were they treated equally)?",
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
        "key": "q06_design",
        "page": 2,
        "label": "p.46 研究設計",
        "blockIds": [
          7,
          8
        ]
      },
      {
        "key": "q06_medication",
        "page": 4,
        "label": "p.48 止痛藥與疼痛結果",
        "blockIds": [
          14,
          15
        ],
        "lineSlices": [
          [
            14,
            0,
            2
          ]
        ]
      },
      {
        "key": "q06_collect",
        "page": 4,
        "label": "p.48 資料收集過程",
        "blockIds": [
          5,
          6,
          7
        ]
      }
    ],
    "sourceSections": [
      {
        "id": "6",
        "title": "除了實驗的介入措施之外，各組是否接受相同程度的照護（亦即是否受到同等對待）？",
        "english": "Apart from the experimental intervention, did each study group receive the same level of care (that is, were they treated equally)?",
        "answer": "無法判斷",
        "reasons": [
          "研究設計（p.46）說明，兩組在手術前及住院期間皆接受常規治療與護理。研究結果（p.48）列出相同的常規止痛藥醫囑；資料收集過程說明，兩組均於術後第 1、6、12、16 週追蹤測量。",
          "控制組常規出院衛教的內容，以及出院後是否另接受其他復健治療，文中未交代，因此無法確認出院後兩組其他照護是否相同。"
        ],
        "considers": [
          "試驗計畫是否清楚定義？",
          "若有給予額外介入（如：檢查或治療），各組給予的介入是否相似？",
          "各組的追蹤間隔是否相同？"
        ]
      }
    ],
    "annotatedPdf": "assets/study-q06-annotated.pdf",
    "glossary": []
  },
  {
    "id": 7,
    "section": "C",
    "short": "效果是否完整報告",
    "topic": "樣本數 · 多項結果 · 效果估計",
    "title": "介入措施的效果是否有被完整報告？",
    "english": "Were the effects of intervention reported comprehensively?",
    "consider": [
      [
        "檢定力計算、結果定義、結果表達方式、各組各次追蹤各項結果、遺漏資料、組間退出率差異、偏差來源、統計方法、p 值。",
        "Was a power calculation undertaken? What outcomes were measured, and were they clearly specified? How were the results expressed? For binary outcomes, were relative and absolute effects reported? Were the results reported for each outcome in each study group at each follow-up interval? Was there any missing or incomplete data? Was there differential drop-out between the study groups that could affect the results? Were potential sources of bias identified? Which statistical tests were used? Were p values reported?"
      ]
    ],
    "evidence": [
      {
        "key": "q07_power",
        "page": 2,
        "label": "p.46 樣本數計算",
        "blockIds": [
          12
        ]
      },
      {
        "key": "q07_vas",
        "page": 3,
        "label": "p.47 VAS 疼痛量表",
        "blockIds": [
          6,
          7
        ]
      },
      {
        "key": "q07_angle47",
        "page": 3,
        "label": "p.47 電子量角器",
        "blockIds": [
          8,
          9
        ]
      },
      {
        "key": "q07_angle48",
        "page": 4,
        "label": "p.48 量角器測量程序",
        "blockIds": [
          2
        ]
      },
      {
        "key": "q07_analysis",
        "page": 4,
        "label": "p.48 資料處理與分析",
        "blockIds": [
          8,
          9
        ]
      },
      {
        "key": "q07_figure2",
        "page": 6,
        "label": "p.50 圖二疼痛結果",
        "boxPoints": [
          50,
          86,
          545,
          583
        ]
      },
      {
        "key": "q07_figure3",
        "page": 7,
        "label": "p.51 圖三關節角度",
        "boxPoints": [
          50,
          86,
          545,
          483
        ]
      },
      {
        "key": "q07_table2",
        "page": 7,
        "label": "p.51 表二 GEE 分析",
        "boxPoints": [
          50,
          505,
          545,
          710
        ]
      },
      {
        "key": "q07_attrition",
        "page": 4,
        "label": "p.48 流失與分析人數",
        "blockIds": [
          10,
          11,
          12
        ]
      }
    ],
    "sourceSections": [
      {
        "id": "7",
        "title": "介入措施的效果是否有被完整報告？",
        "english": "Were the effects of intervention reported comprehensively?",
        "answer": "否",
        "reasons": [
          "研究對象段以 G*Power 估算需 46 人，考量流失後收案 52 人（p.46）。研究工具段說明疼痛量表與電子量角器（p.47–48）；資料分析段列出卡方檢定、獨立樣本 t 檢定、曼惠特尼 U 檢定及廣義估計方程式（GEE）（p.48）。",
          "圖二、圖三呈現各時間點的疼痛與膝關節角度結果，但未列出標準差；表二列出 β、SE 及 p 值，未列信賴區間（p.50–51）。最後分析人數少於原先分派人數，文中未交代如何處理被排除者的結果資料。"
        ],
        "considers": [
          "檢定力計算、結果定義、結果表達方式、各組各次追蹤各項結果、遺漏資料、組間退出率差異、偏差來源、統計方法、p 值。"
        ]
      }
    ],
    "annotatedPdf": "assets/study-q07-annotated.pdf",
    "glossary": [
      [
        "G*Power｜檢定力分析軟體",
        "用於估算研究所需樣本數等統計規劃。"
      ],
      [
        "VAS｜視覺類比量表",
        "由病人在量尺上表示疼痛程度；本研究使用 0–10 分。"
      ],
      [
        "GEE｜廣義估計方程式",
        "用於分析重複測量等彼此相關的資料。"
      ]
    ]
  },
  {
    "id": 8,
    "section": "C",
    "short": "效果估計的精確度",
    "topic": "信賴區間 · SE 與 p 值",
    "title": "是否有列出介入／治療效果估計值的精確度？",
    "english": "Was the precision of the estimate of the intervention or treatment effect reported?",
    "consider": [
      [
        "是否列出信賴區間（CIs）？",
        "Were confidence intervals (CIs) reported?"
      ]
    ],
    "evidence": [
      {
        "key": "q08_table2",
        "page": 7,
        "label": "p.51 表二 GEE 分析",
        "boxPoints": [
          50,
          505,
          545,
          710
        ]
      }
    ],
    "sourceSections": [
      {
        "id": "8",
        "title": "是否有列出介入／治療效果估計值的精確度？",
        "english": "Was the precision of the estimate of the intervention or treatment effect reported?",
        "answer": "否",
        "reasons": [
          "表二（p.51）列出 β、標準誤（SE）及 p 值，全文未報告信賴區間（CI）。"
        ],
        "considers": [
          "是否列出信賴區間（CIs）？"
        ]
      }
    ],
    "annotatedPdf": "assets/study-q08-annotated.pdf",
    "glossary": [
      [
        "β｜迴歸係數",
        "表示模型中估計的效果大小，意義須配合表格中的比較項目閱讀。"
      ],
      [
        "SE｜標準誤",
        "表示估計值的不確定程度。"
      ],
      [
        "CI｜信賴區間",
        "以區間呈現效果估計的不確定性。"
      ],
      [
        "SD｜標準差",
        "描述個別資料值的分散程度。"
      ]
    ]
  },
  {
    "id": 9,
    "section": "C",
    "short": "效益、傷害與成本",
    "topic": "統計意義 · 臨床價值",
    "title": "介入措施所帶來的效益是否值得付出傷害及成本的代價？",
    "english": "Do the benefits of the experimental intervention outweigh the harms and costs?",
    "consider": [
      [
        "效果大小、各組傷害或非預期效應、成本效益分析。",
        "What was the size of the intervention or treatment effect? Were harms or unintended effects reported for each study group? Was a cost-effectiveness analysis undertaken? (Cost-effectiveness analysis allows a comparison to be made between different interventions used in the care of the same condition or problem.)"
      ]
    ],
    "evidence": [
      {
        "key": "q09_medication",
        "page": 4,
        "label": "p.48 止痛藥與疼痛結果",
        "blockIds": [
          14,
          15
        ]
      },
      {
        "key": "q09_angleResults",
        "page": 4,
        "label": "p.48 關節角度結果",
        "blockIds": [
          16
        ]
      },
      {
        "key": "q09_figure2",
        "page": 6,
        "label": "p.50 圖二疼痛結果",
        "boxPoints": [
          50,
          86,
          545,
          583
        ]
      },
      {
        "key": "q09_figure3",
        "page": 7,
        "label": "p.51 圖三關節角度",
        "boxPoints": [
          50,
          86,
          545,
          483
        ]
      },
      {
        "key": "q09_flow",
        "page": 3,
        "label": "p.47 圖一收案流程",
        "boxPoints": [
          50,
          86,
          545,
          427
        ]
      },
      {
        "key": "q09_attrition",
        "page": 4,
        "label": "p.48 流失與分析人數",
        "blockIds": [
          10,
          11,
          12
        ]
      },
      {
        "key": "q09_conclusion",
        "page": 8,
        "label": "p.52 研究結論",
        "blockIds": [
          7,
          8,
          9
        ]
      }
    ],
    "sourceSections": [
      {
        "id": "9",
        "title": "介入措施所帶來的效益是否值得付出傷害及成本的代價？",
        "english": "Do the benefits of the experimental intervention outweigh the harms and costs?",
        "answer": "無法判斷",
        "reasons": [
          "研究結果及圖二、圖三顯示，第 16 週「現在的疼痛」實驗組為 1.5 分、控制組為 2.8 分；伸膝角度分別為 16.5° 與 21.0°，屈膝角度的組間差異未達統計顯著。止痛藥使用天數分別為 13.4 天與 21.81 天（p.48、50–51）。",
          "實驗組有 1 人因胃穿孔住院而流失（p.47–48），但文中未提供完整的不良事件紀錄，也未進行成本效益分析。結論雖稱介入「安全且易於實施」（p.52），仍缺少判斷傷害與成本所需的資料。"
        ],
        "considers": [
          "效果大小、各組傷害或非預期效應、成本效益分析。"
        ]
      }
    ],
    "annotatedPdf": "assets/study-q09-annotated.pdf",
    "glossary": []
  },
  {
    "id": 10,
    "section": "D",
    "short": "能否用在我的病人",
    "topic": "外部適用性 · 病人情境",
    "title": "研究結果是否可以應用在你的當地族群或情境當中？",
    "english": "Can the results be applied to your local population/in your context?",
    "consider": [
      [
        "受試者是否相似？差異是否改變結果？結果是否重要？是否缺少想要的結果？研究限制是否影響決策？",
        "Are the study participants similar to the people in your care? Would any differences between your population and the study participants alter the outcomes reported in the study? Are the outcomes important to your population? Are there any outcomes you would have wanted information on that have not been studied or reported? Are there any limitations of the study that would affect your decision?"
      ]
    ],
    "evidence": [
      {
        "key": "q10_sample",
        "page": 2,
        "label": "p.46 納入與排除條件",
        "blockIds": [
          9,
          10,
          11
        ]
      },
      {
        "key": "q10_baseline48",
        "page": 4,
        "label": "p.48 基準特性敘述",
        "blockIds": [
          13
        ],
        "lineSlices": [
          [
            13,
            0,
            2
          ]
        ]
      },
      {
        "key": "q10_limitations",
        "page": 8,
        "label": "p.52 研究限制與建議",
        "blockIds": [
          5,
          6
        ],
        "lineSlices": [
          [
            6,
            0,
            5
          ]
        ]
      }
    ],
    "sourceSections": [
      {
        "id": "10",
        "title": "研究結果是否可以應用在你的當地族群或情境當中？",
        "english": "Can the results be applied to your local population/in your context?",
        "answer": "是",
        "reasons": [
          "研究對象為臺灣北部某區域教學醫院、接受單側全膝關節置換術的老年病人，平均年齡 73.4 歲、女性居多（p.46、48）。研究結果可作為照護這類病人的參考。",
          "研究為單一機構收案，排除雙側或再次置換手術者，以及家中沒有觀看 YouTube 衛教影片設施者（p.46）。研究僅追蹤至術後 16 週，未提供更長期的結果（p.52）。"
        ],
        "considers": [
          "受試者是否相似？差異是否改變結果？結果是否重要？是否缺少想要的結果？研究限制是否影響決策？"
        ]
      }
    ],
    "annotatedPdf": "assets/study-q10-annotated.pdf",
    "glossary": []
  },
  {
    "id": 11,
    "section": "D",
    "short": "是否比現行照護有價值",
    "topic": "資源 · 可行性 · 決策",
    "title": "研究中的介入方法對您照顧的對象，是否比起任何現存介入方式更有價值？",
    "english": "Would the experimental intervention provide greater value to the people in your care than any of the existing interventions?",
    "consider": [
      [
        "所需資源（時間、費用、技能與訓練）；能否從現有介入移出資源重新投入。",
        "What resources are needed to introduce this intervention taking into account time, finances, and skills development or training needs? Are you able to disinvest resources in one or more existing interventions in order to be able to re-invest in the new intervention?"
      ]
    ],
    "evidence": [
      {
        "key": "q11_education46",
        "page": 2,
        "label": "p.46 混合式衛教方案",
        "blockIds": [
          13,
          14,
          15
        ],
        "lineSlices": [
          [
            14,
            0,
            3
          ],
          [
            15,
            0,
            7
          ]
        ]
      },
      {
        "key": "q11_education47",
        "page": 3,
        "label": "p.47 電話、紀錄與執行率",
        "blockIds": [
          2
        ],
        "lineSlices": [
          [
            2,
            5,
            7
          ]
        ],
        "searchPhrases": [
          "每次約5–10分鐘"
        ]
      },
      {
        "key": "q11_design",
        "page": 2,
        "label": "p.46 研究設計",
        "blockIds": [
          7,
          8
        ]
      }
    ],
    "sourceSections": [
      {
        "id": "11",
        "title": "研究中的介入方法對您照顧的對象，是否比起任何現存介入方式更有價值？",
        "english": "Would the experimental intervention provide greater value to the people in your care than any of the existing interventions?",
        "answer": "無法判斷",
        "reasons": [
          "混合式衛教包括手冊、復健運動影片、術後第 3 天一對一衛教與回覆示教，以及出院後 4 次、每次約 5–10 分鐘的電話諮詢；介入由具 22 年骨科專科護理經驗的研究者執行（p.46–47）。",
          "本研究只與常規出院衛教比較（p.46），未比較其他介入方式，也未提供成本分析，尚不足以確認是否比現有介入更有價值。"
        ],
        "considers": [
          "所需資源（時間、費用、技能與訓練）；能否從現有介入移出資源重新投入。"
        ]
      }
    ],
    "annotatedPdf": "assets/study-q11-annotated.pdf",
    "glossary": []
  }
];
