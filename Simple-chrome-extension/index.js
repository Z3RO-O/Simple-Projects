async function sayHello() {
    let [tab] = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            document.body.innerHTML = "<h1>Hello World</h1>";
            alert("Hello World");
        }
    });
}

document.getElementById("button").addEventListener("click", sayHello);