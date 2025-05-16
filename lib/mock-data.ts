import {
  Laptop,
  Shirt,
  Home,
  Heart,
  Dumbbell,
  Gamepad2,
  Book,
  Car
} from "lucide-react";

export const CATEGORIES = [
  { id: '1', name: 'Électronique', slug: 'electronics', icon: Laptop },
  { id: '2', name: 'Mode', slug: 'fashion', icon: Shirt },
  { id: '3', name: 'Maison & Jardin', slug: 'home-garden', icon: Home },
  { id: '4', name: 'Beauté & Santé', slug: 'eauty-health', icon: Heart },
  { id: '5', name: 'Sport & Plein air', slug: 'sports-outdoors', icon: Dumbbell },
  { id: '6', name: 'Jouets & Jeux', slug: 'toys-games', icon: Gamepad2 },
  { id: '7', name: 'Livres & Médias', slug: 'books-media', icon: Book },
  { id: '8', name: 'Automobile', slug: 'automotive', icon: Car },
];

export const VENDORS = [
  { id: '1', name: 'Amazon', logo: '/assets/vendors/amazon.svg' },
  { id: '2', name: 'Best Buy', logo: '/assets/vendors/bestbuy.svg' },
  { id: '3', name: 'Walmart', logo: '/assets/vendors/walmart.svg' },
  { id: '4', name: 'Target', logo: '/assets/vendors/target.svg' },
  { id: '5', name: 'eBay', logo: '/assets/vendors/ebay.svg' },
  { id: '6', name: 'Newegg', logo: '/assets/vendors/newegg.svg' },
  { id: '7', name: 'B&H', logo: '/assets/vendors/bh.svg' },
  { id: '8', name: 'Adorama', logo: '/assets/vendors/adorama.svg' },
];
export const PRODUCTS = [
  {
    id: '1',
    name: 'Casque sans fil à réduction de bruit Sony WH-1000XM4',
    slug: 'sony-wh-1000xm4-wireless-headphones',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Réduction de bruit leader dans l’industrie, qualité sonore exceptionnelle et design confortable : ces écouteurs sans fil sont parfaits pour les voyages, le travail ou la détente.',
    specifications: {
      'Driver Type': 'Dynamique',
      'Frequency Response': '4Hz-40 000Hz',
      'Battery Life': 'Jusqu’à 30 heures',
      'Bluetooth Version': '5.0',
      'Weight': '254g',
    },
    vendors: [
      {
        id: '1',
        name: 'Amazon',
        logo: '/assets/vendors/amazon.svg',
        rating: 4.8,
        price: 278.00,
        originalPrice: 349.99,
        discount: 20,
        shippingFee: 0,
        shippingTime: 'Livraison en 2 jours',
        link: '#',
      },
      {
        id: '2',
        name: 'Best Buy',
        logo: '/assets/vendors/bestbuy.svg',
        rating: 4.7,
        price: 299.99,
        originalPrice: 349.99,
        discount: 14,
        shippingFee: 0,
        shippingTime: 'Retrait le jour même',
        link: '#',
      },
      {
        id: '5',
        name: 'eBay',
        logo: '/assets/vendors/ebay.svg',
        rating: 4.5,
        price: 249.99,
        originalPrice: 349.99,
        discount: 28,
        shippingFee: 8.99,
        shippingTime: 'Livraison en 3 à 5 jours',
        link: '#',
      },
    ],
    bestPrice: 249.99,
    averagePrice: 275.99,
    lowestEverPrice: 229.99,
    priceHistory: [
      { date: '2025-01-01', price: 349.99 },
      { date: '2025-02-01', price: 329.99 },
      { date: '2025-03-01', price: 299.99 },
      { date: '2025-04-01', price: 279.99 },
      { date: '2025-05-01', price: 249.99 },
    ],
  },
  {
    id: '2',
    name: 'Apple iPhone 13 Pro Max - 256 Go - Bleu Sierra',
    slug: 'apple-iphone-13-pro-max-256gb-sierra-blue',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'L’iPhone 13 Pro Max offre un superbe écran Super Retina XDR avec ProMotion, une puce A15 Bionic, un système photo pro et une autonomie exceptionnelle.',
    specifications: {
      'Display': 'Écran Super Retina XDR de 6,7 pouces',
      'Processor': 'A15 Bionic',
      'Storage': '256 Go',
      'Cameras': 'Triple 12 Mpx',
      'Battery': 'Jusqu’à 28 heures de lecture vidéo',
    },
    vendors: [
      {
        id: '1',
        name: 'Amazon',
        logo: '/assets/vendors/amazon.svg',
        rating: 4.9,
        price: 1099.00,
        originalPrice: 1199.00,
        discount: 8,
        shippingFee: 0,
        shippingTime: 'Livraison en 2 jours',
        link: '#',
      },
      {
        id: '4',
        name: 'Target',
        logo: '/assets/vendors/target.svg',
        rating: 4.7,
        price: 1149.99,
        originalPrice: 1199.00,
        discount: 4,
        shippingFee: 0,
        shippingTime: 'Retrait le jour même',
        link: '#',
      },
      {
        id: '3',
        name: 'Walmart',
        logo: '/assets/vendors/walmart.svg',
        rating: 4.6,
        price: 1079.00,
        originalPrice: 1199.00,
        discount: 10,
        shippingFee: 0,
        shippingTime: 'Livraison en 2 jours',
        link: '#',
      },
    ],
    bestPrice: 1079.00,
    averagePrice: 1109.33,
    lowestEverPrice: 999.00,
    priceHistory: [
      { date: '2025-01-01', price: 1199.00 },
      { date: '2025-02-01', price: 1199.00 },
      { date: '2025-03-01', price: 1149.00 },
      { date: '2025-04-01', price: 1099.00 },
      { date: '2025-05-01', price: 1079.00 },
    ],
  },
  {
    id: '3',
    name: 'Téléviseur intelligent Samsung Neo QLED 4K 65" QN90A',
    slug: 'samsung-65-neo-qled-4k-smart-tv',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Profitez d’une résolution 4K époustouflante, du HDR Quantum 32X et d’un écran anti-reflets pour une clarté remarquable même dans les pièces lumineuses.',
    specifications: {
      'Display': 'Écran Neo QLED 4K de 65 pouces',
      'HDR': 'Quantum HDR 32X',
      'Refresh Rate': '120Hz',
      'Smart TV': 'Système Tizen',
      'Connectivity': 'Wi-Fi, Bluetooth, HDMI 2.1',
    },
    vendors: [
      {
        id: '1',
        name: 'Amazon',
        logo: '/assets/vendors/amazon.svg',
        rating: 4.7,
        price: 1799.99,
        originalPrice: 2199.99,
        discount: 18,
        shippingFee: 0,
        shippingTime: 'Livraison en 2 jours',
        link: '#',
      },
      {
        id: '2',
        name: 'Best Buy',
        logo: '/assets/vendors/bestbuy.svg',
        rating: 4.8,
        price: 1899.99,
        originalPrice: 2199.99,
        discount: 14,
        shippingFee: 0,
        shippingTime: 'Retrait le jour même',
        link: '#',
      },
      {
        id: '6',
        name: 'Newegg',
        logo: '/assets/vendors/newegg.svg',
        rating: 4.6,
        price: 1749.99,
        originalPrice: 2199.99,
        discount: 20,
        shippingFee: 0,
        shippingTime: 'Livraison en 3 jours',
        link: '#',
      },
    ],
    bestPrice: 1749.99,
    averagePrice: 1849.99,
    lowestEverPrice: 1699.99,
    priceHistory: [
      { date: '2025-01-01', price: 2199.99 },
      { date: '2025-02-01', price: 1999.99 },
      { date: '2025-03-01', price: 1899.99 },
      { date: '2025-04-01', price: 1799.99 },
      { date: '2025-05-01', price: 1749.99 },
    ],
  },
  {
    id: '4',
    name: 'Chaussures de course Nike Air Zoom Pegasus 38',
    slug: 'nike-air-zoom-pegasus-38-running-shoes',
    category: 'fashion',
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Les Nike Air Zoom Pegasus 38 offrent un amorti réactif et un maintien sûr pour une course dynamique, à chaque sortie.',
    specifications: {
      'Material': 'Tige en mesh, semelle en caoutchouc',
      'Cushioning': 'Mousse Nike React, unité Zoom Air',
      'Fit': 'Taille conforme',
      'Weight': '10 oz (taille homme 44)',
      'Style': 'CW7356',
    },
    vendors: [
      {
        id: '1',
        name: 'Amazon',
        logo: '/assets/vendors/amazon.svg',
        rating: 4.6,
        price: 89.95,
        originalPrice: 120.00,
        discount: 25,
        shippingFee: 0,
        shippingTime: 'Livraison en 2 jours',
        link: '#',
      },
      {
        id: '3',
        name: 'Walmart',
        logo: '/assets/vendors/walmart.svg',
        rating: 4.5,
        price: 94.99,
        originalPrice: 120.00,
        discount: 21,
        shippingFee: 0,
        shippingTime: 'Livraison en 2 jours',
        link: '#',
      },
      {
        id: '4',
        name: 'Target',
        logo: '/assets/vendors/target.svg',
        rating: 4.7,
        price: 99.99,
        originalPrice: 120.00,
        discount: 17,
        shippingFee: 0,
        shippingTime: 'Retrait le jour même',
        link: '#',
      },
    ],
    bestPrice: 89.95,
    averagePrice: 94.98,
    lowestEverPrice: 79.95,
    priceHistory: [
      { date: '2025-01-01', price: 120.00 },
      { date: '2025-02-01', price: 120.00 },
      { date: '2025-03-01', price: 99.99 },
      { date: '2025-04-01', price: 94.99 },
      { date: '2025-05-01', price: 89.95 },
    ],
  },
  {
    id: '6',
    name: 'Instant Pot Duo Crisp 11-en-1 Friteuse à air et Autocuiseur électrique',
    slug: 'instant-pot-duo-crisp-air-fryer-pressure-cooker',
    category: 'home-garden',
    image: 'https://images.pexels.com/photos/6996085/pexels-photo-6996085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "L'Instant Pot Duo Crisp est le meilleur des deux mondes : un autocuiseur et une friteuse à air qui vous aide à gagner du temps et de la place sur le plan de travail.",
    specifications: {
      'Capacité': '8 litres',
      'Fonctions': '11 programmes intelligents',
      'Puissance': '1500W',
      'Dimensions': '37.6 x 34.5 x 36 cm',
      'Poids': '12 kg',
    },
    vendors: [
      {
        id: '1',
        name: 'Amazon',
        logo: '/assets/vendors/amazon.svg',
        rating: 4.7,
        price: 149.95,
        originalPrice: 199.99,
        discount: 25,
        shippingFee: 0,
        shippingTime: 'Livraison en 2 jours',
        link: '#',
      },
      {
        id: '4',
        name: 'Target',
        logo: '/assets/vendors/target.svg',
        rating: 4.6,
        price: 169.99,
        originalPrice: 199.99,
        discount: 15,
        shippingFee: 0,
        shippingTime: 'Retrait le jour même',
        link: '#',
      },
      {
        id: '3',
        name: 'Walmart',
        logo: '/assets/vendors/walmart.svg',
        rating: 4.5,
        price: 159.00,
        originalPrice: 199.99,
        discount: 20,
        shippingFee: 0,
        shippingTime: 'Livraison en 2 jours',
        link: '#',
      },
    ],
    bestPrice: 149.95,
    averagePrice: 159.65,
    lowestEverPrice: 129.99,
    priceHistory: [
      { date: '2025-01-01', price: 199.99 },
      { date: '2025-02-01', price: 179.99 },
      { date: '2025-03-01', price: 169.99 },
      { date: '2025-04-01', price: 159.99 },
      { date: '2025-05-01', price: 149.95 },
    ],
  },
  {
    id: '7',
    name: 'Canon EOS R6 Appareil Photo Hybride plein format',
    slug: 'canon-eos-r6-full-frame-mirrorless-camera',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Le Canon EOS R6 offre une qualité d'image exceptionnelle avec son capteur plein format, une mise au point automatique rapide et une vidéo 4K fluide.",
    specifications: {
      'Capteur': 'Plein format 20MP',
      'Processeur': 'DIGIC X',
      'Vitesse de rafale': '12 images par seconde',
      'Vidéo': '4K à 60fps',
      'Stabilisation': '5 axes intégrée',
    },
    vendors: [
      {
        id: '1',
        name: 'Amazon',
        logo: '/assets/vendors/amazon.svg',
        rating: 4.8,
        price: 2499.99,
        originalPrice: 2799.99,
        discount: 11,
        shippingFee: 0,
        shippingTime: 'Livraison en 2 jours',
        link: '#',
      },
      {
        id: '2',
        name: 'Best Buy',
        logo: '/assets/vendors/bestbuy.svg',
        rating: 4.7,
        price: 2599.99,
        originalPrice: 2799.99,
        discount: 7,
        shippingFee: 0,
        shippingTime: 'Retrait le jour même',
        link: '#',
      },
      {
        id: '5',
        name: 'eBay',
        logo: '/assets/vendors/ebay.svg',
        rating: 4.5,
        price: 2399.00,
        originalPrice: 2799.99,
        discount: 14,
        shippingFee: 9.99,
        shippingTime: 'Livraison 3-5 jours',
        link: '#',
      },
    ],
    bestPrice: 2399.00,
    averagePrice: 2499.66,
    lowestEverPrice: 2299.00,
    priceHistory: [
      { date: '2025-01-01', price: 2799.99 },
      { date: '2025-02-01', price: 2699.99 },
      { date: '2025-03-01', price: 2599.99 },
      { date: '2025-04-01', price: 2499.99 },
      { date: '2025-05-01', price: 2399.00 },
    ],
  },
  {
    id: '8',
    name: 'Apple AirPods Pro (2ème génération)',
    slug: 'apple-airpods-pro-2nd-gen',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Les AirPods Pro de 2ème génération offrent une suppression active du bruit améliorée, un son spatial immersif et une meilleure autonomie pour une expérience audio ultime.",
    specifications: {
      'Annulation du bruit': 'Active améliorée',
      'Autonomie': '6 heures d’écoute, 30 heures avec boîtier',
      'Connexion': 'Bluetooth 5.3',
      'Résistance à l’eau': 'IPX4',
      'Compatibilité': 'iOS, iPadOS, macOS, watchOS',
    },
    vendors: [
      {
        id: '1',
        name: 'Amazon',
        logo: '/assets/vendors/amazon.svg',
        rating: 4.9,
        price: 249.00,
        originalPrice: 279.00,
        discount: 11,
        shippingFee: 0,
        shippingTime: 'Livraison en 1 jour',
        link: '#',
      },
      {
        id: '2',
        name: 'Apple Store',
        logo: '/assets/vendors/apple.svg',
        rating: 5.0,
        price: 259.00,
        originalPrice: 279.00,
        discount: 7,
        shippingFee: 0,
        shippingTime: 'Retrait en boutique le jour même',
        link: '#',
      },
    ],
    bestPrice: 249.00,
    averagePrice: 254.00,
    lowestEverPrice: 229.00,
    priceHistory: [
      { date: '2025-01-01', price: 279.00 },
      { date: '2025-02-01', price: 269.00 },
      { date: '2025-03-01', price: 259.00 },
      { date: '2025-04-01', price: 249.00 },
      { date: '2025-05-01', price: 249.00 },
    ],
  },
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Comment Trouver les Meilleures Offres sur JustSmartShopping',
    slug: 'comment-trouver-meilleures-offres-justsmartshopping',
    excerpt: 'Découvrez nos astuces pour dénicher les prix les plus bas sur une large sélection de produits sur JustSmartShopping.',
    content: `
      <p>Faire du shopping en ligne peut vite devenir compliqué face à la multitude d'offres et de produits disponibles. Voici comment vous assurer de profiter des meilleures offres sur JustSmartShopping, votre plateforme de comparaison et d’achat affilié.</p>
      
      <h2>1. Suivez l’historique des prix</h2>
      <p>Avant d’acheter, consultez l’évolution du prix du produit. Cela vous permet de vérifier si la « promotion » actuelle est réellement avantageuse ou juste un coup marketing. JustSmartShopping automatise cette vérification pour vous !</p>
      
      <h2>2. Comparez plusieurs vendeurs</h2>
      <p>Les prix varient souvent d’un vendeur à un autre, même pour un même produit. Pensez à comparer au moins 3 à 5 offres différentes. N’oubliez pas de prendre en compte les frais de livraison, qui peuvent annuler une bonne affaire.</p>
      
      <h2>3. Choisissez le bon moment pour acheter</h2>
      <p>Certaines périodes offrent des promotions plus intéressantes :</p>
      <ul>
        <li>Black Friday / Cyber Monday (novembre)</li>
        <li>Soldes de rentrée (août)</li>
        <li>Journées spéciales JustSmartShopping (période spécifique)</li>
        <li>Fin de trimestre (mars, juin, septembre, décembre)</li>
      </ul>
      
      <h2>4. Optez pour les modèles précédents</h2>
      <p>Les modèles des années précédentes bénéficient souvent de baisses de prix importantes tout en offrant une qualité satisfaisante pour la majorité des utilisateurs.</p>
      
      <h2>5. Activez les alertes prix</h2>
      <p>Avec JustSmartShopping, vous pouvez définir des alertes prix et être prévenu dès que le produit atteint le tarif souhaité.</p>
      
      <p>En suivant ces conseils et en utilisant les outils JustSmartShopping, vous économiserez beaucoup sur vos achats en ligne.</p>
    `,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: {
      name: 'Sarah Dupont',
      avatar: '/assets/avatars/avatar-1.png',
      role: 'Rédactrice Tech',
    },
    category: 'Astuces Shopping',
    publishedAt: '2025-04-15T10:30:00Z',
    readTime: '8 min de lecture',
  },
  {
    id: '2',
    title: 'Maximisez vos Récompenses avec les Programmes de Fidélité JustSmartShopping',
    slug: 'maximisez-recompenses-programmes-fidelite',
    excerpt: 'Apprenez à cumuler et utiliser vos points de fidélité pour tirer le meilleur parti des programmes JustSmartShopping.',
    content: `
      <p>Les programmes de fidélité offrent de réels avantages, à condition de bien les utiliser. Voici comment optimiser vos gains avec les récompenses JustSmartShopping.</p>
      
      <h2>Comprendre la valeur des points</h2>
      <p>Chaque point n’a pas la même valeur. Par exemple, 1000 points peuvent valoir 10€ chez un vendeur et seulement 5€ chez un autre. Calculez toujours la valeur réelle avant d’être tenté par une offre.</p>
      
      <h2>Cumulez les récompenses</h2>
      <p>La meilleure stratégie est de combiner plusieurs programmes :</p>
      <ul>
        <li>Utilisez une carte de crédit avec cashback</li>
        <li>Passez par un portail de cashback</li>
        <li>Gagnez des points de fidélité JustSmartShopping</li>
        <li>Appliquez des codes promo au moment du paiement</li>
      </ul>
      <p>Avec cette méthode, vous pouvez récupérer jusqu’à 15-25% du montant de vos achats sous forme de récompenses.</p>
      
      <h2>Choisissez le bon moment pour échanger vos points</h2>
      <p>Profitez des périodes de bonus pour convertir vos points en cadeaux ou réductions à leur meilleure valeur.</p>
      
      <h2>Surveillez la validité de vos points</h2>
      <p>Les points JustSmartShopping n’expirent jamais, mais pensez à vérifier la durée de validité des autres programmes.</p>
      
      <h2>L’avantage JustSmartShopping</h2>
      <p>Avec JustSmartShopping, vous cumulez des points à chaque achat, peu importe le vendeur, et vous pouvez les échanger contre des réductions ou des cartes cadeaux.</p>
      
      <p>En appliquant ces conseils, vos achats deviennent rentables et vous économisez intelligemment au quotidien.</p>
    `,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: {
      name: 'Michel Bernard',
      avatar: '/assets/avatars/avatar-2.png',
      role: 'Analyste Consommateur',
    },
    category: 'Récompenses',
    publishedAt: '2025-04-10T14:15:00Z',
    readTime: '6 min de lecture',
  },
  {
    id: '3',
    title: 'Suivi de Prix vs Chasse aux Bons Plans : Quelle Stratégie Choisir ?',
    slug: 'suivi-prix-vs-chasse-bons-plans',
    excerpt: 'Faut-il attendre une baisse précise ou profiter des offres en cours ? Découvrez quelle méthode vous fait vraiment économiser sur JustSmartShopping.',
    content: `
      <p>Pour économiser, les acheteurs adoptent deux approches principales : le suivi de prix et la chasse aux bons plans. Laquelle est la plus efficace ?</p>
      
      <h2>L’approche du suivi de prix</h2>
      <p>Le suiveur de prix sélectionne un produit précis et attend que son tarif baisse jusqu’à un seuil acceptable. Cette méthode :</p>
      <ul>
        <li>Permet d’obtenir exactement le produit souhaité</li>
        <li>Évite les achats impulsifs</li>
        <li>Demande de la patience</li>
        <li>Convient aux achats non urgents</li>
      </ul>
      
      <h2>L’approche du chasseur de bons plans</h2>
      <p>Le chasseur scrute les promotions et ventes flash pour dénicher des offres exceptionnelles. Cette méthode :</p>
      <ul>
        <li>Favorise les achats rapides</li>
        <li>Peut conduire à choisir des produits différents de l’idée initiale</li>
        <li>Convient mieux aux besoins génériques</li>
        <li>Nécessite une recherche active</li>
      </ul>
      
      <h2>Notre analyse</h2>
      <p>Après avoir étudié des milliers d’achats sur JustSmartShopping, nous constatons que les suiveurs économisent en moyenne 23% sur leurs produits ciblés, tandis que les chasseurs économisent 18% mais achètent plus souvent.</p>
      
      <p>La meilleure stratégie ? Un mélange des deux : suivez les prix pour les achats importants et chassez les bons plans pour les besoins courants.</p>
      
      <h2>JustSmartShopping vous accompagne</h2>
      <p>Notre plateforme vous permet de créer des alertes prix et de naviguer parmi les offres sélectionnées, pour une économie maximale selon votre style.</p>
      
      <p>Rappelez-vous : la meilleure méthode est celle qui s’adapte à vos besoins et à votre tempérament.</p>
    `,
    image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: {
      name: 'Jessica Lefebvre',
      avatar: '/assets/avatars/avatar-3.png',
      role: 'Stratège Shopping',
    },
    category: 'Astuces Shopping',
    publishedAt: '2025-04-05T09:45:00Z',
    readTime: '7 min de lecture',
  },

];

export const REWARDS_TIERS = [
  {
    id: 'bronze',
    name: 'Bronze',
    icon: '/assets/rewards/bronze.svg',
    pointsRequired: 0,
    benefits: [
      'Earn 1 point per $1 spent',
      'Access to price comparison tools',
      'Email price alerts',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    icon: '/assets/rewards/silver.svg',
    pointsRequired: 500,
    benefits: [
      'Earn 1.25 points per $1 spent',
      'Early access to flash sales',
      'Priority customer support',
      'Monthly exclusive deals',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    icon: '/assets/rewards/gold.svg',
    pointsRequired: 1000,
    benefits: [
      'Earn 1.5 points per $1 spent',
      'Free expedited shipping on select partners',
      'Exclusive vendor discounts',
      'Quarterly bonus point events',
      'Premium product recommendations',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    icon: '/assets/rewards/platinum.svg',
    pointsRequired: 2500,
    benefits: [
      'Earn 2 points per $1 spent',
      'Personal shopping concierge',
      'Annual birthday reward',
      'Extended price protection guarantees',
      'VIP early access to new features',
      'Exclusive platinum-only deals',
    ],
  },
];

export const HERO_SLIDES = [
  {
    id: '1',
    title: 'Comparez les prix, achetez plus intelligemment',
    description: 'Trouvez les meilleures offres sur Internet grâce à notre moteur de comparaison de prix.',
    cta: 'Commencer la comparaison',
    ctaLink: '/shop',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Gagnez des récompenses à chaque achat',
    description: 'Achetez via notre plateforme et gagnez des points à échanger contre des réductions.',
    cta: 'Rejoindre les récompenses',
    ctaLink: '/rewards',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: ' SmartChattingBot 24/7 ',
    description: 'Un assistant IA toujours disponible pour vous guider, vous conseiller ou répondre à vos questions shopping à tout moment.',
    image: 'https://images.pexels.com/photos/7821675/pexels-photo-7821675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];
