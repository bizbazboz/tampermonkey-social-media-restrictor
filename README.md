# Tampermonkey Social Media Restrictor  
A user-script for Tampermonkey that helps you restrict access to social-media sites (or other configured targets) when you need to stay focused.

## Why this script?  
We all know how easy it is to drift into social media when we should be working. This script helps you gently restrict or block access to specified domains/pages during times you choose — helping maintain focus and discipline.

## Features  
- Configurable list of domains/pages to restrict  
- Simple UI inside the Tampermonkey script (if enabled)  
- Lightweight and easy to maintain  
- Works in browsers supporting Tampermonkey  
- Ideal for personal productivity, work sessions, or study blocks  

## Getting Started  
1. Install Tampermonkey in your browser (if not already).  
2. Go to the “raw” version of `blocker.user.js` in this repo and install the script.  
3. Open the Tampermonkey dashboard, click the script, configure your list of restricted sites.  
4. Enable/disable as needed, and maybe set a schedule or custom logic (if you extend it).  

## Configuration  
Open the script in Tampermonkey and edit the `domainsToBlock` array using regex. Example:  
```js
const BLOCKED_DOMAINS = [
    /(?:^|\.)facebook\.com$/i,
    /(?:^|\.)fb\.com$/i,
    /(?:^|\.)messenger\.com$/i,
    /(?:^|\.)instagram\.com$/i,
    /(?:^|\.)twitter\.com$/i,
    /(?:^|\.)x\.com$/i
  ];
````

You can add or remove domains or full URLs as you like.

## Extending the Script

If you’d like to add more features — e.g., time-based blocking, whitelist modes, custom messages — feel free. Contributions welcome via pull requests.

## Contributing

Please open issues for bugs or feature requests.
Pull requests should include tests, documentation updates, and adhere to existing code style.

