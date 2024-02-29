/**
 * Fetches content from an external HTML file and appends a specific div to a target div in the current document.
 * @param {string} component - The URL of the HTML file to import content from.
 * @param {string} targetDivId - The ID of the target div in the current document.
 */
function importComponent(component, targetDivId) {
    fetch(component)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then((html) => {
            const parser = new DOMParser();
            const externalDoc = parser.parseFromString(html, 'text/html');
            const importedContent = externalDoc.getElementById('sourceDiv');

            if (!importedContent) {
                throw new Error(
                    `The div with id divToImport was not found in the fetched content.`
                );
            }

            const targetDiv = document.getElementById(targetDivId);

            if (!targetDiv) {
                throw new Error(
                    `The target div with id "${targetDivId}" was not found in the current document.`
                );
            }

            targetDiv.appendChild(importedContent);
        })
        .catch((error) => console.error('Error:', error));
}

function generateProgressItems(containerId, items) {
    // Get the container where you want to append the items
    var container = document.getElementById(containerId);

    // Check if container exists
    if (!container) {
        console.error('Container with id "' + containerId + '" not found.');
        return;
    }

    // Loop through each item in the array
    items.forEach(function (item) {
        // Destructure the name and percentage from the item tuple
        var [name, percentage] = item;

        // Create the 'item' div
        var itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        // Create the inner HTML of the item div using a template string
        itemDiv.innerHTML = `
          <h5>${name}</h5>
          <div class="progress-area">
              <div class="progress-bar">
                  <div class="progress" style="width: ${percentage}%"></div>
              </div>
          </div>
      `;

        // Append the item div to the container
        container.appendChild(itemDiv);
    });
}
