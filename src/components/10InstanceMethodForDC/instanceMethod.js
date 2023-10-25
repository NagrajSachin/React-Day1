import { useImperativeHandle, useRef, forwardRef } from 'react';

const ParentInstanceMethod = () => {
    const childRef = useRef();

    return (
        <>
            <h1>Inside Parent Component!</h1>
            <ChildComp ref={childRef} />
            <button onClick={() => {
                childRef.current.instanceMethod('Something from parent' + 123);
                childRef.current.anotherInstanceMethod(1400);
            }}>Button</button>
        </>
    )
};

export default ParentInstanceMethod;

// Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

// const ChildComp = () => {
//     function instanceMethod(data) {
//         console.log('Receiving data from the parent' + data);
//     }

//     return (
//         <h1>Inside Child Component!</h1>
//     )
// };

// Solution for the above warning, Wrap a child component in forwardRef
// use the useImperativeHandle hook in the child to add a function to the child
// call the child function from the parent component

const ChildComp = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        instanceMethod(data) {
            console.log('Receiving data from the parent' + data);
        },
        anotherInstanceMethod(data) {
            console.log('Another Instance Method', data);
        }
    }));

    return (
        <h1>Inside Child Component!</h1>
    )
});