require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;
const ARCHIVE_DIR = process.env.ARCHIVE_ROOT_DIR || './archive/pillars';

// Middleware to parse JSON payloads
app.use(express.json());

// Ensure archive directory exists
if (!fs.existsSync(ARCHIVE_DIR)){
    fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
}

// Inbound Webhook Route
app.post('/api/commit', (req, res) => {
    const { token, title, content, tags } = req.body;

    // 1. Verify Intercept Protocol (Authentication)
    if (token !== process.env.PAUSE_AUTH_TOKEN) {
        return res.status(403).json({ error: 'Cognitive firewall breach: Invalid auth token.' });
    }

    // 2. Format the durable asset
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `${title.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.md`;
    const filepath = path.join(ARCHIVE_DIR, filename);

    const markdownPayload = `---
title: ${title}
date: ${new Date().toISOString()}
tags: [${tags.join(', ')}]
status: verified
---

${content}
`;

    // 3. Commit to permanent archive
    try {
        fs.writeFileSync(filepath, markdownPayload);
        console.log(`[LEGACY] Asset committed: ${filename}`);
        res.status(200).json({ success: true, message: 'Asset successfully archived.', file: filename });
        
        // Dispatch logic (LinkedIn API) would be triggered here
        
    } catch (error) {
        console.error('[LEGACY] Archival failure:', error);
        res.status(500).json({ error: 'Failed to write asset to local storage.' });
    }
});

app.listen(PORT, () => {
    console.log(`[LEGACY ENGINE] Online. Listening for verified payloads on port ${PORT}...`);
});
