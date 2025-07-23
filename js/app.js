// 100 sehr häufige englisch-deutsche Wörter mit Artikel
const vocab = [
  { en: "the man", de: "der Mann" },
  { en: "the woman", de: "die Frau" },
  { en: "the child", de: "das Kind" },
  { en: "the house", de: "das Haus" },
  { en: "the car", de: "das Auto" },
  { en: "the book", de: "das Buch" },
  { en: "the apple", de: "der Apfel" },
  { en: "the bread", de: "das Brot" },
  { en: "the water", de: "das Wasser" },
  { en: "the dog", de: "der Hund" },
  { en: "the cat", de: "die Katze" },
  { en: "the table", de: "der Tisch" },
  { en: "the chair", de: "der Stuhl" },
  { en: "the door", de: "die Tür" },
  { en: "the window", de: "das Fenster" },
  { en: "the school", de: "die Schule" },
  { en: "the teacher", de: "der Lehrer" },
  { en: "the student", de: "der Schüler" },
  { en: "the friend", de: "der Freund" },
  { en: "the mother", de: "die Mutter" },
  { en: "the father", de: "der Vater" },
  { en: "the brother", de: "der Bruder" },
  { en: "the sister", de: "die Schwester" },
  { en: "the city", de: "die Stadt" },
  { en: "the street", de: "die Straße" },
  { en: "the train", de: "der Zug" },
  { en: "the bus", de: "der Bus" },
  { en: "the bicycle", de: "das Fahrrad" },
  { en: "the garden", de: "der Garten" },
  { en: "the flower", de: "die Blume" },
  { en: "the tree", de: "der Baum" },
  { en: "the sun", de: "die Sonne" },
  { en: "the moon", de: "der Mond" },
  { en: "the star", de: "der Stern" },
  { en: "the sky", de: "der Himmel" },
  { en: "the river", de: "der Fluss" },
  { en: "the mountain", de: "der Berg" },
  { en: "the sea", de: "das Meer" },
  { en: "the fish", de: "der Fisch" },
  { en: "the bird", de: "der Vogel" },
  { en: "the egg", de: "das Ei" },
  { en: "the cheese", de: "der Käse" },
  { en: "the meat", de: "das Fleisch" },
  { en: "the soup", de: "die Suppe" },
  { en: "the salad", de: "der Salat" },
  { en: "the potato", de: "die Kartoffel" },
  { en: "the rice", de: "der Reis" },
  { en: "the butter", de: "die Butter" },
  { en: "the salt", de: "das Salz" },
  { en: "the pepper", de: "der Pfeffer" },
  { en: "the sugar", de: "der Zucker" },
  { en: "the coffee", de: "der Kaffee" },
  { en: "the tea", de: "der Tee" },
  { en: "the milk", de: "die Milch" },
  { en: "the juice", de: "der Saft" },
  { en: "the beer", de: "das Bier" },
  { en: "the wine", de: "der Wein" },
  { en: "the glass", de: "das Glas" },
  { en: "the cup", de: "die Tasse" },
  { en: "the plate", de: "der Teller" },
  { en: "the knife", de: "das Messer" },
  { en: "the fork", de: "die Gabel" },
  { en: "the spoon", de: "der Löffel" },
  { en: "the bed", de: "das Bett" },
  { en: "the room", de: "das Zimmer" },
  { en: "the bathroom", de: "das Badezimmer" },
  { en: "the kitchen", de: "die Küche" },
  { en: "the shop", de: "das Geschäft" },
  { en: "the market", de: "der Markt" },
  { en: "the money", de: "das Geld" },
  { en: "the ticket", de: "die Fahrkarte" },
  { en: "the clock", de: "die Uhr" },
  { en: "the time", de: "die Zeit" },
  { en: "the day", de: "der Tag" },
  { en: "the week", de: "die Woche" },
  { en: "the month", de: "der Monat" },
  { en: "the year", de: "das Jahr" },
  { en: "the morning", de: "der Morgen" },
  { en: "the evening", de: "der Abend" },
  { en: "the night", de: "die Nacht" },
  { en: "the family", de: "die Familie" },
  { en: "the work", de: "die Arbeit" },
  { en: "the job", de: "der Beruf" },
  { en: "the holiday", de: "der Urlaub" },
  { en: "the party", de: "die Party" },
  { en: "the music", de: "die Musik" },
  { en: "the movie", de: "der Film" },
  { en: "the picture", de: "das Bild" },
  { en: "the letter", de: "der Brief" },
  { en: "the newspaper", de: "die Zeitung" },
  { en: "the computer", de: "der Computer" },
  { en: "the phone", de: "das Telefon" },
  { en: "the key", de: "der Schlüssel" },
  { en: "the bag", de: "die Tasche" },
  { en: "the shoe", de: "der Schuh" },
  { en: "the coat", de: "der Mantel" },
  { en: "the shirt", de: "das Hemd" },
  { en: "the dress", de: "das Kleid" },
  { en: "the trousers", de: "die Hose" },
  { en: "the uncle", de: "der Onkel" },
  { en: "the aunt", de: "die Tante" },
  { en: "the cousin", de: "der Cousin" },
  { en: "the niece", de: "die Nichte" },
  { en: "the nephew", de: "der Neffe" },
  { en: "the grandparents", de: "die Großeltern" },
  { en: "the grandmother", de: "die Großmutter" },
  { en: "the grandfather", de: "der Großvater" },
  { en: "the parents", de: "die Eltern" },
  { en: "the baby", de: "das Baby" },
  { en: "the boy", de: "der Junge" },
  { en: "the girl", de: "das Mädchen" },
  { en: "the neighbor", de: "der Nachbar" },
  { en: "the guest", de: "der Gast" },
  { en: "the host", de: "der Gastgeber" },
  { en: "the boss", de: "der Chef" },
  { en: "the colleague", de: "der Kollege" },
  { en: "the employee", de: "der Mitarbeiter" },
  { en: "the employer", de: "der Arbeitgeber" },
  { en: "the customer", de: "der Kunde" },
  { en: "the patient", de: "der Patient" },
  { en: "the doctor", de: "der Arzt" },
  { en: "the nurse", de: "die Krankenschwester" },
  { en: "the hospital", de: "das Krankenhaus" },
  { en: "the pharmacy", de: "die Apotheke" },
  { en: "the medicine", de: "die Medizin" },
  { en: "the illness", de: "die Krankheit" },
  { en: "the pain", de: "der Schmerz" },
  { en: "the head", de: "der Kopf" },
  { en: "the face", de: "das Gesicht" },
  { en: "the eye", de: "das Auge" },
  { en: "the ear", de: "das Ohr" },
  { en: "the nose", de: "die Nase" },
  { en: "the mouth", de: "der Mund" },
  { en: "the tooth", de: "der Zahn" },
  { en: "the neck", de: "der Hals" },
  { en: "the shoulder", de: "die Schulter" },
  { en: "the arm", de: "der Arm" },
  { en: "the hand", de: "die Hand" },
  { en: "the finger", de: "der Finger" },
  { en: "the leg", de: "das Bein" },
  { en: "the foot", de: "der Fuß" },
  { en: "the back", de: "der Rücken" },
  { en: "the stomach", de: "der Bauch" },
  { en: "the heart", de: "das Herz" },
  { en: "the blood", de: "das Blut" },
  { en: "the skin", de: "die Haut" },
  { en: "the hair", de: "das Haar" },
  { en: "the color", de: "die Farbe" },
  { en: "the red", de: "das Rot" },
  { en: "the blue", de: "das Blau" },
  { en: "the green", de: "das Grün" },
  { en: "the yellow", de: "das Gelb" },
  { en: "the black", de: "das Schwarz" },
  { en: "the white", de: "das Weiß" },
  { en: "the brown", de: "das Braun" },
  { en: "the gray", de: "das Grau" },
  { en: "the orange", de: "das Orange" },
  { en: "the pink", de: "das Rosa" },
  { en: "the purple", de: "das Lila" },
  { en: "the gold", de: "das Gold" },
  { en: "the silver", de: "das Silber" },
  { en: "the number", de: "die Zahl" },
  { en: "the one", de: "die Eins" },
  { en: "the two", de: "die Zwei" },
  { en: "the three", de: "die Drei" },
  { en: "the four", de: "die Vier" },
  { en: "the five", de: "die Fünf" },
  { en: "the six", de: "die Sechs" },
  { en: "the seven", de: "die Sieben" },
  { en: "the eight", de: "die Acht" },
  { en: "the nine", de: "die Neun" },
  { en: "the ten", de: "die Zehn" },
  { en: "the hundred", de: "das Hundert" },
  { en: "the thousand", de: "das Tausend" },
  { en: "the question", de: "die Frage" },
  { en: "the answer", de: "die Antwort" },
  { en: "the problem", de: "das Problem" },
  { en: "the solution", de: "die Lösung" },
  { en: "the reason", de: "der Grund" },
  { en: "the example", de: "das Beispiel" },
  { en: "the idea", de: "die Idee" },
  { en: "the plan", de: "der Plan" },
  { en: "the chance", de: "die Chance" },
  { en: "the hope", de: "die Hoffnung" },
  { en: "the dream", de: "der Traum" },
  { en: "the wish", de: "der Wunsch" },
  { en: "the love", de: "die Liebe" },
  { en: "the hate", de: "der Hass" },
  { en: "the fear", de: "die Angst" },
  { en: "the joy", de: "die Freude" },
  { en: "the fun", de: "der Spaß" },
  { en: "the peace", de: "der Frieden" },
  { en: "the war", de: "der Krieg" },
  { en: "the world", de: "die Welt" },
  { en: "the country", de: "das Land" },
  { en: "the state", de: "der Staat" },
  { en: "the government", de: "die Regierung" },
  { en: "the president", de: "der Präsident" },
  { en: "the king", de: "der König" },
  { en: "the queen", de: "die Königin" },
  { en: "the prince", de: "der Prinz" },
  { en: "the princess", de: "die Prinzessin" },
  { en: "the police", de: "die Polizei" },
  { en: "the fire", de: "das Feuer" },
  { en: "the air", de: "die Luft" },
  { en: "the earth", de: "die Erde" },
  { en: "the wind", de: "der Wind" },
  { en: "the rain", de: "der Regen" },
  { en: "the snow", de: "der Schnee" },
  { en: "the ice", de: "das Eis" },
  { en: "the cloud", de: "die Wolke" },
  { en: "the storm", de: "der Sturm" },
  { en: "the weather", de: "das Wetter" },
  { en: "the temperature", de: "die Temperatur" },
  { en: "the season", de: "die Jahreszeit" },
  { en: "the spring", de: "der Frühling" },
  { en: "the summer", de: "der Sommer" },
  { en: "the autumn", de: "der Herbst" },
  { en: "the winter", de: "der Winter" },
  { en: "the morning", de: "der Morgen" },
  { en: "the noon", de: "der Mittag" },
  { en: "the afternoon", de: "der Nachmittag" },
  { en: "the evening", de: "der Abend" },
  { en: "the night", de: "die Nacht" },
  { en: "the minute", de: "die Minute" },
  { en: "the second", de: "die Sekunde" },
  { en: "the beginning", de: "der Anfang" },
  { en: "the end", de: "das Ende" },
  { en: "the middle", de: "die Mitte" },
  { en: "the side", de: "die Seite" },
  { en: "the corner", de: "die Ecke" },
  { en: "the place", de: "der Ort" },
  { en: "the space", de: "der Raum" },
  { en: "the area", de: "die Fläche" },
  { en: "the region", de: "die Region" },
  { en: "the direction", de: "die Richtung" },
  { en: "the distance", de: "die Entfernung" },
  { en: "the height", de: "die Höhe" },
  { en: "the length", de: "die Länge" },
  { en: "the width", de: "die Breite" },
  { en: "the depth", de: "die Tiefe" },
  { en: "the weight", de: "das Gewicht" },
  { en: "the size", de: "die Größe" },
  { en: "the form", de: "die Form" },
  { en: "the line", de: "die Linie" },
  { en: "the circle", de: "der Kreis" },
  { en: "the square", de: "das Quadrat" },
  { en: "the triangle", de: "das Dreieck" },
  { en: "the point", de: "der Punkt" },
  { en: "the edge", de: "die Kante" },
  { en: "the surface", de: "die Oberfläche" },
  // --- Zusätzliche 100 Wörter ---
  { en: "the airport", de: "der Flughafen" },
  { en: "the airplane", de: "das Flugzeug" },
  { en: "the passport", de: "der Pass" },
  { en: "the suitcase", de: "der Koffer" },
  { en: "the ticket office", de: "der Fahrkartenschalter" },
  { en: "the platform", de: "der Bahnsteig" },
  { en: "the stop", de: "die Haltestelle" },
  { en: "the map", de: "die Karte" },
  { en: "the journey", de: "die Reise" },
  { en: "the luggage", de: "das Gepäck" },
  { en: "the reservation", de: "die Reservierung" },
  { en: "the hotel", de: "das Hotel" },
  { en: "the reception", de: "die Rezeption" },
  { en: "the room key", de: "der Zimmerschlüssel" },
  { en: "the elevator", de: "der Aufzug" },
  { en: "the stairs", de: "die Treppe" },
  { en: "the floor", de: "der Boden" },
  { en: "the ceiling", de: "die Decke" },
  { en: "the wall", de: "die Wand" },
  { en: "the window", de: "das Fenster" },
  { en: "the curtain", de: "der Vorhang" },
  { en: "the pillow", de: "das Kissen" },
  { en: "the blanket", de: "die Decke" },
  { en: "the sheet", de: "das Laken" },
  { en: "the wardrobe", de: "der Schrank" },
  { en: "the shelf", de: "das Regal" },
  { en: "the mirror", de: "der Spiegel" },
  { en: "the soap", de: "die Seife" },
  { en: "the towel", de: "das Handtuch" },
  { en: "the shower", de: "die Dusche" },
  { en: "the toilet", de: "die Toilette" },
  { en: "the toothbrush", de: "die Zahnbürste" },
  { en: "the toothpaste", de: "die Zahnpasta" },
  { en: "the comb", de: "der Kamm" },
  { en: "the brush", de: "die Bürste" },
  { en: "the razor", de: "der Rasierer" },
  { en: "the shampoo", de: "das Shampoo" },
  { en: "the soap", de: "die Seife" },
  { en: "the supermarket", de: "der Supermarkt" },
  { en: "the bakery", de: "die Bäckerei" },
  { en: "the butcher", de: "die Metzgerei" },
  { en: "the pharmacy", de: "die Apotheke" },
  { en: "the post office", de: "die Post" },
  { en: "the bank", de: "die Bank" },
  { en: "the cash", de: "das Bargeld" },
  { en: "the credit card", de: "die Kreditkarte" },
  { en: "the receipt", de: "der Kassenbon" },
  { en: "the price", de: "der Preis" },
  { en: "the offer", de: "das Angebot" },
  { en: "the sale", de: "der Verkauf" },
  { en: "the customer", de: "der Kunde" },
  { en: "the shop assistant", de: "der Verkäufer" },
  { en: "the queue", de: "die Schlange" },
  { en: "the basket", de: "der Korb" },
  { en: "the bag", de: "die Tüte" },
  { en: "the bottle", de: "die Flasche" },
  { en: "the can", de: "die Dose" },
  { en: "the box", de: "die Schachtel" },
  { en: "the package", de: "das Paket" },
  { en: "the stamp", de: "die Briefmarke" },
  { en: "the envelope", de: "der Umschlag" },
  { en: "the sender", de: "der Absender" },
  { en: "the recipient", de: "der Empfänger" },
  { en: "the address", de: "die Adresse" },
  { en: "the street", de: "die Straße" },
  { en: "the number", de: "die Nummer" },
  { en: "the city", de: "die Stadt" },
  { en: "the country", de: "das Land" },
  { en: "the language", de: "die Sprache" },
  { en: "the word", de: "das Wort" },
  { en: "the sentence", de: "der Satz" },
  { en: "the question", de: "die Frage" },
  { en: "the answer", de: "die Antwort" },
  { en: "the letter", de: "der Buchstabe" },
  { en: "the text", de: "der Text" },
  { en: "the book", de: "das Buch" },
  { en: "the page", de: "die Seite" },
  { en: "the pen", de: "der Stift" },
  { en: "the pencil", de: "der Bleistift" },
  { en: "the eraser", de: "der Radiergummi" },
  { en: "the ruler", de: "das Lineal" },
  { en: "the schoolbag", de: "die Schultasche" },
  { en: "the exercise book", de: "das Heft" },
  { en: "the homework", de: "die Hausaufgabe" },
  { en: "the lesson", de: "die Stunde" },
  { en: "the break", de: "die Pause" },
  { en: "the teacher", de: "die Lehrerin" },
  { en: "the student", de: "die Schülerin" },
  { en: "the class", de: "die Klasse" },
  { en: "the subject", de: "das Fach" },
  { en: "the mathematics", de: "die Mathematik" },
  { en: "the history", de: "die Geschichte" },
  { en: "the geography", de: "die Geografie" },
  { en: "the biology", de: "die Biologie" },
  { en: "the chemistry", de: "die Chemie" },
  { en: "the physics", de: "die Physik" },
  { en: "the sport", de: "der Sport" },
  { en: "the art", de: "die Kunst" },
  { en: "the music", de: "die Musik" },
  { en: "the computer science", de: "die Informatik" }
];

// Icon-Zuordnung für deutsche Wörter (Unicode-Emojis als Platzhalter für "Icons")
const iconMap = {
  "der Mann": "👨",
  "die Frau": "👩",
  "das Kind": "🧒",
  "das Haus": "🏠",
  "das Auto": "🚗",
  "das Buch": "📖",
  "der Apfel": "🍏",
  "das Brot": "🍞",
  "das Wasser": "💧",
  "der Hund": "🐶",
  "die Katze": "🐱",
  "der Tisch": "🪑",
  "der Stuhl": "🪑",
  "die Tür": "🚪",
  "das Fenster": "🪟",
  "die Schule": "🏫",
  "der Lehrer": "👨‍🏫",
  "der Schüler": "🧑‍🎓",
  "der Freund": "🧑‍🤝‍🧑",
  "die Mutter": "👩",
  "der Vater": "👨",
  "der Bruder": "👦",
  "die Schwester": "👧",
  "die Stadt": "🏙️",
  "die Straße": "🛣️",
  "der Zug": "🚆",
  "der Bus": "🚌",
  "das Fahrrad": "🚲",
  "der Garten": "🌳",
  "die Blume": "🌸",
  "der Baum": "🌲",
  "die Sonne": "☀️",
  "der Mond": "🌙",
  "der Stern": "⭐",
  "der Himmel": "🌌",
  "der Fluss": "🌊",
  "der Berg": "⛰️",
  "das Meer": "🌊",
  "der Fisch": "🐟",
  "der Vogel": "🐦",
  "das Ei": "🥚",
  "der Käse": "🧀",
  "das Fleisch": "🥩",
  "die Suppe": "🥣",
  "der Salat": "🥗",
  "die Kartoffel": "🥔",
  "der Reis": "🍚",
  "die Butter": "🧈",
  "das Salz": "🧂",
  "der Pfeffer": "🌶️",
  "der Zucker": "🍬",
  "der Kaffee": "☕",
  "der Tee": "🍵",
  "die Milch": "🥛",
  "der Saft": "🧃",
  "das Bier": "🍺",
  "der Wein": "🍷",
  "das Glas": "🥛",
  "die Tasse": "☕",
  "der Teller": "🍽️",
  "das Messer": "🔪",
  "die Gabel": "🍴",
  "der Löffel": "🥄",
  "das Bett": "🛏️",
  "das Zimmer": "🚪",
  "das Badezimmer": "🛁",
  "die Küche": "🍳",
  "das Geschäft": "🏪",
  "der Markt": "🛒",
  "das Geld": "💶",
  "die Fahrkarte": "🎫",
  "die Uhr": "⏰",
  "die Zeit": "⏳",
  "der Tag": "📅",
  "die Woche": "🗓️",
  "der Monat": "🗓️",
  "das Jahr": "📆",
  "der Morgen": "🌅",
  "der Abend": "🌇",
  "die Nacht": "🌃",
  "die Familie": "👨‍👩‍👧‍👦",
  "die Arbeit": "💼",
  "der Beruf": "👔",
  "der Urlaub": "🏖️",
  "die Party": "🎉",
  "die Musik": "🎵",
  "der Film": "🎬",
  "das Bild": "🖼️",
  "der Brief": "✉️",
  "die Zeitung": "📰",
  "der Computer": "💻",
  "das Telefon": "📞",
  "der Schlüssel": "🔑",
  "die Tasche": "👜",
  "der Schuh": "👞",
  "der Mantel": "🧥",
  "das Hemd": "👔",
  "das Kleid": "👗",
  "die Hose": "👖",
  "der Onkel": "🧔",
  "die Tante": "👩‍🦳",
  "der Cousin": "🧑",
  "die Nichte": "👧",
  "der Neffe": "👦",
  "die Großeltern": "👵🧓",
  "die Großmutter": "👵",
  "der Großvater": "🧓",
  "die Eltern": "👨‍👩‍👧",
  "das Baby": "👶",
  "der Junge": "👦",
  "das Mädchen": "👧",
  "der Nachbar": "🧑‍🤝‍🧑",
  "der Gast": "🙋",
  "der Gastgeber": "🧑‍🍳",
  "der Chef": "👨‍💼",
  "der Kollege": "🧑‍💼",
  "der Mitarbeiter": "🧑‍💼",
  "der Arbeitgeber": "👔",
  "der Kunde": "🧑‍💼",
  "der Patient": "🤒",
  "der Arzt": "👨‍⚕️",
  "die Krankenschwester": "👩‍⚕️",
  "das Krankenhaus": "🏥",
  "die Apotheke": "💊",
  "die Medizin": "💊",
  "die Krankheit": "🤧",
  "der Schmerz": "🤕",
  "der Kopf": "🧑",
  "das Gesicht": "🙂",
  "das Auge": "👁️",
  "das Ohr": "👂",
  "die Nase": "👃",
  "der Mund": "👄",
  "der Zahn": "🦷",
  "der Hals": "🦴",
  "die Schulter": "💪",
  "der Arm": "💪",
  "die Hand": "🤚",
  "der Finger": "☝️",
  "das Bein": "🦵",
  "der Fuß": "🦶",
  "der Rücken": "🧍",
  "der Bauch": "����",
  "das Herz": "❤️",
  "das Blut": "🩸",
  "die Haut": "🧑",
  "das Haar": "💇",
  "die Farbe": "🎨",
  "das Rot": "🟥",
  "das Blau": "🟦",
  "das Grün": "🟩",
  "das Gelb": "🟨",
  "das Schwarz": "⬛",
  "das Weiß": "⬜",
  "das Braun": "🟫",
  "das Grau": "⬜",
  "das Orange": "🟧",
  "das Rosa": "🌸",
  "das Lila": "🟪",
  "das Gold": "🥇",
  "das Silber": "🥈",
  "die Zahl": "🔢",
  "die Eins": "1️⃣",
  "die Zwei": "2️⃣",
  "die Drei": "3️⃣",
  "die Vier": "4️⃣",
  "die Fünf": "5️⃣",
  "die Sechs": "6️⃣",
  "die Sieben": "7️⃣",
  "die Acht": "8️⃣",
  "die Neun": "9️⃣",
  "die Zehn": "🔟",
  "das Hundert": "💯",
  "das Tausend": "🔢",
  "die Frage": "❓",
  "die Antwort": "💬",
  "das Problem": "⚠️",
  "die Lösung": "✅",
  "der Grund": "📝",
  "das Beispiel": "📚",
  "die Idee": "💡",
  "der Plan": "🗺️",
  "die Chance": "🎲",
  "die Hoffnung": "🙏",
  "der Traum": "💭",
  "der Wunsch": "🌠",
  "die Liebe": "💖",
  "der Hass": "💢",
  "die Angst": "😱",
  "die Freude": "😁",
  "der Spaß": "😄",
  "der Frieden": "✌️",
  "der Krieg": "⚔️",
  "die Welt": "🌍",
  "das Land": "🌄",
  "der Staat": "🏛️",
  "die Regierung": "🏛️",
  "der Präsident": "👔",
  "der König": "🤴",
  "die Königin": "👸",
  "der Prinz": "🤴",
  "die Prinzessin": "👸",
  "die Polizei": "👮",
  "das Feuer": "🔥",
  "die Luft": "🌬️",
  "die Erde": "🌎",
  "der Wind": "💨",
  "der Regen": "🌧️",
  "der Schnee": "❄️",
  "das Eis": "🧊",
  "die Wolke": "☁️",
  "der Sturm": "🌩️",
  "das Wetter": "🌦️",
  "die Temperatur": "🌡️",
  "die Jahreszeit": "🗓️",
  "der Frühling": "🌱",
  "der Sommer": "🌞",
  "der Herbst": "🍂",
  "der Winter": "⛄",
  "der Mittag": "🕛",
  "der Nachmittag": "🕒",
  "die Minute": "⏱️",
  "die Sekunde": "⏲️",
  "der Anfang": "🔜",
  "das Ende": "🔚",
  "die Mitte": "➗",
  "die Seite": "📄",
  "die Ecke": "📐",
  "der Ort": "📍",
  "der Raum": "🚪",
  "die Fläche": "🟩",
  "die Region": "🗺️",
  "die Richtung": "🧭",
  "die Entfernung": "📏",
  "die Höhe": "📏",
  "die Länge": "📏",
  "die Breite": "📏",
  "die Tiefe": "📏",
  "das Gewicht": "⚖️",
  "die Größe": "📏",
  "die Form": "🔷",
  "die Linie": "➖",
  "der Kreis": "⚪",
  "das Quadrat": "🟦",
  "das Dreieck": "🔺",
  "der Punkt": "🔸",
  "die Kante": "📏",
  "die Oberfläche": "🟩",
  // --- Zusätzliche 100 Wörter ---
  "der Flughafen": "🛫",
  "das Flugzeug": "✈️",
  "der Pass": "🛂",
  "der Koffer": "🧳",
  "der Fahrkartenschalter": "🎟️",
  "der Bahnsteig": "🚉",
  "die Haltestelle": "🚏",
  "die Karte": "🗺️",
  "die Reise": "🧭",
  "das Gepäck": "🧳",
  "die Reservierung": "📝",
  "das Hotel": "🏨",
  "die Rezeption": "🛎️",
  "der Zimmerschlüssel": "🔑",
  "der Aufzug": "🛗",
  "die Treppe": "🪜",
  "der Boden": "🪵",
  "die Decke": "🛏️",
  "die Wand": "🧱",
  "der Vorhang": "🪟",
  "das Kissen": "🛏️",
  "das Laken": "🛏️",
  "der Schrank": "🚪",
  "das Regal": "🗄️",
  "der Spiegel": "🪞",
  "die Seife": "🧼",
  "das Handtuch": "🧻",
  "die Dusche": "🚿",
  "die Toilette": "🚽",
  "die Zahnbürste": "🪥",
  "die Zahnpasta": "🦷",
  "der Kamm": "💇‍♂️",
  "die Bürste": "💈",
  "der Rasierer": "🪒",
  "das Shampoo": "🧴",
  "der Supermarkt": "🏪",
  "die Bäckerei": "🥐",
  "die Metzgerei": "🥩",
  "die Post": "🏤",
  "die Bank": "🏦",
  "das Bargeld": "💶",
  "die Kreditkarte": "💳",
  "der Kassenbon": "🧾",
  "der Preis": "💲",
  "das Angebot": "🏷️",
  "der Verkauf": "🛍️",
  "der Verkäufer": "🧑‍💼",
  "die Schlange": "🧑‍🤝‍🧑",
  "der Korb": "🧺",
  "die Tüte": "🛍️",
  "die Flasche": "🍾",
  "die Dose": "🥫",
  "die Schachtel": "📦",
  "das Paket": "📦",
  "die Briefmarke": "📮",
  "der Umschlag": "✉️",
  "der Absender": "👤",
  "der Empfänger": "👥",
  "die Adresse": "🏠",
  "die Nummer": "🔢",
  "die Sprache": "🗣️",
  "das Wort": "🔤",
  "der Satz": "💬",
  "der Buchstabe": "🔡",
  "der Text": "📄",
  "die Seite": "📄",
  "der Stift": "🖊️",
  "der Bleistift": "✏️",
  "der Radiergummi": "🩹",
  "das Lineal": "📏",
  "die Schultasche": "🎒",
  "das Heft": "📓",
  "die Hausaufgabe": "📝",
  "die Stunde": "⏰",
  "die Pause": "⏸️",
  "die Lehrerin": "👩‍🏫",
  "die Schülerin": "👧",
  "die Klasse": "🏫",
  "das Fach": "📚",
  "die Mathematik": "➗",
  "die Geschichte": "📜",
  "die Geografie": "🌍",
  "die Biologie": "🧬",
  "die Chemie": "⚗️",
  "die Physik": "🔬",
  "der Sport": "🏃",
  "die Kunst": "🎨",
  "die Informatik": "💻"
};
const defaultIcon = "🔹";

// Kategorien für die Wörter
const categories = {
  "Menschen": [
    "der Mann", "die Frau", "das Kind", "die Mutter", "der Vater", "der Bruder", "die Schwester", "der Freund", "die Freundin", "die Familie", "der Onkel", "die Tante", "der Cousin", "die Nichte", "der Neffe", "die Großeltern", "die Großmutter", "der Großvater", "die Eltern", "das Baby", "der Junge", "das Mädchen", "der Nachbar", "der Gast", "der Gastgeber", "der Chef", "der Kollege", "der Mitarbeiter", "der Arbeitgeber", "der Kunde", "der Patient", "der Arzt", "die Krankenschwester"
  ],
  "Haus & Wohnen": [
    "das Haus", "das Zimmer", "das Bett", "der Tisch", "der Stuhl", "die Tür", "das Fenster", "das Badezimmer", "die Küche", "die Tasche", "der Schlüssel", "der Schuh", "der Mantel", "das Hemd", "das Kleid", "die Hose", "die Lampe", "der Teppich", "die Wand", "die Decke"
  ],
  "Essen & Trinken": [
    "der Apfel", "das Brot", "das Wasser", "der Käse", "das Fleisch", "die Suppe", "der Salat", "die Kartoffel", "der Reis", "die Butter", "das Salz", "der Pfeffer", "der Zucker", "der Kaffee", "der Tee", "die Milch", "der Saft", "das Bier", "der Wein", "das Glas", "die Tasse", "der Teller", "das Messer", "die Gabel", "der Löffel", "das Ei", "die Blume"
  ],
  "Tiere & Natur": [
    "der Hund", "die Katze", "der Fisch", "der Vogel", "der Baum", "die Blume", "der Garten", "die Sonne", "der Mond", "der Stern", "der Himmel", "der Fluss", "der Berg", "das Meer", "die Erde", "die Luft", "der Wind", "der Regen", "der Schnee", "das Eis", "die Wolke", "der Sturm"
  ],
  "Reisen & Verkehr": [
    "die Stadt", "die Straße", "der Zug", "der Bus", "das Fahrrad", "das Auto", "die Fahrkarte", "der Markt", "das Geschäft", "die Schule", "der Lehrer", "der Schüler", "die Uhr", "die Zeit", "der Tag", "die Woche", "der Monat", "das Jahr"
  ],
  "Körper & Gesundheit": [
    "der Kopf", "das Gesicht", "das Auge", "das Ohr", "die Nase", "der Mund", "der Zahn", "der Hals", "die Schulter", "der Arm", "die Hand", "der Finger", "das Bein", "der Fuß", "der Rücken", "der Bauch", "das Herz", "das Blut", "die Haut", "das Haar", "die Krankheit", "der Schmerz", "die Medizin", "das Krankenhaus", "die Apotheke"
  ],
  "Farben & Zahlen": [
    "die Farbe", "das Rot", "das Blau", "das Grün", "das Gelb", "das Schwarz", "das Weiß", "das Braun", "das Grau", "das Orange", "das Rosa", "das Lila", "das Gold", "das Silber", "die Zahl", "die Eins", "die Zwei", "die Drei", "die Vier", "die Fünf", "die Sechs", "die Sieben", "die Acht", "die Neun", "die Zehn", "das Hundert", "das Tausend"
  ],
  "Abstraktes & Sonstiges": [
    "die Frage", "die Antwort", "das Problem", "die Lösung", "der Grund", "das Beispiel", "die Idee", "der Plan", "die Chance", "die Hoffnung", "der Traum", "der Wunsch", "die Liebe", "der Hass", "die Angst", "die Freude", "der Spaß", "der Frieden", "der Krieg", "die Welt", "das Land", "der Staat", "die Regierung", "der Präsident", "der König", "die Königin", "der Prinz", "die Prinzessin", "die Polizei", "das Feuer", "das Wetter", "die Temperatur", "die Jahreszeit", "der Frühling", "der Sommer", "der Herbst", "der Winter"
  ]
};

// Hilfsfunktion: Finde alle Vokabeln einer Kategorie
function getVocabByCategory(cat) {
  const words = categories[cat];
  return vocab.filter(v => words.includes(v.de));
}

// --- SPIELVARIABLEN ---
let current = 0;
let correct = 0;
let questions = [];
let wrongGuesses = [];
const totalQuestions = 10;

// --- LERNMODUS-VARIABLEN ---
let mode = "quiz"; // "quiz" oder "learn"
let selectedCategory = null;
let learnPage = 1;
const learnPerPage = 10;

// --- HILFSFUNKTIONEN ---
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function pickRandomChoices(correctDe, allVocab, n = 4) {
  const choices = [correctDe];
  const pool = allVocab.map(v => v.de).filter(de => de !== correctDe);
  shuffle(pool);
  while (choices.length < n && pool.length) {
    choices.push(pool.pop());
  }
  shuffle(choices);
  return choices;
}

function getIconForDeWord(deWord) {
  return iconMap[deWord] || defaultIcon;
}

function fadeOutIn(next) {
  const questionArea = document.getElementById('question-area');
  const choicesArea = document.getElementById('choices-area');
  questionArea.classList.add('fade-out');
  choicesArea.classList.add('fade-out');
  setTimeout(() => {
    next();
    questionArea.classList.remove('fade-out');
    choicesArea.classList.remove('fade-out');
    questionArea.classList.add('fade-in');
    choicesArea.classList.add('fade-in');
    setTimeout(() => {
      questionArea.classList.remove('fade-in');
      choicesArea.classList.remove('fade-in');
    }, 400);
  }, 400);
}

function showHint(q) {
  // Zeige die ersten 2 Buchstaben des deutschen Wortes (ohne Artikel)
  let de = q.de;
  let parts = de.split(' ');
  let article = parts[0];
  let word = parts.slice(1).join(' ');
  let hint = article + ' ' + word.slice(0, 2) + '...';
  document.getElementById('hint-area').textContent = `Tipp: ${hint}`;
}

function clearHint() {
  document.getElementById('hint-area').textContent = '';
}

// --- SPIELFUNKTIONEN ---
function showQuestion() {
  if (current >= questions.length) {
    showResult();
    return;
  }
  // Tipp-Button-Wrapper einblenden
  document.getElementById('hint-btn-wrapper').classList.remove('hidden');
  const q = questions[current];
  document.getElementById('english-word').textContent = q.en;
  const choices = pickRandomChoices(q.de, vocab);
  const choicesArea = document.getElementById('choices-area');
  choicesArea.innerHTML = '';
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.innerHTML = `<span class="icon">${getIconForDeWord(choice)}</span> ${choice}`;
    btn.className = 'choice-btn';
    btn.onclick = () => {
      if (choice === q.de) {
        correct++;
      } else {
        wrongGuesses.push({
          en: q.en,
          correct: q.de,
          guess: choice
        });
      }
      current++;
      updateProgress();
      clearHint();
      fadeOutIn(showQuestion);
    };
    choicesArea.appendChild(btn);
  });
  clearHint();
  // Tipp-Button aktivieren
  const hintBtn = document.getElementById('hint-btn');
  hintBtn.disabled = false;
  hintBtn.onclick = () => {
    showHint(q);
    hintBtn.disabled = true;
  };
}

function updateProgress() {
  // Zeige nach der letzten Frage "Frage 10 von 10"
  const progressElem = document.getElementById('progress');
  let displayCurrent = current + 1;
  if (current >= questions.length) {
    displayCurrent = questions.length;
  }
  progressElem.textContent = `Frage ${displayCurrent} von ${questions.length}`;
  // Fortschrittsbalken aktualisieren
  const progressbar = document.getElementById('progressbar');
  const percent = ((current) / questions.length) * 100;
  progressbar.style.width = percent + "%";
}

function showResult() {
  document.getElementById('question-area').style.display = 'none';
  document.getElementById('choices-area').style.display = 'none';
  document.getElementById('progress-area').style.display = 'none';
  document.getElementById('result-area').style.display = 'block';
  // Tipp-Button-Wrapper ausblenden
  document.getElementById('hint-btn-wrapper').classList.add('hidden');
  document.getElementById('score').textContent = `Du hast ${correct} von ${questions.length} richtig!`;

  // Falsche Antworten anzeigen
  const wrongListId = 'wrong-list';
  let wrongList = document.getElementById(wrongListId);
  if (!wrongList) {
    wrongList = document.createElement('div');
    wrongList.id = 'wrong-list';
    document.getElementById('result-area').appendChild(wrongList);
  }
  if (wrongGuesses.length === 0) {
    wrongList.innerHTML = "<p>Alle Antworten waren richtig! 🎉</p>";
  } else {
    let html = "<h3>Falsch geratene Wörter:</h3><ul>";
    wrongGuesses.forEach(item => {
      html += `<li><strong>${item.en}</strong>: Deine Antwort: <span style="color:#c00"><span class="icon">${getIconForDeWord(item.guess)}</span> ${item.guess}</span>, richtig: <span style="color:#080"><span class="icon">${getIconForDeWord(item.correct)}</span> ${item.correct}</span></li>`;
    });
    html += "</ul>";
    wrongList.innerHTML = html;
  }
}

function restartGame() {
  current = 0;
  correct = 0;
  wrongGuesses = [];
  questions = vocab.slice();
  shuffle(questions);
  questions = questions.slice(0, totalQuestions);
  document.getElementById('question-area').style.display = '';
  document.getElementById('choices-area').style.display = '';
  document.getElementById('progress-area').style.display = '';
  document.getElementById('result-area').style.display = 'none';
  clearHint();
  // Tipp-Button-Wrapper wieder einblenden
  document.getElementById('hint-btn-wrapper').classList.remove('hidden');
  // Fortschrittsbalken zurücksetzen
  const progressbar = document.getElementById('progressbar');
  progressbar.style.width = "0%";
  // Falsche Liste zurücksetzen
  const wrongList = document.getElementById('wrong-list');
  if (wrongList) wrongList.innerHTML = '';
  updateProgress();
  showQuestion();
}

// --- LERNMODUS-FUNKTIONEN ---
function renderCategorySelect() {
  const learnList = document.getElementById('learn-list');
  let html = '<div id="category-select"><strong>Kategorie wählen:</strong><br><div class="category-grid">';
  Object.keys(categories).forEach(cat => {
    html += `<button class="category-btn"${selectedCategory === cat ? ' disabled' : ''}>${cat}</button>`;
  });
  html += '</div></div>';
  learnList.innerHTML = html;
  // Event Listener für Kategorie-Buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.onclick = () => {
      selectedCategory = btn.textContent;
      learnPage = 1;
      renderLearnList();
    };
  });
}

function renderLearnList() {
  const learnList = document.getElementById('learn-list');
  if (!selectedCategory) {
    renderCategorySelect();
    document.getElementById('start-quiz-btn').style.display = 'none';
    return;
  }
  const catVocab = getVocabByCategory(selectedCategory);
  const totalPages = Math.ceil(catVocab.length / learnPerPage);
  const start = (learnPage - 1) * learnPerPage;
  const end = start + learnPerPage;
  let html = `<div class="learn-category-title"><strong>${selectedCategory}</strong> <button id="back-to-categories" title="Zurück zu den Kategorien">⟵</button></div>`;
  html += '<div class="learn-grid"><ul>';
  catVocab.slice(start, end).forEach(q => {
    html += `<li><span class="icon">${getIconForDeWord(q.de)}</span> <strong>${q.en}</strong><br><span class="de-word">${q.de}</span></li>`;
  });
  html += '</ul></div>';
  // Pagination
  html += '<div class="learn-pagination">';
  if (learnPage > 1) html += `<button class="learn-page-btn" id="learn-prev-btn">«</button>`;
  html += ` Seite ${learnPage} von ${totalPages} `;
  if (learnPage < totalPages) html += `<button class="learn-page-btn" id="learn-next-btn">»</button>`;
  html += '</div>';
  learnList.innerHTML = html;
  document.getElementById('start-quiz-btn').style.display = '';
  // Event Listener für Pagination
  if (learnPage > 1) document.getElementById('learn-prev-btn').onclick = () => { learnPage--; renderLearnList(); };
  if (learnPage < totalPages) document.getElementById('learn-next-btn').onclick = () => { learnPage++; renderLearnList(); };
  // Event Listener für Zurück zu Kategorien
  document.getElementById('back-to-categories').onclick = () => {
    selectedCategory = null;
    renderLearnList();
    document.getElementById('start-quiz-btn').style.display = 'none';
  };
}

function switchToLearnMode() {
  mode = "learn";
  document.getElementById('learn-area').style.display = '';
  document.getElementById('game-container').style.display = 'none';
  document.getElementById('learn-mode-btn').classList.add('active');
  document.getElementById('quiz-mode-btn').classList.remove('active');
  selectedCategory = null;
  learnPage = 1;
  renderLearnList();
  document.getElementById('start-quiz-btn').style.display = 'none';
}

function switchToQuizMode() {
  mode = "quiz";
  document.getElementById('learn-area').style.display = 'none';
  document.getElementById('game-container').style.display = '';
  document.getElementById('quiz-mode-btn').classList.add('active');
  document.getElementById('learn-mode-btn').classList.remove('active');
  // Wenn Kategorie gewählt, nur diese Vokabeln abfragen, sonst alle
  if (selectedCategory) {
    questions = getVocabByCategory(selectedCategory).slice();
    shuffle(questions);
    questions = questions.slice(0, totalQuestions);
  }
  restartGame();
}

document.addEventListener('DOMContentLoaded', () => {
  // Füge einen Bereich für den Tipp ein, falls noch nicht vorhanden
  if (!document.getElementById('hint-area')) {
    const hintArea = document.createElement('div');
    hintArea.id = 'hint-area';
    const container = document.getElementById('choices-area');
    container.parentNode.insertBefore(hintArea, container.nextSibling);
  }
  document.getElementById('restart-btn').onclick = restartGame;
  // Lernmodus/Quizmodus Umschalten
  document.getElementById('learn-mode-btn').onclick = switchToLearnMode;
  document.getElementById('quiz-mode-btn').onclick = switchToQuizMode;
  document.getElementById('start-quiz-btn').onclick = switchToQuizMode;

  restartGame();
});
