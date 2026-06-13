'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { CSSProperties } from 'react';

export type CommitsData = {
    cells: { index: number; color?: string }[];
    width: number;
    height: number;
};

export const CommitsGrid = ({
    text,
    data,
}: {
    text?: string;
    data?: CommitsData;
}) => {
    const cleanString = (str: string): string => {
        const upperStr = str.toUpperCase();

        const withoutAccents = upperStr
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');

        const allowedChars = Object.keys(letterPatterns);
        return withoutAccents
            .split('')
            .filter((char) => allowedChars.includes(char))
            .join('');
    };

    const generateHighlightedCells = (text: string): CommitsData => {
        const cleanedText = cleanString(text);
        // Make text mode output a standard 53 column width so it doesn't jump during transition
        const width = 53;
        const height = 7;

        // Center the text. Each letter takes 6 columns.
        const textWidth = cleanedText.length * 6;
        let currentPosition = Math.floor((width - textWidth) / 2);
        if (currentPosition < 0) currentPosition = 0;

        const highlightedCells: { index: number }[] = [];

        cleanedText
            .toUpperCase()
            .split('')
            .forEach((char) => {
                if (letterPatterns[char]) {
                    const pattern = letterPatterns[char].map((pos) => {
                        const row = Math.floor(pos / 50);
                        const col = pos % 50;
                        // Center vertically (height is 7, letter height is ~7, no top border needed)
                        return { index: row * width + col + currentPosition, color: '#48d55d' };
                    });
                    highlightedCells.push(...pattern);
                }
                currentPosition += 6;
            });

        return {
            cells: highlightedCells,
            width,
            height,
        };
    };

    const gridData = data
        ? data
        : text
          ? generateHighlightedCells(text)
          : { cells: [], width: 53, height: 7 };
    const { cells, width: gridWidth, height: gridHeight } = gridData;

    const getRandomColor = () => {
        const commitColors = ['#48d55d', '#016d32', '#0d4429'];
        const randomIndex = Math.floor(Math.random() * commitColors.length);
        return commitColors[randomIndex];
    };

    const getRandomDelay = () => `${(Math.random() * 0.6).toFixed(1)}s`;
    const getRandomFlash = () => +(Math.random() < 0.3);

    const cellMap = React.useMemo(() => {
        const map = new Map<number, string | undefined>();
        cells.forEach((c) => map.set(c.index, c.color));
        return map;
    }, [cells]);

    return (
        <div
            className="w-fit min-w-max mx-auto bg-black/[0.02] dark:bg-neutral-900/[0.2] border border-black/5 dark:border-neutral-800 grid p-3 gap-[3px] rounded-[12px] overflow-hidden"
            style={{
                gridTemplateColumns: `repeat(${gridWidth}, 12px)`,
                gridTemplateRows: `repeat(${gridHeight}, 12px)`,
            }}
        >
            {Array.from({ length: gridWidth * gridHeight }).map((_, index) => {
                const isHighlighted = cellMap.has(index);
                const cellColor = cellMap.get(index);

                return (
                    <div
                        key={index}
                        className={cn(
                            `border w-3 h-3 rounded-[2px] transition-colors duration-1000 ease-in-out`,
                            isHighlighted
                                ? 'bg-[var(--highlight)] border-transparent'
                                : 'border-black/10 dark:border-neutral-800 bg-transparent',
                        )}
                        style={
                            {
                                '--highlight': cellColor || getRandomColor(),
                            } as CSSProperties
                        }
                    />
                );
            })}
        </div>
    );
};

const letterPatterns: { [key: string]: number[] } = {
    A: [
        1, 2, 3, 50, 100, 150, 200, 250, 300, 54, 104, 154, 204, 254, 304, 151,
        152, 153,
    ],
    B: [
        0, 1, 2, 3, 4, 50, 100, 150, 151, 200, 250, 300, 301, 302, 303, 304, 54,
        104, 152, 153, 204, 254, 303,
    ],
    C: [0, 1, 2, 3, 4, 50, 100, 150, 200, 250, 300, 301, 302, 303, 304],
    D: [
        0, 1, 2, 3, 50, 100, 150, 200, 250, 300, 301, 302, 54, 104, 154, 204,
        254, 303,
    ],
    E: [
        0, 1, 2, 3, 4, 50, 100, 150, 200, 250, 300, 301, 302, 303, 304, 151,
        152,
    ],
    F: [0, 1, 2, 3, 4, 50, 100, 150, 200, 250, 300, 151, 152, 153],
    G: [
        0, 1, 2, 3, 4, 50, 100, 150, 200, 250, 300, 301, 302, 303, 153, 204,
        154, 304, 254,
    ],
    H: [
        0, 50, 100, 150, 200, 250, 300, 151, 152, 153, 4, 54, 104, 154, 204,
        254, 304,
    ],
    I: [1, 2, 3, 52, 102, 152, 202, 252, 301, 302, 303],
    J: [0, 1, 2, 3, 4, 52, 102, 152, 202, 250, 252, 302, 300, 301],
    K: [0, 4, 50, 100, 150, 200, 250, 300, 151, 152, 103, 54, 203, 254, 304],
    L: [0, 50, 100, 150, 200, 250, 300, 301, 302, 303, 304],
    M: [
        0, 50, 100, 150, 200, 250, 300, 51, 102, 53, 4, 54, 104, 154, 204, 254,
        304,
    ],
    N: [
        0, 50, 100, 150, 200, 250, 300, 51, 102, 153, 204, 4, 54, 104, 154, 204,
        254, 304,
    ],
    Ñ: [
        0, 50, 100, 150, 200, 250, 300, 51, 102, 153, 204, 4, 54, 104, 154, 204,
        254, 304,
    ],
    O: [1, 2, 3, 50, 100, 150, 200, 250, 301, 302, 303, 54, 104, 154, 204, 254],
    P: [0, 50, 100, 150, 200, 250, 300, 1, 2, 3, 54, 104, 151, 152, 153],
    Q: [
        1, 2, 3, 50, 100, 150, 200, 250, 301, 302, 54, 104, 154, 204, 202, 253,
        304,
    ],
    R: [
        0, 50, 100, 150, 200, 250, 300, 1, 2, 3, 54, 104, 151, 152, 153, 204,
        254, 304,
    ],
    S: [1, 2, 3, 4, 50, 100, 150, 151, 152, 153, 204, 254, 300, 301, 302, 303],
    T: [0, 1, 2, 3, 4, 52, 102, 152, 202, 252, 302],
    U: [0, 50, 100, 150, 200, 250, 301, 302, 303, 4, 54, 104, 154, 204, 254],
    V: [0, 50, 100, 150, 200, 251, 302, 4, 54, 104, 154, 204, 253],
    W: [
        0, 50, 100, 150, 200, 250, 301, 152, 202, 252, 4, 54, 104, 154, 204,
        254, 303,
    ],
    X: [0, 50, 203, 254, 304, 4, 54, 152, 101, 103, 201, 250, 300],
    Y: [0, 50, 101, 152, 202, 252, 302, 4, 54, 103],
    Z: [0, 1, 2, 3, 4, 54, 103, 152, 201, 250, 300, 301, 302, 303, 304],
    '0': [
        1, 2, 3, 50, 100, 150, 200, 250, 301, 302, 303, 54, 104, 154, 204, 254,
    ],
    '1': [1, 52, 102, 152, 202, 252, 302, 0, 2, 300, 301, 302, 303, 304],
    '2': [0, 1, 2, 3, 54, 104, 152, 153, 201, 250, 300, 301, 302, 303, 304],
    '3': [0, 1, 2, 3, 54, 104, 152, 153, 204, 254, 300, 301, 302, 303],
    '4': [0, 50, 100, 150, 4, 54, 104, 151, 152, 153, 154, 204, 254, 304],
    '5': [0, 1, 2, 3, 4, 50, 100, 151, 152, 153, 204, 254, 300, 301, 302, 303],
    '6': [
        1, 2, 3, 50, 100, 150, 151, 152, 153, 200, 250, 301, 302, 204, 254, 303,
    ],
    '7': [0, 1, 2, 3, 4, 54, 103, 152, 201, 250, 300],
    '8': [
        1, 2, 3, 50, 100, 151, 152, 153, 200, 250, 301, 302, 303, 54, 104, 204,
        254,
    ],
    '9': [1, 2, 3, 50, 100, 151, 152, 153, 154, 204, 254, 304, 54, 104],
    ' ': [],
};
