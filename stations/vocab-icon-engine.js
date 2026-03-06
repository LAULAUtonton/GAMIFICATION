'use strict';

const iconsBasePath = 'stations/icons/';

export const getIconPath = (category, word) => {
    // logic to construct the SVG path using category and word
};

export const getIconName = (word) => {
    // logic to return name based on word
};

export const categoryFromSetId = (setId) => {
    const categoryMapping = {
        '1': 'jobs',
        '2': 'materials',
        '3': 'personality',
        '4': 'emotions',
        '5': 'activities'
    };
    return categoryMapping[setId] || 'unknown';
};

// rest of the existing logic here...