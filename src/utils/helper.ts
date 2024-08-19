export function generateToken() {
  return Math.random().toString(36).substring(2, 16)
}

export function formatDateTo24Hours(date: Date) {
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

export function maskPassword(password: string) {
  return '*'.repeat(password.length);
}
