# CASP RCT 課堂教學示範

以 CASP RCT Checklist（2024）英文原題搭配中文教學翻譯，結合張雪玲等（2023）中文 RCT 的原文頁面、證據定位與教師解析。

## 開啟方式

- 本機：以 Chrome 或 Edge 開啟 `index.html`，保留同層的 JS、CSS 與 assets 資料夾。
- GitHub Pages：將此資料夾內容放在儲存庫根目錄，在 Settings → Pages 選擇「Deploy from a branch」、實際上傳分支及 `/ (root)`。
- 不需 npm、外部字型、CDN 或伺服器後端。

## 課堂操作

1. 點選左側 CASP 題目。
2. 「引導觀察」先隱藏標示與解析，請學生找證據。
3. 點選證據位置標籤切換頁面；「顯示原文標示」可逐步提示。
4. 「示範解析」顯示核心判讀，再依需要展開深入說明及評讀寫法。
5. 「放大證據」顯示局部原文；「投影字級」放大教學文字。
6. 「45 分鐘教學路線」及「評讀總結與紙本任務」提供兩節課的銜接。

快捷鍵：Alt + 左／右方向鍵切換題目；Esc 關閉對話視窗。網址 `#q1` 至 `#q11` 可直接連到指定題目。

## 可編輯內容

- `content.js`：11 題中英內容、教學判讀、證據位置與提示。
- `assets/evidence.js`：原文頁面資訊與標示座標（百分比）。
- `app.js`：導覽、模式切換、放大及教學視窗。
- `styles.css`：版面、投影字級與手機響應式呈現。

## 版本與來源

- 英文：Critical Appraisal Skills Programme（2024）。CASP RCT Checklist。https://casp-uk.net/casp-checklists/CASP-checklist-randomised-controlled-trials-RCT-2024.pdf
- 中文參考：2020 年版中文譯本；翻譯：黃廷宇 MD，編輯：韓彥辰 MD。https://ebmrocket.com/casp-rct-checklist/
- 研究：張雪玲、黃曉令、鍾玉珠（2023）。混合式衛教對全膝關節置換術老年病人疼痛及關節角度之成效。護理雜誌，70（2），45–55。https://doi.org/10.6224/JN.202304_70(2).07

中文為教學翻譯，非 CASP 官方中文版。新增判讀為教學參考，應核對全文；「部分符合」「依情境而定」等為摘要標籤，並非 CASP 額外選項。不以各題加總作研究品質分數。

## 授權

CASP 原工具與本教材改編的翻譯／解析文字採 CC BY-NC-SA 4.0（姓名標示、非商業性、相同方式分享）：https://creativecommons.org/licenses/by-nc-sa/4.0/

研究全文及頁面圖像的權利屬原權利人，並不受上述 CASP 授權涵蓋。此教材以使用者提供的 PDF 製作；公開轉載應由發布者確認研究全文的重用授權。未修改研究原頁，標示為獨立教學圖層。

## 教學限制

本網頁用於第一節全班示範；不收集學生個資、不提供 AI 問答、不儲存學生作答。第二節四組各有不同紙本文獻，每人自行閱讀、圈畫並手寫評讀。
