# StandardsHub - AI Context Handoff Document

> **Purpose:** This document is designed for AI assistants (Claude, GPT, etc.) or developers to quickly understand the project state and continue development. It captures critical context, decisions, patterns, and lessons learned.

---

## Quick Start Summary

**Application:** StandardsHub (Healthcare Accreditation Scoring Tool)
**Live URL:** https://standards-hub.web.app
**Tech Stack:** React 18 (CDN), Firebase Hosting, Single HTML File (~7,800 lines)
**Current Version:** 1.5.1
**Last Updated:** February 3, 2026

### One-Line Description
A professional healthcare facility scoring application for CBAHI dental center accreditation surveys, featuring multi-configuration support, real-time scoring, and professional PDF/Excel export.

### Current Status
- ✅ PDF Export: Production Ready
- ✅ Excel Export: Production Ready (with ExcelJS styling)
- 🔜 Next Phase: Landing Page, Home Page, Mobile Interface

---

## Repository & File Structure

```
CBAHI Scoring Application/
├── index.html           # MAIN APPLICATION FILE (~7,800 lines)
│                        # Contains ALL React components, CSS, and logic
├── PROJECT_LOG.md       # Comprehensive development history (1,700+ lines)
├── AI_CONTEXT_HANDOFF.md # This file - AI developer context
├── .firebaserc          # Firebase project: standards-hub
├── firebase.json        # Hosting configuration
└── package.json         # NPM config (minimal - app is CDN-based)
```

**Critical Note:** This is a SINGLE-FILE React application. All components, styles, and logic are in `index.html`. No build step required - served directly via Firebase Hosting.

---

## Running the Application

### Local Development
```bash
cd "/Users/jo/Projects/CBAHI Scoring Application"

# Option 1: Python HTTP server
python3 -m http.server 8080
# Access: http://localhost:8080

# Option 2: Any static file server
npx serve .
```

### Firebase Deployment
```bash
firebase use                    # Verify: should show standards-hub
firebase deploy --only hosting  # Deploy to https://standards-hub.web.app
```

---

## Architecture Overview

### Component Hierarchy
```
App (Root)
├── Header
│   ├── Logo ("StandardsHub")
│   ├── Navigation Tabs (Scoring | Dashboard | History)
│   ├── Configuration Dropdown (A1 | A2 | B)
│   └── AutosaveIndicator
│
├── ScoringPage (Primary View)
│   ├── AssessmentInfoBar (center name, coordinator, contacts)
│   ├── ControlsBar (filters, view toggles)
│   ├── Sidebar (collapsible domain navigation)
│   │   └── Domain Groups (LD, PC, DL, IPC, MOI, FMS)
│   ├── ContentArea
│   │   ├── DomainSeparator (Config B only)
│   │   └── SubstandardCards (scoring interface)
│   ├── BottomScorePanel (overall stats)
│   └── FinalizedSuccessScreen (post-completion)
│
├── DashboardPage
├── CentersPage (History/Archive)
│
└── Modals
    ├── AssessmentSetupModal
    ├── ChaptersSummaryModal
    ├── CompletionModal
    ├── FinalizeConfirmDialog
    ├── ExecutiveSummaryModal (with PDF/Excel export)
    ├── ModernConfirmDialog
    └── ToastNotification
```

### State Management (useState Hooks)
```javascript
// Core Scoring State
const [scores, setScores] = useState({});           // All substandard scores
const [isFinalized, setIsFinalized] = useState(false);
const [finalizedData, setFinalizedData] = useState(null);
const [surveys, setSurveys] = useState([]);         // All assessments (history)

// Configuration State
const [selectedConfiguration, setSelectedConfiguration] = useState('A1');
const [chapters, setChapters] = useState(chapters_A1);

// Assessment Tracking
const [assessmentDetails, setAssessmentDetails] = useState(null);
const [currentAssessmentId, setCurrentAssessmentId] = useState(null);

// UI State
const [toasts, setToasts] = useState([]);
const [confirmDialog, setConfirmDialog] = useState({...});
const [viewingMode, setViewingMode] = useState(false);
const [expandedDomains, setExpandedDomains] = useState({...});
```

---

## Survey Configurations

### Configuration A1: Surveyor 1 (180 sub-standards)
| Domain | Code | Sub-standards |
|--------|------|---------------|
| Leadership | LD | 58 |
| Provision of Care | PC | 34 |
| Dental Laboratory | DL | 25 |
| Infection Prevention | IPC | 63 |

### Configuration A2: Surveyor 2 (169 sub-standards)
| Domain | Code | Sub-standards |
|--------|------|---------------|
| Leadership | LD | 61 |
| Provision of Care | PC | 31 |
| Management of Information | MOI | 24 |
| Facility Management | FMS | 53 |

### Configuration B: Full Survey (349 sub-standards)
All 6 domains combined (LD, PC, DL, IPC, MOI, FMS)

---

## Scoring System

### Score Values (CRITICAL - Numbers not Strings!)
```javascript
// CORRECT - App expects these exact values:
{ value: 2 }      // Fully Met
{ value: 1 }      // Partially Met
{ value: 0 }      // Not Met
{ value: 'NA' }   // Not Applicable

// WRONG - Will break calculations:
{ value: 'FM' }   // String - WILL NOT WORK
{ value: 'PM' }   // String - WILL NOT WORK
```

### Score Object Structure
```javascript
{
  value: 2 | 1 | 0 | 'NA',      // Required - score value
  comment: string,              // User-entered finding (live scoring)
  findings: string,             // Alternative field (mock/imported data)
  recommendations: string,      // Action recommendation
  location: string,             // For OBS (Observation) activities
  scoredAt: ISO_timestamp       // When scored
}
```

### Score Calculation
- NA items excluded from percentage calculation
- Equal weight for all sub-standards
- Real-time calculation using useMemo

---

## Domain Color System

```javascript
const domainColors = {
  LD:  { primary: [30, 58, 95],   // Deep navy
        light: '#e8f4fc', accent: '#3498db' },
  PC:  { primary: [13, 107, 78],  // Deep green
        light: '#e6f5f0', accent: '#27ae60' },
  DL:  { primary: [107, 78, 13],  // Bronze/gold
        light: '#fdf6e6', accent: '#f39c12' },
  IPC: { primary: [94, 30, 94],   // Purple
        light: '#f5e8f5', accent: '#9b59b6' },
  MOI: { primary: [30, 94, 94],   // Teal
        light: '#e8f5f5', accent: '#16a085' },
  FMS: { primary: [94, 30, 45],   // Deep red
        light: '#f5e8ec', accent: '#e74c3c' }
};
```

---

## localStorage Keys

```javascript
'cbahi_centers'                    // Saved centers list
'cbahi_surveys'                    // All assessments (history)
'cbahi_scores'                     // Current assessment scores
'cbahi_assessment_details'         // Current center info
'cbahi_current_assessment_id'      // Active assessment ID
'cbahi_finalized'                  // Boolean - is finalized
'cbahi_finalized_data'             // Completed assessment data
'cbahi_submissions'                // Firebase fallback
'cbahi_selected_configuration'     // A1, A2, or B
```

---

## Export Features (Phase 15 & 15.1)

### PDF Export (PRODUCTION READY ✅)
**Library:** jsPDF + jsPDF-AutoTable
**Function:** `exportToPDF()` (lines ~6340-7000)

**Key Features:**
- Cover page with minimalist navy gradient header
- Domain performance analysis (colored text headers - NO shapes)
- Corrective action plan with smart auto-generation
- Compliance summary page with donut pie chart
- Orphan word prevention
- Weeks-based timeframes

### Excel Export (PRODUCTION READY ✅)
**Library:** ExcelJS (NOT SheetJS - switched for styling support)
**CDN:** `https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js` (Line 12)
**Function:** `exportToExcel()` (lines ~5725-6090)

**Sheets Created:**
1. **Executive Summary** - Assessment info, compliance score, domain performance, quick statistics
2. **All Scored Items** - Complete list of all sub-standards with scores
3. **Action Plan** - Prioritized corrective action items

**Key Styling Features Implemented:**
- Lora font throughout (professional serif)
- Navy blue section headers (white text)
- Grid-style bar charts with white borders between cells
- Wide Quick Statistics cards with colored borders
- Centered title spanning full width
- Increased number font sizes for readability (13-36pt)

**Critical Code Patterns:**
```javascript
// Bar chart with grid appearance (white borders)
cell.border = {
  top: { style: 'thin', color: { argb: 'FFFFFFFF' } },
  bottom: { style: 'thin', color: { argb: 'FFFFFFFF' } },
  left: { style: 'thin', color: { argb: 'FFFFFFFF' } },
  right: { style: 'thin', color: { argb: 'FFFFFFFF' } }
};

// Lora font with proper sizing
cell.font = { name: 'Lora', size: 14, bold: true, color: { argb: 'FF1E3A5F' } };

// Merged cells for wide cards
ws1.mergeCells(statsHeaderRow, 14, statsHeaderRow, 24);  // 11 columns wide
```

---

## User Design Preferences (CRITICAL!)

### What User LIKES:
- Clean typography with proper hierarchy
- Colored text for domain headers (NO shapes/backgrounds)
- Subtle gray backgrounds `[245, 247, 250]` for table-like separation
- Minimalist branding (gradient only on cover page)
- Weeks-based timeframes ("2 weeks" not "14 days")
- Donut pie chart with center score display
- Full text display (no truncation)
- Smart auto-generated corrective actions

### What User DISLIKES (AVOID!):
- ANY geometric shapes (rectangles, ovals, ellipses)
- Gradient backgrounds on domain headers ("looks like printer out of ink")
- Underlines on section titles (too many lines)
- Days-only timeframes (confusing)
- Unicode special characters (rendering issues)
- Truncated text in tables

---

## Mock Assessment System

**5 Mock Assessments Created** for testing:
- IDs: `MOCK_v3_001` through `MOCK_v3_005`
- Configuration: B (349 sub-standards)
- Compliance: 94-97%
- Include partial and not-met findings

**Mock Data Injection Logic:**
```javascript
// CORRECT - Replace existing to update data
const existingIndex = savedSurveys.findIndex(s => s.id === mock.id);
if (existingIndex >= 0) {
  savedSurveys[existingIndex] = mock;  // Replace
} else {
  savedSurveys = [...savedSurveys, mock];
}
```

---

## Critical Lessons Learned

### 1. Score Values Must Be Numbers
```javascript
// ✅ CORRECT
{ value: 2, findings: '...' }

// ❌ WRONG - Breaks all calculations
{ value: 'FM', findings: '...' }
```

### 2. LocalStorage Cache Issues
When updating mock data, old cached versions persist. Solution: Use replace logic, not skip-if-exists.

### 3. Field Name Consistency
The app uses both `comment` (live scoring) and `findings` (mock data). SubstandardCard has fallback:
```javascript
const comment = score?.comment || score?.findings || '';
```

### 4. Global vs Local Stats
- Bottom panel = `overallStats` (entire assessment)
- Domain headers = chapter-specific stats
- Never mix these!

### 5. No Geometric Shapes in PDFs
User explicitly rejected: rectangles, ovals, ellipses, gradient backgrounds. Use colored text only.

### 6. Excel Styling Requires ExcelJS (Not SheetJS)
SheetJS cannot style cells without paid plugins. ExcelJS provides full formatting:
```javascript
cell.font = { name: 'Lora', size: 14, bold: true };
cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A5F' } };
cell.border = { top: { style: 'thin' }, ... };
cell.alignment = { horizontal: 'center', vertical: 'middle' };
```

### 7. Excel Bar Charts Need Grid Borders
Without borders, colored cells look like one solid block. Add white borders:
```javascript
cell.border = {
  top: { style: 'thin', color: { argb: 'FFFFFFFF' } },
  bottom: { style: 'thin', color: { argb: 'FFFFFFFF' } },
  left: { style: 'thin', color: { argb: 'FFFFFFFF' } },
  right: { style: 'thin', color: { argb: 'FFFFFFFF' } }
};
```

### 8. Merge Cells for Wide Text
For text like "✓ LIKELY TO PASS", merge multiple columns:
```javascript
ws1.mergeCells(row, 14, row, 24);  // 11 columns wide
```

---

## Known Working Patterns

### Toast Notification
```javascript
const showToast = (type, title, message) => {
  const id = Date.now();
  setToasts(prev => [...prev, { id, type, title, message }]);
  setTimeout(() => { /* dismiss logic */ }, 5000);
};
```

### Modern Confirm Dialog
```javascript
setConfirmDialog({
  show: true,
  title: 'Confirm Action',
  message: 'Are you sure?',
  confirmText: 'Proceed',
  cancelText: 'Cancel',
  variant: 'warning', // or 'danger', 'info'
  onConfirm: () => { /* action */ },
  onCancel: () => setConfirmDialog({ show: false })
});
```

### PDF Domain Header (Clean Text)
```javascript
const drawDomainHeader = (x, y, domainColor, text, percentage) => {
  doc.setTextColor(...domainColor.primary);
  doc.setFontSize(11);
  doc.setFont('times', 'bold');
  doc.text(text, x, y + 5);
  doc.text(`${percentage}%`, pageWidth - 25, y + 5, { align: 'right' });
};
```

---

## Pending Development Tasks

### High Priority (Phase 16 - Next Steps)
1. **Landing Page** - Marketing-focused page with feature highlights and CTA
2. **Home Page Redesign** - Dashboard improvements, quick access, statistics overview
3. **Mobile Interface Enhancement** - Visual-first approach, minimal text, touch-friendly

### Mobile Design Philosophy (User Specified)
> "سنتحدث دايما عن التقنية" (We will always talk about technology)

The mobile interface should prioritize:
- **Visual information over text** - Icons, charts, progress indicators
- **Color-coded status** - No need for text labels when colors convey meaning
- **Large touch targets** - Easy tapping on mobile devices
- **Swipe gestures** - Navigate between sub-standards

### Medium Priority
4. **More Mock Assessments** - Create #6-10 with various compliance levels
5. **Action Plan Report** - Standalone printable action plan document

### Future Features (Planned)
- User authentication
- Multi-center dashboard for consultants
- Offline support (PWA)
- Auto-generated infographic reports
- CBAHI Ambulatory Care Services version
- Arabic language support

---

## Context for Continuing Development

### If asked to modify PDF export:
- Read Phase 15 in PROJECT_LOG.md
- Remember: NO geometric shapes, colored text only
- Test with mock assessments
- Check orphan prevention logic

### If asked to modify Excel export:
- **Library:** ExcelJS (NOT SheetJS) - CDN at Line 12
- **Function:** `exportToExcel()` at lines ~5725-6090
- **Key patterns established:**
  - Lora font for all text: `{ name: 'Lora', size: X, bold: true }`
  - Grid bar charts with white borders between cells
  - Navy section headers: `{ argb: 'FF1E3A5F' }` with white text
  - Wide merged cells for Quick Statistics cards
- **DON'T touch Sheets 2 & 3** - User confirmed they are perfect
- Read Phase 15.1 in PROJECT_LOG.md for full challenge/solution documentation

### If asked about landing page / home page / mobile:
- This is Phase 16 (next development phase)
- Mobile design should be **visual-first, minimal text**
- Use icons and colors to convey information
- Consider Arabic language support

### If asked to add new domain/configuration:
- Follow existing patterns in chapters arrays
- Add domain color to domainColors object
- Update chapter totals in configuration selection
- Test with Executive Summary modal

### If asked about Firebase:
- Project ID: `standards-hub`
- Verify with `firebase use` before deploy
- Local alias file: `.firebaserc`

---

## Quick Reference Commands

```bash
# Check Firebase project
firebase use

# Deploy to production
firebase deploy --only hosting

# Local development
python3 -m http.server 8080

# View logs
firebase hosting:channel:list
```

---

## Contact & Attribution

**Developer:** Jo (sa66aam@gmail.com)
**Application:** StandardsHub
**Started:** February 1, 2026
**Documentation Updated:** February 3, 2026
**Current Version:** 1.5.1

---

## Quick Summary for Next Developer

### What's Done ✅
- Full scoring application with 3 configurations (A1, A2, B)
- PDF export with professional styling (donut charts, colored text headers)
- Excel export with ExcelJS styling (Lora font, grid bar charts, merged cells)
- Mock assessments for testing
- Firebase hosting deployed

### What's Next 🔜
1. **Landing Page** - Marketing page for the product
2. **Home Page** - Dashboard redesign
3. **Mobile Interface** - Visual-first approach, minimal text, touch-friendly

### Key Files
- `index.html` - THE app (all code in one file)
- `PROJECT_LOG.md` - Full development history with code references
- `AI_CONTEXT_HANDOFF.md` - This file

---

*This handoff document is designed for AI assistants to quickly understand project context. For full development history including all challenge/solution pairs, see PROJECT_LOG.md*
