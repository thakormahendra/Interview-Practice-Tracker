export const CATEGORIES = {
  DSA: 'DSA',
  GIT_GITHUB: 'Git & GitHub',
  TECHNICAL: 'Full-Stack Technical',
  MACHINE_CODING: 'Machine Coding',
};

export const CATEGORY_OPTIONS = [
  CATEGORIES.DSA,
  CATEGORIES.GIT_GITHUB,
  CATEGORIES.TECHNICAL,
  CATEGORIES.MACHINE_CODING,
];

export const DIFFICULTIES = {
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard',
};

export const DIFFICULTY_OPTIONS = [
  DIFFICULTIES.EASY,
  DIFFICULTIES.MEDIUM,
  DIFFICULTIES.HARD,
];

export const STATUSES = {
  PENDING: 'Pending',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
};

export const STATUS_OPTIONS = [
  STATUSES.PENDING,
  STATUSES.IN_PROGRESS,
  STATUSES.COMPLETED,
];

export const INITIAL_QUESTIONS = [
  {
    id: 'demo-1',
    title: 'Two Sum & 3Sum (Hash Map & Two Pointers)',
    category: CATEGORIES.DSA,
    difficulty: DIFFICULTIES.EASY,
    status: STATUSES.COMPLETED,
    notes: 'Reviewed two-pointer approach for sorted arrays and hash map for O(n) lookup.',
    createdAt: '2025-02-10T10:00:00.000Z',
  },
  {
    id: 'demo-2',
    title: 'Explain Git Rebase vs. Merge & Resolve Merge Conflicts',
    category: CATEGORIES.GIT_GITHUB,
    difficulty: DIFFICULTIES.MEDIUM,
    status: STATUSES.COMPLETED,
    notes: 'Practiced interactive rebase (-i) and aborting conflicts.',
    createdAt: '2025-02-11T11:30:00.000Z',
  },
  {
    id: 'demo-3',
    title: 'LRU Cache Implementation using Doubly Linked List',
    category: CATEGORIES.DSA,
    difficulty: DIFFICULTIES.HARD,
    status: STATUSES.IN_PROGRESS,
    notes: 'Need to review O(1) get and put eviction edge cases.',
    createdAt: '2025-02-12T14:15:00.000Z',
  },
  {
    id: 'demo-4',
    title: 'Event Loop, Microtasks & Macrotasks in Node.js / Browser',
    category: CATEGORIES.TECHNICAL,
    difficulty: DIFFICULTIES.MEDIUM,
    status: STATUSES.COMPLETED,
    notes: 'Promises vs setTimeout order of execution questions.',
    createdAt: '2025-02-13T09:45:00.000Z',
  },
  {
    id: 'demo-5',
    title: 'Design a Real-Time Kanban Board with Drag-and-Drop',
    category: CATEGORIES.MACHINE_CODING,
    difficulty: DIFFICULTIES.HARD,
    status: STATUSES.IN_PROGRESS,
    notes: 'Implemented state persistence and column reordering; working on card transitions.',
    createdAt: '2025-02-14T16:20:00.000Z',
  },
  {
    id: 'demo-6',
    title: 'React Fiber Architecture & Virtual DOM Reconciliation',
    category: CATEGORIES.TECHNICAL,
    difficulty: DIFFICULTIES.MEDIUM,
    status: STATUSES.PENDING,
    notes: 'Study diffing algorithm heuristic assumptions and keys importance.',
    createdAt: '2025-02-15T12:00:00.000Z',
  },
];

