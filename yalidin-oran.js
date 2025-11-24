 var zones = [
        { bureau: 300, domicile: 500 }, { bureau: 350, domicile: 650 },
        { bureau: 400, domicile: 850 }, { bureau: 600, domicile: 1000 },
        { bureau: 1150, domicile: 1450 }, { bureau: 1200, domicile: 1650 }
    ];
    var horsZoneCharges = { 1: 100, 2: 200, 3: 300 };
const wilayasCommunes = {
    "01-Adrar": {
        "zone": 4,
        "communes": {
            "adrar": {},
            "Akabli": {
                "expressOnly": true
            },
            "Aougrout": {
                "expressOnly": true
            },
            "Aoulef": {
                "expressOnly": true
            },
            "Bouda": {
                "expressOnly": true
            },
            "charouine": {
                "expressOnly": true
            },
            "Deldoul": {
                "expressOnly": true
            },
            "Fenoughil": {
                "expressOnly": true
            },
            "In Zghmir": {
                "expressOnly": true
            },
            "Ksar Kaddour": {
                "expressOnly": true
            },
            "Metarfa": {
                "expressOnly": true
            },
            "Ouled Ahmed Tammi": {
                "expressOnly": true
            },
            "Ouled Aïssa": {
                "expressOnly": true
            },
            "Ouled Saïd ": {
                "expressOnly": true
            },
            "Reggane": {
                "expressOnly": true
            },
            "Sali": {
                "expressOnly": true
            },
            "Sebaa": {
                "expressOnly": true
            },
            "Talmine": {
                "expressOnly": true
            },
            "Tamantit": {
                "expressOnly": true
            },
            "Tamekten": {
                "expressOnly": true
            },
            "Tamest": {
                "expressOnly": true
            },
            "timimoun": {},
            "Tinerkouk": {
                "expressOnly": true
            },
            "tit": {
                "expressOnly": true
            },
            "Tsabit": {
                "expressOnly": true
            },
            "Zaouiet Kounta": {
                "expressOnly": true
            }
        }
    },
    "02-Chlef": {
        "zone": 2,
        "communes": {
            "Abou El Hassan": {
                "horsZone": 1,
                "expressOnly": true
            },
            "aïn merane": {
                "horsZone": 1,
                "expressOnly": true
            },
            "bénairia": {
                "horsZone": 1,
                "expressOnly": true
            },
            "béni bouateb": {
                "horsZone": 1,
                "expressOnly": true
            },
            "béni haoua": {
                "horsZone": 1,
                "expressOnly": true
            },
            "béni Rached": {
                "horsZone": 1,
                "expressOnly": true
            },
            "boukadir": {
                "horsZone": 1,
                "expressOnly": true
            },
            "Bouzeghaia": {
                "horsZone": 1,
                "expressOnly": true
            },
            "breira": {
                "horsZone": 1,
                "expressOnly": true
            },
            "Chettia": {
                "horsZone": 1,
                "expressOnly": true
            },
            "chlef": {},
            "dahra": {
                "horsZone": 2,
                "expressOnly": true
            },
            "el hadjadj": {
                "horsZone": 2,
                "expressOnly": true
            },
            "el karimia": {
                "horsZone": 2,
                "expressOnly": true
            },
            "El Marsa": {
                "horsZone": 1,
                "expressOnly": true
            },
            "harchoun": {
                "horsZone": 1,
                "expressOnly": true
            },
            "Harenfa": {
                "horsZone": 2,
                "expressOnly": true
            },
            "labiod medjadja": {
                "horsZone": 1,
                "expressOnly": true
            },
            "moussadek": {
                "horsZone": 2,
                "expressOnly": true
            },
            "oued fodda": {
                "horsZone": 1,
                "expressOnly": true
            },
            "Oued Goussine": {
                "horsZone": 2,
                "expressOnly": true
            },
            "Oued Sly": {
                "horsZone": 1,
                "expressOnly": true
            },
            "ouled abbes": {
                "horsZone": 1,
                "expressOnly": true
            },
            "ouled fares": {
                "horsZone": 1,
                "expressOnly": true
            },
            "ouled ben abdelkader": {
                "horsZone": 1,
                "expressOnly": true
            },
            "Oum Drou": {
                "horsZone": 1,
                "expressOnly": true
            },
            "sendjas": {
                "horsZone": 1,
                "expressOnly": true
            },
            "sidi akacha": {
                "horsZone": 1,
                "expressOnly": true
            },
            "sidi abderrahmane": {
                "horsZone": 2,
                "expressOnly": true
            },
            "sobha": {
                "horsZone": 1,
                "expressOnly": true
            },
            "Tadjena": {
                "horsZone": 1,
                "expressOnly": true
            },
            "Talassa": {
                "horsZone": 1,
                "expressOnly": true
            },
            "taougrit": {
                "horsZone": 1,
                "expressOnly": true
            },
            "ténès": {},
            "zerioua": {
                "horsZone": 1,
                "expressOnly": true
            }
        }
    },
    "03-Laghouat": {
        "zone": 3,
        "communes": {
            "Aïn Madhi": {
                "expressOnly": true
            },
            "Bennasser Benchohra": {
                "expressOnly": true
            },
            "El Assafia": {
                "expressOnly": true
            },
            "El Ghicha": {
                "expressOnly": true
            },
            "El Houaita": {
                "expressOnly": true
            },
            "Gueltat Sidi Saad": {
                "expressOnly": true
            },
            "Hassi Delaa": {
                "expressOnly": true
            },
            "Hassi R'Mel": {
                "expressOnly": true
            },
            "Kheneg": {
                "expressOnly": true
            },
            "Ksar El Hirane": {
                "expressOnly": true
            },
            "Laghouat": {},
            "Oued M'Zi": {
                "expressOnly": true
            },
            "Sidi Makhlouf": {
                "expressOnly": true
            },
            "Tadjemout": {
                "expressOnly": true
            }
        }
    },
    "04-Oum el bouaghi": {
        "zone": 2,
        "communes": {
            "Aïn Beïda": {
                "expressOnly": true
            },
            "Aïn Diss": {
                "expressOnly": true
            },
            "Aïn Fakroun": {
                "expressOnly": true
            },
            "Aïn Kercha": {
                "expressOnly": true
            },
            "Aïn M'lila": {},
            "Aïn Zitoun": {
                "expressOnly": true
            },
            "Behir Chergui": {
                "expressOnly": true
            },
            "Berriche": {
                "expressOnly": true
            },
            "Bir Chouhada": {
                "expressOnly": true
            },
            "Dhalaa": {
                "expressOnly": true
            },
            "El Amiria": {
                "expressOnly": true
            },
            "El Belala": {
                "expressOnly": true
            },
            "El Djazia": {
                "expressOnly": true
            },
            "El Fedjoudj Boughrara Saoudi": {
                "expressOnly": true
            },
            "El Harmilia": {
                "expressOnly": true
            },
            "Fkirina": {
                "expressOnly": true
            },
            "Hanchir Toumghani": {
                "expressOnly": true
            },
            "Ksar Sbahi": {
                "expressOnly": true
            },
            "Meskiana": {
                "expressOnly": true
            },
            "Oued Nini": {
                "expressOnly": true
            },
            "Ouled Gacem": {
                "expressOnly": true
            },
            "Ouled Hamla": {
                "expressOnly": true
            },
            "Ouled Zouaï": {
                "expressOnly": true
            },
            "Oum el Bouaghi": {},
            "Rahia": {
                "expressOnly": true
            },
            "Sigus": {
                "expressOnly": true
            },
            "Souk Naamane": {
                "expressOnly": true
            },
            "Zorg": {
                "expressOnly": true
            }
        }
    },
    "05-Batna": {
        "zone": 2,
        "communes": {
            "Aïn Djasser": {
                "expressOnly": true
            },
            "Aïn Touta": {
                "expressOnly": true
            },
            "Aïn Yagout": {
                "expressOnly": true
            },
            "Arris": {
                "expressOnly": true
            },
            "Barika": {},
            "Batna": {},
            "Ben Foudhala El Hakania": {
                "expressOnly": true
            },
            "Bitam": {
                "expressOnly": true
            },
            "Boulhilat": {
                "expressOnly": true
            },
            "Boumagueur": {
                "expressOnly": true
            },
            "Boumia (Batna)": {
                "expressOnly": true
            },
            "Bouzina": {
                "expressOnly": true
            },
            "Chemora": {
                "expressOnly": true
            },
            "Chir": {
                "expressOnly": true
            },
            "Djerma": {
                "expressOnly": true
            },
            "Djezar": {
                "expressOnly": true
            },
            "El Hassi": {
                "expressOnly": true
            },
            "El Madher": {
                "expressOnly": true
            },
            "Fesdis": {
                "expressOnly": true
            },
            "Foum Toub": {
                "expressOnly": true
            },
            "Ghassira": {
                "expressOnly": true
            },
            "Guigba": {
                "expressOnly": true
            },
            "Hidoussa": {
                "expressOnly": true
            },
            "Ichmoul": {
                "expressOnly": true
            },
            "Inoughissen": {
                "expressOnly": true
            },
            "Kimmel": {
                "expressOnly": true
            },
            "Ksar Bellezma": {
                "expressOnly": true
            },
            "Lazrou": {
                "expressOnly": true
            },
            "Lemsane": {
                "expressOnly": true
            },
            "M'doukel": {
                "expressOnly": true
            },
            "Maafa": {
                "expressOnly": true
            },
            "Menaa": {
                "expressOnly": true
            },
            "Merouana": {
                "expressOnly": true
            },
            "N'Gaous": {
                "expressOnly": true
            },
            "Oued Chaaba": {
                "expressOnly": true
            },
            "Oued El Ma": {
                "expressOnly": true
            },
            "Oued Taga": {
                "expressOnly": true
            },
            "Ouled Aouf": {
                "expressOnly": true
            },
            "Ouled Fadel": {
                "expressOnly": true
            },
            "Ouled Sellam": {
                "expressOnly": true
            },
            "Ouled Si Slimane": {
                "expressOnly": true
            },
            "Ouyoun El Assafir": {
                "expressOnly": true
            },
            "Rahbat": {
                "expressOnly": true
            },
            "Ras El Aioun": {
                "expressOnly": true
            },
            "Sefiane": {
                "expressOnly": true
            },
            "Seggana": {
                "expressOnly": true
            },
            "Seriana": {
                "expressOnly": true
            },
            "T'Kout": {
                "expressOnly": true
            },
            "Talkhamt": {
                "expressOnly": true
            },
            "Taxlent": {
                "expressOnly": true
            },
            "Tazoult": {
                "expressOnly": true
            },
            "Teniet El Abed": {
                "expressOnly": true
            },
            "Tighanimine": {
                "expressOnly": true
            },
            "Tigherghar": {
                "expressOnly": true
            },
            "Tilatou": {
                "expressOnly": true
            },
            "Timgad": {
                "expressOnly": true
            },
            "Zanat El Beida": {
                "expressOnly": true
            }
        }
    },
    "06-Bejaia": {
        "zone": 2,
        "communes": {
            "Ait Djellil": {
                "expressOnly": true
            },
            "Aït Ksila": {
                "expressOnly": true
            },
            "Aït Maouche": {
                "expressOnly": true
            },
            "Aït Mellikeche": {
                "expressOnly": true
            },
            "Aït R'zine": {
                "expressOnly": true
            },
            "Aït Smail": {
                "expressOnly": true
            },
            "Akbou": {},
            "Akfadou": {
                "expressOnly": true
            },
            "Amalou": {
                "expressOnly": true
            },
            "Amizour": {
                "expressOnly": true
            },
            "Aokas": {
                "expressOnly": true
            },
            "Barbacha": {
                "expressOnly": true
            },
            "Béjaïa": {},
            "Boudjellil": {
                "expressOnly": true
            },
            "Bouhamza": {
                "expressOnly": true
            },
            "Boukhelifa": {
                "expressOnly": true
            },
            "Chellata": {
                "expressOnly": true
            },
            "Chemini": {
                "expressOnly": true
            },
            "Darguina": {
                "expressOnly": true
            },
            "Draâ El Kaïd": {
                "expressOnly": true
            },
            "El Kseur": {},
            "Fenaïa Ilmaten": {
                "expressOnly": true
            },
            "Ferraoun": {
                "expressOnly": true
            },
            "Ighil Ali": {
                "expressOnly": true
            },
            "Ighram": {
                "expressOnly": true
            },
            "Kendira": {
                "expressOnly": true
            },
            "Kherrata": {
                "expressOnly": true
            },
            "Leflaye": {
                "expressOnly": true
            },
            "M'cisna": {
                "expressOnly": true
            },
            "Melbou": {
                "expressOnly": true
            },
            "Oued Ghir": {
                "expressOnly": true
            },
            "Ouzellaguen": {
                "expressOnly": true
            },
            "Seddouk": {
                "expressOnly": true
            },
            "Semaoun": {
                "expressOnly": true
            },
            "Sidi Aïch": {
                "expressOnly": true
            },
            "Sidi Ayad": {
                "expressOnly": true
            },
            "Souk El Ténine": {
                "expressOnly": true
            },
            "Souk Oufella": {
                "expressOnly": true
            },
            "Tala Hamza": {
                "expressOnly": true
            },
            "Tamridjet": {
                "expressOnly": true
            },
            "Taourirt Ighil": {
                "expressOnly": true
            },
            "Taskriout": {
                "expressOnly": true
            },
            "Tazmalt": {
                "expressOnly": true
            },
            "Tibane": {
                "expressOnly": true
            },
            "Tichy": {
                "expressOnly": true
            },
            "Tifra": {
                "expressOnly": true
            },
            "Timezrit": {
                "expressOnly": true
            },
            "Tinabdher": {
                "expressOnly": true
            },
            "Toudja": {
                "expressOnly": true
            }
        }
    },
    "07-biskra": {
        "zone": 3,
        "communes": {
            "Aïn Zaatout": {
                "expressOnly": true
            },
            "Biskra": {},
            "Bordj Ben Azzouz": {
                "expressOnly": true
            },
            "Bouchagroune": {
                "expressOnly": true
            },
            "Branis": {
                "expressOnly": true
            },
            "Chetma": {
                "expressOnly": true
            },
            "Djemorah": {
                "expressOnly": true
            },
            "Doucen": {
                "expressOnly": true
            },
            "Ech Chaïba": {
                "expressOnly": true
            },
            "El Feidh": {
                "expressOnly": true
            },
            "El Ghrous": {
                "expressOnly": true
            },
            "El Hadjeb": {
                "expressOnly": true
            },
            "El Haouch": {
                "expressOnly": true
            },
            "El Kantara": {
                "expressOnly": true
            },
            "El Mizaraa": {
                "expressOnly": true
            },
            "El Outaya": {
                "expressOnly": true
            },
            "Foughala": {
                "expressOnly": true
            },
            "Khenguet Sidi Nadji": {
                "expressOnly": true
            },
            "Lichana": {
                "expressOnly": true
            },
            "Lioua": {
                "expressOnly": true
            },
            "M'Chouneche": {
                "expressOnly": true
            },
            "M'Lili": {
                "expressOnly": true
            },
            "Mekhadma": {
                "expressOnly": true
            },
            "Ouled Djellal": {},
            "Oumache": {
                "expressOnly": true
            },
            "Ourlal": {
                "expressOnly": true
            },
            "Sidi Khaled": {
                "expressOnly": true
            },
            "Sidi Okba": {
                "expressOnly": true
            },
            "Tolga": {},
            "Zeribet El Oued": {
                "expressOnly": true
            }
        }
    },
    "08-Béchar": {
        "zone": 3,
        "communes": {
            "Abadla": {
                "expressOnly": true
            },
            "Béchar": {},
            "Béni Abbès": {
                "expressOnly": true
            },
            "Beni Ikhlef": {
                "expressOnly": true
            },
            "Beni Ounif": {
                "expressOnly": true
            },
            "Boukais": {
                "expressOnly": true
            },
            "El Ouata": {
                "expressOnly": true
            },
            "Erg Ferradj": {
                "expressOnly": true
            },
            "Igli": {
                "expressOnly": true
            },
            "Kenadsa": {
                "expressOnly": true
            },
            "Kerzaz": {
                "expressOnly": true
            },
            "Ksabi": {
                "expressOnly": true
            },
            "Lahmar": {
                "expressOnly": true
            },
            "Mechraa Houari Boumedienne": {
                "expressOnly": true
            },
            "Meridja": {
                "expressOnly": true
            },
            "Mougheul": {
                "expressOnly": true
            },
            "Ouled Khoudir": {
                "expressOnly": true
            },
            "Taghit": {
                "expressOnly": true
            },
            "Tamtert": {
                "expressOnly": true
            },
            "Timoudi": {
                "expressOnly": true
            }
        }
    },
    "09-Blida": {
        "zone": 2,
        "communes": {
            "Aïn Romana": {
                "expressOnly": true
            },
            "Beni Mered": {
                "expressOnly": true
            },
            "Beni Tamou": {
                "expressOnly": true
            },
            "Benkhelil": {
                "expressOnly": true
            },
            "Blida": {},
            "Bouarfa": {},
            "Boufarik": {},
            "Bougara": {
                "expressOnly": true
            },
            "Bouinan": {
                "expressOnly": true
            },
            "Chebli": {
                "expressOnly": true
            },
            "Chiffa": {
                "expressOnly": true
            },
            "Chréa": {
                "expressOnly": true
            },
            "Djebabra": {
                "expressOnly": true
            },
            "El Affroun": {
                "expressOnly": true
            },
            "Guerouaou": {
                "expressOnly": true
            },
            "Hammam Melouane": {
                "expressOnly": true
            },
            "Larbaa": {},
            "Meftah": {
                "expressOnly": true
            },
            "Mouzaia": {
                "expressOnly": true
            },
            "Oued Alleug": {
                "expressOnly": true
            },
            "Oued Djer": {
                "expressOnly": true
            },
            "Ouled Slama": {
                "expressOnly": true
            },
            "Ouled Yaïch": {
                "expressOnly": true
            },
            "Souhane": {
                "expressOnly": true
            },
            "Soumaa": {
                "expressOnly": true
            }
        }
    },
    "10-Bouira": {
        "zone": 2,
        "communes": {
            "Aghbalou": {
                "expressOnly": true
            },
            "Ahl El Ksar": {
                "expressOnly": true
            },
            "Aïn Bessem": {
                "expressOnly": true
            },
            "Aïn El Hadjar": {
                "expressOnly": true
            },
            "Aïn El Turc": {
                "expressOnly": true
            },
            "Aïn Laloui": {
                "expressOnly": true
            },
            "Aït Laziz": {
                "expressOnly": true
            },
            "Aomar": {
                "expressOnly": true
            },
            "Ath Mansour": {
                "expressOnly": true
            },
            "Bechloul": {
                "expressOnly": true
            },
            "Bir Ghbalou": {
                "expressOnly": true
            },
            "Bouderbala": {
                "expressOnly": true
            },
            "Bouira": {},
            "Djebahia": {
                "expressOnly": true
            },
            "El Adjiba": {
                "expressOnly": true
            },
            "El Asnam": {
                "expressOnly": true
            },
            "El Hachimia": {
                "expressOnly": true
            },
            "El Khabouzia": {
                "expressOnly": true
            },
            "El Mokrani": {
                "expressOnly": true
            },
            "Haizer": {
                "expressOnly": true
            },
            "Hanif": {
                "expressOnly": true
            },
            "Kadiria": {
                "expressOnly": true
            },
            "Lakhdaria": {},
            "M'Chedallah": {
                "expressOnly": true
            },
            "Oued El Berdi": {
                "expressOnly": true
            },
            "Ouled Rached": {
                "expressOnly": true
            },
            "Raouraoua": {
                "expressOnly": true
            },
            "Saharidj": {
                "expressOnly": true
            },
            "Souk El Khemis": {
                "expressOnly": true
            },
            "Sour El Ghouzlane": {},
            "Taghzout": {
                "expressOnly": true
            }
        }
    },
    "11-Tamanrasset": {
        "zone": 5,
        "communes": {
            "In Salah": {
                "expressOnly": true
            },
            "Tamanrasset": {
                "expressOnly": true
            }
        }
    },
    "12-Tébessa": {
        "zone": 3,
        "communes": {
            "Aïn Zerga": {
                "expressOnly": true
            },
            "Bedjene": {
                "expressOnly": true
            },
            "Bekkaria": {
                "expressOnly": true
            },
            "Bir Dheb": {
                "expressOnly": true
            },
            "Bir Mokkadem": {
                "expressOnly": true
            },
            "Boukhadra": {
                "expressOnly": true
            },
            "Boulhaf Dir": {
                "expressOnly": true
            },
            "Cheria": {
                "expressOnly": true
            },
            "El Aouinet": {
                "expressOnly": true
            },
            "El Houidjbet": {
                "expressOnly": true
            },
            "El Kouif": {
                "expressOnly": true
            },
            "El Ma Labiodh": {
                "expressOnly": true
            },
            "El Meridj": {
                "expressOnly": true
            },
            "El Mezeraa": {
                "expressOnly": true
            },
            "El Ogla": {
                "expressOnly": true
            },
            "Ferkane": {
                "expressOnly": true
            },
            "Guorriguer": {
                "expressOnly": true
            },
            "Hammamet": {
                "expressOnly": true
            },
            "Morsott": {
                "expressOnly": true
            },
            "Negrine": {
                "expressOnly": true
            },
            "Ogla Melha": {
                "expressOnly": true
            },
            "Ouenza": {
                "expressOnly": true
            },
            "Oum Ali": {
                "expressOnly": true
            },
            "Safsaf El Ouesra": {
                "expressOnly": true
            },
            "Stah Guentis": {
                "expressOnly": true
            },
            "Tébessa": {},
            "Tlidjene": {
                "expressOnly": true
            }
        }
    },
    "13-Tlemcen": {
        "zone": 2,
        "communes": {
            "Aïn Fetah": {
                "expressOnly": true
            },
            "Aïn Fezza": {
                "expressOnly": true
            },
            "Aïn Ghoraba": {
                "expressOnly": true
            },
            "Aïn Kebira": {
                "expressOnly": true
            },
            "Aïn Nehala": {
                "expressOnly": true
            },
            "Aïn Tallout": {
                "expressOnly": true
            },
            "Aïn Youcef": {
                "expressOnly": true
            },
            "Amieur": {
                "expressOnly": true
            },
            "Azails": {
                "expressOnly": true
            },
            "Bab El Assa": {
                "expressOnly": true
            },
            "Beni Bahdel": {
                "expressOnly": true
            },
            "Beni Boussaid": {
                "expressOnly": true
            },
            "Beni Khellad": {
                "expressOnly": true
            },
            "Beni Mester": {
                "expressOnly": true
            },
            "Beni Ouarsous": {
                "expressOnly": true
            },
            "Beni Semiel": {
                "expressOnly": true
            },
            "Beni Snous": {
                "expressOnly": true
            },
            "Bensekrane": {
                "expressOnly": true
            },
            "Bouhlou": {
                "expressOnly": true
            },
            "Chetouane": {},
            "Dar Yaghmouracene": {
                "expressOnly": true
            },
            "Djebala": {
                "expressOnly": true
            },
            "El Aricha": {
                "expressOnly": true
            },
            "El Bouihi": {
                "expressOnly": true
            },
            "El Fehoul": {
                "expressOnly": true
            },
            "El Gor": {
                "expressOnly": true
            },
            "Fellaoucene": {
                "expressOnly": true
            },
            "Ghazaouet": {
                "expressOnly": true
            },
            "Hammam Boughrara": {
                "expressOnly": true
            },
            "Hennaya": {
                "expressOnly": true
            },
            "Honaïne": {
                "expressOnly": true
            },
            "Maghnia": {},
            "Mansourah": {},
            "Marsa Ben M'Hidi": {
                "expressOnly": true
            },
            "MSirda Fouaga": {
                "expressOnly": true
            },
            "Nedroma": {
                "expressOnly": true
            },
            "Oued Lakhdar": {
                "expressOnly": true
            },
            "Ouled Mimoun": {
                "expressOnly": true
            },
            "Ouled Riyah": {
                "expressOnly": true
            },
            "Remchi": {},
            "Sabra": {
                "expressOnly": true
            },
            "Sebaa Chioukh": {
                "expressOnly": true
            },
            "Sebdou": {
                "expressOnly": true
            },
            "Sidi Abdelli": {
                "expressOnly": true
            },
            "Sidi Djillali": {
                "expressOnly": true
            },
            "Sidi Medjahed": {
                "expressOnly": true
            },
            "Souahlia": {
                "expressOnly": true
            },
            "Souani": {
                "expressOnly": true
            },
            "Souk Tlata": {
                "expressOnly": true
            },
            "Terny Beni Hdiel": {
                "expressOnly": true
            },
            "Tienet": {
                "expressOnly": true
            },
            "Tlemcen": {},
            "Zenata": {
                "expressOnly": true
            }
        }
    },
    "14-Tiaret": {
        "zone": 2,
        "communes": {
            "Aïn Bouchekif": {
                "expressOnly": true
            },
            "Aïn Deheb": {
                "expressOnly": true
            },
            "Aïn Dzarit": {
                "expressOnly": true
            },
            "Aïn El Hadid": {
                "expressOnly": true
            },
            "Aïn Kermes": {
                "expressOnly": true
            },
            "Bougara": {
                "expressOnly": true
            },
            "Chehaima": {
                "expressOnly": true
            },
            "Dahmouni": {
                "expressOnly": true
            },
            "Djebilet Rosfa": {
                "expressOnly": true
            },
            "Djillali Ben Amar": {
                "expressOnly": true
            },
            "Faidja": {
                "expressOnly": true
            },
            "Frenda": {
                "expressOnly": true
            },
            "Guertoufa": {
                "expressOnly": true
            },
            "Hamadia": {
                "expressOnly": true
            },
            "Ksar Chellala": {
                "expressOnly": true
            },
            "Mahdia": {
                "expressOnly": true
            },
            "Mechraa Safa": {
                "expressOnly": true
            },
            "Medrissa": {
                "expressOnly": true
            },
            "Medroussa": {
                "expressOnly": true
            },
            "Meghila": {
                "expressOnly": true
            },
            "Mellakou": {
                "expressOnly": true
            },
            "Naima": {
                "expressOnly": true
            },
            "Oued Lilli": {
                "expressOnly": true
            },
            "Rahouia": {
                "expressOnly": true
            },
            "Rechaiga": {
                "expressOnly": true
            },
            "Sebaine": {
                "expressOnly": true
            },
            "Sebt": {
                "expressOnly": true
            },
            "Serghine": {
                "expressOnly": true
            },
            "Si Abdelghani": {
                "expressOnly": true
            },
            "Sidi Abderahmane": {
                "expressOnly": true
            },
            "Sidi Ali Mellal": {
                "expressOnly": true
            },
            "Sidi Hosni": {
                "expressOnly": true
            },
            "Sougueur": {
                "expressOnly": true
            },
            "Tagdemt": {
                "expressOnly": true
            },
            "Takhemaret": {
                "expressOnly": true
            },
            "Tiaret": {},
            "Tidda": {
                "expressOnly": true
            },
            "Tousnina": {
                "expressOnly": true
            },
            "Zmalet El Emir Abdelkader": {
                "expressOnly": true
            }
        }
    },
    "15-TiziOuzou": {
        "zone": 2,
        "communes": {
            "Abi Youcef": {
                "expressOnly": true
            },
            "Aghribs": {
                "expressOnly": true
            },
            "Agouni Gueghrane": {
                "expressOnly": true
            },
            "Ain El Hammam": {
                "expressOnly": true
            },
            "Aïn Zaouia": {
                "expressOnly": true
            },
            "Aït Aggouacha": {
                "expressOnly": true
            },
            "Aït Aïssa Mimoun": {
                "expressOnly": true
            },
            "Aït Bouadou": {
                "expressOnly": true
            },
            "Aït Boumahdi": {
                "expressOnly": true
            },
            "Aït Chafâa": {
                "expressOnly": true
            },
            "Aït Khellili": {
                "expressOnly": true
            },
            "Aït Mahmoud": {
                "expressOnly": true
            },
            "Aït Oumalou": {
                "expressOnly": true
            },
            "Aït Toudert": {
                "expressOnly": true
            },
            "Aït Yahia": {
                "expressOnly": true
            },
            "Aït Yahia Moussa": {
                "expressOnly": true
            },
            "Aït Yenni": {
                "expressOnly": true
            },
            "Akbil": {
                "expressOnly": true
            },
            "Akerrou": {
                "expressOnly": true
            },
            "Assi Youcef": {
                "expressOnly": true
            },
            "Ath Zikki": {
                "expressOnly": true
            },
            "Azazga": {},
            "Azeffoun": {
                "expressOnly": true
            },
            "Beni Aïssi": {
                "expressOnly": true
            },
            "Beni Douala": {
                "expressOnly": true
            },
            "Beni Zmenzer": {
                "expressOnly": true
            },
            "Boghni": {
                "expressOnly": true
            },
            "Boudjima": {
                "expressOnly": true
            },
            "Bounouh": {
                "expressOnly": true
            },
            "Bouzguen": {
                "expressOnly": true
            },
            "Draâ Ben Khedda": {},
            "Draâ El Mizan": {
                "expressOnly": true
            },
            "Freha": {
                "expressOnly": true
            },
            "Frikat": {
                "expressOnly": true
            },
            "Iboudraren": {
                "expressOnly": true
            },
            "Idjeur": {
                "expressOnly": true
            },
            "Iferhounène": {
                "expressOnly": true
            },
            "Ifigha": {
                "expressOnly": true
            },
            "Iflissen": {
                "expressOnly": true
            },
            "Illilten": {
                "expressOnly": true
            },
            "Illoula Oumalou": {
                "expressOnly": true
            },
            "Imsouhel": {
                "expressOnly": true
            },
            "Irdjen": {
                "expressOnly": true
            },
            "Larbaâ Nath Irathen": {
                "expressOnly": true
            },
            "M'Kira": {
                "expressOnly": true
            },
            "Mâatkas": {
                "expressOnly": true
            },
            "Makouda": {
                "expressOnly": true
            },
            "Mechtras": {
                "expressOnly": true
            },
            "Mekla": {
                "expressOnly": true
            },
            "Mizrana": {
                "expressOnly": true
            },
            "Ouacif": {
                "expressOnly": true
            },
            "Ouadhia": {
                "expressOnly": true
            },
            "Ouaguenoun": {
                "expressOnly": true
            },
            "Sidi Namane": {
                "expressOnly": true
            },
            "Souamaâ": {
                "expressOnly": true
            },
            "Souk El Thenine": {
                "expressOnly": true
            },
            "Tadmaït": {
                "expressOnly": true
            },
            "Tigzirt": {
                "expressOnly": true
            },
            "Timizart": {
                "expressOnly": true
            },
            "Tirmitine": {
                "expressOnly": true
            },
            "Tizi Gheniff": {},
            "Tizi N'Tleta": {
                "expressOnly": true
            },
            "Tizi Ouzou": {},
            "Tizi Rached": {
                "expressOnly": true
            },
            "Yakouren": {
                "expressOnly": true
            },
            "Yatafen": {
                "expressOnly": true
            }
        }
    },
    "16-Alger": {
        "zone": 1,
        "communes": {
            "Aïn Benian": {},
            "Aïn Taya": {
                "expressOnly": true
            },
            "Alger Centre": {},
            "Bab El Oued": {},
            "Bab Ezzouar": {
                "expressOnly": true
            },
            "Baba Hassen": {
                "expressOnly": true
            },
            "Bachdjerrah": {
                "expressOnly": true
            },
            "Baraki": {},
            "Belouizdad": {
                "expressOnly": true
            },
            "Ben Aknoun": {
                "expressOnly": true
            },
            "Beni Messous": {
                "expressOnly": true
            },
            "Bir Mourad Raïs": {
                "expressOnly": true
            },
            "Birkhadem": {},
            "Birtouta": {},
            "Bologhine": {
                "expressOnly": true
            },
            "Bordj El Bahri": {},
            "Bordj El Kiffan": {},
            "Bourouba": {
                "expressOnly": true
            },
            "Bouzareah": {
                "expressOnly": true
            },
            "Casbah": {
                "expressOnly": true
            },
            "Cheraga": {},
            "Dar El Beïda": {},
            "Dely Ibrahim": {
                "expressOnly": true
            },
            "Djasr Kasentina": {
                "expressOnly": true
            },
            "Douera": {
                "expressOnly": true
            },
            "Draria": {},
            "El Achour": {
                "expressOnly": true
            },
            "El Biar": {
                "expressOnly": true
            },
            "El Hammamet": {
                "expressOnly": true
            },
            "El Harrach": {
                "expressOnly": true
            },
            "El Madania": {
                "expressOnly": true
            },
            "El Magharia": {
                "expressOnly": true
            },
            "El Marsa": {
                "expressOnly": true
            },
            "El Mouradia": {
                "expressOnly": true
            },
            "H'raoua": {
                "expressOnly": true
            },
            "Hussein Dey": {},
            "Hydra": {
                "expressOnly": true
            },
            "Khraicia": {
                "expressOnly": true
            },
            "Kouba": {
                "expressOnly": true
            },
            "Les Eucalyptus": {},
            "Mahelma": {
                "expressOnly": true
            },
            "Mohammadia": {
                "expressOnly": true
            },
            "Oued Koriche": {
                "expressOnly": true
            },
            "Oued Smar": {
                "expressOnly": true
            },
            "Ouled Chebel": {
                "expressOnly": true
            },
            "Ouled Fayet": {},
            "Rahmania": {
                "expressOnly": true
            },
            "Raïs Hamidou": {
                "expressOnly": true
            },
            "Reghaïa": {},
            "Rouïba": {
                "expressOnly": true
            },
            "Saoula": {
                "expressOnly": true
            },
            "Sidi M'Hamed": {
                "expressOnly": true
            },
            "Sidi Moussa": {
                "expressOnly": true
            },
            "Souidania": {
                "expressOnly": true
            },
            "Staoueli": {
                "expressOnly": true
            },
            "Tessala El Merdja": {
                "expressOnly": true
            },
            "Zeralda": {}
        }
    },
    "17-Djelfa": {
        "zone": 3,
        "communes": {
            "Aïn El Ibel": {
                "expressOnly": true
            },
            "Aïn Feka": {
                "expressOnly": true
            },
            "Aïn Maabed": {
                "expressOnly": true
            },
            "Aïn Oussara": {},
            "Benhar": {
                "expressOnly": true
            },
            "Beni Yagoub": {
                "expressOnly": true
            },
            "Birine": {
                "expressOnly": true
            },
            "Bouira Lahdab": {
                "expressOnly": true
            },
            "Charef": {
                "expressOnly": true
            },
            "Dar Chioukh": {
                "expressOnly": true
            },
            "Deldoul": {
                "expressOnly": true
            },
            "Djelfa": {},
            "Douis": {
                "expressOnly": true
            },
            "El Guedid": {
                "expressOnly": true
            },
            "El Idrissia": {
                "expressOnly": true
            },
            "El Khemis": {
                "expressOnly": true
            },
            "Had Sahary": {
                "expressOnly": true
            },
            "Hassi Bahbah": {
                "expressOnly": true
            },
            "Hassi El Euch": {
                "expressOnly": true
            },
            "Hassi Fedoul": {
                "expressOnly": true
            },
            "Messaad": {
                "expressOnly": true
            },
            "Moudjebara": {
                "expressOnly": true
            },
            "Sidi Ladjel": {
                "expressOnly": true
            },
            "Zaccar": {
                "expressOnly": true
            }
        }
    },
    "18-Jijel": {
        "zone": 2,
        "communes": {
            "Bordj Tahar": {
                "expressOnly": true
            },
            "Boudriaa Ben Yadjis": {
                "expressOnly": true
            },
            "Bouraoui Belhadef": {
                "expressOnly": true
            },
            "Chahna": {
                "expressOnly": true
            },
            "Chekfa": {
                "expressOnly": true
            },
            "Djemaa Beni Habibi": {
                "expressOnly": true
            },
            "Djimla": {
                "expressOnly": true
            },
            "El Ancer": {
                "expressOnly": true
            },
            "El Aouana": {
                "expressOnly": true
            },
            "El Kennar Nouchfi": {
                "expressOnly": true
            },
            "El Milia": {},
            "Emir Abdelkader": {
                "expressOnly": true
            },
            "Ghebala": {
                "expressOnly": true
            },
            "Jijel": {},
            "Kaous": {
                "expressOnly": true
            },
            "Kheïri Oued Adjoul": {
                "expressOnly": true
            },
            "Ouadjana": {
                "expressOnly": true
            },
            "Ouled Yahia Khedrouche": {
                "expressOnly": true
            },
            "Settara": {
                "expressOnly": true
            },
            "Sidi Abdelaziz": {
                "expressOnly": true
            },
            "Sidi Maarouf": {
                "expressOnly": true
            },
            "Taher": {},
            "Texenna": {
                "expressOnly": true
            },
            "Ziama Mansouriah": {
                "expressOnly": true
            }
        }
    },
    "19-Setif": {
        "zone": 2,
        "communes": {
            "Aïn Abessa": {
                "expressOnly": true
            },
            "Aïn Arnat": {
                "expressOnly": true
            },
            "Aïn Azel": {
                "expressOnly": true
            },
            "Aïn El Kebira": {
                "expressOnly": true
            },
            "Aïn Lahdjar": {
                "expressOnly": true
            },
            "Aïn Legradj": {
                "expressOnly": true
            },
            "Aïn Oulmene": {},
            "Aïn Roua": {
                "expressOnly": true
            },
            "Aïn Sebt": {
                "expressOnly": true
            },
            "Aït Naoual Mezada": {
                "expressOnly": true
            },
            "Aït Tizi": {
                "expressOnly": true
            },
            "Aït Wertilan": {
                "expressOnly": true
            },
            "Amoucha": {
                "expressOnly": true
            },
            "Babor": {
                "expressOnly": true
            },
            "Bazer Sakhra": {
                "expressOnly": true
            },
            "Beidha Bordj": {
                "expressOnly": true
            },
            "Belaa": {
                "expressOnly": true
            },
            "Beni Aziz": {
                "expressOnly": true
            },
            "Beni Chebana": {
                "expressOnly": true
            },
            "Beni Fouda": {
                "expressOnly": true
            },
            "Beni Hocine": {
                "expressOnly": true
            },
            "Beni Mouhli": {
                "expressOnly": true
            },
            "Bir El Arch": {
                "expressOnly": true
            },
            "Bir Haddada": {
                "expressOnly": true
            },
            "Bouandas": {
                "expressOnly": true
            },
            "Bougaa": {},
            "Bousselam": {
                "expressOnly": true
            },
            "Boutaleb": {
                "expressOnly": true
            },
            "Dehamcha": {
                "expressOnly": true
            },
            "Djemila": {
                "expressOnly": true
            },
            "Draa Kebila": {
                "expressOnly": true
            },
            "El Eulma": {},
            "El Ouldja": {
                "expressOnly": true
            },
            "El Ouricia": {
                "expressOnly": true
            },
            "Guellal": {
                "expressOnly": true
            },
            "Guelta Zerka": {
                "expressOnly": true
            },
            "Guenzet": {
                "expressOnly": true
            },
            "Guidjel": {
                "expressOnly": true
            },
            "Hamma": {
                "expressOnly": true
            },
            "Hammam Guergour": {
                "expressOnly": true
            },
            "Hammam Soukhna": {
                "expressOnly": true
            },
            "Harbil": {
                "expressOnly": true
            },
            "Ksar El Abtal": {
                "expressOnly": true
            },
            "Maaouia": {
                "expressOnly": true
            },
            "Maoklane": {
                "expressOnly": true
            },
            "Mezloug": {
                "expressOnly": true
            },
            "Oued El Barad": {
                "expressOnly": true
            },
            "Ouled Addouane": {
                "expressOnly": true
            },
            "Ouled Sabor": {
                "expressOnly": true
            },
            "Ouled Si Ahmed": {
                "expressOnly": true
            },
            "Ouled Tebben": {
                "expressOnly": true
            },
            "Rasfa": {
                "expressOnly": true
            },
            "Salah Bey": {
                "expressOnly": true
            },
            "Serdj El Ghoul": {
                "expressOnly": true
            },
            "Sétif": {},
            "Tachouda": {
                "expressOnly": true
            },
            "Talaifacene": {
                "expressOnly": true
            },
            "Taya": {
                "expressOnly": true
            },
            "Tella": {
                "expressOnly": true
            },
            "Tizi N'Bechar": {
                "expressOnly": true
            }
        }
    },
    "20-Saida": {
        "zone": 2,
        "communes": {
            "Aïn El Hadjar": {
                "expressOnly": true
            },
            "Aïn Soltane": {
                "expressOnly": true
            },
            "Doui Thabet": {
                "expressOnly": true
            },
            "El Hassasna": {
                "expressOnly": true
            },
            "Maamora": {
                "expressOnly": true
            },
            "Moulay Larbi": {
                "expressOnly": true
            },
            "Ouled Brahim": {
                "expressOnly": true
            },
            "Ouled Khaled": {
                "expressOnly": true
            },
            "Saïda": {},
            "Sidi Ahmed": {
                "expressOnly": true
            },
            "Sidi Amar": {
                "expressOnly": true
            },
            "Sidi Boubekeur": {
                "expressOnly": true
            },
            "Tircine": {
                "expressOnly": true
            },
            "Youb": {
                "expressOnly": true
            }
        }
    },
    "21-Skikda": {
        "zone": 2,
        "communes": {
            "Aïn Bouziane": {
                "expressOnly": true
            },
            "Aïn Charchar": {
                "expressOnly": true
            },
            "Aïn Kechra": {
                "expressOnly": true
            },
            "Aïn Zouit": {
                "expressOnly": true
            },
            "Azzaba": {},
            "Bekkouche Lakhdar": {
                "expressOnly": true
            },
            "Ben Azzouz": {
                "expressOnly": true
            },
            "Beni Bechir": {
                "expressOnly": true
            },
            "Beni Oulbane": {
                "expressOnly": true
            },
            "Beni Zid": {
                "expressOnly": true
            },
            "Bin El Ouiden": {
                "expressOnly": true
            },
            "Bouchtata": {
                "expressOnly": true
            },
            "Cheraia": {
                "expressOnly": true
            },
            "Collo": {},
            "Djendel Saadi Mohamed": {
                "expressOnly": true
            },
            "El Ghedir": {
                "expressOnly": true
            },
            "El Hadaiek": {
                "expressOnly": true
            },
            "El Harrouch": {},
            "El Marsa": {
                "expressOnly": true
            },
            "Emdjez Edchich": {
                "expressOnly": true
            },
            "Es Sebt": {
                "expressOnly": true
            },
            "Filfila": {
                "expressOnly": true
            },
            "Hamadi Krouma": {
                "expressOnly": true
            },
            "Kanoua": {
                "expressOnly": true
            },
            "Kerkera": {
                "expressOnly": true
            },
            "Kheneg Mayoum": {
                "expressOnly": true
            },
            "Oued Zehour": {
                "expressOnly": true
            },
            "Ouldja Boulballout": {
                "expressOnly": true
            },
            "Ouled Attia": {
                "expressOnly": true
            },
            "Ouled Hbaba": {
                "expressOnly": true
            },
            "Oum Toub": {
                "expressOnly": true
            },
            "Ramdane Djamel": {
                "expressOnly": true
            },
            "Salah Bouchaour": {
                "expressOnly": true
            },
            "Sidi Mezghiche": {
                "expressOnly": true
            },
            "Skikda": {},
            "Tamalous": {
                "expressOnly": true
            },
            "Zerdaza": {
                "expressOnly": true
            },
            "Zitouna": {
                "expressOnly": true
            }
        }
    },
    "22-Sidi Bel Abbes": {
        "zone": 1,
        "communes": {
            "Aïn Adden": {
                "expressOnly": true
            },
            "Aïn El Berd": {
                "expressOnly": true
            },
            "Aïn Kada": {
                "expressOnly": true
            },
            "Aïn Thrid": {
                "expressOnly": true
            },
            "Aïn Tindamine": {
                "expressOnly": true
            },
            "Amarnas": {
                "expressOnly": true
            },
            "Badredine El Mokrani": {
                "expressOnly": true
            },
            "Belarbi": {
                "expressOnly": true
            },
            "Ben Badis": {
                "expressOnly": true
            },
            "Benachiba Chelia": {
                "expressOnly": true
            },
            "Bir El Hammam": {
                "expressOnly": true
            },
            "Boudjebaa El Bordj": {
                "expressOnly": true
            },
            "Boukhanafis": {
                "expressOnly": true
            },
            "Chettouane Belaila": {
                "expressOnly": true
            },
            "Dhaya": {
                "expressOnly": true
            },
            "El Haçaiba": {
                "expressOnly": true
            },
            "Hassi Dahou": {
                "expressOnly": true
            },
            "Hassi Zehana": {
                "expressOnly": true
            },
            "Lamtar": {
                "expressOnly": true
            },
            "M'Cid": {
                "expressOnly": true
            },
            "Makedra": {
                "expressOnly": true
            },
            "Marhoum": {
                "expressOnly": true
            },
            "Merine": {
                "expressOnly": true
            },
            "Mezaourou": {
                "expressOnly": true
            },
            "Mostefa Ben Brahim": {
                "expressOnly": true
            },
            "Moulay Slissen": {
                "expressOnly": true
            },
            "Oued Sebaa": {
                "expressOnly": true
            },
            "Oued Sefioun": {
                "expressOnly": true
            },
            "Oued Taourira": {
                "expressOnly": true
            },
            "Ras El Ma": {
                "expressOnly": true
            },
            "Redjem Demouche": {
                "expressOnly": true
            },
            "Sehala Thaoura": {
                "expressOnly": true
            },
            "Sfisef": {
                "expressOnly": true
            },
            "Sidi Ali Benyoub": {
                "expressOnly": true
            },
            "Sidi Ali Boussidi": {
                "expressOnly": true
            },
            "Sidi Bel Abbes": {},
            "Sidi Brahim": {
                "expressOnly": true
            },
            "Sidi Chaib": {
                "expressOnly": true
            },
            "Sidi Daho des Zairs": {
                "expressOnly": true
            },
            "Sidi Hamadouche": {
                "expressOnly": true
            },
            "Sidi Khaled": {
                "expressOnly": true
            },
            "Sidi Lahcene": {
                "expressOnly": true
            },
            "Sidi Yacoub": {
                "expressOnly": true
            },
            "Tabia": {
                "expressOnly": true
            },
            "Tafissour": {
                "expressOnly": true
            },
            "Taoudmout": {
                "expressOnly": true
            },
            "Teghalimet": {
                "expressOnly": true
            },
            "Telagh": {
                "expressOnly": true
            },
            "Tenira": {
                "expressOnly": true
            },
            "Tessala": {
                "expressOnly": true
            },
            "Tilmouni": {
                "expressOnly": true
            },
            "Zerouala": {
                "expressOnly": true
            }
        }
    },
    "13-Annaba": {
        "zone": 2,
        "communes": {
            "Aïn Berda": {
                "expressOnly": true
            },
            "Annaba": {},
            "Berrahal": {
                "expressOnly": true
            },
            "Chetaïbi": {
                "expressOnly": true
            },
            "Cheurfa": {
                "expressOnly": true
            },
            "El Bouni": {},
            "El Hadjar": {
                "expressOnly": true
            },
            "Eulma": {
                "expressOnly": true
            },
            "Oued El Aneb": {
                "expressOnly": true
            },
            "Seraïdi": {
                "expressOnly": true
            },
            "Sidi Amar": {
                "expressOnly": true
            },
            "Treat": {
                "expressOnly": true
            }
        }
    },
    "24-Guelma": {
        "zone": 2,
        "communes": {
            "Aïn Ben Beida": {
                "expressOnly": true
            },
            "Aïn Larbi": {
                "expressOnly": true
            },
            "Aïn Makhlouf": {
                "expressOnly": true
            },
            "Aïn Reggada": {
                "expressOnly": true
            },
            "Aïn Sandel": {
                "expressOnly": true
            },
            "Belkheir": {
                "expressOnly": true
            },
            "Ben Djerrah": {
                "expressOnly": true
            },
            "Beni Mezline": {
                "expressOnly": true
            },
            "Bordj Sabath": {
                "expressOnly": true
            },
            "Bouati Mahmoud": {
                "expressOnly": true
            },
            "Bouchegouf": {
                "expressOnly": true
            },
            "Bouhachana": {
                "expressOnly": true
            },
            "Bouhamdane": {
                "expressOnly": true
            },
            "Boumahra Ahmed": {
                "expressOnly": true
            },
            "Dahouara": {
                "expressOnly": true
            },
            "Djeballah Khemissi": {
                "expressOnly": true
            },
            "El Fedjoudj": {
                "expressOnly": true
            },
            "Guellat Bou Sbaa": {
                "expressOnly": true
            },
            "Guelma": {},
            "Hammam Debagh": {
                "expressOnly": true
            },
            "Hammam N'Bail": {
                "expressOnly": true
            },
            "Héliopolis": {
                "expressOnly": true
            },
            "Houari Boumédiène": {
                "expressOnly": true
            },
            "Khezarra": {
                "expressOnly": true
            },
            "Medjez Amar": {
                "expressOnly": true
            },
            "Medjez Sfa": {
                "expressOnly": true
            },
            "Nechmaya": {
                "expressOnly": true
            },
            "Oued Cheham": {
                "expressOnly": true
            },
            "Oued Fragha": {
                "expressOnly": true
            },
            "Oued Zenati": {},
            "Ras El Agba": {
                "expressOnly": true
            },
            "Roknia": {
                "expressOnly": true
            },
            "Sellaoua Announa": {
                "expressOnly": true
            },
            "Tamlouka": {
                "expressOnly": true
            }
        }
    },
    "25-Constantine": {
        "zone": 2,
        "communes": {
            "Aïn Abid": {
                "expressOnly": true
            },
            "Aïn Smara": {
                "expressOnly": true
            },
            "Beni Hamiden": {
                "expressOnly": true
            },
            "Constantine": {},
            "Didouche Mourad": {},
            "El Khroub": {},
            "Hamma Bouziane": {
                "expressOnly": true
            },
            "Ibn Badis": {
                "expressOnly": true
            },
            "Ibn Ziad": {
                "expressOnly": true
            },
            "Messaoud Boudjriou": {
                "expressOnly": true
            },
            "Ouled Rahmoune": {
                "expressOnly": true
            },
            "Zighoud Youcef": {
                "expressOnly": true
            }
        }
    },
    "26-Médéa": {
        "zone": 2,
        "communes": {
            "Aïn Boucif": {
                "expressOnly": true
            },
            "Aissaouia": {
                "expressOnly": true
            },
            "Aziz": {
                "expressOnly": true
            },
            "Baata": {
                "expressOnly": true
            },
            "Benchicao": {
                "expressOnly": true
            },
            "Beni Slimane": {
                "expressOnly": true
            },
            "Berrouaghia": {
                "expressOnly": true
            },
            "Bir Ben Laabed": {
                "expressOnly": true
            },
            "Boghar": {
                "expressOnly": true
            },
            "Bou Aiche": {
                "expressOnly": true
            },
            "Bouaichoune": {
                "expressOnly": true
            },
            "Bouchrahil": {
                "expressOnly": true
            },
            "Boughezoul": {
                "expressOnly": true
            },
            "Bouskene": {
                "expressOnly": true
            },
            "Chahbounia": {
                "expressOnly": true
            },
            "Chellalet El Adhaoura": {
                "expressOnly": true
            },
            "Derrag": {
                "expressOnly": true
            },
            "Deux Bassins": {
                "expressOnly": true
            },
            "Djouab": {
                "expressOnly": true
            },
            "Draa Essamar": {
                "expressOnly": true
            },
            "El Azizia": {
                "expressOnly": true
            },
            "El Guelb El Kebir": {
                "expressOnly": true
            },
            "El Hamdania": {
                "expressOnly": true
            },
            "El Omaria": {
                "expressOnly": true
            },
            "El Ouinet": {
                "expressOnly": true
            },
            "Hannacha": {
                "expressOnly": true
            },
            "Kef Lakhdar": {
                "expressOnly": true
            },
            "Khams Djouamaa": {
                "expressOnly": true
            },
            "Ksar Boukhari": {
                "expressOnly": true
            },
            "Médéa": {},
            "Meftaha": {
                "expressOnly": true
            },
            "Meghraoua": {
                "expressOnly": true
            },
            "Mezerana": {
                "expressOnly": true
            },
            "Mihoub": {
                "expressOnly": true
            },
            "Moudjbar": {
                "expressOnly": true
            },
            "Ouamri": {
                "expressOnly": true
            },
            "Oued Harbil": {
                "expressOnly": true
            },
            "Ouled Antar": {
                "expressOnly": true
            },
            "Ouled Bouachra": {
                "expressOnly": true
            },
            "Ouled Brahim": {
                "expressOnly": true
            },
            "Ouled Deide": {
                "expressOnly": true
            },
            "Ouled Hellal": {
                "expressOnly": true
            },
            "Ouled Maaref": {
                "expressOnly": true
            },
            "Oum El Djalil": {
                "expressOnly": true
            },
            "Ouzera": {
                "expressOnly": true
            },
            "Rebaia": {
                "expressOnly": true
            },
            "Saneg": {
                "expressOnly": true
            },
            "Sedraia": {
                "expressOnly": true
            },
            "Seghouane": {
                "expressOnly": true
            },
            "Si Mahdjoub": {
                "expressOnly": true
            },
            "Sidi Damed": {
                "expressOnly": true
            },
            "Sidi Errabia": {
                "expressOnly": true
            },
            "Sidi Naamanez": {
                "expressOnly": true
            },
            "Sidi Zahar": {
                "expressOnly": true
            },
            "Sidi Ziane": {
                "expressOnly": true
            },
            "Souagui": {
                "expressOnly": true
            },
            "Tablat": {
                "expressOnly": true
            },
            "Tafraout": {
                "expressOnly": true
            },
            "Tamesguida": {
                "expressOnly": true
            },
            "Tizi Mahdi": {
                "expressOnly": true
            },
            "Tlatet Eddouar": {
                "expressOnly": true
            },
            "Zoubiria": {
                "expressOnly": true
            }
        }
    },
    "27-Mostaganem": {
        "zone": 1,
        "communes": {
            "Abdelmalek Ramdane": {
                "expressOnly": true
            },
            "Achaacha": {
                "expressOnly": true
            },
            "Aïn Boudinar": {
                "expressOnly": true
            },
            "Aïn Nouissy": {
                "expressOnly": true
            },
            "Aïn Sidi Cherif": {
                "expressOnly": true
            },
            "Aïn Tedles": {
                "expressOnly": true
            },
            "Blad Touahria": {
                "expressOnly": true
            },
            "Bouguirat": {
                "expressOnly": true
            },
            "El Hassaine": {
                "expressOnly": true
            },
            "Fornaka": {
                "expressOnly": true
            },
            "Hadjadj": {
                "expressOnly": true
            },
            "Hassi Mameche": {
                "expressOnly": true
            },
            "Khadra": {
                "expressOnly": true
            },
            "Kheireddine": {
                "expressOnly": true
            },
            "Mansourah": {
                "expressOnly": true
            },
            "Mazagran": {
                "expressOnly": true
            },
            "Mesra": {
                "expressOnly": true
            },
            "Mostaganem": {},
            "Nekmaria": {
                "expressOnly": true
            },
            "Oued El Kheir": {
                "expressOnly": true
            },
            "Ouled Boughalem": {
                "expressOnly": true
            },
            "Safsaf": {
                "expressOnly": true
            },
            "Sayada": {
                "expressOnly": true
            },
            "Sidi Ali": {
                "expressOnly": true
            },
            "Sidi Lakhdar": {
                "expressOnly": true
            },
            "Sirat": {
                "expressOnly": true
            },
            "Souaflia": {
                "expressOnly": true
            },
            "Sour": {
                "expressOnly": true
            },
            "Stidia": {
                "expressOnly": true
            },
            "Tazgait": {
                "expressOnly": true
            }
        }
    },
    "28-M'Sila": {
        "zone": 2,
        "communes": {
            "Aïn El Hadjel": {
                "expressOnly": true
            },
            "Aïn El Melh": {
                "expressOnly": true
            },
            "Aïn Errich": {
                "expressOnly": true
            },
            "Aïn Fares": {
                "expressOnly": true
            },
            "Aïn Khadra": {
                "expressOnly": true
            },
            "Belaiba": {
                "expressOnly": true
            },
            "Ben Srour": {
                "expressOnly": true
            },
            "Beni Ilmane": {
                "expressOnly": true
            },
            "Benzouh": {
                "expressOnly": true
            },
            "Berhoum": {},
            "Bir Foda": {
                "expressOnly": true
            },
            "Bou Saâda": {},
            "Bouti Sayah": {
                "expressOnly": true
            },
            "Chellal": {
                "expressOnly": true
            },
            "Dehahna": {
                "expressOnly": true
            },
            "Djebel Messaad": {
                "expressOnly": true
            },
            "El Hamel": {
                "expressOnly": true
            },
            "El Houamed": {
                "expressOnly": true
            },
            "Hammam Dhalaa": {
                "expressOnly": true
            },
            "Khettouti Sed El Djir": {
                "expressOnly": true
            },
            "Khoubana": {
                "expressOnly": true
            },
            "M'Cif": {
                "expressOnly": true
            },
            "M'Sila": {},
            "M'Tarfa": {
                "expressOnly": true
            },
            "Maadid": {
                "expressOnly": true
            },
            "Maarif": {
                "expressOnly": true
            },
            "Magra": {
                "expressOnly": true
            },
            "Medjedel": {
                "expressOnly": true
            },
            "Mohammed Boudiaf": {
                "expressOnly": true
            },
            "Ouanougha": {
                "expressOnly": true
            },
            "Ouled Addi Guebala": {
                "expressOnly": true
            },
            "Ouled Atia": {
                "expressOnly": true
            },
            "Ouled Derradj": {
                "expressOnly": true
            },
            "Ouled Madhi": {
                "expressOnly": true
            },
            "Ouled Mansour": {
                "expressOnly": true
            },
            "Ouled Sidi Brahim": {
                "expressOnly": true
            },
            "Ouled Slimane": {
                "expressOnly": true
            },
            "Oultem": {
                "expressOnly": true
            },
            "Sidi Aïssa": {
                "expressOnly": true
            },
            "Sidi Ameur": {
                "expressOnly": true
            },
            "Sidi Hadjeres": {
                "expressOnly": true
            },
            "Sidi M'Hamed": {
                "expressOnly": true
            },
            "Slim": {
                "expressOnly": true
            },
            "Souamaa": {
                "expressOnly": true
            },
            "Tamsa": {
                "expressOnly": true
            },
            "Tarmount": {
                "expressOnly": true
            },
            "Zarzour": {
                "expressOnly": true
            }
        }
    },
    "29-Mascara": {
        "zone": 1,
        "communes": {
            "Aïn Fares": {
                "expressOnly": true
            },
            "Aïn Fekan": {
                "expressOnly": true
            },
            "Aïn Ferah": {
                "expressOnly": true
            },
            "Aïn Fras": {
                "expressOnly": true
            },
            "Alaïmia": {
                "expressOnly": true
            },
            "Aouf": {
                "expressOnly": true
            },
            "Beniane": {
                "expressOnly": true
            },
            "Bou Hanifia": {
                "expressOnly": true
            },
            "Bou Henni": {
                "expressOnly": true
            },
            "Chorfa": {
                "expressOnly": true
            },
            "El Bordj": {
                "expressOnly": true
            },
            "El Gaada": {
                "expressOnly": true
            },
            "El Ghomri": {
                "expressOnly": true
            },
            "El Guettana": {
                "expressOnly": true
            },
            "El Keurt": {
                "expressOnly": true
            },
            "El Menaouer": {
                "expressOnly": true
            },
            "Ferraguig": {
                "expressOnly": true
            },
            "Froha": {
                "expressOnly": true
            },
            "Gharrous": {
                "expressOnly": true
            },
            "Ghriss": {
                "expressOnly": true
            },
            "Guerdjoum": {
                "expressOnly": true
            },
            "Hachem": {
                "expressOnly": true
            },
            "Hacine": {
                "expressOnly": true
            },
            "Khalouia": {
                "expressOnly": true
            },
            "Makdha": {
                "expressOnly": true
            },
            "Mamounia": {
                "expressOnly": true
            },
            "Maoussa": {
                "expressOnly": true
            },
            "Mascara": {},
            "Matemore": {
                "expressOnly": true
            },
            "Mocta Douz": {
                "expressOnly": true
            },
            "Mohammadia": {
                "expressOnly": true
            },
            "Nesmoth": {
                "expressOnly": true
            },
            "Oggaz": {
                "expressOnly": true
            },
            "Oued El Abtal": {
                "expressOnly": true
            },
            "Oued Taria": {
                "expressOnly": true
            },
            "Ras El Aïn Amirouche": {
                "expressOnly": true
            },
            "Sedjerara": {
                "expressOnly": true
            },
            "Sehailia": {
                "expressOnly": true
            },
            "Sidi Abdeldjebar": {
                "expressOnly": true
            },
            "Sidi Abdelmoumen": {
                "expressOnly": true
            },
            "Sidi Boussaid": {
                "expressOnly": true
            },
            "Sidi Kada": {
                "expressOnly": true
            },
            "Sig": {
                "expressOnly": true
            },
            "Tighennif": {
                "expressOnly": true
            },
            "Tizi": {
                "expressOnly": true
            },
            "Zahana": {
                "expressOnly": true
            },
            "Zelmata": {
                "expressOnly": true
            }
        }
    },
    "30-Ouargla": {
        "zone": 3,
        "communes": {
            "Aïn Beida": {
                "expressOnly": true
            },
            "Benaceur": {
                "expressOnly": true
            },
            "Blidet Amor": {
                "expressOnly": true
            },
            "Hassi Ben Abdellah": {
                "expressOnly": true
            },
            "Hassi Messaoud": {},
            "M'Naguer": {
                "expressOnly": true
            },
            "Megarine": {
                "expressOnly": true
            },
            "N'Goussa": {
                "expressOnly": true
            },
            "Nezla": {
                "expressOnly": true
            },
            "Ouargla": {},
            "Rouissat": {
                "expressOnly": true
            },
            "Sidi Khouiled": {
                "expressOnly": true
            },
            "Sidi Slimane ": {
                "expressOnly": true
            },
            "Taibet": {
                "expressOnly": true
            },
            "Tamacine": {
                "expressOnly": true
            },
            "Tebesbest": {
                "expressOnly": true
            },
            "Touggourt": {},
            "Zaouia El Abidia": {
                "expressOnly": true
            }
        }
    },
    "31-Oran": {
        "zone": 0,
        "communes": {
            "Aïn El Kerma": {
                "expressOnly": true
            },
            "Aïn El Turk": {
                "expressOnly": true
            },
            "Arzew": {},
            "Ben Freha": {
                "expressOnly": true
            },
            "Bethioua": {
                "expressOnly": true
            },
            "Bir El Djir": {},
            "Bou Sfer": {
                "expressOnly": true
            },
            "Boufatis": {
                "expressOnly": true
            },
            "Boutlelis": {
                "expressOnly": true
            },
            "El Ançor": {
                "expressOnly": true
            },
            "El Braya": {
                "expressOnly": true
            },
            "El Kerma": {
                "expressOnly": true
            },
            "Es Senia": {
                "expressOnly": true
            },
            "Gdyel": {
                "expressOnly": true
            },
            "Hassi Ben Okba": {
                "expressOnly": true
            },
            "Hassi Bounif": {
                "expressOnly": true
            },
            "Hassi Mefsoukh": {
                "expressOnly": true
            },
            "Marsat El Hadjadj": {
                "expressOnly": true
            },
            "Mers El Kébir": {
                "expressOnly": true
            },
            "Misserghin": {
                "expressOnly": true
            },
            "Oran": {},
            "Oued Tlelat": {
                "expressOnly": true
            },
            "Sidi Benyebka": {
                "expressOnly": true
            },
            "Sidi Chami": {
                "expressOnly": true
            },
            "Tafraoui": {
                "expressOnly": true
            }
        }
    },
    "32-El bayadh": {
        "zone": 4,
        "communes": {
            "Aïn El Orak": {
                "expressOnly": true
            },
            "Arbaouat": {
                "expressOnly": true
            },
            "Boualem": {
                "expressOnly": true
            },
            "Bougtoub": {
                "expressOnly": true
            },
            "Boussemghoun": {
                "expressOnly": true
            },
            "Brezina": {
                "expressOnly": true
            },
            "Chellala": {
                "expressOnly": true
            },
            "El Abiodh Sidi Cheikh": {
                "expressOnly": true
            },
            "El Bayadh": {},
            "El Kheiter": {
                "expressOnly": true
            },
            "El Mehara": {
                "expressOnly": true
            },
            "Ghassoul": {
                "expressOnly": true
            },
            "Kef El Ahmar": {
                "expressOnly": true
            },
            "Rogassa": {
                "expressOnly": true
            },
            "Sidi Tifour": {
                "expressOnly": true
            },
            "Stitten": {
                "expressOnly": true
            }
        }
    },
    "33-Illizi": {
        "zone": 5,
        "communes": {
            "Bordj El Haouas": {
                "expressOnly": true
            },
            "Djanet": {},
            "Illizi": {},
            "In Amenas": {
                "expressOnly": true
            }
        }
    },
    "34-Bordj Bou Arreridj": {
        "zone": 2,
        "communes": {
            "Aïn Taghrout": {
                "expressOnly": true
            },
            "Aïn Tesra": {
                "expressOnly": true
            },
            "Belimour": {
                "expressOnly": true
            },
            "Ben Daoud": {
                "expressOnly": true
            },
            "Bir Kasdali": {
                "expressOnly": true
            },
            "Bordj Bou Arreridj": {},
            "Bordj Ghédir": {
                "expressOnly": true
            },
            "Bordj Zemoura": {
                "expressOnly": true
            },
            "Colla": {
                "expressOnly": true
            },
            "Djaafra": {
                "expressOnly": true
            },
            "El Ach": {
                "expressOnly": true
            },
            "El Achir": {
                "expressOnly": true
            },
            "El Anseur": {
                "expressOnly": true
            },
            "El Hamadia": {
                "expressOnly": true
            },
            "El M'hir": {
                "expressOnly": true
            },
            "El Main": {
                "expressOnly": true
            },
            "Ghilassa": {
                "expressOnly": true
            },
            "Haraza": {
                "expressOnly": true
            },
            "Hasnaoua": {
                "expressOnly": true
            },
            "Khelil": {
                "expressOnly": true
            },
            "Ksour": {
                "expressOnly": true
            },
            "Mansoura": {
                "expressOnly": true
            },
            "Medjana": {
                "expressOnly": true
            },
            "Ouled Brahem": {
                "expressOnly": true
            },
            "Ouled Dahmane": {
                "expressOnly": true
            },
            "Ouled Sidi Brahim": {
                "expressOnly": true
            },
            "Rabta": {
                "expressOnly": true
            },
            "Ras El Oued": {
                "expressOnly": true
            },
            "Sidi Embarek": {
                "expressOnly": true
            },
            "Taglait": {
                "expressOnly": true
            },
            "Tassameurt": {
                "expressOnly": true
            },
            "Tefreg": {
                "expressOnly": true
            },
            "Teniet En Nasr": {
                "expressOnly": true
            },
            "Tixter": {
                "expressOnly": true
            }
        }
    },
    "35-Boumerdes": {
        "zone": 2,
        "communes": {
            "Afir": {
                "expressOnly": true
            },
            "Ammal": {
                "expressOnly": true
            },
            "Baghlia": {
                "expressOnly": true
            },
            "Ben Choud": {
                "expressOnly": true
            },
            "Beni Amrane": {
                "expressOnly": true
            },
            "Bordj Menaiel": {},
            "Boudouaou": {
                "expressOnly": true
            },
            "Boudouaou El Bahri": {
                "expressOnly": true
            },
            "Boumerdes": {},
            "Bouzegza Keddara": {
                "expressOnly": true
            },
            "Chabet el Ameur": {
                "expressOnly": true
            },
            "Corso": {
                "expressOnly": true
            },
            "Dellys": {
                "expressOnly": true
            },
            "Djinet": {
                "expressOnly": true
            },
            "El Kharrouba": {
                "expressOnly": true
            },
            "Hammedi": {
                "expressOnly": true
            },
            "Issers": {
                "expressOnly": true
            },
            "Khemis El Khechna": {
                "expressOnly": true
            },
            "Larbatache": {
                "expressOnly": true
            },
            "Leghata": {
                "expressOnly": true
            },
            "Naciria": {
                "expressOnly": true
            },
            "Ouled Aissa": {
                "expressOnly": true
            },
            "Ouled Hedadj": {
                "expressOnly": true
            },
            "Ouled Moussa": {
                "expressOnly": true
            },
            "Si Mustapha": {
                "expressOnly": true
            },
            "Sidi Daoud": {
                "expressOnly": true
            },
            "Souk El Had": {
                "expressOnly": true
            },
            "Taourga": {
                "expressOnly": true
            },
            "Thenia": {
                "expressOnly": true
            },
            "Tidjelabine": {
                "expressOnly": true
            },
            "Timezrit": {
                "expressOnly": true
            },
            "Zemmouri": {
                "expressOnly": true
            }
        }
    },
    "36-El Tarf": {
        "zone": 2,
        "communes": {
            "Aïn El Assel": {
                "expressOnly": true
            },
            "Aïn Kerma": {
                "expressOnly": true
            },
            "Asfour": {
                "expressOnly": true
            },
            "Ben Mehidi": {
                "expressOnly": true
            },
            "Berrihane": {
                "expressOnly": true
            },
            "Besbes": {
                "expressOnly": true
            },
            "Bougous": {
                "expressOnly": true
            },
            "Bouhadjar": {
                "expressOnly": true
            },
            "Bouteldja": {
                "expressOnly": true
            },
            "Chebaita Mokhtar": {
                "expressOnly": true
            },
            "Chefia": {
                "expressOnly": true
            },
            "Chihani": {
                "expressOnly": true
            },
            "Dréan": {
                "expressOnly": true
            },
            "Echatt": {
                "expressOnly": true
            },
            "El Aioun": {
                "expressOnly": true
            },
            "El Kala": {
                "expressOnly": true
            },
            "El Tarf": {},
            "Hammam Beni Salah": {
                "expressOnly": true
            },
            "Lac des Oiseaux": {
                "expressOnly": true
            },
            "Oued Zitoun": {
                "expressOnly": true
            },
            "Raml Souk": {
                "expressOnly": true
            },
            "Souarekh": {
                "expressOnly": true
            },
            "Zerizer": {
                "expressOnly": true
            },
            "Zitouna": {
                "expressOnly": true
            }
        }
    },
    "37-Tindouf": {
        "zone": 5,
        "communes": {
            "Oum el Assel": {
                "expressOnly": true
            },
            "Tindouf": {}
        }
    },
    "38-Tissemsilt": {
        "zone": 2,
        "communes": {
            "Ammari": {
                "expressOnly": true
            },
            "Bordj Bou Naama": {
                "expressOnly": true
            },
            "Bordj El Emir Abdelkader": {
                "expressOnly": true
            },
            "Boucaid": {
                "expressOnly": true
            },
            "Khemisti": {
                "expressOnly": true
            },
            "Lardjem": {
                "expressOnly": true
            },
            "Layoune": {
                "expressOnly": true
            },
            "Lazharia": {
                "expressOnly": true
            },
            "Maacem": {
                "expressOnly": true
            },
            "Melaab": {
                "expressOnly": true
            },
            "Ouled Bessem": {
                "expressOnly": true
            },
            "Sidi Lantri": {
                "expressOnly": true
            },
            "Sidi Slimane": {
                "expressOnly": true
            },
            "Tamalaht": {
                "expressOnly": true
            },
            "Theniet El Had": {
                "expressOnly": true
            },
            "Tissemsilt": {},
            "Youssoufia": {
                "expressOnly": true
            }
        }
    },
    "39-El Oued": {
        "zone": 3,
        "communes": {
            "Bayadha": {
                "expressOnly": true
            },
            "Beni Guecha": {
                "expressOnly": true
            },
            "Debila": {
                "expressOnly": true
            },
            "Djamaa": {},
            "Douar El Ma": {
                "expressOnly": true
            },
            "El M'Ghair": {},
            "El Ogla": {
                "expressOnly": true
            },
            "El Oued": {},
            "Guemar": {
                "expressOnly": true
            },
            "Hamraia": {
                "expressOnly": true
            },
            "Hassani Abdelkrim": {
                "expressOnly": true
            },
            "Hassi Khalifa": {
                "expressOnly": true
            },
            "Kouinine": {
                "expressOnly": true
            },
            "M'Rara": {
                "expressOnly": true
            },
            "Magrane": {
                "expressOnly": true
            },
            "Mih Ouansa": {
                "expressOnly": true
            },
            "Nakhla": {
                "expressOnly": true
            },
            "Oued El Alenda": {
                "expressOnly": true
            },
            "Oum Touyour": {
                "expressOnly": true
            },
            "Ourmas": {
                "expressOnly": true
            },
            "Reguiba": {
                "expressOnly": true
            },
            "Robbah": {
                "expressOnly": true
            },
            "Sidi Amrane": {
                "expressOnly": true
            },
            "Sidi Aoun": {
                "expressOnly": true
            },
            "Sidi Khellil": {
                "expressOnly": true
            },
            "Still": {
                "expressOnly": true
            },
            "Taghzout": {
                "expressOnly": true
            },
            "Taleb Larbi": {
                "expressOnly": true
            },
            "Tendla": {
                "expressOnly": true
            },
            "Trifaoui": {
                "expressOnly": true
            }
        }
    },
    "40-Khenchela": {
        "zone": 2,
        "communes": {
            "Aïn Touila": {
                "expressOnly": true
            },
            "Babar": {
                "expressOnly": true
            },
            "Baghai": {
                "expressOnly": true
            },
            "Bouhmama": {
                "expressOnly": true
            },
            "Chechar": {
                "expressOnly": true
            },
            "Chelia": {
                "expressOnly": true
            },
            "El Hamma": {
                "expressOnly": true
            },
            "El Mahmal": {
                "expressOnly": true
            },
            "El Oueldja": {
                "expressOnly": true
            },
            "Ensigha": {
                "expressOnly": true
            },
            "Kais": {
                "expressOnly": true
            },
            "Khenchela": {},
            "M'Sara": {
                "expressOnly": true
            },
            "M'Toussa": {
                "expressOnly": true
            },
            "Ouled Rechache": {
                "expressOnly": true
            },
            "Remila": {
                "expressOnly": true
            },
            "Tamza": {
                "expressOnly": true
            },
            "Taouzient": {
                "expressOnly": true
            },
            "Yabous": {
                "expressOnly": true
            }
        }
    },
    "41-Souk Ahras": {
        "zone": 2,
        "communes": {
            "Aïn Zana": {
                "expressOnly": true
            },
            "Bir Bou Haouch": {
                "expressOnly": true
            },
            "Drea": {
                "expressOnly": true
            },
            "Hanancha": {
                "expressOnly": true
            },
            "Heddada": {
                "expressOnly": true
            },
            "Khedara": {
                "expressOnly": true
            },
            "Khemissa": {
                "expressOnly": true
            },
            "M'daourouch": {
                "expressOnly": true
            },
            "Mechroha": {
                "expressOnly": true
            },
            "Merahna": {
                "expressOnly": true
            },
            "Ouillen": {
                "expressOnly": true
            },
            "Ouled Driss": {
                "expressOnly": true
            },
            "Ragouba": {
                "expressOnly": true
            },
            "Sedrata": {
                "expressOnly": true
            },
            "Sidi Fredj": {
                "expressOnly": true
            },
            "Souk Ahras": {},
            "Taoura": {
                "expressOnly": true
            },
            "Tiffech": {
                "expressOnly": true
            },
            "Zaarouria": {
                "expressOnly": true
            },
            "Zouabi": {
                "expressOnly": true
            }
        }
    },
    "42-Tipaza": {
        "zone": 2,
        "communes": {
            "Aghbal": {
                "expressOnly": true
            },
            "Ahmar El Aïn": {
                "expressOnly": true
            },
            "Aïn Tagourait": {
                "expressOnly": true
            },
            "Attatba": {
                "expressOnly": true
            },
            "Beni Milleuk": {
                "expressOnly": true
            },
            "Bou Ismaïl": {
                "expressOnly": true
            },
            "Bouharoun": {
                "expressOnly": true
            },
            "Bourkika": {
                "expressOnly": true
            },
            "Chaiba": {
                "expressOnly": true
            },
            "Cherchell": {
                "expressOnly": true
            },
            "Damous": {
                "expressOnly": true
            },
            "Douaouda": {
                "expressOnly": true
            },
            "Fouka": {
                "expressOnly": true
            },
            "Gouraya": {
                "expressOnly": true
            },
            "Hadjeret Ennous": {
                "expressOnly": true
            },
            "Hadjout": {
                "expressOnly": true
            },
            "Khemisti": {
                "expressOnly": true
            },
            "Koléa": {
                "expressOnly": true
            },
            "Larhat": {
                "expressOnly": true
            },
            "Menaceur": {
                "expressOnly": true
            },
            "Merad": {
                "expressOnly": true
            },
            "Messelmoun": {
                "expressOnly": true
            },
            "Nador": {
                "expressOnly": true
            },
            "Sidi Amar": {
                "expressOnly": true
            },
            "Sidi Ghiles": {
                "expressOnly": true
            },
            "Sidi Rached": {
                "expressOnly": true
            },
            "Sidi Semiane": {
                "expressOnly": true
            },
            "Tipaza": {}
        }
    },
    "43-Mila": {
        "zone": 2,
        "communes": {
            "Ahmed Rachedi": {
                "expressOnly": true
            },
            "Aïn Beida Harriche": {
                "expressOnly": true
            },
            "Aïn Mellouk": {
                "expressOnly": true
            },
            "Aïn Tine": {
                "expressOnly": true
            },
            "Amira Arrès": {
                "expressOnly": true
            },
            "Benyahia Abderrahmane": {
                "expressOnly": true
            },
            "Bouhatem": {
                "expressOnly": true
            },
            "Chelghoum Laid": {},
            "El Mechira": {
                "expressOnly": true
            },
            "Ferdjioua": {
                "expressOnly": true
            },
            "Grarem Gouga": {
                "expressOnly": true
            },
            "Hamala": {
                "expressOnly": true
            },
            "Mila": {},
            "Oued Athmania": {
                "expressOnly": true
            },
            "Oued Endja": {
                "expressOnly": true
            },
            "Oued Seguen": {
                "expressOnly": true
            },
            "Ouled Khalouf": {
                "expressOnly": true
            },
            "Rouached": {
                "expressOnly": true
            },
            "Sidi Khelifa": {
                "expressOnly": true
            },
            "Sidi Merouane": {
                "expressOnly": true
            },
            "Tadjenanet": {
                "expressOnly": true
            },
            "Teleghma": {
                "expressOnly": true
            },
            "Yahia Beni Guecha": {
                "expressOnly": true
            },
            "Zeghaia": {
                "expressOnly": true
            }
        }
    },
    "44-Aïn Benian": {
        "zone": 2,
        "communes": {
            "Aïn Benian": {
                "expressOnly": true
            },
            "Aïn Bouyahia": {
                "expressOnly": true
            },
            "Aïn Defla": {},
            "Aïn Lechiekh": {
                "expressOnly": true
            },
            "Aïn Soltane": {
                "expressOnly": true
            },
            "Aïn Torki": {
                "expressOnly": true
            },
            "Arib": {
                "expressOnly": true
            },
            "Ben Allal": {
                "expressOnly": true
            },
            "Bir Ould Khelifa": {
                "expressOnly": true
            },
            "Birbouche": {
                "expressOnly": true
            },
            "Bordj Emir Khaled": {
                "expressOnly": true
            },
            "Boumedfaa": {
                "expressOnly": true
            },
            "Bourached": {
                "expressOnly": true
            },
            "Djelida": {
                "expressOnly": true
            },
            "Djendel": {
                "expressOnly": true
            },
            "El Abadia": {
                "expressOnly": true
            },
            "El Amra": {
                "expressOnly": true
            },
            "El Attaf": {
                "expressOnly": true
            },
            "Hammam Righa": {
                "expressOnly": true
            },
            "Hoceinia": {
                "expressOnly": true
            },
            "Khemis Miliana": {},
            "Mekhatria": {
                "expressOnly": true
            },
            "Miliana": {
                "expressOnly": true
            },
            "Oued Chorfa": {
                "expressOnly": true
            },
            "Oued Djemaa": {
                "expressOnly": true
            },
            "Rouina": {
                "expressOnly": true
            },
            "Sidi Lakhdar": {
                "expressOnly": true
            },
            "Tacheta Zougagha": {
                "expressOnly": true
            },
            "Tarik Ibn Ziad": {
                "expressOnly": true
            },
            "Tiberkanine": {
                "expressOnly": true
            },
            "Zeddine": {
                "expressOnly": true
            }
        }
    },
    "45-Naâma": {
        "zone": 4,
        "communes": {
            "Aïn Ben Khelil": {
                "expressOnly": true
            },
            "Aïn Sefra": {
                "expressOnly": true
            },
            "Assela": {
                "expressOnly": true
            },
            "Djeniene Bourezg": {
                "expressOnly": true
            },
            "El Biod": {
                "expressOnly": true
            },
            "Makman Ben Amer": {
                "expressOnly": true
            },
            "Mecheria": {},
            "Moghrar": {
                "expressOnly": true
            },
            "Naâma": {
                "expressOnly": true
            },
            "Sfissifa": {
                "expressOnly": true
            },
            "Tiout": {
                "expressOnly": true
            }
        }
    },
    "46-Aïn Témouchent": {
        "zone": 1,
        "communes": {
            "Aghlal": {
                "expressOnly": true
            },
            "Aïn El Arbaa": {
                "expressOnly": true
            },
            "Aïn Kihal": {
                "expressOnly": true
            },
            "Aïn Témouchent": {},
            "Aïn Tolba": {
                "expressOnly": true
            },
            "Aoubellil": {
                "expressOnly": true
            },
            "Beni Saf": {},
            "Bouzedjar": {
                "expressOnly": true
            },
            "Chaabat El Leham": {
                "expressOnly": true
            },
            "Chentouf": {
                "expressOnly": true
            },
            "El Amria": {
                "expressOnly": true
            },
            "El Emir Abdelkader": {
                "expressOnly": true
            },
            "El Malah": {
                "expressOnly": true
            },
            "El Messaid": {
                "expressOnly": true
            },
            "Hammam Bouhadjar": {
                "expressOnly": true
            },
            "Hassasna": {
                "expressOnly": true
            },
            "Hassi El Ghella": {
                "expressOnly": true
            },
            "Oued Berkeche": {
                "expressOnly": true
            },
            "Oued Sabah": {
                "expressOnly": true
            },
            "Ouled Boudjemaa": {
                "expressOnly": true
            },
            "Ouled Kihal": {
                "expressOnly": true
            },
            "Oulhaça El Gheraba": {
                "expressOnly": true
            },
            "Sidi Ben Adda": {
                "expressOnly": true
            },
            "Sidi Boumedienne": {
                "expressOnly": true
            },
            "Sidi Ouriache": {
                "expressOnly": true
            },
            "Sidi Safi": {
                "expressOnly": true
            },
            "Tamzoura": {
                "expressOnly": true
            },
            "Terga": {
                "expressOnly": true
            }
        }
    },
    "47-Ghardaïa": {
        "zone": 3,
        "communes": {
            "Berriane": {
                "expressOnly": true
            },
            "Bounoura": {
                "expressOnly": true
            },
            "Dhayet Bendhahoua": {
                "expressOnly": true
            },
            "El Atteuf": {
                "expressOnly": true
            },
            "El Guerrara": {},
            "El Menia": {},
            "Ghardaïa": {},
            "Hassi Fehal": {
                "expressOnly": true
            },
            "Hassi Gara": {
                "expressOnly": true
            },
            "Mansoura": {
                "expressOnly": true
            },
            "Metlili": {},
            "Sebseb": {
                "expressOnly": true
            },
            "Zelfana": {
                "expressOnly": true
            }
        }
    },
    "48-Relizane": {
        "zone": 2,
        "communes": {
            "Aïn Rahma": {
                "expressOnly": true
            },
            "Aïn Tarek": {
                "expressOnly": true
            },
            "Ammi Moussa": {
                "expressOnly": true
            },
            "Belassel Bouzegza": {
                "expressOnly": true
            },
            "Bendaoud": {
                "expressOnly": true
            },
            "Beni Dergoun": {
                "expressOnly": true
            },
            "Beni Zentis": {
                "expressOnly": true
            },
            "Dar Ben Abdellah": {
                "expressOnly": true
            },
            "Djidioua": {
                "expressOnly": true
            },
            "El Guettar": {},
            "El Hamadna": {
                "expressOnly": true
            },
            "El Hassi": {
                "expressOnly": true
            },
            "El Matmar ": {
                "expressOnly": true
            },
            "El Ouldja": {
                "expressOnly": true
            },
            "Had Echkalla": {
                "expressOnly": true
            },
            "Hamri": {
                "expressOnly": true
            },
            "Kalaa": {},
            "Lahlef": {
                "expressOnly": true
            },
            "Mazouna": {
                "expressOnly": true
            },
            "Mediouna": {
                "expressOnly": true
            },
            "Mendes": {
                "expressOnly": true
            },
            "Merdja Sidi Abed": {
                "expressOnly": true
            },
            "Ouarizane": {
                "expressOnly": true
            },
            "Oued El Djemaa": {
                "expressOnly": true
            },
            "Oued Essalem": {
                "expressOnly": true
            },
            "Oued Rhiou": {},
            "Ouled Aiche": {
                "expressOnly": true
            },
            "Ouled Sidi Mihoub": {
                "expressOnly": true
            },
            "Ramka": {
                "expressOnly": true
            },
            "Relizane": {},
            "Sidi Khettab": {
                "expressOnly": true
            },
            "Sidi Lazreg": {
                "expressOnly": true
            },
            "Sidi M'Hamed Ben Ali": {
                "expressOnly": true
            },
            "Sidi M'Hamed Benaouda": {
                "expressOnly": true
            },
            "Sidi Saada": {
                "expressOnly": true
            },
            "Souk El Had": {
                "expressOnly": true
            },
            "Yellel": {
                "expressOnly": true
            },
            "Zemmora": {
                "expressOnly": true
            }
        }
    },
    "59-Aflou أفلو": {
        "zone": 5,
        "communes": {
            "Aflou": {
                "horsZone": 1
            }
        }
    }
};
