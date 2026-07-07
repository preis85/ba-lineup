/* Única fonte de conteúdo da aplicação. Edite este objeto para usar outro lineup. */
window.LINEUP = {
  festival: { name: "Brutal Assault Timeline", edition: "2026", location: "4–8 de agosto" },
  genreGroups: {
    "Thrash": ["ONSLAUGHT","MUNICIPAL WASTE","METAL CHURCH","DEATH ANGEL","ANGELUS APATRIDA","VIO-LENCE","CORONER","SACRED REICH","DEMOLITION HAMMER","MORTAL SIN"],
    "Death": ["200 STAB WOUNDS","SANGUISUGABOGG","DECEASED","BAEST","DEICIDE","IMMOLATION","CRYPTIC SHIFT","INTERNAL BLEEDING","SIGNS OF THE SWARM","KRAANIUM","GRAVE","CHAOTIAN","DESERTED FEAR","VULVODYNIA","REVOCATION","MONSTROSITY","PEELINGFLESH","COFFINS","WORMED","VADER","CRYPTOPSY","ILLDISPOSED","DUSK","SADISTIC INTENT"],
    "Black": ["BATUSHKA","BLACKBRAID","AURA NOIR","TORMENTOR","ALTARS ABLAZE","THY CATAFALQUE","MISÞYRMING plays Behemoth","MARDUK","SNĚŤ","SAOR","CARPATHIAN FOREST","THE RUINS OF BEVERAST","WITCH CLUB SATAN","DOM ZŁY","OLD MAN'S CHILD","CRADLE OF FILTH"],
    "Doom": ["AHAB","NOVEMBERS DOOM","ELDER","KYLESA","COVEN","DRACONIAN","FU MANCHU","CANDLEMASS","BORKNAGAR","THE 3RD AND THE MORTAL","TRIPTYKON"],
    "Hardcore": ["GUILT TRIP","H2O","CROWBAR","FIT FOR AN AUTOPSY","THE CASUALTIES","KITTIE","BLEED FROM WITHIN","THY ART IS MURDER","TERROR","SLOPE","ALLT","PALEFACE SWISS","HEAVY//HITTER","IMMINENCE","THE GHOST INSIDE","LEFT TO DIE","CONJURER","DOODSESKADER","VENDED","AMENRA","BODY COUNT feat. Ice-T","RATOS DE PORÃO"],
    "Progressive": ["UNEARTH","SAMAEL","NEVERMORE","PERIPHERY","PROTEST THE HERO","IOTUNN","WALTARI with Symphonic Orchestra","SEPTICFLESH","AMORPHIS","PSYCHONAUT","WYATT E.","CORROSION OF CONFORMITY","ANIMALS AS LEADERS","PRIMUS","KATATONIA","LVMEN","INSOMNIUM","DEAFHEAVEN","DER WEG EINER FREIHEIT","SÓLSTAFIR","CRIPPLING ALCOHOLISM","ALCEST"],
    "Industrial": ["KIM DRACULA","DIE KRUPPS","VIOLENT MAGIC ORCHESTRA","HOCICO","CARPENTER BRUT","FRONT LINE ASSEMBLY","MASTER BOOT RECORD","PIG","CLAWFINGER","PERTURBATOR","HEALTH"],
    "Heavy": ["PATRIARCHA","MORDLOCH","NAHUM","PRVNÍ HOŘE","FILTH","MORAX","THE LAWS performing Sarcófago","ARMORED SAINT","BÖLZER","CASTLE RAT","¡III NIÑO!","ANTIMATTER","EIVØR","ARTHUR BROWN","A.A. WILLIAMS","DJERV","WARDRUNA","SLIFT","BRUTAL KIDS","RAGANA"]
  },
  days: [
    { id: "ter", label: "Terça-feira", date: "04 AGO", note: "Warm Up", stages: [
      { name: "Palco Obscure", shows: [["14:40","15:10","PATRIARCHA"],["15:30","16:00","MORDLOCH"],["16:15","16:50","NAHUM"],["17:10","17:50","PRVNÍ HOŘE"],["18:10","18:50","FILTH"],["19:10","19:50","MORAX"],["20:10","20:50","AHAB"],["21:10","21:55","THE LAWS performing Sarcófago"]] }
    ]},
    { id: "qua", label: "Quarta-feira", date: "05 AGO", stages: [
      { name: "Main Stages (Sea Shepherd / Marshall)", shows: [["12:00","12:30","GUILT TRIP"],["12:35","13:15","ONSLAUGHT"],["13:20","14:00","UNEARTH"],["14:05","14:45","H2O"],["14:50","15:35","VENDED"],["15:40","16:20","METAL CHURCH"],["16:25","17:10","CROWBAR"],["17:15","18:05","SAMAEL"],["18:10","19:05","NEVERMORE"],["19:10","20:00","FIT FOR AN AUTOPSY"],["20:05","21:05","PERIPHERY"],["21:10","22:15","MUNICIPAL WASTE"],["22:20","23:25","TRIPTYKON"],["23:30","00:30","AMENRA"],["00:35","01:30","BATUSHKA"]] },
      { name: "Palco Obscure", shows: [["13:30","14:05","200 STAB WOUNDS"],["14:30","15:15","ARMORED SAINT"],["15:45","16:25","NOVEMBERS DOOM"],["16:55","17:35","ELDER"],["18:05","18:50","KYLESA"],["19:20","20:05","COVEN"],["20:40","21:30","KIM DRACULA"],["22:00","22:55","SÓLSTAFIR"],["23:25","00:15","PROTEST THE HERO"],["00:45","01:30","DIE KRUPPS"],["02:00","02:40","WITCH CLUB SATAN"]] },
      { name: "Palco Octagon", shows: [["17:15","18:00","DOM ZŁY"],["18:30","19:15","CRIPPLING ALCOHOLISM"],["19:45","20:30","IOTUNN"],["21:00","22:00","BÖLZER"],["22:30","23:30","VIOLENT MAGIC ORCHESTRA"]] }
    ]},
    { id: "qui", label: "Quinta-feira", date: "06 AGO", stages: [
      { name: "Main Stages (Sea Shepherd / Marshall)", shows: [["10:30","11:00","CRYPTIC SHIFT"],["11:05","11:35","BAEST"],["11:40","12:15","THE CASUALTIES"],["12:20","12:55","DECEASED"],["13:00","13:35","SANGUISUGABOGG"],["13:40","14:15","ILLDISPOSED"],["14:20","15:05","HOCICO"],["15:10","15:55","KITTIE"],["16:00","16:45","BLEED FROM WITHIN"],["16:50","17:35","THY ART IS MURDER"],["17:40","18:45","WALTARI with Symphonic Orchestra"],["18:50","19:50","SEPTICFLESH"],["19:55","21:00","BODY COUNT feat. Ice-T"],["21:05","22:10","AMORPHIS"],["22:15","23:25","CARPENTER BRUT"],["23:30","00:30","ALCEST"],["00:35","01:30","DEICIDE"]] },
      { name: "Palco Obscure", shows: [["14:00","14:35","CASTLE RAT"],["15:05","15:45","¡III NIÑO!"],["16:15","16:55","DEATH ANGEL", null, 2],["17:25","18:05","BLACKBRAID", null, 1],["18:35","19:20","TERROR"],["19:50","20:35","DRACONIAN"],["21:05","21:55","IMMOLATION"],["22:25","23:15","AURA NOIR"],["23:45","00:30","FU MANCHU"],["01:00","01:40","FRONT LINE ASSEMBLY"],["02:10","02:50","TORMENTOR"]] },
      { name: "Palco Octagon", shows: [["17:30","18:00","SLOPE"],["18:30","19:15","PSYCHONAUT"],["19:45","20:30","WYATT E."],["21:00","21:50","LVMEN"],["22:30","23:30","ANTIMATTER"]] }
    ]},
    { id: "sex", label: "Sexta-feira", date: "07 AGO", stages: [
      { name: "Main Stages (Sea Shepherd / Marshall)", shows: [["10:30","11:00","ALTARS ABLAZE"],["11:05","11:40","ALLT"],["11:45","12:20","INTERNAL BLEEDING"],["12:25","13:00","~ TBC ~"],["13:05","13:40","ANGELUS APATRIDA"],["13:45","14:25","RATOS DE PORÃO"],["14:30","15:10","SIGNS OF THE SWARM"],["15:15","15:55","SNĚŤ"],["16:00","16:50","CORROSION OF CONFORMITY"],["16:55","17:45","ANIMALS AS LEADERS"],["17:50","18:45","CORONER"],["18:50","19:40","PALEFACE SWISS"],["19:45","20:50","CLAWFINGER"],["20:55","22:10","PRIMUS"],["22:15","23:15","EIVØR"],["23:20","00:20","KATATONIA"],["00:25","01:25","OLD MAN'S CHILD"]] },
      { name: "Palco Obscure", shows: [["14:30","15:10","SAOR"],["15:35","16:15","KRAANIUM"],["16:45","17:25","THY CATAFALQUE"],["17:55","18:40","VIO-LENCE"],["19:10","20:00","MASTER BOOT RECORD"],["20:30","21:25","GRAVE"],["22:00","22:50","MISÞYRMING plays Behemoth"],["23:20","00:05","ARTHUR BROWN"],["00:35","01:25","MARDUK"],["01:55","02:40","PIG"]] },
      { name: "Palco Octagon", shows: [["17:30","18:00","CHAOTIAN"],["18:30","19:15","DUSK"],["19:45","20:30","MORTAL SIN"],["21:00","21:50","SADISTIC INTENT"],["22:30","23:30","A.A. WILLIAMS"]] }
    ]},
    { id: "sab", label: "Sábado", date: "08 AGO", stages: [
      { name: "Main Stages (Sea Shepherd / Marshall)", shows: [["10:30","11:00","DESERTED FEAR"],["11:05","11:40","VULVODYNIA"],["11:45","12:20","DJERV"],["12:25","13:00","HEAVY//HITTER"],["13:05","13:45","REVOCATION"],["13:50","14:30","SACRED REICH"],["14:35","15:15","MONSTROSITY"],["15:20","16:00","DEMOLITION HAMMER"],["16:05","16:50","PEELINGFLESH"],["16:55","17:45","IMMINENCE"],["17:50","18:45","INSOMNIUM"],["18:50","19:45","THE GHOST INSIDE"],["19:50","20:55","CANDLEMASS"],["21:00","22:00","LEFT TO DIE"],["22:05","23:20","WARDRUNA"],["23:25","00:25","CRADLE OF FILTH"],["00:30","01:30","PERTURBATOR"]] },
      { name: "Palco Obscure", shows: [["14:30","15:05","COFFINS"],["15:35","16:15","THE 3RD AND THE MORTAL"],["16:45","17:20","WORMED"],["17:50","18:40","SLIFT"],["19:10","20:00","VADER"],["20:30","21:20","DEAFHEAVEN"],["22:00","22:50","HEALTH"],["23:30","00:20","BORKNAGAR"],["00:50","01:30","CRYPTOPSY"],["02:00","02:40","CARPATHIAN FOREST"]] },
      { name: "Palco Octagon", shows: [["16:00","16:30","BRUTAL KIDS"],["17:30","18:00","CONJURER"],["18:30","19:15","DOODSESKADER"],["19:45","20:30","RAGANA"],["21:00","22:00","DER WEG EINER FREIHEIT"],["22:30","23:30","THE RUINS OF BEVERAST"]] }
    ]}
  ]
};

/* O 5º item opcional de cada show define a prioridade: 0 = sem prioridade, 1 = baixa, 2 = alta. */
window.LINEUP.days.forEach(day => {
  day.stages.forEach(stage => {
    stage.shows = stage.shows.map(show => ({
      start: show[0], end: show[1], artist: show[2], genre: show[3], priority: Number.isInteger(show[4]) ? show[4] : 0
    }));
  });
});
