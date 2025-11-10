# 🎨 How to Customize Your Game

**The Easy Way - Edit One File!**

Everything you need to customize is in **`constants.ts`** - let's make it easy!

---

## 📁 The File You Need to Edit

Open `constants.ts` - this is where all your game content lives!

---

## ✏️ What to Customize (Step by Step)

### 1️⃣ Change Level Stories

Find this part in `constants.ts`:

```typescript
{
  id: 1,
  title: 'World 1: The Petro-Path',  ← Change this title!
  story: "Pranoy's journey begins...",  ← Change this story!
```

**Just change the text between the quotes!**

### 2️⃣ Move Items Around

Find the `items` section:

```typescript
items: [
  {
    id: 'gauge1',
    name: 'Critical Gauge',  ← Change the name!
    Icon: GaugeIcon,
    position: { top: '50%', left: '80%' }  ← Change positions!
  },
```

**Position Guide:**
- `top`:
  - '20%' = near top of screen
  - '50%' = middle
  - '80%' = near bottom (ground level is around '85%')
- `left`:
  - '20%' = far left
  - '50%' = center
  - '80%' = far right

### 3️⃣ Change Background Colors

```typescript
backgroundClass: 'bg-gradient-to-b from-yellow-600 to-yellow-800',
```

Change the color words:
- First color: `from-yellow-600` → change 'yellow' to any color
- Second color: `to-yellow-800` → change 'yellow' to any color

**Available Colors:**
red, orange, yellow, green, teal, blue, indigo, purple, pink, gray

**Color Numbers (darkness):**
- 300 = light
- 500 = medium
- 700 = dark
- 900 = very dark

### 4️⃣ Add or Remove Items

**To Remove an Item:**
Delete the entire block:
```typescript
{ id: 'item-name', name: 'Item', Icon: SomeIcon, position: { top: '50%', left: '50%' } },
```

**To Add an Item:**
Copy an existing item and paste it, then change:
- `id` to something unique
- `name` to your item name
- Keep the same `Icon` or choose from available icons (see below)
- Change `position` values

### 5️⃣ Available Icons

You can use these icons (already imported at the top):

**Achievements:**
- `MicrosoftIcon` - Tech achievement
- `AmazonIcon` - Another achievement
- `DiplomaIcon` - Graduation
- `GaugeIcon` - Progress/milestone
- `AssignmentIcon` - Task completed
- `PassportIcon` - Travel/experience
- `RingIcon` - Special moment

**People:**
- `SrishtiIcon` - Important person
- `FriendsIcon` - Support group

**Objects:**
- `CarIcon` - Vehicle
- `HouseIcon` - Home
- `SoapIcon` - Habit
- `SeaplaneIcon` - Adventure
- `PhotographerIcon` - Memory keeper
- `MemoryIcon` - Special memory
- `HingeIcon` - Relationship

**Enemies/Obstacles:**
- `SugarRushIcon` - Bad habit (use with `isEnemy: true`)
- `SadFaceIcon` - Setback (use with `isObstacle: true`)
- `PotholeIcon` - Obstacle (use with `isObstacle: true`)

### 6️⃣ Add/Remove Levels

**To Remove a Level:**
Delete the entire level block (from `{` to `}`)

**To Add a Level:**
Copy an existing level, paste it, and change:
- `id` (must be unique number)
- `title`
- `story`
- `backgroundClass`
- All items

---

## 🎯 Examples

### Example 1: Change a Level Title & Story

**Before:**
```typescript
title: 'World 1: The Petro-Path',
story: "Pranoy's journey begins in Abu Dhabi!",
```

**After:**
```typescript
title: 'World 1: My First Job',
story: "I started my career at a tech startup!",
```

### Example 2: Move an Item

**Before:**
```typescript
position: { top: '50%', left: '80%' }
```

**After (move to left side, higher up):**
```typescript
position: { top: '30%', left: '25%' }
```

### Example 3: Change Background Color

**Before:**
```typescript
backgroundClass: 'bg-gradient-to-b from-yellow-600 to-yellow-800',
```

**After (ocean theme):**
```typescript
backgroundClass: 'bg-gradient-to-b from-blue-300 to-blue-700',
```

### Example 4: Add a Moving Enemy

```typescript
{
  id: 'my-enemy',
  name: 'Bad Habit',
  Icon: SugarRushIcon,
  position: { top: '65%', left: '50%' },
  isEnemy: true,
  movement: { type: 'horizontal', range: [30, 70] }
},
```

The `range: [30, 70]` means it moves between 30% and 70% horizontally!

### Example 5: Add a Static Obstacle

```typescript
{
  id: 'my-obstacle',
  name: 'Roadblock',
  Icon: PotholeIcon,
  position: { top: '80%', left: '60%' },
  isObstacle: true
},
```

---

## ⚠️ Important Rules

1. **Don't delete commas!** Each item needs a `,` at the end (except the last one)
2. **Keep the brackets!** Every `{` needs a matching `}`
3. **Keep quotes matched!** Every `'` or `"` needs a closing one
4. **IDs must be unique!** No two items can have the same `id`
5. **Save the file** before testing!

---

## 🧪 Test Your Changes

After editing `constants.ts`:

1. Save the file
2. If the game is running, it should auto-refresh
3. If not, run `npm run dev` again

---

## 🆘 Broke Something?

If your game won't load:

1. Check the terminal/console for error messages
2. Look for red squiggly lines in your editor
3. Common fixes:
   - Add missing commas
   - Match all brackets `{ }`
   - Match all quotes `' '` or `" "`
   - Make sure all IDs are unique

**Pro tip:** Use VS Code - it will highlight errors for you!

---

## 💡 Pro Tips

1. **Start small** - Change one thing at a time
2. **Test often** - Save and check after each change
3. **Copy & paste** - Duplicate existing items to add new ones
4. **Use comments** - Add `//` before text to make notes:
   ```typescript
   // This is my favorite level!
   title: 'World 5: Best Level',
   ```

---

## 🎨 Color Scheme Ideas

**Sunrise:**
```typescript
from-orange-300 to-yellow-500
```

**Sunset:**
```typescript
from-orange-400 to-pink-600
```

**Ocean:**
```typescript
from-blue-300 to-blue-800
```

**Forest:**
```typescript
from-green-400 to-green-800
```

**Night:**
```typescript
from-indigo-700 to-purple-900
```

**Romance:**
```typescript
from-pink-400 to-purple-500
```

**Professional:**
```typescript
from-gray-600 to-gray-900
```

---

## 📚 Need More Help?

- Check the existing levels in `constants.ts` for examples
- Look at `examples/` folder for inspiration (convert those ideas to constants.ts format)
- The structure is consistent - once you change one level, the rest are the same!

---

**You got this! Go customize your game! 🚀**

---

## 🎮 Quick Reference

**File to edit:** `constants.ts`

**Run game:** `npm run dev`

**Common positions:**
- Ground level: `top: '85%'`
- Air (for jumping): `top: '50%'` to `top: '30%'`
- Left side: `left: '20%'`
- Center: `left: '50%'`
- Right side: `left: '80%'`

**Color format:** `bg-gradient-to-b from-COLOR-NUMBER to-COLOR-NUMBER`

**Done? Save, refresh, and play!** ✨
