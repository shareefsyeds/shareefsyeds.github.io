---
title: Turning 250+ internal APIs into AI tools with MCP
summary: Tools generated from OpenAPI specs plus a curated set, per-team visibility, and a CLI that builds itself from the tool list
status: live
role: Designed and built
year: 2026
order: 1
---
## Context

The platform is a set of about 16 API apps behind one sign-in: workflows, access requests, operations tools for clinical-trial environments, a parameter store and an AI assistant. People wanted to use these from AI assistants and from the terminal, not only from the web UI.

Every app already published an OpenAPI spec. The question was how to turn those specs into tools an AI model can call, without writing and maintaining each tool by hand.

## Constraints

- **The apps own authorization.** A tool call has to run as the person asking, with their permissions, and the app has to make the final decision.
- **No single point of breakage.** About 16 apps change on their own schedules. One bad spec must not take the others down.
- **Secrets must not reach the model.** Some API responses contain keys or tokens.
- **No extra release work.** A new endpoint should not need a matching change somewhere else.

## Architecture

![About 16 API apps feed a twice-hourly sync job, then an open-source MCP gateway with team-only tools, secrets masking, rate limits and per-tool circuit breakers, then AI assistants and a command-line tool](/img/mcp-layer.webp)

## Key decisions

**Generate most tools, hand-write a few.** The sync job turns each spec into tools, which covers the bulk of the 250+. Generated tools mirror endpoints one to one, which is not always how a person phrases a task. For the common jobs I added hand-curated tools that combine steps and carry clearer descriptions. Generation gives coverage, curation targets the tasks people ask for most.

**Sync each app on its own.** The job reads and registers one app at a time and records failures per app. A broken spec is logged against that app and the other apps carry on.

**Keep the gateway out of authorization.** The platform issues a short-lived token per user that carries their team membership. The gateway uses it to show each person only the tools their teams can use, then passes it through on every call. The app still checks permissions itself, so a gap in the gateway's filtering can't grant access.

**Filter what comes back.** Tool output goes through a secrets filter that masks keys and tokens before a model sees it. Rate limits and a per-tool circuit breaker stop one slow or failing app from dragging down the rest.

**One tool list for both AI and the terminal.** The command-line tool reads the same tool list at startup and builds its commands from it. A new endpoint becomes an AI tool and a CLI command on the next sync, with no CLI release.

## Before and after

The platform first had an MCP layer built into the main app. In June 2026 I moved it to a separate open-source gateway. That separated tool serving from the app's own release cycle and gave the platform rate limiting, circuit breaking and output filtering without writing them myself.

## Outcome

- 250+ tools across the platform's apps, generated from specs plus a curated set
- New endpoints reach AI assistants and the CLI on the next sync, with no extra release
- Authorization stays in the apps that own the data

## What I learned

- If the APIs are documented properly, connecting them to AI is mostly plumbing. If they aren't, no gateway fixes that. Spec quality, especially descriptions and parameter names, shows up directly in how well a model picks tools.
- Generated tools give coverage, not quality. A small set of curated tools with clear descriptions is worth adding for the tasks people ask for most.
- The safest place for authorization is where it already was. The gateway narrows what people see, the apps decide what they can do.
