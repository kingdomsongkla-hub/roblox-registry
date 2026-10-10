const API_URL = "https://api.sheetbest.com/sheets/b16dcf56-378f-4d0e-bc3b-c5b92b850cc9";

const POLICE_FLAG = "Thai_National_Police_Flag.svg.webp";
const NAVY_FLAG = "Naval_Ensign_of_Thailand-2.svg";

// พจนานุกรมแปลภาษา
const I18N = {
  th: {
    sys_title: "ระบบฐานข้อมูลทะเบียนราษฎร์และกำลังพลแห่งชาติ",
    sys_subtitle: "ศูนย์บัญชาการและบริหารจัดการกำลังพลระดับสูง",
    mode_night: "โหมดกลางคืน",
    mode_day: "โหมดกลางวัน",
    btn_refresh: "โหลดใหม่",
    kpi_pending: "คำขอรออนุมัติบรรจุ (INPUT)",
    kpi_database: "กำลังพลในระบบทั้งหมด (DATABASE)",
    kpi_status: "สถานะการเชื่อมต่อชีท",
    police_count_label: "กำลังพล สำนักงานตำรวจแห่งชาติ",
    navy_count_label: "กำลังพล กองทัพเรือ",
    total_count_label: "สัดส่วนกำลังพลภาพรวม",
    unit_person: "นาย",
    tab_input: "คำขอสมัครใหม่",
    tab_database: "ทะเบียนราษฎร์หลัก",
    th_time: "วัน-เวลา",
    th_profile: "โปรไฟล์ Roblox",
    th_equip: "อุปกรณ์",
    th_apply_agency: "หน่วยงานที่สมัคร",
    th_agency: "หน่วยงาน",
    th_rank: "ยศ / ตำแหน่ง",
    th_affiliation: "สังกัด / เหล่า",
    th_score: "คะแนน",
    th_action: "การดำเนินการ",
    btn_all: "ทั้งหมด",
    btn_add_member: "บวกรายชื่อ",
    agency_police: "สำนักงานตำรวจแห่งชาติ",
    agency_navy: "กองทัพเรือ",
    msg_loading: "กำลังดึงข้อมูล...",
    modal_approve_title: "อนุมัติและบรรจุลงทะเบียนราษฎร์",
    modal_reject_title: "ปฏิเสธ / ไม่อนุมัติคำขอสมัคร",
    modal_add_title: "เพิ่มรายชื่อลงทะเบียนราษฎร์หลัก",
    modal_edit_title: "ปรับแต่งยศ / เปลี่ยนเหล่าสังกัด / ตำแหน่ง",
    btn_cancel: "ยกเลิก",
    btn_confirm_approve: "ยืนยันบรรจุ",
    btn_confirm_reject: "ยืนยันปฏิเสธคำขอ",
    btn_save_new: "บันทึกรายชื่อใหม่",
    btn_save_changes: "บันทึกการเปลี่ยนแปลง",
    lbl_initial_rank: "แต่งตั้งยศแรกรับ (กำหนดอัตโนมัติ)",
    lbl_initial_aff: "สังกัด / เหล่า",
    history_modal_title: "ประวัติการเคลื่อนไหว",
    lbl_performed_by: "ผู้ดำเนินการ / ผู้ลงนาม",
    lbl_reject_reason: "เหตุผลที่ไม่อนุมัติ",
    lbl_score_adjust: "ระบบจัดการคะแนนความดีความชอบ",
    lbl_current_score: "คะแนนปัจจุบัน",
    lbl_adjust_amount: "จำนวนคะแนนที่ต้องการ เพิ่ม/ลด",
    lbl_score_reason: "กิจกรรม / เหตุผลในการปรับคะแนน",
    btn_view_table: "ตาราง",
    btn_view_grid: "การ์ดโปรไฟล์"
  },
  en: {
    sys_title: "NATIONAL SECURITY & REGISTRY SYSTEM",
    sys_subtitle: "High-Command Registry & Personnel Database",
    mode_night: "NIGHT MODE",
    mode_day: "DAY MODE",
    btn_refresh: "REFRESH",
    kpi_pending: "PENDING REQUESTS (INPUT)",
    kpi_database: "ACTIVE PERSONNEL (DATABASE)",
    kpi_status: "SHEET CONNECTION STATUS",
    police_count_label: "Royal Thai Police Force",
    navy_count_label: "Royal Thai Navy Force",
    total_count_label: "Personnel Distribution Ratio",
    unit_person: "Officers",
    tab_input: "NEW APPLICATIONS",
    tab_database: "MAIN REGISTRATION",
    th_time: "TIMESTAMP",
    th_profile: "Roblox Profile",
    th_equip: "EQUIPMENT",
    th_apply_agency: "TARGET AGENCY",
    th_agency: "AGENCY",
    th_rank: "RANK / POSITION",
    th_affiliation: "AFFILIATION / UNIT",
    th_score: "SCORE",
    th_action: "ACTION",
    btn_all: "ALL UNITS",
    btn_add_member: "ADD MEMBER",
    agency_police: "Royal Thai Police",
    agency_navy: "Royal Thai Navy",
    msg_loading: "Fetching Data...",
    modal_approve_title: "Approve & Enlist Member",
    modal_reject_title: "Reject Application",
    modal_add_title: "Add New Main Member",
    modal_edit_title: "Modify Rank, Unit & Positions",
    btn_cancel: "Cancel",
    btn_confirm_approve: "Confirm Enlistment",
    btn_confirm_reject: "Confirm Rejection",
    btn_save_new: "Save Member",
    btn_save_changes: "Save Changes",
    lbl_initial_rank: "Initial Assigned Rank (Auto)",
    lbl_initial_aff: "Affiliation / Unit",
    history_modal_title: "Movement History",
    lbl_performed_by: "Performed By / Authorized Person",
    lbl_reject_reason: "Rejection Reason",
    lbl_score_adjust: "Score Management System",
    lbl_current_score: "Current Score",
    lbl_adjust_amount: "Points to Add/Deduct",
    lbl_score_reason: "Activity / Reason for Adjustment",
    btn_view_table: "Table",
    btn_view_grid: "Card Grid"
  }
};

const AGENCY_DATA = {
  "Royal Thai Police": {
    ranks: [
      "พลตำรวจเอก (พล.ต.อ.)", "พลตำรวจโท (พล.ต.ท.)", "พลตำรวจตรี (พล.ต.ต.)",
      "พันตำรวจเอก (พ.ต.อ.)", "พันตำรวจโท (พ.ต.ท.)", "พันตำรวจตรี (พ.ต.ต.)",
      "ร้อยตำรวจเอก (ร.ต.อ.)", "ร้อยตำรวจโท (ร.ต.ท.)", "ร้อยตำรวจตรี (ร.ต.ต.)",
      "ดาบตำรวจ (ด.ต.)", "จ่าสิบตำรวจ (จ.ส.ต.)", "สิบตำรวจเอก (ส.ต.อ.)",
      "สิบตำรวจโท (ส.ต.โท)", "สิบตำรวจตรี (ส.ต.ต.)", "พลตำรวจ (พลฯ)", "นักเรียนนายสิบตำรวจ"
    ],
    affiliations: [
      "ไร้สังกัด", "กรมตำรวจทางหลวง", "ตำรวจจราจร", "ตำรวจราชองค์รักษ์ในพระองค์"
    ]
  },
  "Royal Thai Navy": {
    ranks: [
      "จอมพลเรือ", "พลเรือเอก (พล.ร.อ.)", "พลเรือโท (พล.ร.ท.)", "พลเรือตรี (พล.ร.ต.)",
      "นาวาเอก (น.อ.)", "นาวาโท (น.ท.)", "นาวาตรี (น.ต.)", "เรือเอก (ร.อ.)",
      "เรือโท (ร.โท)", "เรือตรี (ร.ต.)", "พันจ่าเอก (พ.จ.อ.)", "พันจ่าโท (พ.จ.ท.)",
      "พันจ่าตรี (พ.จ.ต.)", "จ่าเอก (จ.อ.)", "จ่าโท (จ.ท.)", "จ่าตรี (จ.ต.)",
      "พลทหาร (พลฯ)", "นักเรียนทหารเรือ (นนร.)", "นักเรียนจ่าทหารเรือ"
    ],
    affiliations: [
      "ไร้สังกัด", "สารวัตรทหารเรือ", "รอบพิเศษ", "นาวิกโยธิน", "แพทย์ทหารเรือ"
    ]
  }
};

let rawInputData = [];
let rawDbData = [];
let currentAgencyFilter = 'ALL';
let currentLang = 'th';
let currentViewMode = 'table';
let agencyChartInstance = null;

const approveModal = new bootstrap.Modal(document.getElementById('approveModal'));
const rejectModal = new bootstrap.Modal(document.getElementById('rejectModal'));
const addModal = new bootstrap.Modal(document.getElementById('addModal'));
const editModal = new bootstrap.Modal(document.getElementById('editModal'));
const historyModal = new bootstrap.Modal(document.getElementById('historyModal'));
const idCardModal = new bootstrap.Modal(document.getElementById('idCardModal'));

document.addEventListener("DOMContentLoaded", () => {
  loadAllData();

  document.getElementById("editAgency").addEventListener("change", (e) => {
    updateDropdownsByAgency("editRank", "editAffiliation", e.target.value);
  });

  document.getElementById("addAgency").addEventListener("change", (e) => {
    updateDropdownsByAgency("addRank", "addAffiliation", e.target.value);
  });
});

// ฟังก์ชันสลับการมองระหว่าง Table และ Grid View
function toggleViewMode(mode) {
  currentViewMode = mode;
  const btnTable = document.getElementById("btnTableView");
  const btnGrid = document.getElementById("btnGridView");
  const tableContainer = document.getElementById("tableViewContainer");
  const gridContainer = document.getElementById("gridViewContainer");

  if (mode === 'table') {
    btnTable.classList.add('active');
    btnGrid.classList.remove('active');
    tableContainer.classList.remove('d-none');
    gridContainer.classList.add('d-none');
  } else {
    btnGrid.classList.add('active');
    btnTable.classList.remove('active');
    gridContainer.classList.remove('d-none');
    tableContainer.classList.add('d-none');
  }
  filterDatabase();
}

// เอฟเฟกต์จุดพลุฉลองอนุมัติ
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0284c7', '#f59e0b', '#10b981', '#3b82f6', '#ffffff']
    });
  }
}

// เอฟเฟกต์ปฏิเสธคำขอ
function triggerRejectFlash() {
  document.body.classList.add("reject-flash");
  setTimeout(() => {
    document.body.classList.remove("reject-flash");
  }, 600);
}

// ฟังก์ชันสลับโหมดกลางวัน / กลางคืน
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);

  const icon = document.getElementById("themeIcon");
  const text = document.getElementById("themeText");

  if (newTheme === "light") {
    icon.className = "fa-solid fa-sun text-warning";
    text.innerText = currentLang === 'th' ? "โหมดกลางวัน" : "DAY MODE";
  } else {
    icon.className = "fa-solid fa-moon text-light";
    text.innerText = currentLang === 'th' ? "โหมดกลางคืน" : "NIGHT MODE";
  }
  if (agencyChartInstance) renderDashboardChart(agencyChartInstance.data.datasets[0].data[0], agencyChartInstance.data.datasets[0].data[1]);
}

// ฟังก์ชันสลับภาษา
function toggleLanguage() {
  currentLang = currentLang === 'th' ? 'en' : 'th';
  document.getElementById("langText").innerText = currentLang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (I18N[currentLang][key]) {
      elem.innerText = I18N[currentLang][key];
    }
  });

  filterDatabase();
  renderInputTable(rawInputData);
}

function getVal(row, possibleKeys) {
  for (let key of possibleKeys) {
    if (row[key] !== undefined && row[key] !== null) return String(row[key]).trim();
    for (let actualKey in row) {
      if (actualKey.trim() === key.trim() && row[actualKey] !== undefined) {
        return String(row[actualKey]).trim();
      }
    }
  }
  return "";
}

function getRankPriority(rank, agency) {
  const isNavy = agency.toLowerCase().includes("navy") || agency.includes("เรือ");
  const rankList = isNavy ? AGENCY_DATA["Royal Thai Navy"].ranks : AGENCY_DATA["Royal Thai Police"].ranks;
  const index = rankList.findIndex(r => rank.includes(r) || r.includes(rank));
  return index !== -1 ? index : 999;
}

// วาด Dashboard Chart สถิติกำลังพล
function renderDashboardChart(policeCount, navyCount) {
  const ctx = document.getElementById('agencyChart');
  if (!ctx) return;

  if (agencyChartInstance) {
    agencyChartInstance.destroy();
  }

  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  agencyChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['ตำรวจ (RTP)', 'ทหารเรือ (RTN)'],
      datasets: [{
        data: [policeCount, navyCount],
        backgroundColor: ['#0284c7', '#06b6d4'],
        borderWidth: 2,
        borderColor: isDark ? '#0f172a' : '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      cutout: '70%'
    }
  });
}

// คำนวณยอดกำลังพล
function updateAgencyBreakdown() {
  let police = 0;
  let navy = 0;

  rawDbData.forEach(item => {
    const agency = getVal(item, ["Agency"]);
    if (agency.toLowerCase().includes("navy") || agency.includes("เรือ")) {
      navy++;
    } else {
      police++;
    }
  });

  const total = police + navy;
  document.getElementById("policeCount").innerText = police;
  document.getElementById("navyCount").innerText = navy;

  if (total > 0) {
    const pPct = Math.round((police / total) * 100);
    const nPct = Math.round((navy / total) * 100);
    document.getElementById("ratioStatus").innerText = `ตร. ${pPct}% | ทร. ${nPct}%`;
  } else {
    document.getElementById("ratioStatus").innerText = `ตร. 0% | ทร. 0%`;
  }

  renderDashboardChart(police, navy);
}

// ฟังก์ชันบันทึกประวัติลง Tab History
async function logHistory(robloxName, action, detail, performedBy = "ระบบกลาง") {
  try {
    const logData = {
      "Timestamp": new Date().toLocaleString('th-TH'),
      "Name in Roblox": robloxName,
      "Action": action,
      "Detail": detail,
      "Performed By": performedBy || "ไม่ระบุ"
    };

    await fetch(`${API_URL}/tabs/History`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logData)
    });
  } catch (err) {
    console.error("Failed to log history:", err);
  }
}

// ฟังก์ชันเปิดดูบัตรประจำตัวกำลังพล (Personnel ID Card Modal)
function openIdCardModal(robloxName) {
  const user = rawDbData.find(d => getVal(d, ["Name in Roblox"]) === robloxName);
  if (!user) return;

  document.getElementById("idCardName").innerText = getVal(user, ["Name in Roblox"]);
  document.getElementById("idCardRank").innerText = getVal(user, ["Rank"]);
  document.getElementById("idCardAgency").innerText = getVal(user, ["Agency"]);
  document.getElementById("idCardAffiliation").innerText = getVal(user, ["Affiliation"]);
  document.getElementById("idCardScore").innerText = `${getVal(user, ["Score"]) || "0"} SCORE`;
  document.getElementById("idCardDiscord").innerText = getVal(user, ["Name in Discord"]) || "-";
  document.getElementById("idCardEquip").innerText = getVal(user, ["Gaming equipment"]) || "-";

  // ดึงข้อมูลตำแหน่งที่ 1 - 7
  let posList = [];
  for (let i = 1; i <= 7; i++) {
    const val = getVal(user, [`Position${i}`]);
    if (val) posList.push(`${i}. ${val}`);
  }

  const posContainer = document.getElementById("idCardPositions");
  if (posList.length > 0) {
    posContainer.innerHTML = posList.join("<br>");
  } else {
    posContainer.innerText = "ยังไม่มีการแต่งตั้งตำแหน่งเฉพาะ";
  }

  idCardModal.show();
}

// ฟังก์ชันเปิดดูประวัติรายบุคคล
async function openHistoryModal(robloxName) {
  document.getElementById("historyTargetUser").innerText = robloxName;
  const container = document.getElementById("historyTimeline");
  container.innerHTML = `<div class="text-center py-4 text-muted"><i class="fa-solid fa-spinner fa-spin me-2"></i> ${I18N[currentLang].msg_loading}</div>`;
  
  historyModal.show();

  try {
    const res = await fetch(`${API_URL}/tabs/History`);
    const historyList = await res.json();
    
    const userHistory = Array.isArray(historyList) 
      ? historyList.filter(h => getVal(h, ["Name in Roblox"]) === robloxName)
      : [];

    if (userHistory.length === 0) {
      container.innerHTML = `<div class="text-center py-4 text-muted">${currentLang === 'th' ? 'ยังไม่มีประวัติการเคลื่อนไหว' : 'No history records found'}</div>`;
      return;
    }

    userHistory.reverse();

    container.innerHTML = userHistory.map(item => {
      const time = getVal(item, ["Timestamp"]);
      const action = getVal(item, ["Action"]);
      const detail = getVal(item, ["Detail"]);
      const performedBy = getVal(item, ["Performed By"]) || "ไม่ระบุ";

      return `
        <div class="timeline-item">
          <div class="timeline-time">${time}</div>
          <div class="timeline-title text-cyan">${action}</div>
          <div class="timeline-detail">${detail}</div>
          <div class="timeline-by"><i class="fa-solid fa-user-check me-1"></i>ดำเนินการโดย: ${performedBy}</div>
        </div>
      `;
    }).join("");

  } catch (err) {
    console.error(err);
    container.innerHTML = `<div class="text-center py-4 text-danger">เกิดข้อผิดพลาดในการดึงประวัติ</div>`;
  }
}

async function loadAllData() {
  const statusEl = document.getElementById("connectionStatus");
  statusEl.innerHTML = `<span class="text-warning"><i class="fa-solid fa-spinner fa-spin me-1"></i> CONNECTING...</span>`;

  try {
    const resInput = await fetch(`${API_URL}/tabs/Input`);
    const dataInput = await resInput.json();
    rawInputData = Array.isArray(dataInput) ? dataInput.filter(row => {
      const name = getVal(row, ["Name in Roblox"]);
      const status = getVal(row, ["สถานะ"]);
      return name && status !== "ผ่าน" && status !== "ไม่ผ่าน";
    }) : [];
    renderInputTable(rawInputData);

    const resDb = await fetch(`${API_URL}/tabs/Database`);
    const dataDb = await resDb.json();
    rawDbData = Array.isArray(dataDb) ? dataDb.filter(row => getVal(row, ["Name in Roblox"])) : [];
    
    filterDatabase();
    updateAgencyBreakdown();

    document.getElementById("statPendingCount").innerText = rawInputData.length;
    document.getElementById("pendingBadge").innerText = rawInputData.length;
    document.getElementById("statMemberCount").innerText = rawDbData.length;

    statusEl.innerHTML = `<i class="fa-solid fa-circle-check text-success me-1"></i> LIVE API CONNECTED`;
  } catch (err) {
    console.error(err);
    statusEl.innerHTML = `<span class="text-danger"><i class="fa-solid fa-circle-xmark me-1"></i> CONNECTION ERROR</span>`;
  }
}

function renderInputTable(data) {
  const tbody = document.getElementById("inputTableBody");
  if (!data || data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-5 text-muted">${currentLang === 'th' ? 'ไม่มีคำขอรอตรวจสอบ' : 'No pending applications'}</td></tr>`;
    return;
  }

  tbody.innerHTML = data.map(item => {
    const robloxName = getVal(item, ["Name in Roblox"]);
    const discord = getVal(item, ["Name in Discord"]);
    const equip = getVal(item, ["Gaming equipment"]);
    const agency = getVal(item, ["Apply to an organization"]);
    const profile = getVal(item, ["Roblox profile"]);
    const timestamp = getVal(item, ["Timestamp"]);

    const isNavy = agency.toLowerCase().includes("navy") || agency.includes("เรือ");
    const flagSrc = isNavy ? NAVY_FLAG : POLICE_FLAG;

    return `
      <tr>
        <td class="text-muted small">${timestamp}</td>
        <td class="fw-bold text-cyan">${robloxName}</td>
        <td>${discord}</td>
        <td><span class="badge bg-secondary border border-secondary text-light">${equip}</span></td>
        <td>
          <span class="badge-agency">
            <img src="${flagSrc}" class="agency-flag-sm" alt="Flag">
            ${agency}
          </span>
        </td>
        <td class="text-end">
          ${profile.startsWith('http') ? `
            <a href="${profile}" target="_blank" class="btn btn-sm btn-outline-info rounded-pill me-1">
              <i class="fa-solid fa-up-right-from-square"></i> Profile
            </a>
          ` : ''}
          <button class="btn btn-sm btn-success px-3 rounded-pill fw-bold me-1 shadow-sm" onclick="openApproveModal('${robloxName}')">
            <i class="fa-solid fa-check me-1"></i>${currentLang === 'th' ? 'อนุมัติ' : 'Approve'}
          </button>
          <button class="btn btn-sm btn-outline-danger px-3 rounded-pill fw-bold" onclick="openRejectModal('${robloxName}')">
            <i class="fa-solid fa-xmark me-1"></i>${currentLang === 'th' ? 'ไม่อนุมัติ' : 'Reject'}
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function filterDatabase() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();

  let filtered = rawDbData.filter(item => {
    const robloxName = getVal(item, ["Name in Roblox"]).toLowerCase();
    const discord = getVal(item, ["Name in Discord"]).toLowerCase();
    const agency = getVal(item, ["Agency"]);
    const rank = getVal(item, ["Rank"]).toLowerCase();
    const affiliation = getVal(item, ["Affiliation"]).toLowerCase();

    const isNavy = agency.toLowerCase().includes("navy") || agency.includes("เรือ");
    if (currentAgencyFilter === 'POLICE' && isNavy) return false;
    if (currentAgencyFilter === 'NAVY' && !isNavy) return false;

    return robloxName.includes(searchText) || discord.includes(searchText) || rank.includes(searchText) || affiliation.includes(searchText);
  });

  filtered.sort((a, b) => {
    const rankA = getVal(a, ["Rank"]);
    const agencyA = getVal(a, ["Agency"]);
    const rankB = getVal(b, ["Rank"]);
    const agencyB = getVal(b, ["Agency"]);
    return getRankPriority(rankA, agencyA) - getRankPriority(rankB, agencyB);
  });

  if (currentViewMode === 'table') {
    renderDatabaseTable(filtered);
  } else {
    renderDatabaseGrid(filtered);
  }
}

function renderDatabaseTable(data) {
  const tbody = document.getElementById("dbTableBody");
  if (!data || data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center py-5 text-muted">${currentLang === 'th' ? 'ไม่พบรายชื่อในระบบ' : 'No records found'}</td></tr>`;
    return;
  }

  tbody.innerHTML = data.map(item => {
    const robloxName = getVal(item, ["Name in Roblox"]);
    const discord = getVal(item, ["Name in Discord"]);
    const equip = getVal(item, ["Gaming equipment"]);
    const agency = getVal(item, ["Agency"]);
    const rank = getVal(item, ["Rank"]);
    const affiliation = getVal(item, ["Affiliation"]);
    const score = getVal(item, ["Score"]) || "0";
    const profile = getVal(item, ["Roblox profile"]);

    const isNavy = agency.toLowerCase().includes("navy") || agency.includes("เรือ");
    const flagSrc = isNavy ? NAVY_FLAG : POLICE_FLAG;

    return `
      <tr>
        <td class="fw-bold">
          <a href="#" class="text-decoration-none text-cyan" onclick="openIdCardModal('${robloxName}'); return false;" title="ดูบัตรประจำตัว">
            <i class="fa-solid fa-id-card me-1 text-gold"></i>${robloxName}
          </a>
        </td>
        <td>
          ${profile.startsWith('http') ? `
            <a href="${profile}" target="_blank" class="btn btn-sm btn-outline-info rounded-pill">
              <i class="fa-solid fa-arrow-up-right-from-square me-1"></i> Profile
            </a>
          ` : '<span class="text-muted small">ไม่มีลิงก์</span>'}
        </td>
        <td class="text-muted">${discord}</td>
        <td><span class="badge bg-secondary border border-secondary text-light">${equip}</span></td>
        <td>
          <span class="badge-agency">
            <img src="${flagSrc}" class="agency-flag-sm" alt="Flag">
            ${agency}
          </span>
        </td>
        <td><span class="badge-rank">${rank}</span></td>
        <td>${affiliation}</td>
        <td><span class="fw-bold text-gold">${score}</span></td>
        <td class="text-end">
          <button class="btn btn-sm btn-outline-primary rounded-pill me-1" onclick="openHistoryModal('${robloxName}')" title="ดูประวัติ">
            <i class="fa-solid fa-clock-rotate-left me-1"></i>${currentLang === 'th' ? 'ประวัติ' : 'History'}
          </button>
          <button class="btn btn-sm btn-outline-warning rounded-pill me-1" onclick="openEditModal('${robloxName}')">
            <i class="fa-solid fa-user-pen me-1"></i>${currentLang === 'th' ? 'แก้ไข' : 'Edit'}
          </button>
          <button class="btn btn-sm btn-outline-danger rounded-pill" onclick="deleteMember('${robloxName}')">
            <i class="fa-solid fa-trash me-1"></i>${currentLang === 'th' ? 'ลบ' : 'Delete'}
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

// Render แบบ Grid View (การ์ดโปรไฟล์)
function renderDatabaseGrid(data) {
  const container = document.getElementById("gridViewContainer");
  if (!data || data.length === 0) {
    container.innerHTML = `<div class="col-12 text-center py-5 text-muted">${currentLang === 'th' ? 'ไม่พบรายชื่อในระบบ' : 'No records found'}</div>`;
    return;
  }

  container.innerHTML = data.map(item => {
    const robloxName = getVal(item, ["Name in Roblox"]);
    const agency = getVal(item, ["Agency"]);
    const rank = getVal(item, ["Rank"]);
    const affiliation = getVal(item, ["Affiliation"]);
    const score = getVal(item, ["Score"]) || "0";

    const isNavy = agency.toLowerCase().includes("navy") || agency.includes("เรือ");
    const flagSrc = isNavy ? NAVY_FLAG : POLICE_FLAG;

    return `
      <div class="col-md-4 col-lg-3">
        <div class="personnel-card text-center">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <img src="${flagSrc}" class="agency-flag-sm" alt="Flag">
            <span class="badge bg-amber text-dark fw-bold">${score} PTS</span>
          </div>
          <div class="id-avatar-frame mx-auto mb-2" style="width: 60px; height: 60px;">
            <i class="fa-solid fa-user-shield text-cyan fs-3"></i>
          </div>
          <h6 class="fw-bold text-cyan mb-1 text-truncate">${robloxName}</h6>
          <div class="badge-rank mb-2 d-inline-block text-truncate" style="max-width: 100%;">${rank}</div>
          <div class="small text-muted text-truncate mb-3">${affiliation}</div>
          <div class="d-flex justify-content-center gap-1">
            <button class="btn btn-sm btn-outline-info rounded-pill" onclick="openIdCardModal('${robloxName}')"><i class="fa-solid fa-id-card"></i> บัตร</button>
            <button class="btn btn-sm btn-outline-warning rounded-pill" onclick="openEditModal('${robloxName}')"><i class="fa-solid fa-user-pen"></i> แก้ไข</button>
            <button class="btn btn-sm btn-outline-primary rounded-pill" onclick="openHistoryModal('${robloxName}')"><i class="fa-solid fa-clock-rotate-left"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function filterAgency(agencyType, btn) {
  document.querySelectorAll('.btn-outline-cyan').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentAgencyFilter = agencyType;
  filterDatabase();
}

function openApproveModal(robloxName) {
  const user = rawInputData.find(i => getVal(i, ["Name in Roblox"]) === robloxName);
  if (!user) return;

  const agency = getVal(user, ["Apply to an organization"]);
  let defaultRank = "นักเรียนนายสิบตำรวจ";
  
  if (agency.toLowerCase().includes("navy") || agency.includes("เรือ")) {
    defaultRank = "นักเรียนจ่าทหารเรือ";
  }

  document.getElementById("approveRoblox").value = robloxName;
  document.getElementById("approveRank").value = defaultRank;
  document.getElementById("approveAffiliation").value = "ไร้สังกัด";
  document.getElementById("approveBy").value = "";

  approveModal.show();
}

async function confirmApprove() {
  const robloxName = document.getElementById("approveRoblox").value;
  const rank = document.getElementById("approveRank").value;
  const affiliation = document.getElementById("approveAffiliation").value;
  const approveBy = document.getElementById("approveBy").value.trim();

  if (!approveBy) {
    alert("กรุณาระบุชื่อผู้อนุมัติบรรจุ");
    return;
  }

  const user = rawInputData.find(i => getVal(i, ["Name in Roblox"]) === robloxName);
  if (!user) return;

  const btn = document.getElementById("btnConfirmApprove");
  btn.disabled = true;
  btn.innerText = currentLang === 'th' ? "กำลังอนุมัติ..." : "Approving...";

  try {
    const newMember = {
      "Name in Roblox": getVal(user, ["Name in Roblox"]),
      "Name in Discord": getVal(user, ["Name in Discord"]),
      "Gaming equipment ": getVal(user, ["Gaming equipment"]),
      "Agency": getVal(user, ["Apply to an organization"]),
      "Score": 0,
      "Rank": rank,
      "Affiliation": affiliation,
      "Roblox profile": getVal(user, ["Roblox profile"])
    };

    await fetch(`${API_URL}/tabs/Database`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMember)
    });

    await fetch(`${API_URL}/tabs/Input/Name in Roblox/${encodeURIComponent(robloxName)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "สถานะ": "ผ่าน" })
    });

    await logHistory(
      robloxName, 
      "บรรจุเข้าสู่ทะเบียนราษฎร์", 
      `อนุมัติเข้ารับราชการในสังกัด ${getVal(user, ["Apply to an organization"])} ยศแรกรับ: ${rank}`,
      approveBy
    );

    approveModal.hide();
    triggerConfetti();
    alert(`อนุมัติและบรรจุ "${robloxName}" เข้าสู่ทะเบียนราษฎร์เรียบร้อยแล้ว!`);
    loadAllData();
  } catch (err) {
    alert("Error processing approval");
    console.error(err);
  } finally {
    btn.disabled = false;
    btn.innerText = I18N[currentLang].btn_confirm_approve;
  }
}

function openRejectModal(robloxName) {
  document.getElementById("rejectRoblox").value = robloxName;
  document.getElementById("rejectBy").value = "";
  document.getElementById("rejectReason").value = "";

  rejectModal.show();
}

async function confirmReject() {
  const robloxName = document.getElementById("rejectRoblox").value;
  const rejectBy = document.getElementById("rejectBy").value.trim();
  const rejectReason = document.getElementById("rejectReason").value.trim();

  if (!rejectBy) {
    alert("กรุณาระบุชื่อผู้สั่งการไม่อนุมัติ");
    return;
  }

  if (!rejectReason) {
    alert("กรุณาระบุเหตุผลที่ไม่อนุมัติ");
    return;
  }

  const btn = document.getElementById("btnConfirmReject");
  btn.disabled = true;
  btn.innerText = currentLang === 'th' ? "กำลังดำเนินการ..." : "Rejecting...";

  try {
    await fetch(`${API_URL}/tabs/Input/Name in Roblox/${encodeURIComponent(robloxName)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "สถานะ": "ไม่ผ่าน" })
    });

    await logHistory(
      robloxName, 
      "ปฏิเสธคำขอสมัคร", 
      `คำขอสมัครถูกปฏิเสธ | เหตุผล: ${rejectReason}`,
      rejectBy
    );

    rejectModal.hide();
    triggerRejectFlash();
    alert(`ปฏิเสธคำขอสมัครของ "${robloxName}" เรียบร้อยแล้ว`);
    loadAllData();
  } catch (err) {
    alert("Error processing rejection");
    console.error(err);
  } finally {
    btn.disabled = false;
    btn.innerText = I18N[currentLang].btn_confirm_reject;
  }
}

function openAddModal() {
  document.getElementById("addRoblox").value = "";
  document.getElementById("addDiscord").value = "";
  document.getElementById("addScore").value = "0";
  document.getElementById("addProfile").value = "";
  document.getElementById("addBy").value = "";
  
  const defaultAgency = "Royal Thai Police";
  document.getElementById("addAgency").value = defaultAgency;
  updateDropdownsByAgency("addRank", "addAffiliation", defaultAgency);

  addModal.show();
}

async function saveNewMember() {
  const robloxName = document.getElementById("addRoblox").value.trim();
  const addBy = document.getElementById("addBy").value.trim();

  if (!robloxName) {
    alert("Please enter Roblox Name");
    return;
  }

  if (!addBy) {
    alert("กรุณาระบุชื่อผู้ทำรายการ");
    return;
  }

  const discord = document.getElementById("addDiscord").value.trim();
  const equip = document.getElementById("addEquip").value;
  const agency = document.getElementById("addAgency").value;
  const rank = document.getElementById("addRank").value;
  const affiliation = document.getElementById("addAffiliation").value;
  const score = document.getElementById("addScore").value;
  const profile = document.getElementById("addProfile").value.trim();

  const btn = document.getElementById("btnAddSave");
  btn.disabled = true;
  btn.innerText = "Saving...";

  try {
    const newMember = {
      "Name in Roblox": robloxName,
      "Name in Discord": discord,
      "Gaming equipment ": equip,
      "Agency": agency,
      "Score": score,
      "Rank": rank,
      "Affiliation": affiliation,
      "Roblox profile": profile
    };

    await fetch(`${API_URL}/tabs/Database`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMember)
    });

    await logHistory(
      robloxName, 
      "เพิ่มรายชื่อใหม่ (Manual)", 
      `เพิ่มเข้าสังกัด ${agency} ยศ: ${rank} เหล่า: ${affiliation} คะแนนเริ่มต้น: ${score}`,
      addBy
    );

    addModal.hide();
    triggerConfetti();
    alert("Member Added Successfully!");
    loadAllData();
  } catch (err) {
    alert("Error adding member");
    console.error(err);
  } finally {
    btn.disabled = false;
    btn.innerText = I18N[currentLang].btn_save_new;
  }
}

function openEditModal(robloxName) {
  const user = rawDbData.find(d => getVal(d, ["Name in Roblox"]) === robloxName);
  if (!user) return;

  const currentAgency = getVal(user, ["Agency"]) || "Royal Thai Police";
  const currentRank = getVal(user, ["Rank"]);
  const currentAffiliation = getVal(user, ["Affiliation"]);
  const currentScore = parseInt(getVal(user, ["Score"])) || 0;
  const currentProfile = getVal(user, ["Roblox profile"]);

  document.getElementById("editRoblox").value = robloxName;
  document.getElementById("editAgency").value = currentAgency;
  document.getElementById("editScore").value = currentScore;
  document.getElementById("editProfile").value = currentProfile;
  document.getElementById("scoreDelta").value = 1;
  document.getElementById("scoreReason").value = "";
  document.getElementById("editBy").value = "";

  // ใส่ค่าตำแหน่งที่ 1 - 7 เดิม
  for (let i = 1; i <= 7; i++) {
    document.getElementById(`editPos${i}`).value = getVal(user, [`Position${i}`]);
  }

  updateDropdownsByAgency("editRank", "editAffiliation", currentAgency, currentRank, currentAffiliation);
  editModal.show();
}

function adjustScore(direction) {
  const scoreInput = document.getElementById("editScore");
  const deltaInput = document.getElementById("scoreDelta");
  const delta = parseInt(deltaInput.value) || 0;
  
  if (delta <= 0) {
    alert("กรุณากรอกจำนวนคะแนนที่มากกว่า 0");
    return;
  }

  let currentScore = parseInt(scoreInput.value) || 0;
  currentScore += (delta * direction);
  scoreInput.value = currentScore;
}

async function saveEdit() {
  const robloxName = document.getElementById("editRoblox").value;
  const agency = document.getElementById("editAgency").value;
  const rank = document.getElementById("editRank").value;
  const affiliation = document.getElementById("editAffiliation").value;
  const score = document.getElementById("editScore").value;
  const profile = document.getElementById("editProfile").value.trim();
  const scoreReason = document.getElementById("scoreReason").value.trim();
  const editBy = document.getElementById("editBy").value.trim();

  if (!editBy) {
    alert("กรุณาระบุชื่อผู้ดำเนินการ / ผู้ลงนาม");
    return;
  }

  const user = rawDbData.find(d => getVal(d, ["Name in Roblox"]) === robloxName);
  const oldRank = getVal(user, ["Rank"]);
  const oldAffiliation = getVal(user, ["Affiliation"]);
  const oldAgency = getVal(user, ["Agency"]);
  const oldScore = getVal(user, ["Score"]) || "0";
  const oldProfile = getVal(user, ["Roblox profile"]);

  const payload = {
    "Agency": agency,
    "Rank": rank,
    "Affiliation": affiliation,
    "Score": score,
    "Roblox profile": profile
  };

  // ดึงตำแหน่งที่ 1 - 7 ใหม่
  for (let i = 1; i <= 7; i++) {
    payload[`Position${i}`] = document.getElementById(`editPos${i}`).value.trim();
  }

  const btn = document.getElementById("btnSaveEdit");
  btn.disabled = true;
  btn.innerText = "Saving...";

  try {
    await fetch(`${API_URL}/tabs/Database/Name in Roblox/${encodeURIComponent(robloxName)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    let changes = [];
    if (oldRank !== rank) changes.push(`ปรับยศจาก "${oldRank}" เป็น "${rank}"`);
    if (oldAffiliation !== affiliation) changes.push(`ย้ายเหล่าจาก "${oldAffiliation}" เป็น "${affiliation}"`);
    if (oldAgency !== agency) changes.push(`ย้ายสังกัดเป็น "${agency}"`);
    if (oldScore !== score) {
      const diff = parseInt(score) - parseInt(oldScore);
      const sign = diff > 0 ? `+${diff}` : `${diff}`;
      const reasonText = scoreReason ? ` [เหตุผล/กิจกรรม: ${scoreReason}]` : '';
      changes.push(`ปรับคะแนน (${sign} คะแนน) จาก ${oldScore} เป็น ${score}${reasonText}`);
    }
    if (oldProfile !== profile) changes.push(`อัปเดตลิงก์โปรไฟล์ Roblox ใหม่`);

    if (changes.length > 0) {
      await logHistory(robloxName, "ปรับปรุงประวัติกำลังพล", changes.join(" | "), editBy);
    }

    editModal.hide();
    alert("Updated Successfully!");
    loadAllData();
  } catch (err) {
    alert("Error updating record");
    console.error(err);
  } finally {
    btn.disabled = false;
    btn.innerText = I18N[currentLang].btn_save_changes;
  }
}

async function deleteMember(robloxName) {
  const deleteBy = prompt(`กรุณาระบุชื่อผู้ดำเนินการลบรายชื่อ "${robloxName}":`);
  if (!deleteBy || !deleteBy.trim()) {
    alert("การลบถูกยกเลิก เนื่องจากไม่ได้ระบุชื่อผู้ดำเนินการ");
    return;
  }

  if (!confirm(`ยืนยันการลบรายชื่อ "${robloxName}" ออกจากระบบทะเบียนราษฎร์หลัก?`)) return;

  try {
    await fetch(`${API_URL}/tabs/Database/Name in Roblox/${encodeURIComponent(robloxName)}`, {
      method: 'DELETE'
    });

    await logHistory(robloxName, "จำหน่ายออกจากระบบ", "ลบรายชื่อออกจากทะเบียนราษฎร์หลัก", deleteBy.trim());

    alert("Deleted successfully!");
    loadAllData();
  } catch (err) {
    alert("Error deleting record");
    console.error(err);
  }
}

function updateDropdownsByAgency(rankElemId, affElemId, agency, selectedRank = "", selectedAffiliation = "") {
  const rankSelect = document.getElementById(rankElemId);
  const affSelect = document.getElementById(affElemId);

  const agencyKey = (agency.toLowerCase().includes("navy") || agency.includes("เรือ")) 
    ? "Royal Thai Navy" 
    : "Royal Thai Police";

  const data = AGENCY_DATA[agencyKey];

  rankSelect.innerHTML = data.ranks.map(r => 
    `<option value="${r}" class="bg-dark text-white" ${r === selectedRank ? 'selected' : ''}>${r}</option>`
  ).join("");

  affSelect.innerHTML = data.affiliations.map(a => 
    `<option value="${a}" class="bg-dark text-white" ${a === selectedAffiliation ? 'selected' : ''}>${a}</option>`
  ).join("");
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.exec-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.add('d-none'));
  document.getElementById(tabId).classList.remove('d-none');

  const viewGroup = document.getElementById("viewToggleGroup");
  if (tabId === 'dbTab') {
    viewGroup.classList.remove('d-none');
  } else {
    viewGroup.classList.add('d-none');
  }
}
