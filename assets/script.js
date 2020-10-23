let hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
let m = moment();

$("#currentDay").text(m.format("dddd LL"));

//Populates page with time blocks
for (let i = 0; i < 9; i++) {
  let div = "<div id='" + i + "' class='row'></div>";
  $("div.container").append(div);

  let hour = `<p id='p-${i}' class='hour'>${hours[i]}</p>`;

  let input;
  let fillInput = getInput("input-" + i);
  if (i + 9 < m.format("H")) {
    input = `<input id='input-${i}' type='text' class='text-center past time-block'>`;
  } else if (i + 9 === Math.floor(m.format("H"))) {
    input = `<input id='input-${i}' type='text' class='text-center present time-block'>`;
  } else {
    input = `<input id='input-${i}' type='text' class='text-center future time-block'>`;
  }

  let btn = `<button id='button-${i}' class='saveBtn'>Save</button>`;

  $("#" + i).append(hour, input, btn);
  $("#input-" + i).val(fillInput);
}

//Finds sibling input
function saveTimeBlock() {
  pairInp = $(this).prev();
  noteSave = pairInp[0];
  note = noteSave.value;
  inpId = noteSave.getAttribute("id");
  noteStor(inpId, note);
}

//Stores input
function noteStor(a, b) {
  localStorage.setItem(a, b);
}

//Retrieves input
function getInput(a) {
  let index = new String(a);
  let input = localStorage.getItem(index);
  return input;
}

$("button").on("click", saveTimeBlock);
