/*
  Crucigrama word lists
  ---------------------
  To add a unit, copy one block below, give it a new id, a title, and its words.

  es = the Spanish word, written correctly WITH its accents (á é í ó ú ü ñ)
  en = the English clue shown in the puzzle

  The grid uses the exact spelling, so "adiós" must be typed with the Ó and "señor" with the Ñ.
  She gets accent keys on screen for these.
  Phrases are fine too: write "por favor" with its space here, and the grid runs it
  together as PORFAVOR. The clue automatically tells her it is 2 words.
  Keep each entry under about 13 letters so the grid stays phone-friendly.
  Aim for 10 to 14 entries per unit.
  Units unlock in the order listed here, so to reorder the year, just move a block up or down.
  Keep each id unique and never change an id after she has started, or her progress for that unit is lost.

  This is our own Spanish 101 sequence (19 units), roughly in the order most first-year
  courses follow: basics, numbers and time, people and school, then everyday life.
*/
window.UNITS = [
  {
    id: "u1",
    title: "Greetings and Basics",
    words: [
      { es: "hola",    en: "Hello" },
      { es: "adiós",   en: "Goodbye" },
      { es: "gracias", en: "Thank you" },
      { es: "sí",      en: "Yes" },
      { es: "no",      en: "Opposite of yes" },
      { es: "bien",    en: "Well or fine" },
      { es: "mal",     en: "Bad" },
      { es: "amigo",   en: "Friend (masculine)" },
      { es: "amiga",   en: "Friend (feminine)" },
      { es: "nombre",  en: "Name" },
      { es: "señor",   en: "Mister or sir" },
      { es: "señora",  en: "Mrs. or madam" },
      { es: "de nada", en: "You’re welcome" },
      { es: "por favor", en: "Please" }
    ]
  },
  {
    id: "u18",
    title: "Polite Phrases",
    words: [
      { es: "mucho gusto", en: "Nice to meet you" },
      { es: "lo siento",   en: "I’m sorry" },
      { es: "con permiso", en: "Excuse me (passing by)" },
      { es: "disculpe",    en: "Excuse me (to get attention)" },
      { es: "perdón",      en: "Pardon" },
      { es: "hasta luego", en: "See you later" },
      { es: "cómo estás",  en: "How are you? (informal)" },
      { es: "qué tal",     en: "How’s it going?" },
      { es: "bienvenido",  en: "Welcome (masculine)" },
      { es: "igualmente",  en: "Likewise" },
      { es: "claro",       en: "Of course" },
      { es: "salud",       en: "Bless you or cheers" }
    ]
  },
  {
    id: "u2",
    title: "Numbers 0 to 10",
    words: [
      { es: "cero",   en: "Zero" },
      { es: "uno",    en: "One" },
      { es: "dos",    en: "Two" },
      { es: "tres",   en: "Three" },
      { es: "cuatro", en: "Four" },
      { es: "cinco",  en: "Five" },
      { es: "seis",   en: "Six" },
      { es: "siete",  en: "Seven" },
      { es: "ocho",   en: "Eight" },
      { es: "nueve",  en: "Nine" },
      { es: "diez",   en: "Ten" }
    ]
  },
  {
    id: "u3",
    title: "Days of the Week",
    words: [
      { es: "lunes",     en: "Monday" },
      { es: "martes",    en: "Tuesday" },
      { es: "miércoles", en: "Wednesday" },
      { es: "jueves",    en: "Thursday" },
      { es: "viernes",   en: "Friday" },
      { es: "sábado",    en: "Saturday" },
      { es: "domingo",   en: "Sunday" },
      { es: "día",       en: "Day" },
      { es: "semana",    en: "Week" },
      { es: "hoy",       en: "Today" },
      { es: "ayer",      en: "Yesterday" }
    ]
  },
  {
    id: "u19",
    title: "Times of Day",
    words: [
      { es: "buenos días",   en: "Good morning" },
      { es: "buenas tardes", en: "Good afternoon" },
      { es: "buenas noches", en: "Good evening or good night" },
      { es: "hasta mañana",  en: "See you tomorrow" },
      { es: "mañana",        en: "Morning or tomorrow" },
      { es: "tarde",         en: "Afternoon or late" },
      { es: "noche",         en: "Night" },
      { es: "mediodía",      en: "Noon" },
      { es: "temprano",      en: "Early" },
      { es: "hora",          en: "Hour" },
      { es: "reloj",         en: "Clock" }
    ]
  },
  {
    id: "u4",
    title: "Months of the Year",
    words: [
      { es: "enero",      en: "January" },
      { es: "febrero",    en: "February" },
      { es: "marzo",      en: "March" },
      { es: "abril",      en: "April" },
      { es: "mayo",       en: "May" },
      { es: "junio",      en: "June" },
      { es: "julio",      en: "July" },
      { es: "agosto",     en: "August" },
      { es: "septiembre", en: "September" },
      { es: "octubre",    en: "October" },
      { es: "noviembre",  en: "November" },
      { es: "diciembre",  en: "December" }
    ]
  },
  {
    id: "u5",
    title: "Numbers 11 to 100",
    words: [
      { es: "once",       en: "Eleven" },
      { es: "doce",       en: "Twelve" },
      { es: "trece",      en: "Thirteen" },
      { es: "catorce",    en: "Fourteen" },
      { es: "quince",     en: "Fifteen" },
      { es: "dieciséis",  en: "Sixteen" },
      { es: "diecisiete", en: "Seventeen" },
      { es: "dieciocho",  en: "Eighteen" },
      { es: "diecinueve", en: "Nineteen" },
      { es: "veinte",     en: "Twenty" },
      { es: "treinta",    en: "Thirty" },
      { es: "cuarenta",   en: "Forty" },
      { es: "cincuenta",  en: "Fifty" },
      { es: "cien",       en: "One hundred" }
    ]
  },
  {
    id: "u6",
    title: "Colors",
    words: [
      { es: "color",    en: "Color" },
      { es: "rojo",     en: "Red" },
      { es: "azul",     en: "Blue" },
      { es: "verde",    en: "Green" },
      { es: "amarillo", en: "Yellow" },
      { es: "negro",    en: "Black" },
      { es: "blanco",   en: "White" },
      { es: "rosa",     en: "Pink" },
      { es: "morado",   en: "Purple" },
      { es: "naranja",  en: "Orange" },
      { es: "gris",     en: "Gray" },
      { es: "marrón",   en: "Brown" }
    ]
  },
  {
    id: "u7",
    title: "Family",
    words: [
      { es: "familia", en: "Family" },
      { es: "madre",   en: "Mother" },
      { es: "padre",   en: "Father" },
      { es: "hermano", en: "Brother" },
      { es: "hermana", en: "Sister" },
      { es: "hijo",    en: "Son" },
      { es: "hija",    en: "Daughter" },
      { es: "abuelo",  en: "Grandfather" },
      { es: "abuela",  en: "Grandmother" },
      { es: "tío",     en: "Uncle" },
      { es: "tía",     en: "Aunt" },
      { es: "primo",   en: "Cousin (masculine)" }
    ]
  },
  {
    id: "u8",
    title: "Describing People",
    words: [
      { es: "alto",        en: "Tall" },
      { es: "bajo",        en: "Short (height)" },
      { es: "joven",       en: "Young" },
      { es: "viejo",       en: "Old" },
      { es: "bonito",      en: "Pretty" },
      { es: "guapo",       en: "Good-looking" },
      { es: "feo",         en: "Ugly" },
      { es: "simpático",   en: "Nice or friendly" },
      { es: "inteligente", en: "Smart" },
      { es: "grande",      en: "Big" },
      { es: "pequeño",     en: "Small" },
      { es: "rubio",       en: "Blond" }
    ]
  },
  {
    id: "u9",
    title: "School and Classroom",
    words: [
      { es: "escuela",    en: "School" },
      { es: "clase",      en: "Class" },
      { es: "libro",      en: "Book" },
      { es: "lápiz",      en: "Pencil" },
      { es: "papel",      en: "Paper" },
      { es: "mesa",       en: "Table" },
      { es: "silla",      en: "Chair" },
      { es: "mochila",    en: "Backpack" },
      { es: "maestro",    en: "Teacher (masculine)" },
      { es: "pizarra",    en: "Chalkboard" },
      { es: "tarea",      en: "Homework" },
      { es: "examen",     en: "Exam" },
      { es: "estudiante", en: "Student" }
    ]
  },
  {
    id: "u10",
    title: "Food and Drinks",
    words: [
      { es: "agua",     en: "Water" },
      { es: "leche",    en: "Milk" },
      { es: "pan",      en: "Bread" },
      { es: "queso",    en: "Cheese" },
      { es: "pollo",    en: "Chicken" },
      { es: "arroz",    en: "Rice" },
      { es: "manzana",  en: "Apple" },
      { es: "café",     en: "Coffee" },
      { es: "huevo",    en: "Egg" },
      { es: "carne",    en: "Meat" },
      { es: "pescado",  en: "Fish (as food)" },
      { es: "ensalada", en: "Salad" },
      { es: "desayuno", en: "Breakfast" }
    ]
  },
  {
    id: "u11",
    title: "Weather and Seasons",
    words: [
      { es: "primavera", en: "Spring" },
      { es: "verano",    en: "Summer" },
      { es: "otoño",     en: "Fall or autumn" },
      { es: "invierno",  en: "Winter" },
      { es: "sol",       en: "Sun" },
      { es: "lluvia",    en: "Rain" },
      { es: "nieve",     en: "Snow" },
      { es: "viento",    en: "Wind" },
      { es: "calor",     en: "Heat" },
      { es: "frío",      en: "Cold" },
      { es: "nube",      en: "Cloud" },
      { es: "tiempo",    en: "Weather" }
    ]
  },
  {
    id: "u12",
    title: "Parts of the Body",
    words: [
      { es: "cabeza",  en: "Head" },
      { es: "cara",    en: "Face" },
      { es: "ojo",     en: "Eye" },
      { es: "nariz",   en: "Nose" },
      { es: "boca",    en: "Mouth" },
      { es: "oreja",   en: "Ear" },
      { es: "mano",    en: "Hand" },
      { es: "brazo",   en: "Arm" },
      { es: "pierna",  en: "Leg" },
      { es: "pie",     en: "Foot" },
      { es: "dedo",    en: "Finger" },
      { es: "corazón", en: "Heart" }
    ]
  },
  {
    id: "u13",
    title: "Around the House",
    words: [
      { es: "casa",       en: "House" },
      { es: "cocina",     en: "Kitchen" },
      { es: "baño",       en: "Bathroom" },
      { es: "sala",       en: "Living room" },
      { es: "comedor",    en: "Dining room" },
      { es: "dormitorio", en: "Bedroom" },
      { es: "cama",       en: "Bed" },
      { es: "puerta",     en: "Door" },
      { es: "ventana",    en: "Window" },
      { es: "jardín",     en: "Garden" },
      { es: "garaje",     en: "Garage" }
    ]
  },
  {
    id: "u14",
    title: "Clothing",
    words: [
      { es: "ropa",       en: "Clothes" },
      { es: "camisa",     en: "Shirt" },
      { es: "pantalones", en: "Pants" },
      { es: "zapatos",    en: "Shoes" },
      { es: "vestido",    en: "Dress" },
      { es: "falda",      en: "Skirt" },
      { es: "sombrero",   en: "Hat" },
      { es: "gorra",      en: "Baseball cap" },
      { es: "chaqueta",   en: "Jacket" },
      { es: "calcetines", en: "Socks" },
      { es: "abrigo",     en: "Coat" }
    ]
  },
  {
    id: "u15",
    title: "Animals",
    words: [
      { es: "perro",   en: "Dog" },
      { es: "gato",    en: "Cat" },
      { es: "pájaro",  en: "Bird" },
      { es: "pez",     en: "Fish (alive)" },
      { es: "caballo", en: "Horse" },
      { es: "vaca",    en: "Cow" },
      { es: "conejo",  en: "Rabbit" },
      { es: "ratón",   en: "Mouse" },
      { es: "tortuga", en: "Turtle" },
      { es: "mascota", en: "Pet" },
      { es: "león",    en: "Lion" },
      { es: "oso",     en: "Bear" }
    ]
  },
  {
    id: "u16",
    title: "Places in Town",
    words: [
      { es: "ciudad",      en: "City" },
      { es: "tienda",      en: "Store" },
      { es: "parque",      en: "Park" },
      { es: "iglesia",     en: "Church" },
      { es: "banco",       en: "Bank" },
      { es: "biblioteca",  en: "Library" },
      { es: "hospital",    en: "Hospital" },
      { es: "restaurante", en: "Restaurant" },
      { es: "calle",       en: "Street" },
      { es: "playa",       en: "Beach" },
      { es: "museo",       en: "Museum" },
      { es: "cine",        en: "Movie theater" }
    ]
  },
  {
    id: "u17",
    title: "Common Verbs",
    words: [
      { es: "ser",      en: "To be (who or what)" },
      { es: "estar",    en: "To be (where or how)" },
      { es: "tener",    en: "To have" },
      { es: "ir",       en: "To go" },
      { es: "hablar",   en: "To speak" },
      { es: "comer",    en: "To eat" },
      { es: "beber",    en: "To drink" },
      { es: "vivir",    en: "To live" },
      { es: "hacer",    en: "To do or make" },
      { es: "querer",   en: "To want" },
      { es: "estudiar", en: "To study" },
      { es: "trabajar", en: "To work" }
    ]
  }
];
