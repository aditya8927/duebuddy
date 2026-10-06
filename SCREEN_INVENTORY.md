# DeadlineAI Screen Inventory

## Core Screens (Phase 1)

| Screen | Route | Description | Status |
|--------|-------|-------------|--------|
| Landing | `/` | Hero, features, CTA | To Build |
| Dashboard | `/dashboard` | Stats, upcoming tasks, quick actions | To Build |
| My Tasks | `/tasks` | All tasks with tabs (All/Today/Upcoming/Completed) | To Build |
| Task Detail | `/tasks/:id` | Full task view with accountability controls | To Build |
| Upload Notice | `/upload` | Drag-drop upload zone | To Build |
| AI Processing | `/upload/processing` | Real-time extraction pipeline | To Build |
| Extraction Results | `/upload/results` | Review, edit, confirm extracted tasks | To Build |
| Conflict Alert | `/conflicts/:id` | Academic load alert with AI plan | To Build |
| Calendar | `/calendar` | Day/Week/Month views with workload heatmap | To Build |
| Notifications | `/notifications` | Notification center | To Build |
| AI Assistant | `/assistant` | Chat interface with suggested chips | To Build |
| Analytics | `/analytics` | Consistency score, insights | To Build |
| Settings | `/settings` | Profile, preferences, parent contacts | To Build |
| Onboarding | `/onboarding` | 3-step welcome flow | To Build |

## Authentication Screens

| Screen | Route | Description | Status |
|--------|-------|-------------|--------|
| Sign In | `/auth/signin` | Email/password login | To Build |
| Sign Up | `/auth/signup` | New account creation | To Build |
| Forgot Password | `/auth/forgot` | Password reset flow | To Build |

## Modal/Overlay Components

| Component | Trigger | Description |
|-----------|---------|-------------|
| Mark Submitted Modal | Task action | Confirmation dialog |
| Escalation Warning | Auto-trigger | Parent escalation heads-up |
| Edit Task Modal | Task action | Edit task details |
| Add Parent Contact | Settings | Add guardian info |
| Demo Control Panel | Dev tool | Time manipulation for testing |

## Missing Screens (Assumptions)
- Parent escalation configuration screen (will build using existing design tokens)
- Empty states for: no tasks, no notifications, failed upload
- Error pages: 404, 500, network error
