'use client'


import React, { HTMLAttributes, useEffect, useState } from 'react'
interface ReadCSVProps extends HTMLAttributes<HTMLTableElement> {
    data: string
}

const ReadCSV: React.FC<ReadCSVProps> = ({ data, ...props }) => {
    const [header, setHeader] = useState<string[]>([])
    const [dataTable, setDataTable] = useState<string[][]>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = (await fetch(data)).text()
                const rows = (await res).split('\n').map(e => e.split(';'))
                const headerRow = rows.shift() || []
                setHeader(headerRow)
                setDataTable(rows.slice(1))
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [data])

    return (
        <div {...props}>
            <table className='w-full table-auto'>
                <thead className='bg-preset-blue text-white '>
                    <tr className='text-nowrap px-3'>
                        {header.map((item, i) => (
                            <th
                                key={i}
                                className='tracking-wide w-max text-left px-3'
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataTable.map((row, i) => (
                        <tr
                            key={i}
                            className='border border-b-black odd:bg-gray-50 even:bg-gray-300 '
                        >
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className='text-left text-nowrap px-3'
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>

            {/* <table>
                <tbody className=''>
                    {dataTable.map((row, i) => (
                        <tr
                            key={`${row}-${i}`}
                            className={i === 0 ? 'font-bold px-2' : ''}
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
            </table> */}
        </div>

    )
}

export default ReadCSV