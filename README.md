# RecipeBook

A Recipe Book Application built with React that allows users to add, view, categorize, filter, mark recipes as favourites, and delete them. The app uses localStorage to persist data even after refreshing the page.

## Features

### 1. **Recipe Management**
- **Add New Recipe**: Users can add a new recipe by providing the following details:
  - **Title** (required, string)
  - **Ingredients** (required, string)
  - **Instructions** (required, text area)
  - **Category** (dropdown with options like “Breakfast”, “Lunch”, “Dinner”, “Dessert”)

### 2. **Recipe List and Details**
- **View Recipe Details**: When a user clicks on a recipe, the app displays detailed information such as ingredients, instructions, and options to mark it as a favourite or delete it.
- **Recipe List**: Displays all saved recipes in a list format, showing the title, category, and a thumbnail image.

### 3. **Favourite Recipes**
- **Mark as Favourite**: Users can mark recipes as favourites. Favourite recipes are visually distinct in the list, making them easy to access.

### 4. **Filtering and Searching**
- **Filter by Category**: Users can filter recipes by selecting a category such as "Breakfast," "Lunch," "Dinner," or "Dessert."
- **Search by Title**: A search bar allows users to filter recipes by typing part of the title.

### 5. **Recipe Deletion**
- **Delete Recipe**: Users can delete a recipe from the list, ensuring that only the recipes they want to keep remain in the app.

### 6. **Persistence with Local Storage**
- **Local Storage**: Recipes and their favourite status are saved in localStorage, ensuring that the data persists even after a page refresh.

### 7. **User Notifications**
- **User-Friendly Messages**: The app provides feedback with notifications for actions like "Recipe added," "Recipe deleted," and "Marked as favourite."

### 8. **Responsive Design**
- The app is styled with a responsive design, making it user-friendly on both desktop and mobile devices.

### 9. **CSS Styling**
- **Distinctive Styling for Favourite Recipes**: Favourites are highlighted with a distinct style to make them easily recognizable.
- **Organized Layout**: The app features a clean, well-organized layout for the form, recipe list, and other sections.

## Installation

To get started with the RecipeBook project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/RecipeBook.git
