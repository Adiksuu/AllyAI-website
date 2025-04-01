const pluginConfig = {
    name: "Premium sidebar", // Set the plugin name, must be unique
    version: "1.0.0", // Set the plugin version
    description: "Change the sidebar to the premium version of Ally", // Plugin description
    runPathname: "", // Default "" - run on all pages. Set to specific pathname to run on that page only
    executePlugin: () => {
        // Set the plugin function to run
        const interval = setInterval(() => {
            const sidebar = document.querySelector(".sidebar");
            if (!sidebar) return
            sidebar.querySelector('.top').querySelector('h1').innerHTML = `AllyAI <span style="font-size: 12px; color: #fff000">premium</span>`
            clearInterval(interval)
        }, 0)
    }
};
  
export default pluginConfig; // Export the plugin configuration