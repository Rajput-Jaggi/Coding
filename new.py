print("Hello")
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }

        section {
            padding: 20px;
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

        form {
            max-width: 400px;
            margin: 0 auto;
        }

        label {
            display: block;
            margin-bottom: 8px;
        }

        input, textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            box-sizing: border-box;
        }

        button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }
        nav {
            background-color: #4caf50;
            overflow: hidden;
            display: flex;
            justify-content: flex-end;
        }

        nav a {
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        nav a:hover {
            background-color: #ddd;
            color: black;
        }
        

    </style>
</head>
<body>
        <nav>
            <a href="index.html" onclick="openTab('portfolio')">Home</a>
            <a href="stock.html" onclick="openTab('stocks')">Stocks</a>
            <a href="#" onclick="openTab('buy')">Buy</a>
            <a href="contact.html" onclick="openTab('sell')">contact us</a>
            
        </nav>
    

    <section id="contact">
        <h2 style="text-align: center; background-color:#333; color:#ddd">Get in Touch</h2>
        <form>
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </section>

    <footer>
        <div>
            <p>&copy; 2023 Online Trading App</p>
            <p>Contact: info@tradingapp.com</p>
        </div>
    </footer>

</body>
</html>
