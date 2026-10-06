# Phase 1 Implementation Plan

## Objective
Convert design into reusable React components with Tailwind, set up routing, create demo world with mock data. All screens render pixel-perfect at 1440px and 390px.

## Setup Tasks

### 1. TypeScript Configuration
- [x] Install TypeScript, @types packages
- [ ] Configure tsconfig.json (strict mode, path aliases)
- [ ] Convert existing files to .tsx

### 2. Tailwind CSS Setup
- [ ] Install tailwindcss, postcss, autoprefixer
- [ ] Configure tailwind.config.js with design tokens
- [ ] Set up CSS variables for theming
- [ ] Install @tailwindcss/forms for better form styling

### 3. Routing & State
- [ ] Install react-router-dom
- [ ] Install zustand for state management
- [ ] Create routes structure
- [ ] Set up demo world store with mock data

### 4. Additional Dependencies
- [ ] date-fns for date manipulation
- [ ] clsx for conditional classes
- [ ] react-icons or lucide-react for icons
- [ ] framer-motion for animations (optional)

## Build Order

### Step 1: Foundation (30 min)
```
src/
├── lib/
│   ├── utils.ts          # clsx helper, date formatters
│   └── constants.ts      # Demo world data
├── types/
│   └── index.ts          # Task, User, Notification types
└── store/
    └── demo-store.ts     # Zustand store with demo data
```

### Step 2: UI Primitives (1 hour)
```
src/components/ui/
├── Button.tsx
├── Input.tsx
├── Select.tsx
├── Toggle.tsx
├── Modal.tsx
├── Toast.tsx
├── ConfirmationDialog.tsx
└── EmptyState.tsx
```

### Step 3: Task Components (1 hour)
```
src/components/tasks/
├── TaskCard.tsx
├── DeadlineCard.tsx
├── PriorityBadge.tsx
├── Countdown.tsx
└── ProgressBar.tsx
```

### Step 4: Layout Components (1 hour)
```
src/components/layout/
├── Sidebar.tsx
├── Navbar.tsx
├── BottomNav.tsx
└── Layout.tsx          # Responsive wrapper
```

### Step 5: Upload & AI Components (1 hour)
```
src/components/ai/
├── UploadZone.tsx
├── AIProcessing.tsx
├── ConflictAlert.tsx
└── RecommendationCard.tsx
```

### Step 6: Specialized Components (1 hour)
```
src/components/
├── NotificationCard.tsx
├── Calendar.tsx
└── AIChat.tsx
```

### Step 7: Pages (2 hours)
```
src/pages/
├── Landing.tsx
├── Dashboard.tsx
├── MyTasks.tsx
├── TaskDetail.tsx
├── UploadNotice.tsx
├── AIProcessing.tsx
├── ExtractionResults.tsx
├── ConflictAlert.tsx
├── Calendar.tsx
├── Notifications.tsx
├── AIAssistant.tsx
├── Analytics.tsx
├── Settings.tsx
└── Onboarding.tsx
```

### Step 8: Routes & Demo Clock (30 min)
```
src/
├── App.tsx              # Router setup
├── routes.tsx           # Route configuration
└── hooks/
    └── useDemoClock.ts  # Time manipulation for testing
```

## Demo World Data Structure

```typescript
{
  user: {
    id: "1",
    name: "Sultan",
    email: "sultan@university.edu",
    avatar: null
  },
  tasks: [
    {
      id: "1",
      title: "DBMS Assignment",
      subject: "Database Management",
      type: "assignment",
      dueAt: "2026-10-12T23:59:00",
      priority: "high",
      progress: 0,
      status: "pending",
      source: {
        file: "college_notice.pdf",
        page: 2,
        snippet: "DBMS Assignment due October 12th..."
      },
      accountability: {
        on: false,
        channels: ["in-app", "email"],
        intensity: "smart"
      }
    },
    {
      id: "2",
      title: "OS Lab Submission",
      subject: "Operating Systems",
      type: "lab",
      dueAt: "2026-10-16T17:00:00",
      priority: "medium",
      progress: 60,
      status: "pending",
      // ...
    },
    {
      id: "3",
      title: "Mid-Semester Exam",
      subject: "Computer Networks",
      type: "exam",
      dueAt: "2026-10-18T09:00:00",
      priority: "critical",
      progress: 0,
      status: "pending",
      // ...
    }
  ],
  notifications: [
    {
      id: "1",
      type: "reminder",
      taskId: "1",
      message: "DBMS Assignment due in 2 hours",
      read: false,
      createdAt: "2026-10-12T21:59:00"
    }
  ]
}
```

## Testing Checklist

- [ ] All pages accessible via navigation
- [ ] Sidebar works on desktop (1440px)
- [ ] BottomNav works on mobile (390px)
- [ ] TaskCard displays correctly in all variants
- [ ] Countdown updates every second
- [ ] Priority badges show icon + text + color
- [ ] Modal opens/closes with ESC key
- [ ] Toast auto-dismisses after duration
- [ ] Empty states display when no data
- [ ] All interactive elements have hover/focus states

## Success Criteria

✅ Open localhost:5173 → see Landing page
✅ Navigate to /dashboard → see stats and 3 demo tasks
✅ Click a task → see Task Detail with countdown
✅ Switch to mobile view (390px) → see BottomNav, no Sidebar
✅ All UI matches design tokens (colors, spacing, typography)
✅ Zero console errors or warnings
✅ All text is readable (WCAG AA contrast)
✅ Keyboard navigation works throughout

## Time Estimate: 7-8 hours total
