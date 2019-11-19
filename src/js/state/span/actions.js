/* @flow */
import brim from "../../brim"

export const setOuterFromTime = (date: Date) => ({
  type: "OUTER_FROM_TIME_SET",
  date: brim.time(date).toTs()
})

export const setOuterToTime = (date: Date) => ({
  type: "OUTER_TO_TIME_SET",
  date: brim.time(date).toTs()
})

export const clearTimeWindows = () => ({
  type: "TIME_WINDOWS_CLEAR"
})
