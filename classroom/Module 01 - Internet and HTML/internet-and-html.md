🌐 Module 1: The Foundation (Internet & HTML)

Before writing code, you must understand the "Stage" where your code performs. According to your roadmap, we start with the Internet.

1. How does the Internet work?

Think of the Internet as a global network of cables.

    The Client: Your browser (Chrome, Safari). It "requests" data.

The Server: A computer somewhere else that "serves" the data.

HTTP/HTTPS: The language they use to talk to each other.

2. HTML: The Skeleton

HTML (HyperText Markup Language) is not a programming language; it is a markup language. It tells the browser what the content is (a heading, a paragraph, a button), but not how it looks or what it does.

Key Concept: Semantic HTML Instead of just using generic boxes (<div>), we use tags that have meaning. This is crucial for SEO (Search Engine Optimization) and Accessibility.

    <header>: For the top of the page.

    <nav>: For navigation links.

    <main>: For the primary content.

    <footer>: For the bottom information.

🛠️ Step-by-Step: Your First Implementation

We are going to create the basic structure for your future "Hero" project. We will call it "The DevHub"—a place that is part marketplace and part social network.

Goal: Create a valid HTML5 document with a semantic structure.

    Open VS Code.

    Create a folder named dev-hub.

    Create a file named index.html.

    Type ! and press Enter. This is an "Emmet" shortcut that generates the "Boilerplate" (the standard starting code).

The Code Explained

Here is how you should structure your first file. I have documented each part so you understand the "why":
HTML

<!DOCTYPE html> <html lang="en"> <head>

    <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>DevHub | The Fullstack Marketplace</title>

</head>
<body>

    <header>
        <h1>DevHub</h1>
        <nav>
            <ul>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Community Feed</a></li>
                <li><a href="#">My Profile</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="welcome">
            <h2>Welcome to the future of Dev-Social-Commerce</h2>
            <p>Connect with developers and buy/sell components.</p>
            <button type="button">Join the Community</button>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 DevHub Project</p>
    </footer>

</body>
</html>

🚀 Next Step

To move from "Zero" to "Hero," you must build muscle memory.

Your task: 1. Create the index.html file as shown above. 2. Inside the <main> tag, add a new <section> that represents a "Product Card" (for the E-commerce part) using an <h3> for the title, a <p> for the price, and a <button> to buy.
