# Legacy

*The archival and distribution engine for durable intellectual assets.*

Part of the [Sentinel Suite](https://github.com/stepiocom/Sentinel-Suite).

---

## 🏛️ Architecture Overview

The Sentinel Suite is an autonomous content engineering architecture designed for professionals who treat content as high-value intellectual property, not a commodity.

| Engine | Role | System Implementation | Purpose |
| :--- | :--- | :--- | :--- |
| **Forge** | Evaluator | Analysis Engine / Scorecard | Filter noise from signal |
| **Pause** | Sentinel | Chrome / Firefox Extension | Intercept AI influence & halt automation |
| **Legacy** | Publisher | **Archival & Dispatch API** | Transform work into durable assets |

---

## 🎯 The Philosophy

### What
This is the **Legacy** engine—the final node of the Sentinel Suite. It receives the cognitively verified payloads released by `Pause`, commits them to a permanent Markdown knowledge base, and programmatically dispatches them to configured professional networks.

### Why
Digital transience is the enemy of authority. Content generated and left in chat interfaces or isolated folders degrades into noise. This engine ensures that every piece of verified intellectual property you produce becomes a structured, searchable, and distributed asset.

### Who
Engineered for scholars, strategists, and researchers who are executing long-term reputation pilots and building compounding bodies of work.

---

## 🛠️ The Commit Protocol

`Legacy` operates as a dual-action router. When the operator signs off on a payload in the `Pause` extension, the data is pushed to the Legacy webhook.

```text
[ PAUSE RELEASE ] ──> [ LEGACY API ] ┬──> ( PERMANENT ARCHIVE )
                                     └──> ( NETWORK DISPATCH )
```

1. **Receive:** The internal Express API listens for verified, structured Markdown payloads.
2. **Archive:** The payload is instantly committed to local storage, maintaining a strict taxonomic structure for ongoing research and operational pillars.
3. **Dispatch:** If tagged for release, the engine formats and pushes the asset via REST API to external networks (e.g., LinkedIn).

---

## 📂 System Topology

`Legacy` automatically categorizes inbound payloads into your structured taxonomy.

```text
/legacy-engine
├── /archive
│   ├── /pillars
│   │   ├── pillar-v-review.md
│   │   └── pillar-vi-draft.md
│   └── /research
│       └── structure-of-agentic-production.md
├── dispatch.js           # Network API handlers
└── server.js             # Inbound webhook listener
```

---

## 🚀 Deployment Guide

1. **Initialize Workspace:** Deploy this repository as the final node in your local Sentinel architecture.
2. **Configure Environment:** Copy `.env.example` to `.env`. You must define your archive root path and any relevant external API credentials.
3. **Install Dependencies:** Execute `npm install` to load the API routing and markdown-parsing modules.
4. **Ignite Engine:** Run `npm start` to open the webhook listener. Ensure your `Pause` extension is configured to target this port upon release.

---

*License: MIT*
