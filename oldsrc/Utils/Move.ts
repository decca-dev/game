import { char } from "../Types/CharType";

const BLOCKED_L = [0, 15, 30, 45, 60, 75, 90, 105];
const BLOCKED_R = [14, 29, 44, 59, 74, 89, 104, 119];

export const move = (oldIndex: number, direction: char): number => {
  let newIndex: number = 0;
  switch (direction) {
    case "u":
      if (oldIndex - 15 < 0) {
        console.log("Cannot move to that space!");
        newIndex = oldIndex;
      } else {
        newIndex = oldIndex - 15;
      }
      break;
    case "d":
      if (oldIndex + 15 > 119) {
        console.log("Cannot move to that space!");
        newIndex = oldIndex;
      } else {
        newIndex = oldIndex + 15;
      }
      break;
    case "l":
      if (BLOCKED_L.includes(oldIndex)) {
        console.log("Cannot move to that space!");
        newIndex = oldIndex;
      } else {
        newIndex = oldIndex - 1;
      }
      break;
    case "r":
      if (BLOCKED_R.includes(oldIndex)) {
        console.log("Cannot move to that space!");
        newIndex = oldIndex;
      } else {
        newIndex = oldIndex + 1;
      }
      break;

    default:
      break;
  }
  return newIndex;
};
