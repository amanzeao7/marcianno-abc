'use client'
import { schedule } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'

export default function ScheduleSection() {
  return (
    <section className="py-20 px-[5%]" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          eyebrow="Classes Monday to Friday"
          title="Weekly Schedule"
        />

        {/* Scrollable table wrapper for mobile */}
        <div className="overflow-x-auto -mx-[5%] px-[5%]">
          <table
            className="w-full font-body"
            style={{
              minWidth: '480px',
              borderCollapse: 'collapse',
            }}
          >
            {/* Header row */}
            <thead>
              <tr style={{ background: 'var(--color-red)' }}>
                {['Day', 'Time', 'Class', 'Level'].map((col) => (
                  <th
                    key={col}
                    className="text-left px-5 py-4 font-display text-base tracking-wider"
                    style={{ color: 'var(--color-text)', letterSpacing: '1px' }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {schedule.map((row, i) => (
                <tr
                  key={`${row.day}-${row.time}`}
                  className="transition-colors duration-150"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'var(--color-bg3)'
                        : 'var(--color-bg2)',
                    borderBottom: '1px solid var(--color-border)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background =
                      'var(--color-bg3)'
                    ;(e.currentTarget as HTMLElement).style.opacity = '0.85'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background =
                      i % 2 === 0
                        ? 'var(--color-bg3)'
                        : 'var(--color-bg2)'
                    ;(e.currentTarget as HTMLElement).style.opacity = '1'
                  }}
                >
                  <td
                    className="px-5 py-4 font-semibold text-sm"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {row.day}
                  </td>
                  <td
                    className="px-5 py-4 text-sm"
                    style={{ color: 'var(--color-text2)' }}
                  >
                    {row.time}
                  </td>
                  <td
                    className="px-5 py-4 text-sm"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {row.className}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className="inline-block text-xs uppercase tracking-wider px-3 py-1 border font-semibold"
                      style={{
                        color: 'var(--color-red)',
                        borderColor: 'var(--color-border)',
                      }}
                    >
                      {row.level}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
