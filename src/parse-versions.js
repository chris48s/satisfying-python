process.stdin.on("data", (data) => {
  const inVersions = JSON.parse(data.toString());
  let outVersions = new Set();
  inVersions.forEach(function (el) {
    if (!el.includes("-")) {
      const versionParts = el.split(".");
      if (versionParts.length >= 2) {
        outVersions.add(versionParts[0] + "." + versionParts[1]);
      }
    }
  });
  process.stdout.write(JSON.stringify(Array.from(outVersions), null, 2) + "\n");
});
