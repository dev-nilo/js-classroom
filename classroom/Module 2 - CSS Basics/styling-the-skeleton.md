🎨 Module 2: Styling the Skeleton (CSS Basics)

Now that we have the "bones" (HTML), we need "skin and clothes" (CSS). According to the roadmap, after learning HTML, the next step is CSS. CSS stands for Cascading Style Sheets. It allows you to create layouts and add colors.

1. How to Link CSS

There are three ways to add CSS, but professionals use External CSS. It keeps your code clean.

    In your dev-hub folder, create a new file named style.css.

    Inside your index.html, inside the <head> tag, add this line: <link rel="stylesheet" href="style.css">

2. The Anatomy of a CSS Rule

To style something, you must select it and then declare the property and value.
CSS

selector {
property: value;
}

3. The Box Model (Crucial Concept)

Every element in HTML is a rectangular box. Understanding how these boxes are sized is the "Hero" secret to fixing layout issues.

    Content: The text or image.

    Padding: Space inside the box (between the content and the border).

    Border: The line around the padding.

    Margin: Space outside the box (between this box and other boxes).

🛠️ Step-by-Step: Styling your Product Card

Let's make that "Product Card" look professional. Follow these steps in your style.css file:

Step 1: Set a Global Font We want the whole page to look modern.
CSS

body {
font-family: Arial, sans-serif;
line-height: 1.6;
background-color: #f4f4f4; /_ Light grey background _/
margin: 0;
}

Step 2: Style the Header Let's give the top of your site some "Startup" personality.
CSS

header {
background: #333; /_ Dark background _/
color: #fff; /_ White text _/
padding: 1rem;
text-align: center;
}

nav ul {
list-style: none; /_ Removes the dots from the list _/
padding: 0;
}

nav ul li {
display: inline; /_ Puts the menu items side-by-side _/
margin-right: 15px;
}

nav ul li a {
color: #fff;
text-decoration: none; /_ Removes the underline from links _/
}

Step 3: Style the Product Card We will use the Box Model here to make it stand out.
CSS

#product-card {
background: white;
padding: 20px;
margin: 20px;
border-radius: 8px; /_ Rounded corners _/
box-shadow: 0 4px 8px rgba(0,0,0,0.1); /_ Subtle shadow _/
width: 300px; /_ Fixed width for the card _/
}

#product-card h3 {
margin-top: 0;
color: #333;
}

button {
background-color: #28a745; /_ "Success" Green color _/
color: white;
border: none;
padding: 10px 20px;
cursor: pointer; /_ Shows the "hand" icon on hover _/
border-radius: 5px;
}

button:hover {
background-color: #218838; /_ Darker green when hovering _/
}

🚀 Next Step

    Create the style.css file.

    Link it to your index.html.

    Apply the styles above.

    Challenge: Try to change the background-color of the button to a "Social Media" Blue (like #007bff) and see how it looks
