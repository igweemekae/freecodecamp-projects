let lunches = [];

function addLunchToEnd(str) {
  lunches.push(str);
  return `${str} added to the end of the lunch menu.`;
}

function addLunchToStart(str) {
  lunches.unshift(str);
  return `${str} added to the start of the lunch menu.`;
}

function removeLastLunch() {
  if (lunches.length === 0) {
    return "No lunches to remove.";
  } else {
    const removeLast = lunches.pop();
    return `${removeLast} removed from the end of the lunch menu.`;
  }
}

function removeFirstLunch() {
  if (lunches.length === 0) {
    return "No lunches to remove.";
  } else {
    const removeFirst = lunches.shift();
    return `${removeFirst} removed from the start of the lunch menu.`;
  }
}

function getRandomLunch() {
  let randomPick = Math.floor(Math.random() * lunches.length);
  if (lunches.length === 0) {
    return "No lunches available.";
  } else {
    const launchItem = lunches[randomPick];
    return `Randomly selected lunch: ${launchItem}`;
  }
}

function showLunchMenu() {
  if (lunches.length === 0) {
    return "The menu is empty.";
  } else {
    return `Menu items: ${lunches[0]}, ${lunches[1]}, ${lunches[2]}`;
  }
}
