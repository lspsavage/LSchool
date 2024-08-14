// Inisialisasi Dark Mode
const initDarkMode = () => {
  const storedTheme = localStorage.getItem("theme");
  const isDarkMode = storedTheme === "dark";

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Update ikon setelah dark mode diterapkan
  updateIcons(isDarkMode);
};

// Update ikon berdasarkan mode saat ini
const updateIcons = (isDarkMode) => {
  const iconLight = document.getElementById("icon-light");
  const iconDark = document.getElementById("icon-dark");

  if (iconLight && iconDark) {
    if (isDarkMode) {
      iconLight.classList.remove("hidden");
      iconDark.classList.add("hidden");
    } else {
      iconLight.classList.add("hidden");
      iconDark.classList.remove("hidden");
    }
  }
};

// Toggle dark mode
const toggleDarkMode = () => {
  const isDarkMode = document.documentElement.classList.toggle("dark");

  // Simpan status dark mode ke localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Update ikon setelah dark mode di-toggle
  updateIcons(isDarkMode);
};

// Mengakses Side bar
fetch("sidebar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("sidebar").innerHTML = data;

    // Perbarui ikon di sidebar sesuai dengan mode saat ini
    const storedTheme = localStorage.getItem("theme");
    const isDarkMode = storedTheme === "dark";
    updateIcons(isDarkMode);

    // Event listener untuk tombol toggle di sidebar
    const modeToggleButton = document.getElementById("modeToggle");
    if (modeToggleButton) {
      modeToggleButton.addEventListener("click", toggleDarkMode);
    }

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
  });

// Setup awal ketika halaman dimuat
document.addEventListener("DOMContentLoaded", initDarkMode);

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
