import React from 'react'

// Creating the user Context
const AmountContext = React.createContext()

const AmountProvider = AmountContext.Provider
const AmountConsumer = AmountContext.Consumer

export { AmountProvider, AmountConsumer }
