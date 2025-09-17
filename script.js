// Register the service worker for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.error('Service Worker Registration Failed:', err));
    });
}

// Full Checklist Data in JavaScript Object format
const checklistData = {
    'Hornet\'s Core Abilities and Upgrades (8%)': [
        ['Needle-Strike', 'Starting ability.'],
        ['Swift Step (Dash)', 'Acquired in the Deep Docks.'],
        ['Wall-Cling', 'Acquired in Shellwood after defeating Sister Splinter.'],
        ['Silk Soar (Double Jump)', 'Acquired in the Far Fields after defeating the Fourth Chorus.'],
        ['Clawline (Grapple)', 'Found in the Wormways.'],
        ['Needle-Spear (Upgraded Attack)', 'Found in Mosshome.'],
        ['Sharpened Needle', 'Upgraded by the Forge Daughter in Deep Docks. Requires 1 Pale Oil.'],
        ['Hivesteel Needle', 'Upgraded by the Forge Daughter. Requires 2 Pale Oil.'],
        ['Pale Steel Needle', 'Upgraded by the Forge Daughter. Requires 3 Pale Oil.']
    ],
    'Tools (57%)': [
        ['Straight Pin', 'Found in The Marrow.'],
        ['Threefold Pin', 'Found in Greymoor.'],
        ['Sting Shard', 'Found in Deep Docks.'],
        ['Curveclaw', 'Purchased from a hidden merchant in Hunter\'s March for 140 Rosaries.'],
        ['Flintslate', 'Found in Deep Docks.'],
        ['Cogfly', 'Crafted at a workbench in the High Halls with 1 Craftmetal.'],
        ['Conchcutter', 'Acquired in The Marrow.'],
        ['Rosary Cannon', 'Found behind a Simple Key door in the High Halls.'],
        ['Throwing Ring', 'Found in the Hunter\'s March.'],
        ['Silkshot', 'Found in the Underworks.'],
        ['Tacks', 'Found in the Wormways.'],
        ['Longpin', 'Found in the Sinner\'s Road.'],
        ['Pimpillo', 'Found in the Bilewater.'],
        ['Delver\'s Drill', 'Found in the Underworks after a platforming puzzle.'],
        ['Flea Brew', 'Rewarded for completing "The Lost Fleas" quest.'],
        ['Plasmium Phial', 'Found in the Whispering Vaults.'],
        ['Voltvessels', 'Found behind a breakable wall in Memorium.'],
        ['Cogwork Wheel', 'Found in the Underworks.'],
        ['Dreadwing', 'Found in the Citadel of Song.'],
        ['Sootbomb', 'Found in the Wisp Thicket.'],
        ['Fractured Mask', 'Found in Hunter\'s March.'],
        ['Magma Bell', 'Found in Deep Docks.'],
        ['Wreath of Purity', 'Found in the Far Fields.'],
        ['Druid\'s Eye', 'Rewarded for completing the "Berry Picking" quest in Mosshome.'],
        ['Pollip Pouch', 'Found in the Bilewater.'],
        ['Warding Bell', 'Found in the Shellwood.'],
        ['Multibinder', 'Found in the High Halls.'],
        ['Weavelight', 'Found in the Far Fields.'],
        ['Sawtooth Circlet', 'Found in the Blasted Steps.'],
        ['Spool Extender', 'Found in the Underworks.'],
        ['Reserve Bind', 'Found in the Deep Docks.'],
        ['Claw Mirror', 'Found in the Sinner\'s Road.'],
        ['Quick Sling', 'Found in the Wormways.'],
        ['Wispfire Lantern', 'Found in the Blasted Steps.'],
        ['Egg of Flealia', 'Reward for the "Flea Circus" quest.'],
        ['Pin Badge', 'Found in the Grand Gate.'],
        ['Compass', 'Bought from Shakra in Bone Bottom for 70 Rosaries.'],
        ['Shard Pendant', 'Found in The Marrow.'],
        ['Magnetite Brooch', 'Found in Moss Grotto.'],
        ['Dead Bug\'s Purse', 'Found in the Wormways.'],
        ['Thief\'s Mark', 'Found in the Wormways.'],
        ['Scuttlebrace', 'Found in the Underworks.'],
        ['Ascendant\'s Grip', 'Found in The Slab.'],
        ['Spider Strings', 'Found in the Deepnest.'],
        ['Silkspeed Anklets', 'Found in the Far Fields.'],
        ['Weighted Belt', 'Found in the Underworks.'],
        ['Barbed Bracelet', 'Found in Shellwood.'],
        ['Magnetite Dice', 'Found in the Bellhome.']
    ],
    'Bosses and Optional Bosses (18%)': [
        ['Moss Mother', 'Moss Grotto.'],
        ['Bell Beast', 'The Marrow.'],
        ['Lace', 'Deep Docks.'],
        ['Fourth Chorus', 'Far Fields.'],
        ['Sister Splinter', 'Shellwood.'],
        ['Widow', 'Bellhart.'],
        ['The Last Judge', 'Blasted Steps.'],
        ['Cogwork Dancers', 'Cogwork Core.'],
        ['Trobbio', 'The Stage (The Citadel).'],
        ['Lace (Rematch)', 'The Cradle.'],
        ['Grand Mother Silk', 'The Cradle.'],
        ['Savage Beastfly', 'Hunter\'s March.'],
        ['Skull Tyrant', 'The Marrow.'],
        ['Moorwing', 'Greymoor.'],
        ['Phantom', 'Exhaust Organ.'],
        ['Groal the Great', 'Bilewater.'],
        ['Disgraced Chef Lugoli', 'Sinner\'s Road.'],
        ['Crawfather', 'The Slab.']
    ],
    'Collectibles and Upgrades (12%)': [
        ['Mask Shards', 'Purchase from Vendor in Bone Bottom for 300 Rosaries.'],
        ['Mask Shard', 'Found in Far Fields, above the Seamstress\'s house.'],
        ['Mask Shard', 'Found in the Wormways, in a hidden room in a pool of water.'],
        ['Mask Shard', 'Found in Shellwood, in a hidden room after a challenging platforming puzzle.'],
        ['Mask Shard', 'Found in Deep Docks, after completing a combat trial.'],
        ['Mask Shard', 'Found in Weavenest Atla, in a lava-filled room.'],
        ['Mask Shard', 'Found in Cogwork Core, in a hidden path near the main bench.'],
        ['Mask Shard', 'Purchased from a new merchant in Choral Chambers for 750 Rosaries after completing "The Wandering Merchant" quest.'],
        ['Spool Fragment', 'Found in Bone Bottom, in a secret room near Mosshome.'],
        ['Spool Fragment', 'Found in Deep Docks, in a lava room below the forge.'],
        ['Spool Fragment', 'Found in Greymoor, in a difficult platforming section above the main entrance.'],
        ['Spool Fragment', 'Purchased from the upgraded shop in Bellhart for 270 Rosaries after completing "My Missing Courier" quest.'],
        ['Spool Fragment', 'Found in Weavenest Atla, near a pool of water.'],
        ['Spool Fragment', 'Found in The Slab, in an outer portion of the prison level.'],
        ['Spool Fragment', 'Found in Cogwork Core, after defeating a Cogwork Clapper elite.'],
        ['Spool Fragment', 'Found in Whiteward, at the bottom of an elevator shaft.'],
        ['Spool Fragment', 'Found in Underworks, in one of the combat gauntlet rooms.'],
        ['Spool Fragment', 'Found in Underworks, in a hidden pit with breakable obstacles.'],
        ['Spool Fragment', 'Found in Memorium, on a dais in a room with a spike-wall puzzle.'],
        ['Spool Fragment', 'Found in High Halls, at the top of the west tower.'],
        ['Bestiary Complete', 'Encounter every enemy in the game.'],
        ['All Map Segments Unlocked', 'Unlock the entire map.']
    ],
    'Bonus Completion Items (Not required for 112%, but for full completionist runs)': [
        ['Hunter Crest', 'Starting crest.'],
        ['Wanderer Crest', 'Beat the Chapel of the Wanderer in Bonegrave, accessible via the Wormways using Pebb\'s Simple Key.'],
        ['Reaper Crest', 'Beat the Chapel of the Reaper in the left-hand section of Greymoor.'],
        ['Beast Crest', 'Beat the Savage Beastfly in Hunter\'s March.'],
        ['Witch Crest', 'Complete the "Rite of Rebirth" and "Infestation Operation" wishes, then give the "Twisted Bud" to Greyroot in Greymoor.'],
        ['Architect Crest', 'Beat the Chapel of the Architect in the Underworks. Requires purchasing the "Architect\'s Key" from the Twelfth Architect after finding a certain number of tools.'],
        ['Shaman Crest', 'In a tunnel above the Lore Tablet in Moss Grotto, accessible using the Silk Soar ability.'],
        ['Memory Locket', 'Purchased from Mort in the Far Fields for 150 Rosaries.'],
        ['Memory Locket', 'Found on a corpse to the far right of Hunter\'s March, before the Chapel of the Beast.'],
        ['Memory Locket', 'Found in Greymoor, to the right of the Moorwing arena, in the upper part of the room.'],
        ['Memory Locket', 'Purchased from Frey in Bellhart after defeating Widow for 330 Rosaries.'],
        ['Memory Locket', 'Found in Bilewater, inside a cocoon to the left of the secret bench.'],
        ['Memory Locket', 'Received as a reward for completing the "Volatile Flintbeetle" side task in Bone Bottom.'],
        ['Memory Locket', 'Found in the Far Fields, in a hidden bag near a series of bags after defeating the boss.'],
        ['Memory Locket', 'Found in Underworks, after a challenging platforming puzzle.'],
        ['Memory Locket', 'Found in Weavenest Atla, in a hidden room behind a breakable wall.'],
        ['Memory Locket', 'Found in The Marrow, in a secret area after a boss fight.'],
        ['Memory Locket', 'Found in High Halls, in a secret room near the main bench.'],
        ['Memory Locket', 'Found in Whiteward, in a hidden area near the elevator.'],
        ['Memory Locket', 'Found in Moss Grotto, in a hidden tunnel near the entrance to the area.'],
        ['Memory Locket', 'Found in Deep Docks, in a hard-to-reach area after a combat trial.'],
        ['Memory Locket', 'Found in the Wormways, in a secret room near the main entrance.'],
        ['Memory Locket', 'Found in Sinner\'s Road, in the room after completing the "Roach Guts" quest.'],
        ['Memory Locket', 'Found in The Slab, in a hidden alcove near the Crawfather boss arena.'],
        ['Memory Locket', 'Found in The Cauldron, after navigating a tricky platforming section.'],
        ['Memory Locket', 'Found in Memorium, on a high platform after a series of difficult jumps.'],
        ['Memory Locket', 'Found in the Citadel of Song, in a hidden side room near the main path.']
    ]
};

const checklistContainer = document.getElementById('checklist');
const resetButton = document.getElementById('reset-button');
const completionText = document.getElementById('completion-text');
const progressBar = document.getElementById('progress-bar-fill');
let totalItems = 0;

function renderChecklist() {
    checklistContainer.innerHTML = '';
    totalItems = 0;
    const savedState = JSON.parse(localStorage.getItem('silksongChecklistState')) || {};

    for (const category in checklistData) {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category';

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryElement.appendChild(categoryTitle);

        checklistData[category].forEach(([title, note]) => {
            totalItems++;
            const itemElement = document.createElement('div');
            itemElement.className = 'checklist-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `item-${totalItems}`;
            if (savedState[`item-${totalItems}`]) {
                checkbox.checked = true;
            }
            checkbox.addEventListener('change', updateState);

            const contentElement = document.createElement('div');
            contentElement.className = 'checklist-item-content';

            const titleElement = document.createElement('span');
            titleElement.className = 'checklist-item-title';
            titleElement.textContent = title;

            const noteElement = document.createElement('span');
            noteElement.className = 'checklist-item-note';
            noteElement.textContent = note;

            contentElement.appendChild(titleElement);
            contentElement.appendChild(noteElement);
            itemElement.appendChild(checkbox);
            itemElement.appendChild(contentElement);
            categoryElement.appendChild(itemElement);
        });
        checklistContainer.appendChild(categoryElement);
    }
    updateProgress();
}

function updateState() {
    const currentState = {};
    for (let i = 1; i <= totalItems; i++) {
        const checkbox = document.getElementById(`item-${i}`);
        if (checkbox) {
            currentState[`item-${i}`] = checkbox.checked;
        }
    }
    localStorage.setItem('silksongChecklistState', JSON.stringify(currentState));
    updateProgress();
}

function updateProgress() {
    let checkedCount = 0;
    for (let i = 1; i <= totalItems; i++) {
        const checkbox = document.getElementById(`item-${i}`);
        if (checkbox && checkbox.checked) {
            checkedCount++;
        }
    }

    const percentage = (checkedCount / 112) * 100;
    completionText.textContent = `${checkedCount} / 112 (${percentage.toFixed(0)}%)`;
    progressBar.style.width = `${percentage}%`;
}

function resetChecklist() {
    if (confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
        localStorage.removeItem('silksongChecklistState');
        renderChecklist();
    }
}

resetButton.addEventListener('click', resetChecklist);
window.addEventListener('load', renderChecklist);