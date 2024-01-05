/**
 * Fetches content from an external HTML file and appends a specific div to a target div in the current document.
 * @param {string} component - The URL of the HTML file to import content from.
 * @param {string} targetDivId - The ID of the target div in the current document.
 */
function importComponent(component, targetDivId) {
    fetch(component)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const externalDoc = parser.parseFromString(html, 'text/html');
            const importedContent = externalDoc.getElementById('divToImport');

            if (!importedContent) {
                throw new Error(`The div with id divToImport was not found in the fetched content.`);
            }

            const targetDiv = document.getElementById(targetDivId);

            if (!targetDiv) {
                throw new Error(`The target div with id "${targetDivId}" was not found in the current document.`);
            }

            targetDiv.appendChild(importedContent);
        })
        .catch(error => console.error('Error:', error));
}