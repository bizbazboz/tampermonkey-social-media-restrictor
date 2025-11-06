// ==UserScript==
// @name         Social Media Blocker
// @version      1.2.0
// @description  Block all social media websites and stay focused.
// @author       bizbazboz
// @homepageURL  https://github.com/bizbazboz
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // --- Blocked social media domains ---
  const BLOCKED_DOMAINS = [
    /(?:^|\.)facebook\.com$/i,
    /(?:^|\.)fb\.com$/i,
    /(?:^|\.)messenger\.com$/i,
    /(?:^|\.)instagram\.com$/i,
    /(?:^|\.)twitter\.com$/i,
    /(?:^|\.)x\.com$/i,
    /(?:^|\.)tiktok\.com$/i,
    /(?:^|\.)reddit\.com$/i,
    /(?:^|\.)youtube\.com$/i,
    /(?:^|\.)youtu\.be$/i,
    /(?:^|\.)pinterest\.com$/i,
    /(?:^|\.)snapchat\.com$/i,
    /(?:^|\.)discord\.com$/i,
    /(?:^|\.)discordapp\.com$/i,
    /(?:^|\.)linkedin\.com$/i,
    /(?:^|\.)tumblr\.com$/i,
    /(?:^|\.)twitch\.tv$/i,
    /(?:^|\.)threads\.net$/i,
    /(?:^|\.)truthsocial\.com$/i,
    /(?:^|\.)mastodon\.social$/i,
    /(?:^|\.)telegram\.org$/i,
    /(?:^|\.)snap\.com$/i,
    /(?:^|\.)flickr\.com$/i,
    /(?:^|\.)mixcloud\.com$/i,
    /(?:^|\.)soundcloud\.com$/i,
    /(?:^|\.)clubhouse\.com$/i,
    /(?:^|\.)bsky\.app$/i,
    /(?:^|\.)behance\.net$/i,
    /(?:^|\.)dribbble\.com$/i,
    /(?:^|\.)myspace\.com$/i,
    /(?:^|\.)nextdoor\.com$/i,
    /(?:^|\.)quora\.com$/i,
    /(?:^|\.)kik\.com$/i,
    /(?:^|\.)wechat\.com$/i
  ];

  const host = location.hostname;
  const isBlocked = BLOCKED_DOMAINS.some((rx) => rx.test(host));
  if (!isBlocked) return;

  // Immediately stop network requests and script execution
  try { window.stop(); } catch (e) {}

  // Replace the entire document safely using a new DOM
  const html = `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Blocked — Stay Focused</title>
      <style>
        html,body{height:100%;margin:0}
        body{
          display:flex;align-items:center;justify-content:center;
          font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
          background:#0b0f14;color:#e8eef5;
        }
        .card{
          max-width:560px;padding:28px 24px;border-radius:18px;background:#111824;
          box-shadow:0 10px 30px rgba(0,0,0,.35);
          text-align:center
        }
        h1{margin:0 0 8px;font-size:24px;font-weight:700}
        p{margin:0 0 16px;line-height:1.5;color:#c7d2e0}
        .host{font-weight:700;color:#fff}
        .row{display:flex;gap:10px;justify-content:center;margin-top:8px}
        button, a.btn{
          border:0;border-radius:12px;padding:10px 14px;font-size:14px;cursor:pointer;
          background:#1f2a3a;color:#e8eef5;text-decoration:none
        }
        button:hover, a.btn:hover{filter:brightness(1.1)}
        small{display:block;margin-top:14px;color:#96a3b5}
      </style>
    </head>
    <body>
      <div class="card" role="dialog">
        <h1>Blocked</h1>
        <p><span class="host">${host}</span> is on your block list.</p>
        <div class="row">
          <button id="closeTab">Close tab</button>
          <a class="btn" href="about:blank" rel="noreferrer">Open blank page</a>
        </div>
        <small>Script by <a href="https://github.com/bizbazboz" target="_blank" style="color:#8aa4ff">bizbazboz</a></small>
      </div>
      <script>
        document.getElementById('closeTab')?.addEventListener('click', () => window.close());
      </script>
    </body>
    </html>
  `;

  // Create a new document and replace the current DOM safely
  const newDoc = document.implementation.createHTMLDocument("Blocked");
  newDoc.open();
  newDoc.write(html);
  newDoc.close();

  // Swap out the current DOM with the new one
  document.replaceChild(newDoc.documentElement, document.documentElement);
})();
