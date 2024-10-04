# CodeAlpha-Task1-ImageGallery
 
*** 1. HTML File (index.html): ***
 - The file starts with a simple HTML structure and includes references to a CSS file (styles.css) and a JavaScript file (script.js).
 - The header section displays the title of the page, "Gallery of Wonders."
 - A div with the class categories contains filter buttons like All, Buildings, Sky, Cars, Fruits to filter images by category.
 - The gallery section contains multiple div elements, each representing a gallery item. These items belong to different categories (e.g., Buildings, Sky, Cars, Fruits) and contain image elements along with titles and descriptions stored in data-title and data-description attributes.
 - A modal is defined for displaying images when clicked, allowing users to see a larger version with details like title and description. The modal also includes Next and Previous buttons for navigating through images.

*** 2. CSS File (styles.css): ***
 - The page uses a clean and minimalistic design. A background image (White-background.jpeg) is applied across the body to give a soft background effect.
 - The filter buttons are styled to look modern with rounded corners, shadows, and hover effects.
 - When hovered, the buttons change the background color and expand slightly for a dynamic effect.
 - The gallery items are arranged in a flexible grid layout with image hover effects. The hover state enlarges the images slightly, adding a shadow for emphasis.
 - The modal that displays the clicked image covers the entire screen, with the image centred. It also includes a caption and description section below the image, and a close button (X) that allows users to exit the modal.
 - Navigation buttons for the modal are styled as left and right arrows to move between images.

*** 3. JavaScript File (script.js): ***
 - The JavaScript starts by adding an event listener to ensure the DOM is fully loaded before interacting with elements.
 - The script sets up filter buttons to display only the images of the selected category. When a user clicks a filter button, the images that belong to that category are displayed, and others are hidden.
 - The modal functionality is set up to display the clicked image along with its title and description. The user can close the modal by clicking on the close button.
 - Next and Previous buttons allow users to navigate between images within the modal. Keyboard navigation using Arrow keys is also implemented for convenience.
 - The filterImages function is used to display only the relevant images based on the category selected by the user, making the gallery interactive.
 
*** Key Features: ***
 *-* Responsive design: The layout adjusts for different screen sizes, providing a mobile-friendly experience.
 *-* Interactive filtering: Users can filter images by category (Buildings, Sky, Cars, Fruits) and view only the images they are interested in.
 *-* Modal Image Viewer: Clicking on an image opens it in a larger view with additional information, and users can navigate through images without closing the modal.
