import type { TreeNode } from '@/constants/tribunal-tree'

export type TreeNodeTranslation = Partial<
  Pick<TreeNode, 'label' | 'sublabel'>
>

export const TRIBUNAL_TREE_TRANSLATIONS: Record<
  string,
  TreeNodeTranslation
> = {
  corte: {
    label: '⚖️ Court',
  },
  sofia: {
    sublabel: 'Judge',
  },
  isabella: {
    sublabel: 'Court Assistant',
  },

  alemanha: {
    label: '🎖️ Germany',
    sublabel: 'Axis Powers',
  },
  'alemanha-acusacao-defesa': {
    label: 'Prosecution and Defense',
  },
  miguel: {
    sublabel: 'Prosecutor',
  },
  'joao-pedro': {
    sublabel: 'Defense Attorney',
  },
  'alemanha-testemunhas': {
    label: 'Witnesses',
  },
  lucas: {
    sublabel: 'Witness',
  },
  melyssa: {
    sublabel: 'Witness',
  },
  'maria-sophia': {
    sublabel: 'Witness',
  },
  alice: {
    sublabel: 'Witness',
  },
  luis: {
    sublabel: 'Witness',
  },
  'alemanha-reu': {
    label: 'Defendant',
  },
  ruben: {
    sublabel: 'Portrays Hermann Göring',
  },

  eua: {
    label: '🗽 United States',
    sublabel: 'Allied Powers',
  },
  'eua-acusacao-defesa': {
    label: 'Prosecution and Defense',
  },
  math: {
    sublabel: 'Prosecutor',
  },
  'leticia-c': {
    sublabel: 'Defense Attorney',
  },
  'eua-testemunhas': {
    label: 'Witnesses',
  },
  'maria-eduarda': {
    sublabel: 'Witness',
  },
  'leticia-a': {
    sublabel: 'Witness',
  },
  marina: {
    sublabel: 'Witness',
  },
  cecilia: {
    sublabel: 'Witness',
  },
  'eua-reu': {
    label: 'Defendant',
  },
  kaua: {
    sublabel: 'Portrays Robert H. Jackson',
  },
}

export function getTreeNodeTranslation(
  id: string,
): TreeNodeTranslation | undefined {
  return TRIBUNAL_TREE_TRANSLATIONS[id]
}