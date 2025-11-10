# 🎮 Super Mario Game Template - Ready to Use!

**This is your starter template to create your own Super Mario-style platformer game!**

Everything you need is right here - just customize and go!

---

## 🚀 Getting Started (3 Easy Steps!)

### Step 1: Copy This Template
```bash
# Download or copy this entire 'template' folder to your computer
# You can rename it to whatever you want!
```

### Step 2: Install and Run
```bash
# First time only - install dependencies
npm install

# Run your game!
npm run dev
```

Then open `http://localhost:5173` in your browser!

### Step 3: Customize Your Story
Edit the `constants.ts` file and change:
- Level titles and stories
- Item names and positions
- Background colors
- Add/remove levels

**That's it! No coding knowledge required!**

---

## 📚 Documentation

This template includes complete guides:

### **For Complete Beginners:**
📖 **[QUICK_START.md](QUICK_START.md)** - Never coded before? Start here!

### **For Everyone:**
🎨 **[HOW_TO_CUSTOMIZE.md](HOW_TO_CUSTOMIZE.md)** - Step-by-step customization guide

### **For Detailed Instructions:**
📚 **[TEMPLATE_README.md](TEMPLATE_README.md)** - Full documentation

### **For Inspiration:**
💡 **[examples/](examples/)** - Pre-made themes (fitness, career, love story)

---

## 🎨 What's Included

```
template/
├── README.md                  ← You are here!
├── QUICK_START.md             ← Beginner's guide
├── HOW_TO_CUSTOMIZE.md        ← Customization instructions
├── TEMPLATE_README.md         ← Full documentation
│
├── constants.ts               ← ⭐ EDIT THIS FILE! Your game content
├── App.tsx                    ← Main game logic (no need to edit)
├── types.ts                   ← TypeScript types (no need to edit)
├── index.tsx                  ← Entry point (no need to edit)
├── index.html                 ← HTML template (no need to edit)
│
├── components/                ← Game components (no need to edit)
│   ├── StartScreen.tsx
│   ├── GameScreen.tsx
│   ├── EndScreen.tsx
│   ├── Icons.tsx
│   └── ...
│
├── utils/                     ← Sound utilities (no need to edit)
│   └── sounds.ts
│
├── examples/                  ← Example game configurations
│   ├── fitness-journey-example.json
│   ├── career-journey-example.json
│   ├── love-story-example.json
│   └── README.md
│
├── package.json               ← Dependencies (no need to edit)
├── tsconfig.json              ← TypeScript config (no need to edit)
├── vite.config.ts             ← Build config (no need to edit)
└── .gitignore                 ← Git ignore file (no need to edit)
```

**You only need to edit `constants.ts`!** Everything else works automatically.

---

## ✏️ Quick Customization Examples

### Change a Level Story
Open `constants.ts` and find:
```typescript
title: 'World 1: The Beginning',
story: 'This is where your journey starts!',
```

Change to your story:
```typescript
title: 'World 1: My First Day',
story: 'I started my new job at a tech company!',
```

### Move an Item
Find:
```typescript
position: { top: '50%', left: '30%' }
```

Change the numbers (0-100):
```typescript
position: { top: '70%', left: '80%' }  // Now on the right side, lower down!
```

### Change Background Color
Find:
```typescript
backgroundClass: 'bg-gradient-to-b from-blue-400 to-blue-700',
```

Change the colors:
```typescript
backgroundClass: 'bg-gradient-to-b from-pink-400 to-purple-700',
```

---

## 🎮 Game Controls

**Desktop:**
- ⬅️ ➡️ Arrow keys to move
- ⬆️ Arrow up or Space to jump

**Mobile:**
- Touch controls appear automatically!

---

## 🎨 Perfect For:

- 🎂 Birthday gifts
- 💑 Wedding presents
- 🎓 Graduation celebrations
- 🏆 Career milestones
- 💪 Fitness journeys
- 🎉 Any personal story!

---

## 📱 Features

- ✅ Works on desktop and mobile
- ✅ Touch controls for phones/tablets
- ✅ Sound effects and background music
- ✅ Beautiful gradient backgrounds
- ✅ Smooth animations and physics
- ✅ Fully customizable
- ✅ No coding required!

---

## 🌟 Share Your Game

Want to share your game online? Deploy for free on:
- **[Netlify](https://netlify.com)** - Easiest! Just drag & drop
- **[Vercel](https://vercel.com)** - Great for GitHub users
- **[GitHub Pages](https://pages.github.com)** - Free hosting

Just run `npm run build` first to create the shareable version!

---

## 🆘 Need Help?

### Quick Fixes:
- **Game won't start?** Run `npm install` first
- **Changes not showing?** Refresh your browser (F5)
- **Errors in console?** Check for missing commas or brackets in `constants.ts`

### Documentation:
- **[QUICK_START.md](QUICK_START.md)** - Complete beginner's guide
- **[HOW_TO_CUSTOMIZE.md](HOW_TO_CUSTOMIZE.md)** - Step-by-step instructions
- **[examples/](examples/)** - Working examples for inspiration

---

## 💡 Pro Tips

1. **Start small** - Edit one level first to get comfortable
2. **Test often** - Save and refresh after each change
3. **Use examples** - Check the `examples/` folder for ideas
4. **Copy & paste** - Duplicate existing levels/items to add new ones
5. **Have fun!** - This is YOUR story - make it unique!

---

## 🎯 Next Steps

1. ✅ Run `npm install` (first time only)
2. ✅ Run `npm run dev` to start the game
3. ✅ Read **[QUICK_START.md](QUICK_START.md)** or **[HOW_TO_CUSTOMIZE.md](HOW_TO_CUSTOMIZE.md)**
4. ✅ Edit `constants.ts` with your story
5. ✅ Play your custom game!
6. ✅ Share it with someone special!

---

## 📜 License

Free to use for personal projects!

---

## 💖 About

Originally created as a bachelor party gift, now available as a template for everyone to create their own personalized games!

**Now go create something amazing! 🚀**

---

**Questions? Check the documentation files or look at the examples folder!**
