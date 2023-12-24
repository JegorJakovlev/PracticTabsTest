function openTab(tabName) {
    const tabs = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("show");
    }
  
    const buttons = document.getElementsByClassName("tab");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected");
    }
  
    const tabContent = document.getElementById(tabName);
    const tabButton = document.querySelector(`button[onclick="openTab('${tabName}')"]`);
  
    tabContent.classList.add("show");
    tabButton.classList.add("selected");
  
    const indicator = document.querySelector(".indicator");
    indicator.style.width = tabButton.offsetWidth + "px";
    indicator.style.marginLeft = tabButton.offsetLeft + "px";
  }
  