const fs = require('fs');

function inspectModule(htmlPath, scriptPath) {
  if (!fs.existsSync(htmlPath) || !fs.existsSync(scriptPath)) return;
  const html = fs.readFileSync(htmlPath, 'utf8');
  const script = fs.readFileSync(scriptPath, 'utf8');

  console.log('================================================================');
  console.log('CHECKING:', htmlPath);

  // Find all guide-box, lead-text, hint badges, placeholders in HTML
  const guideBoxes = html.match(/<div[^>]*class=["'][^"']*guide[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi) || [];
  const hintBadges = html.match(/<div[^>]*class=["'][^"']*(?:hint|badge|tag|touch)[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi) || [];
  const feedbackBoxes = html.match(/<div[^>]*class=["'][^"']*(?:feedback|detail-placeholder|panel)[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi) || [];

  console.log('--- Guide boxes in HTML ---');
  guideBoxes.forEach(g => {
    const text = g.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const inScript = script.includes(text.replace('HƯỚNG DẪN:', '').trim()) || script.includes(text.slice(0, 30));
    console.log(`[${inScript ? 'IN SCRIPT' : 'AI BỊA'}]`, text);
  });

  console.log('--- Touch/Hint Badges in HTML ---');
  hintBadges.forEach(b => {
    const text = b.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length > 3 && text.length < 100) {
      const inScript = script.includes(text);
      console.log(`[${inScript ? 'IN SCRIPT' : 'AI BỊA'}]`, text);
    }
  });
}

inspectModule('modules/Lop_11/SH11_B01_M03/SH11_B01_M03.html', 'modules/Lop_11/SH11_B01_M03/SH11_B01_M03_Kich_Ban.md');
inspectModule('modules/Lop_11/SH11_B01_M05/SH11_B01_M05.html', 'modules/Lop_11/SH11_B01_M05/SH11_B01_M05_KichBan.md');
inspectModule('modules/Lop_11/SH11_B01_M02/SH11_B01_M02.html', 'modules/Lop_11/SH11_B01_M02/SH11_B01_M02_Kich_Ban.md');
inspectModule('modules/Lop_11/SH11_M01_B01/SH11_M01_B01.html', 'modules/Lop_11/SH11_M01_B01/Sh11-B01-M01_Kich_Ban.md');
