import { useEffect, useState } from 'react'

/** Live time in the studio's time zone, refreshed every 30 seconds. */
export function useClock(timeZone = 'Europe/Lisbon') {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date())
  const [time, setTime] = useState(format)

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone])

  return time
}
