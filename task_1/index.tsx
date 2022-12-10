import   { Component, memo } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

function areEqual(prevProps, nextProps) {
    if (JSON.stringify(prevProps) !== JSON.stringify(nextProps)) {
        return false;
    }

    return true;
}

// functional component
const FirstComponent = memo<IUser>( ({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
), (prevProps, nextProps)=> areEqual(prevProps, nextProps));

// functional component
const SecondComponent = memo<IProps>( ({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
), (prevProps, nextProps) => areEqual(prevProps.user, nextProps.user));

// class component
class ThirdComponent extends Component<IUser> {
    shouldComponentUpdate(prevProps, nextProps) {
        return areEqual(prevProps, nextProps);
    }
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// class component
class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(prevProps, nextProps) {
        return areEqual(prevProps?.user, nextProps?.user);
    }
    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}
