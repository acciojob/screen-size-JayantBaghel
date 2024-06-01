// script.js

// Function to update the size information
function updateSizeInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfoDiv = document.getElementById('sizeInfo');
    
    sizeInfoDiv.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}

// Initial call to display the size when the page loads
updateSizeInfo();

// Event listener to update the size information on window resize
window.addEventListener('resize', updateSizeInfo);
