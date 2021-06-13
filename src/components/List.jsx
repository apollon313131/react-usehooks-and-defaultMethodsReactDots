import React, { useEffect, useState } from 'react';



// class List extends React.Component {
//     state = {
//         numbers: [1, 2, 3]
//     };

//     addRandomNumber = () => {
//         const randNumber = Math.round(Math.random() * 10)
//         this.setState({
//             numbers: [...this.state.numbers, randNumber]
//         }); //TODO обновляет в классовом компоненте 
//     };

//     componentDidMount() {
//         console.log('Компонент был отображен'); //TODO Выполнился при первом рендере
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log({ prevProps, prevState, nextProps: this.props, nextState: this.state }) //TODO компонент был обновлен
//         if (this.state.numbers.length !== prevState.numbers.length) {
//             console.log('Список чисел обновился')
//         }
//     }

//     componentWillUnmount() {
//         console.log('Компонент был удален')
//     }

//     render() {
//         return (
//             <>
//                 <h1>UseState</h1>
//                 <ul>
//                     {
//                         this.state.numbers.map((num, index) => (<li key={index}>{num}</li>)) //TODO компонент-список выводим через map
//                     }
//                 </ul>
//                 <button onClick={this.addRandomNumber}>Новое случайное число</button>
//                 <button onClick={null}>+1</button>
//                 <button onClick={null}>Очистить</button>
//                 {/* <button onClick={addNumber}>Новое случайное число</button>
//                 <button onClick={addNextNumber}>+1</button>
//                 <button onClick={clearNumbers}>Очистить</button> */}
//             </>
//         )
//     }
// }

const List = () => {

    const [numbers, setNumbers] = useState([1, 2, 3]);
    const [count, setcount] = useState(0);


    const addNumber = () => {
        const randNumber = Math.round(Math.random() * 10)
        const newArr = [...numbers, randNumber]
        setNumbers(newArr) //TODO добавить случайное число
        // numbers.push(4)
    }

    const addNextNumber = (newArr) => {
        let lastNumber = numbers[numbers.length - 1]
        let plusNumber = []
        if (numbers.length === 0) {
            numbers.push(1)
            lastNumber = numbers[numbers.length - 1]
            plusNumber = ++lastNumber
        }
        if (numbers.length > 1 && lastNumber >= 1) {
            plusNumber = ++lastNumber
        } else {
            plusNumber = lastNumber++
        }

        newArr = [...numbers, plusNumber]
        setNumbers(newArr) //TODO добавить следующее число
    }

    const clearNumbers = () => {
        setNumbers([]) //TODO сбросить
        // numbers.push(4)
    }

    useEffect(() => {
        console.log('Список чисел был обновлен');
        return () => {
            console.log('Will unmount'); //TODO componentWillUnmount
        }
    }, [numbers, count]); //TODO если пустой массив [] - это ComponentDidMount() не следим за переменными, рендер 1 раз, если не передавать ничего - значит, что useEffect будет выполнять каждый раз(перерендер или обновление)


    return (
        <>
            <h1>UseState+useEffect</h1>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>+</button>

            <ul>
                {
                    numbers.map((num, index) => (<li key={index}>{num}</li>)) //TODO компонент-список выводим через map
                }
            </ul>
            <button onClick={addNumber}>Новое случайное число</button>
            <button onClick={addNextNumber}>+1</button>
            <button onClick={clearNumbers}>Очистить</button>
        </>
    );
}

export default List