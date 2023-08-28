document.addEventListener("keypress", function (e) {
  if (13 === e.keyCode || 13 === e.which) return e.preventDefault(), !1;
}),
  (window.onkeydown = function (e) {
    (8 == e.which || 46 == e.which) && (e.preventDefault(), alert(e.code));
  });
const form = document.querySelector("form"),
  input = document.createElement("input");
input.setAttribute("list", "years"),
  input.setAttribute("id", "yearsInput"),
  input.setAttribute("placeholder", "Click here"),
  form.appendChild(input);
const boxContainer = document.createElement("div");
boxContainer.setAttribute("class", "boxContainer");
const dataList = document.createElement("datalist");
dataList.setAttribute("id", "years");
for (let i = 1800; i <= 2311; i++) {
  let e = document.createElement("option");
  e.setAttribute("value", i), dataList.appendChild(e);
}
form.appendChild(dataList);
const inputSubmit = document.createElement("input");
inputSubmit.setAttribute("type", "submit"),
  inputSubmit.setAttribute("value", "Submit"),
  inputSubmit.setAttribute("id", "submit"),
  form.appendChild(inputSubmit);
const inputClear = document.createElement("input");
function calender() {
  let e = yearsInput.value;
  if (e >= 1800) {
    let t = document.createElement("h1");
    t.setAttribute("class", "head");
    let a = document.querySelector("body");
    t.textContent = new Date();
    let n = document.querySelector(".container");
    a.appendChild(t);
    let r = document.createElement("h2");
    (r.textContent = `${e}   Calender`), t.appendChild(r);
    for (let l = 0; l < 12; l++) {
      let d = 0,
        p,
        u,
        c,
        o,
        s,
        b,
        h,
        C = 0,
        m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        f = [
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
      switch (((objDates = []), (objDays = []), f[l])) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
          p = 31;
          break;
        case "April":
        case "June":
        case "September":
        case "November":
          p = 30;
          break;
        default:
          p = e % 2 == 0 ? 29 : 28;
      }
      for (u = m[(c = new Date(e, l, C + 1)).getDay()]; C < p; C++)
        (o = m[(c = new Date(e, l, C + 1)).getDay()]),
          (s = c.getDate()),
          (objDates[C] = s),
          (objDays[C] = o);
      let y = document.createElement("div");
      y.setAttribute("class", "box");
      let E = document.createElement("table"),
        A = document.createElement("tbody"),
        $ = document.createElement("h3"),
        v = document.createTextNode(f[l]);
      $.appendChild(v), y.appendChild($), (row = document.createElement("tr"));
      for (let x = 0; x < 7; x++) {
        let S = document.createElement("th"),
          _ = document.createTextNode(`${m[x]}`);
        S.appendChild(_), row.appendChild(S);
      }
      A.appendChild(row);
      for (let k = 0; k < 6; k++) {
        row = document.createElement("tr");
        for (let w = 0; d < p && w < 7; w++) {
          b = document.createElement("td");
          w < m.findIndex((e) => e == u) && 0 == k
            ? ((h = document.createTextNode("")),
              b.appendChild(h),
              row.appendChild(b))
            : ((h = document.createTextNode(objDates[d])),
              b.appendChild(h),
              row.appendChild(b),
              d++);
        }
        A.appendChild(row);
      }
      A.appendChild(row),
        E.appendChild(A),
        y.appendChild(E),
        boxContainer.appendChild(y),
        n.appendChild(boxContainer),
        a.appendChild(boxContainer);
    }
    let D = [];
    for (let L = 1800; L <= 2999; L++) D.push(L);
  } else window.alert("please enter a Year from the display years list ");
}
inputClear.setAttribute("value", "Clear"),
  inputClear.setAttribute("type", "button"),
  inputClear.setAttribute("id", "clear"),
  form.appendChild(inputClear),
  inputClear.addEventListener("click", function (e) {
    location.replace(location.href);
  }),
  inputSubmit.addEventListener("click", function (e) {
    calender(), e.preventDefault();
  });
