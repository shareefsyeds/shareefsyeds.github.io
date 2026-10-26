import type { FlowStage } from '../components/Flow.astro';

export interface Project {
  slug: string;
  title: string;
  facts: string[];
  status: 'live' | 'in use' | 'pilot' | 'in development';
  problem: string;
  approach: string;
  result: string;
  caption: string;
  stages: FlowStage[];
  writeup?: boolean;
  blurb: string;
  tags: string[];
  sections?: { title: string; note?: string; cards: { label: string; text: string }[] }[];
}

export const projects: Project[] = [
  {
    slug: 'workflow',
    blurb: 'Moved automation from custom scripts to a low-code engine: jobs are composed from 50 ready steps in a visual builder, with Teams approvals, audit and alerts built in. A real flow took 15 minutes with no code.',
    tags: ['Low-code', 'Python', 'Celery', 'React', 'Microsoft Teams'],
    title: 'From custom code to low-code workflows',
    status: 'live',
    facts: ['50 step types', 'Teams approvals', 'a real flow built in 15 minutes'],
    problem:
      'Every script was a small software project. Someone wrote the logic and the plumbing (drivers, retries, logging, alerts), hosted it on a server or a stack, and then looked after it for years. AI coding assistants make scripts faster to write, not cheaper to own, and a job living on one server can vanish silently when that server is rebuilt.',
    approach:
      'A visual workflow engine where jobs are composed from about 50 ready steps: SQL and PL/SQL, Snowflake, S3, SFTP, SMB, SSH, WinRM, email, Jira, Box, GitHub, Certinia, branches, loops, waits, sub-flows and data transforms, with a Python step for anything not covered yet. Scheduling, credentials, approvals in Microsoft Teams, audit and monitoring come with the platform instead of being rebuilt per job.',
    result:
      'A real flow (Jira to CSV, a Teams approval, then email) was built in 15 minutes with no code. Planning estimates put a simple job at 15 to 30 minutes instead of 3 to 7 hours as a script, and roughly 10 times faster to deliver with about 5 times less upkeep.',
    caption: 'A run moves through ready steps, can pause for a person in Teams, and alerts when it is late.',
    sections: [
      {
        title: 'One place from draft to retirement',
        cards: [
          { label: 'Build', text: 'Visual designer, with every save validated and versioned.' },
          { label: 'Run and fix', text: 'Live status for each step, retry with the same inputs, no server logins.' },
          { label: 'Govern', text: 'Azure AD sign-in, roles per team and flow, an audit log of every change and run.' },
          { label: 'Support', text: 'Dashboard, SLA and error alerts, catch-up after outages, one-click rollback.' },
        ],
      },
      {
        title: 'What moves, and what stays as code',
        note: 'Pay for the plumbing once, not for every job.',
        cards: [
          { label: 'Moves to the engine', text: 'Scheduled reports and extracts, integrations between internal systems, runbooks with approvals, housekeeping tasks.' },
          { label: 'Stays as code', text: 'Product features, heavy compute and large data pipelines, jobs that must run on the data server.' },
        ],
      },
      {
        title: 'What one automation costs over its life',
        note: 'Planning estimates for AI-assisted code plus hosting, not measurements. The 15-minute build is measured on one flow.',
        cards: [
          { label: 'Simple job, build', text: 'Script with AI help: 3 to 7 hours including hosting. Workflow engine: 15 to 30 minutes.' },
          { label: 'Complex job, build', text: 'Script: 20 to 36 hours. Workflow engine: 2 to 4 hours.' },
          { label: 'Upkeep per year', text: 'Simple: 6 to 8 hours as a script, about 1 hour as a flow. Complex: 12 to 16 hours against 2 to 4.' },
          { label: 'Twenty simple jobs', text: 'About 100 hours to build as scripts, under 10 as flows. Then about 140 hours a year to run, against about 20.' },
        ],
      },
    ],
    stages: [
      { nodes: [{ label: 'Trigger', note: 'schedule, webhook or manual', tone: 'source' }] },
      { nodes: [{ label: 'Data steps', note: 'SQL, Snowflake, S3, transforms' }, { label: 'System steps', note: 'NetSuite, ServiceNow, Jira, Box' }] },
      { via: 'pause', nodes: [{ label: 'Approval in Teams', note: 'approve or reject in chat', tone: 'person' }] },
      { via: 'resume', nodes: [{ label: 'Deliver', note: 'email, Teams, files', tone: 'out' }, { label: 'SLA alert', note: 'when a run is late', tone: 'out' }] },
    ],
  },
  {
    slug: 'mcp',
    blurb: "A sync job turns about 16 apps' OpenAPI specs into 250+ MCP tools, plus a curated set. The same tool list drives AI assistants and a command-line tool, so a new endpoint needs no extra release.",
    tags: ['MCP', 'OpenAPI', 'Python', 'AI'],
    title: '250+ internal API operations as MCP tools',
    status: 'live',
    facts: ['250+ tools', 'about 16 apps'],
    problem:
      'People wanted to use the platform from AI assistants and the terminal. Writing and maintaining a tool by hand for every endpoint across about 16 apps would never keep up.',
    approach:
      'Each app already publishes an OpenAPI spec, so a sync job turns specs into MCP tools twice an hour, app by app. A small set of hand-curated tools covers the common multi-step jobs. Authorization stays in the apps.',
    result:
      'Over 250 tools. A new endpoint becomes an AI tool and a CLI command on the next sync, with no extra release.',
    caption: 'Specs in, tools out. One tool list serves AI assistants and the command-line tool.',
    writeup: true,
    stages: [
      { nodes: [{ label: 'About 16 API apps', note: 'each publishes an OpenAPI spec', tone: 'source' }] },
      { via: 'read spec', nodes: [{ label: 'Sync job', note: 'twice an hour, one app at a time' }, { label: 'Curated tools', note: 'common multi-step tasks', tone: 'person' }] },
      { via: 'register', nodes: [{ label: 'MCP gateway', note: 'team-only tools, secrets masked, rate limits, circuit breaker' }] },
      { via: 'tool list', nodes: [{ label: 'AI assistants', tone: 'out' }, { label: 'Command-line tool', note: 'builds its commands at startup', tone: 'out' }] },
    ],
  },
  {
    slug: 'template',
    blurb: 'The platform core as a project template: Entra ID sign-in, roles, audit log and 13 integration adapters out of the box. An invoicing app built on it is live for 100+ users.',
    tags: ['Django', 'React', 'Entra ID', 'ECS', 'EKS'],
    title: 'A reusable app template with 13 integration adapters',
    status: 'in use',
    facts: ['13 integration adapters', '1 app live, 100+ users'],
    problem:
      'Every new internal app needed the same things: Entra ID sign-in, roles, an audit log, integrations and a deployment. Rebuilding them for each app would repeat the same work.',
    approach:
      'I extracted the platform core into a project template. A new app starts with sign-in, RBAC, audit log, error tracking, 13 integration adapters and ECS or EKS deployment. Settings and connections live in the database, so they change from an admin screen.',
    result:
      'A consultant invoicing app built on it is live for 100+ users and replaced a Power Apps app. A reporting app that replaces a UiPath bot is next.',
    caption: 'One template, many apps. Integrations and settings are configured, not coded.',
    stages: [
      { nodes: [{ label: 'Template core', note: 'SSO, RBAC, audit log, error tracking', tone: 'source' }, { label: '13 adapters', note: 'NetSuite, Snowflake, ServiceNow, Jira and more', tone: 'source' }] },
      { via: 'generate', nodes: [{ label: 'New app', note: 'business logic only' }] },
      { via: 'deploy', nodes: [{ label: 'Invoicing app', note: 'live, 100+ users', tone: 'out' }, { label: 'Reporting app', note: 'in development', tone: 'out' }] },
    ],
  },
  {
    slug: 'timesheets',
    blurb: 'Contractors log hours, managers approve, and approved hours reach Snowflake and Certinia in real time instead of a weekly batch. Built with two colleagues, live for about 30 users.',
    tags: ['React', 'Fastify', 'Snowflake', 'Terraform'],
    title: 'Contractor timesheets with real-time Snowflake sync',
    status: 'live',
    facts: ['~30 users', 'UK and Austria', 'one of three engineers'],
    problem:
      'Warehouse contractor hours reached finance through a weekly batch job, so data was up to a week old, and the batch had stopped running.',
    approach:
      'A timesheet app where contractors log hours and managers approve them. Approved hours sync from the database to Snowflake in real time and flow on to Certinia. React, Fastify and ECS Fargate, all in Terraform.',
    result:
      'Live for about 30 contractors and managers. The weekly batch is gone, and finance sees hours as soon as they are approved.',
    caption: 'From a weekly batch to real time.',
    stages: [
      { nodes: [{ label: 'Contractors', note: 'log weekly hours', tone: 'person' }] },
      { nodes: [{ label: 'Timesheet app', note: 'React, Fastify, ECS Fargate' }] },
      { via: 'approve', nodes: [{ label: 'Manager approval', tone: 'person' }] },
      { via: 'real time', nodes: [{ label: 'Snowflake', tone: 'out' }, { label: 'Certinia', note: 'downstream', tone: 'out' }] },
    ],
  },
  {
    slug: 'rag',
    blurb: 'Retrieval-augmented answers over internal documents with Titan embeddings and pgvector, in the web app and in Microsoft Teams. In a pilot with selected users.',
    tags: ['AWS Bedrock', 'pgvector', 'RAG'],
    title: 'A document assistant on Bedrock',
    status: 'pilot',
    facts: ['RAG', 'AWS Bedrock, pgvector', 'pilot with selected users'],
    problem:
      'Make internal documents answerable in plain language, inside the tools people already use.',
    approach:
      'Documents are split, embedded with Titan and stored in pgvector inside the platform database. Questions retrieve the closest passages and Bedrock answers from them, in the web app or in Microsoft Teams.',
    result:
      'Running as a pilot with a small group of users while answer quality is checked.',
    caption: 'Retrieve first, then answer from what was retrieved.',
    stages: [
      { nodes: [{ label: 'Documents', tone: 'source' }] },
      { via: 'embed', nodes: [{ label: 'pgvector', note: 'Titan embeddings' }] },
      { via: 'retrieve', nodes: [{ label: 'Bedrock', note: 'answers from retrieved passages' }] },
      { nodes: [{ label: 'Web app', tone: 'out' }, { label: 'Microsoft Teams', tone: 'out' }] },
    ],
  },
  {
    slug: 'agents',
    blurb: 'A Jira request becomes an AI plan a person approves in Teams, then a tested, independently reviewed draft pull request a person merges. In development.',
    tags: ['Claude Code', 'Codex', 'Bedrock', 'GitHub Actions'],
    title: 'An AI agent team with human approval',
    status: 'in development',
    facts: ['human approval at two points', 'sandboxed tests'],
    problem:
      'AI can draft small, well-described code changes. Letting an agent merge its own code is not acceptable, so a person approves every plan and every merge.',
    approach:
      'A Jira request becomes an AI-written plan that a person approves in Teams. Only the approved plan is built: an implementer writes the change, tests run in a sandbox with no secrets, and an independent AI reviewer checks it. The output is a draft pull request.',
    result:
      'In development. A person approves every plan and merges every pull request. The AI can never approve or merge its own work.',
    caption: 'People decide at both ends. The AI does the middle.',
    stages: [
      { nodes: [{ label: 'Jira request', tone: 'source' }] },
      { via: 'plan', nodes: [{ label: 'Plan approval', note: 'a person, in Teams', tone: 'person' }] },
      { via: 'build', nodes: [{ label: 'Implement', note: 'model fallback' }, { label: 'Test and review', note: 'sandbox, independent reviewer' }] },
      { via: 'draft PR', nodes: [{ label: 'Merge', note: 'a person, always', tone: 'person' }] },
    ],
  },
];
