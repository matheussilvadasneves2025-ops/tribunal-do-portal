import { motion } from 'framer-motion'
import type { TreeNode } from '@/constants/tribunal-tree'
import { useLanguage } from '@/context/LanguageContext'
import { getTreeNodeTranslation } from '@/i18n/tribunal-tree'

function NodeBox({ node, depth }: { node: TreeNode; depth: number }) {
    const { language } = useLanguage()

  const translation = getTreeNodeTranslation(node.id)

  const displayNode =
    language === 'en' && translation
      ? { ...node, ...translation }
      : node
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: depth * 0.06 }}
      className="rounded-sm border bg-[var(--color-paper-dark)] px-4 py-2.5 text-center shadow-sm"
      style={{ borderColor: node.color ?? 'var(--color-line-strong)', minWidth: 150 }}
    >
      <p className="font-editorial text-sm font-semibold leading-tight text-[var(--color-ink)]">
        {displayNode.label}
      </p>
      {displayNode.sublabel && (
        <p className="mt-0.5 font-ui text-[10px] uppercase leading-tight tracking-[0.08em] text-[var(--color-ink-muted)]">
          {displayNode.sublabel}
        </p>
      )}
    </motion.div>
  )
}

/** Filhos empilhados verticalmente com uma espinha lateral (usado para listas longas, como testemunhas) */
function ColumnChildren({ node, depth }: { node: TreeNode; depth: number }) {
  const children = node.children ?? []
  const lineColor = node.color ?? 'var(--color-line-strong)'

  return (
    <div className="relative flex flex-col gap-3 pl-6">
      <div
        className="absolute left-0 top-4 bottom-4 w-px"
        style={{ backgroundColor: lineColor, opacity: 0.5 }}
      />
      {children.map((child) => (
        <div key={child.id} className="relative flex items-center">
          <div
            className="absolute -left-6 top-1/2 h-px w-6"
            style={{ backgroundColor: lineColor, opacity: 0.5 }}
          />
          <NodeBox node={child} depth={depth} />
        </div>
      ))}
    </div>
  )
}

export function TreeBranch({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const children = node.children ?? []
  const isColumn = node.childrenLayout === 'column'

  return (
    <div className="flex flex-col items-center">
      <NodeBox node={node} depth={depth} />

      {children.length > 0 && (
        <>
          <div
            className="w-px"
            style={{ height: 24, backgroundColor: node.color ?? 'var(--color-line-strong)', opacity: 0.5 }}
          />

          {isColumn ? (
            <ColumnChildren node={node} depth={depth + 1} />
          ) : children.length === 1 ? (
            <TreeBranch node={children[0]} depth={depth + 1} />
          ) : (
            <div
              className="grid"
              style={{ gridTemplateColumns: `repeat(${children.length}, minmax(150px, 1fr))` }}
            >
              {/* linha conectora horizontal + prumadas verticais para cada filho */}
              <div className="relative col-span-full" style={{ height: 24 }}>
                <div
                  className="absolute top-0 h-px"
                  style={{
                    left: `${50 / children.length}%`,
                    right: `${50 / children.length}%`,
                    backgroundColor: node.color ?? 'var(--color-line-strong)',
                    opacity: 0.5,
                  }}
                />
                {children.map((child, i) => (
                  <div
                    key={child.id}
                    className="absolute top-0 w-px"
                    style={{
                      height: 24,
                      left: `${((i + 0.5) / children.length) * 100}%`,
                      backgroundColor: node.color ?? 'var(--color-line-strong)',
                      opacity: 0.5,
                    }}
                  />
                ))}
              </div>

              {children.map((child) => (
                <div key={child.id} className="flex flex-col items-center px-2">
                  <TreeBranch node={child} depth={depth + 1} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export function OrgChartTree({ root }: { root: TreeNode }) {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex min-w-max justify-center px-4">
        <TreeBranch node={root} />
      </div>
    </div>
  )
}
