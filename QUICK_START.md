# 🎮 QUICK START - For Complete Beginners!

**Never coded before? No problem! Follow these simple steps.**

---

## ⚡ 3 Steps to Your Own Game

### Step 1: Get the Files ✅

**Option A - If you have a GitHub account:**
1. Click the green "Use this template" button at the top
2. Give your game a name
3. Click "Create repository"
4. Download your new repository to your computer

**Option B - No GitHub account:**
1. Click the green "Code" button
2. Click "Download ZIP"
3. Unzip the folder on your computer

---

### Step 2: Edit Your Game Story 📝

1. Find the file called `game-config.json`
2. Open it with any text editor (Notepad, TextEdit, etc.)
3. Change the text to tell YOUR story!

**What to Change:**
- Replace "Pranoy" with your name
- Change the level titles (like "World 1: Your Beginning")
- Write your own stories
- Move items by changing the numbers

**Important:** Don't delete any `{`, `}`, `[`, `]`, `,` or `:` symbols!

---

### Step 3: Run Your Game 🎯

**First Time Only:**

1. Install Node.js from https://nodejs.org (click the big green button)
2. Open Terminal (Mac) or Command Prompt (Windows)
3. Type: `cd ` (with a space after cd)
4. Drag your game folder into the terminal window
5. Press Enter
6. Type: `npm install`
7. Press Enter and wait (this might take a minute)

**Every Time You Want to Play:**

1. Open Terminal/Command Prompt
2. Navigate to your game folder (steps 2-5 above)
3. Type: `npm run dev`
4. Press Enter
5. Open your web browser and go to: `http://localhost:5173`

**🎉 Your game is running!**

---

## 📖 Reading the Config File

The `game-config.json` file has a simple structure:

```
{
  "gameInfo": {
    "characterName": "YourName" ← Change this!
  },

  "levels": [
    {
      "title": "World 1: Your Title" ← Change this!
      "story": "Your story here..." ← Change this!
      "items": [
        {
          "name": "Achievement Name" ← Change this!
          "position": {"x": 50, "y": 40} ← Change numbers to move item!
        }
      ]
    }
  ]
}
```

---

## 🎨 Simple Customization Tips

### Moving Items
- **x** = left to right (0 to 100)
  - 0 = far left
  - 50 = middle
  - 100 = far right

- **y** = top to bottom (0 to 100)
  - 0 = very top
  - 50 = middle
  - 100 = bottom (on ground)

### Example:
```json
"position": {"x": 25, "y": 60}
```
This means: "put item on the left side, a bit above ground"

---

## 🎨 Colors Made Simple

Want to change level colors? Use this format:
```json
"backgroundColors": {
  "from": "blue-400",
  "to": "blue-700"
}
```

**Color Words:** red, orange, yellow, green, blue, indigo, purple, pink, gray
**Numbers:** 300 (light), 500 (medium), 700 (dark)

**Examples:**
- Sunset: `"from": "orange-400"` and `"to": "pink-600"`
- Ocean: `"from": "blue-300"` and `"to": "blue-800"`
- Forest: `"from": "green-400"` and `"to": "green-700"`

---

## 🆘 Common Problems

### "npm: command not found"
→ You need to install Node.js first (see Step 3 above)

### Game won't start
→ Make sure you ran `npm install` first

### Changed config but nothing happens
→ Refresh your browser (press F5)

### Broke the game file
→ Check you didn't delete any `{`, `}`, `,`, or `:` symbols
→ You can always download a fresh copy!

### Game looks weird
→ Make sure all your `{` have matching `}`
→ Every line except the last one in each section needs a `,` at the end

---

## 📱 Playing on Phone

Once your game is running:
1. Find your computer's IP address
2. On your phone, go to: `http://YOUR-IP:5173`
3. Touch controls appear automatically!

---

## 💾 Sharing Your Game

Want to share your game online?

**Free hosting options:**
1. **Netlify** - Easiest! Drag and drop the `dist` folder
2. **Vercel** - Great for GitHub users
3. **GitHub Pages** - Free with GitHub account

Search Google for "deploy vite app to [service name]" for instructions!

---

## 🎓 Want to Learn More?

- Check `TEMPLATE_README.md` for detailed instructions
- Look at the `examples/` folder for inspiration
- Search YouTube for "How to edit JSON files" for video tutorials

---

## ✨ You Got This!

Remember:
- Start small - change one thing at a time
- Save your file before testing
- It's okay to make mistakes - you can always undo!
- Have fun telling your story!

**Now go create something amazing! 🚀**

---

## 🎮 Controls

**On Computer:**
- Arrow Left/Right = Move
- Arrow Up or Space = Jump

**On Phone/Tablet:**
- Touch controls appear automatically
- Tap buttons to move and jump

---

**Questions? The `TEMPLATE_README.md` has more detailed help!**
