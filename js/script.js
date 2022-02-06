const root = document.getElementById("root");

const allItems = fetch("https://restcountries.com/v3.1/all");

const list = document.createElement("ol");
allItems
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const newData = data
      //   .filter((item) => {
      //     return item.name.common === "Armenia";
      //   })
      .map((item) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.innerText = item.name.common;
        link.setAttribute("href", "http://google.com");
        link.style = "text-decoration:none;color:black";
        li.append(link);
        list.append(li);
      });
    root.append(list);
  });
