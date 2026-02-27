document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  // // ===== CREATE INPUT =====
  // const input = document.createElement("input");
  // input.type = "number";
  // input.id = "yearsInput";
  // input.placeholder = "Enter year (1800+)";
  // input.min = "1800";
  // input.required = true;
  // form.appendChild(input);
  // ===== SUBMIT BUTTON =====
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.id = "submit";
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  // ===== CLEAR BUTTON =====
  const clearBtn = document.createElement("button");
  clearBtn.type = "button";
  clearBtn.id = "clear";
  clearBtn.textContent = "Clear";
  form.appendChild(clearBtn);

  // ===== OUTPUT CONTAINER =====
  const output = document.createElement("div");
  output.id = "calendarOutput";
  document.querySelector(".container").appendChild(output);

  // ===== FORM SUBMIT EVENT =====
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    generateCalendar();
  });

  clearBtn.addEventListener("click", function () {
    output.innerHTML = "";
    input.value = "";
  });

  // ===== MAIN FUNCTION =====
  function generateCalendar() {
    const year = parseInt(document.getElementById("yearsInput").value);

    if (!year || year < 1800) {
      alert("Please enter a valid year (1800 or above)");
      return;
    }

    output.innerHTML = "";

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let month = 0; month < 12; month++) {
      const box = document.createElement("div");
      box.className = "box";

      const title = document.createElement("h3");
      title.textContent = months[month] + " " + year;
      box.appendChild(title);

      const table = document.createElement("table");
      const tbody = document.createElement("tbody");

      // HEADER ROW
      const headerRow = document.createElement("tr");
      days.forEach((day) => {
        const th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
      });
      tbody.appendChild(headerRow);

      const firstDay = new Date(year, month, 1).getDay();
      const totalDays = new Date(year, month + 1, 0).getDate();

      let row = document.createElement("tr");

      // EMPTY CELLS BEFORE FIRST DAY
      for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
      }

      // DATES
      for (let date = 1; date <= totalDays; date++) {
        if (row.children.length === 7) {
          tbody.appendChild(row);
          row = document.createElement("tr");
        }

        const td = document.createElement("td");
        td.textContent = date;
        row.appendChild(td);
      }

      tbody.appendChild(row);
      table.appendChild(tbody);
      box.appendChild(table);
      output.appendChild(box);
    }
  }
});
