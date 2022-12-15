const btn = document.querySelector('.changeColorBtn');

// extension popup tab + (console)
btn.addEventListener('click', async () => {
   
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // executeScript => to inject script in any tab
    chrome.scripting.executeScript( {
        target: { tabId: tab.id },
        function: pickColor,
    });
})

// this function run in the web tabs (output in console)
async function pickColor() {
    try {
        // EyeDropper api from browser
        const eyeDropper = new EyeDropper();
        const selectedColor = await eyeDropper.open(); // return selected color
        
        console.log(selectedColor);
    }
    catch(err) {
        console.error(err);
    }
  
}