interface Name {
    id: number;
    name: string;
    gender: string;
    popularity: string;
    length: string;
};

export enum Gender {
  GIRL = "Girl",
  BOY = "Boy",
  UNISEX = "Unisex"
};

export enum Popularity {
  TRENDY = "Trendy",
  UNIQUE = "Unique"
};

export enum Length {
  LONG = "Long",
  ALL = "All",
  SHORT = "Short"
};

export const names: Name[] = [
    {
        id: 1,
        name: "Harsh",
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: Length.SHORT
    },
    {
        id: 2,
        name: "Sanyukta",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.LONG
    },
    {
        id: 3,
        name: "Anurag",
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: Length.SHORT
    },
    {
        id: 4,
        name: "Tejas",
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: Length.SHORT
    },
    {
        id: 5,
        name: "Shrutika",
        gender: Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.LONG
    },
    {
        id: 6,
        name: "Adwitia",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT
    },
    {
        id: 7,
        name: "Bhuvaneswaryi",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.LONG
    },
    {
        id: 8,
        name: "Shubham",
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: Length.LONG
    },
    {
        id: 9,
        name: "Roshell",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT
    },
    {
        id: 10,
        name: "Yohan",
        gender: Gender.BOY,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT
    },
    {
        id: 11,
        name: "Misty",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT
    },
    {
        id: 12,
        name: "Ancelina",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.LONG
    },
    {
        id: 13,
        name: "Bhumika",
        gender: Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.SHORT
    },
    {
        id: 14,
        name: "Vaishnavi",
        gender: Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.LONG
    },
    {
        id: 15,
        name: "Surbhi",
        gender: Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.SHORT
    },
    {
        id: 16,
        name: "Sahej",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT
    },
    {
        id: 17,
        name: "Armaan",
        gender: Gender.BOY,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT
    },
    {
        id: 18,
        name: "Rajveer",
        gender: Gender.BOY,
        popularity: Popularity.UNIQUE,
        length: Length.LONG
    },
    {
        id: 19,
        name: "Aayushi",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT
    },
    {
        id: 20,
        name: "Kulashree",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.LONG
    }
]