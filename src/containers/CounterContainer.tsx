import React from "react";
import Counter from "../views/Counter";

type CounterContainerState = {
    count: number;
    enum: boolean;
};

type CounterContainerProp = {
    enum: boolean;
    action: string;
}

class CounterContainer extends React.Component<CounterContainerProp, CounterContainerState> {
    state: CounterContainerState;

    constructor(props: CounterContainerProp) {
        super(props);
        this.state = { count: 0, enum: this.props.enum };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState((state) => (
            { count: state.count + 1 }
        ));
    };

    decrement() {
        this.setState((state)=> (
            { count: state.count - 1}
        ))
    }

    reset() {
        this.setState(()=>(
            { count: 0 }
        ))
    }


    componentWillReceiveProps(nextProps: Readonly<CounterContainerProp>, nextContext: any): void {
        console.log('hihih')
        if (nextProps.action==='add'&& this.state.enum) {
            this.increment()
        } else if (nextProps.action==='reset') {
            this.reset()
        }
    }


    componentWillMount(): void {
        if (this.props.action==='add'&&this.state.enum) {
            this.increment()
        } 
    }


    render() {
        return (
            <Counter
                state={this.state.count}
                increment={this.increment}
                decrement={this.decrement}
                reset={this.reset}
            />
        )
    }

}

export default CounterContainer
