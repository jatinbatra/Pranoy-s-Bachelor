import { LevelData } from './types';
import { MicrosoftIcon, HingeIcon, CarIcon, AmazonIcon, HouseIcon, RingIcon, DiplomaIcon, MemoryIcon, SadFaceIcon, FriendsIcon, GaugeIcon, SoapIcon, SugarRushIcon, BrainTrustIcon, PassportIcon, PotholeIcon, AssignmentIcon, SrishtiIcon, SeaplaneIcon, PhotographerIcon } from './components/Icons';

export const LEVELS: LevelData[] = [
  {
    id: 1,
    title: 'World 1: The Petro-Path',
    story: "Pranoy's journey begins in Abu Dhabi! As an instrumentation engineer, he must navigate complex pipelines. Or pretend to, anyway. Mostly he was thinking about moving to the US.",
    backgroundClass: 'bg-gradient-to-b from-yellow-600 to-yellow-800',
    items: [
      { id: 'gauge1', name: 'Critical Gauge', Icon: GaugeIcon, position: { top: '50%', left: '80%' } },
      { id: 'gauge2', name: 'Critical Gauge', Icon: GaugeIcon, position: { top: '30%', left: '40%' } },
    ]
  },
  {
    id: 2,
    title: 'World 2: The Clean Slate',
    story: 'Welcome to the US! His new roommates, Vatsal and Jatin, are obsessed with cleanliness. Pranay must keep the place tidy while battling his mortal enemy: a raging sweet tooth!',
    backgroundClass: 'bg-gradient-to-b from-blue-300 to-indigo-400',
    items: [
      { id: 'clean1', name: 'Maintain Cleanliness', Icon: SoapIcon, position: { top: '60%', left: '30%' } },
      { id: 'clean2', name: 'Maintain Cleanliness', Icon: SoapIcon, position: { top: '40%', left: '75%' } },
      { id: 'sugar-rush', name: 'Sugar Rush', Icon: SugarRushIcon, position: { top: '65%', left: '50%' }, isEnemy: true, movement: { type: 'horizontal', range: [30, 70] } }
    ]
  },
  {
    id: 3,
    title: 'World 3: The Microsoft Leap',
    story: "The quest for an internship! Fueled by caffeine and questionable advice from the 'Vatsal & Jatin Brain Trust', he aims to land the Microsoft offer in one shot. No pressure.",
    backgroundClass: 'bg-gradient-to-b from-gray-700 to-gray-900',
    items: [
      { id: 'braintrust', name: 'Brain Trust Power-Up', Icon: BrainTrustIcon, position: { top: '70%', left: '20%' } },
      { id: 'microsoft', name: 'Microsoft Internship!', Icon: MicrosoftIcon, position: { top: '30%', left: '80%' } },
    ]
  },
  {
    id: 4,
    title: 'World 4: The Hinge Hijinks',
    story: 'His roommates, now self-proclaimed dating gurus, help craft the ultimate Hinge profile. He gets ONE match. ONE. Luckily, it was Srishti.',
    backgroundClass: 'bg-gradient-to-b from-pink-400 to-purple-500',
    items: [
      { id: 'hinge', name: 'Hinge Profile', Icon: HingeIcon, position: { top: '30%', left: '30%' } },
      { id: 'srishti-match', name: "Srishti's Support", Icon: SrishtiIcon, position: { top: '60%', left: '70%' } },
    ]
  },
  {
    id: 5,
    title: 'World 5: Wheels and Wanderlust',
    story: "Pranoy learns to drive, terrifying local squirrels. Now he can take Srishti on road trips! Collect stamps, but for the love of all that is holy, avoid the potholes.",
    backgroundClass: 'bg-gradient-to-b from-green-400 to-teal-500',
    items: [
      { id: 'car', name: 'Learned to Drive', Icon: CarIcon, position: { top: '70%', left: '20%' } },
      { id: 'passport', name: 'Passport Stamp', Icon: PassportIcon, position: { top: '40%', left: '75%' } },
      { id: 'srishti-trip', name: "Srishti's Support", Icon: SrishtiIcon, position: { top: '30%', left: '50%' } },
      { id: 'pothole', name: 'Pothole!', Icon: PotholeIcon, position: { top: '80%', left: '60%' }, isObstacle: true },
    ]
  },
  {
    id: 6,
    title: 'World 6: The Resilience Rally',
    story: "Plot twist: no return offer from Microsoft. But with Srishti's support, he's fine. Deep down, he was just looking for love anyway, right? He's never home on weekends... wonder where he is?",
    backgroundClass: 'bg-gradient-to-b from-gray-500 to-blue-800',
    items: [
      { id: 'no-offer', name: 'No Return Offer', Icon: SadFaceIcon, position: { top: '50%', left: '50%' }, isObstacle: true },
      { id: 'srishti-support', name: "Srishti's Support", Icon: SrishtiIcon, position: { top: '30%', left: '20%' } },
      { id: 'assignment', name: 'Assignments On Time', Icon: AssignmentIcon, position: { top: '40%', left: '80%' } },
      { id: 'roommate-assist', name: 'Roommate Assist', Icon: FriendsIcon, position: { top: '70%', left: '35%' } },
    ]
  },
  {
    id: 7,
    title: 'World 7: The Belltown Ascent',
    story: "He makes some... interesting elective choices that Vatsal and Jatin wouldn't touch. But it pays off! He lands a job at Amazon and moves to Belltown. More fun, more adventures!",
    backgroundClass: 'bg-gradient-to-b from-yellow-400 to-orange-500',
    items: [
      { id: 'amazon', name: 'Job at Amazon', Icon: AmazonIcon, position: { top: '40%', left: '60%' } },
      { id: 'belltown', name: 'Moved to Belltown', Icon: HouseIcon, position: { top: '70%', left: '30%' } }
    ]
  },
  {
    id: 8,
    title: 'World 8: The Proposal Peak',
    story: 'He went full Bollywood. A seaplane? A secret photographer? For the proposal to Srishti? Absolutely. Luckily, she said yes to this glorious lunatic.',
    backgroundClass: 'bg-gradient-to-b from-red-400 to-pink-500',
    items: [
      { id: 'seaplane', name: 'The Seaplane', Icon: SeaplaneIcon, position: { top: '30%', left: '25%' } },
      { id: 'photographer', name: 'Secret Photographer', Icon: PhotographerIcon, position: { top: '70%', left: '50%' } },
      { id: 'proposal', name: 'The Proposal', Icon: RingIcon, position: { top: '40%', left: '75%' } },
      { id: 'proposal-memory', name: 'Proposal Memory', Icon: MemoryIcon, position: { top: '20%', left: '80%' } }
    ]
  },
  {
    id: 9,
    title: 'World 9: The Final Countdown',
    story: "Post-engagement life is fun and chill. They had a heartwarming (and legally binding) court marriage! Now for the final boss: the big Indian wedding in November. To be continued...",
    backgroundClass: 'bg-gradient-to-b from-indigo-500 to-purple-800',
    items: [
        { id: 'marriage', name: 'Court Marriage', Icon: DiplomaIcon, position: { top: '60%', left: '70%' } },
        { id: 'srishti-final', name: "Srishti's Support", Icon: SrishtiIcon, position: { top: '40%', left: '30%' } },
        { id: 'future-memory', name: 'Future Adventures', Icon: MemoryIcon, position: { top: '20%', left: '50%' } }
    ]
  }
];