/*
Localtime
© 2016 Harald Rudell <c@haraldrudell.com> (http://haraldrudell.com) ISC license.
*/
import path from 'path'

export class AppLauncher {
  constructor() {
    console.log('\n\n\n=== %s %s:%s starting',
      this.getLocalIsoString(),
      path.basename(path.join(__dirname, '..')),
      process.pid)
  }

  getLocalIsoString() {
    var nowMsZ = Date.now() // ms
    var tzMinutesAddToLocalToZ = new Date().getTimezoneOffset() // min

    // get 2016-06-23T15:04:52
    var printsLocalTime =  nowMsZ - tzMinutesAddToLocalToZ * 6e4
    var result = new Date(printsLocalTime).toISOString()
    result = result.slice(0, -5) // drop period 3xms and Z

    // get -07 timezone offset
    var tzOffsetString = tzMinutesAddToLocalToZ > 0 ? '-' : '+'
    var tzPositiveMinutes = Math.abs(tzMinutesAddToLocalToZ)
    var tzMinutes = tzPositiveMinutes % 60
    var tzHours = String(tzPositiveMinutes / 60)
    tzOffsetString += tzHours.length < 2 ? '0' + tzHours : tzHours
    if (tzMinutes) {
      tzMinutes = String(tzMinutes)
      tzOffsetString += ':' + (tzMinutes.length < 2 ? '0' + tzMinutes : tzMinutes)
    }

    return result + tzOffsetString
  }
}
