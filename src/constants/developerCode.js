// Isi file "developer.js" yang ditampilkan di CodeCard (Hero).
// Dijaga sinkron dengan data di Hero, Experience, Education & Contact.
//
// Format: satu baris kode = array token [kelasWarna, teks]; kelasWarna null = teks polos (indentasi/spasi).
// Dirender oleh components/ui/CodeCard/CodeBlock.js.

const KEYWORD = 'text-violet-400';
const NAME = 'text-sky-300';
const PUNCTUATION = 'text-slate-400';
const KEY = 'text-slate-300';
const STRING = 'text-emerald-300';

const property = (key, value, indent = '  ') => [
  [null, indent],
  [KEY, key],
  [PUNCTUATION, ': '],
  [STRING, `"${value}"`],
  [PUNCTUATION, ','],
];

const openBlock = (key, bracket) => [[null, '  '], [KEY, key], [PUNCTUATION, `: ${bracket}`]];
const closeBlock = (bracket) => [[null, '  '], [PUNCTUATION, `${bracket},`]];

const stringRow = (values) => [
  [null, '    '],
  ...values.flatMap((value, i) => [
    [STRING, `"${value}"`],
    [PUNCTUATION, i < values.length - 1 ? ', ' : ','],
  ]),
];

const DECLARATION = [[KEYWORD, 'const'], [null, ' '], [NAME, 'developer'], [null, ' '], [PUNCTUATION, '= {']];
const END = [[PUNCTUATION, '};']];

const STACK = [
  openBlock('stack', '['),
  stringRow(['JavaScript', 'TypeScript', 'C#', '.NET']),
  stringRow(['React', 'Express', 'Tailwind', 'Bootstrap']),
  stringRow(['PostgreSQL', 'SQL Server']),
  closeBlock(']'),
];

// Versi ringkas: tampil di kartu Hero.
export const DEVELOPER_CODE_SHORT = [
  DECLARATION,
  property('name', 'Pedro Widya'),
  property('role', 'Web Developer'),
  ...STACK,
  END,
];

// Versi lengkap: tampil saat jendela di-maximize.
export const DEVELOPER_CODE_FULL = [
  DECLARATION,
  property('name', 'Pedro Widya'),
  property('role', 'Web Developer'),
  property('currentlyAt', 'PT. Cipta Sistem Karya'),
  property('education', 'Informatics Engineering — Universitas Buddhi Dharma'),
  ...STACK,
  openBlock('tools', '['),
  stringRow(['Docker', 'Kubernetes', 'Grafana', 'Azure']),
  stringRow(['Git', 'Postman', 'DBeaver', 'Claude']),
  closeBlock(']'),
  openBlock('contact', '{'),
  property('email', 'widyadharta@gmail.com', '    '),
  property('github', 'edrzvena', '    '),
  closeBlock('}'),
  END,
];
