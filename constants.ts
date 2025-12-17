import { DocSection, LayerInfo } from './types';

export const DOCUMENTATION_DATA: DocSection[] = [
  {
    id: 'hero',
    title: 'FC-496 / ACΦ-496',
    content: 'L\'architecture ultime pour le stockage fractal et l\'intelligence cognitive. Une fusion entre biologie numérique et mathématiques sacrées.',
    type: 'hero',
    badges: [
      { label: 'build', value: 'passing', color: 'emerald' },
      { label: 'version', value: '2.0.0-alpha', color: 'blue' },
      { label: 'license', value: 'AGPL-v3', color: 'purple' },
      { label: 'coverage', value: '100%', color: 'emerald' },
      { label: 'platform', value: 'rust | python', color: 'orange' },
      { label: 'status', value: 'experimental', color: 'red' },
    ]
  },
  {
    id: 'intro',
    title: '1. Introduction 🌿',
    content: 'Bienvenue dans le futur du stockage. Ce document décrit l\'intégration complète des architectures FC-496 et ACΦ-496 pour créer une stack technologique qui dépasse les limites du binaire classique. Nous ne stockons pas juste des données ; nous encodons la réalité.',
    type: 'text'
  },
  {
    id: 'why',
    title: '⚡ Pourquoi FC-496 ?',
    content: [
      'Auto-réparation : Les données se soignent elles-mêmes via des séquences de Fibonacci.',
      'Densité Infinie : Stockage fractal permettant une compression théorique sans limite.',
      'Interopérabilité Cognitive : Nativement compris par les IA de nouvelle génération.'
    ],
    type: 'list'
  },
  {
    id: 'arch',
    title: '2. Architecture Full-Stack 🧬',
    content: 'Une vue d\'ensemble de la stack divine.',
    code: `┌─────────────────────────────────────┐
│  Couche d'Application (IA, UX)     │ ⚡ Interface Neuronale
├─────────────────────────────────────┤
│  Couche Logique (ACΦ-496)          │ 🧠 Cerveau Fractal
├─────────────────────────────────────┤
│  Couche d'Interopérabilité         │ 🔄 Le Transmuter
├─────────────────────────────────────┤
│  Couche Physique (FC-496)          │ 🧬 ADN Numérique
└─────────────────────────────────────┘`,
    type: 'code'
  },
  {
    id: 'physical',
    title: '3. Couche Physique : FC-496 🧬',
    content: 'La brique fondamentale de l\'univers numérique. Chaque cellule est un univers.',
    code: `// Structure Atomique de la Cellule Divine
struct FC496_Atom {
    magic_signature: u128,     // 0x1F0 (496) - Signature Harmonique
    pi_index_start: u64,       // Ancrage dans l'infini de PI
    root_geo_hash: u128,       // Positionnement dans l'hyper-espace
    phi_ratio_check: u64,      // Vérification H-Scale (Golden Ratio)
    payload: [u8; 306],        // Données utiles (Major Segment)
    meta: [u8; 190],           // Métadonnées de régénération (Minor Segment)
}`,
    type: 'code'
  },
  {
    id: 'interop',
    title: '4. Le Transmuter 🔄',
    content: 'L\'alchimie logicielle qui transforme le JSON inerte en matière vivante FC-496.',
    code: `from fc496 import Alchemy, Transmuter

# Initialisation de la Pierre Philosophale
stone = Transmuter(mode="sacred_geometry")

# Transmutation d'un objet classique
inert_data = { "id": "patient_01", "dna": "GATTACA..." }
living_cell = stone.transmute(inert_data)

# Vérification de la vitalité
if living_cell.h_scale > 0.618:
    print("✨ Cellule stable et vivante")
else:
    living_cell.heal() # Auto-réparation`,
    type: 'code'
  },
  {
    id: 'roadmap',
    title: '5. Feuille de Route 🚀',
    content: [
      'Q1 2026 : Premier cluster FC-496 opérationnel sur FPGA.',
      'Q2 2026 : Lancement du réseau ACΦ global (The Root).',
      'Q3 2026 : Intégration native dans le kernel Linux.',
      'Q4 2026 : Singularité technologique.'
    ],
    type: 'list'
  }
];

export const LAYERS: LayerInfo[] = [
  {
    id: 'app',
    name: "Couche d'Application",
    description: "Interfaces IA & Systèmes Utilisateurs",
    color: "#a855f7", // Purple
    details: ["IA Cognitive", "Simulations", "Medical Records", "Cloud Interface"]
  },
  {
    id: 'logic',
    name: "Couche Logique (ACΦ-496)",
    description: "ADN Cognitif & Axiomes",
    color: "#3b82f6", // Blue
    details: ["Axiomes Immuables", "H-Scale Optimization", "Evolution Engine", "Knowledge Graph"]
  },
  {
    id: 'interop',
    name: "Couche d'Interopérabilité",
    description: "Le Transmuter",
    color: "#10b981", // Emerald
    details: ["Transmutation Protocol", "Schema Validation", "Encoding/Decoding", "API Gateway"]
  },
  {
    id: 'phys',
    name: "Couche Physique (FC-496)",
    description: "Cellules Fractales 496-bit",
    color: "#f59e0b", // Amber
    details: ["Major Segment (306b)", "Minor Segment (190b)", "Pi Checksums", "Geo Hash"]
  }
];
