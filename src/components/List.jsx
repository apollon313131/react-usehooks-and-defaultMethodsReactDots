import React, { useCallback, useEffect, useRef, useState } from 'react';

const List = () => {
    const ulRef = useRef();
    const [numbers, setNumbers] = useState([1, 2, 3]);
    const [count, setcount] = useState(0);
    const addNumber = () => {
        const randNumber = Math.round(Math.random() * 10)
        const newArr = [...numbers, randNumber]
        setNumbers(newArr) //TODO добавить случайное число
    }

    const addNextNumber = () => {
        if (numbers.length === 0) {
            setNumbers(prev => [...prev, 1])
        }
        setNumbers(prev => [...prev, prev[prev.length - 1] + 1])
    }

    const clearNumbers = () => {
        setNumbers([]) //TODO сбросить
    }

    useEffect(() => {
        console.log('Список чисел был обновлен');
        return () => {
            console.log('Will unmount'); //TODO componentWillUnmount
        }
    }, [numbers, count]); //TODO если пустой массив [] - это ComponentDidMount() не следим за переменными, рендер 1 раз, если не передавать ничего - значит, что useEffect будет выполнять каждый раз(перерендер или обновление)

    const handleScroll = () => {
        console.log('Был скролл');
    };

    useEffect(() => {
        ulRef.current.addEventListener('scroll', handleScroll);
    }, []);

    const removeScroll = useCallback(() => {
        ulRef.current.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <h1>UseState+useEffect+useRef</h1>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>+</button>
            <hr />
            <div className='ulList'>
                <ul ref={ulRef}>     {/* //TODO ссылка на элемент */}
                    {
                        numbers.length && numbers.map((num, index) => (<li key={index}>{num}</li>)) //TODO компонент-список выводим через map
                    }
                </ul>
            </div>
            <div className='ulButton'>
                <button onClick={addNumber}>Новое случайное число</button>
                <button onClick={addNextNumber}>+1</button>
                <button onClick={clearNumbers}>Очистить</button>
                <button onClick={removeScroll}>Не следить</button>
            </div>
        </>
    );
}

export default List



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


    // const addNextNumber = (newArr) => {
    //     // let lastNumber = numbers[numbers.length - 1]
    //     // // let plusNumber = []
    //     // // if (numbers.length === 0) {
    //     // //     numbers.push(1)
    //     // //     // lastNumber = numbers[numbers.length - 1]
    //     // //     // plusNumber = ++lastNumber
    //     // // }
    //     // // if (numbers.length > 1 && lastNumber >= 1) {
    //     // //     plusNumber = lastNumber + 1
    //     // // } else {
    //     // //     plusNumber = lastNumber++
    //     // // }
    //     // // newArr = [...numbers, lastNumber + 1]
    //     setNumbers(prev => [...prev, prev[prev.length - 1] + 1])

    //     // setNumbers(prev => { }) //TODO добавить следующее число
    // }



    // const handleScroll = () => {
    //     console.log('Был скролл');
    // }

    // useEffect(() => {
    //     ulElem = document.querySelector('ul')
    //     ulElem.addEventListener('scroll', handleScroll)
    // }, []);

    // const removeScroll = () => {
    //     ulElem.removeEventListener('scroll', handleScroll)
    // }