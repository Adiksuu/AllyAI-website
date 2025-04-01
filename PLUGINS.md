## Creating Custom Plugins for the AllyAI Website

To extend the capabilities of the AllyAI website, you can create your own plugins. A basic understanding of JavaScript is required. Below is a plugin configuration template and an explanation of each parameter.

```javascript
const pluginConfig = {
    name: "", // Set the plugin name, must be unique
    version: "1.0.0", // Set the plugin version
    description: "", // Plugin description
    runPathname: "", // Default "" - run on all pages. Set to specific pathname to run on that page only
    executePlugin: () => {
        // Set the plugin function to run
    }
};
  
export default pluginConfig; // Export the plugin configuration
```

### Parameter Description:

*   **`name`**: The name of the plugin. Must be unique within the AllyAI plugin ecosystem.
*   **`version`**: The version of the plugin (e.g., "1.0.0"). Used to denote successive plugin updates.
*   **`description`**: Plugin description. It should clearly state what the plugin does and what features it offers.
*   **`runPathname`**: Determines on which pages the plugin will run. Defaults to `""` (an empty string), which means the plugin will run on all pages. You can set a specific pathname to have the plugin run only on that one page.
*   **`executePlugin`**: The function that contains the plugin code. This is where you put the logic you want to run on the page.

### Plugin Publication

After writing and testing your plugin, you can publish it by sending it to the email address: codeadiksuu@gmail.com
