# DeadlineAI Component Architecture

## Layout Components

### Sidebar
- **Used in**: All desktop screens (1440px+)
- **Props**: `activeRoute`, `notifications count`
- **Features**: Navigation links, notification badge, user profile

### Navbar
- **Used in**: Mobile screens only (< 1024px)
- **Props**: `title`, `showBack`, `actions`
- **Features**: Page title, back button, context actions

### BottomNav
- **Used in**: Mobile screens only (< 1024px)
- **Props**: `activeRoute`
- **Features**: 5 primary nav items with icons

## Task Components

### TaskCard
- **Used in**: Dashboard, My Tasks, Calendar
- **Props**: `task`, `variant: 'default' | 'compact' | 'calendar'`
- **Features**: Title, subject, due date, priority badge, progress, quick actions

### DeadlineCard
- **Used in**: Dashboard "Due Today", "Due This Week"
- **Props**: `task`, `showCountdown`
- **Features**: Compact layout with countdown timer

### PriorityBadge
- **Used in**: All task displays
- **Props**: `priority: 'critical' | 'high' | 'medium' | 'low'`, `showIcon`, `size`
- **Features**: Color + icon + text (never color alone for accessibility)

### Countdown
- **Used in**: Task Detail, Dashboard widgets
- **Props**: `deadline`, `format: 'long' | 'short'`, `showIcon`
- **Features**: Live countdown in monospace font, updates every second

### ProgressBar
- **Used in**: TaskCard, Task Detail
- **Props**: `value: 0-100`, `status`, `showLabel`
- **Features**: Animated progress indicator

## Upload & AI Components

### UploadZone
- **Used in**: Upload Notice screen
- **Props**: `onUpload`, `supportedTypes`, `maxSize`
- **Features**: Drag-drop, file picker, paste, "Use sample" button, privacy note

### AIProcessing
- **Used in**: AI Processing screen
- **Props**: `steps`, `currentStep`, `progress`
- **Features**: Real-time pipeline visualization (not a fake timer)

### ConflictAlert
- **Used in**: Dashboard (auto-appears), Conflicts screen
- **Props**: `conflicts`, `aiPlan`
- **Features**: Timeline visualization, AI recommendations, Accept/Customize actions

### RecommendationCard
- **Used in**: Extraction Results, AI Assistant
- **Props**: `item`, `confidence`, `source`, `actions`
- **Features**: Confirm/Edit/Ignore actions, source highlighting

## UI Primitives

### Modal
- **Props**: `isOpen`, `onClose`, `title`, `children`, `actions`
- **Features**: Backdrop, ESC to close, focus trap, A11y

### Toast
- **Props**: `message`, `type: 'success' | 'error' | 'info' | 'warning'`, `duration`
- **Features**: Auto-dismiss, queue management, icon + message

### ConfirmationDialog
- **Props**: `title`, `message`, `confirmText`, `cancelText`, `onConfirm`, `variant`
- **Features**: Specialized modal for Yes/No decisions

### EmptyState
- **Props**: `icon`, `title`, `description`, `action`
- **Features**: Consistent empty state pattern

## Data Display

### NotificationCard
- **Used in**: Notification Center, Dashboard
- **Props**: `notification`, `onMarkRead`, `onAction`
- **Features**: Icon, timestamp, action buttons, read/unread state

### Calendar
- **Used in**: Calendar screen
- **Props**: `view: 'day' | 'week' | 'month'`, `tasks`, `selectedDate`
- **Features**: Workload heatmap, event click → task detail panel

### AIChat
- **Used in**: AI Assistant screen
- **Props**: `messages`, `onSend`, `suggestions`
- **Features**: Suggested chips, typing animation, time-blocked plans

## Form Components

### Button
- **Props**: `variant`, `size`, `disabled`, `loading`, `icon`, `children`
- **Variants**: primary, secondary, ghost, danger

### Input
- **Props**: `type`, `label`, `error`, `icon`, `...rest`
- **Features**: Label, error state, validation

### Select
- **Props**: `options`, `value`, `onChange`, `label`, `error`

### Toggle
- **Props**: `checked`, `onChange`, `label`, `description`
- **Features**: Accessible switch component

### DateTimePicker
- **Props**: `value`, `onChange`, `label`, `minDate`, `maxDate`
- **Features**: Calendar + time picker

## Component Composition Rules

1. **No duplicated markup**: Every component is used via import, never copy-pasted
2. **Design tokens only**: All components use Tailwind classes referencing tokens
3. **Accessibility first**: WCAG AA, keyboard nav, ARIA labels, focus management
4. **Responsive by default**: Mobile-first with desktop enhancements
5. **Type-safe props**: Full TypeScript interfaces for all components
