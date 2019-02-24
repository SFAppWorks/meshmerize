import React from 'react'

export const compose = (...functions) =>
  (startingArg) => functions.reduceRight((acc, current) =>
    current(acc), startingArg)