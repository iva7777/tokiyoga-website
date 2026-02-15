import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertBgnToEur = (bgn: number): number => {
    const rate = 1.95583;
    return bgn / rate;
};