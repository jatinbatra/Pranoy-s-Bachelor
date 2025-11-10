# 🎮 Super Mario Game Template

## ✨ Create Your Own Super Mario-Style Game in Minutes!

This template lets **anyone** create their own Super Mario-style platformer game - **no coding required**! Just edit a simple configuration file and tell your own story!

---

## 🎯 Perfect For:

- 🎂 Birthday gifts or wedding presents
- 📖 Telling your life story in a fun way
- 🎓 Graduation journeys
- 💑 Love stories and proposals
- 🏆 Career achievements
- 🎉 Any personal journey you want to gamify!

---

## 🚀 Quick Start (3 Simple Steps!)

### Step 1: Get the Template
1. Click the green "Use this template" button on GitHub (or download the code)
2. Give your game a name (e.g., "super-maria-game", "johns-journey")

### Step 2: Customize Your Game
1. Open the `game-config.json` file
2. Edit the text to tell your story:
   - Change the character name
   - Write your level stories
   - Position items where you want them
   - Choose background colors

### Step 3: Run Your Game!
```bash
npm install
npm run dev
```
Open your browser and play your custom game!

---

## 📝 How to Customize (No Coding Needed!)

### Change the Character Name
Find this section in `game-config.json`:
```json
"characterName": "Pranoy"
```
Change "Pranoy" to any name you want!

### Edit Level Stories
Each level has a `story` field. Just change the text:
```json
{
  "title": "World 1: My Beginning",
  "story": "Write your own story here! This is where your journey starts...",
}
```

### Move Items Around
Items use a simple position system (0-100):
- **x**: 0 = far left, 100 = far right
- **y**: 0 = top of screen, 100 = bottom

```json
{
  "name": "My Achievement",
  "icon": "microsoft",
  "position": {"x": 50, "y": 30}  ← Change these numbers!
}
```

### Change Background Colors
Pick any color from the list at the bottom of the config:
```json
"backgroundColors": {
  "from": "pink-400",     ← Top color
  "to": "purple-800"      ← Bottom color
}
```

Available colors: red, orange, yellow, green, teal, blue, indigo, purple, pink, gray
Available shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

---

## 🎨 Available Icons

Choose from these icons for your items:

### Achievements
- `microsoft` - Tech achievement
- `amazon` - Another achievement
- `diploma` - Graduation or certification
- `gauge` - Progress or milestone
- `assignment` - Completed task
- `passport` - Travel or new experience
- `ring` - Engagement or special moment

### People
- `srishti` - Important person (can rename)
- `friends` - Group of supportive people

### Objects
- `car` - Vehicle or transportation
- `house` - Home or living space
- `soap` - Cleanliness or habit
- `seaplane` - Adventure or special event
- `photographer` - Memory or documentation
- `memory` - Special memory
- `hinge` - Dating or relationship

### Obstacles/Enemies
- `sugar` - Bad habit (moves around)
- `sad` - Setback (stays in place)
- `pothole` - Obstacle to avoid

---

## 🎮 Creating Different Types of Items

### Regular Item (to collect)
```json
{
  "id": "unique-id",
  "name": "My Achievement",
  "type": "achievement",
  "icon": "diploma",
  "position": {"x": 50, "y": 40}
}
```

### Moving Enemy
```json
{
  "id": "enemy1",
  "name": "Bad Habit",
  "type": "enemy",
  "icon": "sugar",
  "position": {"x": 50, "y": 60},
  "isEnemy": true,
  "movement": {
    "type": "horizontal",
    "minX": 30,    ← Left boundary
    "maxX": 70     ← Right boundary
  }
}
```

### Static Obstacle
```json
{
  "id": "obstacle1",
  "name": "Setback",
  "type": "obstacle",
  "icon": "sad",
  "position": {"x": 40, "y": 50},
  "isObstacle": true
}
```

---

## 📚 Example Game Ideas

### 1. **Graduation Journey**
- World 1: Freshman year
- World 2: Declaring your major
- World 3: Landing an internship
- World 4: Final projects
- World 5: Graduation!

### 2. **Career Path**
- World 1: First job
- World 2: Learning new skills
- World 3: Big promotion
- World 4: Starting a business
- World 5: Success!

### 3. **Love Story**
- World 1: Meeting
- World 2: First date
- World 3: Adventures together
- World 4: The proposal
- World 5: Wedding

### 4. **Fitness Journey**
- World 1: Starting to work out
- World 2: Eating healthier (avoid junk food enemies!)
- World 3: Running first 5K
- World 4: Joining a gym
- World 5: Marathon completed!

---

## 🎵 Sound Effects

The game includes fun sound effects:
- Jumping
- Collecting items
- Hitting obstacles
- Level completion
- Background music

These play automatically - no configuration needed!

---

## 📱 Mobile Friendly

The game works on:
- 💻 Desktop computers (use arrow keys to move, up/space to jump)
- 📱 Mobile phones (touch controls appear automatically)
- 📲 Tablets

---

## 🆘 Need Help?

### Common Issues

**Q: My game won't start**
A: Make sure you ran `npm install` first!

**Q: I changed the config but nothing happened**
A: Refresh your browser or restart the dev server

**Q: I want to add more levels**
A: Copy and paste an existing level in `game-config.json` and change the `id` number

**Q: Can I add my own images?**
A: This template uses emoji/icon-based graphics. For custom images, you'll need some coding knowledge (or ask a developer friend!)

**Q: How do I share my game?**
A: You can deploy it free on Netlify, Vercel, or GitHub Pages!

---

## 🎨 Advanced Customization (Optional)

Want to add your own icons or change game mechanics? Check out these files:
- `components/Icons.tsx` - Add new icons
- `constants.ts` - Game physics and mechanics
- `App.tsx` - Core game logic

---

## 🌟 Share Your Creation!

Made something cool? Share it!
- Tag us on social media
- Create a demo video
- Gift it to someone special

---

## 📜 License

This template is free to use for personal projects. Create as many games as you want!

---

## 💖 Credits

Original game created for Pranoy's bachelor party
Template created to help everyone tell their stories through games

**Now go create something amazing!** 🚀

---

## ⚡ Quick Reference

### File to Edit
📄 `game-config.json` - Everything you need to customize

### Commands
```bash
npm install          # First time setup
npm run dev          # Start the game
npm run build        # Create shareable version
```

### Position Guide
```
     0 ← x → 100
   0 ┌───────────┐
   ↕ │           │
   y │   GAME    │
   ↕ │   AREA    │
 100 └───────────┘
```

### Color Examples
- Sunny: `yellow-300` to `orange-500`
- Ocean: `blue-300` to `blue-700`
- Sunset: `orange-400` to `pink-600`
- Forest: `green-400` to `green-800`
- Night: `indigo-600` to `purple-900`
- Romance: `pink-400` to `purple-500`

---

**Happy game creating! 🎮✨**
