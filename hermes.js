// =========================
// HERMES - MAIN JAVASCRIPT
// =========================
// Function to update links
function updateLink(newUrl) {
const omsLink = document.getElementById('omsLink');
const calendarLink = document.getElementById('calendarlink');
if (omsLink) omsLink.href = newUrl;
if (calendarLink) calendarLink.href = newUrl;
}
// -------------------------------------------------
// MODAL MANAGEMENT
// -------------------------------------------------
const mainModalId = 'myModal';
const modalIds = [
'modalHYDRUS','modalPHOENIX','modalAQUILA','modalLYNX',
'modalAMETHYST','modalSAPPHIRE','modalGARNET','modalEMERALD',
'modalCALLISTO','modalGANYMEDE','modalEUROPA','modalACHELOUS',
'modalARTEMIS','modalARES','modalJOBS','modalFRANKLIN',
'modalRIZAL','modalEINSTEIN','modalEQUINOX','modalMERAKI',
'modalVERITAS','modalSTELLARIS','modalNEXA','modalSOLANA',
'modalTECSON','modalJOBS2','modalFRANKLIN2','modalRIZAL2',
'modalEINSTEIN2','modalEQUINOX2','modalMERAKI2','modalVERITAS2',
'modalSTELLARIS2','modalNEXA2','modalSOLANA2'
];
const mainModalPanels = [
'modalGrades',
'modalOmsLink',
'modalRVF',
'modalRawScore',
'modalDocuments',
'modalLIS',
'modalECR',
'modalECR2'
];
// Parent relationships for the E-Class Record sub-modals.
const parentModal = {
HYDRUS:'ECR', PHOENIX:'ECR', AQUILA:'ECR', LYNX:'ECR',
AMETHYST:'ECR', SAPPHIRE:'ECR', GARNET:'ECR', EMERALD:'ECR',
CALLISTO:'ECR', GANYMEDE:'ECR', EUROPA:'ECR', ACHELOUS:'ECR',
ARTEMIS:'ECR', ARES:'ECR', JOBS:'ECR', FRANKLIN:'ECR',
RIZAL:'ECR', EINSTEIN:'ECR', EQUINOX:'ECR', MERAKI:'ECR',
VERITAS:'ECR', STELLARIS:'ECR', NEXA:'ECR', SOLANA:'ECR',
TECSON:'ECR2', JOBS2:'ECR2', FRANKLIN2:'ECR2', RIZAL2:'ECR2',
EINSTEIN2:'ECR2', EQUINOX2:'ECR2', MERAKI2:'ECR2',
VERITAS2:'ECR2', STELLARIS2:'ECR2', NEXA2:'ECR2', SOLANA2:'ECR2'
};
const modalPanelMap = {
'CONSOLIDATED GRADES':'modalGrades',
'ONLINE MONITORING SYSTEM (OMS)':'modalOmsLink',
'Record Video Folder':'modalRVF',
'Raw Scores':'modalRawScore',
'DOCUMENTS':'modalDocuments',
'LIS COORDINATOR':'modalLIS',
'ECR':'modalECR',
'ECR2':'modalECR2',
HYDRUS:'modalHYDRUS', PHOENIX:'modalPHOENIX', AQUILA:'modalAQUILA',
LYNX:'modalLYNX', AMETHYST:'modalAMETHYST', SAPPHIRE:'modalSAPPHIRE',
GARNET:'modalGARNET', EMERALD:'modalEMERALD', CALLISTO:'modalCALLISTO',
GANYMEDE:'modalGANYMEDE', EUROPA:'modalEUROPA', ACHELOUS:'modalACHELOUS',
ARTEMIS:'modalARTEMIS', ARES:'modalARES', JOBS:'modalJOBS',
FRANKLIN:'modalFRANKLIN', RIZAL:'modalRIZAL', EINSTEIN:'modalEINSTEIN',
EQUINOX:'modalEQUINOX', MERAKI:'modalMERAKI', VERITAS:'modalVERITAS',
STELLARIS:'modalSTELLARIS', NEXA:'modalNEXA', SOLANA:'modalSOLANA',
TECSON:'modalTECSON', JOBS2:'modalJOBS2', FRANKLIN2:'modalFRANKLIN2',
RIZAL2:'modalRIZAL2', EINSTEIN2:'modalEINSTEIN2',
EQUINOX2:'modalEQUINOX2', MERAKI2:'modalMERAKI2',
VERITAS2:'modalVERITAS2', STELLARIS2:'modalSTELLARIS2',
NEXA2:'modalNEXA2', SOLANA2:'modalSOLANA2'
};
let currentModal = null;
let modalHistory = [];
function hideElement(id) {
const el = document.getElementById(id);
if (el) el.style.display = 'none';
}
function showElement(id, display = 'block') {
const el = document.getElementById(id);
if (el) el.style.display = display;
}
function hideAllModalPanels() {
mainModalPanels.forEach(hideElement);
modalIds.forEach(hideElement);
}
function openModal(content) {
// Save the currently displayed modal so the Back button can return to it.
if (currentModal && currentModal !== content) {
modalHistory.push(currentModal);
}
currentModal = content;
hideAllModalPanels();
showElement(mainModalId);
const panelId = modalPanelMap[content];
if (panelId) {
showElement(panelId);
} else {
const modalText = document.getElementById('modalText');
if (modalText) modalText.innerText = content;
}
}
function goBack() {
if (modalHistory.length > 0) {
const previousModal = modalHistory.pop();
// Prevent openModal() from adding the current modal again.
const oldCurrent = currentModal;
currentModal = null;
openModal(previousModal);
// Remove the duplicate history entry created by openModal().
if (modalHistory.length > 0 &&
modalHistory[modalHistory.length - 1] === oldCurrent) {
modalHistory.pop();
}
return;
}
closeModal();
}
function closeModal() {
hideAllModalPanels();
hideElement(mainModalId);
modalHistory = [];
currentModal = null;
}
// Close the main modal when clicking outside its content.
window.addEventListener('click', function (event) {
const mainModal = document.getElementById(mainModalId);
if (mainModal && event.target === mainModal) {
closeModal();
}
});
// Escape closes the complete modal.
window.addEventListener('keydown', function (event) {
if (event.key === 'Escape') {
closeModal();
}
});
// -------------------------------------------------
// TAB MANAGEMENT
// -------------------------------------------------
function openTab(tabId, buttonElement) {
document.querySelectorAll('.tab-content').forEach(tab => {
tab.classList.remove('active');
});
document.querySelectorAll('.tab-button').forEach(button => {
button.classList.remove('active');
});
const selectedTab = document.getElementById(tabId);
if (selectedTab) {
selectedTab.classList.add('active');
}
if (buttonElement) {
buttonElement.classList.add('active');
}
}
// Keep the existing HTML onclick="openTab('...')" working,
// without relying on the browser's global `event` variable.
document.addEventListener('DOMContentLoaded', function () {
document.querySelectorAll('.tab-button').forEach(button => {
button.addEventListener('click', function () {
const onclickText = this.getAttribute('onclick') || '';
const match = onclickText.match(/openTab\(['"]([^'"]+)['"]\)/);
if (match) {
openTab(match[1], this);
}
});
});
});
