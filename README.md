# 🕐 Digital Clock Screensaver

An elegant digital clock screensaver built with Electron. Perfect for multi-monitor setups!

## ✨ Features

- 🖥️ **Multi-monitor support** - Works on all connected screens
- 🎨 **Beautiful gradient background** - Blue to purple gradient
- ⏰ **12h/24h time format** - Switchable with toggle
- 📺 **Fullscreen screensaver** - No window decorations
- ⌨️ **ESC to exit** - Safe and easy to close
- 🔄 **Real-time updates** - Second precision

## 🖼️ Preview

The clock displays on your primary screen with:
- Large, clear time display
- Green colored digits with glow effect
- Transparent background with backdrop blur
- Toggle for 12h/24h format with AM/PM indicator

Other screens show the same gradient background for a cohesive look.

## 🚀 Installation & Setup

### Requirements
- Node.js (version 14 or higher)
- npm

### Getting Started
```bash
# Clone the repository
git clone https://github.com/your-username/digital-clock.git
cd digital-clock

# Install dependencies
npm install

# Run in development mode
npm start
```

### Building for Production
```bash
# Build executable for Windows
npm run build
```

After building, you'll find the executable in the `dist/` folder:
- 📁 Navigate to `dist/` folder
- 🚀 Look for `Digital Clock Screensaver.exe`
- 💡 **Tip**: Create a desktop shortcut for easy access!

## ⌨️ Usage

- **ESC** - Close the screensaver
- **Toggle switch** - Switch between 12h/24h format
- **Automatic** - Updates every second

## 🛠️ Technical Details

- **Framework**: Electron
- **Languages**: HTML, CSS, JavaScript
- **Styling**: CSS Grid & Flexbox
- **Animations**: CSS transitions
- **Cross-platform**: Windows, macOS, Linux

## 📁 Project Structure

```
digital-clock/
├── main.js              # Electron main process
├── src/                 # Source files
│   ├── index.html       # Clock interface
│   ├── script.js        # Clock logic  
│   └── style.css        # Styling
├── assets/              # Media files
├── package.json         # Dependencies
└── README.md           # This file
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report issues
- Make feature requests  
- Open pull requests

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Made by Claeys Maxim