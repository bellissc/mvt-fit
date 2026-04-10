const STORAGE_KEY = "coachflow-fitness-demo-v1";
const TODAY = new Date().toISOString().slice(0, 10);

const EXERCISES = [
  { id: "ex-001", name: "Barbell Bench Press", muscleGroup: "Chest", instructions: "Plant feet, tuck shoulder blades, lower to mid-chest, and press in a controlled path.", thumbnailLabel: "BP", mediaNote: "Trainer bench setup demo with bar path and shoulder position." },
  { id: "ex-002", name: "Incline Dumbbell Press", muscleGroup: "Chest", instructions: "Keep chest tall, lower dumbbells to upper chest, then press without flaring elbows.", thumbnailLabel: "ID", mediaNote: "Incline press walkthrough focusing on elbow angle and bench setup." },
  { id: "ex-003", name: "Push-Up", muscleGroup: "Chest", instructions: "Keep a straight line from shoulders to heels, lower chest to the floor, then press up.", thumbnailLabel: "PU", mediaNote: "Bodyweight push-up demo showing plank alignment and depth." },
  { id: "ex-004", name: "Pull-Up", muscleGroup: "Back", instructions: "Start from a dead hang, pull chest toward the bar, and lower under control.", thumbnailLabel: "PL", mediaNote: "Pull-up demo with dead-hang start and smooth descent." },
  { id: "ex-005", name: "Lat Pulldown", muscleGroup: "Back", instructions: "Sit tall, pull the bar to the upper chest, and avoid leaning back excessively.", thumbnailLabel: "LP", mediaNote: "Pulldown demo highlighting torso position and shoulder control." },
  { id: "ex-006", name: "Seated Cable Row", muscleGroup: "Back", instructions: "Lead with the elbows, squeeze shoulder blades together, and return slowly.", thumbnailLabel: "SR", mediaNote: "Cable row demo showing finish position and scap squeeze." },
  { id: "ex-007", name: "Barbell Overhead Press", muscleGroup: "Shoulders", instructions: "Brace your core, press overhead in a straight line, and finish with biceps by ears.", thumbnailLabel: "OP", mediaNote: "Overhead press video focusing on lockout and rib position." },
  { id: "ex-008", name: "Dumbbell Lateral Raise", muscleGroup: "Shoulders", instructions: "Raise to shoulder height with soft elbows and avoid shrugging.", thumbnailLabel: "LR", mediaNote: "Lateral raise demo with tempo and shoulder control cues." },
  { id: "ex-009", name: "Rear Delt Fly", muscleGroup: "Shoulders", instructions: "Hinge at the hips, open the arms wide, and squeeze the rear delts.", thumbnailLabel: "RF", mediaNote: "Rear delt fly demo emphasizing torso angle and soft elbows." },
  { id: "ex-010", name: "Barbell Curl", muscleGroup: "Biceps", instructions: "Pin elbows to your sides, curl without swinging, then lower under control.", thumbnailLabel: "BC", mediaNote: "Curl demo showing strict elbow position and full range." },
  { id: "ex-011", name: "Hammer Curl", muscleGroup: "Biceps", instructions: "Keep a neutral grip, curl smoothly, and avoid moving the shoulders.", thumbnailLabel: "HC", mediaNote: "Hammer curl demo with neutral wrists and controlled reps." },
  { id: "ex-012", name: "Cable Curl", muscleGroup: "Biceps", instructions: "Maintain constant tension and keep elbows fixed beside the torso.", thumbnailLabel: "CC", mediaNote: "Cable curl demo focused on constant tension." },
  { id: "ex-013", name: "Rope Pushdown", muscleGroup: "Triceps", instructions: "Keep elbows tight to the ribs, press down fully, and split the rope at the bottom.", thumbnailLabel: "RP", mediaNote: "Pushdown demo showing rope split and elbow position." },
  { id: "ex-014", name: "Overhead Dumbbell Extension", muscleGroup: "Triceps", instructions: "Point elbows forward, lower behind the head, and extend without arching the back.", thumbnailLabel: "OE", mediaNote: "Extension demo with overhead setup and trunk bracing." },
  { id: "ex-015", name: "Close-Grip Bench Press", muscleGroup: "Triceps", instructions: "Use a narrow grip, tuck elbows, and press from the lower chest.", thumbnailLabel: "CB", mediaNote: "Close-grip bench demo with wrist stacking and elbow tracking." },
  { id: "ex-016", name: "Back Squat", muscleGroup: "Quads", instructions: "Brace hard, sit down between the hips, and drive through the mid-foot to stand.", thumbnailLabel: "SQ", mediaNote: "Squat demo covering stance, bracing, and depth." },
  { id: "ex-017", name: "Leg Press", muscleGroup: "Quads", instructions: "Keep knees tracking with toes, lower deeply, and press evenly through both feet.", thumbnailLabel: "LP", mediaNote: "Leg press demo with foot placement and range of motion." },
  { id: "ex-018", name: "Walking Lunge", muscleGroup: "Quads", instructions: "Step long enough for a vertical shin, lower both knees, and push through the front heel.", thumbnailLabel: "WL", mediaNote: "Walking lunge demo focused on stride length and control." },
  { id: "ex-019", name: "Romanian Deadlift", muscleGroup: "Hamstrings", instructions: "Hinge hips back with soft knees, keep the bar close, and stop when hamstrings stretch.", thumbnailLabel: "RD", mediaNote: "RDL demo with hinge pattern and lat tension." },
  { id: "ex-020", name: "Hip Thrust", muscleGroup: "Glutes", instructions: "Drive hips up, keep ribs down, and squeeze glutes at full extension.", thumbnailLabel: "HT", mediaNote: "Hip thrust demo covering bench setup and lockout." },
  { id: "ex-021", name: "Seated Leg Curl", muscleGroup: "Hamstrings", instructions: "Sit tall, curl heels down and back, then lower slowly.", thumbnailLabel: "LC", mediaNote: "Leg curl demo showing seat adjustment and tempo." },
  { id: "ex-022", name: "Standing Calf Raise", muscleGroup: "Calves", instructions: "Drop heels fully, rise onto the big toes, and pause briefly at the top.", thumbnailLabel: "CR", mediaNote: "Calf raise demo focused on full stretch and pause." },
  { id: "ex-023", name: "Plank", muscleGroup: "Core", instructions: "Keep elbows under shoulders, ribs down, glutes tight, and body in one straight line.", thumbnailLabel: "PK", mediaNote: "Plank demo showing brace and body-line positioning." },
  { id: "ex-024", name: "Hanging Knee Raise", muscleGroup: "Core", instructions: "Control the swing, tuck the pelvis, and lift the knees with the abs.", thumbnailLabel: "HK", mediaNote: "Knee raise demo covering start position and pelvic tuck." }
];

const FOOD_CATALOG = [
  { id: "food-001", name: "Chicken Breast", serving: "170 g", calories: 280, protein: 53, carbs: 0, fat: 6, fiber: 0, sodium: 120, potassium: 440, iron: 1.2 },
  { id: "food-002", name: "Salmon Fillet", serving: "170 g", calories: 367, protein: 39, carbs: 0, fat: 22, fiber: 0, sodium: 105, potassium: 690, iron: 0.8 },
  { id: "food-003", name: "Lean Ground Beef", serving: "170 g", calories: 332, protein: 38, carbs: 0, fat: 20, fiber: 0, sodium: 94, potassium: 565, iron: 3.6 },
  { id: "food-004", name: "Greek Yogurt", serving: "175 g", calories: 120, protein: 17, carbs: 6, fat: 2, fiber: 0, sodium: 60, potassium: 240, iron: 0.1 },
  { id: "food-005", name: "Eggs", serving: "2 large", calories: 144, protein: 12, carbs: 1, fat: 10, fiber: 0, sodium: 140, potassium: 138, iron: 1.8 },
  { id: "food-006", name: "White Rice", serving: "1 cup cooked", calories: 205, protein: 4, carbs: 45, fat: 0, fiber: 1, sodium: 2, potassium: 55, iron: 1.9 },
  { id: "food-007", name: "Sweet Potato", serving: "200 g", calories: 180, protein: 4, carbs: 41, fat: 0, fiber: 6, sodium: 72, potassium: 950, iron: 1.2 },
  { id: "food-008", name: "Oats", serving: "1/2 cup dry", calories: 150, protein: 5, carbs: 27, fat: 3, fiber: 4, sodium: 0, potassium: 150, iron: 1.7 },
  { id: "food-009", name: "Blueberries", serving: "1 cup", calories: 84, protein: 1, carbs: 21, fat: 0, fiber: 4, sodium: 1, potassium: 114, iron: 0.4 },
  { id: "food-010", name: "Broccoli", serving: "1 cup cooked", calories: 55, protein: 4, carbs: 11, fat: 1, fiber: 5, sodium: 64, potassium: 458, iron: 1.0 },
  { id: "food-011", name: "Avocado", serving: "1/2 medium", calories: 120, protein: 2, carbs: 6, fat: 11, fiber: 5, sodium: 5, potassium: 364, iron: 0.6 },
  { id: "food-012", name: "Almonds", serving: "28 g", calories: 164, protein: 6, carbs: 6, fat: 14, fiber: 3, sodium: 0, potassium: 200, iron: 1.1 }
];

const SUBSCRIPTION_PLANS = [
  {
    id: "plan-meal",
    name: "Meal Plan Only",
    description: "Nutrition planning, accountability, and progress review.",
    monthlyPrice: 149,
    featureList: ["Weekly meal plan adjustments", "Check-ins and body metrics", "Nutrition-focused coaching"]
  },
  {
    id: "plan-road-warrior",
    name: "Road Warrior",
    description: "Remote coaching for clients who train on their own and submit videos.",
    monthlyPrice: 249,
    featureList: ["Weekly workout programming", "Video review and feedback", "App-based accountability"]
  },
  {
    id: "plan-in-person",
    name: "In Person Coaching",
    description: "Hands-on training plus full use of the app for tracking and support.",
    monthlyPrice: 399,
    featureList: ["In-person coaching support", "Workout tracking and PRs", "Meal plans and progress review"]
  }
];

const CONTRACT_OPTIONS = [3, 6, 12, 24];

function createSeedData() {
  return {
    users: [
      {
        id: "u-trainer-1",
        role: "trainer",
        firstName: "Jordan",
        lastName: "Reed",
        email: "coach@coachflow.test",
        password: "demo123",
        phone: "555-0100",
        status: "active"
      },
      {
        id: "u-client-1",
        role: "client",
        trainerId: "u-trainer-1",
        firstName: "Alex",
        lastName: "Morgan",
        email: "alex@coachflow.test",
        password: "demo123",
        phone: "555-0121",
        status: "active",
        goal: "Body recomposition",
        injuries: "Mild right shoulder irritation",
        sex: "Male",
        allergies: "None reported",
        goalWeight: 176,
        notes: "Prefers 45-minute sessions before work.",
        intakeStatus: "completed",
        bodyWeight: 182.4
      }
    ],
    invites: [
      {
        id: "invite-1",
        email: "newclient@coachflow.test",
        clientId: "u-client-4",
        code: "WELCOME-2048",
        status: "sent",
        createdAt: TODAY
      }
    ],
    notifications: [
      {
        id: "note-1",
        clientId: "u-client-1",
        type: "meal_plan",
        title: "Meal plan assigned",
        message: "Your trainer published an updated meal plan for today.",
        createdAt: TODAY,
        read: false
      },
      {
        id: "note-2",
        clientId: "u-client-1",
        type: "workout_plan",
        title: "Workout assigned",
        message: "Your trainer published today's workout and it is ready to complete.",
        createdAt: TODAY,
        read: false
      }
    ],
    subscriptions: [
      {
        id: "sub-1",
        clientId: "u-client-1",
        planId: "plan-road-warrior",
        contractMonths: 6,
        monthlyPrice: 249,
        status: "active",
        nextBillingDate: "2026-05-01",
        contractEndDate: "2026-10-01",
        autoRenew: true,
        paymentMethodStatus: "link_sent",
        paymentMethodLastUpdated: "2026-04-07"
      }
    ],
    exerciseMediaOverrides: {},
    workoutPlans: [
      {
        id: "plan-1",
        clientId: "u-client-1",
        trainerId: "u-trainer-1",
        name: "Upper / Lower Split",
        goal: "Build muscle while improving weekly adherence",
        dayLabel: TODAY,
        status: "active",
        isSubmitted: true,
        lastPublishedAt: TODAY,
        items: [
          { id: "w-101", exerciseId: "ex-001", sets: 4, reps: "8", restSeconds: 90, completed: true },
          { id: "w-102", exerciseId: "ex-006", sets: 4, reps: "10", restSeconds: 75, completed: false },
          { id: "w-103", exerciseId: "ex-008", sets: 3, reps: "15", restSeconds: 60, completed: false },
          { id: "w-104", exerciseId: "ex-013", sets: 3, reps: "12", restSeconds: 45, completed: false },
          { id: "w-105", exerciseId: "ex-023", sets: 3, reps: "45 sec", restSeconds: 30, completed: true }
        ]
      }
    ],
    profiles: [
      {
        clientId: "u-client-1",
        sex: "Male",
        age: 34,
        heightCm: 178,
        activityLevel: "Moderate",
        goalType: "Fat loss",
        currentWeight: 182.4,
        goalWeight: 176,
        allergies: "None reported",
        trainerNotes: "Shoulder warm-up required before pressing.",
        goals: "Lose body fat while building upper body strength",
        injuries: "Mild right shoulder irritation",
        calorieTarget: 2350,
        proteinTarget: 185,
        carbTarget: 220,
        fatTarget: 70,
        fiberTarget: 32
      }
    ],
    mealPlans: [
      {
        id: "meal-1",
        clientId: "u-client-1",
        trainerId: "u-trainer-1",
        title: "Recomp Meal Plan",
        isSubmitted: true,
        lastPublishedAt: TODAY,
        items: [
          { id: "meal-item-1", mealName: "Breakfast", foodId: "food-004", servings: 1 },
          { id: "meal-item-2", mealName: "Breakfast", foodId: "food-008", servings: 1 },
          { id: "meal-item-3", mealName: "Breakfast", foodId: "food-009", servings: 1 },
          { id: "meal-item-4", mealName: "Lunch", foodId: "food-001", servings: 1 },
          { id: "meal-item-5", mealName: "Lunch", foodId: "food-006", servings: 1 },
          { id: "meal-item-6", mealName: "Lunch", foodId: "food-010", servings: 1 },
          { id: "meal-item-7", mealName: "Dinner", foodId: "food-002", servings: 1 },
          { id: "meal-item-8", mealName: "Dinner", foodId: "food-007", servings: 1 },
          { id: "meal-item-9", mealName: "Snack", foodId: "food-012", servings: 1 }
        ]
      }
    ],
    progressLogs: [
      {
        id: "log-5",
        clientId: "u-client-1",
        date: "2026-04-03",
        bodyWeight: 185.8,
        energy: "Low",
        updateType: "text",
        videoLink: "",
        notes: "Low energy day. Kept the session lighter and focused on form."
      },
      {
        id: "log-4",
        clientId: "u-client-1",
        date: "2026-04-04",
        bodyWeight: 184.9,
        energy: "Medium",
        updateType: "text",
        videoLink: "",
        notes: "Nutrition was on point and recovery felt better."
      },
      {
        id: "log-3",
        clientId: "u-client-1",
        date: "2026-04-05",
        bodyWeight: 184.1,
        energy: "High",
        updateType: "video",
        videoLink: "https://example.com/demo-check-in",
        notes: "Sent a quick video update after finishing the workout."
      },
      {
        id: "log-2",
        clientId: "u-client-1",
        date: "2026-04-06",
        bodyWeight: 183.2,
        energy: "Medium",
        updateType: "text",
        videoLink: "",
        notes: "Shoulder felt stable and cardio recovery was improving."
      },
      {
        id: "log-1",
        clientId: "u-client-1",
        date: "2026-04-07",
        bodyWeight: 182.4,
        energy: "Medium",
        updateType: "text",
        videoLink: "",
        notes: "Bench felt strong. Shoulder was fine after warm-up."
      }
    ]
  };
}

function hydrateState(rawState) {
  const seed = createSeedData();
  const nextState = {
    ...seed,
    ...rawState
  };

  nextState.invites = Array.isArray(rawState?.invites) ? rawState.invites : seed.invites;
  nextState.notifications = Array.isArray(rawState?.notifications) ? rawState.notifications : seed.notifications;
  nextState.subscriptions = Array.isArray(rawState?.subscriptions) ? rawState.subscriptions.map((subscription) => ({
    paymentMethodStatus: "not_added",
    paymentMethodLastUpdated: null,
    ...subscription
  })) : seed.subscriptions;
  nextState.exerciseMediaOverrides = rawState?.exerciseMediaOverrides && typeof rawState.exerciseMediaOverrides === "object"
    ? rawState.exerciseMediaOverrides
    : seed.exerciseMediaOverrides;
  nextState.profiles = Array.isArray(rawState?.profiles) ? rawState.profiles : seed.profiles;
  nextState.mealPlans = Array.isArray(rawState?.mealPlans) ? rawState.mealPlans.map((plan) => ({
    items: [],
    isSubmitted: false,
    lastPublishedAt: null,
    ...plan,
    items: Array.isArray(plan.items) ? plan.items : []
  })) : seed.mealPlans;
  nextState.workoutPlans = Array.isArray(rawState?.workoutPlans) ? rawState.workoutPlans.map((plan) => ({
    isSubmitted: false,
    lastPublishedAt: null,
    ...plan
  })) : seed.workoutPlans;
  nextState.users = Array.isArray(rawState?.users) ? rawState.users.map((user) => ({
    intakeStatus: "completed",
    allergies: "",
    sex: "",
    goalWeight: null,
    ...user
  })) : seed.users;
  nextState.progressLogs = Array.isArray(rawState?.progressLogs) ? rawState.progressLogs.map((log) => ({
    updateType: "text",
    videoLink: "",
    ...log
  })) : seed.progressLogs;

  return nextState;
}

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = JSON.parse(stored);
    const hydrated = hydrateState(parsed);
    saveState(hydrated);
    return hydrated;
  }
  const seed = createSeedData();
  saveState(seed);
  return seed;
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createId(prefix) {
  if (globalThis.crypto?.randomUUID) {
    return `${prefix}-${globalThis.crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

let state = loadState();
let sessionUserId = null;
let selectedClientId = state.users.find((user) => user.role === "client")?.id || null;
let activeInviteId = null;
let foodSearchQuery = "";
let exerciseSearchQuery = "";
let pendingFocusRestore = null;
let isInviteComposerOpen = false;
let openClientMenuId = null;
let trainerPage = "roster";
let mealWeekStart = getWeekStartISO(TODAY);
let subscriptionAdminNotice = "";

const authView = document.getElementById("authView");
const trainerView = document.getElementById("trainerView");
const clientView = document.getElementById("clientView");
const deviceBadge = document.getElementById("deviceBadge");
const sessionBadge = document.getElementById("sessionBadge");
const logoutBtn = document.getElementById("logoutBtn");
const resetBtn = document.getElementById("resetBtn");
const loginMessage = document.getElementById("loginMessage");
const progressMessage = document.getElementById("progressMessage");
const inviteMessage = document.getElementById("inviteMessage");
const intakeMessage = document.getElementById("intakeMessage");
const inviteClientMessage = document.getElementById("inviteClientMessage");
const inviteAccessForm = document.getElementById("inviteAccessForm");
const intakeForm = document.getElementById("intakeForm");
const inviteComposer = document.getElementById("inviteComposer");
const toggleInviteBtn = document.getElementById("toggleInviteBtn");
const cancelInviteBtn = document.getElementById("cancelInviteBtn");
const trainerRosterPage = document.getElementById("trainerRosterPage");
const trainerDetailPage = document.getElementById("trainerDetailPage");
const backToRosterBtn = document.getElementById("backToRosterBtn");
const exerciseMediaDialog = document.getElementById("exerciseMediaDialog");
const closeMediaDialogBtn = document.getElementById("closeMediaDialogBtn");

function currentUser() {
  return state.users.find((user) => user.id === sessionUserId) || null;
}

function getClients() {
  return state.users.filter((user) => user.role === "client");
}

function getProfile(clientId) {
  return state.profiles.find((profile) => profile.clientId === clientId) || null;
}

function getInvites() {
  return [...state.invites].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function getExercise(exerciseId) {
  const exercise = EXERCISES.find((entry) => entry.id === exerciseId);
  if (!exercise) return null;
  const override = state.exerciseMediaOverrides?.[exerciseId];
  return override ? { ...exercise, ...override } : exercise;
}

function getWorkoutPlan(clientId) {
  return state.workoutPlans.find((plan) => plan.clientId === clientId && plan.status === "active");
}

function getMealPlan(clientId) {
  return state.mealPlans.find((plan) => plan.clientId === clientId);
}

function getNotifications(clientId) {
  return state.notifications
    .filter((notification) => notification.clientId === clientId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function getSubscription(clientId) {
  return state.subscriptions.find((subscription) => subscription.clientId === clientId) || null;
}

function getPlanDefinition(planId) {
  return SUBSCRIPTION_PLANS.find((plan) => plan.id === planId) || null;
}

function getFood(foodId) {
  return FOOD_CATALOG.find((food) => food.id === foodId);
}

function getMealTotals(mealPlan) {
  const zero = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sodium: 0, potassium: 0, iron: 0 };
  if (!mealPlan?.items?.length) return zero;

  return mealPlan.items.reduce((totals, item) => {
    const food = getFood(item.foodId);
    if (!food) return totals;
    const servings = Number(item.servings || 1);
    totals.calories += food.calories * servings;
    totals.protein += food.protein * servings;
    totals.carbs += food.carbs * servings;
    totals.fat += food.fat * servings;
    totals.fiber += food.fiber * servings;
    totals.sodium += food.sodium * servings;
    totals.potassium += food.potassium * servings;
    totals.iron += food.iron * servings;
    return totals;
  }, zero);
}

function computeMacroTargets({ age, heightCm, weightLb, sex, activityLevel, goalType }) {
  if (!age || !heightCm || !weightLb || !sex || !activityLevel || !goalType) {
    return null;
  }

  const weightKg = weightLb * 0.453592;
  const bmrBase = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const sexAdjustment = sex === "Female" ? -161 : 5;
  const bmr = bmrBase + sexAdjustment;
  const activityMultiplier = activityLevel === "Light" ? 1.375 : activityLevel === "Very Active" ? 1.725 : 1.55;
  let calories = bmr * activityMultiplier;
  calories += goalType === "Fat loss" ? -350 : goalType === "Muscle gain" ? 250 : 0;

  const proteinTarget = goalType === "Muscle gain" ? weightLb * 1 : weightLb * 0.9;
  const fatTarget = (calories * 0.27) / 9;
  const carbTarget = (calories - proteinTarget * 4 - fatTarget * 9) / 4;
  const fiberTarget = Math.max(25, calories / 1000 * 14);

  return {
    calorieTarget: Math.round(calories),
    proteinTarget: Math.round(proteinTarget),
    carbTarget: Math.round(carbTarget),
    fatTarget: Math.round(fatTarget),
    fiberTarget: Math.round(fiberTarget)
  };
}

function mealItemsByName(mealPlan) {
  if (!mealPlan?.items?.length) return [];
  const groups = new Map();
  mealPlan.items.forEach((item) => {
    if (!groups.has(item.mealName)) {
      groups.set(item.mealName, []);
    }
    groups.get(item.mealName).push(item);
  });
  return [...groups.entries()];
}

function groupWorkoutItemsByDay(plan) {
  if (!plan?.items?.length) return [];
  const groups = new Map();
  plan.items.forEach((item) => {
    const key = item.dayLabel || plan.dayLabel || "Unscheduled";
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(item);
  });
  return [...groups.entries()];
}

function groupMealItemsByDayAndMeal(mealPlan) {
  if (!mealPlan?.items?.length) return [];
  const days = new Map();
  mealPlan.items.forEach((item) => {
    const dayKey = item.dayLabel || "Unscheduled";
    if (!days.has(dayKey)) {
      days.set(dayKey, new Map());
    }
    const mealMap = days.get(dayKey);
    if (!mealMap.has(item.mealName)) {
      mealMap.set(item.mealName, []);
    }
    mealMap.get(item.mealName).push(item);
  });
  return [...days.entries()].map(([dayLabel, mealMap]) => [dayLabel, [...mealMap.entries()]]);
}

function searchFoods(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return FOOD_CATALOG;
  }

  return FOOD_CATALOG.filter((food) => {
    const haystack = `${food.name} ${food.serving}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

function searchExercises(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return EXERCISES;
  }

  return EXERCISES.filter((exercise) => {
    const haystack = `${exercise.name} ${exercise.muscleGroup}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

function getProgressLogs(clientId) {
  return state.progressLogs
    .filter((log) => log.clientId === clientId)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function setViewVisibility({ showAuth, showTrainer, showClient }) {
  authView.classList.toggle("hidden", !showAuth);
  trainerView.classList.toggle("hidden", !showTrainer);
  clientView.classList.toggle("hidden", !showClient);
  logoutBtn.classList.toggle("hidden", showAuth);
}

function showAuthForms(mode = "login") {
  document.getElementById("loginForm").classList.toggle("hidden", mode !== "login");
  inviteAccessForm.classList.toggle("hidden", mode !== "login");
  intakeForm.classList.toggle("hidden", mode !== "intake");
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${dateString}T00:00:00`));
}

function formatScheduleLabel(value) {
  if (!value) return "Unscheduled";
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return formatDate(value);
  }
  return value;
}

function getWeekStartISO(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  const day = date.getDay();
  const diffToMonday = (day + 6) % 7;
  date.setDate(date.getDate() - diffToMonday);
  return date.toISOString().slice(0, 10);
}

function getWeekDayOptions(weekStartISO) {
  const start = new Date(`${weekStartISO}T00:00:00`);
  const formatter = new Intl.DateTimeFormat("en-CA", { weekday: "long", month: "short", day: "numeric" });
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return {
      value: date.toISOString().slice(0, 10),
      label: formatter.format(date)
    };
  });
}

function energyToScore(energy) {
  if (energy === "High") return 3;
  if (energy === "Medium") return 2;
  if (energy === "Low") return 1;
  return 0;
}

function createLinePath(points) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
}

function renderProgressChart(logs) {
  if (!logs.length) {
    return "<p class='muted'>Add progress logs to see trends over time.</p>";
  }

  const logMap = new Map(logs.map((log) => [log.date, log]));
  const chartLogs = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    const iso = date.toISOString().slice(0, 10);
    return logMap.get(iso) || {
      date: iso,
      bodyWeight: null,
      energy: null
      };
    });
  const chartWidth = 560;
  const chartHeight = 210;
  const paddingTop = 20;
  const paddingRight = 24;
  const paddingBottom = 28;
  const paddingLeft = 54;
  const usableWidth = chartWidth - paddingLeft - paddingRight;
  const usableHeight = chartHeight - paddingTop - paddingBottom;
  const xForIndex = (index) => paddingLeft + (chartLogs.length === 1 ? usableWidth / 2 : (usableWidth / (chartLogs.length - 1)) * index);
  const yForEnergyScore = (score) => paddingTop + usableHeight - (((score - 1) / 2) * usableHeight);

  const weights = chartLogs.map((log) => log.bodyWeight || 0).filter((value) => value > 0);
  const weightMin = weights.length ? Math.min(...weights) : 0;
  const weightMax = weights.length ? Math.max(...weights) : 1;
  const weightRange = Math.max(1, weightMax - weightMin);

  const weightPoints = chartLogs.filter((log) => log.bodyWeight).map((log) => {
      const originalIndex = chartLogs.findIndex((entry) => entry.date === log.date);
      const x = xForIndex(originalIndex);
      const weight = log.bodyWeight || weightMin;
      const y = paddingTop + usableHeight - (((weight - weightMin) / weightRange) * usableHeight);
      return { x, y, log };
    });

  const feelingPoints = chartLogs.filter((log) => log.energy).map((log) => {
      const originalIndex = chartLogs.findIndex((entry) => entry.date === log.date);
      const x = xForIndex(originalIndex);
      const score = energyToScore(log.energy);
      const y = yForEnergyScore(score);
      return { x, y, log };
    });

  const horizontalGuides = [0, 0.25, 0.5, 0.75, 1].map((step) => {
      const y = paddingTop + usableHeight - (usableHeight * step);
      return { y };
    });

  const verticalGuides = chartLogs.map((_, index) => {
      const x = xForIndex(index);
      return { x };
    });

  const feelingScale = [
    { label: "High", y: yForEnergyScore(3) },
    { label: "Medium", y: yForEnergyScore(2) },
    { label: "Low", y: yForEnergyScore(1) }
  ];

  const renderTooltipPoint = (point, seriesClass, tooltipClass, tooltipText, offsetX = 0) => `
    <g class="chart-point-group" tabindex="0" role="img" aria-label="${tooltipText}">
      <circle cx="${point.x}" cy="${point.y}" r="8" class="chart-hit-area"></circle>
      <circle cx="${point.x}" cy="${point.y}" r="4.5" class="chart-dot ${seriesClass}"></circle>
      <g class="chart-tooltip ${tooltipClass}" transform="translate(${point.x + offsetX}, ${point.y + 10})">
        <rect x="-42" y="0" width="84" height="18" rx="9"></rect>
        <text x="0" y="12" text-anchor="middle">${tooltipText}</text>
      </g>
    </g>
  `;

  return `
    <div class="chart-shell">
      <svg viewBox="0 0 ${chartWidth} ${chartHeight}" class="progress-chart" role="img" aria-label="Progress chart">
        ${horizontalGuides.map((guide) => `<line x1="${paddingLeft}" y1="${guide.y}" x2="${chartWidth - paddingRight}" y2="${guide.y}" class="chart-guide"></line>`).join("")}
        ${verticalGuides.map((guide) => `<line x1="${guide.x}" y1="${paddingTop}" x2="${guide.x}" y2="${chartHeight - paddingBottom}" class="chart-guide chart-guide-vertical"></line>`).join("")}
        ${feelingScale.map((tick) => `<text x="${paddingLeft - 10}" y="${tick.y + 4}" text-anchor="end" class="chart-y-label">${tick.label}</text>`).join("")}
        <line x1="${paddingLeft}" y1="${chartHeight - paddingBottom}" x2="${chartWidth - paddingRight}" y2="${chartHeight - paddingBottom}" class="chart-axis"></line>
        ${weightPoints.length > 1 ? `<path d="${createLinePath(weightPoints)}" class="chart-line chart-line-weight"></path>` : ""}
        ${feelingPoints.length > 1 ? `<path d="${createLinePath(feelingPoints)}" class="chart-line chart-line-feeling"></path>` : ""}
        ${weightPoints.map((point) => renderTooltipPoint(point, "chart-dot-weight", "chart-tooltip-weight", `${point.log.bodyWeight} lb - ${formatScheduleLabel(point.log.date)}`, -34)).join("")}
        ${feelingPoints.map((point) => renderTooltipPoint(point, "chart-dot-feeling", "chart-tooltip-feeling", `${point.log.energy} - ${formatScheduleLabel(point.log.date)}`, 34)).join("")}
      </svg>
      <div class="chart-labels">
        ${chartLogs.map((log) => `<span>${formatScheduleLabel(log.date)}</span>`).join("")}
      </div>
      <div class="chart-legend">
        <span class="legend-item"><span class="legend-swatch weight-swatch"></span>Weight</span>
        <span class="legend-item"><span class="legend-swatch feeling-swatch"></span>How they feel</span>
      </div>
    </div>
  `;
}

function renderTrainerDashboard() {
  const clients = getClients();
  const activeClients = clients.filter((client) => client.status === "active");
  const todayCompletions = state.workoutPlans
    .flatMap((plan) => plan.items)
    .filter((item) => item.completed).length;
  const logsToday = state.progressLogs.filter((log) => log.date === TODAY).length;

  document.getElementById("trainerStats").innerHTML = `
    <div class="metric"><span>Clients</span><strong>${clients.length}</strong></div>
    <div class="metric"><span>Active</span><strong>${activeClients.length}</strong></div>
    <div class="metric"><span>Completed items</span><strong>${todayCompletions}</strong></div>
    <div class="metric"><span>Logs today</span><strong>${logsToday}</strong></div>
  `;

  if (trainerRosterPage) {
    trainerRosterPage.classList.toggle("hidden", trainerPage !== "roster");
  }
  if (trainerDetailPage) {
    trainerDetailPage.classList.toggle("hidden", trainerPage !== "detail");
  }
  updateDeviceBadge();
  inviteComposer.classList.toggle("hidden", !isInviteComposerOpen);
  renderTrainerClientList(clients);
  if (trainerPage === "roster") {
    renderInviteList();
  }
  if (trainerPage === "detail") {
    renderSelectedClientDetail();
  }
  restorePendingFocus();
}

function updateDeviceBadge() {
  if (!deviceBadge) return;
  const isMobile = window.matchMedia("(max-width: 960px)").matches;
  deviceBadge.textContent = isMobile ? "Mobile view" : "Desktop view";
}

function queueFocusRestore(elementId, selectionStart, selectionEnd) {
  pendingFocusRestore = { elementId, selectionStart, selectionEnd };
}

function restorePendingFocus() {
  if (!pendingFocusRestore) return;
  const { elementId, selectionStart, selectionEnd } = pendingFocusRestore;
  pendingFocusRestore = null;
  const element = document.getElementById(elementId);
  if (!element) return;
  element.focus();
  if (typeof element.setSelectionRange === "function" && selectionStart !== null && selectionEnd !== null) {
    element.setSelectionRange(selectionStart, selectionEnd);
  }
}

function renderTrainerClientList(clients = getClients()) {
  const list = document.getElementById("trainerClientList");
  list.innerHTML = clients.map((client) => {
    const plan = getWorkoutPlan(client.id);
    const completed = plan ? plan.items.filter((item) => item.completed).length : 0;
    const total = plan ? plan.items.length : 0;
    const isActive = selectedClientId === client.id;
    return `
      <article class="client-row ${isActive ? "active-row" : ""}">
        <div class="client-cell">
          <strong>${client.firstName} ${client.lastName}</strong>
          <p>${client.bodyWeight ?? "-"} lb</p>
        </div>
        <div class="client-cell">
          <strong>${client.email}</strong>
          <p>${client.phone || "No phone set"}</p>
        </div>
        <div class="client-cell">
          <span class="status-pill">${client.status}</span>
        </div>
        <div class="client-cell">
          <strong>${client.goal || "No goal set"}</strong>
          <p>${client.intakeStatus || "pending"} intake</p>
        </div>
        <div class="client-cell">
          <strong>${plan?.name || "No active plan"}</strong>
          <p>${completed}/${total} items complete</p>
        </div>
        <div class="row-actions">
          <button class="tiny-button" type="button" onclick="selectClient('${client.id}')">Manage</button>
          <div class="menu-wrap">
            <button class="menu-button" type="button" onclick="toggleClientMenu('${client.id}')">...</button>
            ${openClientMenuId === client.id ? `
              <div class="action-menu">
                <button type="button" onclick="selectClient('${client.id}')">Manage</button>
                <button type="button" onclick="editClientInfo('${client.id}')">Edit information</button>
                <button type="button" onclick="deleteClient('${client.id}')">Delete</button>
              </div>
            ` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderSelectedClientDetail() {
  const client = state.users.find((user) => user.id === selectedClientId);
  const detail = document.getElementById("trainerClientDetail");
  const selectedClientName = document.getElementById("selectedClientName");
  const selectedClientStatus = document.getElementById("selectedClientStatus");

  if (!client) {
    selectedClientName.textContent = "Choose a client";
    selectedClientStatus.textContent = "Waiting";
    detail.classList.add("empty-state");
    detail.innerHTML = "Select a client to manage workouts, meals, and progress.";
    return;
  }

  const plan = getWorkoutPlan(client.id);
  const mealPlan = getMealPlan(client.id);
  const logs = getProgressLogs(client.id);
  const profile = getProfile(client.id);
  const mealTotals = getMealTotals(mealPlan);
  const foodResults = searchFoods(foodSearchQuery);
  const exerciseResults = searchExercises(exerciseSearchQuery);
  const weekDayOptions = getWeekDayOptions(mealWeekStart);
  const selectedMealDay = weekDayOptions.some((option) => option.value === TODAY) ? TODAY : weekDayOptions[0]?.value;
  const subscription = getSubscription(client.id);
  const subscriptionPlan = getPlanDefinition(subscription?.planId);
  selectedClientName.textContent = `${client.firstName} ${client.lastName}`;
  selectedClientStatus.textContent = client.status;
  detail.classList.remove("empty-state");

  const workoutMarkup = plan ? groupWorkoutItemsByDay(plan).map(([dayLabel, items]) => `
    <div class="group-block">
      <p class="group-title">${dayLabel}</p>
      ${items.map((item) => {
        const exercise = getExercise(item.exerciseId);
        return `
          <div class="workout-item ${item.completed ? "completed" : ""}">
            <div class="item-row">
              <div>
                <h4>${exercise.name}</h4>
                <div class="workout-meta">
                  <span>${exercise.muscleGroup}</span>
                  <span>${item.sets} sets</span>
                  <span>${item.reps} reps</span>
                  <span>${item.restSeconds}s rest</span>
                </div>
              </div>
              <button class="tiny-button" type="button" onclick="toggleWorkoutItem('${client.id}','${item.id}')">
                ${item.completed ? "Mark incomplete" : "Mark complete"}
              </button>
            </div>
            <p class="muted">${exercise.instructions}</p>
            <button class="tiny-button" type="button" onclick="removeWorkoutExercise('${client.id}','${item.id}')">Remove</button>
          </div>
        `;
      }).join("")}
    </div>
  `).join("") : "<p class='muted'>No active workout plan assigned.</p>";

  detail.innerHTML = `
    <section class="detail-section">
      <h4>Profile</h4>
      <p><strong>Intake status:</strong> ${client.intakeStatus || "pending"}</p>
      <p><strong>Sex:</strong> ${profile?.sex || client.sex || "Not set"}</p>
      <p><strong>Goal:</strong> ${client.goal || "Not set"}</p>
      <p><strong>Goal weight:</strong> ${profile?.goalWeight || client.goalWeight || "-"} lb</p>
      <p><strong>Allergies:</strong> ${profile?.allergies || client.allergies || "None noted"}</p>
      <p><strong>Injuries:</strong> ${client.injuries || "None noted"}</p>
      <p><strong>Notes:</strong> ${client.notes || "No notes yet"}</p>
      <p><strong>Body weight:</strong> ${client.bodyWeight ?? "-"} lb</p>
    </section>
    <section class="detail-section">
      <h4>Current plan</h4>
      <p><strong>${plan?.name || "No active plan"}</strong></p>
      <p>${plan?.goal || "Assign a plan to get started."}</p>
      <p><strong>Training date:</strong> ${formatScheduleLabel(plan?.dayLabel) || "Not set"}</p>
      <p><strong>Workout status:</strong> ${plan?.isSubmitted ? `Published ${plan.lastPublishedAt}` : "Draft - not yet sent to client"}</p>
      <button class="primary-button" type="button" onclick="submitWorkoutPlan('${client.id}')">Submit workout to ${client.firstName}</button>
      ${subscription ? `
        <div class="subscription-panel top-gap">
          <p><strong>Subscription:</strong> ${subscriptionPlan?.name || "Plan"}</p>
          <p><strong>Contract:</strong> ${subscription.contractMonths} months</p>
          <p><strong>Monthly price:</strong> $${subscription.monthlyPrice}</p>
          <p><strong>Next billing date:</strong> ${formatScheduleLabel(subscription.nextBillingDate)}</p>
        </div>
      ` : ""}
    </section>
    <section class="detail-section full">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Admin</p>
          <h4>Exercise media and billing</h4>
        </div>
      </div>
      <div class="builder-section">
        <p class="section-label">Exercise video admin</p>
        <div class="nutrition-grid">
          <label>
            Exercise
            <select id="adminExerciseSelect">
              ${EXERCISES.map((exercise) => `<option value="${exercise.id}">${exercise.name}</option>`).join("")}
            </select>
          </label>
          <label>
            Video URL
            <input id="adminVideoUrl" type="url" placeholder="https://example.com/exercise-video">
          </label>
          <label>
            Thumbnail label
            <input id="adminThumbnailLabel" type="text" maxlength="3" placeholder="BP">
          </label>
          <label>
            Demo note
            <input id="adminMediaNote" type="text" placeholder="Trainer cue summary">
          </label>
        </div>
        <div class="inline-actions">
          <button class="primary-button" type="button" onclick="saveExerciseMediaOverride()">Save exercise media</button>
        </div>
      </div>
      <div class="builder-section top-gap">
        <p class="section-label">Subscription admin</p>
        <div class="nutrition-grid">
          <label>
            Plan tier
            <select id="subscriptionPlanSelect">
              ${SUBSCRIPTION_PLANS.map((planOption) => `<option value="${planOption.id}" ${subscription?.planId === planOption.id ? "selected" : ""}>${planOption.name}</option>`).join("")}
            </select>
          </label>
          <label>
            Contract length
            <select id="subscriptionMonthsSelect">
              ${CONTRACT_OPTIONS.map((months) => `<option value="${months}" ${subscription?.contractMonths === months ? "selected" : ""}>${months} months</option>`).join("")}
            </select>
          </label>
          <label>
            Monthly price
            <input id="subscriptionMonthlyPrice" type="number" min="0" step="1" value="${subscription?.monthlyPrice || subscriptionPlan?.monthlyPrice || 0}">
          </label>
          <label>
            Next billing date
            <input id="subscriptionNextBilling" type="date" value="${subscription?.nextBillingDate || TODAY}">
          </label>
        </div>
        <div class="inline-actions">
          <button class="primary-button" type="button" onclick="saveSubscriptionAdmin('${client.id}')">Save subscription</button>
          <button class="ghost-button" type="button" onclick="mockAddCard('${client.id}')">Add credit card</button>
          <button class="ghost-button" type="button" onclick="mockSendPaymentLink('${client.id}')">Send secure card link</button>
        </div>
        <p id="subscriptionAdminMessage" class="form-message" aria-live="polite">${subscriptionAdminNotice}</p>
      </div>
    </section>
    <section class="detail-section full">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Progress</p>
          <h4>Recent progress</h4>
        </div>
      </div>
      <div class="progress-layout">
        <div>
          ${renderProgressChart(logs)}
        </div>
        <div class="stack-list">
          ${logs.length ? logs.slice(0, 4).map((log) => `
            <div class="history-item">
              <div class="history-head">
                <strong>${formatDate(log.date)}</strong>
                <span class="tag">${log.energy} energy</span>
              </div>
              <p><strong>Weight:</strong> ${log.bodyWeight ?? "-"} lb</p>
              <p class="muted">${log.notes}</p>
              ${log.updateType === "video" && log.videoLink ? `<p><a href="${log.videoLink}" target="_blank" rel="noreferrer">Open client video update</a></p>` : ""}
            </div>
          `).join("") : "<p class='muted'>No progress logs yet.</p>"}
        </div>
      </div>
    </section>
    <section class="detail-section full">
      <h4>Today's workout</h4>
      <div class="builder-section">
        <p class="section-label">Exercise Search And Builder</p>
        <div class="builder-grid">
          <label>
            Date
            <input id="exerciseDaySelect" type="date" value="${/^\d{4}-\d{2}-\d{2}$/.test(plan?.dayLabel || "") ? plan.dayLabel : TODAY}">
          </label>
          <label>
            Search exercise
            <input id="exerciseSearchInput" type="search" placeholder="Search squat, press, row..." value="${exerciseSearchQuery}" oninput="updateExerciseSearch(this.value, '${client.id}')">
          </label>
          <label>
            Sets / Reps / Rest
            <div class="builder-inline">
              <div class="builder-field">
                <span>Sets</span>
                <input id="exerciseSetsInput" type="text" inputmode="numeric" value="3" placeholder="Sets">
              </div>
              <div class="builder-field">
                <span>Reps</span>
                <input id="exerciseRepsInput" type="text" value="10" placeholder="Reps">
              </div>
              <div class="builder-field">
                <span>Rest</span>
                <input id="exerciseRestInput" type="text" inputmode="numeric" value="60" placeholder="Rest">
              </div>
            </div>
          </label>
        </div>
        <div id="exerciseResults" class="catalog-results top-gap">
          ${exerciseResults.map((exercise) => `
            <article class="catalog-result">
              <div>
                <strong>${exercise.name}</strong>
                <p class="muted">${exercise.muscleGroup} · ${exercise.instructions}</p>
              </div>
              <button class="tiny-button" type="button" onclick="addExerciseFromSearch('${client.id}','${exercise.id}')">Add</button>
            </article>
          `).join("") || "<p class='muted'>No matching exercises found.</p>"}
        </div>
      </div>
      <div class="top-gap">
        <p class="section-label">Assigned Routine For ${client.firstName}</p>
        <div class="stack-list">${workoutMarkup}</div>
      </div>
    </section>
    <section class="detail-section full">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Nutrition</p>
          <h4>Meal plan</h4>
        </div>
        <button class="primary-button" type="button" onclick="submitMealPlan('${client.id}')">Submit meal plan to ${client.firstName}</button>
      </div>
        <div class="builder-section">
        <p class="section-label">Macro Calculator</p>
        <form class="progress-form" onsubmit="event.preventDefault();">
          <div class="nutrition-grid macro-input-grid">
            <label>
              Age
            <input id="macroAge" type="number" min="10" max="100" value="${profile?.age || ""}" oninput="handleMacroInput('${client.id}', 'macroAge')">
          </label>
          <label>
            Height (cm)
            <input id="macroHeight" type="number" min="100" max="230" value="${profile?.heightCm || ""}" oninput="handleMacroInput('${client.id}', 'macroHeight')">
          </label>
          <label>
            Weight (lb)
            <input id="macroWeight" type="number" min="50" max="500" step="0.1" value="${profile?.currentWeight || client.bodyWeight || ""}" oninput="handleMacroInput('${client.id}', 'macroWeight')">
          </label>
          <label>
            Sex
            <select id="macroSex" onchange="handleMacroInput('${client.id}', 'macroSex')">
              <option ${profile?.sex === "Female" ? "selected" : ""}>Female</option>
              <option ${profile?.sex === "Male" ? "selected" : ""}>Male</option>
            </select>
          </label>
          <label>
            Activity
            <select id="macroActivity" onchange="handleMacroInput('${client.id}', 'macroActivity')">
              <option ${profile?.activityLevel === "Light" ? "selected" : ""}>Light</option>
              <option ${profile?.activityLevel === "Moderate" ? "selected" : ""}>Moderate</option>
              <option ${profile?.activityLevel === "Very Active" ? "selected" : ""}>Very Active</option>
            </select>
          </label>
          <label>
            Goal
            <select id="macroGoalType" onchange="handleMacroInput('${client.id}', 'macroGoalType')">
              <option ${profile?.goalType === "Fat loss" ? "selected" : ""}>Fat loss</option>
              <option ${profile?.goalType === "Maintenance" ? "selected" : ""}>Maintenance</option>
              <option ${profile?.goalType === "Muscle gain" ? "selected" : ""}>Muscle gain</option>
              </select>
            </label>
          </div>
          <div class="nutrition-summary top-gap macro-output-summary">
            <div class="nutrition-card"><span>Calories</span><strong id="macroCaloriesValue">${Math.round(profile?.calorieTarget || 0)}</strong></div>
            <div class="nutrition-card"><span>Protein</span><strong id="macroProteinValue">${Math.round(profile?.proteinTarget || 0)}g</strong></div>
            <div class="nutrition-card"><span>Carbs</span><strong id="macroCarbValue">${Math.round(profile?.carbTarget || 0)}g</strong></div>
            <div class="nutrition-card"><span>Fat</span><strong id="macroFatValue">${Math.round(profile?.fatTarget || 0)}g</strong></div>
          </div>
          <p id="macroMessage" class="form-message" aria-live="polite"></p>
        </form>
        </div>
      <div class="builder-section top-gap">
      <p class="section-label">Food Search And Meal Builder</p>
      <form class="progress-form" onsubmit="event.preventDefault(); addMealCatalogItem('${client.id}');">
        <div class="nutrition-grid">
          <label>
            Week of
            <input id="mealWeekStartInput" type="date" value="${mealWeekStart}" onchange="updateMealWeek(this.value, '${client.id}')">
          </label>
          <label>
            Day in week
            <select id="mealDaySelect">
              ${weekDayOptions.map((option) => `<option value="${option.value}" ${option.value === selectedMealDay ? "selected" : ""}>${option.label}</option>`).join("")}
            </select>
          </label>
          <label>
            Meal
            <select id="mealNameSelect">
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
          </label>
          <label>
            Search food catalog
            <input id="foodSearchInput" type="search" placeholder="Search chicken, rice, oats..." value="${foodSearchQuery}" oninput="updateFoodSearch(this.value, '${client.id}')">
          </label>
          <label>
            Servings
            <input id="foodServingsInput" type="number" min="0.5" max="10" step="0.5" value="1">
          </label>
        </div>
        <div class="chip-row">
          ${FOOD_CATALOG.slice(0, 8).map((food) => `<button class="chip-button" type="button" onclick="addFoodFromSearch('${client.id}','${food.id}')">${food.name}</button>`).join("")}
        </div>
        <div id="foodCatalogResults" class="catalog-results">
          ${foodResults.map((food) => `
            <article class="catalog-result">
              <div>
                <strong>${food.name}</strong>
                <p class="muted">${food.serving} · ${food.calories} cal · P ${food.protein}g · C ${food.carbs}g · F ${food.fat}g</p>
              </div>
              <button class="tiny-button" type="button" onclick="addFoodFromSearch('${client.id}','${food.id}')">Add</button>
            </article>
          `).join("") || "<p class='muted'>No matching foods found.</p>"}
        </div>
        <p id="mealCatalogMessage" class="form-message" aria-live="polite"></p>
      </form>
      </div>
      <div class="builder-section top-gap">
      <p class="section-label">Assigned Meal Plan For ${client.firstName}</p>
      <div class="nutrition-summary">
        <div class="nutrition-card"><span>Planned calories</span><strong>${Math.round(mealTotals.calories)}</strong></div>
        <div class="nutrition-card"><span>Protein</span><strong>${Math.round(mealTotals.protein)}g</strong></div>
        <div class="nutrition-card"><span>Carbs</span><strong>${Math.round(mealTotals.carbs)}g</strong></div>
        <div class="nutrition-card"><span>Fat</span><strong>${Math.round(mealTotals.fat)}g</strong></div>
      </div>
      <p><strong>Meal plan status:</strong> ${mealPlan?.isSubmitted ? `Published ${mealPlan.lastPublishedAt}` : "Draft - not yet sent to client"}</p>
      <div class="stack-list top-gap">
        ${groupMealItemsByDayAndMeal(mealPlan).map(([dayLabel, meals]) => `
          <div class="group-block">
            <p class="group-title">${dayLabel}</p>
            ${meals.map(([mealName, items]) => `
              <div class="meal-item">
                <h4>${mealName}</h4>
                ${items.map((item) => {
                  const food = getFood(item.foodId);
                  return `<p>${food?.name || "Food"} x ${item.servings} <button class="tiny-button" type="button" onclick="removeMealCatalogItem('${client.id}','${item.id}')">Remove</button></p>`;
                }).join("")}
              </div>
            `).join("")}
          </div>
        `).join("") || "<p class='muted'>No foods added yet.</p>"}
      </div>
      <div class="top-gap inline-actions align-right">
        <button class="primary-button" type="button" onclick="submitMealPlan('${client.id}')">Submit meal plan to ${client.firstName}</button>
      </div>
      </div>
    </section>
  `;
}

function renderInviteList() {
  const list = document.getElementById("inviteList");
  const invites = getInvites();
  list.innerHTML = invites.length ? invites.map((invite) => {
    const client = state.users.find((user) => user.id === invite.clientId);
    return `
      <article class="history-item">
        <div class="history-head">
          <strong>${client?.firstName || "Pending"} ${client?.lastName || ""}</strong>
          <span class="tag">${invite.status}</span>
        </div>
        <p><strong>Email:</strong> ${invite.email}</p>
        <p><strong>Invite code:</strong> ${invite.code}</p>
        <p class="muted">In production, this code would be sent as a secure email link.</p>
      </article>
    `;
  }).join("") : "<p class='muted'>No invites created yet.</p>";
}

function renderClientDashboard() {
  const client = currentUser();
  if (!client) return;

  document.getElementById("clientGreeting").textContent = `${client.firstName}, here is your training for today.`;
  const plan = getWorkoutPlan(client.id);
  const mealPlan = getMealPlan(client.id);
  const logs = getProgressLogs(client.id);
  const profile = getProfile(client.id);
  const publishedMealPlan = mealPlan?.isSubmitted ? mealPlan : null;
  const mealTotals = getMealTotals(publishedMealPlan);
  const notifications = getNotifications(client.id);
  const subscription = getSubscription(client.id);
  const subscriptionPlan = getPlanDefinition(subscription?.planId);
  const completedCount = plan ? plan.items.filter((item) => item.completed).length : 0;
  const totalCount = plan ? plan.items.length : 0;

  document.getElementById("clientSummary").innerHTML = `
    <div class="metric"><span>Plan</span><strong>${plan?.name || "-"}</strong></div>
    <div class="metric"><span>Completed</span><strong>${completedCount}/${totalCount}</strong></div>
    <div class="metric"><span>Weight</span><strong>${client.bodyWeight ?? "-"} lb</strong></div>
  `;

  document.getElementById("clientWorkoutList").innerHTML = plan
    ? (plan.isSubmitted ? groupWorkoutItemsByDay(plan).map(([dayLabel, items]) => `
      <div class="group-block">
        <p class="group-title">${dayLabel}</p>
        ${items.map((item) => {
          const exercise = getExercise(item.exerciseId);
          return `
            <article class="workout-item ${item.completed ? "completed" : ""}">
              <div class="exercise-media-row">
                <div class="exercise-thumb">
                  <span>${exercise.muscleGroup}</span>
                  <strong>${exercise.thumbnailLabel || exercise.name.slice(0, 2).toUpperCase()}</strong>
                  <span class="media-chip">Trainer demo</span>
                </div>
                <div>
                  <div class="item-row">
                    <div>
                      <h4>${exercise.name}</h4>
                      <div class="workout-meta">
                        <span>${exercise.muscleGroup}</span>
                        <span>${item.sets} sets</span>
                        <span>${item.reps} reps</span>
                        <span>${item.restSeconds}s rest</span>
                      </div>
                    </div>
                    <button class="tiny-button" type="button" onclick="toggleWorkoutItem('${client.id}','${item.id}')">
                      ${item.completed ? "Completed" : "Mark done"}
                    </button>
                  </div>
                  <p class="muted">${exercise.instructions}</p>
                  <div class="inline-actions">
                    <button class="ghost-button" type="button" onclick="openExerciseMedia('${exercise.id}')">Watch demo</button>
                  </div>
                </div>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `).join("") : "<p class='muted'>Your trainer has not published today's workout yet.</p>")
    : "<p class='muted'>No workout assigned today.</p>";

  document.getElementById("clientNotifications").innerHTML = notifications.length
    ? notifications.map((notification) => `
      <article class="history-item">
        <div class="history-head">
          <strong>${notification.title}</strong>
          <span class="tag">${notification.createdAt}</span>
        </div>
        <p class="muted">${notification.message}</p>
      </article>
    `).join("")
    : "<p class='muted'>No notifications yet.</p>";

  if (subscription) {
    document.getElementById("clientNotifications").innerHTML = `
      <article class="history-item">
        <div class="history-head">
          <strong>${subscriptionPlan?.name || "Subscription"}</strong>
          <span class="tag">${subscription.status}</span>
        </div>
        <p><strong>Contract:</strong> ${subscription.contractMonths} months</p>
        <p><strong>Monthly:</strong> $${subscription.monthlyPrice}</p>
        <p><strong>Next billing date:</strong> ${formatScheduleLabel(subscription.nextBillingDate)}</p>
      </article>
    ` + document.getElementById("clientNotifications").innerHTML;
  }

  document.getElementById("clientMealPlan").innerHTML = publishedMealPlan
    ? `
      <div class="nutrition-summary">
        <div class="nutrition-card"><span>Target calories</span><strong>${Math.round(profile?.calorieTarget || 0)}</strong></div>
        <div class="nutrition-card"><span>Protein target</span><strong>${Math.round(profile?.proteinTarget || 0)}g</strong></div>
        <div class="nutrition-card"><span>Carb target</span><strong>${Math.round(profile?.carbTarget || 0)}g</strong></div>
        <div class="nutrition-card"><span>Fat target</span><strong>${Math.round(profile?.fatTarget || 0)}g</strong></div>
      </div>
      <div class="nutrition-summary">
        <div class="nutrition-card"><span>Planned calories</span><strong>${Math.round(mealTotals.calories)}</strong></div>
        <div class="nutrition-card"><span>Planned protein</span><strong>${Math.round(mealTotals.protein)}g</strong></div>
        <div class="nutrition-card"><span>Planned carbs</span><strong>${Math.round(mealTotals.carbs)}g</strong></div>
        <div class="nutrition-card"><span>Planned fat</span><strong>${Math.round(mealTotals.fat)}g</strong></div>
      </div>
      ${groupMealItemsByDayAndMeal(publishedMealPlan).map(([dayLabel, meals]) => `
        <div class="group-block">
          <p class="group-title">${dayLabel}</p>
          ${meals.map(([mealName, items]) => `
            <div class="meal-item">
              <h4>${mealName}</h4>
              ${items.map((item) => {
                const food = getFood(item.foodId);
                return `<p><strong>${food?.name || "Food"}</strong> x ${item.servings} <span class="muted">(${food?.serving || ""}, ${Math.round((food?.calories || 0) * item.servings)} cal)</span></p>`;
              }).join("")}
            </div>
          `).join("")}
        </div>
      `).join("")}
      <div class="meal-item">
        <h4>Micronutrient snapshot</h4>
        <p><strong>Fiber:</strong> ${Math.round(mealTotals.fiber)} g</p>
        <p><strong>Sodium:</strong> ${Math.round(mealTotals.sodium)} mg</p>
        <p><strong>Potassium:</strong> ${Math.round(mealTotals.potassium)} mg</p>
        <p><strong>Iron:</strong> ${mealTotals.iron.toFixed(1)} mg</p>
      </div>
    `
    : "<p class='muted'>Your trainer has not published a meal plan yet.</p>";

  document.getElementById("progressHistory").innerHTML = logs.length
    ? `
      ${renderProgressChart(logs)}
      ${logs.map((log) => `
        <article class="history-item">
          <div class="history-head">
            <strong>${formatDate(log.date)}</strong>
            <span class="tag">${log.energy} energy</span>
          </div>
          <p><strong>Weight:</strong> ${log.bodyWeight ?? "-"} lb</p>
          <p class="muted">${log.notes}</p>
          ${log.updateType === "video" && log.videoLink ? `<p><a href="${log.videoLink}" target="_blank" rel="noreferrer">Watch submitted video</a></p>` : ""}
        </article>
      `).join("")}
    `
    : "<p class='muted'>No logs yet. Add your first check-in today.</p>";
}

function renderApp() {
  const user = currentUser();
  if (!user) {
    sessionBadge.textContent = "Signed out";
    showAuthForms(activeInviteId ? "intake" : "login");
    setViewVisibility({ showAuth: true, showTrainer: false, showClient: false });
    return;
  }

  sessionBadge.textContent = `${user.firstName} (${user.role})`;
  if (user.role === "trainer") {
    setViewVisibility({ showAuth: false, showTrainer: true, showClient: false });
    renderTrainerDashboard();
  } else {
    setViewVisibility({ showAuth: false, showTrainer: false, showClient: true });
    renderClientDashboard();
  }
}

function login(email, password) {
  const user = state.users.find((entry) => entry.email.toLowerCase() === email.toLowerCase() && entry.password === password);
  if (!user) {
    loginMessage.textContent = "Incorrect email or password. Use one of the demo accounts.";
    return;
  }
  sessionUserId = user.id;
  loginMessage.textContent = "";
  renderApp();
}

function logout() {
  sessionUserId = null;
  activeInviteId = null;
  trainerPage = "roster";
  progressMessage.textContent = "";
  inviteMessage.textContent = "";
  intakeMessage.textContent = "";
  renderApp();
}

function resetDemoData() {
  state = createSeedData();
  saveState(state);
  sessionUserId = null;
  activeInviteId = null;
  trainerPage = "roster";
  selectedClientId = state.users.find((user) => user.role === "client")?.id || null;
  loginMessage.textContent = "";
  progressMessage.textContent = "";
  inviteMessage.textContent = "";
  intakeMessage.textContent = "";
  inviteClientMessage.textContent = "Demo data reset. You can sign in again now.";
  document.getElementById("inviteCodeInput").value = "";
  showAuthForms("login");
  renderApp();
}

function selectClient(clientId) {
  selectedClientId = clientId;
  openClientMenuId = null;
  trainerPage = "detail";
  renderTrainerDashboard();
}

function showTrainerRoster() {
  trainerPage = "roster";
  openClientMenuId = null;
  renderTrainerDashboard();
}

function toggleInviteComposer() {
  isInviteComposerOpen = !isInviteComposerOpen;
  renderTrainerDashboard();
}

function toggleClientMenu(clientId) {
  openClientMenuId = openClientMenuId === clientId ? null : clientId;
  renderTrainerDashboard();
}

function editClientInfo(clientId) {
  selectedClientId = clientId;
  openClientMenuId = null;
  trainerPage = "detail";
  renderTrainerDashboard();
}

function deleteClient(clientId) {
  state.users = state.users.filter((user) => user.id !== clientId);
  state.profiles = state.profiles.filter((profile) => profile.clientId !== clientId);
  state.mealPlans = state.mealPlans.filter((plan) => plan.clientId !== clientId);
  state.workoutPlans = state.workoutPlans.filter((plan) => plan.clientId !== clientId);
  state.progressLogs = state.progressLogs.filter((log) => log.clientId !== clientId);
  state.notifications = state.notifications.filter((note) => note.clientId !== clientId);
  state.invites = state.invites.filter((invite) => invite.clientId !== clientId);

  if (selectedClientId === clientId) {
    selectedClientId = getClients()[0]?.id || null;
  }

  openClientMenuId = null;
  if (!selectedClientId) {
    trainerPage = "roster";
  }
  saveState(state);
  renderTrainerDashboard();
}

function saveExerciseMediaOverride() {
  const exerciseId = document.getElementById("adminExerciseSelect")?.value;
  if (!exerciseId) return;
  state.exerciseMediaOverrides[exerciseId] = {
    videoUrl: document.getElementById("adminVideoUrl")?.value.trim() || "",
    thumbnailLabel: document.getElementById("adminThumbnailLabel")?.value.trim() || "",
    mediaNote: document.getElementById("adminMediaNote")?.value.trim() || ""
  };
  saveState(state);
  renderTrainerDashboard();
}

function saveSubscriptionAdmin(clientId) {
  const planId = document.getElementById("subscriptionPlanSelect")?.value;
  const contractMonths = Number(document.getElementById("subscriptionMonthsSelect")?.value || 0);
  const monthlyPrice = Number(document.getElementById("subscriptionMonthlyPrice")?.value || 0);
  const nextBillingDate = document.getElementById("subscriptionNextBilling")?.value || TODAY;
  let subscription = getSubscription(clientId);
  if (!subscription) {
    subscription = {
      id: createId("sub"),
      clientId,
      planId,
      contractMonths,
      monthlyPrice,
      status: "active",
      nextBillingDate,
      contractEndDate: nextBillingDate,
      autoRenew: true,
      paymentMethodStatus: "not_added",
      paymentMethodLastUpdated: null
    };
    state.subscriptions.push(subscription);
  }
  const nextBilling = new Date(`${nextBillingDate}T00:00:00`);
  const endDate = new Date(nextBilling);
  endDate.setMonth(endDate.getMonth() + contractMonths);

  Object.assign(subscription, {
    planId,
    contractMonths,
    monthlyPrice,
    status: "active",
    nextBillingDate,
    contractEndDate: endDate.toISOString().slice(0, 10),
    autoRenew: true
  });
  subscriptionAdminNotice = "Subscription settings saved for this client.";
  saveState(state);
  renderTrainerDashboard();
}

function mockAddCard(clientId) {
  let subscription = getSubscription(clientId);
  if (!subscription) {
    saveSubscriptionAdmin(clientId);
    subscription = getSubscription(clientId);
  }
  if (!subscription) return;

  subscription.paymentMethodStatus = "card_on_file";
  subscription.paymentMethodLastUpdated = TODAY;

  const client = state.users.find((user) => user.id === clientId);
  if (client) {
    state.notifications.unshift({
      id: createId("note"),
      clientId,
      type: "billing",
      title: "Payment method added",
      message: `A demo credit card was added to ${client.firstName}'s subscription profile.`,
      createdAt: TODAY,
      read: false
    });
  }

  subscriptionAdminNotice = "Demo mode: credit card details added to the subscription profile.";
  saveState(state);
  renderTrainerDashboard();
}

function mockSendPaymentLink(clientId) {
  let subscription = getSubscription(clientId);
  if (!subscription) {
    saveSubscriptionAdmin(clientId);
    subscription = getSubscription(clientId);
  }
  if (!subscription) return;

  const client = state.users.find((user) => user.id === clientId);
  if (!client) return;

  subscription.paymentMethodStatus = "link_sent";
  subscription.paymentMethodLastUpdated = TODAY;

  state.notifications.unshift({
    id: createId("note"),
    clientId,
    type: "billing",
    title: "Secure card link sent",
    message: "A secure demo billing link is ready so you can add your card details.",
    createdAt: TODAY,
    read: false
  });

  subscriptionAdminNotice = `Demo mode: secure billing link sent to ${client.email}.`;
  saveState(state);
  renderTrainerDashboard();
}

function toggleWorkoutItem(clientId, itemId) {
  const plan = getWorkoutPlan(clientId);
  if (!plan) return;
  const item = plan.items.find((entry) => entry.id === itemId);
  if (!item) return;
  item.completed = !item.completed;
  saveState(state);
  renderApp();
}

function addExerciseFromSearch(clientId, exerciseId) {
  let plan = getWorkoutPlan(clientId);
  if (!plan) {
    plan = {
      id: createId("plan"),
      clientId,
      trainerId: currentUser()?.id || "u-trainer-1",
      name: "Custom Workout Plan",
      goal: "Assigned by trainer",
      dayLabel: TODAY,
      status: "active",
      isSubmitted: false,
      lastPublishedAt: null,
      items: []
    };
    state.workoutPlans.push(plan);
  }

  const dayLabel = document.getElementById("exerciseDaySelect")?.value || TODAY;
  const sets = Number(document.getElementById("exerciseSetsInput")?.value || 3);
  const reps = document.getElementById("exerciseRepsInput")?.value || "10";
  const restSeconds = Number(document.getElementById("exerciseRestInput")?.value || 60);

  plan.dayLabel = dayLabel;
  plan.items.push({
    id: createId("workout-item"),
    exerciseId,
    dayLabel,
    sets,
    reps,
    restSeconds,
    completed: false
  });
  plan.isSubmitted = false;

  saveState(state);
  renderTrainerDashboard();
}

function removeWorkoutExercise(clientId, itemId) {
  const plan = getWorkoutPlan(clientId);
  if (!plan) return;
  plan.items = plan.items.filter((item) => item.id !== itemId);
  plan.isSubmitted = false;
  saveState(state);
  renderTrainerDashboard();
}

function saveMealPlan(clientId) {
  let mealPlan = getMealPlan(clientId);
  if (!mealPlan) {
    mealPlan = {
      id: createId("meal"),
      clientId,
      trainerId: currentUser()?.id || "u-trainer-1",
      title: "Client meal plan",
      isSubmitted: false,
      lastPublishedAt: null,
      items: []
    };
    state.mealPlans.push(mealPlan);
  }
  saveState(state);
  renderTrainerDashboard();
}

function calculateMacros(clientId) {
  const client = state.users.find((user) => user.id === clientId);
  if (!client) return;

  const age = Number(document.getElementById("macroAge").value || 0);
  const heightCm = Number(document.getElementById("macroHeight").value || 0);
  const weightLb = Number(document.getElementById("macroWeight").value || 0);
  const sex = document.getElementById("macroSex").value;
  const activityLevel = document.getElementById("macroActivity").value;
  const goalType = document.getElementById("macroGoalType").value;
  const message = document.getElementById("macroMessage");

  if (!age || !heightCm || !weightLb) {
    message.textContent = "Add age, height, and weight before calculating.";
    return;
  }
  const targets = computeMacroTargets({ age, heightCm, weightLb, sex, activityLevel, goalType });
  if (!targets) {
    message.textContent = "Unable to calculate targets with the current values.";
    return;
  }

  let profile = getProfile(clientId);
  if (!profile) {
    profile = { clientId };
    state.profiles.push(profile);
  }

  Object.assign(profile, {
    age,
    heightCm,
    currentWeight: weightLb,
    sex,
    activityLevel,
    goalType,
    ...targets
  });

  client.bodyWeight = weightLb;
  saveState(state);
  if (message) {
    message.textContent = "Macro targets updated for this client.";
  }
  renderTrainerDashboard();
}

function handleMacroInput(clientId, elementId) {
  const input = document.getElementById(elementId);
  const isTextLikeInput = input && typeof input.selectionStart === "number" && typeof input.selectionEnd === "number";
  if (isTextLikeInput) {
    queueFocusRestore(
      elementId,
      input.selectionStart,
      input.selectionEnd
    );
  }
  calculateMacros(clientId);
}

function addMealCatalogItem(clientId) {
  let mealPlan = getMealPlan(clientId);
  if (!mealPlan) {
    mealPlan = {
      id: createId("meal"),
      clientId,
      trainerId: currentUser()?.id || "u-trainer-1",
      title: "Client meal plan",
      isSubmitted: false,
      lastPublishedAt: null,
      items: []
    };
    state.mealPlans.push(mealPlan);
  }

  const mealName = document.getElementById("mealNameSelect").value;
  const dayLabel = document.getElementById("mealDaySelect").value || TODAY;
  const foodId = searchFoods(foodSearchQuery)[0]?.id;
  const servings = Number(document.getElementById("foodServingsInput").value || 1);
  const message = document.getElementById("mealCatalogMessage");

  if (!foodId) {
    message.textContent = "Search for a food and add it from the results list.";
    return;
  }

  mealPlan.items.push({
    id: createId("meal-item"),
    dayLabel,
    mealName,
    foodId,
    servings
  });
  mealPlan.isSubmitted = false;

  saveState(state);
  message.textContent = "Food added to the meal catalog.";
  renderTrainerDashboard();
}

function addFoodFromSearch(clientId, foodId) {
  let mealPlan = getMealPlan(clientId);
  if (!mealPlan) {
    mealPlan = {
      id: createId("meal"),
      clientId,
      trainerId: currentUser()?.id || "u-trainer-1",
      title: "Client meal plan",
      isSubmitted: false,
      lastPublishedAt: null,
      items: []
    };
    state.mealPlans.push(mealPlan);
  }

  const mealName = document.getElementById("mealNameSelect")?.value || "Breakfast";
  const dayLabel = document.getElementById("mealDaySelect")?.value || TODAY;
  const servings = Number(document.getElementById("foodServingsInput")?.value || 1);
  const message = document.getElementById("mealCatalogMessage");

  mealPlan.items.push({
    id: createId("meal-item"),
    dayLabel,
    mealName,
    foodId,
    servings
  });
  mealPlan.isSubmitted = false;

  saveState(state);
  message.textContent = "Food added from search results.";
  renderTrainerDashboard();
}

function removeMealCatalogItem(clientId, itemId) {
  const mealPlan = getMealPlan(clientId);
  if (!mealPlan) return;
  mealPlan.items = mealPlan.items.filter((item) => item.id !== itemId);
  mealPlan.isSubmitted = false;
  saveState(state);
  renderTrainerDashboard();
}

function pushClientNotification(clientId, type, title, message) {
  state.notifications.unshift({
    id: createId("note"),
    clientId,
    type,
    title,
    message,
    createdAt: TODAY,
    read: false
  });
}

function submitMealPlan(clientId) {
  const client = state.users.find((user) => user.id === clientId);
  const mealPlan = getMealPlan(clientId);
  if (!client || !mealPlan || !mealPlan.items.length) return;

  mealPlan.isSubmitted = true;
  mealPlan.lastPublishedAt = TODAY;
  pushClientNotification(
    clientId,
    "meal_plan",
    "Meal plan assigned",
    `${currentUser()?.firstName || "Your trainer"} published a meal plan for ${client.firstName}.`
  );
  saveState(state);
  renderTrainerDashboard();
}

function submitWorkoutPlan(clientId) {
  const client = state.users.find((user) => user.id === clientId);
  const workoutPlan = getWorkoutPlan(clientId);
  if (!client || !workoutPlan || !workoutPlan.items.length) return;

  workoutPlan.isSubmitted = true;
  workoutPlan.lastPublishedAt = TODAY;
  pushClientNotification(
    clientId,
    "workout_plan",
    "Workout assigned",
    `${currentUser()?.firstName || "Your trainer"} published a workout for ${client.firstName}.`
  );
  saveState(state);
  renderTrainerDashboard();
}

function updateExerciseSearch(query, clientId) {
  const input = document.getElementById("exerciseSearchInput");
  queueFocusRestore(
    "exerciseSearchInput",
    input ? input.selectionStart : null,
    input ? input.selectionEnd : null
  );
  exerciseSearchQuery = query;
  if (selectedClientId !== clientId) {
    selectedClientId = clientId;
  }
  renderTrainerDashboard();
}

function updateFoodSearch(query, clientId) {
  const input = document.getElementById("foodSearchInput");
  queueFocusRestore(
    "foodSearchInput",
    input ? input.selectionStart : null,
    input ? input.selectionEnd : null
  );
  foodSearchQuery = query;
  if (selectedClientId !== clientId) {
    selectedClientId = clientId;
  }
  renderTrainerDashboard();
}

function updateMealWeek(value, clientId) {
  mealWeekStart = value || getWeekStartISO(TODAY);
  if (selectedClientId !== clientId) {
    selectedClientId = clientId;
  }
  renderTrainerDashboard();
}

function openExerciseMedia(exerciseId) {
  const exercise = getExercise(exerciseId);
  if (!exercise || !exerciseMediaDialog) return;
  document.getElementById("exerciseMediaTitle").textContent = exercise.name;
  document.getElementById("exerciseMediaDescription").textContent = exercise.mediaNote || exercise.instructions;
  document.getElementById("exerciseMediaPreview").innerHTML = `
    <span>${exercise.muscleGroup}</span>
    <strong>${exercise.thumbnailLabel || exercise.name.slice(0, 2).toUpperCase()}</strong>
    <span class="media-chip">Trainer video slot</span>
  `;
  exerciseMediaDialog.showModal();
}

function closeExerciseMedia() {
  if (exerciseMediaDialog?.open) {
    exerciseMediaDialog.close();
  }
}

function handleDocumentClick(event) {
  if (openClientMenuId && !event.target.closest(".menu-wrap")) {
    openClientMenuId = null;
    if (!trainerView.classList.contains("hidden")) {
      renderTrainerDashboard();
    }
  }
}

function saveProgressLog(event) {
  event.preventDefault();
  const user = currentUser();
  if (!user) return;

  const progressType = document.getElementById("progressTypeInput").value;
  const bodyWeightValue = document.getElementById("bodyWeightInput").value;
  const energy = document.getElementById("energyInput").value;
  const videoLink = document.getElementById("videoLinkInput").value.trim();
  const notes = document.getElementById("notesInput").value.trim();

  const entry = {
    id: createId("log"),
    clientId: user.id,
    date: TODAY,
    bodyWeight: bodyWeightValue ? Number(bodyWeightValue) : null,
    energy,
    updateType: progressType,
    videoLink: progressType === "video" ? videoLink : "",
    notes: notes || (progressType === "video" ? "Video update submitted." : "No note added.")
  };

  if (entry.bodyWeight) {
    user.bodyWeight = entry.bodyWeight;
  }

  state.progressLogs.unshift(entry);
  saveState(state);

  event.target.reset();
  progressMessage.textContent = "Progress saved to your history.";
  renderClientDashboard();
}

function toggleProgressTypeFields() {
  const type = document.getElementById("progressTypeInput").value;
  document.getElementById("videoLinkField").classList.toggle("hidden", type !== "video");
}

function filterClients(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    renderTrainerClientList(getClients());
    return;
  }

  const filtered = getClients().filter((client) => {
    const haystack = `${client.firstName} ${client.lastName} ${client.goal || ""} ${client.status}`.toLowerCase();
    return haystack.includes(normalized);
  });
  renderTrainerClientList(filtered);
}

function createInvite(event) {
  event.preventDefault();
  const fullName = document.getElementById("inviteClientName").value.trim();
  const email = document.getElementById("inviteClientEmail").value.trim().toLowerCase();
  if (!fullName || !email) return;

  const existing = state.users.find((user) => user.email.toLowerCase() === email);
  if (existing) {
    inviteClientMessage.textContent = "That email is already assigned to a user.";
    return;
  }

  const [firstName, ...rest] = fullName.split(" ");
  const lastName = rest.join(" ") || "Client";
  const clientId = createId("client");
  const code = `INV-${Math.floor(100000 + Math.random() * 900000)}`;

  state.users.push({
    id: clientId,
    role: "client",
    trainerId: currentUser()?.id || "u-trainer-1",
    firstName,
    lastName,
    email,
    password: "",
    phone: "",
    status: "invited",
    goal: "",
    injuries: "",
    allergies: "",
    goalWeight: null,
    notes: "",
    intakeStatus: "invited",
    bodyWeight: null
  });

  state.invites.push({
    id: createId("invite"),
    email,
    clientId,
    code,
    status: "sent",
    createdAt: TODAY
  });

  saveState(state);
  event.target.reset();
  isInviteComposerOpen = false;
  inviteClientMessage.textContent = `Invite created. Demo code: ${code}`;
  renderTrainerDashboard();
}

function openInvite(event) {
  event.preventDefault();
  const code = document.getElementById("inviteCodeInput").value.trim().toUpperCase();
  const invite = state.invites.find((entry) => entry.code.toUpperCase() === code);
  if (!invite) {
    inviteMessage.textContent = "Invite code not found.";
    return;
  }

  activeInviteId = invite.id;
  const client = state.users.find((user) => user.id === invite.clientId);
  document.getElementById("intakeHeading").textContent = `Complete your profile, ${client?.firstName || "client"}`;
  document.getElementById("intakeName").value = client ? `${client.firstName} ${client.lastName}` : "";
  document.getElementById("intakeWeight").value = client?.bodyWeight ?? "";
  document.getElementById("intakeGoalWeight").value = client?.goalWeight ?? "";
  document.getElementById("intakeAllergies").value = client?.allergies ?? "";
  document.getElementById("intakeInjuries").value = client?.injuries ?? "";
  document.getElementById("intakeGoals").value = client?.goal ?? "";
  document.getElementById("intakeNotes").value = client?.notes ?? "";
  showAuthForms("intake");
  inviteMessage.textContent = "";
  intakeMessage.textContent = "";
}

function submitIntake(event) {
  event.preventDefault();
  const invite = state.invites.find((entry) => entry.id === activeInviteId);
  if (!invite) {
    intakeMessage.textContent = "Invite session expired. Re-enter the invite code.";
    showAuthForms("login");
    return;
  }

  const client = state.users.find((user) => user.id === invite.clientId);
  if (!client) return;

  const fullName = document.getElementById("intakeName").value.trim();
  const [firstName, ...rest] = fullName.split(" ");
  client.firstName = firstName || client.firstName;
  client.lastName = rest.join(" ") || client.lastName;
  client.sex = document.getElementById("intakeSex").value;
  client.bodyWeight = Number(document.getElementById("intakeWeight").value || 0) || null;
  client.goalWeight = Number(document.getElementById("intakeGoalWeight").value || 0) || null;
  client.allergies = document.getElementById("intakeAllergies").value.trim();
  client.injuries = document.getElementById("intakeInjuries").value.trim();
  client.goal = document.getElementById("intakeGoals").value.trim();
  client.notes = document.getElementById("intakeNotes").value.trim();
  client.password = document.getElementById("intakePassword").value;
  client.status = "active";
  client.intakeStatus = "completed";

  const existingProfile = getProfile(client.id);
  const profilePayload = {
    clientId: client.id,
    sex: client.sex,
    currentWeight: client.bodyWeight,
    goalWeight: client.goalWeight,
    allergies: client.allergies,
    trainerNotes: client.notes,
    goals: client.goal,
    injuries: client.injuries
  };

  if (existingProfile) {
    Object.assign(existingProfile, profilePayload);
  } else {
    state.profiles.push(profilePayload);
  }

  invite.status = "completed";
  saveState(state);
  intakeMessage.textContent = "Profile completed. You can now sign in with your email and password.";
  activeInviteId = null;
  event.target.reset();
  showAuthForms("login");
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  login(email, password);
});

document.getElementById("progressForm").addEventListener("submit", saveProgressLog);
document.getElementById("progressTypeInput").addEventListener("change", toggleProgressTypeFields);
document.getElementById("clientSearch").addEventListener("input", (event) => filterClients(event.target.value));
document.getElementById("inviteClientForm").addEventListener("submit", createInvite);
document.getElementById("inviteAccessForm").addEventListener("submit", openInvite);
document.getElementById("intakeForm").addEventListener("submit", submitIntake);
logoutBtn.addEventListener("click", logout);
resetBtn.addEventListener("click", resetDemoData);
toggleInviteBtn.addEventListener("click", toggleInviteComposer);
cancelInviteBtn.addEventListener("click", toggleInviteComposer);
backToRosterBtn.addEventListener("click", showTrainerRoster);
closeMediaDialogBtn.addEventListener("click", closeExerciseMedia);
toggleProgressTypeFields();
window.addEventListener("resize", updateDeviceBadge);
document.addEventListener("click", handleDocumentClick);

window.selectClient = selectClient;
window.toggleWorkoutItem = toggleWorkoutItem;
window.saveMealPlan = saveMealPlan;
window.calculateMacros = calculateMacros;
window.addMealCatalogItem = addMealCatalogItem;
window.removeMealCatalogItem = removeMealCatalogItem;
window.addFoodFromSearch = addFoodFromSearch;
window.updateFoodSearch = updateFoodSearch;
window.updateMealWeek = updateMealWeek;
window.submitMealPlan = submitMealPlan;
window.submitWorkoutPlan = submitWorkoutPlan;
window.addExerciseFromSearch = addExerciseFromSearch;
window.removeWorkoutExercise = removeWorkoutExercise;
window.updateExerciseSearch = updateExerciseSearch;
window.handleMacroInput = handleMacroInput;
window.toggleClientMenu = toggleClientMenu;
window.editClientInfo = editClientInfo;
window.deleteClient = deleteClient;
window.showTrainerRoster = showTrainerRoster;
window.openExerciseMedia = openExerciseMedia;
window.saveExerciseMediaOverride = saveExerciseMediaOverride;
window.saveSubscriptionAdmin = saveSubscriptionAdmin;
window.mockAddCard = mockAddCard;
window.mockSendPaymentLink = mockSendPaymentLink;

renderApp();

