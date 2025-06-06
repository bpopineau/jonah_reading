// =========================
// GAME CONSTANTS
// =========================
// List of spelling words, XP per word, and rewards
export const WORD_LIST = [
    { id: 'w1', text: 'CAT' }, { id: 'w2', text: 'DOG' }, { id: 'w3', text: 'SUN' },
    { id: 'w4', text: 'RUN' }, { id: 'w5', text: 'BIG' }, { id: 'w6', text: 'PIG' },
    { id: 'w7', text: 'TOP' }, { id: 'w8', text: 'HOT' }, { id: 'w9', text: 'BED' },
    { id: 'w10', text: 'YES' }, { id: 'w11', text: 'TREE' }, { id: 'w12', text: 'BOOK' },
    { id: 'w13', text: 'STAR' }, { id: 'w14', text: 'MOON' }, { id: 'w15', text: 'FISH' },
];

export const XP_PER_CORRECT_WORD = 10;

export const REWARDS = [
    { xpThreshold: 30, name: 'Super Speller Sticker', description: 'You earned a cool sticker!', type: 'sticker' },
    { xpThreshold: 70, name: 'Bronze Star Badge', description: 'Wow! A bronze star for your collection!', type: 'badge' },
    { xpThreshold: 120, name: 'Pikachu Buddy', description: 'Awesome! Pikachu will join your adventures!', type: 'companion', companion: 'pikachu' },
    { xpThreshold: 150, name: 'Golden Quill Companion (virtual)', description: 'Amazing! A Golden Quill friend will join your adventures!', type: 'companion', companion: 'quill' }
];
