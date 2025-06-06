# Spell & Learn Adventure

A fun, browser-based spelling game for kids, built with React and Tailwind CSS. Spell words by typing and earn rewards as you progress!

---

## Features

- **Keyboard Input:**
  - Enter your spelling using the keyboard.
- **Rewards System:**
  - Earn XP for correct answers.
  - Unlock stickers, badges, and companion avatars as you progress.
- **Friendly UI:**
  - Colorful avatars and icons.
  - Responsive design with Tailwind CSS.
  - Accessible controls and feedback.
- **Progress Persistence:**
  - Your progress is saved in localStorage.
- **No Build Tools Needed:**
  - All code is inlined in `main.html` and runs directly in the browser with `<script type="text/babel">`.

---

## Getting Started

### 1. Clone or Download

Download or clone this repository to your local machine.

### 2. Open in Browser

Simply open `main.html` in your web browser. No build step or server required.

---

## File Structure

- `main.html`
  The entire app is inlined here for browser compatibility. Contains all React components, logic, and styles.
- `types.js`, `icons.js`, `Avatar.js`, `DrawingCanvas.js`, `constants.js`, `spelling.js`
  (Not used in the browser version, but provided for modularity if you want to refactor for a build process.)

---

## How to Play

1. **Start the Game:**
   - Click "Start Spelling!" on the welcome screen.
2. **Type the Word:**
   - Listen to the word, then type it using your keyboard.
   - Click "Submit" when done.
3. **Get Feedback:**
   - See if you spelled the word correctly and earn XP!
   - Unlock new rewards as you progress.
4. **Complete All Words:**
   - Try to finish the word list and collect all rewards!

---

## Customization & Development

- **Add More Words:**
  - Edit the `WORD_LIST` array in `main.html`.
- **Add Rewards:**
  - Edit the `REWARDS` array in `main.html`.
- **Modularize the Code:**
  - If you want to use a build process, split the code into the provided JS files and use ES module imports.

---

## Accessibility & Browser Support

- **Keyboard Input:**
  - Works in all modern browsers.
- **Touch Support:**
  - The UI is responsive for tablets and phones.

---

## Known Limitations

- All progress is stored in localStorage and is browser-specific.

---

## License

This project is provided for educational and personal use. See LICENSE for details.

---

## Credits

- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/).
- SVG icons from [Heroicons](https://heroicons.com/) and custom designs.
- Pikachu character is a fan art representation for educational purposes only.

---

## Contributing

Pull requests and suggestions are welcome! If you modularize or improve the game, feel free to share your changes.
