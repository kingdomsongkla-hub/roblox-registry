const API_URL = "https://api.sheetbest.com/sheets/b16dcf56-378f-4d0e-bc3b-c5b92b850cc9";

const POLICE_FLAG = "Thai_National_Police_Flag.svg.webp";
const NAVY_FLAG = "Naval_Ensign_of_Thailand-2.svg";

// พจนานุกรมแปลภาษา (ค่าเริ่มต้น: ภาษาไทย)
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
    th_action: "การจัดการ",
    btn_all: "ทั้งหมด",
    btn_add_member: "บวกรายชื่อ",
    agency_police: "สำนักงานตำรวจแห่งชาติ",
    agency_navy: "กองทัพเรือ",
    msg_loading: "กำลังดึงข้อมูล...",
    modal_approve_title: "อนุมัติและบรรจุลงทะเบียนราษฎร์",
    modal_add_title: "เพิ่มรายชื่อลงทะเบียนราษฎร์หลัก",
    modal_edit_title: "ปรับแต่งยศ / เปลี่ยนเหล่าสังกัด",
    btn_cancel: "ยกเลิก",
    btn_confirm_approve: "ยืนยันบรรจุ",
    btn_save_new: "บันทึกรายชื่อใหม่",
    btn_save_changes: "บันทึกการเปลี่ยนแปลง",
    lbl_initial_rank: "แต่งตั้งยศแรกรับ (กำหนดอัตโนมัติ)",
    lbl_initial_aff: "สังกัด / เหล่า"
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
    modal_add_title: "Add New Main Member",
    modal_edit_title: "Modify Rank & Unit",
    btn_cancel: "Cancel",
    btn_confirm_approve: "Confirm Enlistment",
    btn_save_new: "Save Member",
    btn_save_changes: "Save Changes",
    lbl_initial_rank: "Initial Assigned Rank (Auto)",
    lbl_initial_aff: "Affiliation / Unit"
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
      "เรือโท (ร.ท.)", "เรือตรี (ร.ต.)", "พันจ่าเอก (พ.จ.อ.)", "พันจ่าโท (พ.จ.ท.)",
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

const approveModal = new bootstrap.Modal(document.getElementById('approveModal'));
const addModal = new bootstrap.Modal(document.getElementById('addModal'));
const editModal = new bootstrap.Modal(document.getElementById('editModal'));

document.addEventListener("DOMContentLoaded", () => {
  loadAllData();

  document.getElementById("editAgency").addEventListener("change", (e) => {
    updateDropdownsByAgency("editRank", "editAffiliation", e.target.value);
  });

  document.getElementById("addAgency").addEventListener("change", (e) => {
    updateDropdownsByAgency("addRank", "addAffiliation", e.target.value);
  });
});

// --- สลับโหมดกลางวัน / กลางคืน ---
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
}

// --- สลับภาษา ---
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

// คำนวณยอดกำลังพลแต่ละสังกัด
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
          <button class="btn btn-sm btn-success px-3 rounded-pill fw-bold" onclick="openApproveModal('${robloxName}')">
            <i class="fa-solid fa-check me-1"></i>${currentLang === 'th' ? 'อนุมัติบรรจุ' : 'Approve'}
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

  renderDatabaseTable(filtered);
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
        <td class="fw-bold">${robloxName}</td>
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

  approveModal.show();
}

async function confirmApprove() {
  const robloxName = document.getElementById("approveRoblox").value;
  const rank = document.getElementById("approveRank").value;
  const affiliation = document.getElementById("approveAffiliation").value;

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

    approveModal.hide();
    alert(`Success: ${robloxName}`);
    loadAllData();
  } catch (err) {
    alert("Error processing approval");
    console.error(err);
  } finally {
    btn.disabled = false;
    btn.innerText = I18N[currentLang].btn_confirm_approve;
  }
}

function openAddModal() {
  document.getElementById("addRoblox").value = "";
  document.getElementById("addDiscord").value = "";
  document.getElementById("addScore").value = "0";
  document.getElementById("addProfile").value = "";
  
  const defaultAgency = "Royal Thai Police";
  document.getElementById("addAgency").value = defaultAgency;
  updateDropdownsByAgency("addRank", "addAffiliation", defaultAgency);

  addModal.show();
}

async function saveNewMember() {
  const robloxName = document.getElementById("addRoblox").value.trim();
  if (!robloxName) {
    alert("Please enter Roblox Name");
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

    addModal.hide();
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
  const currentScore = getVal(user, ["Score"]) || 0;
  const currentProfile = getVal(user, ["Roblox profile"]);

  document.getElementById("editRoblox").value = robloxName;
  document.getElementById("editAgency").value = currentAgency;
  document.getElementById("editScore").value = currentScore;
  document.getElementById("editProfile").value = currentProfile;

  updateDropdownsByAgency("editRank", "editAffiliation", currentAgency, currentRank, currentAffiliation);
  editModal.show();
}

async function saveEdit() {
  const robloxName = document.getElementById("editRoblox").value;
  const agency = document.getElementById("editAgency").value;
  const rank = document.getElementById("editRank").value;
  const affiliation = document.getElementById("editAffiliation").value;
  const score = document.getElementById("editScore").value;
  const profile = document.getElementById("editProfile").value.trim();

  const btn = document.getElementById("btnSaveEdit");
  btn.disabled = true;
  btn.innerText = "Saving...";

  try {
    await fetch(`${API_URL}/tabs/Database/Name in Roblox/${encodeURIComponent(robloxName)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "Agency": agency,
        "Rank": rank,
        "Affiliation": affiliation,
        "Score": score,
        "Roblox profile": profile
      })
    });

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
  if (!confirm(`Are you sure you want to delete "${robloxName}"?`)) return;

  try {
    await fetch(`${API_URL}/tabs/Database/Name in Roblox/${encodeURIComponent(robloxName)}`, {
      method: 'DELETE'
    });

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
}