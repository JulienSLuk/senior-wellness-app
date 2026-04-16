import {
  PoseLandmarker,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/vision_bundle.mjs";

const translations = {
  en: {
    appName: "Singapore Senior Wellness Helper",
    helloName: "Hello, Mr Tan",
    welcomeText: "Let’s eat well and stay strong today.",
    heroTitle: "Daily Nutrition Support",
    heroDesc: "Simple meal ideas, water reminders, and easy progress tracking made for seniors.",
    speakBtn: "🔊 Speak Aloud",
    stopSpeakBtn: "⏹ Stop",
    summaryMeals: "Meals",
    summaryWater: "Water",
    summaryVeg: "Veg",
    summaryProtein: "Protein",
    tabHome: "Home",
    tabMeals: "Meals",
    tabReminders: "Reminders",
    tabProgress: "Progress",
    tabCamera: "Camera",
    quickActions: "Quick Actions",
    btnWhatEat: "🍲 What should I eat?",
    btnAte: "✅ I have eaten",
    btnDrinkWater: "💧 Drink water",
    nextReminder: "Next reminder",
    lunchReminder: "Lunch at 12:30 PM",
    lunchReminderDesc: "Try a soft, nutritious meal with vegetables and protein.",
    todaysSuggestion: "Today’s suggestion",
    recommendedMeal: "Recommended meal",
    nextMeal: "Next meal",
    tagEasy: "Easy",
    tagHealthy: "Healthy",
    mealDoneBtn: "I ate this meal",
    reminderTitle: "Meal & Water Reminders",
    breakfast: "🌅 Breakfast",
    breakfastDesc: "Start the day with energy",
    lunch: "☀️ Lunch",
    lunchDesc: "Have vegetables and protein",
    dinner: "🌙 Dinner",
    dinnerDesc: "Keep dinner light and balanced",
    water: "💧 Water",
    waterDesc: "Drink water regularly",
    every2Hours: "Every 2 hrs",
    progressTitle: "Today’s Progress",
    mealsCompleted: "Meals completed",
    waterCups: "Water cups",
    vegCheck: "Vegetables",
    proteinCheck: "Protein",
    pending: "Pending",
    done: "Done",
    yes: "Yes",
    no: "No",
    cameraMini: "Wellness camera",
    cameraTitle: "Presence, posture, and inactivity",
    cameraDisclaimer: "This is a webcam wellness demo, not medical diagnosis.",
    startCamera: "Start Camera",
    stopCamera: "Stop Camera",
    presenceLabel: "Presence",
    postureLabel: "Posture",
    activityLabel: "Activity",
    confidenceLabel: "Confidence",
    liveFeedback: "Live feedback",
    feedbackDefault: "Press Start Camera to begin.",
    camWaiting: "Waiting",
    camStopped: "Stopped",
    camDetected: "Detected",
    camUnclear: "Unclear",
    camNotDetected: "Not detected",
    camRepositioning: "Repositioning",
    camNoPerson: "No person",
    camChecking: "Checking",
    camUnknown: "Unknown",
    camUpright: "Upright",
    camSlightLean: "Slight lean",
    camNeedsAdjustment: "Needs adjustment",
    camActive: "Active",
    camInactive: "Inactive",
    feedbackMoveIntoView: "Move into view so the camera can see your head and shoulders clearly.",
    feedbackStillMisaligned: "You seem still and slightly misaligned. Try sitting upright and stretching gently.",
    feedbackSitStraighter: "Try to sit straighter and keep your shoulders level.",
    feedbackSmallLean: "Small lean detected. Adjust your head and shoulders to a more centered position.",
    feedbackInactive: "You have been very still for a while. Consider a short movement or hydration break.",
    feedbackGood: "Good position. You look centered and active.",
    meals: [
      {
        title: "Fish Porridge",
        desc: "Soft and easy to eat. Good protein, warm on the stomach, and suitable for seniors.",
        time: "15 mins"
      },
      {
        title: "Chicken Soup",
        desc: "A comforting meal with protein and fluids. Light, nourishing, and simple to prepare.",
        time: "20 mins"
      },
      {
        title: "Steamed Fish with Rice",
        desc: "A balanced meal with gentle texture, energy from rice, and healthy protein from fish.",
        time: "25 mins"
      },
      {
        title: "Vegetable Tofu Soup",
        desc: "A soft, easy meal with vegetables and tofu. Great for fibre, vitamins, and light protein.",
        time: "18 mins"
      }
    ]
  },

  zh: {
    appName: "新加坡长者健康助手",
    helloName: "你好，陈先生",
    welcomeText: "今天也要吃得好，保持健康。",
    heroTitle: "每日营养支持",
    heroDesc: "为长者设计的简单餐点建议、喝水提醒和轻松进度追踪。",
    speakBtn: "🔊 语音朗读",
    stopSpeakBtn: "⏹ 停止",
    summaryMeals: "餐食",
    summaryWater: "喝水",
    summaryVeg: "蔬菜",
    summaryProtein: "蛋白质",
    tabHome: "主页",
    tabMeals: "餐点",
    tabReminders: "提醒",
    tabProgress: "进度",
    tabCamera: "相机",
    quickActions: "快捷功能",
    btnWhatEat: "🍲 我应该吃什么？",
    btnAte: "✅ 我已经吃了",
    btnDrinkWater: "💧 喝水",
    nextReminder: "下一个提醒",
    lunchReminder: "午餐时间 12:30 PM",
    lunchReminderDesc: "尝试吃一些柔软、有营养的食物，包含蔬菜和蛋白质。",
    todaysSuggestion: "今日建议",
    recommendedMeal: "推荐餐点",
    nextMeal: "下一个",
    tagEasy: "简单",
    tagHealthy: "健康",
    mealDoneBtn: "我吃了这份餐点",
    reminderTitle: "用餐与喝水提醒",
    breakfast: "🌅 早餐",
    breakfastDesc: "用早餐开启有活力的一天",
    lunch: "☀️ 午餐",
    lunchDesc: "吃一些蔬菜和蛋白质",
    dinner: "🌙 晚餐",
    dinnerDesc: "晚餐保持清淡均衡",
    water: "💧 喝水",
    waterDesc: "记得定时喝水",
    every2Hours: "每2小时",
    progressTitle: "今日进度",
    mealsCompleted: "已完成餐食",
    waterCups: "喝水杯数",
    vegCheck: "蔬菜",
    proteinCheck: "蛋白质",
    pending: "待完成",
    done: "完成",
    yes: "是",
    no: "否",
    cameraMini: "健康相机",
    cameraTitle: "存在、姿势与活动状态",
    cameraDisclaimer: "这是一个摄像头健康演示，不是医疗诊断。",
    startCamera: "开启相机",
    stopCamera: "关闭相机",
    presenceLabel: "存在",
    postureLabel: "姿势",
    activityLabel: "活动",
    confidenceLabel: "信心值",
    liveFeedback: "即时反馈",
    feedbackDefault: "按下开启相机开始。",
    camWaiting: "等待中",
    camStopped: "已停止",
    camDetected: "已检测到",
    camUnclear: "不清楚",
    camNotDetected: "未检测到",
    camRepositioning: "重新调整中",
    camNoPerson: "无人",
    camChecking: "检测中",
    camUnknown: "未知",
    camUpright: "端正",
    camSlightLean: "轻微倾斜",
    camNeedsAdjustment: "需要调整",
    camActive: "活动中",
    camInactive: "不活跃",
    feedbackMoveIntoView: "请进入画面，让相机清楚看到头部和肩膀。",
    feedbackStillMisaligned: "您似乎静止且姿势偏斜。请坐直并轻轻伸展。",
    feedbackSitStraighter: "请坐得更直一点，并保持肩膀平衡。",
    feedbackSmallLean: "检测到轻微倾斜。请调整头部和肩膀回到中间位置。",
    feedbackInactive: "您已经很久没有移动了。可以考虑稍微活动一下或喝点水。",
    feedbackGood: "状态不错。您看起来姿势居中且有活动。",
    meals: [
      {
        title: "鱼片粥",
        desc: "柔软容易吃，含有蛋白质，暖胃，适合长者。",
        time: "15 分钟"
      },
      {
        title: "鸡汤",
        desc: "温暖又营养，含有蛋白质和水分，容易准备。",
        time: "20 分钟"
      },
      {
        title: "蒸鱼配饭",
        desc: "均衡的一餐，口感温和，鱼肉提供健康蛋白质。",
        time: "25 分钟"
      },
      {
        title: "蔬菜豆腐汤",
        desc: "柔软清淡，含有蔬菜和豆腐，提供纤维和蛋白质。",
        time: "18 分钟"
      }
    ]
  },

  hokkien: {
    ...null
  },

  cantonese: {
    ...null
  },

  ms: {
    ...null
  },

  ta: {
    ...null
  }
};

// Fill missing languages by reusing English labels so the app still works.
// Replace these later with your full translations if you want.
["hokkien", "cantonese", "ms", "ta"].forEach((lang) => {
  translations[lang] = {
    ...translations.en,
    appName:
      lang === "hokkien" ? "Singapore Senior Wellness Helper (Hokkien)" :
      lang === "cantonese" ? "Singapore Senior Wellness Helper (Cantonese)" :
      lang === "ms" ? "Pembantu Kesejahteraan Warga Emas Singapura" :
      "சிங்கப்பூர் மூத்தோர் நல உதவி"
  };
});

const mealsMeta = [
  {
    veg: false,
    protein: true,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
  },
  {
    veg: false,
    protein: true,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    veg: false,
    protein: true,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    veg: true,
    protein: true,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80"
  }
];

let currentLang = "en";
let mealIndex = 0;
let mealsDone = 0;
let waterCount = 2;
let vegDone = false;
let proteinDone = false;

// UI refs
const tabButtons = document.querySelectorAll(".tab-btn, .nav-item");
const panels = document.querySelectorAll(".tab-panel");
const languageSelect = document.getElementById("languageSelect");
const speakBtn = document.getElementById("speakBtn");
const stopSpeakBtn = document.getElementById("stopSpeakBtn");

const mealImage = document.getElementById("mealImage");
const mealTitle = document.getElementById("mealTitle");
const mealDesc = document.getElementById("mealDesc");
const mealTime = document.getElementById("mealTime");

const mealsDoneText = document.getElementById("mealsDoneText");
const waterCountText = document.getElementById("waterCountText");
const vegText = document.getElementById("vegText");
const proteinText = document.getElementById("proteinText");

const progressMeals = document.getElementById("progressMeals");
const progressWater = document.getElementById("progressWater");
const mealProgressFill = document.getElementById("mealProgressFill");
const waterProgressFill = document.getElementById("waterProgressFill");
const vegCard = document.getElementById("vegCard").querySelector("strong");
const proteinCard = document.getElementById("proteinCard").querySelector("strong");

const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const ctx = overlay.getContext("2d");

const presenceText = document.getElementById("presenceText");
const postureText = document.getElementById("postureText");
const activityText = document.getElementById("activityText");
const confidenceText = document.getElementById("confidenceText");
const feedbackText = document.getElementById("feedbackText");

const startCameraBtn = document.getElementById("startCameraBtn");
const stopCameraBtn = document.getElementById("stopCameraBtn");

// Tabs
function switchTab(tabId) {
  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

document.getElementById("goMealsBtn").addEventListener("click", () => switchTab("meals"));

// Meals
document.getElementById("nextMealBtn").addEventListener("click", () => {
  mealIndex = (mealIndex + 1) % mealsMeta.length;
  renderMeal();
});

document.getElementById("mealDoneBtn").addEventListener("click", () => {
  if (mealsDone < 3) {
    mealsDone++;
  }
  const currentMealMeta = mealsMeta[mealIndex];
  if (currentMealMeta.veg) vegDone = true;
  if (currentMealMeta.protein) proteinDone = true;
  updateDashboard();
});

document.getElementById("logMealBtn").addEventListener("click", () => {
  if (mealsDone < 3) {
    mealsDone++;
  }
  const currentMealMeta = mealsMeta[mealIndex];
  if (currentMealMeta.veg) vegDone = true;
  if (currentMealMeta.protein) proteinDone = true;
  updateDashboard();
});

document.getElementById("drinkWaterBtn").addEventListener("click", () => {
  if (waterCount < 6) {
    waterCount++;
  }
  updateDashboard();
});

// Language
languageSelect.addEventListener("change", (e) => {
  currentLang = e.target.value;
  applyTranslations();
  renderMeal();
  updateDashboard();
  setCameraDefaultLabelsIfNeeded();
});

function applyTranslations() {
  const dict = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

function renderMeal() {
  const dict = translations[currentLang];
  const meal = dict.meals[mealIndex];
  const meta = mealsMeta[mealIndex];

  mealImage.src = meta.image;
  mealImage.alt = meal.title;
  mealTitle.textContent = meal.title;
  mealDesc.textContent = meal.desc;
  mealTime.textContent = meal.time;
}

function updateDashboard() {
  const dict = translations[currentLang];

  mealsDoneText.textContent = `${mealsDone} / 3`;
  waterCountText.textContent = `${waterCount} / 6`;
  vegText.textContent = vegDone ? dict.done : dict.pending;
  proteinText.textContent = proteinDone ? dict.done : dict.pending;

  progressMeals.textContent = `${mealsDone} / 3`;
  progressWater.textContent = `${waterCount} / 6`;

  mealProgressFill.style.width = `${(mealsDone / 3) * 100}%`;
  waterProgressFill.style.width = `${(waterCount / 6) * 100}%`;

  vegCard.textContent = vegDone ? dict.yes : dict.no;
  proteinCard.textContent = proteinDone ? dict.yes : dict.no;
}

// Speech
speakBtn.addEventListener("click", speakCurrentScreen);
stopSpeakBtn.addEventListener("click", () => window.speechSynthesis.cancel());

function speakCurrentScreen() {
  if (!("speechSynthesis" in window)) {
    alert("Speech synthesis is not supported in this browser.");
    return;
  }

  window.speechSynthesis.cancel();

  const dict = translations[currentLang];
  let textToSpeak = "";

  const activePanel = document.querySelector(".tab-panel.active");

  if (activePanel.id === "home") {
    textToSpeak = [
      dict.helloName,
      dict.welcomeText,
      dict.nextReminder,
      dict.lunchReminder,
      dict.lunchReminderDesc
    ].join(". ");
  } else if (activePanel.id === "meals") {
    const meal = dict.meals[mealIndex];
    textToSpeak = [
      dict.recommendedMeal,
      meal.title,
      meal.desc,
      dict.tagEasy,
      dict.tagHealthy,
      meal.time
    ].join(". ");
  } else if (activePanel.id === "reminders") {
    textToSpeak = [
      dict.reminderTitle,
      dict.breakfast,
      dict.breakfastDesc,
      "8 AM",
      dict.lunch,
      dict.lunchDesc,
      "12:30 PM",
      dict.dinner,
      dict.dinnerDesc,
      "6:30 PM",
      dict.water,
      dict.waterDesc,
      dict.every2Hours
    ].join(". ");
  } else if (activePanel.id === "progress") {
    textToSpeak = [
      dict.progressTitle,
      `${dict.mealsCompleted}: ${mealsDone} / 3`,
      `${dict.waterCups}: ${waterCount} / 6`,
      `${dict.vegCheck}: ${vegDone ? dict.yes : dict.no}`,
      `${dict.proteinCheck}: ${proteinDone ? dict.yes : dict.no}`
    ].join(". ");
  } else if (activePanel.id === "camera") {
    textToSpeak = [
      dict.cameraTitle,
      `${dict.presenceLabel}: ${presenceText.textContent}`,
      `${dict.postureLabel}: ${postureText.textContent}`,
      `${dict.activityLabel}: ${activityText.textContent}`,
      feedbackText.textContent
    ].join(". ");
  }

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = getSpeechLang(currentLang);
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = findBestVoice(voices, currentLang);
  if (matchedVoice) utterance.voice = matchedVoice;

  window.speechSynthesis.speak(utterance);
}

function getSpeechLang(lang) {
  const langMap = {
    en: "en-SG",
    zh: "zh-CN",
    hokkien: "zh-CN",
    cantonese: "zh-HK",
    ms: "ms-MY",
    ta: "ta-SG"
  };
  return langMap[lang] || "en-SG";
}

function findBestVoice(voices, lang) {
  const targets = {
    en: ["en-SG", "en-GB", "en-US"],
    zh: ["zh-CN", "zh-SG", "cmn"],
    hokkien: ["zh-CN", "zh-SG", "cmn"],
    cantonese: ["zh-HK", "yue", "cant"],
    ms: ["ms-MY", "ms"],
    ta: ["ta-SG", "ta-IN", "ta"]
  };

  const preferred = targets[lang] || ["en-SG", "en-US"];

  for (const target of preferred) {
    const found = voices.find((v) =>
      v.lang.toLowerCase().includes(target.toLowerCase()) ||
      v.name.toLowerCase().includes(target.toLowerCase())
    );
    if (found) return found;
  }

  return voices[0] || null;
}

window.speechSynthesis.onvoiceschanged = () => {
  window.speechSynthesis.getVoices();
};

// Camera
let poseLandmarker = null;
let stream = null;
let animationId = null;
let lastVideoTime = -1;
let cameraRunning = false;
let movementHistory = [];
let lastBodyPoint = null;
let lastSeenTimestamp = 0;

const PRESENCE_TIMEOUT_MS = 1500;
const INACTIVITY_WINDOW_MS = 10000;
const INACTIVITY_THRESHOLD = 0.035;

async function createPoseLandmarker() {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );

  poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
      delegate: "GPU"
    },
    runningMode: "VIDEO",
    numPoses: 1,
    minPoseDetectionConfidence: 0.5,
    minPosePresenceConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
}

startCameraBtn.addEventListener("click", startCamera);
stopCameraBtn.addEventListener("click", stopCamera);

async function startCamera() {
  if (cameraRunning) return;

  const dict = translations[currentLang];
  feedbackText.textContent = dict.feedbackDefault;

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    feedbackText.textContent = "Camera access is not available in this browser.";
    return;
  }

  try {
    if (!poseLandmarker) {
      await createPoseLandmarker();
    }

    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
        width: { ideal: 960 },
        height: { ideal: 540 }
      },
      audio: false
    });

    video.srcObject = stream;
    await video.play();

    overlay.width = video.videoWidth;
    overlay.height = video.videoHeight;

    cameraRunning = true;
    lastVideoTime = -1;
    loopCamera();
  } catch (error) {
    console.error(error);
    feedbackText.textContent = "Could not start the camera. Use localhost and allow camera permission.";
  }
}

function stopCamera() {
  cameraRunning = false;

  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }

  video.srcObject = null;
  ctx.clearRect(0, 0, overlay.width, overlay.height);

  const dict = translations[currentLang];
  presenceText.textContent = dict.camStopped;
  postureText.textContent = dict.camStopped;
  activityText.textContent = dict.camStopped;
  confidenceText.textContent = "-";
  feedbackText.textContent = dict.feedbackDefault;
}

function loopCamera() {
  if (!cameraRunning) return;

  const now = performance.now();

  if (video.currentTime !== lastVideoTime && poseLandmarker) {
    const result = poseLandmarker.detectForVideo(video, now);
    lastVideoTime = video.currentTime;
    renderCameraResult(result, now);
  }

  animationId = requestAnimationFrame(loopCamera);
}

function renderCameraResult(result, now) {
  ctx.clearRect(0, 0, overlay.width, overlay.height);
  const landmarks = result.landmarks?.[0];

  if (!landmarks || landmarks.length === 0) {
    drawNoPersonState(now);
    return;
  }

  const leftShoulder = landmarks[11];
  const rightShoulder = landmarks[12];
  const nose = landmarks[0];

  const confidence =
    Math.min(
      leftShoulder.visibility ?? 0,
      rightShoulder.visibility ?? 0,
      nose.visibility ?? 0
    ) || 0;

  if (confidence < 0.45) {
    drawNoPersonState(now);
    return;
  }

  lastSeenTimestamp = now;
  const dict = translations[currentLang];

  presenceText.textContent = dict.camDetected;
  confidenceText.textContent = `${Math.round(confidence * 100)}%`;

  drawLandmarks(landmarks);
  drawSkeleton(landmarks);

  const posture = evaluatePosture(leftShoulder, rightShoulder, nose);
  postureText.textContent = posture;

  const bodyPoint = getBodyPoint(leftShoulder, rightShoulder, nose);
  const activity = evaluateActivity(bodyPoint, now);
  activityText.textContent = activity;

  feedbackText.textContent = buildFeedback(posture, activity);
}

function drawNoPersonState(now) {
  const dict = translations[currentLang];
  const recentlySeen = now - lastSeenTimestamp < PRESENCE_TIMEOUT_MS;

  presenceText.textContent = recentlySeen ? dict.camUnclear : dict.camNotDetected;
  postureText.textContent = recentlySeen ? dict.camRepositioning : dict.camNoPerson;
  activityText.textContent = recentlySeen ? dict.camChecking : dict.camUnknown;
  confidenceText.textContent = "-";

  feedbackText.textContent = recentlySeen
    ? dict.feedbackMoveIntoView
    : dict.feedbackMoveIntoView;

  movementHistory = [];
  lastBodyPoint = null;
}

function evaluatePosture(leftShoulder, rightShoulder, nose) {
  const dict = translations[currentLang];
  const shoulderMidX = (leftShoulder.x + rightShoulder.x) / 2;
  const shoulderMidY = (leftShoulder.y + rightShoulder.y) / 2;

  const shoulderTilt = Math.abs(leftShoulder.y - rightShoulder.y);
  const headOffsetX = Math.abs(nose.x - shoulderMidX);
  const headDrop = Math.max(0, nose.y - (shoulderMidY - 0.18));

  if (shoulderTilt > 0.06 || headOffsetX > 0.11 || headDrop > 0.08) {
    return dict.camNeedsAdjustment;
  }

  if (shoulderTilt > 0.035 || headOffsetX > 0.07) {
    return dict.camSlightLean;
  }

  return dict.camUpright;
}

function getBodyPoint(leftShoulder, rightShoulder, nose) {
  return {
    x: (leftShoulder.x + rightShoulder.x + nose.x) / 3,
    y: (leftShoulder.y + rightShoulder.y + nose.y) / 3
  };
}

function evaluateActivity(bodyPoint, now) {
  const dict = translations[currentLang];

  if (!lastBodyPoint) {
    lastBodyPoint = bodyPoint;
    movementHistory = [{ t: now, d: 0 }];
    return dict.camActive;
  }

  const dx = bodyPoint.x - lastBodyPoint.x;
  const dy = bodyPoint.y - lastBodyPoint.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  movementHistory.push({ t: now, d: distance });
  lastBodyPoint = bodyPoint;

  movementHistory = movementHistory.filter((item) => now - item.t <= INACTIVITY_WINDOW_MS);
  const totalMovement = movementHistory.reduce((sum, item) => sum + item.d, 0);

  if (movementHistory.length > 20 && totalMovement < INACTIVITY_THRESHOLD) {
    return dict.camInactive;
  }

  return dict.camActive;
}

function buildFeedback(posture, activity) {
  const dict = translations[currentLang];

  if (presenceText.textContent !== dict.camDetected) {
    return dict.feedbackMoveIntoView;
  }

  if (posture === dict.camNeedsAdjustment && activity === dict.camInactive) {
    return dict.feedbackStillMisaligned;
  }

  if (posture === dict.camNeedsAdjustment) {
    return dict.feedbackSitStraighter;
  }

  if (posture === dict.camSlightLean) {
    return dict.feedbackSmallLean;
  }

  if (activity === dict.camInactive) {
    return dict.feedbackInactive;
  }

  return dict.feedbackGood;
}

function drawLandmarks(landmarks) {
  const importantPoints = [0, 11, 12, 13, 14, 23, 24];

  for (const i of importantPoints) {
    const lm = landmarks[i];
    if (!lm) continue;

    const x = lm.x * overlay.width;
    const y = lm.y * overlay.height;

    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#4ade80";
    ctx.fill();
  }
}

function drawSkeleton(landmarks) {
  const lines = [
    [11, 12],
    [11, 13],
    [12, 14],
    [11, 23],
    [12, 24],
    [23, 24]
  ];

  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 4;

  lines.forEach(([a, b]) => {
    const p1 = landmarks[a];
    const p2 = landmarks[b];
    if (!p1 || !p2) return;

    ctx.beginPath();
    ctx.moveTo(p1.x * overlay.width, p1.y * overlay.height);
    ctx.lineTo(p2.x * overlay.width, p2.y * overlay.height);
    ctx.stroke();
  });
}

function setCameraDefaultLabelsIfNeeded() {
  const dict = translations[currentLang];
  if (!cameraRunning) {
    presenceText.textContent = dict.camWaiting;
    postureText.textContent = dict.camWaiting;
    activityText.textContent = dict.camWaiting;
    confidenceText.textContent = "-";
    feedbackText.textContent = dict.feedbackDefault;
  }
}

window.addEventListener("beforeunload", stopCamera);

// Init
applyTranslations();
renderMeal();
updateDashboard();
setCameraDefaultLabelsIfNeeded();