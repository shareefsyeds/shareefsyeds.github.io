export const links = {
  email: 'shareefbasha53@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shareefsyed/',
  github: 'https://github.com/shareefsyeds',
  posts: 'https://www.linkedin.com/in/shareefsyed/recent-activity/all/',
  resume: '/Shareef-Syed-Resume.pdf',
};


export const experience = [
  {
    years: '2022 to present',
    title: 'Senior Cloud Operations Engineer',
    org: 'Signant Health',
    note: 'Build and run the internal platform 200+ employees use for access requests, workflow automation, enterprise integrations and AI tooling. I take requirements directly from finance, supply chain, clinical-operations and IT teams and run what I build in production. Started in cloud operations and database administration. Core Contributor every year.',
    tags: ['Python', 'Django', 'React', 'TypeScript', 'AWS', 'Terraform', 'Kubernetes', 'MCP', 'Bedrock'],
  },
  {
    years: '2020 to 2022',
    title: 'Cloud Infrastructure Engineer',
    org: 'Autodesk',
    note: 'Migrated self-managed databases to Amazon RDS with AWS DMS, across accounts and regions. Built new AWS accounts in CloudFormation and supported GoldenGate replication from on-prem to cloud. Exceptional Performance Award, twice.',
    tags: ['AWS', 'RDS', 'DMS', 'CloudFormation', 'GoldenGate'],
  },
  {
    years: '2019',
    title: 'Senior Oracle Database Administrator',
    org: 'NTT DATA',
    note: 'Ran client database operations at a service firm: Oracle RAC in 24x7 production, GoldenGate replication between Oracle and SQL Server, and SQL Server administration.',
    tags: ['Oracle RAC', 'GoldenGate', 'SQL Server'],
  },
  {
    years: '2017 to 2019',
    title: 'Oracle Database Administrator',
    org: 'Flytxt',
    note: 'Oracle RAC and single-instance databases, Data Guard standbys for disaster recovery, and performance tuning with AWR and ASH.',
    tags: ['Oracle', 'Data Guard', 'RMAN'],
  },
  {
    years: '2015 to 2017',
    title: 'Oracle Database Administrator',
    org: 'Datavail',
    note: 'Database operations for client companies at a managed-services firm: patching, backup and recovery, cloning and Data Guard support.',
    tags: ['Oracle', 'RMAN', 'Data Pump'],
  },
];

// Self-service apps on the platform, named by what they do.
export const selfService = [
  { kind: 'Releases', name: 'Release automation', line: 'Validate and deploy software builds. The platform backs up first, copies and checksums each build, grants database roles and files the release documents.' },
  { kind: 'Environments', name: 'Environment builds', line: 'Pick a configuration and pass a readiness check, then 21 automated steps handle database restore, app install, web server setup and single sign-on.' },
  { kind: 'Database access', name: 'Self-service database accounts', line: 'Create, reset or lock your own account on up to 20 test databases at once, with production always out of reach.' },
  { kind: 'Data', name: 'Data provisioning with expiry', line: 'Request a dataset with a retention period. Schema, import and access are set up automatically, then removed when it expires.' },
  { kind: 'Accounts', name: 'Multi-tenant account management', line: 'Create, reset or change one account across every active customer environment in a single request.' },
  { kind: 'Email', name: 'Email deliverability checks', line: 'Find and clear suppressed email addresses directly in AWS.' },
  { kind: 'Documents', name: 'Document delivery', line: 'Upload a document with a justification. It is archived and delivered into the downstream system automatically.' },
  { kind: 'Insight', name: 'Operational dashboards', line: 'Dashboards and reports refreshed daily and weekly from the source systems.' },
];

// Other platform work, matching the profile README.
export const alsoBuilt = [
  { kind: 'Operations', name: 'Observability platform', line: 'Metrics, a log explorer, alerting and runbook execution, with access set per project.' },
  { kind: 'Monitoring', name: 'Uptime monitoring', line: 'Self-hosted uptime and health checks for the platform’s services on an open-source monitor, with Microsoft Teams alerts.' },
  { kind: 'Security', name: 'Credential vault', line: 'Secrets with KMS envelope encryption, rotation, audit connectors and Azure AD directory sync.' },
  { kind: 'Packages', name: 'Shared sign-in and AWS packages', line: 'Entra ID sign-in with JWT, API keys and RBAC, and AWS connection management with credential rotation and audit, shared by several internal apps.' },
  { kind: 'Infrastructure', name: 'From one VM to Amazon EKS', line: 'Moved production to EKS in Terraform, with Karpenter, Aurora Serverless v2, ElastiCache Valkey and keyless GitHub OIDC deploys.' },
  { kind: 'Cost', name: 'CloudWatch cost finding', line: 'Traced 91% of an AWS account’s CloudWatch log spend to one DEBUG-level Lambda, a ~$3K/month fix, and proposed a self-hosted log stack projected to save ~$47.9K a year.' },
];
