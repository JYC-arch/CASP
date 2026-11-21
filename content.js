/* CASP RCT 2024. Bilingual considerations and appraisal reasons are integrated. Preliminary symbols answer the wording of each prompt; they are not quality scores. */
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
    "answer": "是"
  },
  {
    "answer": "否"
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
        "此研究是否設計用來評估一項介入措施的結果？",
        "Was the study designed to assess the outcomes of an intervention?"
      ],
      [
        "研究問題是否依下列要素建構：研究族群、給予的介入、選擇的對照、測量的結果？",
        "Is the research question ‘formulated’ in terms of:\nPopulation studied\nIntervention given\nComparator chosen\nOutcomes measured?"
      ]
    ],
    "evidence": [
      {
        "page": 1,
        "label": "摘要｜目的 Objective／Aim（p.45）",
        "blockIds": [
          8
        ],
        "key": "q01_abstractAim"
      },
      {
        "page": 2,
        "label": "前言｜末段研究目的（p.46）",
        "lineSlices": [
          [
            5,
            10,
            12
          ]
        ],
        "key": "q01_introductionAim"
      },
      {
        "page": 3,
        "label": "方法｜結果測量：疼痛（p.47）",
        "lineSlices": [
          [
            6,
            0,
            1
          ],
          [
            7,
            0,
            4
          ]
        ],
        "key": "q01_methodsPain"
      },
      {
        "page": 3,
        "label": "方法｜結果測量：膝關節角度（p.47）",
        "lineSlices": [
          [
            8,
            0,
            1
          ],
          [
            9,
            0,
            4
          ]
        ],
        "key": "q01_methodsAngle"
      },
      {
        "page": 1,
        "label": "摘要｜方法與 PICO（p.45）",
        "blockIds": [
          9,
          10
        ],
        "key": "q01_abstractMethods"
      },
      {
        "page": 2,
        "label": "方法｜P：研究對象（p.46）",
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
        "label": "方法｜I：混合式衛教（p.46）",
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
        "label": "方法｜I：電話諮詢（p.47）",
        "lineSlices": [
          [
            2,
            5,
            7
          ]
        ],
        "key": "q01_picoPhone"
      },
      {
        "page": 2,
        "label": "方法｜介入與對照措施（p.46）",
        "lineSlices": [
          [
            8,
            4,
            8
          ]
        ],
        "key": "q01_picoDesign"
      }
    ],
    "sourceSections": [
      {
        "id": "1",
        "title": "這項研究是否提出一個建構清楚的研究問題？",
        "english": "Did the study address a clearly formulated research question?",
        "answer": "是",
        "reasons": [
          "研究目的為測試混合式衛教對全膝關節置換術老年病人疼痛及膝關節角度的成效。",
          "P：65 歲以上、接受單側全膝關節置換術的病人，共 52 人。",
          "I：混合式衛教，包括衛教手冊、復健運動影片、一對一衛教及電話諮詢。",
          "C：常規出院衛教。",
          "O：疼痛及膝關節角度。"
        ],
        "reasonEvidence": [
          [
            "q01_abstractAim",
            "q01_introductionAim"
          ],
          [
            "q01_abstractMethods",
            "q01_picoSample"
          ],
          [
            "q01_picoEducation",
            "q01_picoPhone"
          ],
          [
            "q01_picoDesign",
            "q01_abstractMethods"
          ],
          [
            "q01_methodsPain",
            "q01_methodsAngle"
          ]
        ],
        "reasonKinds": [
          "report",
          "report",
          "report",
          "report",
          "report"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "研究目的為測試混合式衛教對全膝關節置換術老年病人疼痛及膝關節角度的成效。",
                "kind": "report",
                "refs": [
                  "q01_abstractAim",
                  "q01_introductionAim"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "研究目的對應介入結果。",
            "initialContext": ""
          },
          {
            "considerIndex": 1,
            "points": [
              {
                "text": "P：65 歲以上、接受單側全膝關節置換術的病人，共 52 人。",
                "kind": "report",
                "refs": [
                  "q01_abstractMethods",
                  "q01_picoSample"
                ]
              },
              {
                "text": "I：混合式衛教，包括衛教手冊、復健運動影片、一對一衛教及電話諮詢。",
                "kind": "report",
                "refs": [
                  "q01_picoEducation",
                  "q01_picoPhone"
                ]
              },
              {
                "text": "C：常規出院衛教。",
                "kind": "report",
                "refs": [
                  "q01_picoDesign",
                  "q01_abstractMethods"
                ]
              },
              {
                "text": "O：疼痛及膝關節角度。",
                "kind": "report",
                "refs": [
                  "q01_methodsPain",
                  "q01_methodsAngle"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "P、I、C、O 均可辨識。",
            "initialContext": ""
          }
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
    ],
    "lookupPath": "摘要目的 → 前言末段 → 方法：結果測量",
    "lookupNote": "",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 1
    },
    "lookupEvidence": [
      "q01_abstractAim",
      "q01_introductionAim",
      "q01_methodsPain",
      "q01_methodsAngle"
    ],
    "considerPages": [
      2
    ],
    "overallLink": "兩個考量點均有支持研究問題清楚的資訊，連到本題總評「是」。"
  },
  {
    "id": 2,
    "section": "A",
    "short": "隨機分派",
    "topic": "隨機序列 · 分派隱匿",
    "title": "受試者是否被隨機分派到不同組別？",
    "english": "Was the assignment of participants to interventions randomised?",
    "consider": [
      [
        "如何進行隨機分派？方法是否合適？",
        "How was randomisation carried out? Was the method appropriate?"
      ],
      [
        "隨機分派是否足以消除系統性偏差？",
        "Was randomisation sufficient to eliminate systematic bias?"
      ],
      [
        "分派順序是否對研究者及受試者隱匿？",
        "Was the allocation sequence concealed from investigators and participants?"
      ]
    ],
    "evidence": [
      {
        "key": "q02_design",
        "page": 2,
        "label": "方法｜研究設計與隨機分派（p.46）",
        "blockIds": [
          7,
          8
        ]
      },
      {
        "key": "q02_flow",
        "page": 3,
        "label": "流程圖｜圖一收案、分派與追蹤（p.47）",
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
        "label": "方法｜資料收集過程（p.48）",
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
          "以電腦亂數表產生序號組別，放入密閉信封，再依入院順序隨機分派；圖一列出兩組各 26 人。",
          "電腦亂數表用來產生分派順序；分派隱匿的資料仍不足，無法完整確認程序避免系統性偏差的程度。",
          "文中寫有「密閉信封」，但未說明是否不透明、連續編號，以及由誰保管、拆封；分派隱匿的細節未充分交代。"
        ],
        "reasonEvidence": [
          [
            "q02_design",
            "q02_flow"
          ],
          [
            "q02_design",
            "q02_collect"
          ],
          [
            "q02_design",
            "q02_collect"
          ]
        ],
        "reasonKinds": [
          "report",
          "check",
          "check"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "以電腦亂數表產生序號組別，放入密閉信封，再依入院順序隨機分派；圖一列出兩組各 26 人。",
                "kind": "report",
                "refs": [
                  "q02_design",
                  "q02_flow"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "文中有明確的隨機分派方法。",
            "initialContext": ""
          },
          {
            "considerIndex": 1,
            "points": [
              {
                "text": "電腦亂數表用來產生分派順序；分派隱匿的資料仍不足，無法完整確認程序避免系統性偏差的程度。",
                "kind": "check",
                "refs": [
                  "q02_design",
                  "q02_collect"
                ]
              }
            ],
            "initialResult": "無法判斷",
            "initialNote": "隨機程序避免系統性偏差的程度，仍受資訊不足限制。",
            "initialContext": ""
          },
          {
            "considerIndex": 2,
            "points": [
              {
                "text": "文中寫有「密閉信封」，但未說明是否不透明、連續編號，以及由誰保管、拆封；分派隱匿的細節未充分交代。",
                "kind": "check",
                "refs": [
                  "q02_design",
                  "q02_collect"
                ]
              }
            ],
            "initialResult": "無法判斷",
            "initialNote": "密閉信封有記載，分派隱匿細節未充分交代。",
            "initialContext": ""
          }
        ]
      }
    ],
    "annotatedPdf": "assets/study-q02-annotated.pdf",
    "glossary": [
      [
        "隨機分派（Randomization）",
        "決定受試者分到哪一組的方法。依事先設定的隨機程序產生分組順序，例如課堂資料所示的電腦產生隨機序列，再將受試者分到實驗組或控制組。"
      ],
      [
        "分派隱匿（Allocation Concealment）",
        "在受試者被分派之前，不向受試者及負責招募、收案的人員透露接下來的分派順序，使他們不能預先知道下一位會分到哪一組。\n\n目的：避免預先知道組別而影響收案或分派。課堂資料所列作法包括：由獨立第三方管理分派資訊，以及使用密封且不透明的信封存放組別。"
      ]
    ],
    "glossarySources": "課堂資料：《RCT說明》，PDF 第 11、14–15 頁。",
    "glossaryComparison": {
      "title": "分派隱匿與盲法",
      "columns": [
        "比較項目",
        "分派隱匿",
        "盲法"
      ],
      "rows": [
        [
          "時間",
          "分派前",
          "分派後"
        ],
        [
          "隱匿／盲化的資訊",
          "接下來的分派順序",
          "受試者已被分到哪一組"
        ],
        [
          "涉及的人員",
          "受試者與招募、收案人員",
          "受試者、介入者、結果評估者或資料分析者"
        ]
      ]
    },
    "lookupPath": "方法：研究設計／分派 → CONSORT 流程圖",
    "lookupNote": "",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 1
    },
    "lookupEvidence": [
      "q02_design",
      "q02_flow"
    ],
    "considerPages": [
      2
    ],
    "overallLink": "總評依文中明載的隨機分派判為「是」；第 2、3 點的分派隱匿資訊不足仍須保留，不能由總評推定已消除所有偏差。"
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
        "隨機分派後，失去追蹤與被排除的受試者是否都有交代？",
        "Were losses to follow-up and exclusions after randomisation accounted for?"
      ],
      [
        "受試者是否依最初隨機分派的組別進行分析（治療意向分析，ITT）？",
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
        "label": "流程圖｜圖一收案、分派與追蹤（p.47）",
        "boxPoints": [
          50,
          86,
          545,
          427
        ]
      },
      {
        "key": "q03_attrition",
        "page": 4,
        "label": "結果｜流失與分析人數（p.48）",
        "blockIds": [
          10,
          11,
          12
        ]
      },
      {
        "key": "q03_analysis",
        "page": 4,
        "label": "方法｜資料處理與分析（p.48）",
        "blockIds": [
          8,
          9
        ]
      },
      {
        "key": "q03_education47",
        "page": 3,
        "label": "方法｜電話追蹤與執行紀錄（p.47）",
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
        "key": "q03_collect",
        "page": 4,
        "label": "方法｜資料收集過程（p.48）",
        "blockIds": [
          5,
          6,
          7
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
          "隨機分派 52 人，最後分析 48 人（實驗組 22 人、控制組 26 人）。實驗組 1 人因胃穿孔住院流失，3 人因復健執行率低於 72% 被排除；控制組 26 人全數完成。文中報告流失率為 7.7%。",
          "胃穿孔個案的退出時間，結果文字寫術後第 12 週，圖一則列於第 6 週，兩處不一致。",
          "方法載明「個人執行率達 72% 才列入統計分析」，並非全部隨機分派者都納入分析；文中未載明採用 ITT。",
          "文中未提及試驗提早終止。"
        ],
        "reasonEvidence": [
          [
            "q03_flow",
            "q03_attrition"
          ],
          [
            "q03_flow",
            "q03_attrition"
          ],
          [
            "q03_education47",
            "q03_analysis",
            "q03_attrition"
          ],
          [
            "q03_collect",
            "q03_flow",
            "q03_attrition"
          ]
        ],
        "reasonKinds": [
          "report",
          "report",
          "check",
          "check"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "隨機分派 52 人，最後分析 48 人（實驗組 22 人、控制組 26 人）。實驗組 1 人因胃穿孔住院流失，3 人因復健執行率低於 72% 被排除；控制組 26 人全數完成。文中報告流失率為 7.7%。",
                "kind": "report",
                "refs": [
                  "q03_flow",
                  "q03_attrition"
                ]
              },
              {
                "text": "胃穿孔個案的退出時間，結果文字寫術後第 12 週，圖一則列於第 6 週，兩處不一致。",
                "kind": "report",
                "refs": [
                  "q03_flow",
                  "q03_attrition"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "有交代流失與排除；退出時間仍有前後不一致。",
            "initialContext": ""
          },
          {
            "considerIndex": 1,
            "points": [
              {
                "text": "方法載明「個人執行率達 72% 才列入統計分析」，並非全部隨機分派者都納入分析；文中未載明採用 ITT。",
                "kind": "check",
                "refs": [
                  "q03_education47",
                  "q03_analysis",
                  "q03_attrition"
                ]
              }
            ],
            "initialResult": "否",
            "initialNote": "未將全部隨機分派者納入分析。",
            "initialContext": ""
          },
          {
            "considerIndex": 2,
            "points": [
              {
                "text": "文中未提及試驗提早終止。",
                "kind": "check",
                "refs": [
                  "q03_collect",
                  "q03_flow",
                  "q03_attrition"
                ]
              }
            ],
            "initialResult": "無法判斷",
            "initialNote": "未提及提早終止，不能推定是否依原計畫完成。",
            "initialContext": ""
          }
        ]
      }
    ],
    "annotatedPdf": "assets/study-q03-annotated.pdf",
    "glossary": [
      [
        "治療意向分析（ITT）",
        "依受試者最初被隨機分派的組別進行分析。"
      ]
    ],
    "lookupPath": "流程圖 → 結果：收案與分析 → 方法：統計分析",
    "lookupNote": "",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 2
    },
    "lookupEvidence": [
      "q03_flow",
      "q03_attrition",
      "q03_analysis"
    ],
    "considerPages": [
      2
    ],
    "overallLink": "第 1 點有交代人數，不代表第 2 點已符合；第 2 點為「否」是本題總評的主要依據，第 3 點則資訊不足。"
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
        "key": "q04_design",
        "page": 2,
        "label": "方法｜研究設計與隨機分派（p.46）",
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
        "label": "方法｜混合式衛教方案（p.46）",
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
        "key": "q04_collect",
        "page": 4,
        "label": "方法｜資料收集過程（p.48）",
        "blockIds": [
          5,
          6,
          7
        ]
      },
      {
        "key": "q04_limitations",
        "page": 8,
        "label": "討論後｜研究限制與建議（p.52）",
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
        "label": "作者貢獻度｜資料收集與分析（p.52）",
        "blockIds": [
          12,
          13
        ],
        "lineSlices": [
          [
            13,
            1,
            3
          ]
        ]
      },
      {
        "key": "q04_abstract",
        "page": 1,
        "label": "摘要｜方法：單盲與分組（p.45）",
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
        "key": "q04_education47",
        "page": 3,
        "label": "方法｜電話追蹤與執行紀錄（p.47）",
        "blockIds": [
          2
        ]
      },
      {
        "key": "q04_angle48",
        "page": 4,
        "label": "方法｜量角器測量程序（p.48）",
        "blockIds": [
          2
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
          "摘要與研究設計稱為「單盲」，但未說明盲化的對象是否為受試者。"
        ],
        "reasonEvidence": [
          [
            "q04_abstract",
            "q04_design"
          ]
        ],
        "reasonKinds": [
          "check"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "摘要與研究設計稱為「單盲」，但未說明盲化的對象是否為受試者。",
                "kind": "check",
                "refs": [
                  "q04_abstract",
                  "q04_design"
                ]
              }
            ],
            "initialResult": "無法判斷",
            "initialNote": "未交代受試者是否盲化。",
            "initialContext": ""
          }
        ]
      },
      {
        "id": "4(b)",
        "title": "研究者（給予介入者）是否對其給予受試者的介入措施盲化？",
        "english": "Were the investigators ‘blind’ to the intervention they were giving to participants?",
        "answer": "否",
        "reasons": [
          "研究者於術後第 3 天提供一對一衛教與回覆示教，並執行電話諮詢；給予介入者知道自己提供的介入內容。"
        ],
        "reasonEvidence": [
          [
            "q04_education46",
            "q04_education47",
            "q04_authors"
          ]
        ],
        "reasonKinds": [
          "report"
        ],
        "responses": [
          {
            "considerIndex": 1,
            "points": [
              {
                "text": "研究者於術後第 3 天提供一對一衛教與回覆示教，並執行電話諮詢；給予介入者知道自己提供的介入內容。",
                "kind": "report",
                "refs": [
                  "q04_education46",
                  "q04_education47",
                  "q04_authors"
                ]
              }
            ],
            "initialResult": "否",
            "initialNote": "介入者知道自己提供的介入。",
            "initialContext": ""
          }
        ]
      },
      {
        "id": "4(c)",
        "title": "評估／分析結果的人員是否盲化？",
        "english": "Were the people assessing/analysing outcome/s ‘blinded’?",
        "answer": "否",
        "reasons": [
          "結果評估：介入、資料收集與量角器測量由同一研究者執行；研究限制亦明確交代此點。",
          "資料分析：由黃曉令負責，文中未說明分析者是否知道分組。"
        ],
        "reasonEvidence": [
          [
            "q04_collect",
            "q04_angle48",
            "q04_limitations"
          ],
          [
            "q04_authors"
          ]
        ],
        "reasonKinds": [
          "report",
          "check"
        ],
        "responses": [
          {
            "considerIndex": 2,
            "points": [
              {
                "text": "結果評估：介入、資料收集與量角器測量由同一研究者執行；研究限制亦明確交代此點。",
                "kind": "report",
                "refs": [
                  "q04_collect",
                  "q04_angle48",
                  "q04_limitations"
                ]
              },
              {
                "text": "資料分析：由黃曉令負責，文中未說明分析者是否知道分組。",
                "kind": "check",
                "refs": [
                  "q04_authors"
                ]
              }
            ],
            "initialResult": "否",
            "initialNote": "結果評估者未盲化；分析者是否盲化未交代。",
            "initialContext": ""
          }
        ]
      }
    ],
    "annotatedPdf": "assets/study-q04-annotated.pdf",
    "glossary": [
      [
        "盲法／盲化（Blinding）",
        "受試者分組後，讓特定人員不知道受試者所屬的組別。盲化的對象可以是受試者、給予介入者、結果評估者或資料分析者。\n\n目的：減少知道組別對研究過程及結果評估的影響。"
      ],
      [
        "受試者盲化｜對應 4(a)",
        "參與研究的病人不知道自己被分到實驗組或控制組，也不知道自己接受的是哪一組處置。"
      ],
      [
        "給予介入者盲化｜對應 4(b)",
        "負責提供處置或照護的人員，不知道受試者接受的是實驗組或控制組的處置。"
      ],
      [
        "結果評估者與資料分析者盲化｜對應 4(c)",
        "結果評估者負責收集、測量或判讀結果；資料分析者負責統計分析。兩者的工作不同，須分別確認是否知道受試者的分組，或資料代表哪一組。"
      ],
      [
        "單盲、雙盲、三盲（Single／Double／Triple Blind）",
        "課堂圖示以三種情形說明：單盲為受試者不知道分組；雙盲為受試者及提供處置者不知道分組；三盲再加上資料分析者不知道分組。\n\n這些名稱須搭配文章實際交代的角色閱讀；只寫「單盲」而未交代對象，仍不足以確認誰受到盲化。"
      ]
    ],
    "glossarySources": "課堂資料：《RCT說明》，PDF 第 15 頁；盲化角色對照 CASP 2024 第 4(a)–4(c) 題。",
    "lookupPath": "方法：盲法資訊 → 測量程序 → 研究限制",
    "lookupNote": "本文未設獨立的 Blinding／Masking 小節。",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 2
    },
    "lookupEvidence": [
      "q04_design",
      "q04_education46",
      "q04_collect",
      "q04_limitations",
      "q04_authors"
    ],
    "considerPages": [
      2,
      3
    ],
    "overallLink": "4(b)、4(c) 為「否」，支持整體判讀「否」；4(a) 資訊不足。"
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
        "是否清楚列出各組的基準特性，例如年齡、性別、社經群體？",
        "Were the baseline characteristics of each study group (e.g. age, sex, socio-economic group) clearly set out?"
      ],
      [
        "各組之間是否存在可能影響結果的差異？",
        "Were there any differences between the study groups that could affect the outcome/s?"
      ]
    ],
    "evidence": [
      {
        "key": "q05_table1",
        "page": 5,
        "label": "結果｜表一基準特性（p.49）",
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
        "label": "結果｜基準特性敘述（p.48）",
        "blockIds": [
          13
        ]
      },
      {
        "key": "q05_attrition",
        "page": 4,
        "label": "結果｜流失與分析人數（p.48）",
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
          "表一列出年齡、性別、BMI、慢性病、手術經驗與部位、術前疼痛及膝關節角度等特性。",
          "未列教育程度、社經資料、主要照顧者及數位能力。",
          "表一各項比較均 p > .05；女性比例為實驗組 76.9%、控制組 61.5%。",
          "基準資料以兩組各 26 人呈現，實際分析為 22 人與 26 人；排除後兩組是否仍相似，未另行呈現。",
          "表一「TKR 經驗」實驗組列「無 4、有 22」，與全體「無 41、有 11」的加總不一致。"
        ],
        "reasonEvidence": [
          [
            "q05_table1",
            "q05_baseline48"
          ],
          [
            "q05_table1"
          ],
          [
            "q05_table1"
          ],
          [
            "q05_table1",
            "q05_attrition"
          ],
          [
            "q05_table1"
          ]
        ],
        "reasonKinds": [
          "report",
          "check",
          "report",
          "check",
          "report"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "表一列出年齡、性別、BMI、慢性病、手術經驗與部位、術前疼痛及膝關節角度等特性。",
                "kind": "report",
                "refs": [
                  "q05_table1",
                  "q05_baseline48"
                ]
              },
              {
                "text": "未列教育程度、社經資料、主要照顧者及數位能力。",
                "kind": "check",
                "refs": [
                  "q05_table1"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "主要基準特性有列出，未列項目仍保留查核。",
            "initialContext": ""
          },
          {
            "considerIndex": 1,
            "points": [
              {
                "text": "表一各項比較均 p > .05；女性比例為實驗組 76.9%、控制組 61.5%。",
                "kind": "report",
                "refs": [
                  "q05_table1"
                ]
              },
              {
                "text": "基準資料以兩組各 26 人呈現，實際分析為 22 人與 26 人；排除後兩組是否仍相似，未另行呈現。",
                "kind": "check",
                "refs": [
                  "q05_table1",
                  "q05_attrition"
                ]
              },
              {
                "text": "表一「TKR 經驗」實驗組列「無 4、有 22」，與全體「無 41、有 11」的加總不一致。",
                "kind": "report",
                "refs": [
                  "q05_table1"
                ]
              }
            ],
            "initialResult": "無法判斷",
            "initialNote": "所列差異及排除後的組成是否影響結果，無法確定。",
            "initialContext": ""
          }
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
    ],
    "lookupPath": "結果：表一基準特性與 p 值",
    "lookupNote": "",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 3
    },
    "lookupEvidence": [
      "q05_table1",
      "q05_baseline48"
    ],
    "considerPages": [
      3
    ],
    "overallLink": "依文中所列起始特性，總評為「是」；第 2 點的差異是否影響結果仍不確定，需連同保留事項閱讀。"
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
        "是否有清楚定義的試驗計畫？",
        "Was there a clearly defined study protocol?"
      ],
      [
        "若有提供額外介入，例如檢查或治療，各組是否相似？",
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
        "label": "方法｜研究設計與隨機分派（p.46）",
        "blockIds": [
          7,
          8
        ]
      },
      {
        "key": "q06_education46",
        "page": 2,
        "label": "方法｜混合式衛教方案（p.46）",
        "blockIds": [
          13,
          14,
          15
        ]
      },
      {
        "key": "q06_collect",
        "page": 4,
        "label": "方法｜資料收集過程（p.48）",
        "blockIds": [
          5,
          6,
          7
        ]
      },
      {
        "key": "q06_limitations",
        "page": 8,
        "label": "討論後｜研究限制與建議（p.52）",
        "blockIds": [
          5,
          6
        ]
      },
      {
        "key": "q06_medication",
        "page": 4,
        "label": "結果｜止痛藥與疼痛（p.48）",
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
      }
    ],
    "sourceSections": [
      {
        "id": "6",
        "title": "除了實驗的介入措施之外，各組是否接受相同程度的照護（亦即是否受到同等對待）？",
        "english": "Apart from the experimental intervention, did each study group receive the same level of care (that is, were they treated equally)?",
        "answer": "無法判斷",
        "reasons": [
          "方法說明研究流程及實驗組介入，但常規出院衛教內容未詳述，亦未提供可供核對的完整試驗計畫書。",
          "兩組術前與住院期間皆接受常規治療及護理，並列出相同的常規止痛藥醫囑。",
          "出院後是否另接受其他復健或治療，文中未交代，無法確認兩組其他照護是否相同。",
          "依方法段，兩組均安排術前基準測量，術後追蹤時點為第 1、6、12、16 週。"
        ],
        "reasonEvidence": [
          [
            "q06_design",
            "q06_education46",
            "q06_collect"
          ],
          [
            "q06_design",
            "q06_medication"
          ],
          [
            "q06_design",
            "q06_collect",
            "q06_limitations"
          ],
          [
            "q06_collect"
          ]
        ],
        "reasonKinds": [
          "check",
          "report",
          "check",
          "report"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "方法說明研究流程及實驗組介入，但常規出院衛教內容未詳述，亦未提供可供核對的完整試驗計畫書。",
                "kind": "check",
                "refs": [
                  "q06_design",
                  "q06_education46",
                  "q06_collect"
                ]
              }
            ],
            "initialResult": "無法判斷",
            "initialNote": "常規衛教內容與完整試驗計畫資訊不足。",
            "initialContext": ""
          },
          {
            "considerIndex": 1,
            "points": [
              {
                "text": "兩組術前與住院期間皆接受常規治療及護理，並列出相同的常規止痛藥醫囑。",
                "kind": "report",
                "refs": [
                  "q06_design",
                  "q06_medication"
                ]
              },
              {
                "text": "出院後是否另接受其他復健或治療，文中未交代，無法確認兩組其他照護是否相同。",
                "kind": "check",
                "refs": [
                  "q06_design",
                  "q06_collect",
                  "q06_limitations"
                ]
              }
            ],
            "initialResult": "無法判斷",
            "initialNote": "出院後其他照護是否相同未交代。",
            "initialContext": ""
          },
          {
            "considerIndex": 2,
            "points": [
              {
                "text": "依方法段，兩組均安排術前基準測量，術後追蹤時點為第 1、6、12、16 週。",
                "kind": "report",
                "refs": [
                  "q06_collect"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "兩組追蹤時點相同。",
            "initialContext": ""
          }
        ]
      }
    ],
    "annotatedPdf": "assets/study-q06-annotated.pdf",
    "glossary": [],
    "lookupPath": "方法：介入／對照與追蹤 → 討論：研究限制",
    "lookupNote": "",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 3
    },
    "lookupEvidence": [
      "q06_design",
      "q06_education46",
      "q06_collect",
      "q06_limitations"
    ],
    "considerPages": [
      3
    ],
    "overallLink": "第 3 點有交代相同追蹤時點，但第 1、2 點資訊不足，因此總評為「無法判斷」。"
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
        "是否進行檢定力計算？",
        "Was a power calculation undertaken?"
      ],
      [
        "測量哪些結果？這些結果是否明確界定？",
        "What outcomes were measured, and were they clearly specified?"
      ],
      [
        "結果如何表達？若為二元結果，是否報告相對效果與絕對效果？",
        "How were the results expressed? For binary outcomes, were relative and absolute effects reported?"
      ],
      [
        "是否在每個追蹤時點，報告各研究組別的每項結果？",
        "Were the results reported for each outcome in each study group at each follow-up interval?"
      ],
      [
        "是否有遺漏或不完整的資料？",
        "Was there any missing or incomplete data?"
      ],
      [
        "兩組退出情形是否不同，且可能影響結果？",
        "Was there differential drop-out between the study groups that could affect the results?"
      ],
      [
        "是否指出潛在偏差來源？",
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
        "key": "q07_figure2",
        "page": 6,
        "label": "結果｜圖二疼痛指標（p.50）",
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
        "label": "結果｜圖三關節角度（p.51）",
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
        "label": "結果｜表二 GEE 分析（p.51）",
        "boxPoints": [
          50,
          505,
          545,
          710
        ]
      },
      {
        "page": 1,
        "label": "摘要｜結果（p.45）",
        "blockIds": [
          11
        ],
        "key": "q07_abstractResults"
      },
      {
        "key": "q07_vas",
        "page": 3,
        "label": "方法｜研究工具：疼痛量表（p.47）",
        "blockIds": [
          6,
          7
        ]
      },
      {
        "key": "q07_angle47",
        "page": 3,
        "label": "方法｜研究工具：電子量角器（p.47）",
        "blockIds": [
          8,
          9
        ]
      },
      {
        "key": "q07_angle48",
        "page": 4,
        "label": "方法｜量角器測量程序（p.48）",
        "blockIds": [
          2
        ]
      },
      {
        "key": "q07_power",
        "page": 2,
        "label": "方法｜樣本數計算（p.46）",
        "blockIds": [
          12
        ]
      },
      {
        "key": "q07_table1",
        "page": 5,
        "label": "結果｜表一基準特性（p.49）",
        "boxPoints": [
          50,
          86,
          545,
          500
        ]
      },
      {
        "key": "q07_flow",
        "page": 3,
        "label": "流程圖｜圖一收案、分派與追蹤（p.47）",
        "boxPoints": [
          50,
          86,
          545,
          427
        ]
      },
      {
        "key": "q07_attrition",
        "page": 4,
        "label": "結果｜流失與分析人數（p.48）",
        "blockIds": [
          10,
          11,
          12
        ]
      },
      {
        "key": "q07_analysis",
        "page": 4,
        "label": "方法｜資料處理與分析（p.48）",
        "blockIds": [
          8,
          9
        ]
      },
      {
        "key": "q07_limitations",
        "page": 8,
        "label": "討論後｜研究限制與建議（p.52）",
        "blockIds": [
          5,
          6
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
          "有檢定力計算：G*Power 3.1，effect size .33、α .05、power .80、2 組重複測量 5 次，估 46 人，考量 10% 流失收案 52 人。",
          "以 VAS 0–10 分測量「現在的疼痛」「過去 1 週最嚴重疼痛」「過去 1 週平均疼痛」，並以電子量角器測量伸膝與屈膝角度。",
          "工具段引用 VAS 的再測信度（ICC .79），並說明量角器誤差 < 1° 及測量程序。",
          "圖二、圖三以平均值及 Mann-Whitney Z、p 值呈現；表二列出 GEE 的 β、SE、p 值。",
          "主要結果是疼痛分數及角度，屬連續量；本提示中的「二元結果」部分不適用。",
          "表一列術前基準，圖二、圖三列出各組術後各時間點的結果；但未完整提供各組、各時間點的標準差。",
          "相較原先隨機分派 52 人，最後分析 48 人；未提供未納入者的結果資料，也未交代如何處理這些資料。",
          "未納入分析的 4 人全在實驗組（4/26），控制組無人流失或被排除（0/26）；文中未提供這項組間差異的影響分析。",
          "作者在研究限制中說明，介入措施及資料收集者為同一研究者，並提及研究者主觀偏倚的可能。",
          "統計方法包括卡方檢定、獨立樣本 t 檢定、Mann-Whitney U 檢定及 GEE。",
          "有報告 p 值，可於表一、圖二、圖三及表二查核。"
        ],
        "reasonEvidence": [
          [
            "q07_power"
          ],
          [
            "q07_vas",
            "q07_angle47",
            "q07_angle48"
          ],
          [
            "q07_vas",
            "q07_angle47",
            "q07_angle48"
          ],
          [
            "q07_figure2",
            "q07_figure3",
            "q07_table2"
          ],
          [
            "q07_vas",
            "q07_angle47",
            "q07_table2"
          ],
          [
            "q07_table1",
            "q07_figure2",
            "q07_figure3",
            "q07_table2"
          ],
          [
            "q07_flow",
            "q07_attrition",
            "q07_analysis"
          ],
          [
            "q07_flow",
            "q07_attrition",
            "q07_analysis"
          ],
          [
            "q07_limitations"
          ],
          [
            "q07_analysis"
          ],
          [
            "q07_table1",
            "q07_figure2",
            "q07_figure3",
            "q07_table2"
          ]
        ],
        "reasonKinds": [
          "report",
          "report",
          "report",
          "report",
          "report",
          "check",
          "check",
          "check",
          "report",
          "report",
          "report"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "有檢定力計算：G*Power 3.1，effect size .33、α .05、power .80、2 組重複測量 5 次，估 46 人，考量 10% 流失收案 52 人。",
                "kind": "report",
                "refs": [
                  "q07_power"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "有檢定力與樣本數計算。",
            "initialContext": ""
          },
          {
            "considerIndex": 1,
            "points": [
              {
                "text": "以 VAS 0–10 分測量「現在的疼痛」「過去 1 週最嚴重疼痛」「過去 1 週平均疼痛」，並以電子量角器測量伸膝與屈膝角度。",
                "kind": "report",
                "refs": [
                  "q07_vas",
                  "q07_angle47",
                  "q07_angle48"
                ]
              },
              {
                "text": "工具段引用 VAS 的再測信度（ICC .79），並說明量角器誤差 < 1° 及測量程序。",
                "kind": "report",
                "refs": [
                  "q07_vas",
                  "q07_angle47",
                  "q07_angle48"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "結果指標及測量方式有界定。",
            "initialContext": ""
          },
          {
            "considerIndex": 2,
            "points": [
              {
                "text": "圖二、圖三以平均值及 Mann-Whitney Z、p 值呈現；表二列出 GEE 的 β、SE、p 值。",
                "kind": "report",
                "refs": [
                  "q07_figure2",
                  "q07_figure3",
                  "q07_table2"
                ]
              },
              {
                "text": "主要結果是疼痛分數及角度，屬連續量；本提示中的「二元結果」部分不適用。",
                "kind": "report",
                "refs": [
                  "q07_vas",
                  "q07_angle47",
                  "q07_table2"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "有交代連續結果的表達方式；二元結果部分不適用。",
            "initialContext": ""
          },
          {
            "considerIndex": 3,
            "points": [
              {
                "text": "表一列術前基準，圖二、圖三列出各組術後各時間點的結果；但未完整提供各組、各時間點的標準差。",
                "kind": "check",
                "refs": [
                  "q07_table1",
                  "q07_figure2",
                  "q07_figure3",
                  "q07_table2"
                ]
              }
            ],
            "initialResult": "否",
            "initialNote": "各組各時點的變異量未完整提供。",
            "initialContext": ""
          },
          {
            "considerIndex": 4,
            "points": [
              {
                "text": "相較原先隨機分派 52 人，最後分析 48 人；未提供未納入者的結果資料，也未交代如何處理這些資料。",
                "kind": "check",
                "refs": [
                  "q07_flow",
                  "q07_attrition",
                  "q07_analysis"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "有未納入的結果資料，處理方式未交代。",
            "initialContext": "有遺漏／不完整資料"
          },
          {
            "considerIndex": 5,
            "points": [
              {
                "text": "未納入分析的 4 人全在實驗組（4/26），控制組無人流失或被排除（0/26）；文中未提供這項組間差異的影響分析。",
                "kind": "check",
                "refs": [
                  "q07_flow",
                  "q07_attrition",
                  "q07_analysis"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "兩組未納入分析的人數不同；影響大小未交代。",
            "initialContext": "有組間退出差異"
          },
          {
            "considerIndex": 6,
            "points": [
              {
                "text": "作者在研究限制中說明，介入措施及資料收集者為同一研究者，並提及研究者主觀偏倚的可能。",
                "kind": "report",
                "refs": [
                  "q07_limitations"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "作者有指出可能的偏差來源。",
            "initialContext": ""
          },
          {
            "considerIndex": 7,
            "points": [
              {
                "text": "統計方法包括卡方檢定、獨立樣本 t 檢定、Mann-Whitney U 檢定及 GEE。",
                "kind": "report",
                "refs": [
                  "q07_analysis"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "有交代統計檢定方法。",
            "initialContext": ""
          },
          {
            "considerIndex": 8,
            "points": [
              {
                "text": "有報告 p 值，可於表一、圖二、圖三及表二查核。",
                "kind": "report",
                "refs": [
                  "q07_table1",
                  "q07_figure2",
                  "q07_figure3",
                  "q07_table2"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "有報告 p 值。",
            "initialContext": ""
          }
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
      ],
      [
        "效果量（Effect size）",
        "用來表示差異或關係大小的數值，也是估算所需樣本數的設定之一。"
      ],
      [
        "α｜顯著水準",
        "在統計檢定前設定的判定標準，用來控制「實際沒有差異，卻判成有差異」的機率；本研究設定為 .05。"
      ],
      [
        "Power｜檢定力",
        "當實際存在差異時，統計檢定能夠發現差異的能力；本研究樣本數規劃設定為 .80。"
      ],
      [
        "信度與 ICC｜組內相關係數",
        "信度描述測量結果的一致性與穩定性。ICC 是用於描述重複測量一致程度的指標之一。"
      ],
      [
        "連續結果與二元結果",
        "連續結果以數值表達，例如本研究的疼痛分數與角度；二元結果則以兩種類別表達。"
      ]
    ],
    "lookupPath": "結果圖表 → 摘要結果 → 方法：結果測量",
    "lookupNote": "",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 4
    },
    "lookupEvidence": [
      "q07_figure2",
      "q07_figure3",
      "q07_table2",
      "q07_abstractResults",
      "q07_vas",
      "q07_angle47",
      "q07_angle48"
    ],
    "considerPages": [
      3,
      4
    ],
    "overallLink": "第 4 點顯示結果呈現不完整；第 5、6 點的 ✓ 表示有資料缺漏與退出差異，合併支持本題總評「否」，不以打勾多寡決定總評。"
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
        "是否報告信賴區間（CI）？",
        "Were confidence intervals (CIs) reported?"
      ]
    ],
    "evidence": [
      {
        "key": "q08_table2",
        "page": 7,
        "label": "結果｜表二 GEE 分析（p.51）",
        "boxPoints": [
          50,
          505,
          545,
          710
        ]
      },
      {
        "page": 4,
        "label": "結果｜GEE 敘述：CI 查核（p.48）",
        "blockIds": [
          17,
          18,
          19
        ],
        "key": "q08_gee48"
      },
      {
        "page": 5,
        "label": "結果｜GEE 續段：CI 查核（p.49）",
        "blockIds": [
          43
        ],
        "key": "q08_gee49"
      }
    ],
    "sourceSections": [
      {
        "id": "8",
        "title": "是否有列出介入／治療效果估計值的精確度？",
        "english": "Was the precision of the estimate of the intervention or treatment effect reported?",
        "answer": "否",
        "reasons": [
          "表二列出 β、SE、p 值，但未列信賴區間；全文未報告 CI。"
        ],
        "reasonEvidence": [
          [
            "q08_table2",
            "q08_gee48",
            "q08_gee49"
          ]
        ],
        "reasonKinds": [
          "check"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "表二列出 β、SE、p 值，但未列信賴區間；全文未報告 CI。",
                "kind": "check",
                "refs": [
                  "q08_table2",
                  "q08_gee48",
                  "q08_gee49"
                ]
              }
            ],
            "initialResult": "否",
            "initialNote": "未報告信賴區間。",
            "initialContext": ""
          }
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
    ],
    "lookupPath": "結果表格 → 結果敘述：CI 查核",
    "lookupNote": "",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 4
    },
    "lookupEvidence": [
      "q08_table2",
      "q08_gee48",
      "q08_gee49"
    ],
    "considerPages": [
      4
    ],
    "overallLink": "本題直接詢問是否報告 CI；第 1 點未報告，因此總評為「否」。"
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
        "介入或治療效果有多大？",
        "What was the size of the intervention or treatment effect?"
      ],
      [
        "是否報告各研究組別的傷害或非預期影響？",
        "Were harms or unintended effects reported for each study group?"
      ],
      [
        "是否進行成本效益分析？（成本效益分析可比較照護同一疾病或問題時所使用的不同介入措施。）",
        "Was a cost-effectiveness analysis undertaken? (Cost-effectiveness analysis allows a comparison to be made between different interventions used in the care of the same condition or problem.)"
      ]
    ],
    "evidence": [
      {
        "key": "q09_attrition",
        "page": 4,
        "label": "結果｜流失與分析人數（p.48）",
        "blockIds": [
          10,
          11,
          12
        ]
      },
      {
        "key": "q09_flow",
        "page": 3,
        "label": "流程圖｜圖一收案、分派與追蹤（p.47）",
        "boxPoints": [
          50,
          86,
          545,
          427
        ]
      },
      {
        "page": 8,
        "label": "討論｜關節角度與活動（p.52）",
        "blockIds": [
          3,
          4
        ],
        "key": "q09_discussion52"
      },
      {
        "page": 8,
        "label": "臨床應用（p.52）",
        "blockIds": [
          10,
          11
        ],
        "key": "q09_application"
      },
      {
        "key": "q09_medication",
        "page": 4,
        "label": "結果｜止痛藥與疼痛（p.48）",
        "blockIds": [
          14,
          15
        ]
      },
      {
        "key": "q09_angleResults",
        "page": 4,
        "label": "結果｜關節角度敘述（p.48）",
        "blockIds": [
          16
        ]
      },
      {
        "key": "q09_figure2",
        "page": 6,
        "label": "結果｜圖二疼痛指標（p.50）",
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
        "label": "結果｜圖三關節角度（p.51）",
        "boxPoints": [
          50,
          86,
          545,
          483
        ]
      },
      {
        "key": "q09_conclusion",
        "page": 8,
        "label": "結論｜介入成效與安全敘述（p.52）",
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
          "第 16 週「現在的疼痛」實驗組 1.5 分、控制組 2.8 分，約差 1.3 分；伸膝角度為 16.5° 與 21.0°，相差 4.5°。",
          "屈膝角度的組間差異未達統計顯著；止痛藥使用天數為 13.4 天與 21.81 天。",
          "實驗組有 1 人因胃穿孔住院而流失，但未系統性提供兩組的不良事件資料。結論雖稱介入「安全且易於實施」，仍缺少完整的傷害資料。",
          "未進行成本或成本效益分析。"
        ],
        "reasonEvidence": [
          [
            "q09_medication",
            "q09_angleResults",
            "q09_figure2",
            "q09_figure3"
          ],
          [
            "q09_medication",
            "q09_angleResults",
            "q09_figure3"
          ],
          [
            "q09_flow",
            "q09_attrition",
            "q09_conclusion"
          ],
          [
            "q09_application",
            "q09_conclusion"
          ]
        ],
        "reasonKinds": [
          "report",
          "report",
          "check",
          "check"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "第 16 週「現在的疼痛」實驗組 1.5 分、控制組 2.8 分，約差 1.3 分；伸膝角度為 16.5° 與 21.0°，相差 4.5°。",
                "kind": "report",
                "refs": [
                  "q09_medication",
                  "q09_angleResults",
                  "q09_figure2",
                  "q09_figure3"
                ]
              },
              {
                "text": "屈膝角度的組間差異未達統計顯著；止痛藥使用天數為 13.4 天與 21.81 天。",
                "kind": "report",
                "refs": [
                  "q09_medication",
                  "q09_angleResults",
                  "q09_figure3"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "有效果大小的數據可查核。",
            "initialContext": ""
          },
          {
            "considerIndex": 1,
            "points": [
              {
                "text": "實驗組有 1 人因胃穿孔住院而流失，但未系統性提供兩組的不良事件資料。結論雖稱介入「安全且易於實施」，仍缺少完整的傷害資料。",
                "kind": "check",
                "refs": [
                  "q09_flow",
                  "q09_attrition",
                  "q09_conclusion"
                ]
              }
            ],
            "initialResult": "否",
            "initialNote": "未完整報告各組傷害資料。",
            "initialContext": ""
          },
          {
            "considerIndex": 2,
            "points": [
              {
                "text": "未進行成本或成本效益分析。",
                "kind": "check",
                "refs": [
                  "q09_application",
                  "q09_conclusion"
                ]
              }
            ],
            "initialResult": "否",
            "initialNote": "未報告成本效益分析。",
            "initialContext": ""
          }
        ]
      }
    ],
    "annotatedPdf": "assets/study-q09-annotated.pdf",
    "glossary": [],
    "lookupPath": "結果：流失事件 → 討論 → 臨床應用",
    "lookupNote": "胃穿孔記於流失說明，未另設不良事件小節。",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 5
    },
    "lookupEvidence": [
      "q09_attrition",
      "q09_flow",
      "q09_discussion52",
      "q09_application"
    ],
    "considerPages": [
      4
    ],
    "overallLink": "第 1 點有效果數據，但第 2、3 點缺少完整傷害與成本資料，無法完成利弊權衡，因此總評為「無法判斷」。"
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
        "研究受試者是否與您照護的人相似？",
        "Are the study participants similar to the people in your care?"
      ],
      [
        "您的族群與研究受試者之間的差異，是否會改變研究所報告的結果？",
        "Would any differences between your population and the study participants alter the outcomes reported in the study?"
      ],
      [
        "這些結果對您的族群是否重要？",
        "Are the outcomes important to your population?"
      ],
      [
        "是否有您想知道，卻未被研究或報告的結果？",
        "Are there any outcomes you would have wanted information on that have not been studied or reported?"
      ],
      [
        "是否有會影響您決策的研究限制？",
        "Are there any limitations of the study that would affect your decision?"
      ]
    ],
    "evidence": [
      {
        "key": "q10_sample",
        "page": 2,
        "label": "方法｜研究對象與納排條件（p.46）",
        "blockIds": [
          9,
          10,
          11
        ]
      },
      {
        "key": "q10_table1",
        "page": 5,
        "label": "結果｜表一基準特性（p.49）",
        "boxPoints": [
          50,
          86,
          545,
          500
        ]
      },
      {
        "key": "q10_limitations",
        "page": 8,
        "label": "討論後｜研究限制與建議（p.52）",
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
      },
      {
        "key": "q10_baseline48",
        "page": 4,
        "label": "結果｜基準特性敘述（p.48）",
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
        "page": 1,
        "label": "前言｜結果指標背景（p.45）",
        "blockIds": [
          5
        ],
        "key": "q10_frontOutcomes"
      },
      {
        "page": 3,
        "label": "方法｜研究工具與結果指標（p.47）",
        "blockIds": [
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "key": "q10_tools47"
      },
      {
        "key": "q10_figure2",
        "page": 6,
        "label": "結果｜圖二疼痛指標（p.50）",
        "boxPoints": [
          50,
          86,
          545,
          583
        ]
      },
      {
        "key": "q10_figure3",
        "page": 7,
        "label": "結果｜圖三關節角度（p.51）",
        "boxPoints": [
          50,
          86,
          545,
          483
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
          "研究對象為臺灣區域教學醫院、65 歲以上的單側 TKR 病人；本題的應用範圍以相近族群為限。",
          "研究排除家中無法觀看 YouTube 者、雙側及再次置換手術者；這些族群的介入效果未在本研究直接比較。",
          "疼痛及膝關節活動度是文獻前言所述的術後復原重要指標。",
          "未報告身體功能、生活品質、跌倒、再入院、滿意度、實際運動執行率及 16 週後的長期結果。",
          "作者指出單一機構收案及僅追蹤 16 週；不同場域與更長期應用的資訊有限。"
        ],
        "reasonEvidence": [
          [
            "q10_sample",
            "q10_table1",
            "q10_baseline48"
          ],
          [
            "q10_sample"
          ],
          [
            "q10_frontOutcomes"
          ],
          [
            "q10_tools47",
            "q10_figure2",
            "q10_figure3",
            "q10_limitations"
          ],
          [
            "q10_limitations"
          ]
        ],
        "reasonKinds": [
          "report",
          "check",
          "report",
          "check",
          "report"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "研究對象為臺灣區域教學醫院、65 歲以上的單側 TKR 病人；本題的應用範圍以相近族群為限。",
                "kind": "report",
                "refs": [
                  "q10_sample",
                  "q10_table1",
                  "q10_baseline48"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "以相近的老年單側 TKR 族群為應用範圍。",
            "initialContext": ""
          },
          {
            "considerIndex": 1,
            "points": [
              {
                "text": "研究排除家中無法觀看 YouTube 者、雙側及再次置換手術者；這些族群的介入效果未在本研究直接比較。",
                "kind": "check",
                "refs": [
                  "q10_sample"
                ]
              }
            ],
            "initialResult": "無法判斷",
            "initialNote": "不同族群的效果未直接比較。",
            "initialContext": ""
          },
          {
            "considerIndex": 2,
            "points": [
              {
                "text": "疼痛及膝關節活動度是文獻前言所述的術後復原重要指標。",
                "kind": "report",
                "refs": [
                  "q10_frontOutcomes"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "結果是術後復原的重要指標。",
            "initialContext": ""
          },
          {
            "considerIndex": 3,
            "points": [
              {
                "text": "未報告身體功能、生活品質、跌倒、再入院、滿意度、實際運動執行率及 16 週後的長期結果。",
                "kind": "check",
                "refs": [
                  "q10_tools47",
                  "q10_figure2",
                  "q10_figure3",
                  "q10_limitations"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "有想知道但未被研究或報告的結果。",
            "initialContext": "有未報告的結果"
          },
          {
            "considerIndex": 4,
            "points": [
              {
                "text": "作者指出單一機構收案及僅追蹤 16 週；不同場域與更長期應用的資訊有限。",
                "kind": "report",
                "refs": [
                  "q10_limitations"
                ]
              }
            ],
            "initialResult": "是",
            "initialNote": "存在會限制應用判斷的研究限制。",
            "initialContext": "有研究限制"
          }
        ]
      }
    ],
    "annotatedPdf": "assets/study-q10-annotated.pdf",
    "glossary": [],
    "lookupPath": "方法：納排條件 → 表一 → 討論：適用性",
    "lookupNote": "",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 5
    },
    "lookupEvidence": [
      "q10_sample",
      "q10_table1",
      "q10_limitations"
    ],
    "considerPages": [
      4,
      5
    ],
    "overallLink": "本題的「是」以相近族群為應用範圍，仍須連同第 2 點的不確定性及第 4、5 點的缺項與限制閱讀。"
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
        "引進此介入需要哪些資源？請考量時間、經費、技能發展或訓練需求。",
        "What resources are needed to introduce this intervention taking into account time, finances, and skills development or training needs?"
      ],
      [
        "是否能從一項或多項現有介入移出資源，重新投入新介入？",
        "Are you able to disinvest resources in one or more existing interventions in order to be able to re-invest in the new intervention?"
      ]
    ],
    "evidence": [
      {
        "page": 6,
        "label": "討論｜衛教成效與用藥（p.50）",
        "blockIds": [
          46
        ],
        "key": "q11_discussion50"
      },
      {
        "key": "q11_limitations",
        "page": 8,
        "label": "討論後｜研究限制與建議（p.52）",
        "blockIds": [
          5,
          6
        ]
      },
      {
        "page": 8,
        "label": "臨床應用（p.52）",
        "blockIds": [
          10,
          11
        ],
        "key": "q11_application"
      },
      {
        "key": "q11_education46",
        "page": 2,
        "label": "方法｜混合式衛教方案（p.46）",
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
        "label": "方法｜電話追蹤與執行紀錄（p.47）",
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
        "label": "方法｜研究設計與隨機分派（p.46）",
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
          "所需資源包括衛教手冊、YouTube 影片、術後第 3 天一對一衛教，以及出院後 4 次、每次約 5–10 分鐘電話。",
          "研究由具 22 年骨科專科護理經驗的研究者執行；推行所需的培訓時間、費用及人力成本未報告。",
          "文中未討論如何從現有介入移出資源，轉投入混合式衛教；亦未提供這項資源調整的比較資料。"
        ],
        "reasonEvidence": [
          [
            "q11_education46",
            "q11_education47"
          ],
          [
            "q11_education46",
            "q11_application"
          ],
          [
            "q11_design",
            "q11_application"
          ]
        ],
        "reasonKinds": [
          "report",
          "check",
          "check"
        ],
        "responses": [
          {
            "considerIndex": 0,
            "points": [
              {
                "text": "所需資源包括衛教手冊、YouTube 影片、術後第 3 天一對一衛教，以及出院後 4 次、每次約 5–10 分鐘電話。",
                "kind": "report",
                "refs": [
                  "q11_education46",
                  "q11_education47"
                ]
              },
              {
                "text": "研究由具 22 年骨科專科護理經驗的研究者執行；推行所需的培訓時間、費用及人力成本未報告。",
                "kind": "check",
                "refs": [
                  "q11_education46",
                  "q11_application"
                ]
              }
            ],
            "initialResult": "無法判斷",
            "initialNote": "部分資源可辨識，費用及訓練成本未交代。",
            "initialContext": ""
          },
          {
            "considerIndex": 1,
            "points": [
              {
                "text": "文中未討論如何從現有介入移出資源，轉投入混合式衛教；亦未提供這項資源調整的比較資料。",
                "kind": "check",
                "refs": [
                  "q11_design",
                  "q11_application"
                ]
              }
            ],
            "initialResult": "無法判斷",
            "initialNote": "未提供現有資源轉移的可行性資料。",
            "initialContext": ""
          }
        ]
      }
    ],
    "annotatedPdf": "assets/study-q11-annotated.pdf",
    "glossary": [],
    "lookupPath": "討論 → 研究限制 → 臨床應用",
    "lookupNote": "",
    "lookupSource": {
      "title": "casp-華蘋｜去原文哪裡找",
      "page": 5
    },
    "lookupEvidence": [
      "q11_discussion50",
      "q11_limitations",
      "q11_application"
    ],
    "considerPages": [
      5
    ],
    "overallLink": "第 1 點尚缺費用及訓練成本，第 2 點未交代資源轉移可行性，因此總評為「無法判斷」。"
  }
];
window.CASP_EVIDENCE_LEVEL = {
  "framework": "Oxford CEBM 2011",
  "questionType": "介入治療有幫助嗎？（治療益處）",
  "design": "單篇隨機臨床對照試驗（RCT）",
  "designLevel": "2",
  "appraisedLevel": "3",
  "judgmentLabel": "本次教學評讀建議",
  "qualityReasons": [
    {
      "text": "隨機分派後，4 名實驗組受試者未納入最終分析，其中 3 名因復健執行率不足被排除。",
      "question": 3,
      "page": 3,
      "label": "圖一（p.47）"
    },
    {
      "text": "介入與結果測量由同一研究者執行，作者亦於研究限制交代此點。",
      "question": 4,
      "page": 8,
      "label": "研究限制（p.52）"
    }
  ],
  "adjustment": "依中文版第 2 頁「研究品質」可降級的註解，本次將上述限制合併作為研究品質的降級理由，由等級 2 調整一級為等級 3。這是本次評讀者的判斷，研究設計仍為 RCT。",
  "precision": "未報告 CI，使精確度難以直接評估；不能據此認定 CI 很寬，本次不再因此另降一級。",
  "scoring": "等級調整依具體研究品質限制說明，不依 CASP「是／否」題數扣級。",
  "sourceLabel": "台灣護理學會卓越中心知識轉譯組譯，Oxford CEBM 證據等級（2011），第 1–2 頁。",
  "sourcePdf": "assets/oxford-cebm-2011-zh.pdf"
};
