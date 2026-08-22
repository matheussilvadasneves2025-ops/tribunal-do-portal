export interface TreeNode {
  id: string
  label: string
  sublabel?: string
  color?: string
  /** 'row' (padrão) = filhos lado a lado com conectores em pente.
   *  'column' = filhos empilhados verticalmente com uma espinha lateral. */
  childrenLayout?: 'row' | 'column'
  children?: TreeNode[]
}

export const CORTE_TREE: TreeNode = {
  id: 'corte',
  label: '⚖️ Corte',
  color: 'var(--color-gold)',
  children: [
    { id: 'sofia', label: 'Sofia', sublabel: 'Juíza' },
    { id: 'isabella', label: 'Isabella', sublabel: 'Assistente da Corte' },
  ],
}

export const ALEMANHA_TREE: TreeNode = {
  id: 'alemanha',
  label: '🎖️ Alemanha',
  sublabel: 'Potências do Eixo',
  color: 'var(--color-cat-crimes)',
  children: [
    {
      id: 'alemanha-acusacao-defesa',
      label: 'Acusação e Defesa',
      color: 'var(--color-cat-crimes)',
      children: [
        { id: 'miguel', label: 'Miguel Campos', sublabel: 'Promotor' },
        { id: 'joao-pedro', label: 'João Pedro', sublabel: 'Advogado de Defesa' },
      ],
    },
    {
      id: 'alemanha-testemunhas',
      label: 'Testemunhas',
      color: 'var(--color-cat-crimes)',
      childrenLayout: 'column',
      children: [
        { id: 'lucas', label: 'Lucas', sublabel: 'Testemunha' },
        { id: 'melyssa', label: 'Melyssa', sublabel: 'Testemunha' },
        { id: 'maria-sophia', label: 'Maria Sophia', sublabel: 'Testemunha' },
        { id: 'alice', label: 'Alice', sublabel: 'Testemunha' },
        { id: 'luis', label: 'Luís', sublabel: 'Testemunha' },
      ],
    },
    {
      id: 'alemanha-reu',
      label: 'Réu',
      color: 'var(--color-cat-crimes)',
      children: [{ id: 'ruben', label: 'Ruben', sublabel: 'Interpreta Adolf Hitler' }],
    },
  ],
}

export const EUA_TREE: TreeNode = {
  id: 'eua',
  label: '🗽 Estados Unidos',
  sublabel: 'Potências Aliadas',
  color: 'var(--color-cat-testemunhos)',
  children: [
    {
      id: 'eua-acusacao-defesa',
      label: 'Acusação e Defesa',
      color: 'var(--color-cat-testemunhos)',
      children: [
        { id: 'math', label: 'Math', sublabel: 'Promotor' },
        { id: 'leticia-c', label: 'Letícia Carollini', sublabel: 'Advogada de Defesa' },
      ],
    },
    {
      id: 'eua-testemunhas',
      label: 'Testemunhas',
      color: 'var(--color-cat-testemunhos)',
      childrenLayout: 'column',
      children: [
        { id: 'maria-eduarda', label: 'Maria Eduarda Marques', sublabel: 'Testemunha' },
        { id: 'leticia-a', label: 'Letícia Abade', sublabel: 'Testemunha' },
        { id: 'marina', label: 'Marina', sublabel: 'Testemunha' },
        { id: 'cecilia', label: 'Cecília', sublabel: 'Testemunha' },
      ],
    },
    {
      id: 'eua-reu',
      label: 'Réu',
      color: 'var(--color-cat-testemunhos)',
      children: [{ id: 'kaua', label: 'Kauã', sublabel: 'Interpreta Harry Truman' }],
    },
  ],
}

export const TRIBUNAL_TREES: TreeNode[] = [CORTE_TREE, ALEMANHA_TREE, EUA_TREE]
