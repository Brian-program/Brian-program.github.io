// Function to open a specific tab content
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Deactivate all tab buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the selected tab content and mark the button as active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
  
  

function getRandomPercentage() {
  // Generate random percentage between -25 and 25
  return (Math.random() * 50 - 25).toFixed(2);
}

function updatePercentageBasedOnDirection(isUp) {
  const percentageElement = document.querySelector('.percentage');
  
  // Generate a percentage value based on the arrow's direction
  let newValue;
  if (isUp) {
    newValue = (Math.random() * 25).toFixed(2); // Positive values (0 to 25%)
  } else {
    newValue = (Math.random() * -25).toFixed(2); // Negative values (-25% to 0)
  }

  // Update the percentage text
  percentageElement.textContent = `${newValue}%`;

  // Change color based on value (green for positive, red for negative)
  percentageElement.style.color = isUp ? 'green' : 'red';
}

// This function syncs the arrow movement (up or down) with the percentage update
function syncWithArrow() {
  let isUp = false; // Start with the arrow pointing up

  // Set interval to update based on the CSS keyframe timing (5 seconds)
  setInterval(() => {
    updatePercentageBasedOnDirection(isUp);
    
    // Toggle the arrow's direction
    isUp = !isUp;
  }, 2500); // 2500ms for half of the animation cycle (to match arrow direction change)
}

// Start syncing when the page loads
syncWithArrow();


// By default, open the Home tab
document.getElementById("Home").style.display = "block";
document.querySelector('.tablinks').className += " active";