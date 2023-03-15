const schedule = [
    {
        day: "Monday",
        activities: [
            {
                time: "7:30 PM - 8:30 PM",
                description: "Python fundamentals"
            },
            {
                time: "8:30 PM - 9:30 PM",
                description: "Odoo framework - Introduction and basics"
            },
            {
                time: "9:30 PM - 10:30 PM",
                description: "Gaming"
            }
        ]
    },
    {
        day: "Tuesday",
        activities: [
            {
                time: "7:30 PM - 8:30 PM",
                description: "C++ fundamentals"
            },
            {
                time: "8:30 PM - 9:30 PM",
                description: "JavaScript fundamentals"
            },
            {
                time: "9:30 PM - 10:30 PM",
                description: "Gaming"
            }
        ]
    },
    {
        day: "Wednesday",
        activities: [
            {
                time: "7:30 PM - 8:30 PM",
                description: "Python intermediate"
            },
            {
                time: "8:30 PM - 9:30 PM",
                description: "Odoo framework - Development of basic modules"
            },
            {
                time: "9:30 PM - 10:30 PM",
                description: "Gaming"
            }
        ]
    },
    {
        day: "Thursday",
        activities: [
            {
                time: "7:30 PM - 8:30 PM",
                description: "C++ intermediate"
            },
            {
                time: "8:30 PM - 9:30 PM",
                description: "JavaScript intermediate"
            },
            {
                time: "9:30 PM - 10:30 PM",
                description: "Gaming"
            }
        ]
    },
    {
        day: "Friday",
        activities: [
            {
                time: "7:30 PM - 8:30 PM",
                description: "Python advanced"
            },
            {
                time: "8:30 PM - 9:30 PM",
                description: "Odoo framework - Development of complex modules"
            },
            {
                time: "9:30 PM - 10:30 PM",
                description: "Gaming"
            }
        ]
    },
    {
day: "Saturday",
activities: [
{
time: "10:00 AM - 11:00 AM",
description: "Python intermediate review"
},
{
time: "11:00 AM - 12:00 PM",
description: "C++ intermediate review"
},
{
time: "12:00 PM - 1:00 PM",
description: "JavaScript intermediate review"
},
{
time: "1:00 PM - 2:00 PM",
description: "Break"
},
{
time: "2:00 PM - 3:00 PM",
description: "Odoo framework - Review of custom modules and workflows"
},
{
time: "3:00 PM - 4:00 PM",
description: "Personal project time"
},
{
time: "4:00 PM - 5:00 PM",
description: "Gaming"
}
]
},
    {
day: "Sunday",
activities: [
{
time: "10:00 AM - 11:00 AM",
description: "Python intermediate review"
},
{
time: "11:00 AM - 12:00 PM",
description: "C++ intermediate review"
},
{
time: "12:00 PM - 1:00 PM",
description: "JavaScript intermediate review"
},
{
time: "1:00 PM - 2:00 PM",
description: "Break"
},
{
time: "2:00 PM - 3:00 PM",
description: "Odoo framework - Review of custom modules and workflows"
},
{
time: "3:00 PM - 4:00 PM",
description: "Personal project time"
},
{
time: "4:00 PM - 5:00 PM",
description: "Gaming"
}
]
}
];
function clearDates() {
  let calendarBody = document.querySelector('#calendar-body');
  calendarBody.innerHTML = '';

  let row = document.createElement('tr');
  row.classList.add(`row-0`);

  for (let j = 0; j < 7; j++) {
    let col = document.createElement('td');
    col.classList.add(`col-${j}`);
    col.classList.add('date-cell');
    row.appendChild(col);
  }

  calendarBody.appendChild(row);
}

// Function to display the schedule in the calendar
function displaySchedule() {
clearDates();

for (let i = 0; i < 7; i++) {
    let dateCell = document.querySelector(`.row-${Math.floor(i / 7)} .col-${i % 7}`);

let activities = schedule[i].activities;
for (let j = 0; j < activities.length; j++) {
  let activity = `<p><strong>${activities[j].time}:</strong><br></br> ${activities[j].description}</p>`;
  dateCell.innerHTML += activity;
}
}
}
displaySchedule();