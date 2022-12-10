import { Component, createRef, useState, useImperativeHandle, forwardRef } from 'react';

class MainComponent extends Component {
    myRef = createRef(); // create simple ref

    toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

    render() {
        return (
            <>
                <button onClick={this.toggleChildVisibility}>toggle child component</button>
                <ChildComponent ref={this.myRef} />  {/* set ref to controll child component */}
            </>
        );
    }
};

function ChildComponent(_, ref) {
    const [isActive, setIsActive] = useState(true);
    useImperativeHandle(ref, () => ({
        toggleButton: () => {
            setIsActive(!isActive);
        }
    }));
    return isActive ? <div >child component</div> : null
}
ChildComponent = forwardRef(ChildComponent);