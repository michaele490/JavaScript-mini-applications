function truthCheck(collection, pre) {
  let allTrue = true;

  for (const obj of collection) {
    if (!obj[pre]) {
      allTrue = false;
    }
  }
  return allTrue;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");