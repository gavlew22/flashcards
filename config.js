// config.js

const shareLink = "https://docs.google.com/spreadsheets/d/1ElrM2sxrpWyzkyOOzKHYewR-UcZX6xY7XasxmH5hbaI/edit?usp=sharing";
const sheetIdMatch = shareLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
const sheetId = sheetIdMatch ? sheetIdMatch[1] : null;
const sheetName = "Flashcards";
const sheetJsonUrl = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;
