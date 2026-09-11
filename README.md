# CPCC Bites - Campus Food & Café

Welcome to the CPCC Bites website project repository!

CPCC Bites is a fictional campus restaurant website designed for college students, faculty, and staff. The website allows visitors to explore the menu, add food and drinks to a shopping cart, manage their order, and complete a simulated checkout without creating an account.

**Live Demo:**  
https://fahdiarra.github.io/cpcc-bites/

## Project Overview

**Project Name:** CPCC Bites - Campus Food & Café

**Target Audience:** College Students, Faculty, and Staff

**Goal:** Provide a simple, responsive, and user friendly campus food ordering experience.

**Access Level:** Public, no account required.

**Order Type:** Simulated online ordering experience.


## Site Architecture

The website consists of seven HTML pages connected through a global navigation system.

### index.html

The homepage introduces CPCC Bites and includes:

* Hero section
* Featured menu categories
* Popular food items
* Student meal special
* Benefits of CPCC Bites
* Campus location preview
* Navigation to the full menu
* Navigation to the ordering page
* Add to Cart buttons for featured food items

### pages/menu.html

The menu page displays food and drinks organized into six categories:

* Burgers
* Pizza
* Sandwiches
* Salads
* Drinks
* Desserts

Each menu item includes its name, description, price, image when available, and an Add to Cart button.

### pages/order.html

The order page provides the interactive shopping cart.

Users can:

* View items in their cart
* Increase item quantities
* Decrease item quantities
* Remove individual items
* View the subtotal
* View the 8.25% tax
* Select a tip amount
* Enter a name for the order
* View the final total
* Complete a simulated checkout
* Receive an order confirmation
* Receive a randomly generated order number

The shopping cart uses browser localStorage to save cart information.

### pages/about.html

The About page provides information about CPCC Bites, its background, mission, and campus focused food concept.

### pages/locations.html

The Locations page provides information about CPCC Bites campus locations and operating hours.

### pages/contact.html

The Contact page provides a contact form for visitors to send questions, comments, or feedback.

The form uses JavaScript to display a success message and reset the form after submission.

### pages/faq.html

The FAQ page provides answers to common questions about CPCC Bites, ordering, menu options, pickup, and restaurant policies.

## Color Palette

The project uses a warm and welcoming color palette designed for a campus food and café experience.

| Palette Role | Color Name | Hex Code |
| :--- | :--- | :--- |
| Background | Warm Off White | `#FFF8F0` |
| Primary | Dark Red | `#7A1F1F` |
| Secondary | Warm Orange | `#F4A261` |
| Text | Dark Gray | `#292929` |
| Accent | Teal | `#2A9D8F` |

## Features

### Responsive Design

* Responsive layout for desktop, tablet, and mobile devices
* Mobile navigation menu
* Flexible food and category grids
* Responsive ordering interface
* Page specific CSS files

### Shopping Cart

The website includes a client side shopping cart system.

Users can:

* Add products to the cart
* Remove products
* Increase quantities
* Decrease quantities
* View the number of items in the cart
* View the current cart total
* Save cart information using localStorage

### Checkout System

The checkout process includes:

* Customer name input
* Tip selection
* Subtotal calculation
* 8.25% tax calculation
* Final total calculation
* Checkout validation
* Processing feedback
* Order confirmation modal
* Random six digit order number
* Order date and time
* Order summary

The checkout is simulated and does not process real payments.

### Contact Form

The contact page includes a client side contact form.

When the form is submitted:

1. The default form submission is prevented.
2. A success message is displayed.
3. The form is reset.

### Mobile Navigation

The website includes a mobile navigation menu that can be opened and closed using dedicated buttons.

### Dynamic Footer Year

The footer automatically displays the current year using JavaScript.

## JavaScript Functionality

### scripts/main.js

The main JavaScript file handles:

* Mobile navigation
* Contact form submission
* Dynamic footer year
* Shopping cart initialization
* Adding products
* Removing products
* Cart item count
* Cart total calculation
* Saving cart data to localStorage

### scripts/cart-actions.js

The cart actions handle:

* Cart item rendering
* Quantity controls
* Item removal
* Subtotal calculation
* 8.25% tax calculation
* Tip selection
* Final total calculation
* Checkout validation
* Checkout processing
* Random order number generation
* Order confirmation modal
* Clearing the cart after checkout

## Data Storage

CPCC Bites does not use a backend database.

The shopping cart is stored in the browser using localStorage.

This allows cart information to remain available while navigating between the website pages.

## Built With

* HTML5
* CSS3
* JavaScript ES6