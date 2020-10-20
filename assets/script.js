let timeBlk = $(".time-block");
let hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]; 
let m = moment();

$("#currentDay").text(m.format("dddd MMM Mo YYYY"));

//Populates page with time blocks
for (let i = 0; i < 9; i++) {
  let div = "<div id='" + i + "' class='row'></div>";
  $("div.container").append(div);

  let hour = "<p class='hour'>" + hours[i] + "</p>";

  let input;
  if ( i + 9 < m.format("H")) {
    input = "<input class='text-center past time-block"+i+"'></input>";
  } else if ( i + 9 === Math.floor(m.format("H"))) {
    input = "<input class='text-center present time-block"+i+"'></input>";
  } else {
    input = "<input class='text-center future time-block"+i+"'></input>";
  }

  let btn = "<button class='saveBtn"+i+"'>Save</button>";

  $("#" + i).append(hour, input, btn);
}
function saveTimeBlock () {
  noteSave = $('input').prev()
  note = noteSave.text()
  console.log(note)

}
$('button').on('click', saveTimeBlock)