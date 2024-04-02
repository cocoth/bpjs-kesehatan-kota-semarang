'use client'


import React, { HTMLAttributes, useEffect, useState } from 'react'
interface ReadCSVProps extends HTMLAttributes<HTMLTableElement> {
    data: string
}

const ReadCSV: React.FC<ReadCSVProps> = ({ data, ...props }) => {
    const [dataTable, setDataTable] = useState<string[][]>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = (await fetch(data)).text()
                const rows = (await res).split('\n').map(e => e.split(';'))
                setDataTable(rows)
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [data])

    return (
        <div {...props}>
            <table>
                <tbody>
                    {dataTable.map((row, i) => (
                        <tr
                            key={`${row}-${i}`}
                            className={i === 0 ? 'font-bold' : ''}
                        >
                            {row.map((cell, i) => (
                                <td
                                    key={i}
                                    className='border-b border-b-black'
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default ReadCSV