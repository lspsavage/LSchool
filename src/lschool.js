// Mengakses Side bar
fetch("sidebar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("sidebar").innerHTML = data;

    // Dropdown
    document.getElementById("orders-button").addEventListener("click", function (e) {
      e.stopPropagation();
      const menu = document.getElementById("orders-menu");
      menu.classList.toggle("hidden");
    });

    window.addEventListener("click", function (e) {
      const menu = document.getElementById("orders-menu");
      const menuButton = document.getElementById("orders-button");
      if (!menuButton.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add("hidden");
      }
    });

    // Dark Mode
    const toggleDarkMode = () => {
      document.documentElement.classList.toggle("dark");

      // Toggle the visibility of the icons
      const iconLight = document.getElementById("icon-light");
      const iconDark = document.getElementById("icon-dark");

      if (document.documentElement.classList.contains("dark")) {
        iconLight.classList.remove("hidden");
        iconDark.classList.add("hidden");
      } else {
        iconLight.classList.add("hidden");
        iconDark.classList.remove("hidden");
      }
    };

    // Initial setup based on the current mode
    const initDarkMode = () => {
      const iconLight = document.getElementById("icon-light");
      const iconDark = document.getElementById("icon-dark");

      if (document.documentElement.classList.contains("dark")) {
        iconLight.classList.remove("hidden");
        iconDark.classList.add("hidden");
      } else {
        iconLight.classList.add("hidden");
        iconDark.classList.remove("hidden");
      }
    };

    document.getElementById("modeToggle").addEventListener("click", toggleDarkMode);
    document.addEventListener("DOMContentLoaded", initDarkMode);
  });

// Copy Code
function copyCode() {
  const codeBlock = document.getElementById("code-block");
  const textArea = document.createElement("textarea");
  textArea.value = codeBlock.textContent;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    document.execCommand("copy");
    showNotification("Code copied to clipboard");
  } catch (err) {
    console.error("Failed to copy code:", err);
  }

  document.body.removeChild(textArea);
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg";
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
}

// Dark Mode
// const toggleDarkMode = () => {
//   document.documentElement.classList.toggle("dark");
// };
