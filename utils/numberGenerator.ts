
const SEQUENTIAL_KEY = 'invoice_sequence';
const DATE_BASED_KEY = 'invoice_date_based_sequence';

// --- Sequential Number Helpers ---

export const getSequenceNumber = (): number => {
  const stored = localStorage.getItem(SEQUENTIAL_KEY);
  return stored ? parseInt(stored, 10) : 1;
};

const setSequenceNumber = (num: number): void => {
  localStorage.setItem(SEQUENTIAL_KEY, num.toString());
};

export const resetSequence = (): number => {
  setSequenceNumber(1);
  return 1;
};

// --- Date-Based Number Helpers ---

interface DateBasedData {
  date: string; // YYYY-MM-DD
  sequence: number;
}

const getTodayString = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDateBasedSequence = (): number => {
    const stored = localStorage.getItem(DATE_BASED_KEY);
    if (!stored) return 1;

    try {
        const data: DateBasedData = JSON.parse(stored);
        if (data.date === getTodayString()) {
            return data.sequence;
        }
    } catch (error) {
        console.error("Error parsing date-based sequence data", error);
    }
    return 1; // Reset if date is old or data is corrupt
};

const setDateBasedSequence = (num: number): void => {
    const data: DateBasedData = {
        date: getTodayString(),
        sequence: num
    };
    localStorage.setItem(DATE_BASED_KEY, JSON.stringify(data));
};


// --- Generator Functions ---

/**
 * Generates the next sequential invoice number.
 * @param prefix - The custom prefix for the invoice number.
 * @param currentNumber - The current sequence number.
 * @returns The newly generated invoice number string.
 */
export const generateSequential = (prefix: string, currentNumber: number): string => {
  const nextNumber = currentNumber;
  setSequenceNumber(nextNumber + 1);
  const paddedNumber = nextNumber.toString().padStart(3, '0');
  return `${prefix}${paddedNumber}`;
};

/**
 * Generates a date-based invoice number (e.g., YYMMDD-XXX).
 * The sequence number resets daily.
 * @param prefix - The custom prefix for the invoice number.
 * @returns The newly generated invoice number string.
 */
export const generateDateBased = (prefix: string): string => {
  const today = new Date();
  const year = today.getFullYear().toString().slice(-2);
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const datePart = `${year}${month}${day}`;

  const currentSequence = getDateBasedSequence();
  setDateBasedSequence(currentSequence + 1);

  const paddedSequence = currentSequence.toString().padStart(3, '0');
  return `${prefix}${datePart}-${paddedSequence}`;
};

/**
 * Generates a random invoice number.
 * @param prefix - The custom prefix for the invoice number.
 * @param length - The length of the random part.
 * @returns A random invoice number string.
 */
export const generateRandom = (prefix: string, length: number = 7): string => {
  const randomPart = Math.random().toString(36).substring(2, 2 + length).toUpperCase();
  return `${prefix}${randomPart}`;
};
