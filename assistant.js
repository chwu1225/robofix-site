/* 維修小幫手：由 robot-repair-site 的 lib/repair-assistant.mjs 轉為單檔純 JS，邏輯未更動 */
const knowledge = [
  {
    "id": "model",
    "title": "先確認完整型號",
    "keywords": [
      "型號",
      "機型",
      "不知道",
      "小米",
      "米家",
      "石頭",
      "roborock"
    ],
    "answer": "您好，請先提供機身底部的完整型號，以及一張機器正面照片。如果有基站，也請確認基站型號。外觀相似的機器，零件與處理方式可能不同。",
    "question": "您的機器型號是什麼？",
    "suggestions": [
      "小米一代",
      "石頭 S5／S50",
      "其他機型"
    ]
  },
  {
    "id": "laser",
    "title": "雷射頭與錯誤 1",
    "keywords": [
      "雷射",
      "激光",
      "錯誤1",
      "錯誤一",
      "error1",
      "lds",
      "導航",
      "亂跑"
    ],
    "answer": "錯誤 1 需要一起看機型和實際動作，可能涉及雷射模組、驅動或訊號傳遞，單憑錯誤碼無法確診。請錄下啟動後約 15–30 秒的情況，並說明是主機完全不動、只有邊刷轉，還是走一下就停。",
    "question": "啟動時，機器本體和上方雷射頭分別會不會動？",
    "suggestions": [
      "主機不動，只有邊刷轉",
      "走一下就停",
      "想詢問維修費用"
    ]
  },
  {
    "id": "battery",
    "title": "中途斷電與續航變短",
    "keywords": [
      "電池",
      "斷電",
      "沒電",
      "續航",
      "電量",
      "開不了",
      "無法開機",
      "突然關機"
    ],
    "answer": "先分清楚是電量下降、完全斷電，還是出現錯誤後停止。請告訴我：離開充電座能不能開機、約使用多久會停止，以及有沒有換過電池。這些資訊能協助判斷後續檢查方向，不能只憑症狀就保證換電池會好。",
    "question": "離開充電座後可以開機嗎？",
    "suggestions": [
      "可以，但掃一半斷電",
      "離座就不能開機",
      "電池有更換過"
    ]
  },
  {
    "id": "charging",
    "title": "充電異常與錯誤 13",
    "keywords": [
      "充不進",
      "充不了",
      "不能充電",
      "無法充電",
      "錯誤13",
      "error13",
      "充電異常"
    ],
    "answer": "請先確認充電座的插頭有接妥，並留意機器接觸充電座時是否回報「充電中」。錯誤 13 或充電異常可能需要查修主機、供電與接觸情況，先不要急著購買電池或充電座。檢查時若有發熱、異味或進水，請停止使用。",
    "question": "靠上充電座時，有沒有充電提示或錯誤碼？",
    "suggestions": [
      "顯示錯誤 13",
      "完全沒有提示",
      "想聯絡維修人員"
    ]
  },
  {
    "id": "dock",
    "title": "找不到充電座",
    "keywords": [
      "不回家",
      "回充",
      "充電座附近",
      "找不到充電座",
      "回不去",
      "找不到家"
    ],
    "answer": "請先說明清掃過程是否正常、能不能持續開機，以及是完全找不到充電座，還是到了附近卻對不準。這類問題可能需要主機與您使用的充電座一起檢查，寄送前會先確認要提供哪些配件。",
    "question": "清掃時正常，只在回充時找不到充電座嗎？",
    "suggestions": [
      "清掃正常，只是不回充",
      "也會中途斷電",
      "需要一起寄充電座嗎"
    ]
  },
  {
    "id": "wheel",
    "title": "輪胎脫皮、氧化與行走異常",
    "keywords": [
      "輪子",
      "輪胎",
      "膠皮",
      "脫皮",
      "氧化",
      "走不動",
      "單邊",
      "傳動",
      "輪皮"
    ],
    "answer": "輪胎外皮老化、整個輪組故障與內部傳動異常，處理方式不一樣。請提供完整型號、左右輪照片，並說明是一邊還是兩邊有問題，以及輪子能不能轉動。實際更換項目與費用要確認機型後再報價。",
    "question": "是外皮脫落，還是輪子本身不轉或卡住？",
    "suggestions": [
      "外皮脫落",
      "輪子卡住或不轉",
      "兩邊都有問題"
    ]
  },
  {
    "id": "water",
    "title": "基站與出水、排水問題",
    "keywords": [
      "污水",
      "水箱",
      "清水",
      "不出水",
      "上下水",
      "水位",
      "清洗盤",
      "拖布",
      "水泵",
      "水路"
    ],
    "answer": "這類問題可先詢問，查修後再決定是否承接。請提供主機與基站完整型號、錯誤訊息，以及手動清洗與自動清掃時是否有不同結果。各機型的水路和料件差異很大，需要由維修人員確認是否受理。",
    "question": "您的主機／基站型號，以及畫面上的錯誤訊息是什麼？",
    "suggestions": [
      "清洗盤水位過高",
      "不出水",
      "污水無法回收"
    ]
  },
  {
    "id": "noise",
    "title": "異音、吸力與刷頭",
    "keywords": [
      "異音",
      "噪音",
      "聲音很大",
      "吸力",
      "風機",
      "主刷",
      "邊刷",
      "馬達",
      "很吵"
    ],
    "answer": "請說明聲音是從吸塵風機、主刷、邊刷還是行走時出現，並提供短片。可先在關機狀態查看外露刷頭是否纏繞異物；不要帶電拆機。若有燒焦味、異常發熱或曾吸到液體，請停止使用，改由人工確認。",
    "question": "異音出現時，機器在清掃、轉彎還是回充？",
    "suggestions": [
      "清掃時有異音",
      "邊刷不轉",
      "想聯絡維修人員"
    ]
  },
  {
    "id": "board",
    "title": "內部錯誤與主機板",
    "keywords": [
      "內部錯誤",
      "內部異常",
      "主機板",
      "主板",
      "電路",
      "感測器"
    ],
    "answer": "「內部錯誤」不一定就是同一個零件故障，需要依機型檢查主機板、感測器及相關模組。請提供完整錯誤語音或畫面；查明原因與報價後，再決定是否維修。",
    "question": "請提供完整錯誤訊息與機器型號。",
    "suggestions": [
      "有錯誤碼",
      "只有語音提示",
      "想詢問維修費用"
    ]
  },
  {
    "id": "quote",
    "title": "報價與檢測",
    "keywords": [
      "多少錢",
      "費用",
      "價格",
      "報價",
      "價錢",
      "檢測費",
      "檢查費",
      "不修",
      "收費"
    ],
    "answer": "先提供型號和症狀，能初步判斷的情況會先說明；需要查修時，確認原因和報價後再由您決定要不要修。歷史個案的金額不一定適用您的機器，檢測、未修、運費與保固條件也會在送修前一併確認。",
    "question": "想詢價的機型和主要問題是什麼？",
    "suggestions": [
      "錯誤 1 的費用",
      "輪胎更換費用",
      "先聯絡人工確認"
    ]
  },
  {
    "id": "shipping",
    "title": "寄修與預約親送",
    "keywords": [
      "寄修",
      "寄送",
      "親送",
      "地址",
      "在哪",
      "哪裡",
      "蘆洲",
      "五股",
      "門市",
      "預約",
      "運費",
      "營業時間"
    ],
    "answer": "服務地區在新北市蘆洲，可先聯絡確認寄修或預約親送。請先取得本次受理回覆、收件資訊和要提供的配件，再寄出機器；親送也請先約時間。運費依寄送方式、尺寸與物流實際收費確認。",
    "question": "您希望寄送，還是預約親送？",
    "suggestions": [
      "我想寄修",
      "我想預約親送",
      "開啟人工聯絡方式"
    ]
  },
  {
    "id": "accessories",
    "title": "送修需要哪些配件",
    "keywords": [
      "配件",
      "一起寄",
      "一起送",
      "提供充電座",
      "主機及",
      "座充"
    ],
    "answer": "不要直接假設只寄主機就足夠。回充、充電或基站相關問題可能需要一併提供充電座或基站；若已做過交叉測試，也請告訴維修人員，由人工確認本次寄送清單。",
    "question": "這次是充電／回充問題，還是其他故障？",
    "suggestions": [
      "充電／回充問題",
      "雷射頭問題",
      "先聯絡人工確認"
    ]
  },
  {
    "id": "warranty",
    "title": "保固與交機測試",
    "keywords": [
      "保固",
      "保修",
      "多久",
      "幾天",
      "時間",
      "交期",
      "急件"
    ],
    "answer": "交期會依查修難度、料件與排程確認，不能保證當天修好。保固按本次維修項目與報價約定；歷史上不同項目有不同條件，請在同意維修前確認範圍、期間與運費。交付後若有異常，請回到原對話說明。",
    "question": "您想確認維修時間，還是本次項目的保固？",
    "suggestions": [
      "想確認交期",
      "想確認保固",
      "維修後又有問題"
    ]
  },
  {
    "id": "payment",
    "title": "付款與維修後聯絡",
    "keywords": [
      "付款",
      "匯款",
      "帳號",
      "帳戶",
      "試用",
      "付錢",
      "收款",
      "轉帳"
    ],
    "answer": "付款時間與方式請依您這次與維修人員確認的內容。為避免使用錯誤或過期資訊，助手不提供收款帳號，也無法查帳；請在原 Facebook 或蝦皮對話中向本人取得資訊。不要把銀行資料或完整地址貼在這裡。",
    "question": "需要回到原對話聯絡維修人員嗎？",
    "suggestions": [
      "開啟人工聯絡方式",
      "詢問送修流程"
    ]
  },
  {
    "id": "factory",
    "title": "原廠保固中的機器",
    "keywords": [
      "原廠",
      "保內",
      "剛買",
      "一週",
      "新機",
      "官方",
      "授權"
    ],
    "answer": "若機器仍在原廠保固期，建議先向原購買通路或原廠確認保固服務。本工作室提供獨立維修諮詢，並非原廠授權維修中心；是否受理仍需依機型和故障確認。",
    "question": "機器大約何時購買，目前還在原廠保固內嗎？",
    "suggestions": [
      "已經過保固",
      "不確定保固狀態",
      "先聯絡人工確認"
    ]
  },
  {
    "id": "scope",
    "title": "其他品牌與較新機型",
    "keywords": [
      "s10",
      "s10+",
      "s20",
      "x10",
      "x20",
      "g20",
      "s7",
      "s8",
      "6max",
      "追覓",
      "科沃斯",
      "irobot",
      "其他機型",
      "能修",
      "可修",
      "有修",
      "承修"
    ],
    "answer": "小米、米家、石頭各系列的結構不同；新機型可先詢問，查修後再決定是否承接。請提供完整型號和症狀，其他品牌也可先詢問。是否能取得料件與費用，由維修人員確認。",
    "question": "請告訴我完整型號與最主要的異常。",
    "suggestions": [
      "提供型號與症狀",
      "先聯絡人工確認"
    ]
  }
];

const welcome = '您好，我是維修小幫手。可以幫您整理型號、故障症狀與送修問題。\n請問是哪一款掃地機，遇到什麼狀況？';
const normalize = value => value.toLowerCase().replace(/[\s／/、，。！!？?：:—_-]/gu, '');
const modelPattern = /(?:s\s?\d{1,2}|x\s?\d{1,2}|g\s?\d{1,2})(?:\+|\s?(?:pro|max|ultra))?(?:\s?(?:max|ultra))?|小米一代|米家一代|一代|小瓦|6\s?max/ig;
const symptomIds = new Set(['laser','battery','charging','dock','wheel','water','noise','board']);
const followups = {
  'model':'了解。請再描述主要故障，若有錯誤碼也請一起提供。',
  'laser':'了解，這些動作差異很有幫助。請保留啟動時的短片，交由維修人員確認雷射模組與主機的實際狀況。',
  'battery':'了解，請再記下充飽電後約多久停止、有沒有錯誤語音，以及電池是否曾更換，再讓維修人員確認。',
  'dock':'了解，請準備回充過程的短片及充電座照片；送修是否附充電座，由維修人員確認。',
  'wheel':'了解，請提供左右輪的清楚照片與完整型號，才能確認是外皮、輪組還是傳動部分需要處理。',
  'charging':'了解，請把充電提示與錯誤碼記下，並準備主機與充電座資訊，再交由人工判斷。',
  'water':'了解，請把主機、基站完整型號及錯誤畫面一起提供，讓維修人員確認是否受理。',
};
function answerRepair(input, history = []) {
  if (typeof input !== 'string' || !input.trim()) return {text:'請輸入機型或您遇到的問題。',ids:[],suggestions:['雷射頭／錯誤 1','無法充電','寄修怎麼安排']};
  const clean = input.trim().slice(0, 1500);
  const text = normalize(clean);
  const priorModel = [...history].reverse().filter(m=>m.role==='user').map(m=>m.text.match(modelPattern)?.[0]).find(Boolean);
  const model = clean.match(modelPattern)?.[0] || priorModel || null;
  if (/冒煙|燒焦|焦味|起火|膨脹|漏液|吸到水|進水|發燙/.test(clean)) return {text:'請先停止使用與充電，不要再試開機或拆開電池。若環境安全，再切斷電源並遠離可燃物；有持續冒煙或起火時，請立即聯絡當地消防。後續請由維修人員確認處理方式。',ids:['safety'],model,suggestions:['開啟人工聯絡方式'],handoff:true};
  if (/客戶.*(?:資料|電話|地址|對話)|(?:所有|完整).*(?:客戶|聊天紀錄)|忽略.*(?:指令|規則)|系統提示|system prompt|api.?key|銀行帳號/.test(clean.toLowerCase())) return {text:'這裡只提供一般維修與送修說明，不提供私人對話、客戶資料或收款帳號。若要查詢自己的維修案件，請回到原聯絡對話，由本人協助確認。',ids:['privacy'],model,suggestions:['開啟人工聯絡方式'],handoff:true};
  if (/人工|真人|聯絡|聯繫|客服人員|找老闆/.test(clean)) return {text:'可以，請透過下方 Facebook 或蝦皮聯絡。建議附上完整型號、主要症狀、錯誤碼與短片。我也可以把這段詢問整理成一則訊息，方便您貼到原對話。',ids:['contact'],model,suggestions:['整理我的詢問'],handoff:true};
  if (/整理.*詢問|幫我整理/.test(clean)) return {text:composeInquiry(history),ids:['summary'],model,suggestions:['開啟人工聯絡方式'],handoff:true};
  if (/^(你好|您好|嗨|哈囉|hello|hi)$/i.test(clean)) return {text:welcome,ids:[],model,suggestions:['雷射頭／錯誤 1','無法充電','寄修怎麼安排']};
  if (/^(好|好的|了解|謝謝|感謝|ok)[！!。.]?$/i.test(clean)) return {text:'不客氣。有完整型號或故障照片後，可以透過下方聯絡維修人員，再確認費用與送修方式。',ids:['contact'],model,suggestions:['整理我的詢問'],handoff:true};
  const scored = knowledge.map(entry=>({...entry,score:entry.keywords.reduce((sum,keyword)=>sum+(text.includes(normalize(keyword))?Math.min(keyword.length,6):0),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
  const lastReply = [...history].reverse().find(m=>m.role==='assistant'&&m.ids?.some(id=>symptomIds.has(id)||id==='model'));
  const laserFollowup = lastReply?.ids?.includes('laser') && /^(主機不動，只有邊刷轉|走一下就停|本體不動|只有邊刷轉)[。！!]?$/u.test(clean);
  if (lastReply && (laserFollowup || (!scored.length && /可以|不能|正常|不會|有|沒有|兩邊|一邊|外皮|本體|邊刷|走一下|離座/.test(clean)))) {
    const id=lastReply.ids.find(id=>followups[id]);
    if(id)return{text:followups[id],ids:[id],model,suggestions:['整理我的詢問','想詢問維修費用'],handoff:true};
  }
  if (!scored.length && model && clean.replace(model,'').trim().length<4) return {text:`了解，機型是 ${model}。請再告訴我主要故障，或機器顯示的完整錯誤碼。`,ids:['model'],model,suggestions:['雷射頭／錯誤 1','無法充電','掃一半斷電']};
  if (!scored.length) return {text:'這個問題目前沒有足夠的服務資料可以確定回答。請補充完整型號、錯誤訊息，以及異常發生時的動作；我可以協助整理，再由維修人員確認。',ids:[],model,suggestions:['提供型號與症狀','開啟人工聯絡方式'],handoff:true};
  let primary=scored[0];
  const symptom=scored.find(x=>symptomIds.has(x.id));
  const quote=scored.find(x=>x.id==='quote');
  if(symptom)primary=symptom;
  const contextualModel=model?`您提到的機型：${model}。\n\n`:'';
  let reply=contextualModel+primary.answer;
  if(quote&&primary.id!=='quote')reply+='\n\n費用需確認完整型號與故障後報價，不能直接把歷史個案價格套用到您的機器。';
  return {text:reply+'\n\n'+primary.question,ids:[primary.id,...(quote&&primary.id!=='quote'?['quote']:[])],model,suggestions:primary.suggestions,handoff:['shipping','payment','scope','quote','warranty'].includes(primary.id)};
}
function composeInquiry(history) {
  const userText=history.filter(m=>m.role==='user'&&!/整理.*詢問|開啟人工聯絡/.test(m.text)).map(m=>m.text).slice(-10);
  const model=[...userText].reverse().map(text=>text.match(modelPattern)?.[0]).find(Boolean);
  return `您好，我想詢問掃地機維修。\n\n機型：${model||'尚待確認（會提供機身標籤照片）'}\n我描述的狀況：\n${userText.map(t=>'・'+t.slice(0,400)).join('\n')||'尚待補充'}\n\n請協助確認是否可受理、費用、預估時間及需要提供哪些配件。我會另附故障照片或短片。`;
}
const publicKnowledge = knowledge;


/* ---------- 維修小幫手 UI（原 React 元件的純 JS 版本） ---------- */
(function () {
  const starters = ["雷射頭／錯誤 1", "無法充電", "輪胎脫皮", "寄修怎麼安排"];
  const root = document.getElementById("repair-assistant");
  if (!root) return;

  let messages = [{ role: "assistant", text: welcome }];
  let suggestions = starters.slice();
  let summary = "";
  let notice = "";
  let composing = false;

  root.innerHTML =
    '<div class="chat-heading"><div class="assistant-emblem" aria-hidden="true">修</div>' +
    '<div><strong>維修小幫手</strong><span>先聊症狀，再交給維修人員</span></div>' +
    '<button class="text-button reset" type="button" id="ra-reset">重新詢問</button></div>' +
    '<div class="chat-log" id="ra-log" role="log" aria-label="維修詢問對話" aria-live="polite" aria-relevant="additions text"></div>' +
    '<div class="chat-controls">' +
    '<div class="suggestions" id="ra-suggestions" aria-label="建議詢問"></div>' +
    '<form class="chat-form" id="ra-form"><label class="visually-hidden" for="chat-input">輸入機型或故障症狀</label>' +
    '<textarea id="chat-input" maxlength="1500" rows="2" placeholder="例如：石頭 S5，充飽電卻掃一半就斷電…"></textarea>' +
    '<button class="button primary" type="submit" id="ra-send" disabled>送出 <span aria-hidden="true">↗</span></button></form>' +
    '<p class="chat-privacy">本頁不保存您的輸入，重整後即清除。請勿輸入地址、電話或銀行資料。</p>' +
    '<div class="chat-actions"><button class="text-button" type="button" id="ra-summarise" disabled>整理送修詢問 <span aria-hidden="true">↓</span></button>' +
    '<a class="text-button" href="#contact">聯絡維修人員 ↗</a></div>' +
    '<div id="ra-inquiry"></div>' +
    '<p class="status-message" id="ra-status" role="status"></p></div>';

  const log = root.querySelector("#ra-log");
  const sugBox = root.querySelector("#ra-suggestions");
  const form = root.querySelector("#ra-form");
  const input = root.querySelector("#chat-input");
  const sendBtn = root.querySelector("#ra-send");
  const sumBtn = root.querySelector("#ra-summarise");
  const inquiryBox = root.querySelector("#ra-inquiry");
  const status = root.querySelector("#ra-status");

  function renderLog() {
    log.innerHTML = "";
    messages.forEach(function (m) {
      const wrap = document.createElement("div");
      wrap.className = "chat-message " + m.role;
      const label = document.createElement("span");
      label.className = "message-label";
      label.textContent = m.role === "user" ? "您的描述" : "維修小幫手";
      const p = document.createElement("p");
      p.textContent = m.text;
      wrap.append(label, p);
      log.appendChild(wrap);
    });
    log.scrollTop = log.scrollHeight;
  }
  function renderSuggestions() {
    sugBox.innerHTML = "";
    (suggestions || []).forEach(function (text) {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = text;
      b.addEventListener("click", function () { send(text); });
      sugBox.appendChild(b);
    });
  }
  function renderInquiry() {
    inquiryBox.innerHTML = "";
    if (!summary) return;
    const box = document.createElement("div");
    box.className = "inquiry";
    const lab = document.createElement("label");
    lab.setAttribute("for", "inquiry-summary");
    lab.textContent = "您的詢問摘要（可修改）";
    const ta = document.createElement("textarea");
    ta.id = "inquiry-summary";
    ta.rows = 8;
    ta.value = summary;
    ta.addEventListener("input", function () { summary = ta.value; });
    const btn = document.createElement("button");
    btn.className = "button dark";
    btn.type = "button";
    btn.textContent = "複製摘要";
    btn.addEventListener("click", function () { copySummary(ta); });
    const hint = document.createElement("p");
    hint.textContent = "請自行貼到 Facebook 或蝦皮對話，收到回覆才算受理。";
    box.append(lab, ta, btn, hint);
    inquiryBox.appendChild(box);
  }
  function setStatus(text) { notice = text; status.textContent = text; }

  function send(text) {
    if (!text || !text.trim()) return;
    const reply = answerRepair(text, messages);
    messages = messages.concat(
      { role: "user", text: text.trim().slice(0, 1500) },
      { role: "assistant", text: reply.text, ids: reply.ids }
    );
    suggestions = reply.suggestions;
    input.value = "";
    sendBtn.disabled = true;
    sumBtn.disabled = false;
    summary = "";
    setStatus("");
    renderLog(); renderSuggestions(); renderInquiry();
  }

  function copySummary(field) {
    field.focus(); field.select();
    let done = false;
    const fallback = function () {
      if (done) return;
      done = true;
      setStatus("瀏覽器未完成自動複製，文字已選取，請按 Ctrl+C；手機可長按選取文字複製。");
    };
    const timer = setTimeout(fallback, 1800);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(field.value).then(function () {
        if (done) return;
        done = true; clearTimeout(timer);
        setStatus("已複製。請開啟 Facebook 或蝦皮，貼上給維修人員。");
      }).catch(fallback);
    } else { clearTimeout(timer); fallback(); }
  }

  input.addEventListener("input", function () { sendBtn.disabled = !input.value.trim(); });
  input.addEventListener("compositionstart", function () { composing = true; });
  input.addEventListener("compositionend", function () { composing = false; });
  form.addEventListener("submit", function (e) { e.preventDefault(); if (!composing) send(input.value); });
  sumBtn.addEventListener("click", function () {
    summary = composeInquiry(messages);
    renderInquiry();
    setStatus("詢問摘要已整理，請檢查內容後複製給維修人員。");
  });
  root.querySelector("#ra-reset").addEventListener("click", function () {
    messages = [{ role: "assistant", text: welcome }];
    suggestions = starters.slice();
    input.value = ""; sendBtn.disabled = true; sumBtn.disabled = true; summary = "";
    renderLog(); renderSuggestions(); renderInquiry();
    setStatus("已開始新的詢問。");
  });

  renderLog(); renderSuggestions();
})();
