export interface Legume {
    icon : string;
    name : string;
}

export interface Ligne {
    legume: Legume;
    quantite: number;
}

export const tomate: Legume={
    icon : '🍅',
    name : ' Tomate'
};

export const oignon: Legume={
    icon : '🧅',
    name : ' Oignon'
};

export const brocoli: Legume={
    icon : '🥦',
    name : 'Brocoli'
};

export const aubergine: Legume={
    icon : '🍆',
    name : 'Aubergine'
};

export const avocat: Legume={
    icon : '🥑',
    name : 'Avocat'
};



