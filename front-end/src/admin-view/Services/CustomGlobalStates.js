
// import React, { createContext } from 'react'


// const DataLayerContext = createContext()

// const CustomGlobalStates = (props) => {
//     console.log(props)
//   return (
//     <DataLayerContext.Provider value={props}>

//     </DataLayerContext.Provider>
//   )
// }

// export {DataLayerContext,CustomGlobalStates}

let Globalvalue = "hello"

function ChangeGlobalState(props)
{
    Globalvalue = props
}

export {Globalvalue,ChangeGlobalState}

