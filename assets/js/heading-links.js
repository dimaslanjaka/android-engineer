const headings = document.querySelectorAll("h2[id],h3[id]"); // 1
const linkContent = `<i class="fa-duotone fa-link" style="margin-right: 0.2em;"></i>`; // 2
for (const heading of headings) {
	// 3
	const linkIcon = document.createElement("a"); // 4
	const canonicalUrl = window.location.href.split("#")[0];
	linkIcon.setAttribute("href", `${canonicalUrl}#${heading.id}`); // 5
	linkIcon.innerHTML = linkContent; // 6
	// Insert the link icon before the heading text
	heading.insertBefore(linkIcon, heading.firstChild); // 7

	// Add click event listener to copy the href to clipboard
	linkIcon.addEventListener("click", function (event) {
		// event.preventDefault(); // Prevent the default action of the link
		const href = linkIcon.getAttribute("href"); // Get the href attribute

		// Check if Clipboard API is available
		if (navigator.clipboard) {
			copyToClipboard(href);
		} else {
			copyToClipboardFallback(href);
		}
	});
}

// Function to display snackbar toast
function showSnackbar(message) {
	const snackbar = document.getElementById("snackbar");
	snackbar.textContent = message;
	snackbar.className = "snackbar show";
	setTimeout(function () {
		snackbar.className = snackbar.className.replace("show", "");
	}, 3000);
}

// Function to copy text to clipboard using Clipboard API
function copyToClipboard(text) {
	return navigator.clipboard
		.writeText(text)
		.then(() => {
			showSnackbar("Link copied to clipboard");
			// You can add further visual feedback here if needed
		})
		.catch((error) => {
			console.error("Failed to copy link to clipboard:", error);
			// You can handle errors here
		});
}

// Function to copy text to clipboard using fallback method
function copyToClipboardFallback(text) {
	const textArea = document.createElement("textarea");
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);

	showSnackbar("[fallback] Link copied to clipboard");
	// You can add further visual feedback here if needed
}
