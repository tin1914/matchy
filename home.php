<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matchy Matchy</title>
    <link rel="stylesheet" href="home.css">
</head>
<body>
<header>
    <section class="nav ul">
        <div class="container2" id="navbar">
            <a href="home.php">
                <img src="images/matchy-matchy logo.png" class="logo">
                <img src="images/pngegg.png" ahref="facebook.com" class="socmed">
            </a>
        </div>
    </section>
</header>

<section class="hero">
    <div class="container">
        <h2>Find the best</h2> 
        <h1>make-up shade</h1> 
        <h2>for you!</h2>
        <input type="file" accept="image/*" id="photoUpload" style="display: none;" onchange="displayImage()">
        <button class="btn" onclick="document.getElementById('photoUpload').click();">Get Started</button>
    </div>
</section>
    
<section class="steps">
    <div class="container step-container">
        <div class="step">
            <h2>STEP 1</h2>
            <h3>Upload your Photo</h3>
            <div class="upload-photo">
                <input type="file" accept="image/*" id="photoUpload" style="display: none;" onchange="displayImage()">
                <button class="btn" onclick="document.getElementById('photoUpload').click();">Upload</button>
            </div>
            <img id="uploadedImage" style="display: none; width: 150px; margin-top: 10px;" alt="Uploaded Preview">
        </div>
        
        <div class="step">
            <h2>STEP 2</h2>
            <h3>Select a specific brand</h3>
            <select id="brandSelect">
                <option value="brand1">GRWM</option>
                <option value="brand2">Colourette Cosmetics</option>
                <option value="brand3">Issy & Co.</option>
                <option value="brand4">BLK</option>
                <option value="brand5">Ever Bilena</option>
                <option value="brand6">Happy Skin</option>
                <option value="brand7">Vice Cosmetics</option>
            </select>
            <br>
            <button class="btn" onclick="findMatches()">Find my best matches</button>
        </div>
    </div>
</section>

<section class="matches" id="matchesSection" style="display: none;">
    <div class="container">
        <h2>HERE ARE YOUR BEST MATCHES</h2>
        <div id="matchesContainer">
            <!-- Product cards will be dynamically added here by JavaScript -->
        </div>
    </div>
</section>

<footer>
    <div class="container">
        <p>&copy; <?php echo date("Y"); ?> Matchy-Matchy. All rights reserved.</p>
    </div>
</footer>

<script src="home.js"></script>
</body>
</html>
