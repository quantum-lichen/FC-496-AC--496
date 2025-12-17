import { DocSection, LayerInfo } from './types';

export const DOCUMENTATION_DATA: DocSection[] = [
  {
    id: 'intro',
    title: '1. Introduction 🌿',
    content: 'Ce document décrit l\'intégration complète des architectures FC-496 et ACΦ-496 pour créer une architecture full-stack qui combine les avantages des deux systèmes : FC-496 (Une cellule fractale de 496 bits pour le stockage) et ACΦ-496 (Un ADN cognitif pour l\'encodage de connaissances).',
    type: 'text'
  },
  {
    id: 'arch',
    title: '2. Architecture Full-Stack 🧬',
    content: 'Vue d\'Enseigne du système complet.',
    code: `┌─────────────────────────────────────┐
│  Couche d'Application (IA, etc.)   │
├─────────────────────────────────────┤
│  Couche Logique (ACΦ-496)          │
├─────────────────────────────────────┤
│  Couche d'Interopérabilité         │
├─────────────────────────────────────┤
│  Couche Physique (FC-496)          │
└─────────────────────────────────────┘`,
    type: 'code'
  },
  {
    id: 'integration',
    title: '3. Intégration FC-496 et ACΦ-496 🔗',
    content: [
      'Unification des formats : Utiliser FC-496 comme format de stockage pour ACΦ-496.',
      'Optimisation des performances : Réduire la latence et améliorer l\'efficacité énergétique.',
      'Sécurité intégrée : Utiliser les propriétés intrinsèques de FC-496 pour sécuriser les données ACΦ-496.'
    ],
    type: 'list'
  },
  {
    id: 'physical',
    title: '4. Couche Physique : FC-496 🧬',
    content: 'Structure de la Cellule : Taille 496 bits. Major Segment (306 bits) et Minor Segment (190 bits).',
    code: `struct FC496_Atom {
    magic_signature: u128,     // Signature harmonique (liée à 496)
    pi_index_start: u64,       // Position dans la séquence π
    pi_checksum: u64,          // Vérification d'intégrité
    root_geo_hash: u128,       // Coordonnée fractale
    phi_ratio_check: u64,      // Intégrité structurale (H-Scale)
    schema_class: u32,         // Type de données
    next_block_offset: u16,    // Pointeur vers le prochain bloc
    flags: u16                 // Permissions
}`,
    type: 'code'
  },
  {
    id: 'logical',
    title: '5. Couche Logique : ACΦ-496 🧠',
    content: [
      'Axiomes immuables : Règles fondamentales.',
      'H-Scale : Cible = 1 (équilibre parfait).',
      'Évolution dirigée : Mutations contrôlées.'
    ],
    type: 'list'
  },
  {
    id: 'interop',
    title: '6. Couche d\'Interopérabilité 🔄',
    content: 'Le Transmuter est l\'algorithme qui permet de convertir les données entre les deux formats.',
    code: `from fc496 import FC496, transmute

# Définir un objet
obj = { "type": "medical_record", "patient_id": "ABC-123", "payload": {...} }

# Convertir en cellules FC-496
cells = transmute(obj)

# Reconstruire l'objet
reconstructed = FC496.decode(cells)`,
    type: 'code'
  },
  {
    id: 'security',
    title: '7. Sécurité et Résilience 🛡️',
    content: [
      'Vérification H-Scale : Détection d\'erreurs si H-Scale < 0.618.',
      'Redondance CRAID : Tolérance aux pannes jusqu\'à 40% via intrication fractale.'
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
