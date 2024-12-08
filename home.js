// Start recommendation process with an alert
function startRecommendation() {
    alert("Let's find your perfect makeup match!");
}

// Display uploaded image
function displayImage() {
    const photoUpload = document.getElementById("photoUpload");
    const uploadedImage = document.getElementById("uploadedImage");

    if (photoUpload.files && photoUpload.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = "block";
        };
        reader.readAsDataURL(photoUpload.files[0]);
    }
}

// Find matches based on selected brand
function findMatches() {
    const brand = document.getElementById("brandSelect").value;
    const matchesSection = document.getElementById("matchesSection");
    const matchesContainer = document.getElementById("matchesContainer");

    if (!brand) {
        alert("Please select a brand.");
        return;
    }

    // Sample data for demonstration (replace with actual data fetching in a real app)
    const matches = [
        { shade: "Almond", brand: "GRWM", image: "images/GRWM-Cosmetics-Radiance-Tint-Multiuse-Base_Almond.PNG", link:"https://grwmcosmetics.com.ph/products/radiance-tint-multiuse-base?variant=45537799438637",   name: "Radiance Tint Multiuse Base Almond" },
        { shade: "Beige", brand: "GRWM", image: "images/GRWM-Cosmetics-Radiance-Tint-Multiuse-Base_Beige.PNG", link: "https://grwmcosmetics.com.ph/products/radiance-tint-multiuse-base?variant=49824351191341", name: "Radiance Tint Multiuse Base Beige" },
        { shade: "Butterscotch", brand: "BLK", image: "images/blk-airy-matte-cushion-foundation_Butterscotch.webp", link: "https://blkcosmetics.com.ph/products/blk-airy-matte-cushion-foundation?_pos=1&_sid=58ceef031&_ss=r&variant=47606419292463", name: "Airy Matte Cushion Foundation Butterscotch" }
    ];

    // Clear previous matches
    matchesContainer.innerHTML = "";

    // Display each match
    matches.forEach((match) => {
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match");

        matchDiv.innerHTML = `
            <div class="match-image">
                <img src="${match.image}" alt="Product Image">
            </div>
            <div class="match-details">
                <h3>${match.name}</h3>
                <p>Shade: ${match.shade}</p>
                <p>Brand: ${match.brand}</p>
                <button class="btn" onclick="viewProductImage('${match.image}')">View Product</button>
                <button class="btn" onclick="viewProductLink('${match.link}')">
                    <img src="images/cart.png" alt="Product Icon" style="width: 20px; height: 20px; vertical-align: middle;">
                </button>
            </div>
        `;
        matchesContainer.appendChild(matchDiv);
    });

    // Show matches section
    matchesSection.style.display = "block";
}

// Display product image in a modal
function viewProductImage(imageSrc) {
    // Create modal overlay
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.onclick = function () {
        document.body.removeChild(modal);
    };

    // Create image element
    const image = document.createElement("img");
    image.src = imageSrc;
    image.className = "modal-image";

    // Append image to modal and modal to body
    modal.appendChild(image);
    document.body.appendChild(modal);
}

// Redirect to the product link
function viewProductLink(link) {
    window.open(link, "_blank");
}

