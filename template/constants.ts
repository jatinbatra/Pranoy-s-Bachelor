import { LevelData } from './types';
import { MicrosoftIcon, HingeIcon, CarIcon, AmazonIcon, HouseIcon, RingIcon, DiplomaIcon, MemoryIcon, SadFaceIcon, FriendsIcon, GaugeIcon, SoapIcon, SugarRushIcon, BrainTrustIcon, PassportIcon, PotholeIcon, AssignmentIcon, SrishtiIcon, SeaplaneIcon, PhotographerIcon } from './components/Icons';

// 🎮 CUSTOMIZE YOUR GAME HERE! 🎮
// This file contains all your game levels, stories, and items.
// Follow the examples below and change them to tell YOUR story!

export const LEVELS: LevelData[] = [
  {
    id: 1,
    title: 'World 1: The Beginning',
    story: 'This is where your journey starts! Replace this text with the beginning of your story.',
    backgroundClass: 'bg-gradient-to-b from-blue-400 to-blue-700',
    items: [
      {
        id: 'first-achievement',
        name: 'First Achievement',
        Icon: GaugeIcon,
        position: { top: '50%', left: '30%' }
      },
      {
        id: 'second-achievement',
        name: 'Second Achievement',
        Icon: GaugeIcon,
        position: { top: '40%', left: '70%' }
      },
    ]
  },

  {
    id: 2,
    title: 'World 2: New Challenges',
    story: 'Your journey continues! Add your second chapter here. Maybe you faced some challenges?',
    backgroundClass: 'bg-gradient-to-b from-green-400 to-teal-600',
    items: [
      {
        id: 'good-habit',
        name: 'Good Habit',
        Icon: SoapIcon,
        position: { top: '60%', left: '25%' }
      },
      {
        id: 'another-achievement',
        name: 'Another Achievement',
        Icon: AssignmentIcon,
        position: { top: '45%', left: '65%' }
      },
      {
        id: 'first-obstacle',
        name: 'A Challenge',
        Icon: SugarRushIcon,
        position: { top: '70%', left: '45%' },
        isEnemy: true,
        movement: { type: 'horizontal', range: [30, 60] } // This enemy moves left and right!
      }
    ]
  },

  {
    id: 3,
    title: 'World 3: Big Milestone',
    story: 'Something important happened! Describe a major achievement or turning point in your story.',
    backgroundClass: 'bg-gradient-to-b from-purple-400 to-indigo-700',
    items: [
      {
        id: 'support',
        name: 'Support from Friends',
        Icon: FriendsIcon,
        position: { top: '65%', left: '20%' }
      },
      {
        id: 'big-achievement',
        name: 'Major Achievement!',
        Icon: MicrosoftIcon,
        position: { top: '35%', left: '75%' }
      },
    ]
  },

  {
    id: 4,
    title: 'World 4: Important Person',
    story: 'Did someone special enter your life? Or maybe you reached a personal goal? Tell that story here!',
    backgroundClass: 'bg-gradient-to-b from-pink-400 to-rose-600',
    items: [
      {
        id: 'new-connection',
        name: 'New Connection',
        Icon: HingeIcon,
        position: { top: '45%', left: '35%' }
      },
      {
        id: 'special-person',
        name: 'Someone Special',
        Icon: SrishtiIcon,
        position: { top: '55%', left: '70%' }
      },
    ]
  },

  {
    id: 5,
    title: 'World 5: Growth and Adventure',
    story: 'New experiences and adventures! What exciting things happened next in your journey?',
    backgroundClass: 'bg-gradient-to-b from-yellow-400 to-orange-600',
    items: [
      {
        id: 'new-skill',
        name: 'New Skill Learned',
        Icon: CarIcon,
        position: { top: '70%', left: '25%' }
      },
      {
        id: 'adventure',
        name: 'Adventure',
        Icon: PassportIcon,
        position: { top: '40%', left: '60%' }
      },
      {
        id: 'companion',
        name: 'Journey Companion',
        Icon: SrishtiIcon,
        position: { top: '35%', left: '45%' }
      },
      {
        id: 'roadblock',
        name: 'Obstacle',
        Icon: PotholeIcon,
        position: { top: '80%', left: '55%' },
        isObstacle: true // Static obstacle to avoid!
      },
    ]
  },

  {
    id: 6,
    title: 'World 6: Overcoming Setbacks',
    story: 'Not everything goes perfectly. How did you handle challenges and come out stronger?',
    backgroundClass: 'bg-gradient-to-b from-gray-500 to-slate-700',
    items: [
      {
        id: 'setback',
        name: 'A Setback',
        Icon: SadFaceIcon,
        position: { top: '55%', left: '50%' },
        isObstacle: true
      },
      {
        id: 'support-system',
        name: 'Support System',
        Icon: SrishtiIcon,
        position: { top: '35%', left: '25%' }
      },
      {
        id: 'perseverance',
        name: 'Perseverance',
        Icon: AssignmentIcon,
        position: { top: '45%', left: '75%' }
      },
      {
        id: 'friends-help',
        name: 'Friends Helping',
        Icon: FriendsIcon,
        position: { top: '70%', left: '40%' }
      },
    ]
  },

  {
    id: 7,
    title: 'World 7: Success and Achievement',
    story: 'Hard work pays off! What success or achievement are you proud of?',
    backgroundClass: 'bg-gradient-to-b from-emerald-400 to-teal-700',
    items: [
      {
        id: 'big-success',
        name: 'Major Success',
        Icon: AmazonIcon,
        position: { top: '40%', left: '60%' }
      },
      {
        id: 'new-chapter',
        name: 'New Chapter Begins',
        Icon: HouseIcon,
        position: { top: '65%', left: '30%' }
      }
    ]
  },

  {
    id: 8,
    title: 'World 8: The Big Moment',
    story: 'A special moment or milestone! What was the highlight of your journey?',
    backgroundClass: 'bg-gradient-to-b from-red-400 to-pink-600',
    items: [
      {
        id: 'planning',
        name: 'Special Planning',
        Icon: SeaplaneIcon,
        position: { top: '35%', left: '30%' }
      },
      {
        id: 'capturing-moment',
        name: 'Capturing the Moment',
        Icon: PhotographerIcon,
        position: { top: '65%', left: '50%' }
      },
      {
        id: 'the-moment',
        name: 'The Big Moment!',
        Icon: RingIcon,
        position: { top: '45%', left: '75%' }
      },
      {
        id: 'special-memory',
        name: 'Cherished Memory',
        Icon: MemoryIcon,
        position: { top: '25%', left: '65%' }
      }
    ]
  },

  {
    id: 9,
    title: 'World 9: The Future Awaits',
    story: 'The final level! Where are you now, and what exciting things are ahead?',
    backgroundClass: 'bg-gradient-to-b from-indigo-500 to-purple-900',
    items: [
      {
        id: 'achievement',
        name: 'Final Achievement',
        Icon: DiplomaIcon,
        position: { top: '60%', left: '65%' }
      },
      {
        id: 'together',
        name: 'Together Always',
        Icon: SrishtiIcon,
        position: { top: '45%', left: '35%' }
      },
      {
        id: 'future',
        name: 'Future Adventures',
        Icon: MemoryIcon,
        position: { top: '25%', left: '55%' }
      }
    ]
  }
];

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 CUSTOMIZATION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 BACKGROUND COLORS:
Format: 'bg-gradient-to-b from-COLOR-SHADE to-COLOR-SHADE'
Available colors: red, orange, yellow, green, teal, blue, indigo, purple, pink, gray
Available shades: 300, 400, 500, 600, 700, 800, 900

Examples:
  - Sunset: 'bg-gradient-to-b from-orange-400 to-pink-600'
  - Ocean: 'bg-gradient-to-b from-blue-300 to-blue-700'
  - Forest: 'bg-gradient-to-b from-green-400 to-green-800'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 POSITIONING:
position: { top: 'X%', left: 'Y%' }

top (vertical):
  - '20%' = near top
  - '50%' = middle
  - '85%' = ground level

left (horizontal):
  - '20%' = far left
  - '50%' = center
  - '80%' = far right

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 AVAILABLE ICONS:

Achievements:
  - MicrosoftIcon, AmazonIcon, DiplomaIcon, GaugeIcon, AssignmentIcon, PassportIcon, RingIcon

People:
  - SrishtiIcon (rename as needed!), FriendsIcon

Objects:
  - CarIcon, HouseIcon, SoapIcon, SeaplaneIcon, PhotographerIcon, MemoryIcon, HingeIcon

Enemies/Obstacles:
  - SugarRushIcon (moving enemy)
  - SadFaceIcon (static obstacle)
  - PotholeIcon (static obstacle)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👾 ITEM TYPES:

1. Regular Item (collect it):
{
  id: 'unique-id',
  name: 'Item Name',
  Icon: IconName,
  position: { top: '50%', left: '50%' }
}

2. Moving Enemy (avoid it - it moves!):
{
  id: 'enemy-id',
  name: 'Enemy Name',
  Icon: SugarRushIcon,
  position: { top: '60%', left: '50%' },
  isEnemy: true,
  movement: { type: 'horizontal', range: [30, 70] }
}

3. Static Obstacle (avoid it - stays in place):
{
  id: 'obstacle-id',
  name: 'Obstacle Name',
  Icon: PotholeIcon,
  position: { top: '80%', left: '60%' },
  isObstacle: true
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 TIPS:
1. Each 'id' must be unique!
2. Ground level is around top: '85%'
3. Items in the air should be top: '30%' to '60%'
4. Don't forget commas between items!
5. Test often - save and refresh your browser!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For detailed help, check:
- QUICK_START.md (complete beginner's guide)
- HOW_TO_CUSTOMIZE.md (step-by-step instructions)
- TEMPLATE_README.md (full documentation)
- examples/ folder (pre-made game themes)

Now go create YOUR story! 🚀
*/
