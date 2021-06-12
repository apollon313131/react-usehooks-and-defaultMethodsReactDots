import React from "react";

let renderCount = 0;

export default React.memo(function IsFive({ value }) {
    console.warn(` IsFive render: ${++renderCount}`);

    const getResult = React.useMemo(() => {
        let i = 0;
        while (i < 600000000) i++; //TODO без него не зависает, это просто пример
        return value === 5 ? `Это пять :D` : 'Это не пять :('
    }, [value]);
    return (
        <h3>{getResult}</h3>
    )
}, (prevProps, nextProps) => {
    if (nextProps.value === 5) {
        return false;
    } else {
        return true;
    }
    // console.log(prevProps, nextProps);
}); //TODO Если value===5 сделай ререндер 

// export default React.memo(function IsFive({ value }) {
//     console.warn(` IsFive render: ${++renderCount}`);

//     const getResult = React.useMemo(() => {
//         let i = 0;
//         while (i < 600000000) i++; // без него не зависает, это просто пример
//         return value === 5 ? `Это пять :D` : 'Это не пять :('
//     }, [value]);
//     return (
//         <h3>{getResult}</h3>
//     )
// });

// function IsFive({ value }) {
//     console.warn(` IsFive render: ${++renderCount}`);

//     const getResult = React.useMemo(() => {
//         let i = 0;
//         while (i < 600000000) i++; // без него не зависает, это просто пример
//         return value === 5 ? `Это пять :D` : 'Это не пять :('
//     }, [value]);

    // () => {
    //     let i = 0;
    //     while (i < 600000000) i++; // без него не зависает, это просто пример
    //     return value === 5 ? `Это пять :D` : 'Это не пять :('
    // };

//     return (
//         <h3>{getResult}</h3>
//     )
// };